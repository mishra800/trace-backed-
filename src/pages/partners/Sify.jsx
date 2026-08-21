import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Sify.css';

const sifyUseCases = [
  { id: 'hospitality', category: 'HOSPITALITY', icon: 'fas fa-hotel', title: 'Hospitality Sector (Managed Connectivity & Cloud)', description: 'Problem: Hotels required reliable internet, secure connectivity, and cloud-based systems for seamless guest services.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#sify-hospitality' },
  { id: 'tourism', category: 'TOURISM', icon: 'fas fa-plane', title: 'Tourism Sector (Secure Digital Platforms)', description: 'Problem: Tourism businesses needed secure connectivity and reliable hosting for booking platforms and customer data.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#sify-tourism' },
  { id: 'chemical', category: 'CHEMICAL', icon: 'fas fa-flask', title: 'Chemical Industry (Secure Data & Network)', description: 'Problem: Chemical organizations required secure connectivity and data management for production and research systems.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#sify-chemical' },
  { id: 'utilities', category: 'UTILITIES', icon: 'fas fa-bolt', title: 'Utilities Sector (High Availability Networks)', description: 'Problem: Utilities required high availability networks and real-time connectivity for monitoring and operations.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#sify-utilities' },
  { id: 'banking', category: 'BANKING', icon: 'fas fa-university', title: 'Banking Sector (Secure Network Infrastructure)', description: 'Problem: Banks required secure, high-performance network infrastructure and data center connectivity.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#sify-banking' },
  { id: 'government', category: 'GOVERNMENT', icon: 'fas fa-landmark', title: 'Government Organizations (Cloud & Connectivity)', description: 'Problem: Government bodies needed secure cloud platforms and nationwide connectivity for digital services.', image: '/assets/images/use-cases/usecase1.png', linkTo: '/case-studies#sify-government' },
];

