const skillCategories = [
  {
    title: "Mobile / Frontend",
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Java"],
  },
  {
    title: "Cloud & DB",
    skills: ["Firebase", "Firestore", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "CI/CD", "Agile / Scrum"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
          Skills & Technologien
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          Mein Tech-Stack aus über 3 Jahren Berufserfahrung
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass rounded-xl p-6">
              <h3 className="font-display font-semibold text-sm text-secondary tracking-wider uppercase mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-muted text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
