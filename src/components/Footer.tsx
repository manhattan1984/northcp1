function Footer() {
  return (
    <footer className="relative py-12 md:py-16 px-4 md:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left mb-6 md:mb-8">
          <div className="slide-up">
            <p className="text-[10px] tracking-[0.3em] uppercase font-light text-[#0A0A0A]/40">
              © 2025 Northbyte Systems
            </p>
          </div>

          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="mailto:hello@northbytesystems.com"
              className="text-xs tracking-wider font-light text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors break-all"
            >
              hello@northbytesystems.com
            </a>
          </div>

          <div className="flex justify-center md:justify-end gap-4 md:gap-6 slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#"
              className="text-[10px] tracking-[0.3em] uppercase font-light text-[#0A0A0A]/40 hover:text-[#0A0A0A]/70 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[10px] tracking-[0.3em] uppercase font-light text-[#0A0A0A]/40 hover:text-[#0A0A0A]/70 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>

        <div className="text-center pt-6 md:pt-8 border-t border-black/5 slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xs tracking-wide font-light text-[#0A0A0A]/30">
            Engineered Intelligence. Effortless Growth.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
