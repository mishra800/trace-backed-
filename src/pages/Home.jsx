import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { getSEOData } from "../config/seoConfig";
import { useOdometer } from "../hooks/useOdometer";
import { useAwardsSlider } from "../hooks/useAwardsSlider";
import Partners from "../components/Partners";
import { API_ENDPOINTS } from "../config/api";

export default function Home() {
  const seoData = getSEOData('home');
  const navigate = useNavigate();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value?.trim();
    const email = form.email?.value?.trim();
    const Phone = form.Phone?.value?.trim();
    const subject = form.subject?.value || 'General Inquiry';
    const message = form.message?.value?.trim();
    if (!name || !email || !Phone || !message) return;

    const formData = { name, email, Phone, subject, message };

    // Fire-and-forget: send to backend but don't block navigation on failure
    fetch(API_ENDPOINTS.CONTACT_SEND, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).catch((err) => console.warn('Contact API unavailable:', err));

    navigate('/thank-you');
  };

  useEffect(() => {
    console.log('Home component mounted');

    // ── Swiper hero slider init ──────────────────────────────────────────────
    // `thmSwiperInit` (from script.js) only runs on window.load, which has
    // already fired on SPA navigations. We call it explicitly here, first
    // destroying any stale Swiper instance so it cleanly reinitialises.
    const initSwiper = () => {
      if (typeof window.Swiper === 'undefined' || typeof window.$ === 'undefined') return;
      const $slider = window.$('.thm-swiper__slider');
      if (!$slider.length) return;

      $slider.each(function () {
        const el = this;
        // Destroy existing instance if present
        if (el.swiper) {
          el.swiper.destroy(true, true);
        }
        const options = window.$(el).data('swiper-options');
        new window.Swiper(el, options);
      });
    };

    // Try immediately, then retry to handle slow script loading
    initSwiper();
    const t1 = setTimeout(initSwiper, 300);
    const t2 = setTimeout(initSwiper, 800);
    const t3 = setTimeout(initSwiper, 1500);

    // Re-initialize owl carousels and interactions after React renders
    const initCarousels = () => {
      if (typeof window.$ === 'undefined') return;
      const $ = window.$;

      // Team Two Carousel
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

      // Portfolio Two (Services) Carousel
      const $portfolioCarousel = $(".portfolio-two__carousel");
      if ($portfolioCarousel.length && !$portfolioCarousel.hasClass('owl-loaded')) {
        // Remove any stuck owl-loading / owl-hidden class before init
        $portfolioCarousel.removeClass('owl-loading owl-hidden');
        $portfolioCarousel.owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          dots: true,
          smartSpeed: 500,
          autoplay: true,
          autoplayTimeout: 7000,
          navText: [
            '<span class="icon-right-up"></span>',
            '<span class="icon-right-up"></span>',
          ],
          responsive: {
            0: { items: 1 },
            768: { items: 1 },
            992: { items: 1 },
            1200: { items: 1 },
            1320: { items: 1 },
          },
        });
      }
      // Portfolio Two box hover interaction
      const $portfolioItems = $(".portfolio-two__box li");
      if ($portfolioItems.length && !$portfolioItems.data('hover-bound')) {
        $portfolioItems.each(function () {
          const self = $(this);
          self.on("mouseenter", function () {
            $(".portfolio-two__box li").removeClass("active");
            $(this).addClass("active");
          });
        });
        $portfolioItems.data('hover-bound', true);
      }

      // Testimonial Two Carousel
      const $testimonialCarousel = $(".testimonial-two__carousel");
      if ($testimonialCarousel.length && !$testimonialCarousel.hasClass('owl-loaded')) {
        $testimonialCarousel.owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          dots: true,
          smartSpeed: 500,
          autoplay: true,
          autoplayTimeout: 7000,
          navText: [
            '<span class="icon-right-up"></span>',
            '<span class="icon-right-up"></span>',
          ],
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 3 },
            1320: { items: 3 },
          },
        });
      }

      // Accordion (FAQ)
      const $accrodionGrp = $(".accrodion-grp");
      if ($accrodionGrp.length && !$accrodionGrp.data('accordion-bound')) {
        $accrodionGrp.each(function () {
          const accrodionName = $(this).data("grp-name");
          const Self = $(this);
          const accordion = Self.find(".accrodion");
          Self.addClass(accrodionName);
          Self.find(".accrodion .accrodion-content").hide();
          Self.find(".accrodion.active").find(".accrodion-content").show();
          accordion.each(function () {
            $(this).find(".accrodion-title").on("click", function () {
              if ($(this).parent().hasClass("active") === false) {
                $(".accrodion-grp." + accrodionName).find(".accrodion").removeClass("active");
                $(".accrodion-grp." + accrodionName).find(".accrodion").find(".accrodion-content").slideUp();
                $(this).parent().addClass("active");
                $(this).parent().find(".accrodion-content").slideDown();
              }
            });
          });
          Self.data('accordion-bound', true);
        });
      }
    };
    // Poll until jQuery + Owl are ready, then initialise carousels.
    // Fixed timeouts miss the window when scripts load slowly on first SPA visit.
    let carouselAttempts = 0;
    const carouselInterval = setInterval(() => {
      carouselAttempts++;
      if (typeof window.$ !== 'undefined' && typeof window.$.fn.owlCarousel !== 'undefined') {
        initCarousels();
        // Run once more after a short delay to catch any late-rendering elements
        setTimeout(initCarousels, 400);
        clearInterval(carouselInterval);
      } else if (carouselAttempts > 40) {
        // Give up after ~8 seconds (40 × 200ms)
        clearInterval(carouselInterval);
      }
    }, 200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(carouselInterval);
    };
  }, []);

  // Initialize Odometer for counters
  useOdometer();

  // Initialize Awards Slider
  useAwardsSlider();

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />

      {/* Main Slider Section */}
      <section className="main-slider-two">
        <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true,
        "effect": "fade",
        "pagination": {
        "el": "#main-slider-pagination",
        "type": "bullets",
        "clickable": true
        },
        "navigation": {
        "nextEl": "#main-slider__swiper-button-next",
        "prevEl": "#main-slider__swiper-button-prev"
        },
        "autoplay": {
            "delay": 8000
        } 
    }'>
          <div className="swiper-wrapper">

            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="main-slider-two__bg" style={{backgroundImage: 'url(/assets/images/trace.webp)'}} title="Trace Network & Engineering Pvt Ltd"></div>

              <div className="main-slider-two__shape-1"></div>
              <div className="main-slider-two__shape-2 float-bob-x">
                <img loading="lazy" src="/assets/images/shapes/main-slider-two-shape-2.png"
                     alt="Trace Network & Engineering Pvt Ltd"
                     title="Trace Network & Engineering Pvt Ltd" />
              </div>
              <div className="main-slider-two__shape-3 float-bob-y">
                <img loading="lazy" src="/assets/images/shapes/main-slider-two-shape-3.png"
                     alt="Trace Network & Engineering Pvt Ltd"
                     title="Trace Network & Engineering Pvt Ltd" />
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-two__content">
                      <h2 className="main-slider-two__title" title="20 Years, 1000+ Clients, One Trusted Partner">
                        20 Years<br /> 1000 + Clients<br /><span>One Trusted Partner</span>
                      </h2>
                      <p className="main-slider-two__text" title="Secure IT Solutions Since 2005">
                        Since 2005 Trace has delivered secure IT solutions <br />
                        network security testing, vulnerability scans<br />
                        and managed IT services.
                      </p>

                      <div className="main-slider-two__btns-box">
                        <div className="main-slider-two__btn-box-1">
                          <a href="/contact-us" className="btn-get-started" title="Talk to an Expert Today">
                            <span className="btn-text">Talk to an expert today</span>
                            <span className="btn-arrow"></span>
                          </a>
                        </div>
                      </div>

                      <div className="main-slider-two__shield-check-icon">
                        <img loading="lazy" src="/assets/images/icon/main-slider-shield-check-icon.png"
                             alt="Trace Network & Engineering Pvt Ltd"
                             title="Trusted IT Security Partner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="main-slider-two__bg" style={{backgroundImage: 'url(/assets/images/trace1.webp)'}} title="1000+ Businesses Trust Trace"></div>

              <div className="main-slider-two__shape-1"></div>
              <div className="main-slider-two__shape-2 float-bob-x">
                <img loading="lazy" src="/assets/images/shapes/main-slider-two-shape-2.png"
                     alt="Trace Network & Engineering Pvt Ltd"
                     title="Trace Network & Engineering Pvt Ltd" />
              </div>
              <div className="main-slider-two__shape-3 float-bob-y">
                <img loading="lazy" src="/assets/images/shapes/main-slider-two-shape-3.png"
                     alt="Trace Network & Engineering Pvt Ltd"
                     title="Trace Network & Engineering Pvt Ltd" />
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-two__content">
                      <h2 className="main-slider-two__title pt-4" title="1000+ Businesses Trust Trace">
                        <span>1000+ Businesses</span><br /> Trust Trace
                      </h2>
                      <p className="main-slider-two__text" title="Managed IT Security & Vulnerability Scanning">
                        With web and network vulnerability scanning and managed IT security services<br />
                        Trace keeps businesses safe, compliant, and future-ready.
                      </p>

                      <div className="main-slider-two__btns-box">
                        <div className="main-slider-two__btn-box-1">
                          <a href="/contact-us" className="btn-get-started" title="Talk to an Expert Today">
                            <span className="btn-text">Talk to an expert today</span>
                            <span className="btn-arrow"></span>
                          </a>
                        </div>
                      </div>
                      <div className="main-slider-two__shield-check-icon">
                        <img loading="lazy" src="/assets/images/icon/main-slider-shield-check-icon.png"
                             alt="Trace Network & Engineering Pvt Ltd"
                             title="Trusted IT Security Partner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="main-slider-two__bg" style={{backgroundImage: 'url(/assets/images/slide4.webp)'}} title="Future-Ready Network Solutions"></div>

              <div className="main-slider-two__shape-1"></div>
              <div className="main-slider-two__shape-2 float-bob-x">
                <img loading="lazy" src="/assets/images/shapes/main-slider-two-shape-2.png"
                     alt="Trace Network & Engineering Pvt Ltd"
                     title="Trace Network & Engineering Pvt Ltd" />
              </div>
              <div className="main-slider-two__shape-3 float-bob-y">
                <img loading="lazy" src="/assets/images/shapes/main-slider-two-shape-3.png"
                     alt="Trace Network & Engineering Pvt Ltd"
                     title="Trace Network & Engineering Pvt Ltd" />
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-two__content">
                      <h2 className="main-slider-two__title" title="Networks Built for Tomorrow">
                        Networks built <br />
                        <span>for tomorrow,</span> <br /> delivered today.
                      </h2>
                      <p className="main-slider-two__text" title="Cloud Security, SIEM & 24/7 Monitoring">
                        From Cloud Security and SIEM,<br />
                        Trace designs and manages IT networks with<br />
                        advanced security and 24/7 monitoring.
                      </p>

                      <div className="main-slider-two__btns-box">
                        <div className="main-slider-two__btn-box-1">
                          <a href="/contact-us" className="btn-get-started" title="Modernize Your Network with Trace">
                            <span className="btn-text">Modernize your Network with Trace</span>
                            <span className="btn-arrow"></span>
                          </a>
                        </div>
                      </div>

                      <div className="main-slider-two__shield-check-icon">
                        <img loading="lazy" src="/assets/images/icon/main-slider-shield-check-icon.png"
                             alt="Trace Network & Engineering Pvt Ltd"
                             title="Trusted IT Security Partner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="swiper-slide">
              <div className="main-slider-two__bg" style={{backgroundImage: 'url(/assets/images/trace2.webp)'}} title="Stop Cyber Breaches Before They Start"></div>

              <div className="main-slider-two__shape-1"></div>
              <div className="main-slider-two__shape-2 float-bob-x">
                <img loading="lazy" src="/assets/images/shapes/main-slider-two-shape-2.png"
                     alt="Trace Network & Engineering Pvt Ltd"
                     title="Trace Network & Engineering Pvt Ltd" />
              </div>
              <div className="main-slider-two__shape-3 float-bob-y">
                <img loading="lazy" src="/assets/images/shapes/main-slider-two-shape-3.png"
                     alt="Trace Network & Engineering Pvt Ltd"
                     title="Trace Network & Engineering Pvt Ltd" />
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-two__content">
                      <h2 className="main-slider-two__title" title="Stop Breaches Before They Start">
                        Stop Breaches<br />
                        <span>Before</span> <br /> They Start
                      </h2>
                      <p className="main-slider-two__text" title="Penetration Testing & Vulnerability Audits">
                        We provide penetration testing, free website and network vulnerability audits<br />
                        and network vulnerability scanning tools to<br />
                        help identify and fix threats before hackers can exploit them.
                      </p>

                      <div className="main-slider-two__btns-box">
                        <div className="main-slider-two__btn-box-1">
                          <a href="/contact-us" className="btn-get-started" title="Get a Free Expert Consultation">
                            <span className="btn-text">Get a Free Expert Consultation</span>
                            <span className="btn-arrow"></span>
                          </a>
                        </div>
                      </div>

                      <div className="main-slider-two__shield-check-icon">
                        <img loading="lazy" src="/assets/images/icon/main-slider-shield-check-icon.png"
                             alt="Trace Network & Engineering Pvt Ltd"
                             title="Trusted IT Security Partner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="main-slider-two__nav">
            <div className="swiper-button-prev" id="main-slider__swiper-button-next">
              <i className="icon-right-up"></i>
            </div>
            <div className="swiper-button-next" id="main-slider__swiper-button-prev">
              <i className="icon-right-up"></i>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-two">
        <div className="about-two__shape-2"></div>
        <div className="about-two__shape-3">
          <img loading="lazy" src="/assets/images/shapes/about-two-shape-3.png" alt="Trace" title="Trace" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-two__left">
                <div className="about-two__img-box">
                  <div className="about-two__img">
                    <img loading="lazy" src="/assets/images/a1.jpg" alt="Data Security" title="Data Security" />
                  </div>
                  <div className="about-two__img-2">
                    <img loading="lazy" src="/assets/images/a3.jpg" alt="Cybersecurity" title="Cybersecurity" />
                  </div>
                  <div className="about-two__shape-1"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-two__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1"></div>
                    <span className="section-title__tagline">About Us</span>
                    <div className="section-title__tagline-shape-2"></div>
                  </div>
                  <h1 className="section-title__title">
                    Delivering Secure<span> Network &amp; Cybersecurity</span> Solutions<span> for Over Two Decades</span>
                  </h1>
                </div>
                <p className="about-two__text">
                  At Trace Network & Engineering Pvt Ltd, we don't just deliver IT solutions — we build the backbone of your business success. Since 2005, we've been helping organisations stay secure, connected, and future-ready with enterprise networking and cybersecurity expertise. Backed by 20+ years of experience and the trust of 1,000+ clients across Telangana, Andhra Pradesh, Tamil Nadu, and Karnataka, we create IT ecosystems that are smart, scalable, and built for growth.
                </p>
                <div className="about-two__points-box">
                  <ul className="about-two__points-list list-unstyled">
                    <li>
                      <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                      <p>20+ years in enterprise networking & cybersecurity.</p>
                    </li>
                    <li>
                      <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                      <p>1000+ successful customer engagements.</p>
                    </li>
                  </ul>
                  <ul className="about-two__points-list list-unstyled">
                    <li>
                      <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                      <p>Platinum and gold partnerships with industry leaders like HPE Aruba, Sophos, Lenovo, Dell & Palo Alto.</p>
                    </li>
                    <li>
                      <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                      <p>Comprehensive services: VAPT, Cloud Solutions, Data Centre Networking Solutions, MSP, and Zero Trust architectures.</p>
                    </li>
                  </ul>
                </div>
                <div className="about-two__experience-contact-and-btn">
                  <div className="about-two__experience-box">
                    <div className="about-two__experience-count-box">
                      <h3 className="odometer" data-count="20">00</h3><span>+</span>
                    </div>
                    <p className="about-two__experience-text">Years of<br />Experience</p>
                  </div>
                  <div className="about-two__btn-box">
                    <a href="/company-profile" className="btn-get-started">
                      <span className="btn-text">Learn More</span>
                      <span className="btn-arrow"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Cards Section */}
      <section className="premium-cards-section home-premium-cards pt-2">
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
              <p><strong>Multi‑vendor, Certified Network Security Expertise</strong>
                Partnering with 40+ global OEMs, Trace Network offers multi-vendor cybersecurity and network solutions that are future-proof, scalable, and tailored to your exact IT security needs.
              </p>
            </div>

            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/leadership.png" alt="leadership" title="leadership" />
              </div>
              <p><strong>20+ Years of Cybersecurity Leadership</strong>
                With two decades of proven expertise, we provide penetration testing, vulnerability assessments, and enterprise IT security solutions for Top Campuses, Global Capability Centres or Special Economic Zones, data centres, and enterprises across India.
              </p>
            </div>

            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/luxury.png" style={{width: '60px'}} alt="luxury" title="luxury" />
              </div>
              <p><strong>Customer‑First, Value‑Driven</strong>
                Our cost-effective cybersecurity services ensure maximum protection with right-sized solutions, reducing risks and delivering the lowest total cost of ownership (TCO) for businesses.
              </p>
            </div>

            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/technical-support.png" style={{width: '55px'}} title="technical-support" alt="technical-support" />
              </div>
              <p><strong>Local Presence with Rapid IT Support</strong>
                Trace Network engineers are available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag, ensuring quick on-site support and reliable network security services whenever you need them.
              </p>
            </div>

            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/iso-certificate.png" style={{width: '59px'}} alt="iso-certificate" title="iso-certificate" />
              </div>
              <p><strong>ISO 27001‑Certified Cybersecurity Provider</strong>
                As an ISO 27001-certified company, we follow stringent change management and compliance practices, aligning with global information security standards to protect your business.
              </p>
            </div>

            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/frame.png" style={{width: '50px'}} alt="frame" title="frame" />
              </div>
              <p><strong>Proven Cybersecurity Deployment Framework</strong>
                Our structured approach, Assess → Design → Deploy → Optimise → Support, minimises downtime, enhances performance, and ensures maximum ROI from your IT and cybersecurity investments.
              </p>
            </div>

            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/agile.png" style={{width: '59px'}} title="agile" alt="agile" />
              </div>
              <p><strong>Flexible MSSP & Security Pricing Models</strong>
                Choose from CapEx, OpEx, or Managed Security Service Provider (MSSP) models to align IT security investments with your organisation's business goals and cash-flow requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="section-title text-left">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">Awards</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <h2 className="section-title__title">
            Recognized & Trusted <span>for Delivering </span><br />
            Value & Excellence
          </h2>
        </div>

        <div className="awards-slider">
          <div className="awards-track">
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/new.jpeg" alt="Trace Excellence & Leadership Award" title="Trace Excellence & Leadership Award" />
              <span>Trace Excellence & Leadership Award</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/1.png" alt="Sophos Best Performing Partner (2024)" title="Sophos Best Performing Partner (2024)" />
              <span>Sophos Best Performing Partner (2024)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/2.png" alt="Certification of Completion Aruba Instant (2023)" title="Certification of Completion Aruba Instant (2023)" />
              <span>Certification of Completion Aruba Instant (2023)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/3.png" alt="Core Champion HPE Aruba Networking (2023)" title="Core Champion HPE Aruba Networking (2023)" />
              <span>Core Champion HPE Aruba Networking (2023)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/4.png" alt="Sophos Top Performer of the Region" title="Sophos Top Performer of the Region" />
              <span>Sophos Top Performer of the Region</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/5.png" alt="Sophos Best Solution Partner" title="Sophos Best Solution Partner" />
              <span>Sophos Best Solution Partner</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/6.png" alt="Certified by SonicWall (2022)" title="Certified by SonicWall (2022)" />
              <span>Certified by SonicWall (2022)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/7.png" alt="HPE Aruba Accelerating Next (2022)" title="HPE Aruba Accelerating Next (2022)" />
              <span>HPE Aruba Accelerating Next (2022)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/11.png" alt="Sophos Best Top Performing Partner (2020)" title="Sophos Best Top Performing Partner (2020)" />
              <span>Sophos Best Top Performing Partner (2020)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/12.png" alt="Sophos Platinum Partner (2019)" title="Sophos Platinum Partner (2019)" />
              <span>Sophos Platinum Partner (2019)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/13.png" alt="Sophos Best Performing Partner (2018)" title="Sophos Best Performing Partner (2018)" />
              <span>Sophos Best Performing Partner (2018)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/14.png" alt="Sophos Best Solution Partner (2018)" title="Sophos Best Solution Partner (2018)" />
              <span>Sophos Best Solution Partner (2018)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/15.png" alt="Sophos Best Solution Partner (2017)" title="Sophos Best Solution Partner (2017)" />
              <span>Sophos Best Solution Partner (2017)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/16.png" alt="Sophos Best Solution Partner (2016)" title="Sophos Best Solution Partner (2016)" />
              <span>Sophos Best Solution Partner (2016)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/17.png" alt="Sophos Highest Achiever Business Partner (2015)" title="Sophos Highest Achiever Business Partner (2015)" />
              <span>Sophos Highest Achiever Business Partner (2015)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/18.png" alt="Cyberoam Authorized Goal Partner (2015)" title="Cyberoam Authorized Goal Partner (2015)" />
              <span>Cyberoam Authorized Goal Partner (2015)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/19.png" alt="Sophos Top Performer Of the Region" title="Sophos Top Performer Of the Region" />
              <span>Sophos Top Performer Of the Region</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Process Two Section */}
      <section className="process-two">
        <div className="process-two__bg"></div>
        <div className="container">
          <div className="section-title text-center sec- animation-style1">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-1"></div>
              <span className="section-title__tagline">Our Process</span>
              <div className="section-title__tagline-shape-2"></div>
            </div>
            <h2 className="section-title__title">Delivering Future-Proof <span>Solutions from </span>Planning to Deployment</h2>
          </div>
          <ul className="row list-unstyled">
            <li className="col-xl-3 col-lg-3">
              <div className="process-two__single">
                <div className="process-two__count"></div>
                <h3 className="process-two__title">Consultation & Assessment</h3>
                <p className="process-two__text">We start with a detailed IT consultation and infrastructure assessment, analysing existing systems to identify business needs and define technical objectives for networking, cybersecurity, and cloud services.</p>
              </div>
            </li>
            <li className="col-xl-3 col-lg-3">
              <div className="process-two__single">
                <div className="process-two__shape-1 float-bob-x">
                  <img loading="lazy" src="/assets/images/shapes/process-two-shape-1.png" alt="trace" title="trace" />
                </div>
                <div className="process-two__shape-2 float-bob-x">
                  <img loading="lazy" src="/assets/images/shapes/process-two-shape-2.png" alt="trace" title="trace" />
                </div>
                <div className="process-two__count"></div>
                <h3 className="process-two__title">Solution Design</h3>
                <p className="process-two__text">Our experts create custom IT solution designs with a focus on scalability, security, and efficiency covering database security, cloud information security, and enterprise network infrastructure.</p>
              </div>
            </li>
            <li className="col-xl-3 col-lg-3">
              <div className="process-two__single">
                <div className="process-two__count"></div>
                <h3 className="process-two__title">Implementation & Deployment</h3>
                <p className="process-two__text">Through precise implementation and deployment, we integrate advanced technologies, configure secure systems, and ensure a smooth rollout of cybersecurity solutions, cloud platforms, and data protection frameworks.</p>
              </div>
            </li>
            <li className="col-xl-3 col-lg-3">
              <div className="process-two__single">
                <div className="process-two__shape-1 float-bob-x">
                  <img loading="lazy" src="/assets/images/shapes/process-two-shape-1.png" alt="trace" title="trace" />
                </div>
                <div className="process-two__count"></div>
                <h3 className="process-two__title">Monitoring & Optimization</h3>
                <p className="process-two__text">With ongoing IT monitoring, performance analysis, and optimisation, we safeguard operations using data breach protection, zero-trust data security, and continuous system refinement for maximum reliability.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-one mb-5 mt-0">
        <div className="counter-one__wrap">
          <div className="counter-one__bg-shape float-bob-x" style={{backgroundImage: 'url(/assets/images/shapes/counter-one-bg-shape.png)'}}></div>
          <div className="counter-one__shape-1"></div>
          <div className="counter-one__shape-2"></div>
          <div className="container">
            <div className="section-title text-center">
              <h2 className="section-title__title">
                Success<span> by</span> The<span> Numbers</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft animated" data-wow-delay="100ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="fas fa-user"></span>
                  </div>
                  <div className="counter-one__content">
                    <div className="counter-one__count-box">
                      <h3 className="odometer" data-count="1000">00</h3>
                      <span>+</span>
                    </div>
                    <p className="counter-one__text">Satisfied Customers</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft animated" data-wow-delay="200ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="fas fa-file"></span>
                  </div>
                  <div className="counter-one__content">
                    <div className="counter-one__count-box">
                      <h3 className="odometer" data-count="1200">00</h3>
                      <span>+</span>
                    </div>
                    <p className="counter-one__text">Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight animated" data-wow-delay="300ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="fas fa-handshake"></span>
                  </div>
                  <div className="counter-one__content">
                    <div className="counter-one__count-box">
                      <h3 className="odometer" data-count="40">00</h3>
                      <span>+</span>
                    </div>
                    <p className="counter-one__text">Partnerships</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight animated" data-wow-delay="400ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="fas fa-award"></span>
                  </div>
                  <div className="counter-one__content">
                    <div className="counter-one__count-box">
                      <h3 className="odometer" data-count="20">00</h3>
                      <span>+</span>
                    </div>
                    <p className="counter-one__text">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-two">
        <div className="team-two__bg-shape float-bob-y" style={{backgroundImage: 'url(/assets/images/shapes/team-two-bg-shape.png)'}}></div>
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
                          <img loading="lazy" src="/assets/images/suresh.png" alt="suresh" title="suresh" />
                          <div className="team-two__title-box">
                            <h3><a>Suresh Babu Nissankara</a></h3>
                            <p>Founder & Managing Director</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="team-two__single">
                      <div className="team-two__img-box">
                        <div className="team-two__img">
                          <img loading="lazy" src="/assets/images/mohammad.png" alt="mohammad" title="mohammad" />
                          <div className="team-two__title-box">
                            <h3><a>Mohammad Biyabani</a></h3>
                            <p>Head of Sales</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="team-two__single">
                      <div className="team-two__img-box">
                        <div className="team-two__img">
                          <img loading="lazy" src="/assets/images/Vidya.JPG" alt="vidya" title="vidya" />
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
        </div>
      </section>

      {/* Portfolio Two / Services Carousel Section */}
      <section className="portfolio-two">
        <div className="portfolio-two__shape-1 float-bob-y">
          <img loading="lazy" src="/assets/images/shapes/portfolio-two-shape-1.png" alt="trace" title="trace" />
        </div>
        <div className="portfolio-two__shape-2"></div>
        <div className="portfolio-two__shape-3"></div>
        <div className="portfolio-two__shape-4"></div>
        <div className="container">
          <div className="section-title text-center sec- animation-style1">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-1"></div>
              <span className="section-title__tagline">Services</span>
              <div className="section-title__tagline-shape-2"></div>
            </div>
            <h2 className="section-title__title">Services Built for <span>Security & Scale</span></h2>
          </div>
          <div className="portfolio-two__carousel-container" data-aos="zoom-out">
            <div className="portfolio-two__carousel owl-carousel owl-theme">
              <div className="item">
                <div className="portfolio-two__single-box">
                  <ul className="portfolio-two__box list-unstyled">
                    <li>
                      <div className="portfolio-two__box-content">
                        <div className="single-portfolio-two__bg" style={{backgroundImage: 'url(/assets/images/solutions%20images/new%20services/network%20pen%20testing.jpg)'}}></div>
                        <div className="portfolio-two__title">
                          <h3><a href="/network-penetration-testing" title="Network Pen Testing">Network Pen Testing</a></h3>
                        </div>
                        <div className="portfolio-two__content-box">
                          <div className="portfolio-two__icon">
                            <a href="/network-penetration-testing" title="Network Pen Testing"><span className="icon-right-arrow-1"></span></a>
                          </div>
                          <div className="portfolio-two__title-box">
                            <h3 className="portfolio-two__title-2"><a href="/network-penetration-testing" title="Network Pen Testing">Network Pen Testing</a></h3>
                            <p className="portfolio-two__text">Identify vulnerabilities through expert penetration testing.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="active">
                      <div className="portfolio-two__box-content">
                        <div className="single-portfolio-two__bg" style={{backgroundImage: 'url(/assets/images/solutions%20images/new%20services/fms.jpg)'}}></div>
                        <div className="portfolio-two__title">
                          <h3><a href="/fms" title="Facility Management Services">Facility Management Services</a></h3>
                        </div>
                        <div className="portfolio-two__content-box">
                          <div className="portfolio-two__icon">
                            <a href="/fms" title="Facility Management Services"><span className="icon-right-arrow-1"></span></a>
                          </div>
                          <div className="portfolio-two__title-box">
                            <h3 className="portfolio-two__title-2"><a href="/fms" title="Facility Management Services">Facility Management Services</a></h3>
                            <p className="portfolio-two__text">Facilities Management Services for efficient IT operations.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="portfolio-two__box-content">
                        <div className="single-portfolio-two__bg" style={{backgroundImage: 'url(/assets/images/solutions%20images/new%20services/noc.png)'}}></div>
                        <div className="portfolio-two__title">
                          <h3><a href="/noc" title="Network Operations Center">Network Operations Center</a></h3>
                        </div>
                        <div className="portfolio-two__content-box">
                          <div className="portfolio-two__icon">
                            <a href="/noc" title="Network Operations Center"><span className="icon-right-arrow-1"></span></a>
                          </div>
                          <div className="portfolio-two__title-box">
                            <h3 className="portfolio-two__title-2"><a href="/noc" title="Network Operations Center">Network Operations Center</a></h3>
                            <p className="portfolio-two__text">24/7 Network Operations Center services.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="portfolio-two__box-content">
                        <div className="single-portfolio-two__bg" style={{backgroundImage: 'url(/assets/images/solutions%20images/new%20services/iso.jpeg)'}}></div>
                        <div className="portfolio-two__title">
                          <h3><a href="/iso" title="ISO 27001">ISO 27001</a></h3>
                        </div>
                        <div className="portfolio-two__content-box">
                          <div className="portfolio-two__icon">
                            <a href="/iso" title="ISO 27001"><span className="icon-right-arrow-1"></span></a>
                          </div>
                          <div className="portfolio-two__title-box">
                            <h3 className="portfolio-two__title-2"><a href="/iso" title="ISO 27001">ISO 27001</a></h3>
                            <p className="portfolio-two__text">Implementation and certification support for ISO 27001.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="portfolio-two__single-box">
                  <ul className="portfolio-two__box list-unstyled">
                    <li>
                      <div className="portfolio-two__box-content">
                        <div className="single-portfolio-two__bg" style={{backgroundImage: 'url(/assets/images/solutions%20images/new%20services/software%20licensing.avif)'}}></div>
                        <div className="portfolio-two__title">
                          <h3><a href="/software-licensing-productivity-solutions" title="Software Licensing">Software Licensing</a></h3>
                        </div>
                        <div className="portfolio-two__content-box">
                          <div className="portfolio-two__icon">
                            <a href="/software-licensing-productivity-solutions" title="Software Licensing"><span className="icon-right-arrow-1"></span></a>
                          </div>
                          <div className="portfolio-two__title-box">
                            <h3 className="portfolio-two__title-2"><a href="/software-licensing-productivity-solutions" title="Software Licensing">Software Licensing</a></h3>
                            <p className="portfolio-two__text">Streamlined licensing solutions for your software needs.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="active">
                      <div className="portfolio-two__box-content">
                        <div className="single-portfolio-two__bg" style={{backgroundImage: 'url(/assets/images/solutions%20images/new%20services/webapp%20security.jpg)'}}></div>
                        <div className="portfolio-two__title">
                          <h3><a href="/web-application-security-testing" title="Web App Penetration Testing">Web App Penetration Testing</a></h3>
                        </div>
                        <div className="portfolio-two__content-box">
                          <div className="portfolio-two__icon">
                            <a href="/web-application-security-testing" title="Web App Penetration Testing"><span className="icon-right-arrow-1"></span></a>
                          </div>
                          <div className="portfolio-two__title-box">
                            <h3 className="portfolio-two__title-2"><a href="/web-application-security-testing" title="Web App Penetration Testing">Web App Penetration Testing</a></h3>
                            <p className="portfolio-two__text">Ensure web applications are secure from threats.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="portfolio-two__box-content">
                        <div className="single-portfolio-two__bg" style={{backgroundImage: 'url(/assets/images/solutions%20images/new%20services/security%20posture.jpg)'}}></div>
                        <div className="portfolio-two__title">
                          <h3><a href="/professional-services#securityposture" title="Security Posture Review">Security Posture Review</a></h3>
                        </div>
                        <div className="portfolio-two__content-box">
                          <div className="portfolio-two__icon">
                            <a href="/professional-services#securityposture" title="Security Posture Review"><span className="icon-right-arrow-1"></span></a>
                          </div>
                          <div className="portfolio-two__title-box">
                            <h3 className="portfolio-two__title-2"><a href="/professional-services#securityposture" title="Security Posture Review">Security Posture Review</a></h3>
                            <p className="portfolio-two__text">Comprehensive assessment of your security readiness.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="portfolio-two__box-content">
                        <div className="single-portfolio-two__bg" style={{backgroundImage: 'url(/assets/images/solutions%20images/new%20services/configuration%20review.avif)'}}></div>
                        <div className="portfolio-two__title">
                          <h3><a href="/professional-services#configurationreview" title="Configuration Advisory Review">Configuration Advisory Review</a></h3>
                        </div>
                        <div className="portfolio-two__content-box">
                          <div className="portfolio-two__icon">
                            <a href="/professional-services#configurationreview" title="Configuration Advisory Review"><span className="icon-right-arrow-1"></span></a>
                          </div>
                          <div className="portfolio-two__title-box">
                            <h3 className="portfolio-two__title-2"><a href="/professional-services#configurationreview" title="Configuration Advisory Review">Configuration Advisory Review</a></h3>
                            <p className="portfolio-two__text">Optimize configurations for maximum security and performance.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Two Section */}
      <section className="services-two">
        <div className="services-two__shape-1"></div>
        <div className="container">
          <div className="services-two__top">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline" title="Our Services">Our Services</span>
                <div className="section-title__tagline-shape-2"></div>
              </div>
              <h2 className="section-title__title" title="Cybersecurity, Cloud and Networking Solutions">
                Securing<span> Your Business </span> With Our Cybersecurity, Cloud<span> and Networking Solutions</span>
              </h2>
            </div>
          </div>

          <div className="services-two__bottom">
            <div className="svc-rows-wrap">

              {/* ── Cybersecurity ── */}
              <div className="svc-row">
                <div className="svc-row__left">
                  <span className="svc-row__num">01</span>
                  <h3 className="svc-row__title">
                    <a href="/network-security" title="Cybersecurity">Cybersecurity</a>
                  </h3>
                  <div className="svc-row__img">
                    <img loading="lazy" src="/assets/images/cybersecurity.jpg" alt="Cybersecurity" title="Cybersecurity" />
                  </div>
                </div>
                <div className="svc-row__right">
                  <ul className="svc-row__list">
                    <li><span className="icon-tick-inside-circle"></span>Vulnerability Assessment &amp; Penetration Testing (VAPT) Services</li>
                    <li><span className="icon-tick-inside-circle"></span>Endpoint Security &amp; Device Management Solutions</li>
                    <li><span className="icon-tick-inside-circle"></span>Network Security &amp; Next-Generation Firewall Solutions</li>
                    <li><span className="icon-tick-inside-circle"></span>Cyber Incident Response &amp; Disaster Recovery Services</li>
                    <li><span className="icon-tick-inside-circle"></span>Data Security, Encryption &amp; Compliance Management</li>
                    <li><span className="icon-tick-inside-circle"></span>24x7 Security Monitoring &amp; Threat Detection Integration</li>
                  </ul>
                </div>
              </div>

              <div className="svc-row__separator"></div>

              {/* ── Integration ── */}
              <div className="svc-row">
                <div className="svc-row__left">
                  <span className="svc-row__num">02</span>
                  <h3 className="svc-row__title">
                    <a href="/integration" title="Integration">Integration</a>
                  </h3>
                  <div className="svc-row__img">
                    <img loading="lazy" src="/assets/images/integration.jpg" alt="Integration" title="Integration" />
                  </div>
                </div>
                <div className="svc-row__right">
                  <ul className="svc-row__list">
                    <li><span className="icon-tick-inside-circle"></span>Enterprise System &amp; Application Integration</li>
                    <li><span className="icon-tick-inside-circle"></span>API Development, Integration &amp; Management</li>
                    <li><span className="icon-tick-inside-circle"></span>ERP, CRM &amp; Business Application Integration</li>
                    <li><span className="icon-tick-inside-circle"></span>Data Migration, Synchronization &amp; Modernization</li>
                    <li><span className="icon-tick-inside-circle"></span>Business Process &amp; Workflow Automation Solutions</li>
                    <li><span className="icon-tick-inside-circle"></span>Custom Middleware Development &amp; AI Integration Services</li>
                  </ul>
                </div>
              </div>

              <div className="svc-row__separator"></div>

              {/* ── Cloud ── */}
              <div className="svc-row">
                <div className="svc-row__left">
                  <span className="svc-row__num">03</span>
                  <h3 className="svc-row__title">
                    <a href="/cloud" title="Cloud">Cloud</a>
                  </h3>
                  <div className="svc-row__img">
                    <img loading="lazy" src="/assets/images/cloud.jpg" alt="Cloud" title="Cloud" />
                  </div>
                </div>
                <div className="svc-row__right">
                  <ul className="svc-row__list">
                    <li><span className="icon-tick-inside-circle"></span>Cloud Migration, Deployment &amp; Modernization Services</li>
                    <li><span className="icon-tick-inside-circle"></span>Infrastructure as a Service (IaaS) &amp; Platform as a Service (PaaS) Solutions</li>
                    <li><span className="icon-tick-inside-circle"></span>Managed Cloud Hosting &amp; Virtual Private Servers (VPS)</li>
                    <li><span className="icon-tick-inside-circle"></span>Cloud Storage, Data Management &amp; File Sharing Solutions</li>
                    <li><span className="icon-tick-inside-circle"></span>Cloud Security, Governance &amp; Compliance Services</li>
                    <li><span className="icon-tick-inside-circle"></span>Cloud Backup &amp; Disaster Recovery (DR) Solutions</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Two Section */}
      <section className="contact-two">
        <ul className="contact-two__sliding-text-list list-unstyled marquee_mode-2">
          <li>
            <h2 data-hover="Branding" className="contact-two__sliding-text-title">GET IN TOUCH *</h2>
          </li>
          <li>
            <h2 data-hover="Branding" className="contact-two__sliding-text-title">GET IN TOUCH *</h2>
          </li>
          <li>
            <h2 data-hover="Branding" className="contact-two__sliding-text-title">GET IN TOUCH *</h2>
          </li>
        </ul>
        <div className="contact-two__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/contact-two-bg.jpg)'}}></div>
        <div className="contact-two__shape-1 float-bob-y">
          <img loading="lazy" src="/assets/images/shapes/contact-two-shape-1.png" alt="trace" title="trace" />
        </div>
        <div className="contact-two__shape-2"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="contact-two__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1"></div>
                    <span className="section-title__tagline">Get In Touch</span>
                    <div className="section-title__tagline-shape-2"></div>
                  </div>
                  <h2 className="section-title__title">Tell us your most <span>pressing IT Challenge </span><br /></h2>
                </div>
                <ul className="contact-two__contact-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-mail"></span>
                    </div>
                    <div className="content">
                      <span>Email Us</span>
                      <p><a href="mailto:connect@tracenetwork.in" title="mail to">connect@tracenetwork.in</a></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-phone-call"></span>
                    </div>
                    <div className="content">
                      <span>Contact Us</span>
                      <p><a href="tel:+919000314411">90003 14411</a></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="content">
                      <span>Our Address</span>
                      <p>Flat No: 101 & 102, Plot No: 809, Venkoti Building,<br /> Near 100 Ft Road, Ayyappa Society, Madhapur,<br /> Hyderabad, Telangana – 500081</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="contact-two__right" data-wow-delay="100ms" data-wow-duration="2500ms">
                <form id="contactForm" className="contact-form-validated contact-one__form" onSubmit={handleContactSubmit}>
                  <input type="hidden" name="access_key" value="9589aa5c-bd8c-4789-9109-e7b12282602f" />

                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <h4 className="contact-one__input-title">Full Name</h4>
                      <div className="contact-one__input-box">
                        <div className="contact-one__input-icon">
                          <span className="icon-user-1"></span>
                        </div>
                        <input type="text" name="name" placeholder="Enter your name" required />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <h4 className="contact-one__input-title">Email Address</h4>
                      <div className="contact-one__input-box">
                        <div className="contact-one__input-icon">
                          <span className="icon-email"></span>
                        </div>
                        <input type="email" name="email" placeholder="example@gmail.com" required />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <h4 className="contact-one__input-title">Phone Number</h4>
                      <div className="contact-one__input-box">
                        <div className="contact-one__input-icon">
                          <span className="icon-phone-call"></span>
                        </div>
                        <input type="text" name="Phone" placeholder="+91 **********" required />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <h4 className="contact-one__input-title">Services</h4>
                      <div className="contact-one__input-box">
                        <select name="subject" required>
                          <option value="Network Solutions">Network Solutions</option>
                          <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                          <option value="Cybersecurity/VAPT">Cybersecurity/VAPT</option>
                          <option value="Data Center Services">Data Center Services</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <h4 className="contact-one__input-title">Inquiry about</h4>
                    <div className="contact-one__input-box text-message-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-edit"></span>
                      </div>
                      <textarea name="message" placeholder="Write your message" required></textarea>
                    </div>
                    <div className="contact-one__btn-box">
                      <button type="submit" className="thm-btn"><span>Submit Now</span><i className="icon-right-arrow"></i></button>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Two Section */}
      <section className="testimonial-two">
        <div className="testimonial-two__shape-1"></div>
        <div className="testimonial-two__shape-2"></div>
        <div className="newsletter-two__shape-1">
          <img loading="lazy" src="/assets/images/shapes/newsletter-two-shape-1.png" alt="trace" title="trace" />
        </div>
        <div className="container">
          <div className="section-title text-center sec- animation-style1">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-1"></div>
              <span className="section-title__tagline">Testimonials</span>
              <div className="section-title__tagline-shape-2"></div>
            </div>
            <h2 className="section-title__title">Client <span>Success Stories</span></h2>
          </div>
          <div className="testimonial-two__carousel owl-theme owl-carousel">

            {/* Testimonial 1 */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__single-inner">
                  <div className="testimonial-two__star">
                    <span className="icon-pointed-star"></span><span className="icon-pointed-star"></span><span className="icon-pointed-star"></span><span className="icon-pointed-star"></span><span className="icon-pointed-star"></span>
                  </div>
                  <p className="testimonial-two__text">Trace's VAPT team uncovered critical and high-risk issues in our network then walked our engineers through remediation. Within 2 months we achieved zero–critical status and passed our 27001 audit.</p>
                </div>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-img">
                    <img loading="lazy" src="/assets/images/man.png" alt="Chandra" title="Chandra" />
                  </div>
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name"><a href="#">Chandra</a></h4>
                    <p className="testimonial-two__sub-title">IT Manager</p>
                  </div>
                </div>
                <div className="testimonial-two__quote">
                  <span className="icon-right-quote"></span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__single-inner">
                  <div className="testimonial-two__star">
                    <span className="icon-pointed-star"></span><span className="icon-pointed-star"></span><span className="icon-pointed-star"></span><span className="icon-pointed-star"></span><span className="icon-pointed-star"></span>
                  </div>
                  <p className="testimonial-two__text">Our vast campus struggled with dead zones until Trace replaced our legacy APs with Aruba Wi-Fi and Core Switches. Staff satisfaction scores jumped, and we now support 4× more devices with seamless connectivity.</p>
                </div>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-img">
                    <img loading="lazy" src="/assets/images/man.png" alt="Nithin" title="Nithin" />
                  </div>
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name"><a href="#">Nithin</a></h4>
                    <p className="testimonial-two__sub-title">IT Head</p>
                  </div>
                </div>
                <div className="testimonial-two__quote">
                  <span className="icon-right-quote"></span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__single-inner">
                  <div className="testimonial-two__star">
                    <span className="icon-pointed-star"></span><span className="icon-pointed-star"></span><span className="icon-pointed-star"></span><span className="icon-pointed-star"></span><span className="icon-pointed-star"></span>
                  </div>
                  <p className="testimonial-two__text">Trace deployed Sophos XGS firewalls across all our branches and centralized the policies in Sophos Central. False positives fell by 50%, threat response time dropped from hours to minutes, and we finally have a single-pane view of our entire estate.</p>
                </div>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-img">
                    <img loading="lazy" src="/assets/images/man.png" alt="Sreenivas" title="Sreenivas" />
                  </div>
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name"><a href="#">Sreenivas</a></h4>
                    <p className="testimonial-two__sub-title">Director of IT</p>
                  </div>
                </div>
                <div className="testimonial-two__quote">
                  <span className="icon-right-quote"></span>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__single-inner">
                  <div className="testimonial-two__star">
                    <span className="icon-pointed-star"></span><span className="icon-pointed-star"></span><span className="icon-pointed-star"></span><span className="icon-pointed-star"></span><span className="icon-pointed-star"></span>
                  </div>
                  <p className="testimonial-two__text">After Trace's fullstack cybersecurity upgrade, our risk rating went from High to Low in just three months and their team answers tickets within an hour.</p>
                </div>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-img">
                    <img loading="lazy" src="/assets/images/man.png" alt="Balaji" title="Balaji" />
                  </div>
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name"><a href="#">Balaji</a></h4>
                    <p className="testimonial-two__sub-title">IT Admin</p>
                  </div>
                </div>
                <div className="testimonial-two__quote">
                  <span className="icon-right-quote"></span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="newsletter-two__shape-2 float-bob-x">
          <img loading="lazy" src="/assets/images/shapes/newsletter-two-shape-2.png" alt="trace" title="trace" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-one">
        <div className="faq-one__shape-1"></div>
        <div className="faq-one__shape-2"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-one__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1"></div>
                    <span className="section-title__tagline">Have Questions?</span>
                    <div className="section-title__tagline-shape-2"></div>
                  </div>
                  <h2 className="section-title__title">Answers That Empower <br /><span>Your IT Decisions</span></h2>
                </div>
                <div className="faq-one__img-box">
                  <div className="faq-one__img">
                    <img loading="lazy" src="/assets/images/faq-frequently-asked-questions-neon-sign-on-brick-vector-30598348.jpg" alt="faq" title="faq" />
                  </div>

                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-one__right">
                <div className="accrodion-grp" data-grp-name="faq-one-accrodion">

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>What services does Trace Network offer?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>We provide a complete suite of IT services, including Vulnerability Assessment & Penetration Testing (VAPT), data centre solutions, cloud services, IT infrastructure security, enterprise networking, and Managed Detection & Response (MDR), all designed for scalable and secure enterprise operations.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>How secure are your IT and cloud solutions?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Our cybersecurity and cloud solutions are built on multi-layered defence strategies, including encryption, compliance frameworks, security monitoring, and infrastructure protection. We ensure robust IT and cloud security tailored to your organisation's needs.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Do you provide support after implementation?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Yes. We deliver end-to-end post-implementation support, covering system maintenance, continuous monitoring, incident response, upgrades, and performance optimisation, guaranteeing long-term security and efficiency.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Can you tailor solutions to our business needs?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Absolutely. We design customised IT solutions whether for cloud, infrastructure, or enterprise networking aligned with your business objectives, compliance standards, and growth scalability.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>How do we initiate a project with Trace?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Getting started is simple. Contact us via phone, email, or our website. Our experts will perform a tailored IT assessment, create a project roadmap, and deliver a clear deployment and support plan to kickstart your journey.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
