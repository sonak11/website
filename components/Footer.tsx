export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] section-pad">
      <div className="max-site flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <div>
          <p
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            className="text-2xl font-light text-[var(--ink)]"
          >
            Sonakshi Sharma
          </p>
          <p className="label mt-2 text-[var(--ink-faint)]">
            Rutgers Honors College · CS + Data Science · Statistics Minor
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3">
          <div className="flex items-center gap-6">
            {[
              { label: "GitHub", href: "https://github.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "Email", href: "mailto:sonakshi@example.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="label text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors duration-300 underline-copper"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="label text-[var(--ink-faint)]">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
