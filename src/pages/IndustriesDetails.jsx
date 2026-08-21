import React, { useState } from "react";

import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

function IndustrySection({ id, image, imageAlt, imageRight, tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="imgtab-wrapper" id={id}>
      {!imageRight && (
        <div className="imgtab-leftbox">
          <img loading="lazy" alt={imageAlt} src={image} />
        </div>
      )}
      <div className="imgtab-rightbox">
        <div className="imgtab-tablist">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`imgtab-tabbtn${activeTab === i ? " active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={`imgtab-panel${activeTab === i ? " active" : ""}`}
          >
            <ul>
              {tab.items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      {imageRight && (
        <div className="imgtab-leftbox">
          <img loading="lazy" alt={imageAlt} src={image} />
        </div>
      )}
    </section>
  );
}

export default function IndustriesDetails() {
  const seoData = getSEOData('industriesDetails');

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
            <h2>Industries</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/" title="best cybersecurity companies in hyd"><i className="fas fa-home"></i>Home</a></li>
                <li><span className="icon-right-arrow-1"></span></li>
                <li>Industries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <div className="section-title text-center pt-4 mt-4">
        <div className="section-title__tagline-box">
          <div className="section-title__tagline-shape-1"></div>
          <span className="section-title__tagline">Education</span>
          <div className="section-title__tagline-shape-2"></div>
        </div>
        <h2 className="section-title__title">
          Connected campuses. Protected <span>data. Engaged classrooms.</span>
        </h2>
      </div>
      <IndustrySection
        id="education"
        image="/assets/images/education.jpg"
        imageAlt="Education"
        imageRight={false}
        tabs={[
          {
            label: "Your Challenges",
            items: [
              "Congested Wi-Fi during peak class changes",
              "Rising ransomware attacks on research data",
              "Disparate AV setups across lecture halls",
            ],
          },
          {
            label: "Our Solution Stack",
            items: [
              "High-density Wi-Fi with identity-aware captive portals (20,000+ concurrent users proven)",
              "Next-Generation Firewalls and NOC/SOC monitoring",
              "Unified classroom &amp; board-room solutions – interactive panels, lecture-capture, seamless VC",
            ],
          },
          {
            label: "Results Delivered",
            items: [
              "99% campus-wide uptime over multiple academic years",
              "60% reduction in help-desk tickets",
              "Hybrid-learning adoption up 2× within six months",
            ],
          },
        ]}
      />

      {/* BFSI */}
      <div className="section-title text-center">
        <div className="section-title__tagline-box">
          <div className="section-title__tagline-shape-1"></div>
          <span className="section-title__tagline">Banking, Financial Services &amp; Insurance (BFSI)</span>
          <div className="section-title__tagline-shape-2"></div>
        </div>
        <h2 className="section-title__title">
          Milliseconds saved, <span>compliance assured.</span>
        </h2>
      </div>
      <IndustrySection
        id="bfsi"
        image="/assets/images/bfsi.webp"
        imageAlt="BFSI"
        imageRight={true}
        tabs={[
          {
            label: "Your Challenges",
            items: [
              "High sensitivity to downtime and latency",
              "Constant regulatory and compliance requirements (RBI, PCI-DSS, ISO27001)",
              "Security risks across widespread branches and digital channels",
            ],
          },
          {
            label: "Our Solution Stack",
            items: [
              "High-availability network design with redundancy and real-time failover",
              "Implementation of compliant cybersecurity architectures and data protection tools",
              "Remote device management and endpoint security across branches",
            ],
          },
          {
            label: "Results Delivered",
            items: [
              "Uninterrupted banking operations with least unplanned downtime",
              "35% faster audit readiness and documentation",
              "40% reduction in operating costs through network optimization",
            ],
          },
        ]}
      />

      {/* IT & ITES */}
      <div className="section-title text-center">
        <div className="section-title__tagline-box">
          <div className="section-title__tagline-shape-1"></div>
          <span className="section-title__tagline">IT &amp; ITES</span>
          <div className="section-title__tagline-shape-2"></div>
        </div>
        <h2 className="section-title__title">
          Global delivery needs <span>global-grade infrastructure.</span>
        </h2>
      </div>
      <IndustrySection
        id="it&ites"
        image="/assets/images/it.png"
        imageAlt="IT &amp; ITES"
        imageRight={false}
        tabs={[
          {
            label: "Your Challenges",
            items: [
              "Performance bottlenecks affecting distributed teams",
              "Delays in end-user device provisioning and onboarding",
              "Rising cloud infrastructure costs and fragmented IT assets",
            ],
          },
          {
            label: "Our Solution Stack",
            items: [
              "Enterprise network infrastructure with scalable bandwidth and optimized routing",
              "Zero-touch laptop deployments and end-user support systems",
              "Cost-efficient hybrid cloud architectures with monitoring and governance",
            ],
          },
          {
            label: "Results Delivered",
            items: [
              "2× faster project onboarding for delivery teams",
              "Improvement in cloud cost-efficiency",
              "Greater operational agility with reduced user support incidents",
            ],
          },
        ]}
      />

      {/* Government & PSU */}
      <div className="section-title text-center">
        <div className="section-title__tagline-box">
          <div className="section-title__tagline-shape-1"></div>
          <span className="section-title__tagline">Government &amp; PSU</span>
          <div className="section-title__tagline-shape-2"></div>
        </div>
        <h2 className="section-title__title">
          Mission-critical networks <span>for national programmes.</span>
        </h2>
      </div>
      <IndustrySection
        id="goverment&psu"
        image="/assets/images/government.webp"
        imageAlt="Government &amp; PSU"
        imageRight={true}
        tabs={[
          {
            label: "Your Challenges",
            items: [
              "Multi-state roll-outs with strict public-procurement timelines",
              "Defense-grade cybersecurity and data sovereignty",
              "Citizen-service portals experiencing unpredictable surges",
            ],
          },
          {
            label: "Our Solution Stack",
            items: [
              "GeM-compliant procurement",
              "Air-gapped SOC - encrypted traffic inspection, and tamper-proof logging",
              "Elastic cloud edge caches to absorb sudden traffic bursts",
            ],
          },
          {
            label: "Results Delivered",
            items: [
              "Capex saving through network consolidation",
              "Zero major security incidents reported since go-live",
              "Citizen-portal page-load times improved during peak usage",
            ],
          },
        ]}
      />

      {/* Hospitals & Healthcare */}
      <div className="section-title text-center">
        <div className="section-title__tagline-box">
          <div className="section-title__tagline-shape-1"></div>
          <span className="section-title__tagline">Hospitals &amp; Healthcare</span>
          <div className="section-title__tagline-shape-2"></div>
        </div>
        <h2 className="section-title__title">
          Secure patient data. <span>Uninterrupted care.</span>
        </h2>
      </div>
      <IndustrySection
        id="healthcare"
        image="/assets/images/pharma.jpg"
        imageAlt="Hospitals &amp; Healthcare"
        imageRight={true}
        tabs={[
          {
            label: "Your Challenges",
            items: [
              "Securing sensitive Electronic Health Records (EHR) against breaches",
              "Reliable connectivity for life-saving medical IoT devices",
              "Maintaining HIPAA compliance across disparate hospital networks",
            ],
          },
          {
            label: "Our Solution Stack",
            items: [
              "Zero-trust network architectures with strict segmentation for medical devices",
              "Advanced threat protection, ransomware defense, and real-time SOC monitoring",
              "High-availability and resilient wireless access for healthcare professionals",
            ],
          },
          {
            label: "Results Delivered",
            items: [
              "100% continuous uptime for critical care systems",
              "Eliminated vulnerabilities in legacy medical equipment networking",
              "Streamlined and passed all security and compliance audits seamlessly",
            ],
          },
        ]}
      />

      {/* Pharma & Life Sciences */}
      <div className="section-title text-center">
        <div className="section-title__tagline-box">
          <div className="section-title__tagline-shape-1"></div>
          <span className="section-title__tagline">Pharma &amp; Life Sciences</span>
          <div className="section-title__tagline-shape-2"></div>
        </div>
        <h2 className="section-title__title">
          Protect IP. Accelerate discovery. <span>Pass every audit.</span>
        </h2>
      </div>
      <IndustrySection
        id="pharma&lifesciences"
        image="/assets/images/pharma.jpg"
        imageAlt="Pharma &amp; Life Sciences"
        imageRight={false}
        tabs={[
          {
            label: "Your Challenges",
            items: [
              "Meeting strict compliance rules across labs and partners",
              "Moving large research data quickly and securely",
              "Keeping lab and factory equipment running without interruptions",
            ],
          },
          {
            label: "Our Solution Stack",
            items: [
              "Secure networks and storage systems that meet regulatory standards",
              "Fast, safe data transfer even for massive research files",
              "Reliable protection for lab and production equipment",
            ],
          },
          {
            label: "Results Delivered",
            items: [
              "Zero data-integrity findings across consecutive inspections",
              "Faster data-set transfer to cloud",
              "Reduced unplanned OT downtime",
            ],
          },
        ]}
      />
    </>
  );
}
