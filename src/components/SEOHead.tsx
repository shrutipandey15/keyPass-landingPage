import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function SEOHead({ 
  title = "KeyPass - Offline USB Password Vault | Secure Password Manager",
  description = "KeyPass is an offline USB password vault that secures your passwords without the cloud. Plug it in, type instantly, stay safe. Join our limited beta - only 30 units available.",
  keywords = "password manager, offline password vault, USB security device, hardware password manager, secure passwords, no cloud, KeyPass, beta testing",
  ogImage = "https://images.unsplash.com/photo-1599350686877-382a54114d2f?w=1200&h=630&fit=crop",
  canonical = "https://keypass.com"
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Create or update meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('author', 'KeyPass');
    updateMetaTag('theme-color', '#030213');
    updateMetaTag('application-name', 'KeyPass');
    updateMetaTag('apple-mobile-web-app-title', 'KeyPass');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:type', 'product', true);
    updateMetaTag('og:site_name', 'KeyPass', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Product specific meta tags
    updateMetaTag('product:price:amount', '18');
    updateMetaTag('product:price:currency', 'USD');
    updateMetaTag('product:availability', 'limited');
    
    // Additional SEO meta tags
    updateMetaTag('classification', 'Business');
    updateMetaTag('category', 'Technology, Security, Hardware');
    updateMetaTag('coverage', 'Worldwide');
    updateMetaTag('distribution', 'Global');
    updateMetaTag('rating', 'General');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('language', 'en');
    updateMetaTag('geo.region', 'US');
    updateMetaTag('geo.country', 'US');
    updateMetaTag('ICBM', '40.7128, -74.0060'); // New York coordinates as default

    // Canonical URL
    let canonical_link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical_link) {
      canonical_link = document.createElement('link');
      canonical_link.rel = 'canonical';
      document.head.appendChild(canonical_link);
    }
    canonical_link.href = canonical;

    // PWA Manifest
    let manifest_link = document.querySelector('link[rel="manifest"]') as HTMLLinkElement;
    if (!manifest_link) {
      manifest_link = document.createElement('link');
      manifest_link.rel = 'manifest';
      manifest_link.href = '/manifest.json';
      document.head.appendChild(manifest_link);
    }

    // Preconnect to external domains for performance
    const preconnectDomains = ['https://images.unsplash.com', 'https://fonts.googleapis.com'];
    preconnectDomains.forEach(domain => {
      let preconnect = document.querySelector(`link[rel="preconnect"][href="${domain}"]`) as HTMLLinkElement;
      if (!preconnect) {
        preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = domain;
        document.head.appendChild(preconnect);
      }
    });

    // Structured data for product and organization
    const structuredData = [
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "KeyPass USB Password Vault",
        "description": description,
        "image": ogImage,
        "brand": {
          "@type": "Brand",
          "name": "KeyPass"
        },
        "offers": {
          "@type": "Offer",
          "price": "18",
          "priceCurrency": "USD",
          "availability": "https://schema.org/LimitedAvailability",
          "validFrom": new Date().toISOString().split('T')[0],
          "priceValidUntil": "2025-12-31",
          "seller": {
            "@type": "Organization",
            "name": "KeyPass"
          },
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "USD"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 3,
                "unitCode": "DAY"
              }
            }
          }
        },
        "category": "Security Hardware",
        "audience": {
          "@type": "Audience",
          "audienceType": "Beta Testers"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "5",
          "bestRating": "5"
        }
      },
      {
        "@context": "https://schema.org/",
        "@type": "Organization",
        "name": "KeyPass",
        "url": canonical,
        "logo": ogImage,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "",
          "contactType": "Customer Service",
          "email": "hello@keypass.com",
          "availableLanguage": ["English"]
        },
        "foundingLocation": {
          "@type": "Place",
          "address": "India & Netherlands"
        }
      },
      {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "KeyPass",
        "url": canonical,
        "description": description,
        "potentialAction": {
          "@type": "SearchAction",
          "target": canonical + "?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ];

    // Add or update structured data
    let jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.type = 'application/ld+json';
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, canonical]);

  return null; // This component doesn't render anything
}