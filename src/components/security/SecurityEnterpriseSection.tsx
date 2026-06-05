// Security F4 — Enterprise Workspace Controls | bg #1e1e1e
// 2×3 card grid

const CARDS = [
  {
    title: 'Dedicated workspace isolation',
    body: 'Enterprise accounts operate in a logically isolated workspace — separate from standard infrastructure. No shared resources with standard-tier accounts.',
  },
  {
    title: 'Single sign-on (SSO)',
    body: 'SAML 2.0 SSO with your identity provider (Okta, Azure AD, Google Workspace). Employee offboarding revokes Kojo access immediately via your IdP.',
  },
  {
    title: 'Role-based permissions',
    body: 'Four levels: Owner, Admin, Submitter, Viewer. Submitter can brief and review outputs but cannot purchase credits or export data. Viewer has read-only access to completed deliverables.',
  },
  {
    title: 'Audit log access',
    body: 'Full log of all account activity — briefs, approvals, credit purchases, downloads, and team actions. Exported on request or via API.',
  },
  {
    title: 'Custom data retention',
    body: 'Standard retention: 24 months post-delivery. Enterprise accounts configure custom periods to comply with internal data governance policies.',
  },
  {
    title: 'NDA with experts',
    body: 'All experts operate under confidentiality obligations covering brief content and deliverables. Enterprise accounts can request a client-specific NDA with the Kojo entity.',
  },
]

export default function SecurityEnterpriseSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#1e1e1e' }}
      aria-labelledby="security-enterprise-heading"
    >
      <div className="kj-container">

        <p className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          ENTERPRISE CONTROLS
        </p>

        <h2
          id="security-enterprise-heading"
          className="font-sans font-normal text-kj-light mb-3"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Enterprise workspace controls
        </h2>

        <p className="font-sans font-normal mb-10"
          style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(248,248,242,0.40)' }}>
          For Series C and D accounts engaging Kojo at scale:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="p-6"
              style={{
                background: 'rgba(80,80,96,0.08)',
                border: '0.5px solid rgba(248,248,242,0.07)',
                borderRadius: '2px',
              }}
            >
              <p className="font-sans font-semibold text-kj-light mb-3" style={{ fontSize: '15px', lineHeight: '1.4' }}>
                {c.title}
              </p>
              <p className="font-sans font-light" style={{ fontSize: '13px', lineHeight: '1.65', color: 'rgba(248,248,242,0.55)' }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