export default function Sify() {
  useAwardsSlider();
  const seoData = getSEOData('partnerSify');
  return (
    <div className="sify-page sify2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* ── HERO ── */}
      <section className="sify2-hero">
        <div className="sify2-hero-glow-left" aria-hidden="true"></div>
        <div className="sify2-hero-glow-right" aria-hidden="true"></div>
        <div className="sify2-hero-inner container">

          <div className="sify2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="sify2-headline">
              One of the Leading Sify Cloud<br />
              &amp; Data Center Solution<br />
              <span className="sify2-headline-accent">Providers</span>
            </h1>
            <div className="sify2-headline-rule"></div>
            <p className="sify2-desc">
              End-to-end cloud, data center, and connectivity solutions for digital transformation - delivered by{' '}
              <a href="/contact-us" className="sify2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="sify2-feature-row">
              <div className="sify2-feat">
                <div className="sify2-feat-icon"><i className="fas fa-cloud"></i></div>
                <div className="sify2-feat-body"><strong>Cloud Services</strong><span>Scalable cloud platforms for every enterprise.</span></div>
              </div>
              <div className="sify2-feat">
                <div className="sify2-feat-icon"><i className="fas fa-network-wired"></i></div>
                <div className="sify2-feat-body"><strong>Network Connectivity</strong><span>Reliable, high-speed enterprise connectivity.</span></div>
              </div>
              <div className="sify2-feat">
                <div className="sify2-feat-icon"><i className="fas fa-server"></i></div>
                <div className="sify2-feat-body"><strong>Data Center Solutions</strong><span>Secure colocation and managed DC services.</span></div>
              </div>
            </div>

            <div className="sify2-stats-row">
              <div className="sify2-stat-card"><i className="fas fa-building"></i><div><span className="sify2-stat-num">50+</span><span className="sify2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span></div></div>
              <div className="sify2-stat-card"><i className="fas fa-headset"></i><div><span className="sify2-stat-num">6hr</span><span className="sify2-stat-lbl">ISSUE<br />RESOLUTION</span></div></div>
              <div className="sify2-stat-card sify2-stat-brand">
                <img loading="lazy" src="/assets/sify.png" alt="Sify" className="sify2-brand-logo" onError={e => { e.target.style.opacity = '0.3'; }} />
                <span className="sify2-stat-lbl">CERTIFIED<br />PARTNER</span>
              </div>
            </div>

            <div className="sify2-cta-row">
              <a href="/contact-us" className="sify2-btn-ghost">Talk to Our Experts <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="sify2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="sify2-product-glow" aria-hidden="true"></div>
            <div className="sify2-orbit-ring sify2-orbit-ring-1" aria-hidden="true">
              <div className="sify2-orbit-dot sify2-orbit-dot-1"></div>
              <div className="sify2-orbit-dot sify2-orbit-dot-2"></div>
              <div className="sify2-orbit-dot sify2-orbit-dot-3"></div>
            </div>
            <div className="sify2-orbit-ring sify2-orbit-ring-2" aria-hidden="true"></div>
            <div className="sify2-showcase">
              <div className="sify2-img-badge sify2-img-badge-tl"><i className="fas fa-cloud"></i> Cloud & Data Center</div>
              <div className="sify2-img-badge sify2-img-badge-br"><i className="fas fa-shield-alt"></i> 50+ Deployments</div>
              <img loading="lazy" src="/assets/sify.png" alt="Sify Cloud & Data Center Platform" className="sify2-hero-product-img" onError={e => { e.target.style.opacity = '0.3'; }} />
              <div className="sify2-platform" aria-hidden="true">
                <div className="sify2-plat-ring sify2-plat-ring-1"></div>
                <div className="sify2-plat-ring sify2-plat-ring-2"></div>
                <div className="sify2-plat-ring sify2-plat-ring-3"></div>
                <div className="sify2-plat-surface"></div>
              </div>
            </div>
            <div className="sify2-industry-strip">
              <span className="sify2-ind-item"><i className="fas fa-cloud"></i> Cloud</span>
              <span className="sify2-ind-sep"></span>
              <span className="sify2-ind-item"><i className="fas fa-server"></i> Data Center</span>
              <span className="sify2-ind-sep"></span>
              <span className="sify2-ind-item"><i className="fas fa-network-wired"></i> Connectivity</span>
              <span className="sify2-ind-sep"></span>
              <span className="sify2-ind-item"><i className="fas fa-shield-alt"></i> Security</span>
              <span className="sify2-ind-sep"></span>
              <span className="sify2-ind-item"><i className="fas fa-cogs"></i> Managed Services</span>
            </div>
          </div>

        </div>
      </section>

      
      
      

      {/* Use Cases */}
      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-network-wired"></i><span>FREE NETWORK CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Modernize Your Network Infrastructure?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Gaps in your current cloud and connectivity setup</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to improve performance and reliability</span></div>
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

      <UseCaseSlider useCases={sifyUseCases} partnerColor="#BDD70C" title="Sify Use Cases" subtitle="Successfully Deployed by Trace Network across diverse industry sectors" />

      {/* Awards */}
      <section className="awards-section">
        <div className="section-title text-center">
          <div className="section-title__tagline-box"><div className="section-title__tagline-shape-1"></div><span className="section-title__tagline">Awards</span><div className="section-title__tagline-shape-2"></div></div>
          <h2 className="section-title__title">Recognized &amp; Trusted <span>for Delivering </span><br />Value &amp; Excellence</h2>
        </div>
        <div className="awards-slider"><div className="awards-track">
          <div className="award-card"><img loading="lazy" src="/assets/images/award/1.png" alt="Award 1" /><span>Sophos Best Performing Partner (2024)</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/2.png" alt="Award 2" /><span>Certification of Completion Aruba Instant (2023)</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/3.png" alt="Award 3" /><span>Core Champion HPE Aruba Networking (2023)</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/4.png" alt="Award 4" /><span>Sophos Top Performer of the Region</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/5.png" alt="Award 5" /><span>Sophos Best Solution Partner</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/6.png" alt="Award 6" /><span>Certified by SonicWall (2022)</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/7.png" alt="Award 7" /><span>HPE Aruba Accelerating Next (2022)</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/11.png" alt="Award 11" /><span>Sophos Best Top Performing Partner (2020)</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/19.png" alt="Award 19" /><span>Sophos Top Performer Of the Region</span></div>
        </div></div>
      </section>

      {/* Why Leading Brands */}
      <section className="premium-cards-section" style={{ marginTop: '-20px' }}>
        <div className="premium-container">
          <div className="section-title text-center pb-4"><h2 className="section-title__title">Why Leading<span> Brands</span> Choose<span> Trace</span></h2></div>
          <div className="premium-card-grid">
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/certified.png" alt="certified" /></div><p><strong>Multi-vendor, Certified Network Security Expertise</strong> Partnering with 40+ global OEMs, Trace Network offers multi-vendor cybersecurity and network solutions that are future-proof and scalable.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" alt="leadership" /></div><p><strong>20+ Years of Cybersecurity Leadership</strong> With two decades of proven expertise, we provide enterprise IT security solutions across India.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div><p><strong>Customer-First, Value-Driven</strong> Our cost-effective services ensure maximum protection with right-sized solutions and lowest TCO.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" /></div><p><strong>Local Presence with Rapid IT Support</strong> Engineers available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" /></div><p><strong>ISO 27001-Certified Cybersecurity Provider</strong> Following stringent change management and compliance practices.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" /></div><p><strong>Proven Deployment Framework</strong> Assess → Design → Deploy → Optimise → Support ensures maximum ROI.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div><p><strong>Flexible MSSP &amp; Security Pricing Models</strong> CapEx, OpEx, or MSSP models to align with your business goals.</p></div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="greythr-special-offer" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="greythr-offer-card">
            <div className="greythr-offer-glow-left" aria-hidden="true"></div>
            <div className="greythr-offer-glow-right" aria-hidden="true"></div>
            <div className="greythr-offer-stars" aria-hidden="true">
              <span className="gt-star gt-star-1">★</span><span className="gt-star gt-star-2">✦</span>
              <span className="gt-star gt-star-3">★</span><span className="gt-star gt-star-4">✦</span>
            </div>
            <div className="greythr-offer-content sify-offer-content-full">
              <div className="greythr-offer-badge"><i className="fas fa-gift"></i> SPECIAL OFFER</div>
              <h2 className="greythr-offer-title"><span className="greythr-offer-free">FREE POC</span> Available</h2>
              <div className="greythr-offer-pill"><span className="greythr-offer-pill-dot"></span>Exclusive Cloud &amp; Connectivity Offer</div>
              <p className="greythr-offer-desc">Experience the power of Sify's cloud and connectivity solutions firsthand - zero risk, zero commitment. Our team will set up a complete proof of concept tailored to your environment.</p>
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-shield-alt"></i></div><span>No Upfront Cost<br />for POC Setup</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-sliders-h"></i></div><span>Tailored to Your<br />Infrastructure Needs</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-tag"></i></div><span>Exclusive Partner<br />Pricing Plans</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-headset"></i></div><span>Dedicated Expert<br />Support 24/7</span><div className="greythr-offer-feat-bar"></div></div>
              </div>
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['Sify Cloud Platform', 'Data Center Services', 'Network Connectivity', 'Managed Security'].map((m, i) => (
                    <React.Fragment key={m}>
                      <span className="greythr-offer-module"><i className="fas fa-shield-alt"></i> {m}</span>
                      {i < 3 && <span className="greythr-offer-sep">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <Link to="/contact-us" className="greythr-contact-btn">CONTACT TRACE NETWORK <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
