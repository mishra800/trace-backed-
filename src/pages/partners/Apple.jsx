import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Apple.css';

const appleUseCases = [
  { id: 'it', category: 'IT & SOFTWARE', icon: 'fas fa-laptop', title: 'IT & Software Companies (Development Infrastructure)', description: 'Problem: Software companies require high-performance and reliable devices for coding, testing, DevOps, and hybrid workforce operations.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#apple-it' },
  { id: 'media', category: 'MEDIA', icon: 'fas fa-film', title: 'Media & Creative Industry (Creative Workstations)', description: 'Problem: Creative teams require powerful systems for video editing, animation, designing, rendering, and content production.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#apple-media' },
  { id: 'education', category: 'EDUCATION', icon: 'fas fa-graduation-cap', title: 'Education Sector (Digital Learning Environment)', description: 'Problem: Educational institutions require secure and reliable devices for faculty, students, digital classrooms, and content creation.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#apple-education' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare Sector (Medical & Administrative Operations)', description: 'Problem: Hospitals require reliable devices for administration, diagnostics, telemedicine, and patient management.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#apple-healthcare' },
  { id: 'enterprise', category: 'ENTERPRISE', icon: 'fas fa-building', title: 'Corporate Enterprises & Hybrid Workforce (Executive Computing)', description: 'Problem: Organizations require secure, lightweight, and high-performance devices for executives and hybrid workforce operations.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#apple-enterprise' },
  { id: 'design', category: 'DESIGN & ANIMATION', icon: 'fas fa-palette', title: 'Design & Animation Studios (High-Performance Creative Infrastructure)', description: 'Problem: Studios require high-performance systems for 3D rendering, animation, graphic design, and multimedia production.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#apple-design' },
];

export default function Apple() {
  useAwardsSlider();
  const seoData = getSEOData('partnerApple');
  return (
    <div className="apple-page apl-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* ── HERO ── */}
      <section className="apl2-hero">
        <div className="apl2-hero-glow-left" aria-hidden="true"></div>
        <div className="apl2-hero-glow-right" aria-hidden="true"></div>
        <div className="apl2-hero-inner container">

          <div className="apl2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="apl2-headline">
              Enterprise Apple Device<br />
              &amp; Productivity Solutions<br />
              <span className="apl2-headline-accent">Provider</span>
            </h1>
            <div className="apl2-headline-rule"></div>
            <p className="apl2-desc">
              Premium performance, seamless ecosystem integration, and advanced security for modern enterprises – delivered by{' '}
              <a href="/contact-us" className="apl2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="apl2-feature-row">
              <div className="apl2-feat">
                <div className="apl2-feat-icon"><i className="fas fa-microchip"></i></div>
                <div className="apl2-feat-body"><strong>Apple Silicon Performance</strong><span>Unmatched power efficiency for enterprise workloads.</span></div>
              </div>
              <div className="apl2-feat">
                <div className="apl2-feat-icon"><i className="fas fa-shield-alt"></i></div>
                <div className="apl2-feat-body"><strong>Advanced Security</strong><span>Touch ID, FileVault, Gatekeeper &amp; macOS Sequoia.</span></div>
              </div>
              <div className="apl2-feat">
                <div className="apl2-feat-icon"><i className="fas fa-layer-group"></i></div>
                <div className="apl2-feat-body"><strong>Seamless Ecosystem</strong><span>Mac, iPhone, iPad &amp; iCloud working in harmony.</span></div>
              </div>
            </div>

            <div className="apl2-stats-row">
              <div className="apl2-stat-card"><i className="fas fa-laptop"></i><div><span className="apl2-stat-num">1000+</span><span className="apl2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span></div></div>
              <div className="apl2-stat-card"><i className="fas fa-clock"></i><div><span className="apl2-stat-num">6hrs</span><span className="apl2-stat-lbl">ISSUE<br />RESOLUTION</span></div></div>
              <div className="apl2-stat-card apl2-stat-brand">
                <img loading="lazy" src="/assets/images/partners/APPLE-2.jpg" alt="Apple" className="apl2-brand-logo" onError={e=>{e.target.style.opacity='0.3';}} />
                <span className="apl2-stat-lbl">AUTHORIZED<br />PARTNER</span>
              </div>
            </div>

            <div className="apl2-cta-row">
              <a href="/contact-us" className="apl2-btn-ghost">Talk to Our Experts <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="apl2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="apl2-product-glow" aria-hidden="true"></div>
            <div className="apl2-showcase">
              <img loading="lazy" src="/assets/apple.png" alt="Apple MacBook Pro, iMac and Mac Studio" className="apl2-hero-product-img" onError={e=>{e.target.style.opacity='0.3';}} />
            </div>
            <div className="apl2-industry-strip">
              <span className="apl2-ind-item"><i className="fas fa-laptop"></i> IT &amp; Software</span>
              <span className="apl2-ind-sep"></span>
              <span className="apl2-ind-item"><i className="fas fa-film"></i> Media</span>
              <span className="apl2-ind-sep"></span>
              <span className="apl2-ind-item"><i className="fas fa-palette"></i> Design</span>
              <span className="apl2-ind-sep"></span>
              <span className="apl2-ind-item"><i className="fas fa-graduation-cap"></i> Education</span>
              <span className="apl2-ind-sep"></span>
              <span className="apl2-ind-item"><i className="fas fa-building"></i> Enterprise</span>
            </div>
          </div>

        </div>
      </section>

      
      
      

      {/* Use Cases */}
      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-laptop"></i><span>FREE IT CONSULTATION</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Build a Future-Ready IT Environment?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three risks hiding in your current stack</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to boost performance without new hardware</span></div>
            <div className="partner-cta-point"><i className="fas fa-calendar-alt"></i><span>An exact timeline & cost estimate — no obligations</span></div>
          </div>
          <div className="partner-cta-actions">
            <a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer" className="partner-cta-primary"><i className="fab fa-whatsapp"></i> Book Your Free Strategy Call</a>
            <a href="/contact-us" className="partner-cta-secondary"><i className="fas fa-envelope"></i> Send Us a Message</a>
          </div>
        </div>
        <div className="partner-cta-glow-l" aria-hidden="true"></div>
        <div className="partner-cta-glow-r" aria-hidden="true"></div>
      </section>

      <UseCaseSlider useCases={appleUseCases} partnerColor="#c0c0c0" title="Apple Laptop & Desktop Use Cases" subtitle="Successfully Delivered by Trace Network across diverse industry sectors" />

      {/* Awards */}
      <section className="awards-section">
        <div className="section-title text-center">
          <div className="section-title__tagline-box"><div className="section-title__tagline-shape-1"></div><span className="section-title__tagline">Awards</span><div className="section-title__tagline-shape-2"></div></div>
          <h2 className="section-title__title">Recognized &amp; Trusted <span>for Delivering </span><br />Value &amp; Excellence</h2>
        </div>
        <div className="awards-slider"><div className="awards-track">
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
        </div></div>
      </section>

      {/* Why Leading Brands */}
      <section className="premium-cards-section" style={{ marginTop: '-20px' }}>
        <div className="premium-container">
          <div className="section-title text-center pb-4"><h2 className="section-title__title">Why Leading<span> Brands</span> Choose<span> Trace</span></h2></div>
          <div className="premium-card-grid">
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/certified.png" alt="certified" /></div><p><strong>Multi‑vendor, Certified Network Security Expertise</strong> Partnering with 40+ global OEMs, Trace Network offers future-proof, scalable solutions.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" alt="leadership" /></div><p><strong>20+ Years of Cybersecurity Leadership</strong> Two decades of proven expertise in enterprise IT security solutions across India.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div><p><strong>Customer‑First, Value‑Driven</strong> Maximum protection with right-sized solutions and lowest TCO.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" /></div><p><strong>Local Presence with Rapid IT Support</strong> Engineers available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" /></div><p><strong>ISO 27001‑Certified Cybersecurity Provider</strong> Stringent change management and global compliance practices.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" /></div><p><strong>Proven Deployment Framework</strong> Assess → Design → Deploy → Optimise → Support for maximum ROI.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div><p><strong>Flexible Pricing Models</strong> CapEx, OpEx, or MSSP models aligned with your business goals.</p></div>
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
                Exclusive Apple Enterprise Offer
              </div>

              <p className="greythr-offer-desc">
                Experience the power of Apple devices firsthand – zero risk, zero commitment. Our certified team will set up a complete proof of concept tailored to your environment so you can see measurable results before you invest.
              </p>

              {/* Feature Grid */}
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span>FREE Infrastructure<br />Assessment</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-sliders-h"></i>
                  </div>
                  <span>FREE Solution<br />Consultation</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <span>Special Enterprise<br />Pricing</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <span>Deployment & Config<br />Support</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
              </div>

              {/* Modules List */}
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['MacBook Pro & Air', 'iMac & Mac Studio', 'iPad Enterprise', 'Apple Business Manager'].map((m, i) => (
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

