import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://cafebrit.lk';

const DEFAULT_SEO = {
  title: 'Cafe Brit',
  description:
    'Cafe Brit in Colombo 07 (Ward Place) serving coffee, desserts, and more. Visit us for great food and a cozy atmosphere.',
  image: '/images/britLogo.jpeg'
};

export const defaultJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Cafe Brit',
  url: SITE_URL,
  image: `${SITE_URL}/images/britLogo.jpeg`,
  telephone: '0112444222',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 71, Ward Place',
    addressLocality: 'Colombo 07',
    addressCountry: 'LK'
  },
  sameAs: ['https://www.instagram.com/cafebrit_?igsh=bmtpZmV5MGRmOW5m']
};

function setMeta({ name, property, content }) {
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    if (name) el.setAttribute('name', name);
    if (property) el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink({ rel, href }) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd({ id, json }) {
  let el = document.head.querySelector(`script[type="application/ld+json"][data-seo-id="${id}"]`);
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-seo-id', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(json);
}

export default function SEO({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  image = DEFAULT_SEO.image,
  canonicalPath,
  jsonLd,
  noIndex = false
}) {
  const location = useLocation();

  useEffect(() => {
    const url = `${SITE_URL}${canonicalPath ?? location.pathname}`;
    const imgUrl = image
      ? image.startsWith('http')
        ? image
        : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`
      : null;

    document.title = title;
    setLink({ rel: 'canonical', href: url });
    setMeta({ name: 'description', content: description });
    setMeta({ name: 'robots', content: noIndex ? 'noindex,nofollow' : 'index,follow' });
    setMeta({ property: 'og:type', content: 'website' });
    setMeta({ property: 'og:site_name', content: 'Cafe Brit' });
    setMeta({ property: 'og:title', content: title });
    setMeta({ property: 'og:description', content: description });
    setMeta({ property: 'og:url', content: url });
    if (imgUrl) setMeta({ property: 'og:image', content: imgUrl });

    setMeta({ name: 'twitter:card', content: 'summary_large_image' });
    setMeta({ name: 'twitter:title', content: title });
    setMeta({ name: 'twitter:description', content: description });
    if (imgUrl) setMeta({ name: 'twitter:image', content: imgUrl });

    if (jsonLd) {
      setJsonLd({ id: 'default', json: jsonLd });
    }
  }, [title, description, image, canonicalPath, jsonLd, location.pathname, noIndex]);

  return null;
}
