import React, { useState } from "react";
import './partners/Sophos.css';

import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';
export default function AwardsAccreditations() {
  const seoData = getSEOData('awardsAccreditations');

  const [activeTab, setActiveTab] = useState("aruba");

  const arubaCerts = [
    { src: "/assets/images/Aruba-AASP.png", alt: "Aruba Certified SD-WAN Professional", title: "Aruba Certified SD-WAN Professional" },
    { src: "/assets/images/Aruba-ACSP.png", alt: "Aruba Certified Switching Professional", title: "Aruba Certified Switching Professional" },
    { src: "/assets/images/Aruba-ACSX-3.png", alt: "Aruba Certified Switching Expert", title: "Aruba Certified Switching Expert" },
    { src: "/assets/images/HPE-ACP-CA.png", alt: "HPE ACP Campus Access", title: "HPE ACP Campus Access" },
    { src: "/assets/images/HPE-Associate-Campus-access.png", alt: "HPE Associate Campus Access", title: "HPE Associate Campus Access" },
    { src: "/assets/images/HPE-Associate-Network-Security.png", alt: "HPE Associate Network Security", title: "HPE Associate Network Security" },
    { src: "/assets/images/HPE-product-specialist-central.png", alt: "HPE Product Specialist Central", title: "HPE Product Specialist Central" },
    { src: "/assets/images/product-1.png", alt: "HPE Product Specialist CX 10000 Switch", title: "HPE Product Specialist CX 10000 Switch" }
  ];

  const sophosCerts = [
    { src: '/assets/soph/sop-1.png', alt: 'Sophos Certified Architect', title: 'Sophos Certified Architect' },
    { src: '/assets/soph/sop-2.png', alt: 'Sophos Certified Engineer', title: 'Sophos Certified Engineer' },
    { src: '/assets/soph/sop-3.png', alt: 'Sophos Certified Technician', title: 'Sophos Certified Technician' },
    { src: '/assets/soph/sop-4.png', alt: 'Sophos XG Firewall Certified', title: 'Sophos XG Firewall Certified' },
    { src: '/assets/soph/sop-5.png', alt: 'Sophos Intercept X Certified', title: 'Sophos Intercept X Certified' },
    { src: '/assets/soph/sop-6.png', alt: 'Sophos Central Admin Certified', title: 'Sophos Central Admin Certified' },
    { src: '/assets/soph/sop-7.png', alt: 'Sophos MDR Certified', title: 'Sophos MDR Certified' },
  ];

  return (
    <>

      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />

      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}></div>
        <div className="container">
          <div className="page-header__inner">
            <h1>Awards &amp; Accreditations</h1>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/" title="tracenetworksolutions"><i className="fas fa-home"></i>Home</a></li>
                <li><span className="icon-right-arrow-1"></span></li>
                <li>Awards &amp; Accreditations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cert-awards-section-dark">
        <div className="container">
          <h2 className="cert-awards-title text-center">Awards &amp; Accreditations</h2>

          <ul className="cert-tabs-nav-dark">
            <li
              className={`cert-tab-dark${activeTab === "aruba" ? " active" : ""}`}
              onClick={() => setActiveTab("aruba")}
              style={{ cursor: "pointer" }}
            >Aruba</li>
            <li
              className={`cert-tab-dark${activeTab === "sophos" ? " active" : ""}`}
              onClick={() => setActiveTab("sophos")}
              style={{ cursor: "pointer" }}
            >Sophos</li>
            <li
              className={`cert-tab-dark${activeTab === "others" ? " active" : ""}`}
              onClick={() => setActiveTab("others")}
              style={{ cursor: "pointer" }}
            >Other Certifications</li>
          </ul>

          <div className="cert-tabs-content-dark">

            {/* Aruba Tab */}
            <div className={`cert-tab-pane-dark${activeTab === "aruba" ? " active" : ""}`} id="aruba">
              <div className="sophos-tab-layout">

                {/* Left: certifications + awards */}
                <div className="sophos-tab-left">
                  <h3 className="cert-sub-title-dark">Aruba Certifications</h3>
                  <div className="sophos-cert-chips">
                    <span className="sophos-chip">SD-WAN Professional (AASP)</span>
                    <span className="sophos-chip">Switching Professional (ACSP)</span>
                    <span className="sophos-chip">Switching Expert (ACSX)</span>
                    <span className="sophos-chip">Campus Access Professional</span>
                    <span className="sophos-chip">Campus Access Associate</span>
                    <span className="sophos-chip">Network Security Associate</span>
                    <span className="sophos-chip">Product Specialist Central</span>
                    <span className="sophos-chip">Product Specialist CX 10000 Switch</span>
                  </div>

                  <h3 className="cert-sub-title-dark" style={{marginTop: '32px'}}>Aruba Awards</h3>
                  <ul className="award-list-dark">
                    <li>Aruba Best Partner <span className="award-year">2024</span></li>
                    <li>Aruba Excellence Award <span className="award-year">2023</span></li>
                  </ul>
                </div>

                {/* Right: Featured Aruba Badge */}
                <div className="sophos-tab-right">
                  <div className="sophos-award-img-wrap" style={{ borderColor: 'rgba(255, 102, 0, 0.4)', boxShadow: '0 0 40px rgba(255, 102, 0, 0.15)' }}>
                    <div className="sophos-award-badge-top" style={{ background: 'linear-gradient(135deg, #ff6600, #cc4400)', boxShadow: '0 2px 10px rgba(255, 102, 0, 0.45)' }}><i className="fas fa-award"></i> Featured Expert</div>
                    <img loading="lazy"
                      src="/assets/images/Aruba-ACSX-3.png"
                      alt="Aruba Switching Expert"
                      title="Aruba Switching Expert"
                      className="sophos-award-img"
                      style={{ padding: '30px', background: '#ffffff', objectFit: 'contain' }}
                    />
                    <div className="sophos-award-caption" style={{ borderTopColor: 'rgba(255, 102, 0, 0.2)' }}>
                      <span className="sophos-caption-title">Aruba Certified Switching Expert</span>
                      <span className="sophos-caption-sub" style={{ color: '#ff8833' }}>ACSX Switching · Expert</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Sophos Tab */}
            <div className={`cert-tab-pane-dark${activeTab === "sophos" ? " active" : ""}`} id="sophos">
              <div className="sophos-tab-layout">

                {/* Left: certifications + awards */}
                <div className="sophos-tab-left">

                  <h3 className="cert-sub-title-dark">Sophos Certifications</h3>
                  <div className="sophos-cert-chips">
                    <span className="sophos-chip">Endpoint Engineer</span>
                    <span className="sophos-chip">Endpoint Technician</span>
                    <span className="sophos-chip">Endpoint Architecture</span>
                    <span className="sophos-chip">Firewall Architecture</span>
                    <span className="sophos-chip">Firewall Engineer</span>
                    <span className="sophos-chip">Firewall Technician</span>
                  </div>

                  <h3 className="cert-sub-title-dark" style={{marginTop: '32px'}}>Sophos Awards</h3>
                  <ul className="award-list-dark">
                    <li>Sophos Partner of the Year – India &amp; SAARC</li>
                    <li>Top Performer Of The Region <span className="award-year">2020</span></li>
                    <li>Best Performing Partner <span className="award-year">2018</span></li>
                    <li>Best Solution Partner <span className="award-year">2023 · 2018 · 2017 · 2016</span></li>
                    <li>Best Platinum Partner <span className="award-year">2020</span></li>
                    <li>Best Top Performing Partner <span className="award-year">2019</span></li>
                    <li>Highest Achiever Business Partner <span className="award-year">2015</span></li>
                  </ul>
                </div>

                {/* Right: Sophos 2025 award image */}
                <div className="sophos-tab-right">
                  <div className="sophos-award-img-wrap">
                    <div className="sophos-award-badge-top"><i className="fas fa-star"></i> 2025 Award</div>
                    <img loading="lazy"
                      src="/assets/images/award/sophos 2025.jpeg"
                      alt="Sophos Award 2025"
                      title="Sophos Award 2025"
                      className="sophos-award-img"
                    />
                    <div className="sophos-award-caption">
                      <span className="sophos-caption-title">Sophos Partner of the Year</span>
                      <span className="sophos-caption-sub">India &amp; SAARC · 2025</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Other Certifications Tab */}
            <div className={`cert-tab-pane-dark${activeTab === "others" ? " active" : ""}`} id="others">
              <h3 className="cert-sub-title-dark">Other Certifications</h3>
              <div className="cert-grid-dark">
                <div className="other-cert-card"><img loading="lazy" src="/assets/images/pan_pcnse_digital-badge_sharing-logo-2048x2048.png" alt="Palo Alto PCNSE" title="Palo Alto PCNSE" /><span>Palo Alto PCNSE</span></div>
                <div className="other-cert-card"><img loading="lazy" src="/assets/images/1.-CEH-Certified-Ethical-hacker.png" alt="CEH Certified Ethical Hacker" title="CEH Certified Ethical Hacker" /><span>Certified Ethical Hacker</span></div>
                <div className="other-cert-card"><img loading="lazy" src="/assets/images/ccna_600.png" alt="CCNA" title="CCNA" /><span>Cisco CCNA</span></div>
                <div className="other-cert-card"><img loading="lazy" src="/assets/images/Vinay Kumar Certificate_page-0001.jpg" alt="Seceon Professional" title="Seceon Professional" /><span>Seceon Certified Professional</span></div>
                <div className="other-cert-card"><img loading="lazy" src="/assets/manage-engine.png" alt="ManageEngine" title="ManageEngine" /><span>ManageEngine Specialist</span></div>
              </div>
            </div>

          </div>
        </div>

      {/* Team Certifications Carousel — visible only on Aruba tab */}
      {activeTab === "aruba" && (
      <section className="certifications-carousel-premium aruba-marquee-section">
        <div className="container">

          <div className="cert-marquee-outer">
            <div className="cert-marquee-track">
              {arubaCerts.map((cert, i) => (
                <div className="cert-marquee-item" key={`a-${i}`}>
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    title={cert.title}
                    loading="lazy"
                  />
                </div>
              ))}
              {arubaCerts.map((cert, i) => (
                <div className="cert-marquee-item" key={`b-${i}`}>
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    title={cert.title}
                    loading="lazy"
                  />
                </div>
              ))}
              {arubaCerts.map((cert, i) => (
                <div className="cert-marquee-item" key={`c-${i}`}>
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    title={cert.title}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Team Certifications Carousel — visible only on Sophos tab */}
      {activeTab === "sophos" && (
      <section className="certifications-carousel-premium">
        <div className="container">

          <div className="cert-marquee-outer">
            <div className="cert-marquee-track">
              {['a', 'b', 'c', 'd'].map((prefix) =>
                sophosCerts.map((cert, idx) => (
                  <div className="cert-marquee-item" key={`${prefix}-${idx}`}>
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      title={cert.title}
                      loading="lazy"
                    />
                    <span className="cert-marquee-title">{cert.title}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Career CTA Section */}
      <section className="career-cta-section">
        <div className="career-cta-container">
          <h2 className="career-cta-title">Ready to Build a Future-Ready IT Environment?</h2>
          <p className="career-cta-text">
            Speak with a senior consultant today. In 30 minutes you'll know:
            <br /><br />
            • The top three risks hiding in your current stack<br />
            • Quick wins that boost performance without new hardware<br />
            • An exact timeline & cost estimate—no obligations
          </p>

          <div className="about-two__btn-box">
            <a href="https://wame.pro/tracenetwork" target="_blank" rel="noopener noreferrer" className="btn-get-started">
              <span className="btn-text">Book Your Free Strategy Call </span>
              <span className="btn-arrow"></span>
            </a>
          </div>
        </div>
      </section>


      </section>
    </>
  );
}
