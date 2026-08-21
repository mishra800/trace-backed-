import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Best Cybersecurity Company in Hyderabad",
  description = "Trace Network & Engineering Pvt Ltd is India's leading IT solutions provider delivering advanced cybersecurity, Best Cybersecurity Company in Hyderabad, Best Network Infrastructure provider in Hyderabad network security, cloud, and managed IT services since 2005.",
  keywords = "cybersecurity, network security, IT solutions, managed IT services, cloud security, Hyderabad, India, network infrastructure, IT infrastructure, cybersecurity company",
  ogTitle,
  ogDescription,
  ogImage = "/assets/images/logoo.png",
  ogUrl,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonical,
  structuredData,
  robots = "index, follow",
  additionalMeta = []
}) {
  const siteUrl = "https://tracenetwork.in"; // Update with your actual domain
  const fullUrl = ogUrl || (typeof window !== 'undefined' ? window.location.href : siteUrl);
  const canonicalUrl = canonical || fullUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Trace Network & Engineering Pvt Ltd" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || (ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`)} />
      <meta name="twitter:site" content="@tracenetwork" />
      <meta name="twitter:creator" content="@tracenetwork" />
      
      {/* SEO and Indexing Tags */}
      <meta name="robots" content={robots} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Trace Network & Engineering Pvt Ltd" />
      <meta name="publisher" content="Trace Network & Engineering Pvt Ltd" />
      <meta name="copyright" content="Trace Network & Engineering Pvt Ltd" />
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.3850;78.4867" />
      <meta name="ICBM" content="17.3850, 78.4867" />
      
      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    </Helmet>
  );
}
