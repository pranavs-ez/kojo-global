// HIW F1 — Hero | bg #1e1e1e | dot grid + gradient overlay
// Eyebrow "THE PROCESS" · H1 "Brief in[caret] / Business-ready output out." · Lead

import CaretMotif from '@/components/atoms/CaretMotif'

export default function HiwHeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#1e1e1e' }}
      aria-label="How It Works hero"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(80,80,96,0.45) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 72% 58% at 50% 50%, rgba(30,30,30,0.80) 0%, rgba(30,30,30,0.40) 50%, rgba(30,30,30,0) 100%)',
        }}
      />

      <div className="relative z-10 kj-container py-20 lg:py-28">
        {/* Eyebrow */}
        <p
          className="font-mono font-normal text-kj-lime uppercase mb-6"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
        >
          THE PROCESS
        </p>

        {/* H1 */}
        <h1
          className="font-sans font-semibold text-kj-light mb-6"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em', maxWidth: '900px' }}
        >
          Brief in<CaretMotif />
          <br />Business-ready output out.
        </h1>

        {/* Lead */}
        <p
          className="font-sans font-normal"
          style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(248,248,242,0.45)', maxWidth: '600px' }}
        >
          Here's exactly what happens between the two.
        </p>
      </div>

      {/* Section bottom border */}
      <div style={{ height: '1px', background: 'rgba(248,248,242,0.08)' }} />
    </section>
  )
}
