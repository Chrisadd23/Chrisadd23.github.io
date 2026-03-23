import { Github, Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-gradient">connect</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          Interesse an einer Zusammenarbeit? Schreib mir gerne eine Nachricht.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:contact@christopherhaas.dev"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-display font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity shadow-glow"
          >
            <Mail className="w-4 h-4" />
            E-Mail senden
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Chrisadd23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-display font-semibold text-sm tracking-wide hover:bg-muted transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub Profil
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center text-muted-foreground text-xs font-body">
        © {new Date().getFullYear()} Christopher Michael Haas. Alle Rechte vorbehalten.
      </div>
    </section>
  );
};

export default ContactSection;
