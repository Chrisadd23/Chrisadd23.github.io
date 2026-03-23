import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    name: "Progamier Challenge",
    description: "Programmier-Challenge mit kreativen Algorithmen und innovativen Lösungsansätzen.",
    language: "Flutter / Dart",
    url: "https://github.com/Chrisadd23/programming_challenge_deepCare",
    color: "hsl(50, 90%, 55%)",
  },
  {
    name: "Flutter MealApp",
    description: "Rezepte-App mit Kategorien, Favoriten und Filteroptionen – gebaut mit Flutter.",
    language: "Flutter / Dart",
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
    name: "Buy Epic",
    description: "Flutter-App zum Bestellen von Produkten mit modernem UI und Bestelllogik.",
    language: "Flutter / Dart",
    url: "https://github.com/Chrisadd23/dy-epick",
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
    name: "ProfilePage Version 1",
    description: "Persönliche Online-Profilseite mit modernem Design und responsivem Layout.",
    language: "Flutter / Dart",
    url: "https://github.com/Chrisadd23/online_profile",
    color: "hsl(140, 70%, 45%)",
  },
  {
    name: "Timer Backend",
    description: "Backend-Service für Timer-Funktionalitäten mit REST-API.",
    language: "NestJS / TypeScript",
    url: "https://github.com/SoftwareDev-X/prc-timer-backend",
    color: "hsl(30, 90%, 55%)",
  },
  {
    name: "WpfAppReturnOfSASHE",
    description: "WPF-Desktop-Anwendung mit C# und .NET für interaktive Benutzeroberflächen.",
    language: "C#",
    url: "https://github.com/Chrisadd23/WpfAppReturnOfSASHE",
    color: "hsl(280, 75%, 55%)",
  },
  {
    name: "Buy Epic Backend",
    description: "Backend-System mit dynamischer API-Architektur und modernem Tech-Stack.",
    language: "Node.js",
    url: "https://github.com/Chrisadd23/dy-epic-backend",
    color: "hsl(160, 80%, 45%)",
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
      </div>
    </section>
  );
};

export default ProjectsSection;
