import React from "react";


import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';
export default function Firewallsolutions() {
  const seoData = getSEOData('firewallsolutions');

  return (
    <>

      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />

      <div>Content could not be parsed</div>
    </>
  );
}
