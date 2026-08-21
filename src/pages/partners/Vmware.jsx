import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Vmware.css';

const vmwareUseCases = [
  { id: "banking", category: "BANKING", icon: "fas fa-university", title: "Banking & Financial Services (High-Availability Infrastructure)", description: "Problem: Banks require highly available, scalable, and secure infrastructure for financial applications and mission-critical workloads.", image: "/assets/images/use-cases/usecase4.png", linkTo: "/case-studies#vmware-banking" },
  { id: "healthcare", category: "HEALTHCARE", icon: "fas fa-hospital", title: "Healthcare & Government Hospitals (Scalable Healthcare Infrastructure)", description: "Problem: Hospitals require reliable and scalable infrastructure for healthcare applications, patient systems, diagnostics, and backup operations.", image: "/assets/images/use-cases/usecase5.png", linkTo: "/case-studies#vmware-healthcare" },
  { id: "government", category: "GOVERNMENT", icon: "fas fa-university", title: "Government Organizations (Secure Centralized Infrastructure)", description: "Problem: Government organizations require secure and centralized infrastructure for hosting critical applications and digital services.", image: "/assets/images/use-cases/usecase1.png", linkTo: "/case-studies#vmware-government" },
  { id: "manufacturing", category: "MANUFACTURING", icon: "fas fa-industry", title: "Manufacturing Industry (ERP & Production Systems)", description: "Problem: Manufacturing companies require scalable infrastructure for ERP systems, production applications, and operational continuity.", image: "/assets/images/use-cases/usecase7.png", linkTo: "/case-studies#vmware-manufacturing" },
  { id: "it", category: "IT & SOFTWARE", icon: "fas fa-laptop", title: "IT & Software Companies (Virtualization & Cloud Operations)", description: "Problem: IT companies require scalable virtual infrastructure for development, testing, cloud operations, and application hosting.", image: "/assets/images/use-cases/usecase6.png", linkTo: "/case-studies#vmware-it" },
  { id: "education", category: "EDUCATION", icon: "fas fa-graduation-cap", title: "Education Sector (Virtual Labs & Learning Platforms)", description: "Problem: Educational institutions require scalable and centralized infrastructure for digital classrooms, learning platforms, and virtual labs.", image: "/assets/images/use-cases/usecase2.png", linkTo: "/case-studies#vmware-education" },
  { id: "retail", category: "RETAIL", icon: "fas fa-shopping-cart", title: "Retail & E-Commerce Sector (Scalable Retail Infrastructure)", description: "Problem: Retail businesses require scalable infrastructure for POS systems, ERP applications, inventory management, and customer-facing platforms.", image: "/assets/images/use-cases/usecase3.png", linkTo: "/case-studies#vmware-retail" },
];

