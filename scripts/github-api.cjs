const https = require('https');
const { execSync } = require('child_process');

function getGitHubToken() {
  if (process.env.GITHUB_TOKEN) {
    return process.env.GITHUB_TOKEN;
  }
  try {
    const output = execSync('git credential fill', {
      input: 'protocol=https\nhost=github.com\n',
      stdio: ['pipe', 'pipe', 'ignore']
    }).toString();
    const token = output.match(/password=(.+)/)?.[1]?.trim();
    if (token) return token;
  } catch (err) {}
  throw new Error('GitHub token could not be retrieved from git credentials or GITHUB_TOKEN environment variable.');
}

function githubRequest(method, path, body = null) {
  const token = getGitHubToken();
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null;
    const req = https.request({
      hostname: 'api.github.com',
      path,
      method,
      headers: {
        'User-Agent': 'Antigravity-Issue-Bot',
        'Authorization': 'token ' + token,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        ...(payload ? { 'Content-Length': Buffer.byteLength(payload) } : {})
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = data ? JSON.parse(data) : {};
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(json);
          } else {
            reject(new Error(`GitHub API Error (${res.statusCode}): ${json.message || data}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function createIssue({ repo = 'ikeda-haruka/ikeda-haruka.github.io', title, body, labels = [], close = false }) {
  console.log(`Creating issue: "${title}"...`);
  const issue = await githubRequest('POST', `/repos/${repo}/issues`, {
    title,
    body,
    labels
  });
  console.log(`✓ Created Issue #${issue.number}: ${issue.html_url}`);

  if (close) {
    await githubRequest('PATCH', `/repos/${repo}/issues/${issue.number}`, {
      state: 'closed',
      state_reason: 'completed'
    });
    console.log(`✓ Closed Issue #${issue.number} as completed`);
  }
  return issue;
}

async function closeIssue({ repo = 'ikeda-haruka/ikeda-haruka.github.io', issueNumber, comment = '' }) {
  if (comment) {
    await githubRequest('POST', `/repos/${repo}/issues/${issueNumber}/comments`, { body: comment });
  }
  const issue = await githubRequest('PATCH', `/repos/${repo}/issues/${issueNumber}`, {
    state: 'closed',
    state_reason: 'completed'
  });
  console.log(`✓ Closed Issue #${issueNumber} as completed`);
  return issue;
}

module.exports = {
  getGitHubToken,
  githubRequest,
  createIssue,
  closeIssue
};
