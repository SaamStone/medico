import Image from 'next/image';
import Link from 'next/link';
import { productConfig } from '../../lib/config';

function Logo() {
  return <span className="landing-mark" aria-hidden="true">✚</span>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="landing-eyebrow">{children}</p>;
}

export function HeaderSection() {
  return (
    <header className="landing-header">
      <div className="landing-wrap header-inner">
        <Link className="landing-brand" href="/" aria-label="Medico home"><Logo /><span>{productConfig.name}</span></Link>
        <nav aria-label="Main navigation">
          <a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#family">Family</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions"><Link href="/login">Sign in</Link><Link className="landing-button compact" href="/signup">Get started <span>↗</span></Link></div>
        <details className="landing-mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#family">Family health</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a><Link href="/login">Sign in</Link><Link href="/signup">Get started ↗</Link></nav>
        </details>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="hero-section landing-wrap">
      <div className="hero-copy">
        <Eyebrow><span className="eyebrow-dot" /> A PRODUCT PROTOTYPE</Eyebrow>
        <h1>Your health story,<br /><em>all in one place.</em></h1>
        <p>Medico brings your medical records, lab results, blood profiles and family health details together in one calm, trustworthy space — easy to use, and always yours.</p>
        <div className="hero-actions"><Link className="landing-button" href="/signup">Create your account <span>↗</span></Link><a className="quiet-link" href="#features">Explore features <span>↓</span></a></div>
        <div className="prototype-notes"><span>✓ Product prototype</span><span>✓ Sample information only</span><span>✓ Not medical advice</span></div>
      </div>
      <div className="hero-photo-wrap">
        <Image className="hero-photo" src="/images/organizing-records.jpeg" alt="A woman calmly organizing her health records at home" fill priority sizes="(max-width: 760px) 100vw, 50vw" />
        <div className="hero-photo-wash" />
        <div className="hero-image-caption"><span className="caption-dot" /><span>YOUR HEALTH, IN YOUR HANDS</span></div>
        <div className="hero-floating-card"><span className="float-icon">✳</span><div><b>One calm place</b><small>Records · Results · Family</small></div><span className="float-check">✓</span></div>
      </div>
      <div className="hero-bottomline"><span>A MORE COMPLETE HEALTH PICTURE</span><span>MADE TO GROW WITH YOU <i>✳</i></span></div>
    </section>
  );
}

const categories = [
  ['▤', 'Medical records', 'Visits, prescriptions and history, organised.'],
  ['⌁', 'Lab results', 'Tracked over time, easy to read.'],
  ['◉', 'Blood profiles', 'A separate card for every person.'],
  ['♡', 'Family health', 'Everyone’s details, kept together.'],
];

