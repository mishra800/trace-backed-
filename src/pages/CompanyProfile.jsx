import React, { useState, useEffect, useRef } from "react";


import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';
import { useOdometer } from '../hooks/useOdometer';

export default function CompanyProfile() {
  const seoData = getSEOData('companyProfile');
  useOdometer();

  const [activeBranchTab, setActiveBranchTab] = useState("hyd");
  const [activeCertTab, setActiveCertTab] = useState("aruba");

  // Unique branch slider state
  const [branchSlideIndex, setBranchSlideIndex] = useState(0);
  const branchAutoRef = useRef(null);

  const branches = [
    {
      name: "Hyderabad",
      address: "Flat No. 101 & 102, Venkoti Building,\nPlot No. 809, near 100 Feet Road,\nAyyappa Society, Mega Hills, Madhapur,\nHyderabad, Telangana â€“ 500081",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d91652.50659618304!2d78.38806747659413!3d17.44827208245006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91839cc5c417%3A0x6300c3b57aff6f19!2sTrace%20Network%20%26%20Engineering%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1761556822785!5m2!1sen!2sin"
    },
    {
      name: "Visakhapatnam",
      address: "Door No-47-9-39/2, Flat Ground B,\nSai Sadan Apartments, 3rd lane, Dwaraka Nagar,\nVisakhapatnam â€“ 16,\nAndhra Pradesh â€“ 530016",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.08490065738!2d83.3028262!3d17.7275456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394324bde6b6df%3A0x556a07a5affc6bf1!2sSai%20Sadan%20Apartments!5e1!3m2!1sen!2sin!4v1761557468256!5m2!1sen!2sin"
    },
    {
      name: "Chennai",
      address: "INSPIRE NETWORK TECHNOLOGY SOLUTIONS PRIVATE LIMITED\nNo. 158, 2nd Floor, Gulecha Tower,\nArcot Road, Vadapalani, Chennai â€“ 26\nChennai â€“ 600026, Tamil Nadu",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.4921866218374!2d80.20712577373322!3d13.049163513175706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52658a72449ae3%3A0x1cb7888219174663!2sInspire%20Network%20Technology%20Solutions%20Pvt%20Ltd.!5e1!3m2!1sen!2sin!4v1761557341975!5m2!1sen!2sin"
    },
    {
      name: "Vijayawada",
      address: "3rd Floor, Sai Towers, Benz Circle\nVijayawada, Andhra Pradesh â€“ 520010",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.85008816093!2d80.6618070738067!3d16.49050462802505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fae821663db5%3A0xd7616926bcc65e97!2sSai%20Towers!5e1!3m2!1sen!2sin!4v1761557600099!5m2!1sen!2sin"
    },
    {
      name: "Bangalore",
      address: "Ground Floor, No.67, 3rd Main,\nChiranjeevi Layout, Hebbal Kempapura,\nBengaluru, Karnataka â€“ 560024",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1664.820546398663!2d77.59592318968771!3d13.048561487681765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae178f85e09fd1%3A0x9755221d11726ebd!2sChiranjeevi%20Layout%2C%20Hebbal%20Kempapura%2C%20Bengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1761558519538!5m2!1sen!2sin"
    }
  ];

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(3);
  const totalSlides = Math.ceil(branches.length / cardsPerView);

  useEffect(() => {
    const initCarousels = () => {
      if (typeof window.$ === 'undefined') return;
      const $ = window.$;

      const $teamCarousel = $(".team-two__carousel");
      if ($teamCarousel.length && !$teamCarousel.hasClass('owl-loaded')) {
        $teamCarousel.owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          dots: false,
          smartSpeed: 500,
          autoplay: true,
          autoplayTimeout: 7000,
          startPosition: 0,
          navText: [
            '<span class="icon-right-up"></span>',
            '<span class="icon-right-up"></span>',
          ],
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 2.2 },
            1320: { items: 2.461 },
          },
        });
      }
    };

    setTimeout(initCarousels, 300);
    setTimeout(initCarousels, 800);
    setTimeout(initCarousels, 1500);

    const handleResize = () => setCardsPerView(getCardsPerView());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    branchAutoRef.current = setInterval(() => {
      setBranchSlideIndex(prev => (prev + 1) % Math.ceil(branches.length / cardsPerView));
    }, 3000);
    return () => clearInterval(branchAutoRef.current);
  }, [cardsPerView]);

  const goToBranchSlide = (idx) => {
    clearInterval(branchAutoRef.current);
    setBranchSlideIndex(idx);
    branchAutoRef.current = setInterval(() => {
      setBranchSlideIndex(prev => (prev + 1) % Math.ceil(branches.length / cardsPerView));
    }, 3000);
  };
  return (
    <>

      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />





      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h1>Company Profile</h1>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/" title="best cybersecurity companies in hyderabad"><i className="fas fa-home"></i>Home</a></li>
                <li><span className="icon-right-arrow-1"></span></li>
                <li>Company Profile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-four">
        <div className="about-four__bg-shape" style={{ backgroundImage: "url(/assets/images/shapes/about-four-bg-shape.png)" }}></div>
        <div className="about-four__bg-shape-2" style={{ backgroundImage: "url(/assets/images/shapes/about-four-bg-shape-2.png)" }}></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="about-four__left wow slideInLeft animated" data-wow-delay="100ms" data-wow-duration="2500ms">
                <div className="about-four__img-box">
                  <div className="about-four__img">
                    <img loading="lazy" alt="team trace and work culture in trace company" src="/assets/images/teamm.JPG" title="top 10 cybersecurity companies in hyderabad" />
                  </div>
                  <div className="about-four__experience">
                    <div className="about-four__experience-inner">
                      <div className="about-four__experience-count-box">
                        <h3 className="odometer" data-count="20">00</h3><span>+</span>
                      </div>
                      <p className="about-four__experience-count-text">Years of
                        <br /> Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-four__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1"></div>
                    <span className="section-title__tagline">About Trace</span>
                    <div className="section-title__tagline-shape-2"></div>
                  </div>
                  <h2 className="section-title__title">
                    Discover Why Businesses <span>Trust Trace</span>
                  </h2>
                </div>
                <p className="about-four__text" style={{ marginTop: "15px", marginBottom: "25px" }}>
                  Trace Engineering Pvt Ltd Network delivers innovative IT, networking, and cybersecurity
                  solutions to drive secure and scalable business growth.
                </p>
                <ul className="about-four__points-2 list-unstyled">
                  <li>

                    <div className="content">
                      <h5>Vision</h5>
                      <p>To stand unrivalled in customer satisfaction as the most trusted partner for
                        digital infrastructure and cyber-defence, empowering every organisation we
                        touch to thrive securely in an ever-evolving world.
                      </p>
                    </div>
                  </li>
                  <li>

                    <div className="content">
                      <h5>Mission </h5>
                      <p>We deliver secure, high-availability IT networking, cloud and cybersecurity
                        solutions driven by integrity, innovation and customer-first collaboration
                        to maximize our clients' business outcomes and provide seamless customer
                        support to our 1000+ clients across diverse industries. </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-two">
        <div className="team-two__bg-shape float-bob-y" style={{ backgroundImage: "url(/assets/images/shapes/team-two-bg-shape.png)" }}></div>
        <div className="team-two__shape-1"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="team-two__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1"></div>
                    <span className="section-title__tagline">Our Experts</span>
                    <div className="section-title__tagline-shape-2"></div>
                  </div>
                  <h2 className="section-title__title">
                    Meet Our <span>Leadership</span>
                  </h2>
                </div>
                <p className="team-two__text">
                  With 20+ years in enterprise networking and cybersecurity leadership, our team delivers secure enterprise networks, IT infrastructure security solutions, and data centre network security for critical operations.
                </p>
                <p className="team-two__text">Recognised by Aruba and Sophos, we specialise in cybersecurity for business leaders, securing cloud infrastructure and data centre security, turning complex challenges into scalable, future-ready solutions.</p>
                <p className="team-two__text">Through innovation and industry recognition, our experts provide secure infrastructure solutions that protect businesses today and prepare them for tomorrow's threats.</p>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="team-two__right">
                <div className="team-two__carousel owl-theme owl-carousel">
                  <div className="item">
                    <div className="team-two__single">
                      <div className="team-two__img-box">
                        <div className="team-two__img">
                          <img loading="lazy" alt="suresh" src="/assets/images/suresh.png" title="suresh Nissankara founder and managing director" />
                        </div>
                        <div className="team-two__title-box">
                          <h3>
                            <a> Suresh Babu Nissankara </a>
                          </h3>
                          <p>Founder &amp; Managing Director</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="team-two__single">
                      <div className="team-two__img-box">
                        <div className="team-two__img">
                          <img loading="lazy" alt="mohammad" src="/assets/images/mohammad.png" title="trace head of sales" />
                        </div>
                        <div className="team-two__title-box">
                          <h3><a> Mohammad Biyabani </a></h3>
                          <p>Head of Sales </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="team-two__single">
                      <div className="team-two__img-box">
                        <div className="team-two__img">
                          <img loading="lazy" alt="vidya" src="/assets/images/Vidya.JPG" title="trace head techno commercial" />
                        </div>
                        <div className="team-two__title-box">
                          <h3><a>Vidyasagar Tumma</a></h3>
                          <p>Head - Techno Commercial</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="branch-tabs-container mt-4">

        <div className="branch-tab-buttons">
          <div className={`branch-tab-button${activeBranchTab === "hyd" ? " active" : ""}`} onClick={() => setActiveBranchTab("hyd")}>Dynamic Workforce</div>
          <div className={`branch-tab-button${activeBranchTab === "chn" ? " active" : ""}`} onClick={() => setActiveBranchTab("chn")}>Certified Technical Experts</div>
          <div className={`branch-tab-button${activeBranchTab === "vij" ? " active" : ""}`} onClick={() => setActiveBranchTab("vij")}>Global OEM Partnerships</div>
          <div className={`branch-tab-button${activeBranchTab === "blr" ? " active" : ""}`} onClick={() => setActiveBranchTab("blr")}>Projects Completed</div>
          <div className={`branch-tab-button${activeBranchTab === "ent" ? " active" : ""}`} onClick={() => setActiveBranchTab("ent")}>Others</div>
        </div>

        <div className={`branch-tab-content${activeBranchTab === "hyd" ? " active" : ""}`} id="hyd">
          <div className="branch-slider">
            <div className="branch-slider-track">
              <div className="branch-slide">
                <img loading="lazy" alt="trace team" src="/assets/images/team3 - Copy.jpeg" title="best cybersecurity companies in hyderabad" />
                <p><strong>80+</strong> Dynamic Workforce</p>
              </div>
            </div>
          </div>
          <div className="unique-branch-slider">
            <div className="section-title text-center">
              <h2 className="section-title__title">
                Our<span> Branches</span>
              </h2>
            </div>
            <div className="unique-branch-track" style={{ transform: `translateX(-${branchSlideIndex * (100 / cardsPerView)}%)` }}>
              {branches.map((branch, i) => (
                <div className="unique-branch-card" key={i}>
                  <iframe
                    src={branch.map}
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: "15px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={branch.name}
                  ></iframe>
                  <div className="unique-branch-name">{branch.name}</div>
                  <div className="unique-branch-address">
                    {branch.address.split("\n").map((line, j) => (
                      <span key={j}>{line}<br /></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="unique-branch-dots">
              {Array.from({ length: Math.ceil(branches.length / cardsPerView) }).map((_, i) => (
                <span
                  key={i}
                  className={`unique-branch-dot${branchSlideIndex === i ? " active" : ""}`}
                  onClick={() => goToBranchSlide(i)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        <div className={`branch-tab-content${activeBranchTab === "chn" ? " active" : ""}`} id="chn">
          <div className="branch-slider">
            <div className="branch-slider-track">
              <div className="branch-slide">
                <img loading="lazy" alt="certified technical experts and professional IT certifications" src="/assets/images/awards.png" title="certified technical experts and industry certifications" />
                <p><strong>20+</strong> Certified Technical Experts</p>
              </div>
            </div>
          </div>
          <section className="cert-awards-section-dark">
            <div className="container">
              <ul className="cert-tabs-nav-dark">
                <li className={`cert-tab-dark${activeCertTab === "aruba" ? " active" : ""}`} onClick={() => setActiveCertTab("aruba")} style={{ cursor: "pointer" }}>Aruba</li>
                <li className={`cert-tab-dark${activeCertTab === "sophos" ? " active" : ""}`} onClick={() => setActiveCertTab("sophos")} style={{ cursor: "pointer" }}>Sophos</li>
                <li className={`cert-tab-dark${activeCertTab === "others" ? " active" : ""}`} onClick={() => setActiveCertTab("others")} style={{ cursor: "pointer" }}>Other Certifications</li>
              </ul>
              <div className="cert-tabs-content-dark">

                <div className={`cert-tab-pane-dark${activeCertTab === "aruba" ? " active" : ""}`} id="aruba">
                  <h3 className="cert-sub-title-dark">Aruba Certifications</h3>
                  <div className="cert-grid-dark">
                    <img loading="lazy" alt="aruba authorized instant on solution partner certification" src="/assets/images/Aruba-AASP.png" title="aruba instant on partner certification" />
                    <img loading="lazy" alt="aruba certified switching professional certification" src="/assets/images/Aruba-ACSP.png" title="aruba switching professional certification" />
                    <img loading="lazy" alt="aruba expert level campus networking certification" src="/assets/images/Aruba-ACSX-3.png" title="aruba expert campus networking certification" />
                    <img loading="lazy" alt="hpe aruba campus access professional certification" src="/assets/images/HPE-ACP-CA.png" title="hpe aruba campus access certification" />
                  </div>
                  <div className="cert-grid-dark">
                    <img loading="lazy" alt="hpe aruba campus access associate certification" src="/assets/images/HPE-Associate-Campus-access.png" title="campus access associate certification" />
                    <img loading="lazy" alt="hpe aruba network security associate certification" src="/assets/images/HPE-Associate-Network-Security.png" title="network security associate certification" />
                    <img loading="lazy" alt="hpe aruba central product specialist certification" src="/assets/images/HPE-product-specialist-central.png" title="aruba central product specialist" />
                    <img loading="lazy" alt="aruba cx 10000 switch product specialist certification" src="/assets/images/HPE-product-specialist-cx-10000-switch.png" title="cx 10000 switch specialist certification" />
                  </div>
                  <h3 className="cert-sub-title-dark">Aruba Awards</h3>
                  <ul className="award-list-dark">
                    <li>Aruba Best Partner 2024</li>
                    <li>Aruba Excellence Award 2023</li>
                  </ul>
                </div>

                <div className={`cert-tab-pane-dark${activeCertTab === "sophos" ? " active" : ""}`} id="sophos">
                  <h3 className="cert-sub-title-dark">Sophos Certifications</h3>
                  <ul className="cert-list-dark">
                    <li>Sophos Endpoint Engineer</li>
                    <li>Sophos Endpoint Technician</li>
                    <li>Sophos Endpoint Architecture</li>
                    <li>Sophos Firewall Architecture</li>
                    <li>Sophos Firewall Engineer</li>
                    <li>Sophos Firewall Technician</li>
                  </ul>
                  <h3 className="cert-sub-title-dark">Sophos Awards</h3>
                  <ul className="award-list-dark">
                    <li>Sophos Partner of the Year 2025 - India &amp; SAARC</li>
                    <li>Sophos Partner of the Year - India &amp; SAARC</li>
                    <li>Top Performer Of The Region (2020)</li>
                    <li>Best Performing Partner (2018)</li>
                    <li>Best Solution Partner (2023, 2018, 2017, 2016)</li>
                    <li>Best Platinum Partner (2020)</li>
                    <li>Best Top Performing Partner (2019)</li>
                    <li>Highest Achiever Business Partner (2015)</li>
                  </ul>
                </div>

                <div className={`cert-tab-pane-dark${activeCertTab === "others" ? " active" : ""}`} id="others">
                  <h3 className="cert-sub-title-dark">Other Certifications</h3>
                  <div className="cert-grid-dark">
                    <img loading="lazy" alt="palo alto networks certified network security engineer certification" src="/assets/images/pan_pcnse_digital-badge_sharing-logo-2048x2048.png" title="palo alto pcnse certification" />
                    <img loading="lazy" alt="certified ethical hacker cybersecurity certification" src="/assets/images/1.-CEH-Certified-Ethical-hacker.png" title="ceh ethical hacking certification" />
                    <img loading="lazy" alt="cisco certified network associate routing and switching certification" src="/assets/images/ccna_600.png" title="ccna networking certification" />
                    <img loading="lazy" alt="seceon cybersecurity professional certification" src="/assets/images/Vinay Kumar Certificate_page-0001.jpg" title="seceon professional cybersecurity certification" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={`branch-tab-content${activeBranchTab === "vij" ? " active" : ""}`} id="vij">
          <div className="branch-slider">
            <div className="branch-slider-track">
              <div className="branch-slide">
                <img loading="lazy" alt="global technology partner ecosystem and oem collaborations" src="/assets/images/event.jpg" title="global oem partnerships and technology alliances" />
                <p><strong>40+</strong> Global OEM Partnerships</p>
              </div>
            </div>
          </div>
          <section className="awards-section">
            <div className="awards-slider">
              <div className="awards-track">
                <div className="award-card"><img loading="lazy" alt="enterprise cybersecurity firewall and endpoint security solutions" src="/assets/images/partners/SOPHOS.jpg" title="enterprise cybersecurity solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="enterprise wired and wireless networking solutions" src="/assets/images/partners/HPE-Aruba.jpg" title="enterprise networking solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="data loss prevention and insider threat security solutions" src="/assets/images/partners/Forcepoint.jpg" title="data security solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="backup replication and disaster recovery solutions" src="/assets/images/partners/VEEAM.jpg" title="backup and disaster recovery" /></div>
                <div className="award-card"><img loading="lazy" alt="vulnerability assessment and risk management platform" src="/assets/images/partners/TENABLE-2.jpg" title="vulnerability management" /></div>
                <div className="award-card"><img loading="lazy" alt="enterprise servers storage and data center solutions" src="/assets/images/partners/Hewlett-Packard-Enterprise-2.jpg" title="enterprise it infrastructure" /></div>
                <div className="award-card"><img loading="lazy" alt="cloud connectivity and software solutions" src="/assets/images/zoho.png" title="cloud connectivity and software solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="ai driven security analytics and threat detection" src="/assets/images/partners/SECEON.jpg" title="ai cybersecurity platform" /></div>
                <div className="award-card"><img loading="lazy" alt="managed it services and digital transformation solutions" src="/assets/images/k7.png" title="managed it services" /></div>
                <div className="award-card"><img loading="lazy" alt="video conferencing and collaboration systems" src="/assets/images/partners/PEOPLE-LINK.jpg" title="collaboration and av solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="enterprise desktops laptops and printing solutions" src="/assets/images/partners/HP.jpg" title="enterprise hardware solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="enterprise servers workstations and end user devices" src="/assets/images/partners/LENOVO.jpg" title="enterprise computing solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="data center servers storage and networking solutions" src="/assets/images/partners/DELL-2.jpg" title="data center solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="it infrastructure monitoring and observability platform" src="/assets/images/partners/MOTADATA.jpg" title="it monitoring solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="secure remote access and virtual desktop solutions" src="/assets/images/partners/ACCOPS.jpg" title="secure remote access" /></div>
                <div className="award-card"><img loading="lazy" alt="enterprise mobile device and endpoint ecosystem" src="/assets/images/partners/APPLE-2.jpg" title="enterprise device ecosystem" /></div>
                <div className="award-card"><img loading="lazy" alt="cloud infrastructure and services" src="/assets/images/jio.png" title="cloud infrastructure and services" /></div>
                <div className="award-card"><img loading="lazy" alt="data loss prevention and insider risk management" src="/assets/images/partners/SafeticaONE.jpg" title="data loss prevention solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="siem threat detection and log management platform" src="/assets/images/partners/Logrythm.jpg" title="siem security platform" /></div>
                <div className="award-card"><img loading="lazy" alt="it service desk and endpoint management software" src="/assets/images/partners/Manage-Engine.jpg" title="it service management" /></div>
                <div className="award-card"><img loading="lazy" alt="cloud based productivity and collaboration tools" src="/assets/images/partners/MICROSOFT-365-2.jpg" title="cloud productivity suite" /></div>
                <div className="award-card"><img loading="lazy" alt="cloud infrastructure and application hosting services" src="/assets/images/partners/MICROSOFT-AZURE.jpg" title="cloud infrastructure services" /></div>
                <div className="award-card"><img loading="lazy" alt="unified endpoint and mobile device management" src="/assets/images/partners/42-Gears.jpg" title="uem device management" /></div>
                <div className="award-card"><img loading="lazy" alt="privileged access management and identity security" src="/assets/images/partners/ARCON.jpg" title="pam security solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="identity governance and access management platform" src="/assets/images/partners/cymmetri.png" title="identity security solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="email security and network protection software" src="/assets/images/partners/GFI-SOFTWARE.jpg" title="email security solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="enterprise communication and collaboration hardware" src="/assets/images/partners/POPY.jpg" title="enterprise communication solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="next generation firewall and zero trust security" src="/assets/images/partners/Palo-Alto-Networks-2.jpg" title="advanced network security" /></div>
                <div className="award-card"><img loading="lazy" alt="hyperconverged infrastructure and private cloud" src="/assets/images/partners/nutanix.png" title="hyperconverged infrastructure" /></div>
                <div className="award-card"><img loading="lazy" alt="virtualization and cloud management platform" src="/assets/images/partners/Vmware.jpg" title="virtualization solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="network performance monitoring and management tools" src="/assets/images/partners/SOLARWINDS.jpg" title="network monitoring solutions" /></div>
                <div className="award-card"><img loading="lazy" alt="network connectivity and managed data center services" src="/assets/images/partners/SIFY-2.jpg" title="network and data center services" /></div>
              </div>
            </div>
          </section>
        </div>

        <div className={`branch-tab-content${activeBranchTab === "blr" ? " active" : ""}`} id="blr">
          <div className="branch-slider">
            <div className="branch-slider-track">
              <div className="branch-slide">
                <img loading="lazy" alt="large scale enterprise it and cybersecurity projects completed" src="/assets/images/completed.webp" title="enterprise it projects completed" />
                <p><strong>1000+</strong> Projects Completed</p>
              </div>
            </div>
          </div>
          <section className="blog-carousel-page">
            <div className="container">
              <div className="event-cards" style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
                <div className="blog-one__single" style={{ width: "410px" }}>
                  <div className="blog-one__img">
                    <img loading="lazy" alt="pharmaceutical company network infrastructure modernization case study" src="/assets/images/case1.jpg" title="pharmaceutical network infrastructure case study" />
                  </div>
                  <div className="blog-one__content">
                    <h3 className="blog-one__title">Pharmaceutical Leader Future-Proofs their Network Infrastructure</h3>
                    <div className="blog-one__btn-box">
                      <a className="thm-btn" href="/pharmaceutical-network-infrastructure" title="pharmaceutical network infrastructure case study">Read More<span className="icon-right-arrow"></span></a>
                    </div>
                  </div>
                </div>
                <div className="blog-one__single" style={{ width: "410px" }}>
                  <div className="blog-one__img">
                    <img loading="lazy" alt="university campus it network and digital learning transformation" src="/assets/images/case2.jpg" title="university it modernization case study" />
                  </div>
                  <div className="blog-one__content">
                    <h3 className="blog-one__title">University Revamps Campus IT &amp; Learning Ecosystem</h3>
                    <div className="blog-one__btn-box">
                      <a className="thm-btn" href="/university-it-learning-ecosystem" title="university it and learning ecosystem case study">Read More<span className="icon-right-arrow"></span></a>
                    </div>
                  </div>
                </div>
                <div className="blog-one__single" style={{ width: "410px" }}>
                  <div className="blog-one__img">
                    <img loading="lazy" alt="international schools scalable it and av infrastructure upgrade" src="/assets/images/case3.jpg" title="school it and av infrastructure case study" />
                  </div>
                  <div className="blog-one__content">
                    <h3 className="blog-one__title">Chain of International Schools Elevate Learning Through Scalable IT &amp; AV Upgrades</h3>
                    <div className="blog-one__btn-box">
                      <a className="thm-btn" href="/international-schools-it-av-upgrades" title="school it and av upgrade case study">Read More<span className="icon-right-arrow"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={`branch-tab-content${activeBranchTab === "ent" ? " active" : ""}`} id="ent">
          <div className="branch-slide" style={{ color: "#fff", padding: "40px", textAlign: "center", borderRadius: "10px" }}>
            <img loading="lazy" style={{ width: "250px" }} alt="best cybersecurity company in hyderabad" src="/assets/images/logoo.png" title="top cybersecurity company in hyderabad" />
            <p style={{ fontSize: "24px", margin: "0 0 20px 0" }}><strong>1000+</strong> Enterprises Served</p>
            <p style={{ fontSize: "24px", margin: "0" }}><strong>50+</strong> Solutions Offered</p>
          </div>
        </div>
      </div>
      <section className="premium-cards-section pt-2">
        <div className="premium-container">
          <div className="section-title text-center pb-4">
            <h2 className="section-title__title">
              Why Leading<span> Brands</span> Choose<span> Trace</span>
            </h2>
          </div>
          <div className="premium-card-grid">
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" alt="certified multi vendor cybersecurity and networking experts" src="/assets/images/certified.png" title="certified multi vendor IT security expertise" />
              </div>
              <p><strong>Multi-vendor, Certified Expertise</strong>
                With 40+ Global OEM Partnerships, we are bringing you future-proof solutions matched to your
                exact needs.
              </p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" alt="20 years experience in cybersecurity and enterprise networking" src="/assets/images/leadership.png" title="experienced cybersecurity and networking solutions provider" />
              </div>
              <p><strong>20+ Years of Leadership</strong>
                Proven security and networking solutions for top institutions and data centers across South
                India.
              </p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" alt="customer first cost effective cybersecurity solutions" src="/assets/images/luxury.png" title="value driven IT and security solutions" />
              </div>
              <p><strong>Customer-First, Value-Driven</strong>
                Right-sized solutions that deliver maximum protection at the lowest total cost of ownership.
              </p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" alt="local IT support engineers for enterprise security services" src="/assets/images/technical-support.png" title="local IT support and rapid onsite assistance" />
              </div>
              <p><strong>Local Presence &amp; Rapid Support</strong>
                Engineers in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag for quick onsite help.
              </p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" alt="ISO 27001 information security management certified services" src="/assets/images/iso-certificate.png" title="ISO 27001 compliant security processes" />
              </div>
              <p><strong>ISO 27001-Certified</strong>
                Stringent change management and documentation aligned with global best practices.
              </p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" alt="proven cybersecurity deployment and implementation framework" src="/assets/images/frame.png" title="security deployment framework from assessment to support" />
              </div>
              <p><strong>Proven Deployment Framework</strong>
                Assess â†’ Design â†’ Deploy â†’ Optimize â†’ Support. Minimizing downtime and boosting ROI.
              </p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" alt="flexible cybersecurity pricing and managed security models" src="/assets/images/agile.png" title="flexible MSSP pricing and commercial models" />
              </div>
              <p><strong>Flexible Commercial Models</strong>
                CapEx, OpEx, and MSSP pricing aligned with business cash-flow goals.
              </p>
            </div>
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


