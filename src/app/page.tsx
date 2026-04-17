import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      <main className="max-w-4xl mx-auto py-12 px-6 lg:px-8">
        
        {/* Header Section */}
        <header className="mb-12 border-b-2 border-slate-200 pb-8">
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
            Arpan Rajesh Charola {/* [cite: 1] */}
          </h1>
          <h2 className="text-2xl font-medium text-blue-600 mb-4">
            Technical Support Manager & Aspiring Software Engineer {/* [cite: 6] */}
          </h2>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
            <a href="mailto:arpantech1130@gmail.com" className="hover:text-blue-600 transition-colors">arpantech1130@gmail.com {/* [cite: 2] */}</a>
            <span>•</span>
            <span>8108309883 {/* [cite: 2] */}</span>
            <span>•</span>
            <span>Rajkot / Morbi, Gujarat {/* [cite: 3] */}</span>
            <span>•</span>
            <a href="https://github.com/ArpanCharola" className="hover:text-blue-600 transition-colors">GitHub {/*  */}</a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest mb-4">Professional Summary {/* [cite: 5] */}</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            IT graduate with strong foundations in Java, SQL, and data-driven decision making {/* [cite: 6] */}. 
            Passionate about fintech and startup environments, with experience in full-stack development and machine learning projects {/* [cite: 7] */}. 
            Adept at working in unstructured environments, taking ownership, and delivering results through continuous learning and innovative problem-solving {/* [cite: 8] */}.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest mb-4">Technical Skills {/* [cite: 14] */}</h3>
          <div className="flex flex-wrap gap-2">
            {['Java', 'C++', 'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Flask', 'MySQL', 'PostgreSQL', 'MongoDB'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-700 shadow-sm">
                {skill}
              </span>
            ))} {/* [cite: 15, 17, 18, 19, 20, 21] */}
          </div>
        </section>

        {/* Project Work */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest mb-4">Project Work {/* [cite: 23] */}</h3>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-slate-900">Photorealistic Floral Synthesis (DCGAN) {/* [cite: 24] */}</h4>
                <span className="text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Apr 2025 {/* [cite: 26] */}</span>
              </div>
              <p className="text-slate-600 mb-4">Developed a machine learning model which generates photorealistic flower images using the Oxford 102 Flower Dataset. {/* [cite: 25, 27] */}</p>
              <div className="text-sm text-slate-500 font-medium">
                <span className="text-slate-800">Tech Stack:</span> Python, PyTorch, NumPy, Matplotlib, PIL, Scikit-learn {/* [cite: 28] */}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-slate-900">Heritage of India - Full-stack Website {/* [cite: 29] */}</h4>
                <span className="text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Jan 2025-Ongoing {/* [cite: 35] */}</span>
              </div>
              <p className="text-slate-600 mb-4">A full-stack interactive web platform to explore the diverse heritage, traditions, and cultures of Indian states and union territories. {/* [cite: 30, 31] */}</p>
              <div className="text-sm text-slate-500 font-medium">
                <span className="text-slate-800">Tech Stack:</span> React.js, Tailwind CSS, Node.js, Express.js, MongoDB/PostgreSQL {/* [cite: 32] */}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest mb-4">Education {/* [cite: 9] */}</h3>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
            <div>
              <h4 className="text-lg font-bold text-slate-900">B.Tech in Information Technology {/* [cite: 10] */}</h4>
              <p className="text-slate-600">Marwadi University, Rajkot {/* [cite: 10] */}</p>
            </div>
            <div className="text-right">
              <span className="block text-sm font-medium text-slate-400">2022-2026 {/* [cite: 10] */}</span>
              <span className="block text-sm font-bold text-blue-600 mt-1">CGPA: 8.09 {/* [cite: 10] */}</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}