export function IntroSection() {
  return (
    <section className="intro-section landing-wrap" id="platform">
      <div className="section-heading-row"><div><Eyebrow>ONE CALM PLACE</Eyebrow><h2>Health, kept simply.<br /><em>Yours to understand.</em></h2></div><p>Medico helps you keep the pieces of your health story in one place — clear, readable and uncluttered. No jargon, no clutter, no stress. Just your records, results and the people you care about, organised with calm.</p></div>
      <div className="category-grid">{categories.map(([icon, title, text], index) => <article className="category-item" key={title}><span className={`category-icon tint-${index}`}>{icon}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      <div className="intro-image-card"><Image src="/images/health-flatlay.jpeg" alt="A bright flat-lay of sample health charts and personal wellness items" fill sizes="(max-width: 760px) 100vw, 42vw" /><div className="intro-image-shade" /><div className="intro-image-copy"><small>SAMPLE VIEW</small><b>4 profiles · 1 household</b><span>Each person has their own card.</span></div></div>
    </section>
  );
}

const steps = [
  ['01', 'Add your records', 'Upload or enter medical records, prescriptions and visit notes. Keep them tidy and searchable.'],
  ['02', 'Track your results', 'Log lab results and blood markers over time. Follow trends on a clear, calm timeline.'],
  ['03', 'Bring in your family', 'Create a separate profile for each person you care for. Keep everyone’s story organised.'],
  ['04', 'Turn on what you want', 'Enable the AI assistant or fitness connections only when you consent. Switch them off anytime.'],
];

export function JourneySection() {
  return (
    <section className="journey-section" id="how-it-works">
      <div className="journey-image"><Image src="/images/misty-lake.jpeg" alt="A serene misty forest lake at dawn" fill sizes="100vw" /><div /></div>
      <div className="landing-wrap journey-content"><Eyebrow>HOW MEDICO WORKS</Eyebrow><h2>Your health story,<br /><em>in four calm steps.</em></h2><p className="journey-intro">From your first record to a fuller family picture, Medico grows with you — gently, and always on your terms.</p><div className="steps-grid">{steps.map(([number, title, text]) => <article key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
    </section>
  );
}

const features = [
  {
    number: '01', label: 'MEDICAL RECORDS', icon: '▤',
    title: 'Every record, kept clearly',
    text: 'Diagnoses, prescriptions, visits and history — organised, searchable and ready when you need them.',
    image: '/images/records-folders.jpg',
    alt: 'A set of organized health record folders with a health information card',
    href: '/records', cta: 'Explore records',
  },
  {
    number: '02', label: 'LAB RESULTS', icon: '⌁',
    title: 'Results that make sense',
    text: 'Track results over time with clear, readable timelines. See how markers change at a glance.',
    image: '/images/health-results-chart.jpg',
    alt: 'A health trend chart beside a laboratory test tube',
    href: '/lab', cta: 'View lab results',
  },
  {
    number: '03', label: 'BLOOD PROFILES', icon: '◉',
    title: 'A card for every person',
    text: 'Each person gets their own blood profile card with key markers and trends — never mixed up.',
    image: '/images/connected-health-profiles.jpg',
    alt: 'Illustration showing separate health profile cards for several people',
    href: '/blood', cta: 'Explore blood profiles',
  },
  {
    number: '04', label: 'FAMILY HEALTH', icon: '♡',
    title: 'Everyone, together',
    text: 'Bring your family’s health details into one calm space, with a separate profile for each person.',
    image: '/images/family-health-at-home.jpg',
    alt: 'A family looking at health information together on a tablet at home',
    href: '/people', cta: 'Explore family profiles',
  },
];

export function FeaturesSection() {
  return (
    <section className="features-section landing-wrap" id="features">
      <div className="section-heading-centered"><Eyebrow>WHAT MEDICO DOES</Eyebrow><h2>Everything that matters,<br /><em>kept clearly.</em></h2><p>Four calm, connected spaces for your health — designed to be easy to use and easy to understand.</p></div>
      <div className="features-list">
        {features.map((feature, index) => (
          <article className={`feature-story${index % 2 === 1 ? ' feature-story-reverse' : ''}`} key={feature.number}>
            <div className="feature-story-copy">
              <div className="feature-story-meta"><span className="feature-story-number">{feature.number}</span><span className="feature-story-icon" aria-hidden="true">{feature.icon}</span><span className="feature-story-label">{feature.label}</span></div>
              <h3>{feature.title}</h3>
              <p className="feature-story-text">{feature.text}</p>
              <Link className="feature-story-link" href={feature.href}>{feature.cta}<span aria-hidden="true">↗</span></Link>
            </div>
            <div className="feature-story-image"><Image src={feature.image} alt={feature.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DashboardSection() {
  return (
    <section className="dashboard-section landing-wrap">
      <div className="dashboard-copy"><Eyebrow>A DASHBOARD YOU’LL ACTUALLY USE</Eyebrow><h2>Everything,<br /><em>at a glance.</em></h2><p>Medico’s dashboard brings your records, lab trends and family profiles together on one calm screen — clear, considered and easy to read.</p><ul><li><b>01</b><span><strong>One calm dashboard</strong><small>Records, results and profiles, together.</small></span></li><li><b>02</b><span><strong>Trends at a glance</strong><small>See how markers move over time.</small></span></li><li><b>03</b><span><strong>Consent up front</strong><small>Tools stay off until you choose.</small></span></li></ul><Link className="quiet-link" href="/dashboard">Explore the dashboard <span>↗</span></Link></div>
      <div className="dashboard-image-frame"><Image src="/images/medico-dashboard-reference.jpeg" alt="Medico dashboard preview with recent records, consent controls and family sharing status" fill sizes="(max-width: 760px) 100vw, 60vw" /><div className="dashboard-image-label"><i /> LIVE PREVIEW <span>Sample data</span></div></div>
    </section>
  );
}

const profiles = [
  { initials: 'AM', name: 'Alex Morgan', relation: 'You', values: [['Haemoglobin', '14.2 g/dL', 'Normal'], ['Vitamin D', '38 ng/mL', 'Watch'], ['Cholesterol', '4.8 mmol/L', 'Normal']] },
  { initials: 'JM', name: 'Jordan Morgan', relation: 'Partner', values: [['Haemoglobin', '13.6 g/dL', 'Normal'], ['Vitamin D', '52 ng/mL', 'Normal'], ['Cholesterol', '5.6 mmol/L', 'Watch']] },
  { initials: 'RM', name: 'Riley Morgan', relation: 'Child', values: [['Haemoglobin', '12.9 g/dL', 'Normal'], ['Vitamin D', '41 ng/mL', 'Normal'], ['Iron', '14 µmol/L', 'Watch']] },
];

export function ProfilesSection() {
  return (
    <section className="profiles-section landing-wrap" id="profiles">
      <div className="profiles-heading"><div><Eyebrow>A CARD FOR EVERY PERSON</Eyebrow><h2>Blood profiles,<br /><em>kept separate.</em></h2></div><p>Each person gets their own blood profile card with key markers and trends — never mixed up, always easy to find.</p></div>
      <div className="profile-grid">{profiles.map(profile => <article className="profile-card" key={profile.name}><header><span className="profile-avatar">{profile.initials}</span><span><b>{profile.name}</b><small>{profile.relation}</small></span><i>•••</i></header><div className="profile-values">{profile.values.map(([label, value, status]) => <div className="profile-value" key={label}><span><b>{label}</b><small>{value}</small></span><i className={status === 'Watch' ? 'watch' : ''}>{status}</i></div>)}</div><footer>Updated {profile.name === 'Alex Morgan' ? '3 days ago' : profile.name === 'Jordan Morgan' ? '2 weeks ago' : '1 month ago'}</footer></article>)}</div>
      <p className="sample-note">ⓘ Sample data shown for demonstration. Family profiles require a supported plan.</p>
    </section>
  );
}

export function FamilySection() {
  return (
    <section className="family-section" id="family">
      <div className="landing-wrap family-layout"><div className="family-copy"><Eyebrow>EVERYONE, TOGETHER</Eyebrow><h2>Family health,<br /><em>made simple.</em></h2><p>Bring your family’s health details into one calm space. Each person gets a separate profile and their own blood profile card — so the right information stays with the right person.</p><div className="family-benefits"><div><span>01</span><b>A profile for each person</b><small>Records, results and notes stay separate.</small></div><div><span>02</span><b>A blood profile card each</b><small>Markers tracked for the right person.</small></div><div><span>03</span><b>One shared timeline</b><small>See household health at a glance.</small></div></div><Link className="quiet-link" href="/pricing">See family plans <span>↗</span></Link></div><div className="family-photo"><Image src="/images/family-walk.jpeg" alt="A family walking together through an autumn park" fill sizes="(max-width: 760px) 100vw, 50vw" /><div className="family-household"><small>FAMILY PLAN</small><b>The Morgan household</b><span>Up to 6 people, each with their own profile.</span><div className="household-avatars"><i>AM</i><i>JM</i><i>RM</i><i>SM</i></div><Link href="/pricing">Explore family plans ↗</Link></div></div></div>
    </section>
  );
}

export function ToolsSection() {
  return (
    <section className="tools-section landing-wrap" id="consent">
      <div className="section-heading-centered"><Eyebrow>YOUR CONSENT, ALWAYS</Eyebrow><h2>Powerful tools,<br /><em>on your terms.</em></h2><p>AI and fitness app connections stay off until you choose to turn them on — and you can switch them off anytime.</p></div>
      <div className="tools-grid"><article className="tool-card"><div className="tool-icon">✳</div><small>AI HEALTH ASSISTANT</small><h3>Ask. Understand. Decide.</h3><p>Ask about your records, get plain-language summaries, and understand what your results show. The assistant only turns on with your consent.</p><ul><li>Plain-language summaries</li><li>Answers about your results</li><li>Always optional and reversible</li></ul><span className="consent-status"><i /> REQUIRES YOUR CONSENT</span></article><article className="tool-card fitness-tool"><div className="tool-icon">⌁</div><small>FITNESS APP CONNECTIONS</small><h3>Bring your everyday in</h3><p>Connect the apps you already use to sync steps, sleep and activity alongside your health records. You choose what to share.</p><ul><li>Sync steps, sleep and activity</li><li>See lifestyle next to lab results</li><li>You approve every connection</li></ul><span className="consent-status"><i /> REQUIRES YOUR CONSENT</span></article></div>
    </section>
  );
}

const testimonials = [
  ['P', 'Priya N.', 'Individual plan', '“I finally have one place for every result. No more folders full of PDFs — just calm, clear cards.”'],
  ['M', 'Marcus & Lila', 'Family plan', '“Each of our kids has their own blood profile card. It’s the organisation I didn’t know I needed.”'],
  ['D', 'Dana R.', 'Complete plan', '“The assistant explained my cholesterol trend in plain words. I turned it on, used it, turned it off.”'],
];

export function StoriesSection() {
  return (
    <section className="stories-section landing-wrap"><div className="section-heading-centered"><Eyebrow>CALM BY DESIGN</Eyebrow><h2>Loved for being<br /><em>uncomplicated.</em></h2><p>Sample testimonials for a product prototype — the kind of calm, clear experience Medico is built around.</p></div><div className="stories-grid">{testimonials.map(([initial, name, plan, quote]) => <article className="story-card" key={name}><span className="quote-mark">“</span><p>{quote}</p><footer><i>{initial}</i><span><b>{name}</b><small>{plan}</small></span></footer></article>)}</div></section>
  );
}

export function PricingSection() {
  const descriptions: Record<string, string> = { Free: 'A simple place to begin.', Basic: 'More room for your household.', Medium: 'More insight for your health.', High: 'A complete family space.' };
  const planKeys = Object.keys(productConfig.plans) as Array<keyof typeof productConfig.plans>;
  return (
    <section className="pricing-section landing-wrap" id="pricing"><div className="section-heading-centered"><Eyebrow>TRANSPARENT PRICING</Eyebrow><h2>Simple plans,<br /><em>clear choices.</em></h2><p>Start with the essentials and choose a larger plan when you need more profiles or tools.</p></div><div className="landing-plans">{planKeys.map((name, index) => { const plan = productConfig.plans[name]; return <article className={`landing-plan ${index === 2 ? 'plan-highlight' : ''}`} key={name}><div className="plan-topline"><b>{name}</b>{index === 2 && <span>POPULAR</span>}</div><p>{descriptions[name]}</p><div className="landing-price"><strong>₹{plan.priceYearly}</strong><span>{plan.priceYearly === 0 ? 'forever' : '/ year'}</span></div><ul><li>{plan.people} {plan.people === 1 ? 'person' : 'people'} profile</li><li>{plan.blocks} record blocks</li><li>{plan.aiCredits ? `${plan.aiCredits} AI credits` : 'Private record space'}</li></ul><Link href={name === 'Free' ? '/signup' : '/pricing'}>{name === 'Free' ? 'Start for free' : 'View plan'} <span>↗</span></Link></article>; })}</div><p className="pricing-disclaimer">Sample prototype pricing. No payment is taken. <Link href="/pricing">Compare plan details ↗</Link></p></section>
  );
}

export function FaqSection() {
  const items = [
    ['Is Medico a real medical product?', 'This is a product prototype. It is not a clinical service and does not provide medical advice. Use sample information only.'],
    ['Can I add my family to my account?', 'Family profiles are part of supported plans in this prototype. Each profile is shown separately.'],
    ['How does the AI health assistant work?', 'The assistant is optional and uses demo sample responses. It does not diagnose or replace a clinician.'],
    ['Can I connect my fitness tracker?', 'Fitness app connections are planned and require your explicit permission.'],
    ['Is my health data secure?', 'This prototype is not intended for real medical data. Review the privacy information before using the demo.'],
    ['Can I cancel or change my plan?', 'Plan and billing options are demonstrations. No payment is taken by this prototype.'],
  ];
  return <section className="faq-section landing-wrap" id="faq"><div className="faq-heading"><Eyebrow>A FEW USEFUL DETAILS</Eyebrow><h2>Questions,<br /><em>answered.</em></h2><p>Clear information about the Medico prototype.</p></div><div className="faq-list">{items.map(([question, answer]) => <details key={question}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div></section>;
}

export function ClosingSection() {
  return <section className="closing-section" id="start-health-story"><div className="closing-panel"><div className="closing-noise" aria-hidden="true"><svg viewBox="0 0 320 180" preserveAspectRatio="none"><filter id="closing-grain"><feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#closing-grain)" opacity=".26" /></svg></div><div className="landing-wrap closing-inner"><div><Eyebrow>START YOUR HEALTH STORY</Eyebrow><h2>Bring your health into<br /><em>one calm place.</em></h2><p>Create a free account and start organising your records, results and profiles. Sample information only — not medical advice.</p></div><div className="closing-actions"><Link className="closing-action-button closing-primary-button" href="/signup">Create your account</Link><Link className="closing-action-button closing-secondary-button" href="/login">Sign in</Link></div></div></div></section>;
}

export function FooterSection() {
  return (
    <footer className="landing-footer">
      <div className="landing-wrap footer-main">
        <div className="footer-brand-column">
          <Link className="landing-brand" href="/"><Logo /><span>{productConfig.name}</span></Link>
          <p>A calm, trustworthy place to keep your medical records, lab results, blood profiles and family health details — together.</p>
          <small className="footer-status"><i aria-hidden="true" />PRODUCT PROTOTYPE · SAMPLE DATA</small>
        </div>
        <nav className="footer-columns" aria-label="Footer">
          <div className="footer-link-group"><b>Explore</b><Link href="/#features">Features</Link><Link href="/dashboard">Dashboard</Link><Link href="/#profiles">Blood profiles</Link><Link href="/#family">Family health</Link><Link href="/#pricing">Pricing</Link></div>
          <div className="footer-link-group"><b>Your account</b><Link href="/login">Sign in</Link><Link href="/signup">Create account</Link></div>
          <div className="footer-link-group"><b>Information</b><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms &amp; disclaimer</Link><Link href="/disclaimer">Health disclaimer</Link><Link href="/#faq">Questions</Link></div>
        </nav>
      </div>
      <div className="landing-wrap footer-wordmark" aria-hidden="true">{productConfig.name}</div>
      <div className="landing-wrap footer-bottom"><span>© 2026 {productConfig.name}. A product prototype.</span><span>Made for calmer health <i>✳</i></span></div>
    </footer>
  );
}
