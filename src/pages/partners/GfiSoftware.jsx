import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './GfiSoftware.css';

const gfiUseCases = [
  { id: 'banking', category: 'BANKING', icon: 'fas fa-university', title: 'Banking & Financial Services (Email Security & Compliance)', description: 'Problem: Banks require secure email communication, compliance monitoring, and protection against phishing and ransomware attacks.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#gfisoftware-banking' },
  { id: 'manufacturing', category: 'MANUFACTURING', icon: 'fas fa-industry', title: 'Manufacturing Industry (Server & Network Monitoring)', description: 'Problem: Manufacturing organizations require proactive monitoring of servers, networks, and operational infrastructure to minimize downtime.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#gfisoftware-manufacturing' },
  { id: 'it', category: 'IT & SOFTWARE', icon: 'fas fa-laptop', title: 'IT & Software Companies (Centralized Monitoring & Patch Management)', description: 'Problem: IT companies require centralized monitoring, patch management, and secure communication infrastructure for business operations.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#gfisoftware-it' },
  { id: 'education', category: 'EDUCATION', icon: 'fas fa-graduation-cap', title: 'Education Sector (Endpoint Monitoring & Secure Communication)', description: 'Problem: Educational institutions require secure communication platforms, endpoint monitoring, and centralized IT management for academic operations.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#gfisoftware-education' },
  { id: 'retail', category: 'RETAIL', icon: 'fas fa-shopping-cart', title: 'Retail & E-Commerce Sector (Branch Infrastructure Visibility)', description: 'Problem: Retail organizations require secure communication, centralized monitoring, and branch infrastructure visibility across multiple locations.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#gfisoftware-retail' },
];

