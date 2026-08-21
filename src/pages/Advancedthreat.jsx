import React from "react";
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

export default function Advancedthreat() {
  const seoData = getSEOData('advancedthreat');

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

                {/* ── NAC ── */}
                <h3 className="services-details__title-1" id="nac">Network Access Control (NAC)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">If you can't identify it, you can't protect it.</h4>
                <p className="services-details__text-1">NAC authenticates every device, whether managed or BYOD, before it touches the network, enforcing dynamic, role-based access and quarantining unknown or non-compliant endpoints.</p>
                <div className="vis-row">
                  <div className="vis-img-col"><img loading="lazy" alt="NAC" src="/assets/images/solutions images/NAC.jpg" className="vis-solution-img" /></div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Agentless discovery – Passive scanning fingerprints every MAC, OT asset, and IoT sensor.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Policy-based segmentation – VLAN and micro-segmentation block lateral movement instantly.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Security-posture checks – Ensure OS patches, AV status, and configuration baselines.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Guest-wifi self-service – Captive portal streamlines onboarding securely.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Audit-ready reporting – Instant evidence of least-privilege enforcement for PCI, HIPAA, ISO 27001.</p></li>
                    </ul>
                  </div>
                </div>

                {/* ── NDR ── */}
                <h3 className="services-details__title-1 mt-5" id="ndr">Network Detection &amp; Response (NDR)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">See every packet, stop every threat.</h4>
                <p className="services-details__text-1">NDR leverages AI-driven traffic analysis and metadata enrichment to detect lateral movement, command-and-control, and encrypted attacks that bypass perimeter defenses.</p>
                <div className="vis-row vis-row--reverse">
                  <div className="vis-img-col"><img loading="lazy" alt="NDR" src="/assets/images/solutions images/NDR.png" className="vis-solution-img" /></div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Full-fidelity packet capture – Retain months of PCAP for deep forensics.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Encrypted-traffic analytics – Detect anomalies without decryption.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Automatic threat scoring – MITRE-mapped detections cut alert noise.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Seamless SIEM/SOAR integration – Push high-confidence alerts for orchestrated response.</p></li>
                    </ul>
                  </div>
                </div>

                {/* ── SSE ── */}
                <h3 className="services-details__title-1 mt-5" id="sse">Security Service Edge (SSE)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Secure the edge where users work anywhere.</h4>
                <p className="services-details__text-1">SSE converges SWG, CASB, ZTNA, and DLP into a single, cloud-delivered platform, providing consistent security for users and data regardless of location.</p>
                <div className="vis-row">
                  <div className="vis-img-col"><img loading="lazy" alt="SSE" src="/assets/images/solutions images/SSE.png" className="vis-solution-img" /></div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Single-pass architecture – One inspection for all services, minimizing latency.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Unified policy engine – Write once, enforce everywhere.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Scalable global PoPs – Anycast network delivers sub-50 ms access worldwide.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Context-driven controls – Identity, device, and data context in every decision.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Reduced TCO – Replace multiple point products with one subscription.</p></li>
                    </ul>
                  </div>
                </div>

                {/* ── SASE ── */}
                <h3 className="services-details__title-1 mt-5" id="sase">Secure Access Service Edge (SASE)</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Networking and security better together, in the cloud.</h4>
                <p className="services-details__text-1">SASE fuses SD-WAN, SSE, firewalling, and zero-trust into a single cloud-native service, delivering secure, high-performance connectivity to every user and site.</p>
                <div className="vis-row vis-row--reverse">
                  <div className="vis-img-col"><img loading="lazy" alt="SASE" src="/assets/images/solutions images/SASE.jpg" className="vis-solution-img" /></div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Optimized SD-WAN fabric – Smart path selection and WAN acceleration for SaaS and VoIP.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Built-in SSE stack – SWG, CASB, ZTNA, and DLP enforce security with single-pass inspection.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>End-to-end visibility – One dashboard for network performance and security posture.</p></li>
                      <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Elastic scalability – Spin up branches or remote users in minutes, no hardware needed.</p></li>
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
