import os
import glob
from PIL import Image

src_dir = r"C:\Users\Owner\Downloads"
dest_dir = r"C:\gitHub\portofolio\src\assets\dental"
os.makedirs(dest_dir, exist_ok=True)

# Find desktop and smartphone files
desktop_candidates = [f for f in glob.glob(os.path.join(src_dir, "*")) if "Desktop wireframe" in f and f.endswith(".png")]
mobile_candidates = [f for f in glob.glob(os.path.join(src_dir, "*")) if "Smartphone" in f and f.endswith(".png")]

if not desktop_candidates or not mobile_candidates:
    print("Files not found!", desktop_candidates, mobile_candidates)
    exit(1)

desktop_path = desktop_candidates[0]
mobile_path = mobile_candidates[0]

print("Loading Desktop image...")
d_img = Image.open(desktop_path)
print("Desktop size:", d_img.size)

print("Loading Mobile image...")
m_img = Image.open(mobile_path)
print("Mobile size:", m_img.size)

# Save full images (compressed PNG / high quality)
d_full_path = os.path.join(dest_dir, "dental-lp-desktop-full.png")
m_full_path = os.path.join(dest_dir, "dental-lp-mobile-full.png")
d_img.save(d_full_path, "PNG", optimize=True)
m_img.save(m_full_path, "PNG", optimize=True)
print("Saved full images.")

# 1. Desktop FV (Header + Hero) - (0, 0, 1440, 960)
fv_d = d_img.crop((0, 0, 1440, 960))
fv_d.save(os.path.join(dest_dir, "dental-lp-desktop-fv.png"), "PNG", optimize=True)
print("Saved desktop FV")

# 2. Mobile FV (Header + Hero) - (0, 0, 390, 844)
fv_m = m_img.crop((0, 0, 390, 844))
fv_m.save(os.path.join(dest_dir, "dental-lp-mobile-fv.png"), "PNG", optimize=True)
print("Saved mobile FV")

# 3. Benefits & Clinic Philosophy (y: 960 to 2450)
sec_benefits = d_img.crop((0, 960, 1440, 2450))
sec_benefits.save(os.path.join(dest_dir, "dental-lp-benefits.png"), "PNG", optimize=True)
print("Saved benefits & philosophy")

# 4. Job Description & Daily Schedule (y: 2450 to 4500)
sec_schedule = d_img.crop((0, 2450, 1440, 4500))
sec_schedule.save(os.path.join(dest_dir, "dental-lp-schedule.png"), "PNG", optimize=True)
print("Saved schedule & job description")

# 5. Staff & Interview & Atmosphere (y: 4500 to 6700)
sec_staff = d_img.crop((0, 4500, 1440, 6700))
sec_staff.save(os.path.join(dest_dir, "dental-lp-staff.png"), "PNG", optimize=True)
print("Saved staff & interview")

# 6. Education, Welfare & Requirements (y: 6700 to 9200)
sec_req = d_img.crop((0, 6700, 1440, 9200))
sec_req.save(os.path.join(dest_dir, "dental-lp-requirements.png"), "PNG", optimize=True)
print("Saved requirements & welfare")

# 7. FAQ & Final CTA & Footer (y: 9200 to 11086)
sec_cta = d_img.crop((0, 9200, 1440, d_img.height))
sec_cta.save(os.path.join(dest_dir, "dental-lp-cta.png"), "PNG", optimize=True)
print("Saved FAQ & final CTA")

print("All dental images processed successfully!")
