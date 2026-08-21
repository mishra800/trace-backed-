import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Zoho.css';

const zohoUseCases = [
  {
    id: 'sales',
    category: 'SALES',
    icon: 'fas fa-chart-line',
    title: 'Sales Teams (CRM & Lead Management)',
    description: 'Problem: Difficulty managing leads, tracking sales activities, and closing deals efficiently with disconnected tools.',
    image: '/assets/images/use-cases/usecase6.png',
    linkTo: '/case-studies#zoho-crm'
  },
  {
    id: 'finance',
    category: 'FINANCE',
    icon: 'fas fa-coins',
    title: 'Finance Teams (Accounting & Compliance)',
    description: 'Problem: Manual accounting, delayed invoicing, and compliance challenges slowing down financial operations.',
    image: '/assets/images/use-cases/usecase4.png',
    linkTo: '/case-studies#zoho-books'
  },
  {
    id: 'marketing',
    category: 'MARKETING',
    icon: 'fas fa-bullhorn',
    title: 'Marketing Teams (Lead Generation & Automation)',
    description: 'Problem: Difficulty managing campaigns, leads, and marketing ROI without an integrated platform.',
    image: '/assets/images/use-cases/usecase5.png',
    linkTo: '/case-studies#zoho-marketing'
  },
  {
    id: 'retail',
    category: 'RETAIL',
    icon: 'fas fa-shopping-bag',
    title: 'Retail & eCommerce (Inventory & Customer Management)',
    description: 'Problem: Managing inventory, sales, and customer data across multiple platforms without a unified system.',
    image: '/assets/images/use-cases/usecase3.png',
    linkTo: '/case-studies#zoho-retail'
  },
  {
    id: 'manufacturing',
    category: 'MANUFACTURING',
    icon: 'fas fa-industry',
    title: 'Manufacturing Industry (Operations & Workflow Automation)',
    description: 'Problem: Disconnected systems for production, inventory, and sales leading to operational inefficiencies.',
    image: '/assets/images/use-cases/usecase7.png',
    linkTo: '/case-studies#zoho-manufacturing'
  },
  {
    id: 'enterprise',
    category: 'ENTERPRISE',
    icon: 'fas fa-building',
    title: 'Large Enterprises (Complete Business Digitization)',
    description: 'Problem: Multiple disconnected tools and lack of centralized data hindering organizational efficiency.',
    image: '/assets/images/use-cases/usecase2.png',
    linkTo: '/case-studies#zoho-enterprise'
  }
];

