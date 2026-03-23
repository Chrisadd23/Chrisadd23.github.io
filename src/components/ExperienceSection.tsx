import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Mercator-Leasing",
    role: "Softwareentwickler",
    period: "Jun 2025 – Nov 2025",
    description: "Entwicklung und Implementierung softwarebasierter Lösungen.",
    tags: ["Java", "Spring Boot", "Apache Camel", "Angular"],
  },
  {
    company: "Cheftresor · Solutio AG",
    role: "Softwareentwickler",
    period: "Nov 2024 – Mär 2025",
    description: "Entwicklung und Implementierung softwarebasierter Lösungen.",
    tags: ["Angular", "C#", "DDEV", "Flutter", "Laravel"],
  },
  {
    company: "MultaMedio",
    role: "Softwareentwickler",
    period: "Aug 2022 – Okt 2024",
    description: "Entwicklung und Implementierung softwarebasierter Lösungen mittels Flutter. Datenverwaltung mit Oracle, Firestore und Firebase.",
    tags: ["Flutter", "Firebase", "Firestore", "Oracle", "Figma", "GitLab", "Jira"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
          Berufserfahrung
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          Mein Werdegang in der Softwareentwicklung
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-gradient-primary shadow-glow" />

                <div className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-display font-semibold text-lg text-foreground">{exp.company}</h3>
                    <span className="text-secondary text-sm font-medium font-display">{exp.period}</span>
                  </div>
                  <p className="text-accent text-sm font-medium mb-2 flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
