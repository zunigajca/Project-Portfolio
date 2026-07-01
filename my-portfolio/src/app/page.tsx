// src/app/page.tsx
import Image from "next/image";
import { portfolioData } from "../data/portfolio";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 font-sans">
      <header className="mb-16 flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-bold theme-heading mb-2">{portfolioData.name}</h1>
          <p className="text-xl theme-accent font-medium mb-4">{portfolioData.role}</p>
          <p className="theme-muted leading-relaxed">{portfolioData.bio}</p>
        </div>

        <Image
          src="/profile1.jpg"
          alt="My profile"
          width={200}
          height={200}
          className="rounded-full object-cover shadow-lg"
        />
      </header>

      {/* Languages and Frameworks Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold theme-heading mb-4">Languages and Frameworks</h2>
        <div className="flex flex-wrap gap-2">
          {portfolioData.languages.map((language) => (
            <span key={language} className="theme-chip px-3 py-1 rounded-md text-sm font-medium">
              {language}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-bold theme-heading mb-6">Featured Projects</h2>
        <div className="space-y-6">
          {portfolioData.projects.map((project) => (
            <div key={project.title} className="theme-card border rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold theme-heading mb-2">{project.title}</h3>
              <p className="theme-muted mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="theme-chip text-xs px-2.5 py-1 rounded font-semibold">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                className="theme-accent hover:opacity-80 text-sm font-medium underline"
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