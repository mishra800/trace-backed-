import React from "react";
import { useLocation } from "react-router-dom";
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

export default function Networksecurity() {
  const location = useLocation();
  const isFirewallPath = location.pathname === "/network-security/firewall";
  const isEndpointPath = location.pathname === "/network-security/endpoint-security-edr-xdr";
  const seoKey = isFirewallPath ? 'firewallsolutions' : (isEndpointPath ? 'endpointsecurity' : 'networksecurity');
  const seoData = getSEOData(seoKey);

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

            {/* Main Content */}
            <div className="col-xl-8 col-lg-7">
              <div className="services-details__right">

                {/* ── Next-Generation Firewall ── */}
                <h3 className="services-details__title-1" id="firewallsolutions">Next-Generation Firewall</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Modern attacks require Next-Generation protection.</h4>
                <p className="services-details__text-1">A Next-Generation Firewall unifies deep-packet inspection, application awareness, user identity, and real-time threat intelligence in one platform. It evaluates every session in context deciding, within micro-seconds, whether to allow, monitor, or block traffic, so your organization stays secure without sacrificing performance.</p>

                <div className="vis-row">
                  <div className="vis-img-col">
                    <img loading="lazy" alt="Firewall" src="/assets/images/solutions images/firewall.jpg" className="vis-solution-img" />
                  </div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Crystal-clear visibility – Application &amp; User-level analytics show who did what, instantly.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Proactive breach prevention – Integrated intrusion-prevention, sandboxing, and AI-driven malware analysis.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Regulatory compliance – Audit-ready reports for PCI-DSS, HIPAA, GDPR, ISO 27001, and RBI.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Consistent high performance – Hardware acceleration maintains throughput even with SSL/TLS inspection.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Automated response workflows – Integrates with SIEM/SOAR to quarantine endpoints or block IPs in real time.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Scalable high availability – Active clustering and geo-redundant architecture ensure continuity.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Integrated threat protection – IPS, antivirus, and URL filtering for layered defense.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Behavioral analysis – Detects zero‑day and insider threats missed by signatures.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ── EDR / XDR ── */}
                <h3 className="services-details__title-1 mt-5" id="edrxdr">Endpoint Detection &amp; Response (EDR) / Extended Detection &amp; Response (XDR)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Threats move fast, EDR &amp; XDR move faster.</h4>
                <p className="services-details__text-1">EDR hunts for malicious activity on every endpoint, while XDR correlates data across endpoints, network, cloud, identity, and email for unified, high-fidelity detection and automated response.</p>

                <div className="vis-row vis-row--reverse">
                  <div className="vis-img-col">
                    <img loading="lazy" alt="EDR XDR" src="/assets/images/solutions images/xdr.png" className="vis-solution-img" />
                  </div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Complete endpoint visibility – Kernel-level sensors capture processes, memory, and registry changes in real time.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Cross-domain correlation – XDR stitches telemetry to reveal multi-stage attacks.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Automated containment – One-click or policy-driven isolation, kill-process, and rollback.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>AI-powered analytics – Behavioral models detect zero-day and file-less attacks.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Ransomware rollback – Volume Shadow Copy integration restores encrypted files in seconds.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ── MDR ── */}
                <h3 className="services-details__title-1 mt-5" id="mdr">Managed Detection &amp; Response (MDR)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Elite threat hunting on tap, no hiring required.</h4>
                <p className="services-details__text-1">MDR blends always-on monitoring, advanced analytics, and human experts to detect, investigate, and eliminate threats across your environment 24 × 7.</p>

                <div className="vis-row">
                  <div className="vis-img-col">
                    <img loading="lazy" alt="MDR" src="/assets/images/solutions images/MDR.webp" className="vis-solution-img" />
                  </div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>24 × 7 hunting &amp; triage – Certified analysts investigate anomalies round the clock.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Rapid incident response – Average time-to-contain under 15 minutes.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Dedicated Customer Success Manager – Monthly threat-intel and risk posture reviews.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Threat-intel enrichment – Mapped to MITRE ATT&amp;CK for contextual alerts.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ── ZTNA ── */}
                <h3 className="services-details__title-1 mt-5" id="ztna">Zero Trust Network Access (ZTNA)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Never trust, always verify - every connection, every time.</h4>
                <p className="services-details__text-1">ZTNA replaces legacy VPNs with identity-, device-, and context-aware micro-tunnels that grant access only to specific applications, not the entire network.</p>

                <div className="vis-row vis-row--reverse">
                  <div className="vis-img-col">
                    <img loading="lazy" alt="ZTNA" src="/assets/images/solutions images/ZTNA.jpg" className="vis-solution-img" />
                  </div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Application-level segmentation – Users only access authorized apps.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Dynamic risk scoring – Session trust adapts to device, location, and behavior.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Invisible infrastructure – Apps stay dark to internet scans and DDoS.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Seamless user experience – Single-packet inspection and SSO for smooth access.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Hybrid &amp; multi-cloud ready – Consistent policies across on-prem and cloud.</p>
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
                  <div className="premium-icon-wrapper">
                    <img loading="lazy" src="/assets/images/certified.png" alt="certified" title="certified" />
                  </div>
                  <p><strong>Multi‑vendor, Certified Expertise</strong> With 40+ Global OEM Partnerships, we are bringing you future-proof solutions matched to your exact needs.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper">
                    <img loading="lazy" src="/assets/images/leadership.png" alt="leadership" title="leadership" />
                  </div>
                  <p><strong>20 Years of Leadership</strong> Proven security and networking solutions for top institutions and data centers across South India.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper">
                    <img loading="lazy" src="/assets/images/luxury.png" style={{width: '60px'}} alt="luxury" title="luxury" />
                  </div>
                  <p><strong>Customer‑First, Value‑Driven</strong> Right-sized solutions that deliver maximum protection at the lowest total cost of ownership.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper">
                    <img loading="lazy" src="/assets/images/technical-support.png" style={{width: '55px'}} alt="technical-support" title="technical-support" />
                  </div>
                  <p><strong>Local Presence &amp; Rapid Support</strong> Engineers in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag for quick onsite help.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper">
                    <img loading="lazy" src="/assets/images/iso-certificate.png" style={{width: '59px'}} alt="iso-certificate" title="iso-certificate" />
                  </div>
                  <p><strong>ISO 27001‑Certified</strong> Stringent change management and documentation aligned with global best practices.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper">
                    <img loading="lazy" src="/assets/images/frame.png" style={{width: '50px'}} alt="frame" title="frame" />
                  </div>
                  <p><strong>Proven Deployment Framework</strong> Assess → Design → Deploy → Optimize → Support. Minimizing downtime and boosting ROI.</p>
                </div>
                <div className="premium-service-card">
                  <div className="premium-icon-wrapper">
                    <img loading="lazy" src="/assets/images/agile.png" style={{width: '59px'}} alt="agile" title="agile" />
                  </div>
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
