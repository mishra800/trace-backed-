import React from "react";
import { useLocation } from "react-router-dom";
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

export default function Datasolutions() {
  const location = useLocation();
  const isEmailSolutionsPath = location.pathname === "/email-solutions/microsoft-365-google-workspace";
  const isDataEmailSecurityPath = location.pathname === "/data-security/email-security";
  const seoKey = isEmailSolutionsPath ? 'emailsolutions' : (isDataEmailSecurityPath ? 'datasecurityemailsecurity' : 'datasolutions');
  const seoData = getSEOData(seoKey);

  return (
    <>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />

      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/vaptt.jpg)" }} />
        <div className="container">
          <div className="page-header__inner">
            <h2>Cyber Security Solutions</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/" title="best cybersecurity companies in hyd"><i className="fas fa-home"></i>Home</a></li>
                <li><span className="icon-right-arrow-1"></span></li>
                <li>Cyber Security Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services-details">
        <div className="services-details__shape-1"></div>
        <div className="services-details__shape-2"><img loading="lazy" alt="" src="/assets/images/shapes/services-details-shape-2.png" /></div>
        <div className="container">
          <div className="row">

            <div className="col-xl-4 col-lg-5">
              <div className="services-details__left">
                <div className="services-details__services-list-box">
                  <h3 className="services-details__services-list-title">Services</h3>
                  <ul className="services-details__services-list list-unstyled">
                    <li className="active"><a href="/network-security">Cybersecurity<span className="icon-right-arrow-2"></span></a></li>
                    <li><a href="/networking">Networking<span className="icon-right-arrow-2"></span></a></li>
                    <li><a href="/infrastructure">Infrastructure<span className="icon-right-arrow-2"></span></a></li>
                    <li><a href="/visibility">Visibility<span className="icon-right-arrow-2"></span></a></li>
                    <li><a href="/collaboration">Collaboration<span className="icon-right-arrow-2"></span></a></li>
                  </ul>
                </div>
                <div className="services-details__need-help">
                  <div className="services-details__need-help-img">
                    <img loading="lazy" alt="" src="/assets/images/services/networking2.jpg" />
                    <div className="services-details__need-help-content">
                      <div className="services-details__need-help-bdr"></div>
                      <h3 className="services-details__need-help-title">Need Help?</h3>
                      <p className="services-details__need-help-number"><a href="tel:+919000314411">9000314411</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-7">
              <div className="services-details__right">

                {/* ── DLP ── */}
                <h3 className="services-details__title-1" id="dlp">Data Loss Prevention (DLP)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Your data is your business, keep it where it belongs.</h4>
                <p className="services-details__text-1">DLP identifies, classifies, and protects sensitive data in motion, at rest, and in use, automatically blocking unauthorized sharing or exfiltration.</p>
                <div className="vis-row">
                  <div className="vis-img-col"><img loading="lazy" alt="DLP" src="/assets/images/solutions images/DLP.jpg" className="vis-solution-img" /></div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Deep content inspection – OCR and fingerprinting detect PII, PHI, and IP inside images and zip files.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Adaptive policies – User behavior, destination, and data type determine block, encrypt, or allow.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Cloud &amp; endpoint coverage – Enforce identical controls across SaaS, email, and USB devices.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Granular incident workflow – Real-time prompts reduce leaks; forensic logs ease investigations.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Regulatory templates – Pre-built rulesets for GDPR, RBI, CCPA, PCI-DSS, and HIPAA.</p></li>
                    </ul>
                  </div>
                </div>

                {/* ── Email Security ── */}
                <h3 className="services-details__title-1 mt-5" id="emailsecurity">Email Security</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Stop the phishing flood before it hits the inbox.</h4>
                <p className="services-details__text-1">Multi-layer email security combines AI-driven phishing detection, URL rewriting, sandboxing, and DMARC enforcement to block BEC and malware.</p>
                <div className="vis-row vis-row--reverse">
                  <div className="vis-img-col"><img loading="lazy" alt="Email Security" src="/assets/images/solutions images/MAil Security.jpeg" className="vis-solution-img" /></div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>AI &amp; NLP – Detects impersonation, look-alike domains, and social-engineering attacks.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Attachment sandboxing – Detonates suspicious files in secure VMs.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Time-of-click URL protection – Rewrites links and rescans on click to catch delayed payload swaps.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Integrated awareness training – Auto-phish simulation lowers click-rates by 60%.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Inline encryption &amp; DLP – Protects sensitive outbound emails without user friction.</p></li>
                    </ul>
                  </div>
                </div>

                {/* ── Asset & Patch Management ── */}
                <h3 className="services-details__title-1 mt-5" id="assetpatchmanagement">Asset &amp; Patch Management</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">You can't patch what you can't see, gain both insight and action.</h4>
                <p className="services-details__text-1">Continuous asset discovery, vulnerability assessment, and automated patch deployment for OS, third-party apps, and firmware across endpoints and servers.</p>
                <div className="vis-row">
                  <div className="vis-img-col"><img loading="lazy" alt="Patch Management" src="/assets/images/solutions images/Patch-Management-Lifecycle.png" className="vis-solution-img" /></div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Unified asset inventory – Real-time CMDB with hardware, software, and lifecycle status.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Risk-based prioritization – CVSS scoring and exploit intelligence for focused remediation.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>One-click patch rollouts – Schedule, stage, and rollback with safety nets.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Cross-platform coverage – Windows, macOS, Linux, and virtual infrastructure in one console.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Compliance dashboards – Prove patch SLAs for ISO 27001, RBI, and CIS benchmarks.</p></li>
                    </ul>
                  </div>
                </div>

                {/* ── Backup & Recovery ── */}
                <h3 className="services-details__title-1 mt-5" id="backuprecovery">Backup &amp; Recovery Solutions</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Because downtime is not an option.</h4>
                <p className="services-details__text-1">End-to-end data protection with image-based, incremental, and cloud-replicated backups featuring instant restore and ransomware-proof immutability.</p>
                <div className="vis-row vis-row--reverse">
                  <div className="vis-img-col"><img loading="lazy" alt="Backup &amp; Recovery" src="/assets/images/solutions images/backup-and-recovery.webp" className="vis-solution-img" /></div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Any-to-any recovery – Bare-metal, VM, or cloud restores to dissimilar hardware.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Immutable storage – Write-once object locking thwarts ransomware encryption.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>15-minute RPO / near-zero RTO – Continuous protection and instant VM boot.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Multi-cloud replication – AWS, Azure, and on-prem targets for geo-redundancy.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Automated DR testing – Non-disruptive failover drills with compliance reports.</p></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <section className="premium-cards-section pt-2 mb-0 pb-0">
            <div className="premium-container">
              <div className="section-title text-center pb-4">
                <h2 className="section-title__title">Why Leading<span> Brands</span> Choose<span> Trace</span></h2>
              </div>
              <div className="premium-card-grid">
                <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/certified.png" /></div><p><strong>Multi‑vendor, Certified Expertise</strong> With 40+ Global OEM Partnerships, we are bringing you future-proof solutions matched to your exact needs.</p></div>
                <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" /></div><p><strong>20 Years of Leadership</strong> Proven security and networking solutions for top institutions and data centers across South India.</p></div>
                <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" /></div><p><strong>Customer‑First, Value‑Driven</strong> Right-sized solutions that deliver maximum protection at the lowest total cost of ownership.</p></div>
                <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" /></div><p><strong>Local Presence &amp; Rapid Support</strong> Engineers in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag for quick onsite help.</p></div>
                <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" /></div><p><strong>ISO 27001‑Certified</strong> Stringent change management and documentation aligned with global best practices.</p></div>
                <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" /></div><p><strong>Proven Deployment Framework</strong> Assess → Design → Deploy → Optimize → Support. Minimizing downtime and boosting ROI.</p></div>
                <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" /></div><p><strong>Flexible Commercial Models</strong> CapEx, OpEx, and MSSP pricing aligned with business cash-flow goals.</p></div>
              </div>
            </div>
          </section>
        </div>
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
