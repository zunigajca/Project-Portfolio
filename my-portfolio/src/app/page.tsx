// src/app/page.tsx
import { portfolioData } from "../data/portfolio";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 font-sans">
      {/* Hero Section */}
      <header className="mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">{portfolioData.name}</h1>
        <p className="text-xl text-indigo-600 font-medium mb-4">{portfolioData.role}</p>
        <p className="text-slate-600 leading-relaxed">{portfolioData.bio}</p>
      </header>

      {/* Languages and Frameworks Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Languages and Frameworks</h2>
        <div className="flex flex-wrap gap-2">
          {portfolioData.languages.map((language) => (
            <span key={language} className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md text-sm font-medium">
              {language}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Projects</h2>
        <div className="space-y-6">
          {portfolioData.projects.map((project) => (
            <div key={project.title} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded font-semibold">
                    {t}
                  </span>
                ))}
              </div>
              <a 
                href={project.github} 
                target="_blank" 
                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium underline"
              >
                View Repository →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}