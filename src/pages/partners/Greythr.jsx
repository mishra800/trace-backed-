import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import './Greythr.css';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';

const greythrUseCases = [
  { id: 'it',            category: 'IT & SOFTWARE',  icon: 'fas fa-laptop-code',    title: 'IT & Software Companies (Payroll & Hybrid Workforce Management)',  description: 'IT companies require efficient employee management, payroll automation, and attendance tracking for large teams and hybrid work environments.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#greythr-it' },
  { id: 'manufacturing', category: 'MANUFACTURING',  icon: 'fas fa-industry',       title: 'Manufacturing Industry (Shift & Payroll Processing)',               description: 'Manufacturing companies require efficient attendance, shift management, and payroll processing for factory workers and staff.',              image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#greythr-manufacturing' },
  { id: 'education',     category: 'EDUCATION',      icon: 'fas fa-graduation-cap', title: 'Education Sector (Faculty & Staff HR Management)',                  description: 'Educational institutions require centralized HR systems for faculty, administration staff, payroll, and leave management.',              image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#greythr-education' },
  { id: 'healthcare',    category: 'HEALTHCARE',     icon: 'fas fa-hospital',       title: 'Healthcare Sector (Shift-Based Employee HR)',                       description: 'Hospitals require efficient HR operations for doctors, nurses, administrative teams, and shift-based employees.',                       image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#greythr-healthcare' },
  { id: 'retail',        category: 'RETAIL',         icon: 'fas fa-shopping-cart',  title: 'Retail Sector (Multi-Location Employee Management)',                description: 'Retail businesses require centralized employee management across multiple store locations.',                                          image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#greythr-retail' },
  { id: 'enterprise',    category: 'ENTERPRISE',     icon: 'fas fa-building',       title: 'Enterprises & SMEs (Modern HR & Payroll Automation)',               description: 'Organizations require modern HR systems to replace manual HR and payroll processes.',                                                  image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#greythr-enterprise' },
  { id: 'startup',       category: 'STARTUP',        icon: 'fas fa-rocket',         title: 'Startups & Growing Businesses (Scalable HR Solutions)',             description: 'Growing companies require affordable and scalable HR solutions to manage employees efficiently.',                                     image: '/assets/images/use-cases/usecase1.png', linkTo: '/case-studies#greythr-startup' },
];

const awardNums = ['1','2','3','4','5','6','7','11','12','13','14','15','16','17','18','19'];

const whyTraceCards = [
  { img: 'certified',         title: 'Multi-vendor, Certified Network Security Expertise',  body: 'Partnering with 40+ global OEMs, Trace Network offers multi-vendor cybersecurity and network solutions that are future-proof, scalable, and tailored to your exact IT security needs.' },
  { img: 'leadership',        title: '20+ Years of Cybersecurity Leadership',               body: 'With two decades of proven expertise, we provide penetration testing, vulnerability assessments, and enterprise IT security solutions for Top Campuses, GCCs, data centres, and enterprises across India.' },
  { img: 'luxury',            title: 'Customer-First, Value-Driven',                        body: 'Our cost-effective cybersecurity services ensure maximum protection with right-sized solutions, reducing risks and delivering the lowest total cost of ownership (TCO) for businesses.' },
  { img: 'technical-support', title: 'Local Presence with Rapid IT Support',                body: 'Trace Network engineers are available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag, ensuring quick on-site support and reliable network security services whenever you need them.' },
  { img: 'iso-certificate',   title: 'ISO 27001-Certified Cybersecurity Provider',          body: 'As an ISO 27001-certified company, we follow stringent change management and compliance practices, aligning with global information security standards to protect your business.' },
  { img: 'frame',             title: 'Proven Cybersecurity Deployment Framework',           body: 'Our structured approach, Assess, Design, Deploy, Optimise, Support, minimises downtime, enhances performance, and ensures maximum ROI from your IT and cybersecurity investments.' },
  { img: 'agile',             title: 'Flexible MSSP & Security Pricing Models',            body: "Choose from CapEx, OpEx, or Managed Security Service Provider (MSSP) models to align IT security investments with your organisation's business goals and cash-flow requirements." },
];

export default function Greythr() {
  useAwardsSlider();
  const seoData = getSEOData('partnerGreythr');
  return (
    <div className="greythr-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* ── HERO ── */}
      <section className="greythr-hero gt-hero-purple">

        {/* Animated background */}
        <div className="gt-hero-anim-bg" aria-hidden="true">
          <div className="gt-hero-grid-lines"></div>
          <div className="gt-hero-orb gt-hero-orb-1"></div>
          <div className="gt-hero-orb gt-hero-orb-2"></div>
          <div className="gt-hero-orb gt-hero-orb-3"></div>
          <div className="gt-hero-orb gt-hero-orb-4"></div>
          {[...Array(18)].map((_, i) => (
            <span key={i} className={`gt-hero-particle-dot gt-hdot-${i + 1}`}></span>
          ))}
          <div className="gt-hero-scan-beam"></div>
          <div className="gt-hero-ring gt-hero-ring-1"></div>
          <div className="gt-hero-ring gt-hero-ring-2"></div>
        </div>

        <div className="container">

          {/* Two-column grid */}
          <div className="gt-hero-grid">

            {/* LEFT */}
            <div className="gt-hero-left" data-aos="fade-right" data-aos-duration="900">

              {/* Eyebrow */}
              <div className="gt-hero-eyebrow">
                <span className="gt-eyebrow-line"></span>
                <span className="gt-eyebrow-text">HR &amp; PAYROLL SOLUTIONS</span>
              </div>

              {/* Headline */}
              <h1 className="greythr-hero-title">
                Leading greytHR<br />
                <span className="greythr-gradient-text">Solutions Partner</span>
              </h1>

              {/* Description */}
              <p className="greythr-hero-desc">
                Cloud-based HR and Payroll solutions that help organizations
                automate operations, streamline payroll, and drive employee
                engagement.
              </p>

              {/* CTAs */}
              <div className="gt-hero-ctas">
                <Link to="/contact-us" className="gt-cta-primary">
                  Get Free Demo <i className="fas fa-arrow-right"></i>
                </Link>
                <a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer" className="gt-cta-secondary">
                  <i className="fas fa-phone-alt"></i> WhatsApp Us
                </a>
              </div>

            </div>

            {/* RIGHT — big blended image + feature row below */}
            <div className="gt-hero-right" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">

              {/* Image */}
              <div className="gt-hero-img-blend">
                <div className="gt-img-accent gt-acc-top-left"><i className="fas fa-users"></i></div>
                <div className="gt-img-accent gt-acc-top-right"><i className="fas fa-shield-alt"></i></div>
                <div className="gt-img-accent gt-acc-mid-right"><i className="fas fa-calculator"></i></div>
                <div className="gt-img-accent gt-acc-bot-right"><i className="fas fa-chart-bar"></i></div>
                <div className="gt-img-accent gt-acc-mid-left"><i className="fas fa-file-alt"></i></div>
                <img loading="lazy"
                  src="/assets/hr.png"
                  alt="greytHR HR Dashboard"
                  className="gt-dashboard-img gt-img-blended"
                />
              </div>

              {/* Feature icons — below the image */}
              <div className="gt-hero-features-row gt-features-below-img">
                <div className="gt-hero-feat">
                  <div className="gt-hero-feat-icon"><i className="fas fa-cloud"></i></div>
                  <div className="gt-hero-feat-body">
                    <strong>Cloud-Based</strong>
                    <span>Secure, scalable &amp; accessible from anywhere.</span>
                  </div>
                </div>
                <div className="gt-hero-feat">
                  <div className="gt-hero-feat-icon"><i className="fas fa-cogs"></i></div>
                  <div className="gt-hero-feat-body">
                    <strong>Automate HR</strong>
                    <span>Streamline HR processes and reduce manual work.</span>
                  </div>
                </div>
                <div className="gt-hero-feat">
                  <div className="gt-hero-feat-icon"><i className="fas fa-shield-alt"></i></div>
                  <div className="gt-hero-feat-body">
                    <strong>Compliant</strong>
                    <span>Stay compliant with local laws and standards.</span>
                  </div>
                </div>
                <div className="gt-hero-feat">
                  <div className="gt-hero-feat-icon"><i className="fas fa-users"></i></div>
                  <div className="gt-hero-feat-body">
                    <strong>Engage Employees</strong>
                    <span>Boost productivity and employee satisfaction.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>



        </div>
      </section>

      {/* Career CTA */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-users"></i><span>FREE HR CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Streamline Your HR Operations?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three HR process gaps in your current system</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to improve employee experience and compliance</span></div>
            <div className="partner-cta-point"><i className="fas fa-calendar-alt"></i><span>An exact timeline &amp; cost estimate — no obligations</span></div>
          </div>
          <div className="partner-cta-actions">
            <a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer" className="partner-cta-primary"><i className="fab fa-whatsapp"></i> Book Your Free Strategy Call</a>
            <a href="/contact-us" className="partner-cta-secondary"><i className="fas fa-envelope"></i> Send Us a Message</a>
          </div>
        </div>
        <div className="partner-cta-glow-l" aria-hidden="true"></div>
        <div className="partner-cta-glow-r" aria-hidden="true"></div>
      </section>

      <UseCaseSlider
        useCases={greythrUseCases}
        partnerColor="#AA00EA"
        title="greytHR Use Cases"
        subtitle="Successfully implemented by Trace Network across diverse industry sectors"
      />

      {/* Awards */}
      <section className="awards-section">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">Awards</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <h2 className="section-title__title">
            Recognized &amp; Trusted <span>for Delivering </span>
            <br />Value &amp; Excellence
          </h2>
        </div>
        <div className="awards-slider">
          <div className="awards-track">
            <div className="award-card"><img loading="lazy" src="/assets/images/award/1.png" alt="Sophos Best Performing Partner (2024)" /><span>Sophos Best Performing Partner (2024)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/2.png" alt="Certification of Completion Aruba Instant (2023)" /><span>Certification of Completion Aruba Instant (2023)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/3.png" alt="Core Champion HPE Aruba Networking (2023)" /><span>Core Champion HPE Aruba Networking (2023)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/4.png" alt="Sophos Top Performer of the Region" /><span>Sophos Top Performer of the Region</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/5.png" alt="Sophos Best Solution Partner" /><span>Sophos Best Solution Partner</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/6.png" alt="Certified by SonicWall (2022)" /><span>Certified by SonicWall (2022)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/7.png" alt="HPE Aruba Accelerating Next (2022)" /><span>HPE Aruba Accelerating Next (2022)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/11.png" alt="Sophos Best Top Performing Partner (2020)" /><span>Sophos Best Top Performing Partner (2020)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/12.png" alt="Sophos Platinum Partner (2019)" /><span>Sophos Platinum Partner (2019)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/13.png" alt="Sophos Best Performing Partner (2018)" /><span>Sophos Best Performing Partner (2018)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/14.png" alt="Sophos Best Solution Partner (2018)" /><span>Sophos Best Solution Partner (2018)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/15.png" alt="Sophos Best Solution Partner (2017)" /><span>Sophos Best Solution Partner (2017)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/16.png" alt="Sophos Best Solution Partner (2016)" /><span>Sophos Best Solution Partner (2016)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/17.png" alt="Sophos Highest Achiever Business Partner (2015)" /><span>Sophos Highest Achiever Business Partner (2015)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/18.png" alt="Cyberoam Authorized Goal Partner (2015)" /><span>Cyberoam Authorized Goal Partner (2015)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/19.png" alt="Sophos Top Performer Of the Region" /><span>Sophos Top Performer Of the Region</span></div>
          </div>
        </div>
      </section>

      {/* Why Leading Brands */}
      <section className="premium-cards-section" style={{ marginTop: '-20px' }}>
        <div className="premium-container">
          <div className="section-title text-center pb-4">
            <h2 className="section-title__title">
              Why Leading<span> Brands</span> Choose<span> Trace</span>
            </h2>
          </div>
          <div className="premium-card-grid">
            {whyTraceCards.map((card) => (
              <div className="premium-service-card" key={card.img}>
                <div className="premium-icon-wrapper">
                  <img loading="lazy" src={`/assets/images/${card.img}.png`} alt={card.title} title={card.title} />
                </div>
                <p><strong>{card.title}</strong> {card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <div className="gt-section-divider" aria-hidden="true"></div>
      <section className="greythr-special-offer" data-aos="fade-up" data-aos-duration="900">
        <div className="container">
          <div className="greythr-offer-card gt-offer-no-img">

            <div className="greythr-offer-glow-left"  aria-hidden="true"></div>
            <div className="greythr-offer-glow-right" aria-hidden="true"></div>
            <div className="greythr-offer-stars" aria-hidden="true">
              <span className="gt-star gt-star-1">&#10022;</span>
              <span className="gt-star gt-star-2">&#10022;</span>
              <span className="gt-star gt-star-3">&#10022;</span>
              <span className="gt-star gt-star-4">&#10022;</span>
            </div>

            {/* Full-width centered content — no image */}
            <div className="greythr-offer-content gt-offer-content-full">

              <div className="greythr-offer-badge">
                <i className="fas fa-sparkles"></i>&nbsp; SPECIAL OFFER
              </div>

              <h2 className="greythr-offer-title">
                <span className="greythr-offer-free">FREE</span> Trial &amp; Assessment
              </h2>

              <div className="greythr-offer-pill">
                <span className="greythr-offer-pill-dot"></span>
                EXCLUSIVE OFFERS ON GREYTHR SOFTWARE
                <span className="greythr-offer-pill-dot"></span>
              </div>

              <p className="greythr-offer-desc">
                Experience the power of greytHR firsthand with zero risk and zero commitment.
                Our team will set up a complete HR process assessment tailored to your organization
                so you can see the results before you invest.
              </p>

              {/* Feature grid — 4 columns */}
              <div className="greythr-offer-grid gt-offer-grid-4col">
                {[
                  { icon: 'fas fa-file-alt',      label: 'FREE HR Process Assessment'      },
                  { icon: 'fas fa-desktop',        label: 'Guided Software Demo'            },
                  { icon: 'fas fa-people-arrows',  label: 'Seamless Migration Consultation' },
                  { icon: 'fas fa-headset',        label: 'Priority Implementation Support' },
                ].map((pt) => (
                  <div className="greythr-offer-feature" key={pt.label}>
                    <div className="greythr-offer-feat-icon"><i className={pt.icon}></i></div>
                    <span>{pt.label}</span>
                    <div className="greythr-offer-feat-bar"></div>
                  </div>
                ))}
              </div>

              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">Get Expert Guidance for:</span>
                <div className="greythr-offer-modules-list">
                  {['Core HR', 'Payroll Automation', 'Leave & Attendance', 'Employee Self-Service'].map((m, i) => (
                    <React.Fragment key={m}>
                      <span className="greythr-offer-module">
                        <i className="fas fa-shield-alt"></i> {m}
                      </span>
                      {i < 3 && <span className="greythr-offer-sep">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <Link to="/contact-us" className="greythr-contact-btn">
                <i className="fas fa-paper-plane"></i>
                &nbsp; CONTACT TRACE NETWORK &nbsp;&#8594;
              </Link>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
