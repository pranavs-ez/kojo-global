import Link from 'next/link'

const SERVICES = [
  { name: 'Content & Copy',          desc: 'Blog posts, case studies, email campaigns, press releases',               price: 'From 40,000 Kojo ($40)',   href: '/services/content-and-copy' },
  { name: 'Research & Intelligence', desc: 'Competitive landscapes, TAM/SAM/SOM, market entry analysis',              price: 'From 95,000 Kojo ($95)',   href: '/services/research' },
  { name: 'Presentations',           desc: 'Investor decks, board presentations, sales decks',                        price: 'From 180,000 Kojo ($180)', href: '/services/presentations' },
  { name: 'Design',                  desc: 'Social graphics, infographics, email templates, brand assets',            price: 'From 40,000 Kojo ($40)',   href: '/services/design' },
  { name: 'HR & Legal',              desc: 'Employment agreements, NDAs, privacy policy, handbooks',                  price: 'From 30,000 Kojo ($30)',   href: '/services/hr-and-legal' },
  { name: 'Language',                desc: 'Translation, localisation, transcription across 40+ languages',           price: 'From 25,000 Kojo ($25)',   href: '/services/language' },
]

export default function ServicesSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="services-heading"
    >
      <div className="kj-container">
        <p className="font-mono font-normal text-kj-lime uppercase mb-4" style={{ fontSize: '10px', letterSpacing: '3px' }}>
          SERVICES
        </p>
        <h2
          id="services-heading"
          className="font-sans font-normal text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] mb-12"
        >
          One brief. Any function.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col justify-between gap-4 p-5 rounded-[2px] min-h-[180px] transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              style={{
                background: 'rgba(80,80,96,0.12)',
                border: '0.3px solid rgba(248,248,242,0.07)',
              }}
            >
              <div className="flex flex-col gap-2">
                <p className="font-sans font-semibold text-[16px] text-kj-light">{s.name}</p>
                <p className="font-sans font-light text-[13px] leading-[1.6]" style={{ color: 'rgba(248,248,242,0.55)' }}>
                  {s.desc}
                </p>
              </div>
              <p className="font-mono text-[12px]" style={{ color: 'rgba(222,255,0,0.85)' }}>
                {s.price}
              </p>
            </Link>
          ))}
        </div>

        <Link
          href="/services/content-and-copy"
          className="inline-flex items-center gap-1 mt-8 font-mono text-[13px] text-kj-lime hover:opacity-70 transition-opacity"
        >
          Explore all services →
        </Link>
      </div>
    </section>
  )
}
