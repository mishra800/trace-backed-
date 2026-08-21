import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Peoplelink.css';

const peoplelinkUseCases = [
  {
    id: 'defence',
    category: 'DEFENCE',
    icon: 'fas fa-shield-alt',
    title: 'Defence Sector (Secure Communication Infrastructure)',
    description: 'Problem: Defence organizations require secure and reliable communication systems for coordination across multiple locations and departments.',
    image: '/assets/images/use-cases/usecase1.png',
    linkTo: '/case-studies#peoplelink-defence'
  },
  {
    id: 'education',
    category: 'EDUCATION',
    icon: 'fas fa-graduation-cap',
    title: 'Education Sector (Smart Classrooms & Virtual Learning)',
    description: 'Problem: Educational institutions require reliable platforms for online classes, hybrid learning, and virtual collaboration.',
    image: '/assets/images/use-cases/usecase2.png',
    linkTo: '/case-studies#peoplelink-education'
  },
  {
    id: 'retail',
    category: 'RETAIL',
    icon: 'fas fa-shopping-cart',
    title: 'Retail Sector (Multi-Branch Communication)',
    description: 'Problem: Retail organizations require centralized communication between branches, corporate offices, and operational teams.',
    image: '/assets/images/use-cases/usecase3.png',
    linkTo: '/case-studies#peoplelink-retail'
  },
  {
    id: 'banking',
    category: 'BANKING',
    icon: 'fas fa-university',
    title: 'Banking Sector (Secure Enterprise Collaboration)',
    description: 'Problem: Banks require secure conferencing systems for executive meetings, remote collaboration, and customer engagement.',
    image: '/assets/images/use-cases/usecase4.png',
    linkTo: '/case-studies#peoplelink-banking'
  },
  {
    id: 'healthcare',
    category: 'HEALTHCARE',
    icon: 'fas fa-hospital',
    title: 'Healthcare Sector (Telemedicine & Hospital Collaboration)',
    description: 'Problem: Hospitals and healthcare providers require reliable communication systems for telemedicine, remote consultation, and staff collaboration.',
    image: '/assets/images/use-cases/usecase5.png',
    linkTo: '/case-studies#peoplelink-healthcare'
  },
  {
    id: 'enterprise',
    category: 'ENTERPRISE',
    icon: 'fas fa-building',
    title: 'Large Enterprises (Hybrid Workplace Collaboration)',
    description: 'Problem: Enterprises require scalable collaboration platforms to support hybrid work environments and distributed teams.',
    image: '/assets/images/use-cases/usecase6.png',
    linkTo: '/case-studies#peoplelink-enterprise'
  },
  {
    id: 'manufacturing',
    category: 'MANUFACTURING',
    icon: 'fas fa-industry',
    title: 'Manufacturing Industry (Plant-to-HQ Collaboration)',
    description: 'Problem: Manufacturing organizations require real-time communication between factory floors, production units, and corporate offices.',
    image: '/assets/images/use-cases/usecase7.png',
    linkTo: '/case-studies#peoplelink-manufacturing'
  }
];

