import "./Partners.css";

// Partner logo data — upward-scrolling column
const partnersColumnOne = [
  { src: "/assets/images/partners/ACCOPS.jpg", alt: "Accops", title: "Accops" },
  { src: "/assets/images/partners/APPLE-2.jpg", alt: "Apple", title: "Apple" },
  { src: "/assets/images/partners/ARCON.jpg", alt: "Arcon", title: "Arcon" },
  { src: "/assets/images/partners/COSOSYS-2.jpg", alt: "CoSoSys", title: "CoSoSys" },
  { src: "/assets/images/partners/DELL-2.jpg", alt: "Dell", title: "Dell" },
  { src: "/assets/images/partners/Forcepoint.jpg", alt: "Forcepoint", title: "Forcepoint" },
  { src: "/assets/images/partners/GFI-SOFTWARE.jpg", alt: "GFI Software", title: "GFI Software" },
  { src: "/assets/images/partners/Gsuit.jpg", alt: "Google Workspace", title: "Google Workspace" },
  { src: "/assets/images/partners/Hewlett-Packard-Enterprise-2.jpg", alt: "Hewlett Packard Enterprise", title: "Hewlett Packard Enterprise" },
  { src: "/assets/images/partners/JIO-ISP.jpg", alt: "Jio ISP", title: "Jio ISP" },
  { src: "/assets/images/partners/HP.jpg", alt: "HP", title: "HP" },
  { src: "/assets/images/partners/HPE-Aruba.jpg", alt: "HPE Aruba Networking", title: "HPE Aruba Networking" },
  { src: "/assets/images/partners/LENOVO.jpg", alt: "Lenovo", title: "Lenovo" },
  { src: "/assets/images/partners/Logrythm.jpg", alt: "LogRhythm", title: "LogRhythm" },
  { src: "/assets/images/partners/Manage-Engine.jpg", alt: "ManageEngine", title: "ManageEngine" },
  { src: "/assets/images/partners/MICROSOFT-365-2.jpg", alt: "Microsoft 365", title: "Microsoft 365" },
  { src: "/assets/images/partners/MICROSOFT-AZURE.jpg", alt: "Microsoft Azure", title: "Microsoft Azure" },
  { src: "/assets/images/partners/MOTADATA.jpg", alt: "Motadata", title: "Motadata" },
  { src: "/assets/home1.png", alt: "OWL Labs", title: "OWL Labs", className: "logo-owl-labs" },
  { src: "/assets/home2.png", alt: "Halofort", title: "Halofort", className: "logo-halofort" },
];

// Partner logo data — downward-scrolling column
const partnersColumnTwo = [
  { src: "/assets/images/partners/NETSKOPE.jpg", alt: "Netskope", title: "Netskope" },
  { src: "/assets/images/partners/nutanix.png", alt: "Nutanix", title: "Nutanix", style: { backgroundColor: "white" } },
  { src: "/assets/images/partners/Palo-Alto-Networks-2.jpg", alt: "Palo Alto Networks", title: "Palo Alto Networks" },
  { src: "/assets/images/partners/PEOPLE-LINK.jpg", alt: "PeopleLink", title: "PeopleLink" },
  { src: "/assets/images/partners/POPY.jpg", alt: "Poly", title: "Poly" },

  { src: "/assets/images/partners/QUALYS.jpg", alt: "Qualys", title: "Qualys" },
  { src: "/assets/images/partners/Quantum-networks.jpg", alt: "Quantum Networks", title: "Quantum Networks" },
  { src: "/assets/images/partners/Sapphire-IMS.jpg", alt: "Sapphire IMS", title: "Sapphire IMS" },
  { src: "/assets/images/partners/SECEON.jpg", alt: "Seceon", title: "Seceon" },
  { src: "/assets/images/partners/SIFY-2.jpg", alt: "Sify", title: "Sify" },
  { src: "/assets/images/partners/SOLARWINDS.jpg", alt: "SolarWinds", title: "SolarWinds" },
  { src: "/assets/images/partners/SOPHOS.jpg", alt: "Sophos", title: "Sophos" },
  { src: "/assets/images/partners/TATA-ISP.jpg", alt: "Tata ISP", title: "Tata ISP" },
  { src: "/assets/images/partners/TENABLE-2.jpg", alt: "Tenable", title: "Tenable" },
  { src: "/assets/images/partners/VEEAM.jpg", alt: "Veeam", title: "Veeam" },
  { src: "/assets/home3.png", alt: "Partner 3", title: "Partner 3" },
  { src: "/assets/home4.jpg", alt: "Partner 4", title: "Partner 4" },
];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-container">
        {/* Left: text content */}
        <div className="partners-content">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-1"></div>
              <span className="section-title__tagline">Our Partners</span>
              <div className="section-title__tagline-shape-2"></div>
            </div>
            <h2 className="section-title__title">
              United for <span>Smart Solutions</span>
            </h2>
          </div>
          <p style={{ textAlign: "left" }} data-aos-delay="200">
            At Trace Network Engineering Pvt Ltd, we partner with global technology leaders to deliver
            advanced telecom, networking, database security solutions, cloud information security, and
            cybersecurity services.
          </p>
          <p style={{ textAlign: "left" }} data-aos-delay="200">
            Through collaborations with top data protection companies and cybersecurity vendors, we
            provide business data security, data breach protection, zero-trust data security, and
            cybersecurity products designed for modern enterprises.
          </p>
          <p style={{ textAlign: "left" }} data-aos-delay="200">
            Together with our partners, we ensure future-ready digital transformation, secure networking
            infrastructure, and scalable cloud solutions that drive business growth and resilience.
          </p>
        </div>

        {/* Right: scrolling logo columns */}
        <div className="partners-logos">
          {/* Column 1 — scrolls upward */}
          <div className="logo-slider upwards">
            <div className="logo-track">
              {/* Render twice for seamless infinite scroll */}
              {[...partnersColumnOne, ...partnersColumnOne].map((partner, index) => (
                <img loading="lazy"
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                  title={partner.title}
                  style={partner.style || {}}
                  className={partner.className || ""}
                />
              ))}
            </div>
          </div>

          {/* Column 2 — scrolls downward */}
          <div className="logo-slider downwards">
            <div className="logo-track">
              {/* Render twice for seamless infinite scroll */}
              {[...partnersColumnTwo, ...partnersColumnTwo].map((partner, index) => (
                <img loading="lazy"
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                  title={partner.title}
                  style={partner.style || {}}
                  className={partner.className || ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
