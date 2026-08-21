import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Motadata.css';

const motadataUseCases = [
  { id: 'datacenter', category: 'DATA CENTER', icon: 'fas fa-building', title: 'Data Center Infrastructure Monitoring (Servers, Storage & Virtualization)', description: 'Problem: Organizations require centralized visibility into servers, storage, virtualization, and critical infrastructure to prevent downtime.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#motadata-datacenter' },
  { id: 'network', category: 'NETWORK', icon: 'fas fa-globe', title: 'Network Performance Monitoring (Bandwidth, Latency & Branch Visibility)', description: 'Problem: Enterprises need continuous visibility into network devices, bandwidth usage, latency, and branch connectivity.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#motadata-network' },
  { id: 'multibranch', category: 'ENTERPRISE', icon: 'fas fa-building', title: 'Multi-Branch Enterprise Monitoring (Centralized Distributed IT Management)', description: 'Problem: Organizations with multiple branches require centralized monitoring and management of distributed IT infrastructure.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#motadata-multibranch' },
  { id: 'bfsi', category: 'BANKING', icon: 'fas fa-university', title: 'BFSI Infrastructure & Service Monitoring (High Availability for Banking Systems)', description: 'Problem: Banks require high availability monitoring for critical banking applications, servers, and network infrastructure.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#motadata-bfsi' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare IT Monitoring (Critical Systems & Application Availability)', description: 'Problem: Hospitals require continuous monitoring of healthcare applications, servers, connected devices, and critical systems.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#motadata-healthcare' },
  { id: 'cloud', category: 'CLOUD', icon: 'fas fa-cloud', title: 'Cloud & Hybrid Infrastructure Monitoring (Unified Multi-Cloud Observability)', description: 'Problem: Organizations operating hybrid and cloud environments require unified visibility across on-premise and cloud workloads.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#motadata-cloud' },
];

export default function Motadata() {
  useAwardsSlider();
  const seoData = getSEOData('partnerMotadata');
  return (
    <div className="motadata-page mdt-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* -- HERO -- */}
      <section className="mdt2-hero">
        <div className="mdt2-hero-glow-left" aria-hidden="true"></div>
        <div className="mdt2-hero-glow-right" aria-hidden="true"></div>
        <div className="mdt2-hero-inner container">

          <div className="mdt2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="mdt2-headline">
              Comprehensive Monitoring<br />
              &amp; Log Management<br />
              <span className="mdt2-headline-accent">Solutions</span>
            </h1>
            <div className="mdt2-headline-rule"></div>
            <p className="mdt2-desc">
              Unified IT monitoring, AI-powered observability, and service management for enterprise infrastructure - delivered by{' '}
              <a href="/contact-us" className="mdt2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="mdt2-feature-row">
              <div className="mdt2-feat">
                <div className="mdt2-feat-icon"><i className="fas fa-robot"></i></div>
                <div className="mdt2-feat-body"><strong>AI-Powered Observability</strong><span>Anomaly detection &amp; predictive analytics.</span></div>
              </div>
              <div className="mdt2-feat">
                <div className="mdt2-feat-icon"><i className="fas fa-bolt"></i></div>
                <div className="mdt2-feat-body"><strong>Real-Time Monitoring</strong><span>Instant alerts and performance dashboards.</span></div>
              </div>
              <div className="mdt2-feat">
                <div className="mdt2-feat-icon"><i className="fas fa-chart-line"></i></div>
                <div className="mdt2-feat-body"><strong>Unified Platform</strong><span>Servers, networks, apps, cloud &amp; VMs.</span></div>
              </div>
            </div>

            <div className="mdt2-stats-row">
              <div className="mdt2-stat-card"><i className="fas fa-server"></i><div><span className="mdt2-stat-num">1000+</span><span className="mdt2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span></div></div>
              <div className="mdt2-stat-card"><i className="fas fa-clock"></i><div><span className="mdt2-stat-num">6hrs</span><span className="mdt2-stat-lbl">ISSUE<br />RESOLUTION</span></div></div>
              <div className="mdt2-stat-card mdt2-stat-brand">
                <img loading="lazy" src="/assets/images/partners/MOTADATA.jpg" alt="Motadata" className="mdt2-brand-logo" onError={e=>{e.target.style.opacity='0.3';}} />
                <span className="mdt2-stat-lbl">SAARC<br />PARTNER</span>
              </div>
            </div>

            <div className="mdt2-cta-row">
              <a href="/contact-us" className="mdt2-btn-ghost">Talk to Our Experts <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="mdt2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="mdt2-product-glow" aria-hidden="true"></div>
            <div className="mdt2-showcase">
              <img loading="lazy" src="/assets/mota.png" alt="Motadata IT Monitoring Platform" className="mdt2-hero-product-img" onError={e=>{e.target.style.opacity='0.3';}} />
            </div>
            <div className="mdt2-industry-strip">
              <span className="mdt2-ind-item"><i className="fas fa-server"></i> Infrastructure</span>
              <span className="mdt2-ind-sep"></span>
              <span className="mdt2-ind-item"><i className="fas fa-globe"></i> Networks</span>
              <span className="mdt2-ind-sep"></span>
              <span className="mdt2-ind-item"><i className="fas fa-cloud"></i> Cloud</span>
              <span className="mdt2-ind-sep"></span>
              <span className="mdt2-ind-item"><i className="fas fa-database"></i> Databases</span>
              <span className="mdt2-ind-sep"></span>
              <span className="mdt2-ind-item"><i className="fas fa-code"></i> Applications</span>
            </div>
          </div>

        </div>
      </section>

      
      
      

      {/* Use Cases */}
      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-tachometer-alt"></i><span>FREE MONITORING CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Gain Full IT Visibility?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Blind spots in your current IT infrastructure</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to reduce downtime with proactive monitoring</span></div>
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

      <UseCaseSlider useCases={motadataUseCases} partnerColor="#10b981" title="Motadata Use Cases" subtitle="Successfully Deployed by Trace Network across diverse industry sectors" />

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
                Exclusive IT Observability Offer
              </div>

              <p className="greythr-offer-desc">
                Experience the power of Motadata IT monitoring and observability firsthand — zero risk, zero commitment. Our team will set up a complete proof of concept tailored to your environment so you can see the results before you invest.
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
                  <span>Tailored to Your<br />Infrastructure</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <span>Exclusive Pricing<br />on Motadata Solutions</span>
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
                  {['IT Infrastructure Monitoring', 'Log Management', 'Network Traffic Analysis', 'IT Service Management'].map((m, i) => (
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

