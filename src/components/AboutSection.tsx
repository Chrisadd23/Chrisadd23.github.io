import { Brain, Plane, BookOpen, Music, Cpu, Rocket } from "lucide-react";

const interests = [
  { icon: Plane, label: "Reisen" },
  { icon: Cpu, label: "Programmieren" },
  { icon: BookOpen, label: "Lesen" },
  { icon: Music, label: "Klavier" },
  { icon: Brain, label: "Astrophysik" },
  { icon: Rocket, label: "Neue Technologien" },
];

const getAge = () => {
  const birth = new Date(1997, 2, 31); // 31. März 1997
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
          Über mich
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          {getAge()} Jahre · Begeistert von Technologie & Wissenschaft
        </p>

        {/* Interests */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {interests.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass rounded-xl p-4 flex items-center gap-3 hover:bg-primary/5 transition-colors"
            >
              <Icon className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>

        {/* Vision */}
        <div className="glass rounded-xl p-8 space-y-5">
          <h3 className="font-display font-semibold text-lg text-secondary tracking-wide">
            Ingenieurinformatik · Sensorik · Neurotechnologie · Mensch-Maschine-Schnittstellen
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Mein besonderes Interesse gilt der Sensorik, der Signalverarbeitung sowie der
            Schnittstelle zwischen Mensch und Maschine. Langfristig strebe ich an, neuronale
            Prozesse des menschlichen Gehirns mit der Steuerung von Maschinen und robotischen
            Systemen zu verbinden.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Dabei fasziniert mich insbesondere die Frage, wie biologische Signale erfasst,
            interpretiert und in technische Handlungen übersetzt werden können — von intelligenten
            Sensorsystemen bis hin zu neurotechnologischen Interfaces.
          </p>

          <p className="text-foreground font-medium leading-relaxed border-l-2 border-secondary pl-4">
            🏆 Mein Anspruch ist es, visionäre Konzepte nicht nur theoretisch zu betrachten,
            sondern sie in praktische, funktionierende Technologien zu überführen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
