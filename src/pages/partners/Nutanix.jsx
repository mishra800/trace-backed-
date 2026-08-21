import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Nutanix.css';

const nutanixUseCases = [
  { id: 'manufacturing', category: 'MANUFACTURING', icon: 'fas fa-industry', title: 'Manufacturing Industry (Smart Factory with Nutanix HCI)', description: 'Problem: Manufacturing units need high availability, real-time processing, and centralized IT infrastructure for production systems and IoT.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#nutanix-manufacturing' },
  { id: 'education', category: 'EDUCATION', icon: 'fas fa-graduation-cap', title: 'Education Sector (Modern Campus IT Infrastructure)', description: 'Problem: Educational institutions require scalable, cost-effective IT infrastructure to support digital learning and applications.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#nutanix-education' },
  { id: 'enterprise', category: 'ENTERPRISE', icon: 'fas fa-building', title: 'Large-Scale Enterprises (Cloud & Data Center Modernization)', description: 'Problem: Enterprises need scalable, flexible, and high-performance infrastructure to support business-critical applications.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#nutanix-enterprise' },
  { id: 'bfsi', category: 'BANKING', icon: 'fas fa-university', title: 'BFSI (High Availability Core Banking Infrastructure)', description: 'Problem: Banks require always-on infrastructure with self-healing capabilities for core banking and payment systems.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#nutanix-bfsi' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare (Clinical Workload Virtualization)', description: 'Problem: Hospitals need scalable HCI for clinical applications, medical imaging, and electronic health record systems.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#nutanix-healthcare' },
  { id: 'cloud', category: 'CLOUD', icon: 'fas fa-cloud', title: 'Cloud & Hybrid (Multi-Cloud Infrastructure Management)', description: 'Problem: Organizations need unified management for hybrid and multi-cloud workloads with consistent governance.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#nutanix-cloud' },
];

export default function Nutanix() {
  useAwardsSlider();
  const seoData = getSEOData('partnerNutanix');
  return (
    <div className="nutanix-page ntx-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* -- HERO -- */}
      <section className="ntx2-hero">
        <div className="ntx2-hero-glow-left" aria-hidden="true"></div>
        <div className="ntx2-hero-glow-right" aria-hidden="true"></div>
        <div className="ntx2-hero-inner container">

          <div className="ntx2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="ntx2-headline">
              Leading Nutanix Cloud<br />
              &amp; Hyperconverged Solutions<br />
              <span className="ntx2-headline-accent">Provider</span>
            </h1>
            <div className="ntx2-headline-rule"></div>
            <p className="ntx2-desc">
              Modernize your IT with enterprise-grade Nutanix HCI - one-click management, 97% less downtime, and 43% TCO reduction - delivered by{' '}
              <a href="/contact-us" className="ntx2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="ntx2-feature-row">
              <div className="ntx2-feat">
                <div className="ntx2-feat-icon"><i className="fas fa-chart-line"></i></div>
                <div className="ntx2-feat-body"><strong>Reduce TCO by 43%</strong><span>Significant ROI from simplified IT operations.</span></div>
              </div>
              <div className="ntx2-feat">
                <div className="ntx2-feat-icon"><i className="fas fa-clock"></i></div>
                <div className="ntx2-feat-body"><strong>One-Click Management</strong><span>Unified compute, storage &amp; networking.</span></div>
              </div>
              <div className="ntx2-feat">
                <div className="ntx2-feat-icon"><i className="fas fa-shield-alt"></i></div>
                <div className="ntx2-feat-body"><strong>97% Less Downtime</strong><span>Self-healing infrastructure always available.</span></div>
              </div>
            </div>

            <div className="ntx2-stats-row">
              <div className="ntx2-stat-card"><i className="fas fa-chart-line"></i><div><span className="ntx2-stat-num">43%</span><span className="ntx2-stat-lbl">TCO<br />REDUCTION</span></div></div>
              <div className="ntx2-stat-card"><i className="fas fa-shield-alt"></i><div><span className="ntx2-stat-num">97%</span><span className="ntx2-stat-lbl">LESS<br />DOWNTIME</span></div></div>
              <div className="ntx2-stat-card ntx2-stat-brand">
                <img loading="lazy" src="/assets/images/partners/nutanix.png" alt="Nutanix" className="ntx2-brand-logo" onError={e=>{e.target.style.opacity='0.3';}} />
                <span className="ntx2-stat-lbl">CERTIFIED<br />PARTNER</span>
              </div>
            </div>

            <div className="ntx2-cta-row">
              <a href="/contact-us" className="ntx2-btn-ghost">Talk to Our Experts <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="ntx2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            {/* Ambient glow */}
            <div className="ntx2-product-glow" aria-hidden="true"></div>

            {/* Orbit rings */}
            <div className="ntx2-orbit-ring ntx2-orbit-ring-1" aria-hidden="true">
              <div className="ntx2-orbit-dot ntx2-orbit-dot-1"></div>
              <div className="ntx2-orbit-dot ntx2-orbit-dot-2"></div>
              <div className="ntx2-orbit-dot ntx2-orbit-dot-3"></div>
            </div>
            <div className="ntx2-orbit-ring ntx2-orbit-ring-2" aria-hidden="true"></div>

            {/* Main image showcase */}
            <div className="ntx2-showcase">
              {/* Floating info badges */}
              <div className="ntx2-img-badge ntx2-img-badge-tl">
                <i className="fas fa-shield-alt"></i> 97% Less Downtime
              </div>
              <div className="ntx2-img-badge ntx2-img-badge-br">
                <i className="fas fa-chart-line"></i> 43% TCO Reduction
              </div>

              <img loading="lazy"
                src="/assets/nut.png"
                alt="Nutanix HCI Platform"
                className="ntx2-hero-product-img"
                onError={e => { e.target.style.opacity = '0.3'; }}
              />

              {/* Platform rings below the image */}
              <div className="ntx2-platform" aria-hidden="true">
                <div className="ntx2-plat-ring ntx2-plat-ring-1"></div>
                <div className="ntx2-plat-ring ntx2-plat-ring-2"></div>
                <div className="ntx2-plat-ring ntx2-plat-ring-3"></div>
                <div className="ntx2-plat-surface"></div>
              </div>
            </div>

            {/* Industry strip */}
            <div className="ntx2-industry-strip">
              <span className="ntx2-ind-item"><i className="fas fa-server"></i> Compute</span>
              <span className="ntx2-ind-sep"></span>
              <span className="ntx2-ind-item"><i className="fas fa-database"></i> Storage</span>
              <span className="ntx2-ind-sep"></span>
              <span className="ntx2-ind-item"><i className="fas fa-network-wired"></i> Networking</span>
              <span className="ntx2-ind-sep"></span>
              <span className="ntx2-ind-item"><i className="fas fa-cloud"></i> Cloud</span>
              <span className="ntx2-ind-sep"></span>
              <span className="ntx2-ind-item"><i className="fas fa-brain"></i> AI-Ready</span>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section className="aruba-certifications ntx-certifications">
        <div className="container">
          <div className="aruba-section-header" data-aos="fade-up">
            <h2><i className="fas fa-award header-icon-glow"></i> Our Team Certifications</h2>
            <p>Nutanix-certified professionals delivering proven expertise across hyperconverged infrastructure and cloud solutions</p>
          </div>
          <div className="aruba-cert-slider-wrapper">
            <div className="aruba-cert-images">
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/nutanix/image1.png" alt="Nutanix Certified Professional" title="Nutanix Certified Professional" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Nutanix Certified Professional</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/nutanix/image2.png" alt="Nutanix Professional" title="Nutanix Professional" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Nutanix Professional</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/nutanix/image3.png" alt="Nutanix Master" title="Nutanix Master" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Nutanix Master</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/nutanix/image4.png" alt="Nutanix Associate" title="Nutanix Associate" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Nutanix Associate</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/nutanix/image1.png" alt="Nutanix Certified Professional" title="Nutanix Certified Professional" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Nutanix Certified Professional</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/nutanix/image2.png" alt="Nutanix Professional" title="Nutanix Professional" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Nutanix Professional</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/nutanix/image3.png" alt="Nutanix Master" title="Nutanix Master" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Nutanix Master</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/nutanix/image4.png" alt="Nutanix Associate" title="Nutanix Associate" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Nutanix Associate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      {/* Career CTA - above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-cubes"></i><span>FREE HCI CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Modernize Your IT Infrastructure?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Infrastructure bottlenecks holding your business back</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to reduce TCO and improve uptime</span></div>
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

      <UseCaseSlider useCases={nutanixUseCases} partnerColor="#024DA1" title="Nutanix Use Cases" subtitle="Successfully Deployed by Trace Network across diverse industry sectors" />

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
                Exclusive Hyperconverged Offer
              </div>

              <p className="greythr-offer-desc">
                Test Nutanix Enterprise Cloud and Hyperconverged Infrastructure in your environment. Experience unified management and scaling with zero downtime.
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
                  <span>Tailored to Your<br />Data Center</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <span>Exclusive Partner<br />Pricing Plans</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <span>Dedicated Expert<br />Support 24/7</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
              </div>

              {/* Modules List */}
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['Acropolis OS (AOS)', 'AHV Hypervisor', 'Prism Central management', 'Nutanix Files & Volume'].map((m, i) => (
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

