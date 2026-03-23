import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import bewerbungsfoto from "@/assets/Bewerbungsfoto.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-hero rounded-full blur-md opacity-60" />
            <img
              src={bewerbungsfoto}
              alt="Christopher Michael Haas"
              className="relative w-32 h-32 rounded-full object-cover object-[70%_75%] border-2 border-muted"
            />
          </div>
        </div>

        <p className="text-secondary font-display font-medium text-sm tracking-[0.3em] uppercase mb-4">
          Software Developer · Werkstudent
        </p>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Christopher{" "}
          <span className="text-gradient">Michael Haas</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          Full-Stack & Mobile Developer mit Erfahrung in Flutter, Firebase, Spring Boot und Node.js.
          Leidenschaftlich für sauberen Code und moderne Architekturen.
        </p>

        {/* CTA & Social */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-display font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity shadow-glow"
          >
            Projekte ansehen
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border text-foreground font-display font-semibold text-sm tracking-wide hover:bg-muted transition-colors"
          >
            Kontakt
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/Chrisadd23" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="mailto:info@dev-haas.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