export default function Zoho() {
  useAwardsSlider();
  const seoData = getSEOData('partnerZoho');
  return (
    <div className="zoho-page zh2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* ── Zoho Premium Hero ── */}
      <section className="zh2-hero">
        <div className="zh2-hero-bg" aria-hidden="true"></div>
        <div className="zh2-hero-glow-left" aria-hidden="true"></div>
        <div className="zh2-hero-glow-right" aria-hidden="true"></div>

        <div className="zh2-hero-inner container">

          {/* LEFT CONTENT */}
          <div className="zh2-left" data-aos="fade-right" data-aos-duration="900">

            <h1 className="zh2-headline">
              Leading Zoho Authorized Partner<br />
              &amp; Business Solutions<br />
              <span className="zh2-headline-accent">Provider</span>
            </h1>
            <div className="zh2-headline-rule"></div>

            <p className="zh2-desc">
              All-in-one cloud-based business software for sales, finance, marketing,
              and operations - implemented by{' '}
              <a href="/contact-us" className="zh2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="zh2-feature-row">
              <div className="zh2-feat">
                <div className="zh2-feat-icon"><i className="fas fa-cloud"></i></div>
                <div className="zh2-feat-body">
                  <strong>Cloud-Based</strong>
                  <span>Accessible anytime, anywhere, any device.</span>
                </div>
              </div>
              <div className="zh2-feat">
                <div className="zh2-feat-icon"><i className="fas fa-layer-group"></i></div>
                <div className="zh2-feat-body">
                  <strong>45+ Apps</strong>
                  <span>One unified platform for all business needs.</span>
                </div>
              </div>
              <div className="zh2-feat">
                <div className="zh2-feat-icon"><i className="fas fa-cogs"></i></div>
                <div className="zh2-feat-body">
                  <strong>Automation</strong>
                  <span>End-to-end workflow automation across departments.</span>
                </div>
              </div>
            </div>

            <div className="zh2-stats-row">
              <div className="zh2-stat-card">
                <i className="fas fa-th-large"></i>
                <div>
                  <span className="zh2-stat-num">45+</span>
                  <span className="zh2-stat-lbl">INTEGRATED<br />APPS</span>
                </div>
              </div>
              <div className="zh2-stat-card">
                <i className="fas fa-cloud"></i>
                <div>
                  <span className="zh2-stat-num">100%</span>
                  <span className="zh2-stat-lbl">CLOUD-<br />BASED</span>
                </div>
              </div>
              <div className="zh2-stat-card zh2-stat-brand">
                <img loading="lazy"
                  src="/assets/images/partners/Zoho.png"
                  alt="Zoho"
                  className="zh2-brand-logo"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span className="zh2-stat-lbl">CERTIFIED<br />PARTNER</span>
              </div>
            </div>

            <div className="zh2-cta-row">
              <a href="/contact-us" className="zh2-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </a>
            </div>

          </div>

          {/* RIGHT - Product Showcase */}
          <div className="zh2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">

            <div className="zh2-product-glow" aria-hidden="true"></div>

            <div className="zh2-showcase">
              <img loading="lazy"
                src="/assets/zoho.png"
                alt="Zoho Business Suite Solutions"
                className="zh2-hero-product-img"
                onError={(e) => { e.target.style.opacity = '0.3'; }}
              />
              <div className="zh2-platform" aria-hidden="true">
                <div className="zh2-plat-ring zh2-plat-ring-1"></div>
                <div className="zh2-plat-ring zh2-plat-ring-2"></div>
                <div className="zh2-plat-ring zh2-plat-ring-3"></div>
                <div className="zh2-plat-surface"></div>
              </div>
            </div>

            <div className="zh2-industry-strip">
              <span className="zh2-ind-item"><i className="fas fa-chart-line"></i> Sales</span>
              <span className="zh2-ind-sep"></span>
              <span className="zh2-ind-item"><i className="fas fa-coins"></i> Finance</span>
              <span className="zh2-ind-sep"></span>
              <span className="zh2-ind-item"><i className="fas fa-bullhorn"></i> Marketing</span>
              <span className="zh2-ind-sep"></span>
              <span className="zh2-ind-item"><i className="fas fa-industry"></i> Operations</span>
              <span className="zh2-ind-sep"></span>
              <span className="zh2-ind-item"><i className="fas fa-building"></i> Enterprise</span>
            </div>

          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section className="aruba-certifications zh-certifications">
        <div className="container">
          <div className="aruba-section-header" data-aos="fade-up">
            <h2><i className="fas fa-award header-icon-glow"></i> Our Team Certifications</h2>
            <p>Zoho-certified professionals delivering proven expertise across CRM, finance, and business suite solutions</p>
          </div>
          <div className="aruba-cert-slider-wrapper">
            <div className="aruba-cert-images">
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (1).jpeg" alt="Zoho Certified Professional" title="Zoho Certified Professional" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Certified Professional</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (3).jpeg" alt="Zoho Certified Specialist" title="Zoho Certified Specialist" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Certified Specialist</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (4).jpeg" alt="Zoho CRM Administrator" title="Zoho CRM Administrator" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho CRM Administrator</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (5).jpeg" alt="Zoho Creator Developer" title="Zoho Creator Developer" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Creator Developer</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (6).jpeg" alt="Zoho Books Specialist" title="Zoho Books Specialist" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Books Specialist</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (7).jpeg" alt="Zoho Desk Associate" title="Zoho Desk Associate" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Desk Associate</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (8).jpeg" alt="Zoho People Professional" title="Zoho People Professional" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho People Professional</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (9).jpeg" alt="Zoho Analytics Expert" title="Zoho Analytics Expert" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Analytics Expert</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/zoho CRM administrator.png" alt="Zoho CRM Administrator" title="Zoho CRM Administrator" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho CRM Administrator</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/zoho desk Associate.png" alt="Zoho Desk Associate" title="Zoho Desk Associate" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Desk Associate</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/image1.png" alt="Zoho Authorized Partner Certificate" title="Zoho Authorized Partner Certificate" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Authorized Partner</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/image2.png" alt="Zoho Certified Technical Architect" title="Zoho Certified Technical Architect" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Certified Architect</span>
              </div>

              {/* Duplicate for seamless infinite loop */}
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (1).jpeg" alt="Zoho Certified Professional" title="Zoho Certified Professional" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Certified Professional</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (3).jpeg" alt="Zoho Certified Specialist" title="Zoho Certified Specialist" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Certified Specialist</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (4).jpeg" alt="Zoho CRM Administrator" title="Zoho CRM Administrator" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho CRM Administrator</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (5).jpeg" alt="Zoho Creator Developer" title="Zoho Creator Developer" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Creator Developer</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (6).jpeg" alt="Zoho Books Specialist" title="Zoho Books Specialist" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Books Specialist</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (7).jpeg" alt="Zoho Desk Associate" title="Zoho Desk Associate" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Desk Associate</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (8).jpeg" alt="Zoho People Professional" title="Zoho People Professional" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho People Professional</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/1 (9).jpeg" alt="Zoho Analytics Expert" title="Zoho Analytics Expert" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Analytics Expert</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/zoho CRM administrator.png" alt="Zoho CRM Administrator" title="Zoho CRM Administrator" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho CRM Administrator</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/zoho desk Associate.png" alt="Zoho Desk Associate" title="Zoho Desk Associate" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Desk Associate</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/image1.png" alt="Zoho Authorized Partner Certificate" title="Zoho Authorized Partner Certificate" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Authorized Partner</span>
              </div>
              <div className="aruba-cert-img-card">
                <img loading="lazy" src="/assets/images/zoho/image2.png" alt="Zoho Certified Technical Architect" title="Zoho Certified Technical Architect" />
                <div className="cert-card-overlay"></div>
                <span className="cert-tooltip">Zoho Certified Architect</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Slider */}

      {/* Career CTA - above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-briefcase"></i><span>FREE BUSINESS CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Digitalise Your Business Operations?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three process gaps slowing your teams down</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to automate workflows and boost productivity</span></div>
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
        useCases={zohoUseCases}
        partnerColor="#e8232a"
        title="Zoho Use Cases"
        subtitle="Successfully Implemented by Trace Network across diverse business functions"
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
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/new.jpeg" alt="Trace Excellence & Leadership Award" title="Trace Excellence & Leadership Award" />
              <span>Trace Excellence & Leadership Award</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/1.png" alt="Sophos Best Performing Partner (2024)" title="Sophos Best Performing Partner (2024)" />
              <span>Sophos Best Performing Partner (2024)</span>
            </div>
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
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" alt="leadership" /></div><p><strong>20+ Years of Cybersecurity Leadership</strong> With two decades of proven expertise, we provide penetration testing, vulnerability assessments, and enterprise IT security solutions across India.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div><p><strong>Customer‑First, Value‑Driven</strong> Our cost-effective services ensure maximum protection with right-sized solutions and the lowest total cost of ownership (TCO).</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" /></div><p><strong>Local Presence with Rapid IT Support</strong> Trace Network engineers are available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag for quick on-site support.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" /></div><p><strong>ISO 27001‑Certified Provider</strong> We follow stringent change management and compliance practices aligned with global information security standards.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" /></div><p><strong>Proven Deployment Framework</strong> Assess → Design → Deploy → Optimise → Support minimises downtime and ensures maximum ROI.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div><p><strong>Flexible MSSP &amp; Pricing Models</strong> Choose from CapEx, OpEx, or MSSP models to align investments with your business goals and cash-flow requirements.</p></div>
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
                <span className="greythr-offer-free">FREE Demo</span> & Assessment
              </h2>

              <div className="greythr-offer-pill">
                <span className="greythr-offer-pill-dot"></span>
                Exclusive Enterprise Suite Offer
              </div>

              <p className="greythr-offer-desc">
                Experience Zoho's complete suite of business applications. Set up a tailored demonstration under expert guidance to optimize your business operations.
              </p>

              {/* Feature Grid */}
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span>No Upfront Cost<br />for Demo Setup</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-sliders-h"></i>
                  </div>
                  <span>Tailored to Your<br />Business Flow</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <span>Exclusive Pricing<br />on Zoho Solutions</span>
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
                  {['Zoho CRM & Creator', 'Zoho Books & Finance', 'Zoho Workplace Suite', 'Zoho People & HR'].map((m, i) => (
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

