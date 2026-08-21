import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Lenovo.css';

const lenovoUseCases = [
  {
    id: 'banking',
    category: 'BANKING',
    icon: 'fas fa-university',
    title: 'Banking Sector (Secure Enterprise Computing)',
    description: 'Problem: Banks require secure, high-performance devices and reliable backend infrastructure for financial applications and secure operations.',
    image: '/assets/images/use-cases/usecase4.png',
    linkTo: '/case-studies#lenovo-banking'
  },
  {
    id: 'healthcare',
    category: 'HEALTHCARE',
    icon: 'fas fa-hospital',
    title: 'Healthcare Sector (Hospital IT Infrastructure)',
    description: 'Problem: Hospitals require reliable systems for patient records, diagnostics, telemedicine, and healthcare applications.',
    image: '/assets/images/use-cases/usecase5.png',
    linkTo: '/case-studies#lenovo-healthcare'
  },
  {
    id: 'education',
    category: 'EDUCATION',
    icon: 'fas fa-graduation-cap',
    title: 'Education Sector (Digital Learning Infrastructure)',
    description: 'Problem: Educational institutions require scalable infrastructure for digital classrooms, labs, and campus administration.',
    image: '/assets/images/use-cases/usecase2.png',
    linkTo: '/case-studies#lenovo-education'
  },
  {
    id: 'enterprise',
    category: 'ENTERPRISE',
    icon: 'fas fa-building',
    title: 'Enterprise & Corporate Offices (Hybrid Workplace Solutions)',
    description: 'Problem: Organizations need scalable computing devices and backend infrastructure for hybrid workplaces and enterprise operations.',
    image: '/assets/images/use-cases/usecase6.png',
    linkTo: '/case-studies#lenovo-enterprise'
  },
  {
    id: 'manufacturing',
    category: 'MANUFACTURING',
    icon: 'fas fa-industry',
    title: 'Manufacturing Industry (Industrial IT Infrastructure)',
    description: 'Problem: Manufacturing companies require reliable infrastructure for ERP systems, production monitoring, and industrial operations.',
    image: '/assets/images/use-cases/usecase7.png',
    linkTo: '/case-studies#lenovo-manufacturing'
  },
  {
    id: 'government',
    category: 'GOVERNMENT',
    icon: 'fas fa-shield-alt',
    title: 'Government & Defence Sector (Secure & Policy-Driven Infrastructure)',
    description: 'Problem: Government and defence organizations require secure, policy-driven, and high-performance IT infrastructure.',
    image: '/assets/images/use-cases/usecase1.png',
    linkTo: '/case-studies#lenovo-government'
  }
];

