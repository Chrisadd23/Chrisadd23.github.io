import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    name: "Profile-Page",
    description: "3D-Profilseite mit interaktiven Animationen und modernem Design.",
    language: "JavaScript",
    url: "https://github.com/Chrisadd23/Profile-Page",
    color: "hsl(50, 90%, 55%)",
  },
  {
    name: "Flutter MealApp",
    description: "Rezepte-App mit Kategorien, Favoriten und Filteroptionen – gebaut mit Flutter.",
    language: "Dart",
    url: "https://github.com/Chrisadd23/Flutter_MealApp",
    color: "hsl(190, 95%, 50%)",
  },
  {
    name: "Flutter Cube",
    description: "Interaktiver 3D-Cube gebaut mit Flutter und C++ für performante Grafik-Rendering.",
    language: "C++ / Flutter",
    url: "https://github.com/Chrisadd23/flutter_cube",
    color: "hsl(262, 83%, 58%)",
  },
  {
    name: "Business Plan Lena Luna",
    description: "Webbasierter Businessplan mit responsivem Layout und professionellem Design.",
    language: "HTML",
    url: "https://github.com/Chrisadd23/business-plan-lena-luna",
    color: "hsl(330, 85%, 60%)",
  },
  {
    name: "Chatprojekt",
    description: "Java-basiertes Chat-System – Netzwerk-Programmierung und Client-Server-Architektur.",
    language: "Java",
    url: "https://github.com/Chrisadd23/Chatprojekt",
    color: "hsl(10, 80%, 55%)",
  },
  {
    name: "Portfolio Website",
    description: "Persönliche Portfolio-Website mit GitHub Pages und modernem Frontend.",
    language: "JavaScript",
    url: "https://github.com/Chrisadd23/Chrisadd23.github.io",
    color: "hsl(140, 70%, 45%)",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
          Projekte
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          Ausgewählte Projekte von meinem GitHub-Profil
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-3 h-3 rounded-full mt-1"
                  style={{ backgroundColor: project.color }}
                />
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>

              <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <span className="text-xs font-medium text-secondary font-display">
                {project.language}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Chrisadd23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all font-display text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            Alle Projekte auf GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