export default function GfiSoftware() {
  useAwardsSlider();
  const seoData = getSEOData('partnerGfiSoftware');
  return (
    <div className="gfi-page gfi2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* Hero */}
      <section className="gfi2-hero">
        <div className="gfi2-hero-bg" aria-hidden="true"></div>
        <div className="gfi2-hero-glow-left" aria-hidden="true"></div>
        <div className="gfi2-hero-glow-right" aria-hidden="true"></div>
        <div className="gfi2-hero-inner container">

          {/* LEFT */}
          <div className="gfi2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="gfi2-headline">
              Leading GFI Software<br />
              Security Solutions<br />
              <span className="gfi2-headline-accent">Partner</span>
            </h1>
            <div className="gfi2-headline-rule"></div>
            <p className="gfi2-desc">
              Email security, network monitoring, patch management, and business communication solutions - delivered by{' '}
              <a href="/contact-us" className="gfi2-desc-link">Trace Network &amp; Engineering.</a>
            </p>
            <div className="gfi2-feature-row">
              <div className="gfi2-feat">
                <div className="gfi2-feat-icon"><i className="fas fa-envelope"></i></div>
                <div className="gfi2-feat-body">
                  <strong>Email Security</strong>
                  <span>Anti-spam, phishing &amp; ransomware protection.</span>
                </div>
              </div>
              <div className="gfi2-feat">
                <div className="gfi2-feat-icon"><i className="fas fa-satellite-dish"></i></div>
                <div className="gfi2-feat-body">
                  <strong>Network Monitoring</strong>
                  <span>Real-time performance visibility.</span>
                </div>
              </div>
              <div className="gfi2-feat">
                <div className="gfi2-feat-icon"><i className="fas fa-wrench"></i></div>
                <div className="gfi2-feat-body">
                  <strong>Patch Management</strong>
                  <span>Automated vulnerability management.</span>
                </div>
              </div>
            </div>
            <div className="gfi2-stats-row">
              <div className="gfi2-stat-card">
                <i className="fas fa-building"></i>
                <div>
                  <span className="gfi2-stat-num">1000+</span>
                  <span className="gfi2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span>
                </div>
              </div>
              <div className="gfi2-stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="gfi2-stat-num">6hrs</span>
                  <span className="gfi2-stat-lbl">ISSUE<br />RESOLUTION</span>
                </div>
              </div>
              <div className="gfi2-stat-card gfi2-stat-brand">
                <img loading="lazy" src="/assets/images/partners/GFI.png" alt="GFI Software" className="gfi2-brand-logo"
                  onError={(e) => { e.target.style.opacity = '0.3'; }} />
                <span className="gfi2-stat-lbl">GFI CERTIFIED<br />PARTNER</span>
              </div>
            </div>
            <div className="gfi2-cta-row">
              <a href="/contact-us" className="gfi2-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="gfi2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="gfi2-product-glow" aria-hidden="true"></div>
            <div className="gfi2-showcase">
              <img loading="lazy" src="/assets/gif.png" alt="GFI Software"
                className="gfi2-hero-product-img"
                onError={(e) => { e.target.style.opacity = '0.3'; }} />
              <div className="gfi2-platform" aria-hidden="true">
                <div className="gfi2-plat-ring gfi2-plat-ring-1"></div>
                <div className="gfi2-plat-ring gfi2-plat-ring-2"></div>
                <div className="gfi2-plat-ring gfi2-plat-ring-3"></div>
                <div className="gfi2-plat-surface"></div>
              </div>
            </div>
            <div className="gfi2-industry-strip">
              <span className="gfi2-ind-item"><i className="fas fa-university"></i> Banking</span>
              <span className="gfi2-ind-sep"></span>
              <span className="gfi2-ind-item"><i className="fas fa-industry"></i> Manufacturing</span>
              <span className="gfi2-ind-sep"></span>
              <span className="gfi2-ind-item"><i className="fas fa-laptop"></i> IT &amp; Software</span>
              <span className="gfi2-ind-sep"></span>
              <span className="gfi2-ind-item"><i className="fas fa-graduation-cap"></i> Education</span>
              <span className="gfi2-ind-sep"></span>
              <span className="gfi2-ind-item"><i className="fas fa-building"></i> Enterprise</span>
            </div>
          </div>

        </div>
      </section>

      
      
      
      {/* Use Cases Slider */}

      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-lock"></i><span>FREE SECURITY CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Secure Your IT Infrastructure?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three IT security risks in your environment</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to improve security without disruption</span></div>
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

      <UseCaseSlider
        useCases={gfiUseCases}
        partnerColor="#00AEEF"
        title="GFI Software Use Cases"
        subtitle="Successfully Delivered by Trace Network across diverse industry sectors"
      />

      {/* Awards Section */}
      <section className="awards-section">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">Awards</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <h2 className="section-title__title">Recognized &amp; Trusted <span>for Delivering </span><br />Value &amp; Excellence</h2>
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

      {/* Free POC Section */}
      <section className="greythr-special-offer gfi-poc-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="greythr-offer-card">
            <div className="greythr-offer-glow-left" aria-hidden="true"></div>
            <div className="greythr-offer-glow-right" aria-hidden="true"></div>
            <div className="greythr-offer-stars" aria-hidden="true">
              <span className="gt-star gt-star-1">★</span>
              <span className="gt-star gt-star-2">✦</span>
              <span className="gt-star gt-star-3">★</span>
              <span className="gt-star gt-star-4">✦</span>
            </div>
            <div className="greythr-offer-content sify-offer-content-full">
              <div className="greythr-offer-badge"><i className="fas fa-gift"></i> SPECIAL OFFER</div>
              <h2 className="greythr-offer-title">
                <span className="greythr-offer-free">FREE POC</span> Available
              </h2>
              <div className="greythr-offer-pill">
                <span className="greythr-offer-pill-dot"></span>Exclusive GFI Software Offer
              </div>
              <p className="greythr-offer-desc">
                Experience GFI Software's security, network monitoring, and collaboration tools firsthand — zero risk, zero commitment.
                Our certified team will set up a complete proof of concept tailored to your environment so you can
                see real-time protection and productivity gains before making any investment.
              </p>
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon"><i className="fas fa-shield-alt"></i></div>
                  <span>No Upfront Cost<br />for POC Setup</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon"><i className="fas fa-sliders-h"></i></div>
                  <span>Tailored to Your<br />Security Needs</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon"><i className="fas fa-tag"></i></div>
                  <span>Exclusive Partner<br />Pricing Plans</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon"><i className="fas fa-headset"></i></div>
                  <span>Dedicated Expert<br />Support 24/7</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
              </div>
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">SOLUTIONS INCLUDED IN YOUR POC</span>
                <div className="greythr-offer-modules-list">
                  {['GFI KerioControl Firewall', 'GFI Archiver & MailEssentials', 'GFI LanGuard Patch Management', 'Kerio Connect Email'].map((m, i) => (
                    <React.Fragment key={m}>
                      <span className="greythr-offer-module"><i className="fas fa-shield-alt"></i> {m}</span>
                      {i < 3 && <span className="greythr-offer-sep">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <Link to="/contact-us" className="greythr-contact-btn">
                CLAIM YOUR FREE GFI POC <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
