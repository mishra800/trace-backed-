import { Link } from 'react-router-dom';
import './HPEPartner.css';

export default function HPEPartner() {
  return (
    <div className="hpe-page">
      {/* HPE Hero */}
      <section className="hpe-hero">
        <div className="hpe-hero-bg"></div>
        <div className="container">
          <div className="hpe-hero-content">
            <div className="hpe-badge">
              <span className="hpe-badge-icon"><i className="fas fa-server"></i></span>
              Trusted HPE Server & Infrastructure Partner
            </div>
            <h1 className="hpe-hero-title">
              Top HPE Server &amp;
              <span className="hpe-gradient-text"> Infrastructure</span>
              <br />Solution Provider
            </h1>
            <p className="hpe-hero-desc">
              Enterprise-grade performance, reliability, and scalability for modern IT infrastructure - delivered by Trace Network &amp; Solutions.
            </p>
            <div className="hpe-hero-stats">
              <div className="hpe-stat-item">
                <span className="hpe-stat-number">6+</span>
                <span className="hpe-stat-label">Industry Sectors Served</span>
              </div>
              <div className="hpe-stat-item">
                <span className="hpe-stat-number">HPE</span>
                <span className="hpe-stat-label">Certified Partner</span>
              </div>
              <div className="hpe-stat-item">
                <span className="hpe-stat-number">100%</span>
                <span className="hpe-stat-label">Deployment Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose HPE */}
      <section className="hpe-why-section">
        <div className="container">
          <div className="hpe-two-col">
            <div className="hpe-why-card">
              <div className="partner-icon-circle"><i className="fas fa-globe"></i></div>
              <h2>Why Choose HPE for Servers?</h2>
              <p>
                HPE servers are globally recognized for delivering enterprise-grade performance, reliability, and scalability for modern IT infrastructure. Built to support mission-critical workloads, hybrid cloud environments, and data-driven applications, HPE servers combine powerful compute capabilities with advanced security, intelligent management, and energy efficiency.
              </p>
              <p>
                With innovations such as HPE iLO, flexible consumption models, and industry-leading support, organizations benefit from high availability, reduced downtime, optimized performance, and lower total cost of ownership. Choosing HPE servers ensures a future-ready infrastructure that can scale seamlessly as business demands evolve.
              </p>
              <ul className="hpe-benefit-list">
                <li><span className="hpe-check">✓</span> Mission-critical workload support</li>
                <li><span className="hpe-check">✓</span> Hybrid cloud ready architecture</li>
                <li><span className="hpe-check">✓</span> HPE iLO intelligent management</li>
                <li><span className="hpe-check">✓</span> Lower total cost of ownership</li>
                <li><span className="hpe-check">✓</span> Future-ready scalable infrastructure</li>
              </ul>
            </div>
            <div className="hpe-why-card hpe-why-trace">
              <div className="partner-icon-circle"><i className="fas fa-building"></i></div>
              <h2>Why Choose Trace Network &amp; Solutions for HPE?</h2>
              <p>
                Trace Network &amp; Solutions is a trusted HPE partner delivering end-to-end expertise across HPE server solutions. With a highly skilled technical team and certified professionals, Trace provides consultative design, seamless deployment, proactive support, and lifecycle management tailored to each client's business needs.
              </p>
              <p>
                By aligning HPE server capabilities with real-world operational requirements, Trace helps organizations achieve maximum performance, improved uptime, and optimized infrastructure utilization. Choosing Trace Network &amp; Solutions for HPE means partnering with a team that delivers not just technology, but measurable business outcomes and long-term IT stability.
              </p>
              <ul className="hpe-benefit-list">
                <li><span className="hpe-check">✓</span> Consultative design &amp; deployment</li>
                <li><span className="hpe-check">✓</span> Proactive support &amp; lifecycle management</li>
                <li><span className="hpe-check">✓</span> Certified HPE professionals</li>
                <li><span className="hpe-check">✓</span> Measurable business outcomes</li>
                <li><span className="hpe-check">✓</span> Long-term IT stability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section with Images */}
      <section className="hpe-certifications">
        <div className="container">
          <div className="hpe-section-header">
            <h2><i className="fas fa-graduation-cap header-icon-glow" style={{marginRight:'10px', color:'#eb5a0f'}}></i>Certifications of Our Technical Team</h2>
            <p>HPE-certified professionals delivering proven expertise across server and infrastructure solutions</p>
          </div>
          <div className="hpe-cert-images">
            <div className="hpe-cert-img-card">
              <img loading="lazy" src="/assets/images/hpe/image1.jpeg" alt="HPE Certification Badge 1" />
            </div>
            <div className="hpe-cert-img-card">
              <img loading="lazy" src="/assets/images/hpe/image2.jpeg" alt="HPE Certification Badge 2" />
            </div>
            <div className="hpe-cert-img-card">
              <img loading="lazy" src="/assets/images/hpe/image3.png" alt="HPE Certification Badge 3" />
            </div>
            <div className="hpe-cert-img-card">
              <img loading="lazy" src="/assets/images/hpe/image4.jpeg" alt="HPE Certification Badge 4" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="hpe-use-cases">
        <div className="container">
          <div className="hpe-section-header">
            <h2><i className="fas fa-server header-icon-glow" style={{marginRight:'10px', color:'#eb5a0f'}}></i>HPE Server Use Cases</h2>
            <p>Successful Deployments by Trace Network across diverse industry sectors</p>
          </div>

          <div className="hpe-cases-grid">
            {/* 1. Education */}
            <div className="hpe-case-card">
              <div className="hpe-case-header">
                <span className="partner-icon-circle sm"><i className="fas fa-graduation-cap"></i></span>
                <div>
                  <h3>1. Education Sector</h3>
                  <span className="hpe-case-tag">Campus IT Infrastructure &amp; Virtualization</span>
                </div>
              </div>
              <div className="hpe-case-body">
                <div className="hpe-case-problem">
                  <h4><i className="fas fa-exclamation-triangle"></i> Problem:</h4>
                  <p>Institutions required reliable servers to run LMS, student databases, and virtual labs.</p>
                      <Link to="/case-studies#hpe-cases" className="partner-read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
