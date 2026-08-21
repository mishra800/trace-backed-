
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';
export default function ProfessionalServices() {
  const seoData = getSEOData('professionalServices');

  return (
    <>
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />

      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Professional Services</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/" title="best cybersecurity companies in hyd"><i className="fas fa-home"></i>Home</a></li>
                <li><span className="icon-right-arrow-1"></span></li>
                <li>Security Audits</li>
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
            <div className="col-xl-4 col-lg-5">
              <div className="services-details__left">
                <div className="services-details__services-list-box">
                  <h3 className="services-details__services-list-title">Services</h3>
                  <ul className="services-details__services-list list-unstyled">
                    <li><a href="/noc">Management Services<span className="icon-right-arrow-2"></span></a></li>
                    <li><a href="/security-audits">Security Audits<span className="icon-right-arrow-2"></span></a></li>
                    <li><a href="/iso">Compliance &amp; Risk<span className="icon-right-arrow-2"></span></a></li>
                    <li><a href="/software-licensing-productivity-solutions">Software Licensing &amp; Productivity Solutions<span className="icon-right-arrow-2"></span></a></li>
                    <li><a href="/network-penetration-testing">VAPT<span className="icon-right-arrow-2"></span></a></li>
                    <li className="active"><a href="/professional-services">Professional Services<span className="icon-right-arrow-2"></span></a></li>
                  </ul>
                </div>
                <div className="services-details__need-help">
                  <div className="services-details__need-help-img">
                    <img loading="lazy" alt="" src="/assets/images/services/cybersecurity.jpg" />
                    <div className="services-details__need-help-content">
                      <div className="services-details__need-help-bdr"></div>
                      <h3 className="services-details__need-help-title">Need Help?</h3>
                      <p className="services-details__need-help-number">
                        <a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer" title="WhatsApp support">90003 14411</a><br/>
                        <small style={{ fontSize: '0.85em', opacity: 0.9 }}>(WhatsApp Support)</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="services-details__right">
                <h3 className="services-details__title-1" id="disasterrecoveryplanning">Professional IT Services</h3>
                <div className="services-details__bdr"></div>

                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h3 className="services-details__title-2 mt-0 mb-0">Disaster Recovery Planning &amp; Business Continuity Solutions</h3>
                    <p className="services-details__text-2 mt-2 mb-4">Anticipate the outage. Orchestrate the comeback.</p>
                  </div>
                  <div className="col-md-6" style={{ marginTop: "1rem" }}><img loading="lazy" alt="Disaster Recovery" src="/assets/images/solutions images/new services/disaster reovery.avif" style={{ width: "100%", borderRadius: "10px" }}/></div>
                </div>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>When a server failure, data breach, or ransomware attack strikes, your business continuity depends on how fast you recover. We create a comprehensive Disaster Recovery (DR) plan - fully documented, tested, and aligned with your IT infrastructure - so every person knows what to do and every critical system knows where to failover.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3>Why it matters</h3>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>80% of organizations that face a week-long downtime go bankrupt within a year.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Modern ransomware threats now target cloud backups and data vaults first.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Only a tested disaster recovery strategy ensures survival.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h4 className="services-details__title-2">The Trace Approach</h4>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Business Impact Analysis (BIA) to map RPO/RTO against revenue streams.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Disaster Recovery Architecture Design using tiered data replication, versioned backups, and multi-region failover.</p></li>
                      </ul>
                    </div>
                    <div className="col-xl-6">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Quarterly DR drills under live-fire cyberattack simulation.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>24x7 NOC and SOC support during incident response events.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="services-details__bdr"></div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h3 className="services-details__title-2 mt-0 mb-0" id="vciso">vCISO (Virtual Chief Information Security Officer)</h3>
                    <p className="services-details__text-2 mt-2 mb-4">Cybersecurity Leadership on Demand - Without the Six-Figure Payroll.</p>
                  </div>
                  <div className="col-md-6" style={{ marginTop: "1rem" }}><img loading="lazy" alt="vCISO" src="/assets/images/solutions images/new services/visco.jpg" style={{ width: "100%", borderRadius: "10px" }}/></div>
                </div>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Our Virtual CISO service provides a CISSP-certified cybersecurity expert who leads your information security program, manages risk assessments, oversees incident response, and ensures regulatory compliance - all for a predictable monthly retainer.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h4 className="services-details__title-2">Core functions</h4>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Governance, Risk &amp; Compliance (GRC) alignment with ISO 27001, RBI, and SEBI frameworks.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Information security policy drafting, vendor risk management, and cybersecurity KPI dashboards.</p></li>
                      </ul>
                    </div>
                    <div className="col-xl-6">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Quarterly board briefings, security audits, and annual cybersecurity budgeting.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>24x7 incident response hotline, breach management, and cyber incident coaching for leadership teams.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="services-details__bdr"></div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h3 className="services-details__title-2 mt-0 mb-0" id="crisismanagement">Crisis Management Advisory</h3>
                    <p className="services-details__text-2 mt-2 mb-4">Turn chaos into a coordinated cyber incident response.</p>
                  </div>
                  <div className="col-md-6" style={{ marginTop: "1rem" }}><img loading="lazy" alt="Crisis Management" src="/assets/images/solutions images/new services/crisis.jpg" style={{ width: "100%", borderRadius: "10px" }}/></div>
                </div>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>When a data breach, system outage, or regulatory investigation strikes, every minute counts. We create and rehearse a complete cyber crisis management playbook, ensuring your executive team responds with clarity and confidence.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>It all begins with a holistic security posture assessment and gap analysis, extended into executive tabletop simulations and media-ready crisis communication statements.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h4 className="services-details__title-2">Highlights</h4>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>90-minute crisis tabletop drills for C-suite executives.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>On-call breach coordinators, digital forensics, and incident triage experts ready 24x7.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="services-details__bdr"></div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h3 className="services-details__title-2 mt-0 mb-0" id="securityposture">Security Posture Advisory</h3>
                    <p className="services-details__text-2 mt-2 mb-4">Know where you stand then level up your cybersecurity fast.</p>
                  </div>
                  <div className="col-md-6" style={{ marginTop: "1rem" }}><img loading="lazy" alt="Security Posture" src="/assets/images/solutions images/new services/security posture.jpg" style={{ width: "100%", borderRadius: "10px" }}/></div>
                </div>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Using industry-standard frameworks like NIST CSF and CIS 18, our consultants evaluate your security posture, benchmark IT controls, identify vulnerabilities, and prioritize gaps based on business risk.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h4 className="services-details__title-2">What you get</h4>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Baseline security assessment across people, process, and technology.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Heat-mapped risk matrix highlighting threat exposure, quick wins, and long-term remediation projects.</p></li>
                      </ul>
                    </div>
                    <div className="col-xl-6">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Detailed cybersecurity budget planning, timeline mapping, and ownership assignments for accountability.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="services-details__bdr"></div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h3 className="services-details__title-2 mt-0 mb-0" id="configurationreview">Configuration Review Advisory</h3>
                    <p className="services-details__text-2 mt-2 mb-4">One mis-typed rule can open the floodgates - let's close them.</p>
                  </div>
                  <div className="col-md-6" style={{ marginTop: "1rem" }}><img loading="lazy" alt="Configuration Review" src="/assets/images/solutions images/new services/configuration review.avif" style={{ width: "100%", borderRadius: "10px" }}/></div>
                </div>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>We perform an in-depth firewall configuration review, network security audit, and cloud configuration assessment to detect hidden vulnerabilities. Our experts inspect configurations line-by-line against vendor best practices, NIST, and CIS Benchmarks.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Configuration sprawl and undocumented changes create security blind spots. Our service introduces automated configuration drift detection, change tracking, and proof-of-fix validation.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h4 className="services-details__title-2">Service elements</h4>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Secure configuration export and offline analysis with zero live impact.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Risk-ranked misconfiguration report detailing exact CLI/GUI fixes.</p></li>
                      </ul>
                    </div>
                    <div className="col-xl-6">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Post-remediation diff report with advisory security validation and sign-off.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ── Digital Forensics ── */}
                <div className="services-details__bdr"></div>
                <div className="row align-items-center" id="digitalforensics" style={{ scrollMarginTop: '140px' }}>
                  <div className="col-md-6">
                    <h3 className="services-details__title-2 mt-0 mb-0">Digital Forensics</h3>
                    <p className="services-details__text-2 mt-2 mb-4">Uncover Hidden Threats, Reconstruct Attack Timelines, and Neutralize Sophisticated Cyber Vectors.</p>
                  </div>
                  <div className="col-md-6" style={{ marginTop: "1rem" }}>
                    <img loading="lazy"
                      alt="Digital Forensics"
                      src="/assets/images/digital-forensics/image1.png"
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <ul className="services-details__points-list list-unstyled">
                        <li>
                          <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                          <p>When a security incident strikes, traditional security tools often miss the footprints left behind by sophisticated threat actors. Modern attackers frequently leverage fileless malware, rootkits, and anti-forensic techniques to hide their tracks.</p>
                        </li>
                        <li>
                          <div className="icon"><span className="icon-tick-inside-circle"></span></div>
                          <p>Trace Network's Digital Forensics services provide a deep, surgical investigation into your systems — extracting concrete evidence from both non-volatile storage and volatile runtime memory to pinpoint exactly how, when, and where a breach occurred.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h4 className="services-details__title-2">What We Do</h4>
                <p className="services-details__text-2">We go beyond superficial log analysis. Our certified digital forensics experts perform exhaustive post-incident investigations, capturing and analyzing deep-system artifacts to reconstruct the entire lifecycle of an attack.</p>
                <div className="services-details__img-1" style={{ margin: "1.5rem 0" }}>
                  <img loading="lazy" alt="Digital Forensics Investigation" src="/assets/images/digital-forensics/image2.png" style={{ width: "100%", borderRadius: "10px" }} />
                </div>
                <div className="methodology-grid">
                  <div className="methodology-card">
                    <div className="methodology-card__icon"><span className="icon-tick-inside-circle"></span></div>
                    <h4 className="methodology-card__title">Disk Forensics</h4>
                    <p className="methodology-card__text">Extracting, preserving, and analyzing non-volatile data from hard drives, solid-state drives, and server volumes. We reconstruct user activity, trace lateral movement, uncover unauthorized data exfiltration, and recover deleted or altered system files.</p>
                  </div>
                  <div className="methodology-card">
                    <div className="methodology-card__icon"><span className="icon-strategy"></span></div>
                    <h4 className="methodology-card__title">Memory Forensics</h4>
                    <p className="methodology-card__text">Analyzing volatile data (RAM) captured while the system is running. This allows us to intercept fileless malware, discover active network connections, extract encryption keys, and identify injected code or rogue processes that vanish the moment a machine is powered down.</p>
                  </div>
                </div>

                <h4 className="services-details__title-2">Why Advanced Forensics Matters</h4>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>When your organization is hit by ransomware, an insider threat, or an Advanced Persistent Threat (APT), time is your greatest enemy. Standard incident response might stop an active alarm, but deep forensics answers the critical compliance and survival questions.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>What specific data was accessed or exfiltrated?</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>How did the attacker gain initial entry?</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Are there hidden backdoors or persistence mechanisms left behind?</p></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h4 className="services-details__title-2">Our Proven 4-Step Forensic Methodology</h4>
                <p className="services-details__text-2 mb-3">We maintain strict industry-standard preservation protocols to ensure all evidence remains tamper-proof, court-admissible, and aligned with global information security standards.</p>
                <div className="methodology-grid">
                  <div className="methodology-card">
                    <div className="methodology-card__step">01</div>
                    <div className="methodology-card__icon"><span className="icon-idea"></span></div>
                    <h4 className="methodology-card__title">Evidence Identification &amp; Preservation</h4>
                    <p className="methodology-card__text">We safely capture forensic images of disks and volatile memory dumps using write-blockers and cryptographic hashing, ensuring absolute integrity and a flawless chain of custody.</p>
                  </div>
                  <div className="methodology-card">
                    <div className="methodology-card__step">02</div>
                    <div className="methodology-card__icon"><span className="icon-strategy"></span></div>
                    <h4 className="methodology-card__title">Deep-Dive Extraction &amp; Parsing</h4>
                    <p className="methodology-card__text">Using advanced forensic suites, our team parses Master File Tables (MFT), system registries, event logs, and RAM dumps to isolate anomalies and indicators of compromise (IOCs).</p>
                  </div>
                  <div className="methodology-card">
                    <div className="methodology-card__step">03</div>
                    <div className="methodology-card__icon"><span className="icon-transparency"></span></div>
                    <h4 className="methodology-card__title">Malicious Vector Analysis</h4>
                    <p className="methodology-card__text">We dissect malicious binaries, analyze command-and-control (C2) communication channels, and construct an exact timeline of the adversary's actions inside your network.</p>
                  </div>
                  <div className="methodology-card">
                    <div className="methodology-card__step">04</div>
                    <div className="methodology-card__icon"><span className="icon-target"></span></div>
                    <h4 className="methodology-card__title">Executive Reporting &amp; Remediation Playbook</h4>
                    <p className="methodology-card__text">We deliver an exhaustive, audit-ready technical report detailing the root cause, alongside a step-by-step remediation roadmap to ensure the threat cannot return.</p>
                  </div>
                </div>

                <h4 className="services-details__title-2">Real-World Impact: Proven Private-Sector Expertise</h4>
                <div className="row align-items-center" style={{ margin: "1rem 0" }}>
                  <div className="col-md-7">
                    <div className="services-details__points-box">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Successfully deployed across 10+ major private-sector organizations.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Trace Network has successfully executed end-to-end disk and memory forensic investigations for over 10 prominent private-sector enterprises.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>In every engagement, our deep-dive analysis successfully isolated complex malicious vectors — including stealthy fileless execution, privileged account abuse, and hidden persistence mechanisms.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Helping our clients rapidly contain breaches, protect corporate reputations, and safely resume operations.</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <img loading="lazy" alt="Digital Forensics Evidence" src="/assets/images/digital-forensics/image3.png" style={{ width: "100%", borderRadius: "10px" }} />
                  </div>
                </div>

                <h4 className="services-details__title-2">What You Receive</h4>
                <div className="methodology-grid">
                  <div className="methodology-card">
                    <div className="methodology-card__icon"><span className="icon-target"></span></div>
                    <h4 className="methodology-card__title">Root-Cause Analysis Report</h4>
                    <p className="methodology-card__text">Clear documentation explaining the exact entry point and execution path of the threat actor.</p>
                  </div>
                  <div className="methodology-card">
                    <div className="methodology-card__icon"><span className="icon-strategy"></span></div>
                    <h4 className="methodology-card__title">Malicious Vector Map</h4>
                    <p className="methodology-card__text">A comprehensive breakdown of the binaries, scripts, or commands used during the breach.</p>
                  </div>
                  <div className="methodology-card">
                    <div className="methodology-card__icon"><span className="icon-transparency"></span></div>
                    <h4 className="methodology-card__title">Evidence Retention Package</h4>
                    <p className="methodology-card__text">Cryptographically signed copies of forensic data preserved securely for compliance, legal, or insurance requirements.</p>
                  </div>
                  <div className="methodology-card">
                    <div className="methodology-card__icon"><span className="icon-tick-inside-circle"></span></div>
                    <h4 className="methodology-card__title">Hardening Roadmap</h4>
                    <p className="methodology-card__text">Tailored recommendations to patch identified gaps and elevate your enterprise network security posture.</p>
                  </div>
                </div>

                {/* ── Disk and Memory Analysis ── */}
                <div className="services-details__bdr"></div>
                <div className="row align-items-center" id="diskandmemoryanalysis" style={{ scrollMarginTop: '140px' }}>
                  <div className="col-md-6">
                    <h3 className="services-details__title-2 mt-0 mb-0">Disk &amp; Memory Analysis</h3>
                    <p className="services-details__text-2 mt-2 mb-4">Surgical-level extraction of hidden evidence from drives and live system memory.</p>
                  </div>
                  <div className="col-md-6" style={{ marginTop: "1rem" }}>
                    <img loading="lazy"
                      alt="Disk and Memory Analysis"
                      src="/assets/images/digital-forensics/image4.jpeg"
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Modern attackers frequently leverage fileless malware, rootkits, and anti-forensic techniques to hide their tracks in both persistent storage and volatile RAM. Our specialized Disk &amp; Memory Analysis service isolates these threats with surgical precision.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>By analyzing both the hard drive and active system memory simultaneously, we expose adversaries operating in the gaps that conventional security tools simply cannot see.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h4 className="services-details__title-2">Disk Analysis Capabilities</h4>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Forensic imaging of HDDs, SSDs, and RAID volumes using write-blockers with cryptographic hash verification.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Master File Table (MFT) parsing to recover deleted files and reconstruct file system timelines.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Registry hive analysis to expose persistence mechanisms, auto-run entries, and user activity trails.</p></li>
                      </ul>
                    </div>
                    <div className="col-xl-6">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Browser history, prefetch files, shellbags, and LNK file analysis for full user-activity reconstruction.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Event log correlation across Security, System, and Application logs to map attacker lateral movement.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Identification of unauthorized data staging and exfiltration artifacts.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h4 className="services-details__title-2">Memory Analysis Capabilities</h4>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Live RAM acquisition and full memory dump analysis to capture volatile process state before shutdown.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Detection of process injection, DLL hollowing, and reflective loading used by advanced malware.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Extraction of active network connections, open sockets, and in-memory C2 beacon configurations.</p></li>
                      </ul>
                    </div>
                    <div className="col-xl-6">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Recovery of encryption keys, plaintext credentials, and session tokens residing in live memory.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Identification of rogue, hidden, or unlinked processes invisible to standard OS task managers.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Timeline correlation between disk artifacts and memory state for a complete attack reconstruction.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h4 className="services-details__title-2">Compliance &amp; Admissibility</h4>
                <div className="services-details__points-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <ul className="services-details__points-list list-unstyled">
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>All evidence is handled following strict chain-of-custody protocols aligned with ISO 27037 (Digital Evidence), ensuring findings are legally defensible and audit-ready for regulators, insurers, or court proceedings.</p></li>
                        <li><div className="icon"><span className="icon-tick-inside-circle"></span></div><p>Deliverables include cryptographically hashed evidence packages, a forensic examination report, and an actionable hardening roadmap — ready for your legal, compliance, or executive teams.</p></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-redesign">
        <div className="container">
          <div className="row">

            {/* LEFT */}
            <div className="col-xl-5 col-lg-5">
              <div className="faq-redesign__left">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">FAQS</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <h3 className="faq-redesign__heading">Frequently Asked <span>Questions</span></h3>
                <p className="faq-redesign__subtext">Explore answers to common questions about our Professional Services and practices.</p>

                <div className="faq-redesign__support-box">
                  <div className="faq-redesign__support-row">
                    <span className="icon-customer-service-headset faq-redesign__support-icon"></span>
                    <div>
                      <span className="faq-redesign__support-label">WhatsApp Support</span>
                      <p className="faq-redesign__support-number"><a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer">90003 14411</a></p>
                    </div>
                  </div>
                </div>

                <div className="faq-redesign__btns">
                  <a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer" className="faq-redesign__btn faq-redesign__btn--whatsapp">
                    <i className="fab fa-whatsapp"></i>
                    <span>WhatsApp Support</span>
                    <span className="faq-redesign__btn-arrow">↗</span>
                  </a>
                  <a href="/contact-us" className="faq-redesign__btn faq-redesign__btn--touch">
                    <i className="fas fa-phone-alt"></i>
                    <span>Get In Touch</span>
                    <span className="faq-redesign__btn-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-xl-7 col-lg-7">
              <div className="faq-redesign__right">

                <div className="faq-redesign__item">
                  <div className="faq-redesign__item-icon"><span className="icon-tick-inside-circle"></span></div>
                  <div className="faq-redesign__item-body">
                    <h4 className="faq-redesign__item-title">How often should we conduct a Network Pen-Test?</h4>
                    <p className="faq-redesign__item-text">At least once a year, or after major infrastructure changes, new device deployments, or access control modifications.</p>
                  </div>
                  <span className="faq-redesign__chevron">&#8964;</span>
                </div>

                <div className="faq-redesign__item">
                  <div className="faq-redesign__item-icon"><span className="icon-strategy"></span></div>
                  <div className="faq-redesign__item-body">
                    <h4 className="faq-redesign__item-title">Will testing disrupt live services?</h4>
                    <p className="faq-redesign__item-text">No. All assessments run in mirrored environments or low-impact windows with rollback plans. Zero downtime guaranteed.</p>
                  </div>
                  <span className="faq-redesign__chevron">&#8964;</span>
                </div>

                <div className="faq-redesign__item">
                  <div className="faq-redesign__item-icon"><span className="icon-transparency"></span></div>
                  <div className="faq-redesign__item-body">
                    <h4 className="faq-redesign__item-title">What's the difference between a vulnerability scan and a pen-test?</h4>
                    <p className="faq-redesign__item-text">A scan lists known weaknesses. A pen-test actively exploits them to show real business impact and deeper access control flaws.</p>
                  </div>
                  <span className="faq-redesign__chevron">&#8964;</span>
                </div>

                <div className="faq-redesign__item">
                  <div className="faq-redesign__item-icon"><span className="icon-target"></span></div>
                  <div className="faq-redesign__item-body">
                    <h4 className="faq-redesign__item-title">How long does an engagement take?</h4>
                    <p className="faq-redesign__item-text">Typical projects complete within 5-15 business days depending on scope, complexity, and environment size.</p>
                  </div>
                  <span className="faq-redesign__chevron">&#8964;</span>
                </div>

                <div className="faq-redesign__item">
                  <div className="faq-redesign__item-icon"><span className="icon-idea"></span></div>
                  <div className="faq-redesign__item-body">
                    <h4 className="faq-redesign__item-title">Ready to see what attackers see?</h4>
                    <p className="faq-redesign__item-text">Book a 30-minute consultation and receive a tailored proposal within hours. Walk away with a clear action plan.</p>
                  </div>
                  <span className="faq-redesign__chevron">&#8964;</span>
                </div>

                {/* Trust bar */}
                <div className="faq-redesign__trust-bar">
                  <div className="faq-redesign__trust-item">
                    <i className="fas fa-shield-alt faq-redesign__trust-icon"></i>
                    <span>Experienced Security Experts</span>
                  </div>
                  <div className="faq-redesign__trust-item">
                    <i className="fas fa-clock faq-redesign__trust-icon"></i>
                    <span>Quick Turnaround &amp; Clear Reporting</span>
                  </div>
                  <div className="faq-redesign__trust-item">
                    <i className="fas fa-lock faq-redesign__trust-icon"></i>
                    <span>Confidential &amp; Secure Process</span>
                  </div>
                  <div className="faq-redesign__trust-item">
                    <i className="fas fa-award faq-redesign__trust-icon"></i>
                    <span>Industry Best Practices</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="career-cta-section">
        <div className="career-cta-container">
          <h2 className="career-cta-title">Ready to Build a Future-Ready IT Environment?</h2>
          <p className="career-cta-text">
            Speak with a senior consultant today. In 30 minutes you will know:
            <br /><br />
            - The top three risks hiding in your current stack<br />
            - Quick wins that boost performance without new hardware<br />
            - An exact timeline and cost estimate, no obligations
          </p>
          <div className="about-two__btn-box">
            <a href="https://wame.pro/tracenetwork" target="_blank" rel="noopener noreferrer" className="btn-get-started">
              <span className="btn-text">Book Your Free Strategy Call</span>
              <span className="btn-arrow"></span>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