export default function Lenovo() {
  useAwardsSlider();
  const seoData = getSEOData('partnerLenovo');
  return (
    <div className="hp-page lenovo-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

          {/* ── Lenovo Premium Hero ── */}
          <section className="lnv-hero">
            {/* bggg.jpg starfield + blue overlay */}
            <div className="lnv-hero-bg" aria-hidden="true"></div>
            {/* Blue glow overlays */}
            <div className="lnv-hero-glow-left" aria-hidden="true"></div>
            <div className="lnv-hero-glow-right" aria-hidden="true"></div>

            <div className="lnv-hero-inner container">

              {/* ── LEFT CONTENT ── */}
              <div className="lnv-left" data-aos="fade-right" data-aos-duration="900">

                {/* Headline */}
                <h1 className="lnv-headline">
                  Leading Lenovo Infrastructure<br />
                  &amp; Enterprise Solutions<br />
                  <span className="lnv-headline-accent">Partner</span>
                </h1>
                <div className="lnv-headline-rule"></div>

                {/* Description */}
                <p className="lnv-desc">
                  Secure, high-performance, and scalable Lenovo IT infrastructure
                  designed for enterprises, SMBs, healthcare, education,
                  banking, and government – delivered by{' '}
                  <a href="/contact-us" className="lnv-desc-link">Trace Network &amp; Engineering.</a>
                </p>

                {/* Feature pills — horizontal row matching reference */}
                <div className="lnv-feature-row">
                  <div className="lnv-feat">
                    <div className="lnv-feat-icon"><i className="fas fa-shield-alt"></i></div>
                    <div className="lnv-feat-body">
                      <strong>Secure &amp; Reliable</strong>
                      <span>Enterprise-grade security you can trust.</span>
                    </div>
                  </div>
                  <div className="lnv-feat">
                    <div className="lnv-feat-icon"><i className="fas fa-tachometer-alt"></i></div>
                    <div className="lnv-feat-body">
                      <strong>High Performance</strong>
                      <span>Powerful solutions built for mission-critical workloads.</span>
                    </div>
                  </div>
                  <div className="lnv-feat">
                    <div className="lnv-feat-icon"><i className="fas fa-chart-line"></i></div>
                    <div className="lnv-feat-body">
                      <strong>Scalable Solutions</strong>
                      <span>Grow your infrastructure with confidence.</span>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="lnv-stats-row">
                  <div className="lnv-stat-card">
                    <i className="fas fa-server"></i>
                    <div>
                      <span className="lnv-stat-num">1000+</span>
                      <span className="lnv-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span>
                    </div>
                  </div>
                  <div className="lnv-stat-card">
                    <i className="fas fa-clock"></i>
                    <div>
                      <span className="lnv-stat-num">6hrs</span>
                      <span className="lnv-stat-lbl">ISSUE<br />RESOLUTION</span>
                    </div>
                  </div>
                  <div className="lnv-stat-card lnv-stat-brand">
                    <img loading="lazy"
                      src="/assets/images/partners/LENOVO.jpg"
                      alt="Lenovo"
                      className="lnv-brand-logo"
                    />
                    <span className="lnv-stat-lbl">CERTIFIED<br />PARTNER</span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="lnv-cta-row">
                  <a href="/contact-us" className="lnv-btn-ghost">
                    Talk to Our Experts <i className="fas fa-chevron-right"></i>
                  </a>
                </div>

              </div>

              {/* ── RIGHT — Product Showcase ── */}
              <div className="lnv-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">

                {/* Blue radial glow behind products */}
                <div className="lnv-product-glow" aria-hidden="true"></div>

                {/* Product showcase container */}
                <div className="lnv-showcase">

                  {/* Combined product group image */}
                  <img loading="lazy"
                    src="/assets/lenav-images/leon.png"
                    alt="Lenovo ThinkStation, ThinkPad and ThinkSystem Server"
                    className="lnv-hero-product-img"
                  />

                  {/* Glowing circular platform beneath */}
                  <div className="lnv-platform" aria-hidden="true">
                    <div className="lnv-plat-ring lnv-plat-ring-1"></div>
                    <div className="lnv-plat-ring lnv-plat-ring-2"></div>
                    <div className="lnv-plat-ring lnv-plat-ring-3"></div>
                    <div className="lnv-plat-surface"></div>
                  </div>
                </div>

                {/* Industry strip — under the product image */}
                <div className="lnv-industry-strip">
                  <span className="lnv-ind-item"><i className="fas fa-building"></i> For Enterprises</span>
                  <span className="lnv-ind-sep"></span>
                  <span className="lnv-ind-item"><i className="fas fa-store"></i> For SMBs</span>
                  <span className="lnv-ind-sep"></span>
                  <span className="lnv-ind-item"><i className="fas fa-hospital"></i> For Healthcare</span>
                  <span className="lnv-ind-sep"></span>
                  <span className="lnv-ind-item"><i className="fas fa-graduation-cap"></i> For Education</span>
                  <span className="lnv-ind-sep"></span>
                  <span className="lnv-ind-item"><i className="fas fa-landmark"></i> For Government</span>
                  <span className="lnv-ind-sep"></span>
                  <span className="lnv-ind-item"><i className="fas fa-university"></i> For Banking</span>
                </div>

              </div>

            </div>{/* /lnv-hero-inner */}
          </section>

          
          
          
          {/* Use Cases - Professional Slider */}

      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-laptop-code"></i><span>FREE DEVICE CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Modernize Your Workplace Devices?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three device performance gaps in your fleet</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to improve productivity with smart hardware</span></div>
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
            useCases={lenovoUseCases}
            partnerColor="#e2001a"
            title="Lenovo Laptop, Desktop & Server Use Cases"
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
              <h2 className="section-title__title">
                Recognized &amp; Trusted <span>for Delivering </span><br />
                Value &amp; Excellence
              </h2>
            </div>
            <div className="awards-slider">
              <div className="awards-track">
                <div className="award-card"><img loading="lazy" src="/assets/images/award/1.png" alt="Sophos Best Performing Partner (2024)" title="Sophos Best Performing Partner (2024)" /><span>Sophos Best Performing Partner (2024)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/2.png" alt="Certification of Completion Aruba Instant (2023)" title="Certification of Completion Aruba Instant (2023)" /><span>Certification of Completion Aruba Instant (2023)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/3.png" alt="Core Champion HPE Aruba Networking (2023)" title="Core Champion HPE Aruba Networking (2023)" /><span>Core Champion HPE Aruba Networking (2023)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/4.png" alt="Sophos Top Performer of the Region" title="Sophos Top Performer of the Region" /><span>Sophos Top Performer of the Region</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/5.png" alt="Sophos Best Solution Partner" title="Sophos Best Solution Partner" /><span>Sophos Best Solution Partner</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/6.png" alt="Certified by SonicWall (2022)" title="Certified by SonicWall (2022)" /><span>Certified by SonicWall (2022)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/7.png" alt="HPE Aruba Accelerating Next (2022)" title="HPE Aruba Accelerating Next (2022)" /><span>HPE Aruba Accelerating Next (2022)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/11.png" alt="Sophos Best Top Performing Partner (2020)" title="Sophos Best Top Performing Partner (2020)" /><span>Sophos Best Top Performing Partner (2020)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/12.png" alt="Sophos Platinum Partner (2019)" title="Sophos Platinum Partner (2019)" /><span>Sophos Platinum Partner (2019)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/13.png" alt="Sophos Best Performing Partner (2018)" title="Sophos Best Performing Partner (2018)" /><span>Sophos Best Performing Partner (2018)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/14.png" alt="Sophos Best Solution Partner (2018)" title="Sophos Best Solution Partner (2018)" /><span>Sophos Best Solution Partner (2018)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/15.png" alt="Sophos Best Solution Partner (2017)" title="Sophos Best Solution Partner (2017)" /><span>Sophos Best Solution Partner (2017)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/16.png" alt="Sophos Best Solution Partner (2016)" title="Sophos Best Solution Partner (2016)" /><span>Sophos Best Solution Partner (2016)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/17.png" alt="Sophos Highest Achiever Business Partner (2015)" title="Sophos Highest Achiever Business Partner (2015)" /><span>Sophos Highest Achiever Business Partner (2015)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/18.png" alt="Cyberoam Authorized Goal Partner (2015)" title="Cyberoam Authorized Goal Partner (2015)" /><span>Cyberoam Authorized Goal Partner (2015)</span></div>
                <div className="award-card"><img loading="lazy" src="/assets/images/award/19.png" alt="Sophos Top Performer Of the Region" title="Sophos Top Performer Of the Region" /><span>Sophos Top Performer Of the Region</span></div>
              </div>
            </div>
          </section>

          {/* Why Leading Brands Choose Trace Section */}
          <section className="premium-cards-section" style={{ marginTop: '-20px' }}>
            <div className="premium-container">
              <div className="section-title text-center pb-4">
                <h2 className="section-title__title">Why Leading<span> Brands</span> Choose<span> Trace</span></h2>
              </div>
              <div className="premium-card-grid">
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/certified.png" alt="certified" title="certified" /></div>
                  <p><strong>Multi‑vendor, Certified Network Security Expertise</strong> Partnering with 40+ global OEMs, Trace Network offers multi-vendor cybersecurity and network solutions that are future-proof, scalable, and tailored to your exact IT security needs.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" alt="leadership" title="leadership" /></div>
                  <p><strong>20+ Years of Cybersecurity Leadership</strong> With two decades of proven expertise, we provide penetration testing, vulnerability assessments, and enterprise IT security solutions for Top Campuses, Global Capability Centres or Special Economic Zones, data centres, and enterprises across India.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" title="luxury" /></div>
                  <p><strong>Customer‑First, Value‑Driven</strong> Our cost-effective cybersecurity services ensure maximum protection with right-sized solutions, reducing risks and delivering the lowest total cost of ownership (TCO) for businesses.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" title="technical-support" /></div>
                  <p><strong>Local Presence with Rapid IT Support</strong> Trace Network engineers are available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag, ensuring quick on-site support and reliable network security services whenever you need them.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" title="iso-certificate" /></div>
                  <p><strong>ISO 27001‑Certified Cybersecurity Provider</strong> As an ISO 27001-certified company, we follow stringent change management and compliance practices, aligning with global information security standards to protect your business.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" title="frame" /></div>
                  <p><strong>Proven Cybersecurity Deployment Framework</strong> Our structured approach, Assess → Design → Deploy → Optimise → Support, minimises downtime, enhances performance, and ensures maximum ROI from your IT and cybersecurity investments.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" title="agile" /></div>
                  <p><strong>Flexible MSSP &amp; Security Pricing Models</strong> Choose from CapEx, OpEx, or Managed Security Service Provider (MSSP) models to align IT security investments with your organisation's business goals and cash-flow requirements.</p>
                </div>
              </div>
            </div>
          </section>



          {/* Special Offer — FREE POC */}
          <section className="lnv-poc-section" data-aos="fade-up" data-aos-duration="900">
            {/* Animated particle background */}
            <div className="lnv-poc-particles" aria-hidden="true">
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} className="lnv-poc-particle"></span>
              ))}
            </div>
            {/* Blue corner glows */}
            <div className="lnv-poc-glow-tl" aria-hidden="true"></div>
            <div className="lnv-poc-glow-br" aria-hidden="true"></div>

            <div className="lnv-poc-inner container">

              {/* ── LEFT ── */}
              <div className="lnv-poc-left">
                {/* Special offer badge */}
                <div className="lnv-poc-badge">
                  <i className="fas fa-shield-alt"></i>
                  <span>SPECIAL OFFER</span>
                </div>

                {/* Headline */}
                <h2 className="lnv-poc-headline">
                  <span className="lnv-poc-free">FREE</span> POC<br />
                  <span className="lnv-poc-headline-white">Available</span>
                </h2>
                <div className="lnv-poc-rule"></div>

                {/* Subtitle */}
                <p className="lnv-poc-subtitle">
                  Exclusive Offers on{' '}
                  <span className="lnv-poc-link-text">Lenovo Laptops,<br />Desktops &amp; Servers</span>
                </p>

                {/* Description */}
                <p className="lnv-poc-desc">
                  Get expert guidance for Lenovo Laptop Solutions, Lenovo Desktop Infrastructure, Lenovo Server
                  Deployment, Enterprise Computing, Hybrid Workplace Solutions, and Data Center Modernization.
                </p>

                {/* CTA button */}
                <Link to="/contact-us" className="lnv-poc-cta-btn">
                  CONTACT TRACE NETWORK <i className="fas fa-arrow-right"></i>
                </Link>

                {/* Trust badges */}
                <div className="lnv-poc-trust">
                  <span className="lnv-poc-trust-item"><i className="fas fa-shield-alt"></i> Zero Risk</span>
                  <span className="lnv-poc-trust-item"><i className="fas fa-lock"></i> Secure</span>
                  <span className="lnv-poc-trust-item"><i className="fas fa-users"></i> Certified Experts</span>
                </div>
              </div>

              {/* ── RIGHT — 2×3 icon grid ── */}
              <div className="lnv-poc-right">
                {/* Row 1 */}
                <div className="lnv-poc-grid-row">
                  <div className="lnv-poc-feat-card">
                    <div className="lnv-poc-feat-circle">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <p className="lnv-poc-feat-label">No upfront cost<br />for POC</p>
                    <div className="lnv-poc-feat-rule"></div>
                  </div>
                  <div className="lnv-poc-feat-card">
                    <div className="lnv-poc-feat-circle">
                      <i className="fas fa-sliders-h"></i>
                    </div>
                    <p className="lnv-poc-feat-label">Tailored to your<br />infrastructure</p>
                    <div className="lnv-poc-feat-rule"></div>
                  </div>
                  <div className="lnv-poc-feat-card">
                    <div className="lnv-poc-feat-circle">
                      <i className="fas fa-tag"></i>
                    </div>
                    <p className="lnv-poc-feat-label">Exclusive pricing<br />on Lenovo solutions</p>
                    <div className="lnv-poc-feat-rule"></div>
                  </div>
                </div>
                {/* Divider between rows */}
                <div className="lnv-poc-grid-divider"></div>
                {/* Row 2 */}
                <div className="lnv-poc-grid-row">
                  <div className="lnv-poc-feat-card">
                    <div className="lnv-poc-feat-circle">
                      <i className="fas fa-headset"></i>
                    </div>
                    <p className="lnv-poc-feat-label">Expert guidance<br />throughout</p>
                    <div className="lnv-poc-feat-rule"></div>
                  </div>
                  <div className="lnv-poc-feat-card">
                    <div className="lnv-poc-feat-circle">
                      <i className="fas fa-laptop"></i>
                    </div>
                    <p className="lnv-poc-feat-label">Test real solutions<br />in your environment</p>
                    <div className="lnv-poc-feat-rule"></div>
                  </div>
                  <div className="lnv-poc-feat-card">
                    <div className="lnv-poc-feat-circle">
                      <i className="fas fa-chart-bar"></i>
                    </div>
                    <p className="lnv-poc-feat-label">Make confident<br />IT decisions</p>
                    <div className="lnv-poc-feat-rule"></div>
                  </div>
                </div>
              </div>
            </div>

          </section>

        </div>
  );
}