</div>
            </div>

            {/* 2. Hospitality */}
            <div className="hpe-case-card">
              <div className="hpe-case-header">
                <span className="partner-icon-circle sm"><i className="fas fa-hotel"></i></span>
                <div>
                  <h3>2. Hospitality Sector</h3>
                  <span className="hpe-case-tag">Guest Services &amp; IT Operations</span>
                </div>
              </div>
              <div className="hpe-case-body">
                <div className="hpe-case-problem">
                  <h4><i className="fas fa-exclamation-triangle"></i> Problem:</h4>
                  <p>Hotels needed reliable backend systems for booking, billing, and guest services.</p>
                      <Link to="/case-studies#hpe-cases" className="partner-read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
</div>
            </div>

            {/* 3. Tourism */}
            <div className="hpe-case-card">
              <div className="hpe-case-header">
                <span className="partner-icon-circle sm"><i className="fas fa-plane"></i></span>
                <div>
                  <h3>3. Tourism Sector</h3>
                  <span className="hpe-case-tag">Data &amp; Application Hosting</span>
                </div>
              </div>
              <div className="hpe-case-body">
                <div className="hpe-case-problem">
                  <h4><i className="fas fa-exclamation-triangle"></i> Problem:</h4>
                  <p>Tourism companies required secure and scalable servers for booking systems and customer data.</p>
                      <Link to="/case-studies#hpe-cases" className="partner-read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
</div>
            </div>

            {/* 4. Textile */}
            <div className="hpe-case-card">
              <div className="hpe-case-header">
                <span className="partner-icon-circle sm"><i className="fas fa-industry"></i></span>
                <div>
                  <h3>4. Textile &amp; Apparel Sector</h3>
                  <span className="hpe-case-tag">ERP &amp; Production Systems</span>
                </div>
              </div>
              <div className="hpe-case-body">
                <div className="hpe-case-problem">
                  <h4><i className="fas fa-exclamation-triangle"></i> Problem:</h4>
                  <p>Manufacturers needed high-performance servers to run ERP, inventory, and production applications.</p>
                      <Link to="/case-studies#hpe-cases" className="partner-read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
</div>
            </div>

            {/* 5. Chemicals & Pharma */}
            <div className="hpe-case-card">
              <div className="hpe-case-header">
                <span className="partner-icon-circle sm"><i className="fas fa-flask"></i></span>
                <div>
                  <h3>5. Chemicals &amp; Pharmaceuticals</h3>
                  <span className="hpe-case-tag">Secure &amp; Compliant Infrastructure</span>
                </div>
              </div>
              <div className="hpe-case-body">
                <div className="hpe-case-problem">
                  <h4><i className="fas fa-exclamation-triangle"></i> Problem:</h4>
                  <p>Organizations required secure, compliant, and high-performance servers for sensitive data and research systems.</p>
                      <Link to="/case-studies#hpe-cases" className="partner-read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
</div>
            </div>

            {/* 6. Energy & Utilities */}
            <div className="hpe-case-card">
              <div className="hpe-case-header">
                <span className="partner-icon-circle sm"><i className="fas fa-bolt"></i></span>
                <div>
                  <h3>6. Energy &amp; Utilities</h3>
                  <span className="hpe-case-tag">High Availability &amp; Monitoring Systems</span>
                </div>
              </div>
              <div className="hpe-case-body">
                <div className="hpe-case-problem">
                  <h4><i className="fas fa-exclamation-triangle"></i> Problem:</h4>
                  <p>Energy companies needed robust servers for monitoring systems and operational data.</p>
                      <Link to="/case-studies#hpe-cases" className="partner-read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer - Highlighted */}
      <section className="hpe-special-offer">
        <div className="container">
          <div className="hpe-offer-banner">
            <div className="hpe-offer-glow"></div>
            <div className="hpe-offer-content">
              <div className="hpe-offer-badge">
                <i className="fas fa-gift" style={{marginRight:'8px'}}></i> SPECIAL OFFER
              </div>
              <h2 className="hpe-offer-title">FREE POC Available</h2>
              <p className="hpe-offer-subtitle">Exclusive Offers on HPE Server &amp; Infrastructure Solution</p>
              <p className="hpe-offer-desc">
                Experience the power of HPE servers firsthand - zero risk, zero commitment. Our team will set up a complete proof of concept tailored to your environment so you can see the results before you invest.
              </p>
              <div className="hpe-offer-highlights">
                <div className="hpe-offer-point">
                  <span className="hpe-check">✓</span> No upfront cost for POC
                </div>
                <div className="hpe-offer-point">
                  <span className="hpe-check">✓</span> Tailored to your infrastructure
                </div>
                <div className="hpe-offer-point">
                  <span className="hpe-check">✓</span> Exclusive pricing on HPE solutions
                </div>
                <div className="hpe-offer-point">
                  <span className="hpe-check">✓</span> Expert guidance throughout
                </div>
              </div>
              <Link to="/contact-us" className="hpe-contact-btn">
                Contact Trace Network →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}