import React from "react";
import { useLocation } from "react-router-dom";
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

export default function Networking() {
  const location = useLocation();
  const isSwitchesPath = location.pathname === "/networking/network-switches";
  const isWirelessPath = location.pathname === "/wireless-access-points" || location.pathname === "/networking/wireless-access-points";
  const seoKey = isSwitchesPath ? 'networkswitches' : (isWirelessPath ? 'wirelessaccesspoints' : 'networking');
  const seoData = getSEOData(seoKey);

  return (
    <>

      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />

      



<section className="page-header">
<div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/vaptt.jpg)" }}>
</div>
<div className="container">
<div className="page-header__inner">
<h2>Networking</h2>
<div className="thm-breadcrumb__box">
<ul className="thm-breadcrumb list-unstyled">
<li><a href="/" title="best cybersecurity companies in hyd"><i className="fas fa-home"></i>Home</a></li>
<li><span className="icon-right-arrow-1"></span></li>
<li><a href="/website-development">Networking</a></li>

</ul>
</div>
</div>
</div>
</section>

<section className="services-details">
<div className="services-details__shape-1"></div>
<div className="services-details__shape-2">
<img loading="lazy" alt="" src="/assets/images/shapes/services-details-shape-2.png"/>
</div>
<div className="container">
<div className="row">
<div className="col-xl-4 col-lg-5">
<div className="services-details__left">
<div className="services-details__services-list-box">
<h3 className="services-details__services-list-title">Services</h3>
<ul className="services-details__services-list list-unstyled">
<li><a href="/network-security">Cybersecurity<span className="icon-right-arrow-2"></span></a></li>
<li className="active"><a href="/networking">Networking<span className="icon-right-arrow-2"></span></a></li>
<li><a href="/infrastructure">Infrastructure<span className="icon-right-arrow-2"></span></a></li>
<li><a href="/visibility">Visibility<span className="icon-right-arrow-2"></span></a>
</li>
<li><a href="/collaboration">Collaboration<span className="icon-right-arrow-2"></span></a></li>
</ul>
</div>
<div className="services-details__need-help">
<div className="services-details__need-help-img">
<img loading="lazy" alt="" src="/assets/images/services/networking2.jpg"/>
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

<h3 className="services-details__title-1" id="sdwan">SD-WAN</h3>
<p className="services-details__text-1">Branch performance meets cloud
                                agility.</p>
<div className="services-details__bdr"></div>
<div className="row align-items-center pt-4">
<div className="col-md-6">
<p className="services-details__text-2">SD-WAN uses application-aware
                                routing, real-time link steering, and zero-touch provisioning to deliver secure,
                                high-performance connectivity over any mix of MPLS, broadband, or 5G. </p>
</div>
<div className="col-md-6">
<img loading="lazy" alt="SD-WAN" src="/assets/images/solutions images/sdwan1.webp" style={{ width: "100%", borderRadius: "10px" }}/>
</div>
</div>
<h4 className="services-details__title-2">Benefits</h4>
<div className="services-details__points-box">
<div className="row">
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Blazing-fast app experience – Dynamic path selection slashes latency
                                                    for SaaS and VoIP.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Built-in security – Integrated firewall, IPS, and segmentation reduce
                                                    appliance sprawl.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>One-click deployment – Zero-touch devices are live in under 15
                                                    minutes.</p>
</li>
</ul>
</div>
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>50 % lower WAN costs – Shift traffic from MPLS to cost-effective
                                                    internet links.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Cloud-ready fabric – Direct gateways to AWS, Azure, and GCP
                                                    accelerate workloads.</p>
</li>
</ul>
</div>
</div>
</div>

<h3 className="services-details__title-1" id="wirelessswitching">
                                Wireless &amp; Switching</h3>
<div className="services-details__bdr"></div>
<div className="row align-items-center pt-4">
<div className="col-md-6">
<h4 className="mb-2">Purpose-Built Portfolios </h4>
<p className="services-details__text-1"><strong>Campus</strong> - One
                                fabric and thousands of users, zero bottlenecks.</p>
<p className="services-details__text-2">High-density Wi-Fi access
                                points, multigig PoE⁺⁺ aggregation switches, and AI-powered RF management blanket large
                                campuses with seamless, secure connectivity.</p>
</div>
<div className="col-md-6">
<img loading="lazy" alt="Wireless &amp; Switching" src="/assets/images/solutions images/wirelesssss.avif" style={{ width: "100%", borderRadius: "10px" }}/>
</div>
</div>
<h4 className="services-details__title-2">Benefits</h4>
<div className="services-details__points-box">
<div className="row">
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Roam without repaint – Fast-transition protocols keep calls live
                                                    across buildings.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Unified security – 802.1X and dynamic VLANs enforce identity-based
                                                    access.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Smart power – PoE budgeting auto-senses device class to cut energy
                                                    use 25 %.</p>
</li>
</ul>
</div>
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Centralized analytics – Heatmaps and location data drive
                                                    space-utilization insights.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Always-on upgrades – Hitless firmware updates maintain lesson and
                                                    lecture uptime.</p>
</li>
</ul>
</div>
</div>
</div>
<h3 className="services-details__title-1">SME (Small &amp; Mid-Size
                                Enterprise) </h3>
<div className="services-details__bdr"></div>
<h4 className="mb-2">Enterprise-grade Wi-Fi at SME-friendly price. </h4>
<p className="services-details__text-2">Plug-and-play APs and Layer
                                2/3 switches with cloud licensing deliver secure, high-performance networks without
                                full-time IT staff.</p>

<h4 className="services-details__title-2">Benefits</h4>
<div className="services-details__points-box">
<div className="row">
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>5-minute setup – Mobile app onboarding, zero-touch provisioning.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Built-in security – Gateway firewall and content filtering out of the
                                                    box.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Pay-as-you-grow – Add APs or switches as the business scales.</p>
</li>
</ul>
</div>
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Automatic RF tuning – AI optimizes channels to kill dead zones.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Limited Lifetime warranty – Hardware replacement protects your
                                                    investment.</p>
</li>
</ul>
</div>
</div>
</div>
<h3 className="services-details__title-1">Enterprise</h3>
<div className="services-details__bdr"></div>
<h4 className="mb-2">Where “mission-critical” meets “wireless freedom.”</h4>
<p className="services-details__text-2">
                                Controller-based architecture with Wi-Fi, 40/100 GbE core switches, and policy-driven
                                segmentation
                                supports thousands of devices and real-time apps.
                            </p>

<h4 className="services-details__title-2">Benefits</h4>
<div className="services-details__points-box">
<div className="row">
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Micro-segmentation – Fabric overlays isolate IoT, guest, and
                                                    corporate traffic.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Multi-gig uplinks – 2.5/5/10 GbE per AP removes future bottlenecks.
                                                </p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>AI Ops – Predicts faults and prescribes fixes before users notice.
                                                </p>
</li>
</ul>
</div>
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Open APIs – Integrates with ITSM, NMS, and security stacks.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Carrier-class reliability – N+1 controllers and ISSU for nonstop
                                                    service.</p>
</li>
</ul>
</div>
</div>
</div>
<h3 className="services-details__title-1">Branches</h3>
<div className="services-details__bdr"></div>
<div className="row align-items-center pt-4">
<div className="col-md-6">
<h4 className="mb-2">We give you Head-office performance at branch level.</h4>
<p className="services-details__text-2">
                                All-in-one SD-Branch gateways combine Wi-Fi, switching, firewall, and LTE/5G failover,
                                managed centrally from the cloud.
                            </p>
</div>
<div className="col-md-6">
<img loading="lazy" alt="Wireless &amp; Switching" src="/assets/images/solutions images/wireless switching.jpg" style={{ width: "100%", borderRadius: "10px" }}/>
</div>
</div>
<h4 className="services-details__title-2">Benefits</h4>
<div className="services-details__points-box">
<div className="row">
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Zero-touch turn-up – Ship, plug, scan QR, and you’re online.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Secure tunneling – IPSec or ZTNA back to HQ with auto PKI.</p>
</li>
</ul>
</div>
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>WAN link steering – Dynamic path choice for critical apps.</p>
</li>
</ul>
</div>
</div>
</div>
<h3 className="services-details__title-1" id="multiwanloadbalancer">
                                Multi-WAN Load Balancer</h3>
<div className="services-details__bdr"></div>
<div className="row align-items-center pt-4">
<div className="col-md-6">
<h4 className="mb-2">Zero-downtime internet, no matter the ISP.</h4>
<p className="services-details__text-2">
                                A multi-WAN appliance aggregates up to eight links, balancing traffic by bandwidth,
                                session, or application while providing automatic failover.
                            </p>
</div>
<div className="col-md-6">
<img loading="lazy" alt="Multi-WAN Load Balancer" src="/assets/images/solutions images/multi wan.jpg" style={{ width: "100%", borderRadius: "10px" }}/>
</div>
</div>
<h4 className="services-details__title-2">Benefits</h4>
<div className="services-details__points-box">
<div className="row">
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Always-on connectivity – Sub-second failover keeps VPNs and calls
                                                    alive.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Bandwidth bonding – Combine links for gig-class throughput.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Smart traffic steering – VOIP takes the lowest-jitter path; bulk data
                                                    uses the cheapest.</p>
</li>
</ul>
</div>
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>ISP independence – Add, drop, or mix fiber, 4G, and 5G at will.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Real-time analytics – Visual dashboards expose link health and usage.
                                                </p>
</li>
</ul>
</div>
</div>
</div>
<h3 className="services-details__title-1" id="datacenterswitching">
                                Data Center Switching</h3>
<div className="services-details__bdr"></div>
<div className="row align-items-center pt-4">
<div className="col-md-6">
<h4 className="mb-2">Scale like the cloud without forklift upgrades.</h4>
<p className="services-details__text-2">
                                Leaf-spine switches deliver non-blocking 25/100/400 GbE fabric, VXLAN overlays,
                                and EVPN automation for modern data centers.
                            </p>
</div>
<div className="col-md-6">
<img loading="lazy" alt="Data Center Switching" src="/assets/images/solutions images/data center.jpg" style={{ width: "100%", borderRadius: "10px" }}/>
</div>
</div>
<h4 className="services-details__title-2">Benefits</h4>
<div className="services-details__points-box">
<div className="row">
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Line-rate performance – Wire-speed throughput for east-west traffic.
                                                </p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Intent-based automation – APIs and Ansible modules cut provisioning
                                                    time by 90%.</p>
</li>
</ul>
</div>
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Flexible consumption – Pay-as-you-grow licensing avoids cap-ex
                                                    spikes.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Redundant by design – Hitless upgrades and ISSU keep workloads
                                                    online.</p>
</li>
</ul>
</div>
</div>
</div>
<h3 className="services-details__title-1" id="private5g">Private 5G
                            </h3>
<div className="services-details__bdr"></div>
<div className="row align-items-center pt-4">
<div className="col-md-6">
<h4 className="mb-2">Cellular-grade coverage inside your campus walls.</h4>
<p className="services-details__text-2 wow">
                                Licensed private 5G delivers ultra-reliable, low-latency wireless for OT, AGVs,
                                and high-density IoT where Wi-Fi runs out of steam.
                            </p>
</div>
<div className="col-md-6">
<img loading="lazy" alt="Private 5G" src="/assets/images/solutions images/private 5g.jpg" style={{ width: "100%", borderRadius: "10px" }}/>
</div>
</div>
<h4 className="services-details__title-2">Benefits</h4>
<div className="services-details__points-box">
<div className="row">
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Deterministic latency – &lt;10 ms for robotic and AR/VR workloads.
                                                </p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Massive device scale – Support tens of thousands of sensors per cell.
                                                </p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Stronger security – SIM-based authentication beats shared Wi-Fi keys.
                                                </p>
</li>
</ul>
</div>
<div className="col-xl-6">
<ul className="services-details__points-list list-unstyled">
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Seamless mobility – Zero packet loss hand-offs at up to 120 km/h.</p>
</li>
<li>
<div className="icon"><span className="icon-tick-inside-circle"></span></div>
<p>Simple as Wi-Fi – Cloud core and plug-and-play radios cut deployment
                                                    time.</p>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
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
<p><strong>Multi‑vendor, Certified Expertise</strong>
                                        With 40+ Global OEM Partnerships, we are bringing you future-proof solutions
                                        matched to your
                                        exact needs.
                                    </p>
</div>
<div className="premium-service-card">
<div className="premium-icon-wrapper">
  <img loading="lazy" src="/assets/images/leadership.png" alt="leadership" title="leadership" />
</div>
<p><strong>20 Years of Leadership</strong>
                                        Proven security and networking solutions for top institutions and data centers
                                        across South
                                        India.
                                    </p>
</div>
<div className="premium-service-card">
<div className="premium-icon-wrapper">
  <img loading="lazy" src="/assets/images/luxury.png" style={{width: '60px'}} alt="luxury" title="luxury" />
</div>
<p><strong>Customer‑First, Value‑Driven</strong>
                                        Right-sized solutions that deliver maximum protection at the lowest total cost
                                        of ownership.
                                    </p>
</div>
<div className="premium-service-card">
<div className="premium-icon-wrapper">
  <img loading="lazy" src="/assets/images/technical-support.png" style={{width: '55px'}} alt="technical-support" title="technical-support" />
</div>
<p><strong>Local Presence &amp; Rapid Support</strong>
                                        Engineers in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag for quick
                                        onsite help.
                                    </p>
</div>
<div className="premium-service-card">
<div className="premium-icon-wrapper">
  <img loading="lazy" src="/assets/images/iso-certificate.png" style={{width: '59px'}} alt="iso-certificate" title="iso-certificate" />
</div>
<p><strong>ISO 27001‑Certified</strong>
                                        Stringent change management and documentation aligned with global best
                                        practices.
                                    </p>
</div>
<div className="premium-service-card">
<div className="premium-icon-wrapper">
  <img loading="lazy" src="/assets/images/frame.png" style={{width: '50px'}} alt="frame" title="frame" />
</div>
<p><strong>Proven Deployment Framework</strong>
                                        Assess → Design → Deploy → Optimize → Support. Minimizing downtime and boosting
                                        ROI.
                                    </p>
</div>
<div className="premium-service-card">
<div className="premium-icon-wrapper">
  <img loading="lazy" src="/assets/images/agile.png" style={{width: '59px'}} alt="agile" title="agile" />
</div>
<p><strong>Flexible Commercial Models</strong>
                                        CapEx, OpEx, and MSSP pricing aligned with business cash-flow goals.
                                    </p>
</div>
</div>
</div>
</section>
</div>
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
