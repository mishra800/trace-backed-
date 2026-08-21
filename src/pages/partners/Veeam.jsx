import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Veeam.css';

const veeamUseCases = [
  { id: 'education', category: 'EDUCATION', icon: 'fas fa-graduation-cap', title: 'Education Sector (Data Protection for Digital Learning)', description: 'Problem: Institutions needed reliable backup for student data, LMS platforms, and virtual labs.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#veeam-education' },
  { id: 'manufacturing', category: 'MANUFACTURING', icon: 'fas fa-industry', title: 'Manufacturing Sector (Business Continuity for Production Systems)', description: 'Problem: Manufacturing units required backup for ERP systems, production data, and critical applications.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#veeam-manufacturing' },
  { id: 'enterprise', category: 'ENTERPRISE', icon: 'fas fa-building', title: 'Top IT Company / MNC (Enterprise Backup & DR)', description: 'Problem: Large IT organizations needed high-performance backup for large-scale data and multi-location infrastructure.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#veeam-enterprise' },
  { id: 'government', category: 'GOVERNMENT', icon: 'fas fa-university', title: 'Government Sector (Secure & Compliant Data Backup)', description: 'Problem: Government organizations required secure, compliant, and reliable data backup solutions.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#veeam-government' },
  { id: 'retail', category: 'RETAIL', icon: 'fas fa-shopping-cart', title: 'Consumer Staples / Retail & FMCG (Data Protection)', description: 'Problem: Organizations needed backup for POS systems, sales data, and distributed branch infrastructure.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#veeam-retail' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare (Critical Data Protection & Recovery)', description: 'Problem: Hospitals require immutable backups and fast recovery for patient records and clinical systems.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#veeam-healthcare' },
];

export default function Veeam() {
  useAwardsSlider();
  const seoData = getSEOData('partnerVeeam');
  return (
    <div className="veeam-page veeam-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* -- HERO -- */}
      <section className="veeam2-hero">
        <div className="veeam2-hero-glow-left" aria-hidden="true"></div>
        <div className="veeam2-hero-glow-right" aria-hidden="true"></div>
        <div className="veeam2-hero-inner container">

          <div className="veeam2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="veeam2-headline">
              Top Veeam Backup<br />
              &amp; Data Protection<br />
              <span className="veeam2-headline-accent">Solution Provider</span>
            </h1>
            <div className="veeam2-headline-rule"></div>
            <p className="veeam2-desc">
              Secure, back up, and restore business-critical data across virtual, physical, and cloud environments - delivered by{' '}
              <a href="/contact-us" className="veeam2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="veeam2-feature-row">
              <div className="veeam2-feat">
                <div className="veeam2-feat-icon"><i className="fas fa-tachometer-alt"></i></div>
                <div className="veeam2-feat-body"><strong>Fast Backup &amp; Recovery</strong><span>Restore data instantly with minimal downtime.</span></div>
              </div>
              <div className="veeam2-feat">
                <div className="veeam2-feat-icon"><i className="fas fa-lock"></i></div>
                <div className="veeam2-feat-body"><strong>Ransomware Protection</strong><span>Immutable backups against cyber threats.</span></div>
              </div>
              <div className="veeam2-feat">
                <div className="veeam2-feat-icon"><i className="fas fa-cloud-upload-alt"></i></div>
                <div className="veeam2-feat-body"><strong>Cloud &amp; Hybrid Support</strong><span>On-prem, AWS, Azure &amp; hybrid environments.</span></div>
              </div>
            </div>

            <div className="veeam2-stats-row">
              <div className="veeam2-stat-card"><i className="fas fa-clock"></i><div><span className="veeam2-stat-num">6hr</span><span className="veeam2-stat-lbl">SUPPORT<br />RESOLUTION</span></div></div>
              <div className="veeam2-stat-card"><i className="fas fa-shield-alt"></i><div><span className="veeam2-stat-num">100%</span><span className="veeam2-stat-lbl">DEPLOYMENT<br />SUCCESS</span></div></div>
              <div className="veeam2-stat-card veeam2-stat-brand">
                <img loading="lazy" src="/assets/images/partners/VEEAM.jpg" alt="Veeam" className="veeam2-brand-logo" onError={e=>{e.target.style.opacity='0.3';}} />
                <span className="veeam2-stat-lbl">AUTHORIZED<br />RESELLER</span>
              </div>
            </div>

            <div className="veeam2-cta-row">
              <a href="/contact-us" className="veeam2-btn-ghost">Talk to Our Experts <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="veeam2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="veeam2-product-glow" aria-hidden="true"></div>
            <div className="veeam2-showcase">
              <div className="veeam2-showcase-inner">
                <img loading="lazy" src="/assets/venna.png" alt="Veeam Backup & Data Protection" className="veeam2-hero-product-img" onError={e=>{e.target.style.opacity='0.3';}} />
              </div>
            </div>
            <div className="veeam2-industry-strip">
              <span className="veeam2-ind-item"><i className="fas fa-server"></i> Virtual Machines</span>
              <span className="veeam2-ind-sep"></span>
              <span className="veeam2-ind-item"><i className="fas fa-cloud"></i> Cloud</span>
              <span className="veeam2-ind-sep"></span>
              <span className="veeam2-ind-item"><i className="fas fa-desktop"></i> Physical</span>
              <span className="veeam2-ind-sep"></span>
              <span className="veeam2-ind-item"><i className="fas fa-database"></i> Databases</span>
              <span className="veeam2-ind-sep"></span>
              <span className="veeam2-ind-item"><i className="fas fa-code"></i> Applications</span>
            </div>
          </div>

        </div>
      </section>

      
      {/* Veeam Certifications Carousel */}
      <section className="veeam-certifications">
        <div className="container">
          <div className="veeam-cert-header" data-aos="fade-up">
            <h2><i className="fas fa-award header-icon-glow-green"></i> Our Veeam Certifications</h2>
            <p>Veeam-certified professionals delivering proven data protection expertise across backup, replication, and disaster recovery</p>
          </div>
          <div className="veeam-cert-slider-wrapper">
            <div className="veeam-cert-images">
              {[
                { file: 'public cloud',                  name: 'Public Cloud' },
                { file: 'cybersecurity &DR',             name: 'Cybersecurity & DR' },
                { file: 'SAss Protection',               name: 'SaaS Protection' },
                { file: 'cloud service provider',        name: 'Cloud Service Provider' },
                { file: 'kubernets and data protection', name: 'Kubernetes and Data Protection' },
              ].map(cert => (
                <div key={cert.file} className="veeam-cert-img-card">
                  <img loading="lazy" src={`/assets/${cert.file}.png`} alt={cert.name} title={cert.name} />
                  <div className="veeam-cert-card-overlay"></div>
                  <span className="veeam-cert-label">{cert.name}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { file: 'public cloud',                  name: 'Public Cloud' },
                { file: 'cybersecurity &DR',             name: 'Cybersecurity & DR' },
                { file: 'SAss Protection',               name: 'SaaS Protection' },
                { file: 'cloud service provider',        name: 'Cloud Service Provider' },
                { file: 'kubernets and data protection', name: 'Kubernetes and Data Protection' },
              ].map(cert => (
                <div key={`dup-${cert.file}`} className="veeam-cert-img-card">
                  <img loading="lazy" src={`/assets/${cert.file}.png`} alt={cert.name} title={cert.name} />
                  <div className="veeam-cert-card-overlay"></div>
                  <span className="veeam-cert-label">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-hdd"></i><span>FREE BACKUP CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Protect Your Business-Critical Data?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Backup gaps putting your recovery objectives at risk</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to achieve faster RTO and RPO targets</span></div>
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

      <UseCaseSlider useCases={veeamUseCases} partnerColor="#00b159" title="Veeam Use Cases" subtitle="Successfully Deployed by Trace Network across diverse industry sectors" />

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
                Exclusive Data Backup Offer
              </div>

              <p className="greythr-offer-desc">
                Experience the industry leader in data backup and recovery. Set up a secure, tailored proof of concept for cloud, virtual, or physical workloads.
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
                  <span>Tailored to Your<br />Backup Strategy</span>
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
                  {['Veeam Backup & Replication', 'Veeam ONE Monitoring', 'Microsoft 365 Backup', 'Ransomware Recovery'].map((m, i) => (
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