export default function Peoplelink() {
  useAwardsSlider();
  const seoData = getSEOData('partnerPeoplelink');
  return (
    <div className="peoplelink-page pl2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* ── PeopleLink Premium Hero ── */}
      <section className="pl2-hero">
        <div className="pl2-hero-bg" aria-hidden="true"></div>
        <div className="pl2-hero-glow-left" aria-hidden="true"></div>
        <div className="pl2-hero-glow-right" aria-hidden="true"></div>

        <div className="pl2-hero-inner container">

          {/* LEFT CONTENT */}
          <div className="pl2-left" data-aos="fade-right" data-aos-duration="900">

            <h1 className="pl2-headline">
              Trusted PeopleLink Audio<br />
              &amp; Video Conferencing<br />
              <span className="pl2-headline-accent">Partner</span>
            </h1>
            <div className="pl2-headline-rule"></div>

            <p className="pl2-desc">
              Enterprise video conferencing, smart meeting rooms, unified collaboration,
              and hybrid workplace solutions - delivered by{' '}
              <a href="/contact-us" className="pl2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="pl2-feature-row">
              <div className="pl2-feat">
                <div className="pl2-feat-icon"><i className="fas fa-video"></i></div>
                <div className="pl2-feat-body">
                  <strong>HD Conferencing</strong>
                  <span>Crystal-clear enterprise video for every room.</span>
                </div>
              </div>
              <div className="pl2-feat">
                <div className="pl2-feat-icon"><i className="fas fa-lock"></i></div>
                <div className="pl2-feat-body">
                  <strong>Secure &amp; Encrypted</strong>
                  <span>Enterprise-grade encrypted communication.</span>
                </div>
              </div>
              <div className="pl2-feat">
                <div className="pl2-feat-icon"><i className="fas fa-expand-arrows-alt"></i></div>
                <div className="pl2-feat-body">
                  <strong>Scalable Platform</strong>
                  <span>Grow from SMBs to large enterprises.</span>
                </div>
              </div>
            </div>

            <div className="pl2-stats-row">
              <div className="pl2-stat-card">
                <i className="fas fa-server"></i>
                <div>
                  <span className="pl2-stat-num">1000+</span>
                  <span className="pl2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span>
                </div>
              </div>
              <div className="pl2-stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="pl2-stat-num">6hrs</span>
                  <span className="pl2-stat-lbl">ISSUE<br />RESOLUTION</span>
                </div>
              </div>
              <div className="pl2-stat-card pl2-stat-brand">
                <img loading="lazy"
                  src="/assets/images/partners/PEOPLE-LINK.jpg"
                  alt="PeopleLink"
                  className="pl2-brand-logo"
                />
                <span className="pl2-stat-lbl">SAARC<br />LEADING PARTNER</span>
              </div>
            </div>

            <div className="pl2-cta-row">
              <a href="/contact-us" className="pl2-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </a>
            </div>

          </div>

          {/* RIGHT - Product Showcase */}
          <div className="pl2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">

            <div className="pl2-product-glow" aria-hidden="true"></div>

            <div className="pl2-showcase">
              <img loading="lazy"
                src="/assets/pen.png"
                alt="PeopleLink Unified Communication Solutions"
                className="pl2-hero-product-img"
                onError={(e) => { e.target.style.opacity = '0.3'; }}
              />
              <div className="pl2-platform" aria-hidden="true">
                <div className="pl2-plat-ring pl2-plat-ring-1"></div>
                <div className="pl2-plat-ring pl2-plat-ring-2"></div>
                <div className="pl2-plat-ring pl2-plat-ring-3"></div>
                <div className="pl2-plat-surface"></div>
              </div>
            </div>

            <div className="pl2-industry-strip">
              <span className="pl2-ind-item"><i className="fas fa-building"></i> Enterprises</span>
              <span className="pl2-ind-sep"></span>
              <span className="pl2-ind-item"><i className="fas fa-university"></i> Government</span>
              <span className="pl2-ind-sep"></span>
              <span className="pl2-ind-item"><i className="fas fa-hospital"></i> Healthcare</span>
              <span className="pl2-ind-sep"></span>
              <span className="pl2-ind-item"><i className="fas fa-graduation-cap"></i> Education</span>
              <span className="pl2-ind-sep"></span>
              <span className="pl2-ind-item"><i className="fas fa-industry"></i> Manufacturing</span>
            </div>

          </div>

        </div>
      </section>

      
      
      
      {/* Use Cases Slider */}

      {/* Career CTA - above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-people-carry"></i><span>FREE WORKFORCE CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Streamline Your Workforce Management?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three workforce compliance gaps in your setup</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to automate attendance and payroll processes</span></div>
            <div className="partner-cta-point"><i className="fas fa-calendar-alt"></i><span>An exact timeline & cost estimate - no obligations</span></div>
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
        useCases={peoplelinkUseCases}
        partnerColor="#06b6d4"
        title="PeopleLink Use Cases"
        subtitle="Successfully Deployed by Trace Network across diverse industry sectors"
      />

      {/* Awards Section */}
      <section className="awards-section">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">Awards</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <h2 className="section-title__title">
            Recognized &amp; Trusted <span>for Delivering </span><br />Value &amp; Excellence
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

      {/* Why Leading Brands Choose Trace */}
      <section className="premium-cards-section" style={{ marginTop: '-20px' }}>
        <div className="premium-container">
          <div className="section-title text-center pb-4">
            <h2 className="section-title__title">Why Leading<span> Brands</span> Choose<span> Trace</span></h2>
          </div>
          <div className="premium-card-grid">
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/certified.png" alt="certified" /></div><p><strong>Multi‑vendor, Certified Network Security Expertise</strong> Partnering with 40+ global OEMs, Trace Network offers multi-vendor cybersecurity and network solutions that are future-proof, scalable, and tailored to your exact IT security needs.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" alt="leadership" /></div><p><strong>20+ Years of Cybersecurity Leadership</strong> With two decades of proven expertise, we provide penetration testing, vulnerability assessments, and enterprise IT security solutions for Top Campuses, GCCs, data centres, and enterprises across India.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div><p><strong>Customer‑First, Value‑Driven</strong> Our cost-effective services ensure maximum protection with right-sized solutions, reducing risks and delivering the lowest total cost of ownership (TCO).</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" /></div><p><strong>Local Presence with Rapid IT Support</strong> Trace Network engineers are available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag, ensuring quick on-site support whenever you need it.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" /></div><p><strong>ISO 27001‑Certified Provider</strong> As an ISO 27001-certified company, we follow stringent change management and compliance practices aligned with global information security standards.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" /></div><p><strong>Proven Deployment Framework</strong> Our structured approach, Assess → Design → Deploy → Optimise → Support, minimises downtime and ensures maximum ROI.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div><p><strong>Flexible MSSP &amp; Pricing Models</strong> Choose from CapEx, OpEx, or MSSP models to align investments with your organisation's business goals.</p></div>
          </div>
        </div>
      </section>

            {/* ── SPECIAL OFFER SECTION ── */}
      <section className="greythr-special-offer" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="greythr-offer-card">
            
            {/* Ambient background glows */}
            <div className="greythr-offer-glow-left" aria-hidden="true"></div>
            <div className="greythr-offer-glow-right" aria-hidden="true"></div>

            {/* Twinkling stars */}
            <div className="greythr-offer-stars" aria-hidden="true">
              <span className="gt-star gt-star-1">★</span>
              <span className="gt-star gt-star-2">✦</span>
              <span className="gt-star gt-star-3">★</span>
              <span className="gt-star gt-star-4">✦</span>
            </div>

            {/* RIGHT COLUMN: Interactive Content */}
            <div className="greythr-offer-content sify-offer-content-full">
              <div className="greythr-offer-badge">
                <i className="fas fa-gift"></i> SPECIAL OFFER
              </div>

              <h2 className="greythr-offer-title">
                <span className="greythr-offer-free">FREE POC</span> Available
              </h2>

              <div className="greythr-offer-pill">
                <span className="greythr-offer-pill-dot"></span>
                Exclusive Video Conference Offer
              </div>

              <p className="greythr-offer-desc">
                Experience high-definition video conferencing and unified communications. Set up a professional virtual meeting room demo tailored to your corporate network.
              </p>

              {/* Feature Grid */}
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span>No Upfront Cost<br />for POC Setup</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-sliders-h"></i>
                  </div>
                  <span>Tailored to Your<br />Environment</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <span>Exclusive Pricing<br />on PeopleLink Solutions</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <span>Expert Guidance<br />Throughout</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
              </div>

              {/* Modules List */}
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['Video Conference Software', 'InstaVC & WebRTC', 'Smart Classroom Solutions', 'Conference Room Audio'].map((m, i) => (
                    <React.Fragment key={m}>
                      <span className="greythr-offer-module">
                        <i className="fas fa-shield-alt"></i> {m}
                      </span>
                      {i < 3 && <span className="greythr-offer-sep">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* CTA button */}
              <Link to="/contact-us" className="greythr-contact-btn">
                CONTACT TRACE NETWORK <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

