const qualifications = [
  "Visual Design using Adobe Photoshop 2023",
  "Graphic Design & Illustration using Adobe Illustrator 2023",
];

export default function Qualifications() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">保有資格</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {qualifications.map((qualification) => (
            <li
              key={qualification}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm text-slate-700"
            >
              {qualification}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
