// LP Post-Raise F5 — Social Proof | bg #212121
// Single pull quote

export default function LpProofSection() {
  return (
    <section
      style={{ background: '#212121', padding: '72px 0' }}
      aria-label="Social proof"
    >
      <div className="kj-container flex flex-col items-center text-center">

        <p className="font-sans" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', color: 'rgba(222,255,0,0.15)', lineHeight: 1, marginBottom: '-20px', fontFamily: 'serif' }}>&ldquo;</p>

        <blockquote style={{ maxWidth: '760px' }}>
          <p className="font-sans font-normal text-kj-light"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', lineHeight: '1.65', letterSpacing: '-0.01em' }}>
            We needed a competitive landscape for the board deck. I briefed it on Monday afternoon. It was in my inbox Tuesday morning — formatted, sourced, and ready to present.
          </p>
          <footer className="mt-5">
            <p className="font-mono font-normal"
              style={{ fontSize: '11px', color: 'rgba(248,248,242,0.35)', letterSpacing: '0.5px' }}>
              CMO, Series B SaaS company
            </p>
          </footer>
        </blockquote>

      </div>
    </section>
  )
}
