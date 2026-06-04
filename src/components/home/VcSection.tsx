import Link from 'next/link'

export default function VcSection() {
  return (
    <section
      className="kj-section-border"
      style={{ background: '#1e1e1e' }}
    >
      <div className="kj-container py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-[760px]">
            <h2 className="font-sans font-regular text-[28px] text-kj-light leading-[1.2] tracking-[-0.02em]">
              Backed by a leading VC?
            </h2>
            <p className="font-sans text-[15px] text-kj-light/55 leading-[1.6]">
              Portfolio companies backed by our VC partners get 500,000 Kojo ($500) on first signup and a dedicated onboarding session — five times the standard allocation.
            </p>
          </div>
          <Link
            href="/vc-partners"
            className="shrink-0 inline-flex items-center gap-1 font-mono text-[13px] text-kj-lime hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            Check if your VC is a Kojo partner →
          </Link>
        </div>
      </div>
    </section>
  )
}