export default function Vmware() {
  useAwardsSlider();
  const seoData = getSEOData('partnerVmware');
  return (
    <div className="vmware-page vm2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* Hero */}
      <section className="vm2-hero">
        <div className="vm2-hero-bg" aria-hidden="true"></div>
        <div className="vm2-hero-glow-left" aria-hidden="true"></div>
        <div className="vm2-hero-glow-right" aria-hidden="true"></div>
        <div className="vm2-hero-inner container">

          {/* LEFT */}
          <div className="vm2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="vm2-headline">
              Premier VMware Virtualization<br />
              &amp; Cloud Infrastructure<br />
              <span className="vm2-headline-accent">Partner</span>
            </h1>
            <div className="vm2-headline-rule"></div>
            <p className="vm2-desc">
              Scalable, secure, and highly available IT environments through server virtualization, cloud management, and disaster recovery - delivered by{' '}
              <a href="/contact-us" className="vm2-desc-link">Trace Network &amp; Engineering.</a>
            </p>
            <div className="vm2-feature-row">
              <div className="vm2-feat">
                <div className="vm2-feat-icon"><i className="fas fa-desktop"></i></div>
                <div className="vm2-feat-body">
                  <strong>Server Virtualization</strong>
                  <span>Workload consolidation &amp; efficiency.</span>
                </div>
              </div>
              <div className="vm2-feat">
                <div className="vm2-feat-icon"><i className="fas fa-cloud"></i></div>
                <div className="vm2-feat-body">
                  <strong>Hybrid Cloud</strong>
                  <span>On-prem, private &amp; public cloud.</span>
                </div>
              </div>
              <div className="vm2-feat">
                <div className="vm2-feat-icon"><i className="fas fa-sync-alt"></i></div>
                <div className="vm2-feat-body">
                  <strong>High Availability</strong>
                  <span>Automated failover &amp; DR.</span>
                </div>
              </div>
            </div>
            <div className="vm2-stats-row">
              <div className="vm2-stat-card">
                <i className="fas fa-building"></i>
                <div>
                  <span className="vm2-stat-num">1000+</span>
                  <span className="vm2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span>
                </div>
              </div>
              <div className="vm2-stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="vm2-stat-num">6hrs</span>
                  <span className="vm2-stat-lbl">ISSUE<br />RESOLUTION</span>
                </div>
              </div>
              <div className="vm2-stat-card vm2-stat-brand">
                <i className="fas fa-cloud" style={{ fontSize: '2rem', color: '#1a73e8' }}></i>
                <span className="vm2-stat-lbl">VMWARE CERTIFIED<br />PARTNER</span>
              </div>
            </div>
            <div className="vm2-cta-row">
              <a href="/contact-us" className="vm2-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="vm2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="vm2-product-glow" aria-hidden="true"></div>
            <div className="vm2-showcase">
              <img loading="lazy" src="/assets/vmr.png" alt="VMware Virtualization Platform" className="vm2-hero-product-img" onError={e=>{e.target.style.opacity='0.3';}} />
              <div className="vm2-platform" aria-hidden="true">
                <div className="vm2-plat-ring vm2-plat-ring-1"></div>
                <div className="vm2-plat-ring vm2-plat-ring-2"></div>
                <div className="vm2-plat-ring vm2-plat-ring-3"></div>
                <div className="vm2-plat-surface"></div>
              </div>
            </div>
            <div className="vm2-industry-strip">
              <span className="vm2-ind-item"><i className="fas fa-university"></i> Banking</span>
              <span className="vm2-ind-sep"></span>
              <span className="vm2-ind-item"><i className="fas fa-hospital"></i> Healthcare</span>
              <span className="vm2-ind-sep"></span>
              <span className="vm2-ind-item"><i className="fas fa-landmark"></i> Government</span>
              <span className="vm2-ind-sep"></span>
              <span className="vm2-ind-item"><i className="fas fa-industry"></i> Manufacturing</span>
              <span className="vm2-ind-sep"></span>
              <span className="vm2-ind-item"><i className="fas fa-laptop"></i> IT &amp; Software</span>
            </div>
          </div>

        </div>
      </section>

      
      
      
      {/* Use Cases Slider */}

      {/* Career CTA - above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-layer-group"></i><span>FREE VIRTUALISATION CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Modernize Your Virtualisation Infrastructure?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three virtualisation inefficiencies in your setup</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to cut costs and boost VM performance</span></div>
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
        useCases={vmwareUseCases}
        partnerColor="#1a73e8"
        title="VMware Use Cases"
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
      <section className="greythr-special-offer vm2-poc-section" data-aos="fade-up" data-aos-duration="1000">
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
                <span className="greythr-offer-pill-dot"></span>Exclusive VMware Virtualisation Offer
              </div>
              <p className="greythr-offer-desc">
                Experience VMware's virtualisation and cloud infrastructure firsthand - zero risk, zero commitment.
                Our certified team will set up a complete proof of concept tailored to your environment so you can
                see real performance gains before making any investment.
              </p>
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon"><i className="fas fa-shield-alt"></i></div>
                  <span>No Upfront Cost<br />for POC Setup</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon"><i className="fas fa-sliders-h"></i></div>
                  <span>Tailored to Your<br />Infrastructure Needs</span>
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
                  {['vSphere Server Virtualisation', 'VMware Cloud Foundation', 'NSX Network Virtualisation', 'vSAN Storage'].map((m, i) => (
                    <React.Fragment key={m}>
                      <span className="greythr-offer-module"><i className="fas fa-desktop"></i> {m}</span>
                      {i < 3 && <span className="greythr-offer-sep">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <Link to="/contact-us" className="greythr-contact-btn">
                CLAIM YOUR FREE VMware POC <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
