import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info & Social Media */}
        <div>
          <h3 className="text-xl font-heading mb-4">Tsuki Izakaya</h3>
          <p className="text-sm">
            1234 Sushi Street<br />
            Tokyo, Japan
          </p>
          <div className="mt-4 flex space-x-4">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
              </svg>
            </a>
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
              </svg>
            </a>
            {/* Twitter Icon */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.13 12.13 0 013 4.79a4.28 4.28 0 001.32 5.7 4.27 4.27 0 01-1.94-.54v.06a4.28 4.28 0 003.43 4.19 4.28 4.28 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.58 8.58 0 012 19.54a12.1 12.1 0 006.56 1.92c7.88 0 12.2-6.54 12.2-12.2 0-.19-.01-.39-.02-.58A8.7 8.7 0 0022.46 6z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col">
          <a href="/privacy-policy" className="hover:underline text-sm">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline text-sm mt-2">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline text-sm mt-2">
            Contact Us
          </a>
        </div>
        {/* Google My Business */}
        <div>
          <h4 className="text-lg font-heading mb-4">Find Us on Google</h4>
          <a
            href="https://g.page/your-business-id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-sm"
          >
            View our Google My Business Listing
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-text-secondary">
        &copy; {new Date().getFullYear()} Tsuki Izakaya. All rights reserved.
      </div>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Tsuki Izakaya",
            "image": "https://yourwebsite.com/path-to-image.jpg",
            "telephone": "+1234567890",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1234 Sushi Street",
              "addressLocality": "Tokyo",
              "addressCountry": "Japan"
            },
            "url": "https://yourwebsite.com",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "24"
            }
          })
        }}
      />
      {/* Google Analytics Tracking */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_TRACKING_ID');
          `
        }}
      />
    </footer>
  );
};

export default Footer;

