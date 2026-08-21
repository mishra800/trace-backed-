import React from "react";
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

export default function Cloudsecurity() {
  const seoData = getSEOData('cloudsecurity');

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

                {/* ── CASB ── */}
                <h3 className="services-details__title-1" id="casb">Cloud Access Security Broker (CASB)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Shadow IT can't hide from CASB.</h4>
                <p className="services-details__text-1">CASB delivers visibility, policy enforcement, and data protection across sanctioned and unsanctioned SaaS, IaaS, and PaaS environments.</p>
                <div className="vis-row">
                  <div className="vis-img-col"><img loading="lazy" alt="CASB" src="/assets/images/solutions images/CASB!.webp" className="vis-solution-img" /></div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>SaaS risk assessment – Scores 30,000+ apps for security, privacy, and compliance.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Inline &amp; API modes – Real-time traffic control with deep retrospective scanning.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Contextual access control – Enforce device, location, and user-role policies.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Cloud DLP &amp; encryption – Inline redaction or BYOK for sensitive data protection.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Threat protection – Detects cloud-native malware and OAuth abuse.</p></li>
                    </ul>
                  </div>
                </div>

                {/* ── SWG ── */}
                <h3 className="services-details__title-1 mt-5" id="swg">Secure Web Gateway (SWG)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Open the web to users, not to attackers.</h4>
                <p className="services-details__text-1">SWG filters web traffic with URL categorization, malware scanning, SSL inspection, and sandboxing for safe, fast browsing.</p>
                <div className="vis-row vis-row--reverse">
                  <div className="vis-img-col"><img loading="lazy" alt="SWG" src="/assets/images/solutions images/SWGG.jpg" className="vis-solution-img" /></div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Category-based web filtering – Block risky or unproductive websites.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Dynamic SSL/TLS inspection – Securely decrypt and scan traffic.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Inline malware defense – Stops drive-by downloads with AV and sandboxing.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Bandwidth optimization – Caching and QoS boost business-critical apps.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Shadow IT discovery – Identify unsanctioned cloud apps for CASB enforcement.</p></li>
                    </ul>
                  </div>
                </div>

                {/* ── CSPM ── */}
                <h3 className="services-details__title-1 mt-5" id="cloudsecurityposture">Cloud Security Posture Management (CSPM)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Misconfigurations are hackers' favorite vulnerability.</h4>
                <p className="services-details__text-1">CSPM continuously audits cloud resources, auto-remediates drift, and enforces compliance across AWS, Azure, GCP, and OCI.</p>
                <div className="vis-row">
                  <div className="vis-img-col"><img loading="lazy" alt="CSPM" src="/assets/images/solutions images/CSPM.jpg" className="vis-solution-img" /></div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Agentless discovery – API-based inventory of every cloud resource.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Real-time misconfiguration alerts – CIS, PCI, and NIST benchmarks out-of-box.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Auto-fix workflows – Terraform or serverless functions remediate instantly.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Least-privilege analysis – Detect over-permissive IAM roles and keys.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Cost-optimization insights – Reduce idle spend while improving security.</p></li>
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
                <div className="premium-service-card"><p><strong>Multi‑vendor, Certified Expertise</strong> With 40+ Global OEM Partnerships, we are bringing you future-proof solutions matched to your exact needs.</p></div>
                <div className="premium-service-card"><p><strong>20 Years of Leadership</strong> Proven security and networking solutions for top institutions and data centers across South India.</p></div>
                <div className="premium-service-card"><p><strong>Customer‑First, Value‑Driven</strong> Right-sized solutions that deliver maximum protection at the lowest total cost of ownership.</p></div>
                <div className="premium-service-card"><p><strong>Local Presence &amp; Rapid Support</strong> Engineers in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag for quick onsite help.</p></div>
                <div className="premium-service-card"><p><strong>ISO 27001‑Certified</strong> Stringent change management and documentation aligned with global best practices.</p></div>
                <div className="premium-service-card"><p><strong>Proven Deployment Framework</strong> Assess → Design → Deploy → Optimize → Support. Minimizing downtime and boosting ROI.</p></div>
                <div className="premium-service-card"><p><strong>Flexible Commercial Models</strong> CapEx, OpEx, and MSSP pricing aligned with business cash-flow goals.</p></div>
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
