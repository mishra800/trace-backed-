import React from "react";
import { useLocation } from "react-router-dom";
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

export default function Collaboration() {
  const location = useLocation();
  const isBoardroomPath = location.pathname === "/collaboration/boardroom-solutions";
  const isInteractivePath = location.pathname === "/collaboration/interactive-panels";
  const seoKey = isBoardroomPath ? 'boardroomsolutions' : (isInteractivePath ? 'interactivepanels' : 'collaboration');
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
            <h2>Collaboration</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/" title="best cybersecurity companies in hyd"><i className="fas fa-home"></i>Home</a></li>
                <li><span className="icon-right-arrow-1"></span></li>
                <li><a href="/collaboration">Collaboration</a></li>
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
                    <li><a href="/visibility">Visibility<span className="icon-right-arrow-2"></span></a></li>
                    <li className="active"><a href="/collaboration">Collaboration<span className="icon-right-arrow-2"></span></a></li>
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

                {/* ── Room Solutions ── */}
                <h3 className="services-details__title-1" id="roomsolutions">Room Solutions</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Walk in, wirelessly present, collaborate and it just works.</h4>
                <p className="services-details__text-1">Pre-engineered bundles integrate ultra-wide cameras, beamforming mics, touch-controllers, and one-tap join for Microsoft Teams &amp; Zoom rooms.</p>

                <div className="vis-row">
                  <div className="vis-img-col">
                    <img loading="lazy" alt="Room Solutions" src="/assets/images/solutions images/room collaboration.jpg" className="vis-solution-img" />
                  </div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>5-minute start – Auto-framing cameras recognize participants and focus.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Cable-free sharing – Present 4K content over Wi-Fi.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Smart whiteboard – Digitize notes to OneDrive with one click.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Central management – Monitor firmware and uptime remotely.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Modular expansion – Add mics or speakers as rooms grow.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ── Interactive Panels ── */}
                <h3 className="services-details__title-1 mt-5" id="interactivepanels">Interactive Panels</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Ideas flow when the wall listens.</h4>
                <p className="services-details__text-1">4K touch panels with palm-rejection and built-in OS turn any meeting or classroom into an endless, shareable canvas.</p>

                <div className="vis-row vis-row--reverse">
                  <div className="vis-img-col">
                    <img loading="lazy" alt="Interactive Panels" src="/assets/images/solutions images/intereactive panels.jpg" className="vis-solution-img" />
                  </div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>20-point touch – Multiple users draw simultaneously.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Built-in wireless casting – AirPlay, Miracast, and Chromecast out-of-box.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Low-glare glass – Eyestrain-free even under bright lights.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Integrated OPS slot – Drop-in PC for Windows apps.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Remote OTA updates – Keep firmware and security current.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ── Podiums ── */}
                <h3 className="services-details__title-1 mt-5" id="podiums">Podiums</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Own the room with seamless control.</h4>
                <p className="services-details__text-1">Smart podiums integrate touch monitors, gooseneck mics, and motorized height adjustment, feeding AV over a single HDMI/USB-C cable.</p>

                <div className="vis-row">
                  <div className="vis-img-col">
                    <img loading="lazy" alt="Podiums" src="/assets/images/pod.png" className="vis-solution-img" />
                  </div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>All-in-one control – Seamlessly switch slides, annotate, and record.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Ergonomic design – Adjust height for seated or standing presenters.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Hidden cable raceways – Tidy stages and lecture halls.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Optional confidence monitor – Presenter view faces the speaker.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Durable build – Steel frame resists campus wear and tear.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ── Audio & Video Conferencing ── */}
                <h3 className="services-details__title-1 mt-5" id="avconferencing">Audio &amp; Video Conferencing Solutions</h3>
                <div className="services-details__bdr"></div>
                <h4 className="mb-2">Hear every word. See every expression. Meet like you're in the same room.</h4>
                <p className="services-details__text-1">End-to-end AV solutions pair beamforming microphone arrays, DSPs, 4K PTZ cameras, and acoustic echo cancellation for boardroom-quality calls.</p>

                <div className="vis-row vis-row--reverse">
                  <div className="vis-img-col">
                    <img loading="lazy" alt="Audio &amp; Video Conferencing Solutions" src="/assets/images/solutions images/audio video solutions.jpg" className="vis-solution-img" />
                  </div>
                  <div className="vis-benefits-col">
                    <h4 className="services-details__title-2">Benefits</h4>
                    <ul className="services-details__points-list list-unstyled">
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Auto-speaker tracking – Camera finds the active talker in milliseconds.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>HD audio at &lt;64 kbps – Opus codec delivers clarity on weak links.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Noise-block AI – Removes background typing and HVAC hum.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Scalable from huddle to hall – Daisy-chain mics and speakers.</p>
                      </li>
                      <li>
                        <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                        <p>Platform agnostic – Certified for Teams, Zoom, Google Meet, Webex.</p>
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
