import React from "react";
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

export default function Visibility() {
  const seoData = getSEOData('visibility');

  return (
    <>
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />

      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/vaptt.jpg)" }} />
        <div className="container">
          <div className="page-header__inner">
            <h2>Visibility</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/" title="best cybersecurity companies in hyd"><i className="fas fa-home"></i>Home</a></li>
                <li><span className="icon-right-arrow-1"></span></li>
                <li><a href="/visibility">Visibility</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services-details">
        <div className="services-details__shape-1"></div>
        <div className="services-details__shape-2">
          <img loading="lazy" alt="" src="/assets/images/shapes/services-details-shape-2.png" />
        </div>
        <div className="container">
          <div className="row">

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-5">
              <div className="services-details__left">
                <div className="services-details__services-list-box">
                  <h3 className="services-details__services-list-title">Services</h3>
                  <ul className="services-details__services-list list-unstyled">
                    <li><a href="/network-security">Cybersecurity<span className="icon-right-arrow-2"></span></a></li>
                    <li><a href="/networking">Networking<span className="icon-right-arrow-2"></span></a></li>
                    <li><a href="/infrastructure">Infrastructure<span className="icon-right-arrow-2"></span></a></li>
                    <li className="active"><a href="/visibility">Visibility<span className="icon-right-arrow-2"></span></a></li>
                    <li><a href="/collaboration">Collaboration<span className="icon-right-arrow-2"></span></a></li>
                  </ul>
                </div>
                <div className="services-details__need-help">
                  <div className="services-details__need-help-img">
                    <img loading="lazy" alt="" src="/assets/images/services/networking2.jpg" />
                    <div className="services-details__need-help-content">
                      <div className="services-details__need-help-bdr"></div>
                      <h3 className="services-details__need-help-title">Need Help?</h3>
                      <p className="services-details__need-help-number"><a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer">90003 14411</a><br/><small style={{ fontSize: '0.85em', opacity: 0.9 }}>(WhatsApp Support)</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-xl-8 col-lg-7">
              <div className="services-details__right">

                {/* ── SIEM ── */}
                <h3 className="services-details__title-1" id="siem">Security Information &amp; Event Management (SIEM)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Turn noise into insight, instantly.</h4>
                <p className="services-details__text-1">SIEM ingests logs from across the estate, applies correlation rules and UEBA to spot threats, and gives analysts a Google-like search for every event.</p>

                {/* side-by-side: image left, benefits right */}
                <div className="vis-row">
                  <div className="vis-img-col">
                    <img loading="lazy" alt="SIEM" src="/assets/images/solutions images/siem.jpg" className="vis-solution-img" />
                  </div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Unlimited ingestion – Scale to terabytes per day without lag.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>MITRE ATT&amp;CK mapping – Alerts speak the language of adversary tactics.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Guided investigations – Click-through timelines cut MTTR by 60%.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Built-in compliance – Pre-set dashboards for PCI, HIPAA, RBI.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Cloud, hybrid, on-prem – Deploy where it makes sense.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ── SOAR ── */}
                <h3 className="services-details__title-1 mt-5" id="soar">Security Orchestration, Automation &amp; Response (SOAR)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">From alert fatigue to automated victory.</h4>
                <p className="services-details__text-1">SOAR playbooks triage events, enrich with threat intel, and execute containment with no human lag.</p>

                <div className="vis-row vis-row--reverse">
                  <div className="vis-img-col">
                    <img loading="lazy" alt="SOAR" src="/assets/images/solutions images/soar.jpg" className="vis-solution-img" />
                  </div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Drag-and-drop workflows – Build automation in minutes.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>200 + integrations – Firewalls, EDR, ticketing, and chatops.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Case management – Centralize evidence, tasks, and SLAs.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Adaptive learning – Machine-learning suggestions refine playbooks.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Audit trail – Immutable logs for every action.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ── NMS ── */}
                <h3 className="services-details__title-1 mt-5" id="nms">Network Management System (NMS)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">See every port, flow, and watt—everywhere.</h4>
                <p className="services-details__text-1">NMS discovers, monitors, and configures multi-vendor routers, switches, and APs with AI-assisted fault and performance analytics.</p>

                <div className="vis-row">
                  <div className="vis-img-col">
                    <img loading="lazy" alt="Network Management System" src="/assets/images/solutions images/nms.jpg" className="vis-solution-img" />
                  </div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Single-pane visibility – Topology maps and health scores in real time.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Proactive alerts – Predictive analytics flag issues before tickets rise.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Automated config backup – Version control and golden-template push.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Bandwidth dashboards – Flow analytics expose hogs and shadow apps.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Mobile app – Resolve incidents from your phone.</p>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Why Choose Trace */}
          <section className="premium-cards-section pt-2 mb-0 pb-0">
            <div className="premium-container">
              <div className="section-title text-center pb-4">
                <h2 className="section-title__title">
                  Why Leading<span> Brands</span> Choose<span> Trace</span>
                </h2>
              </div>
              <div className="premium-card-grid">
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/certified.png" /></div>
                  <p><strong>Multi‑vendor, Certified Expertise</strong> With 40+ Global OEM Partnerships, we are bringing you future-proof solutions matched to your exact needs.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" /></div>
                  <p><strong>20 Years of Leadership</strong> Proven security and networking solutions for top institutions and data centers across South India.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" /></div>
                  <p><strong>Customer‑First, Value‑Driven</strong> Right-sized solutions that deliver maximum protection at the lowest total cost of ownership.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" /></div>
                  <p><strong>Local Presence &amp; Rapid Support</strong> Engineers in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag for quick onsite help.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" /></div>
                  <p><strong>ISO 27001‑Certified</strong> Stringent change management and documentation aligned with global best practices.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" /></div>
                  <p><strong>Proven Deployment Framework</strong> Assess → Design → Deploy → Optimize → Support. Minimizing downtime and boosting ROI.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" /></div>
                  <p><strong>Flexible Commercial Models</strong> CapEx, OpEx, and MSSP pricing aligned with business cash-flow goals.</p>
                </div>
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
