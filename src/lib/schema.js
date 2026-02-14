/**
 * Schema.org Structured Data Generator
 * Creates JSON-LD markup for better SEO
 */

/**
 * Organization Schema
 */
export const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Kusum Computer Centre',
    alternateName: 'KCC',
    url: 'https://kusumcomputercentre.com',
    logo: 'https://kusumcomputercentre.com/logo.png',
    description: 'Leading computer education center in Varanasi offering CCC, O-Level courses and government services',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Main Road, Varanasi',
        addressLocality: 'Varanasi',
        addressRegion: 'Uttar Pradesh',
        postalCode: '221001',
        addressCountry: 'IN'
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-XXXXXXXXXX',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: ['Hindi', 'English']
    },
    sameAs: [
        'https://facebook.com/kusumcomputercentre',
        'https://twitter.com/kusumcc',
        'https://instagram.com/kusumcc'
    ]
});

/**
 * Local Business Schema
 */
export const getLocalBusinessSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://kusumcomputercentre.com',
    name: 'Kusum Computer Centre',
    image: 'https://kusumcomputercentre.com/logo.png',
    priceRange: '₹₹',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Main Road, Varanasi',
        addressLocality: 'Varanasi',
        addressRegion: 'UP',
        postalCode: '221001',
        addressCountry: 'IN'
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.3176,
        longitude: 82.9739
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00'
        }
    ],
    telephone: '+91-XXXXXXXXXX',
    email: 'info@kusumcomputercentre.com'
});

/**
 * Course Schema for Education Pages
 */
export const getCourseSchema = (courseName, description, price) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    description: description,
    provider: {
        '@type': 'Organization',
        name: 'Kusum Computer Centre',
        sameAs: 'https://kusumcomputercentre.com'
    },
    offers: {
        '@type': 'Offer',
        category: 'Paid',
        price: price,
        priceCurrency: 'INR'
    },
    hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: ['Onsite', 'Online'],
        courseWorkload: 'PT3M'
    }
});

/**
 * Website Schema
 */
export const getWebsiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kusum Computer Centre',
    url: 'https://kusumcomputercentre.com',
    potentialAction: {
        '@type': 'SearchAction',
        target: 'https://kusumcomputercentre.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
    }
});

/**
 * Breadcrumb Schema
 */
export const getBreadcrumbSchema = (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
    }))
});

/**
 * Article Schema for Blog Posts
 */
export const getArticleSchema = (title, description, author, datePublished, imageUrl) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    author: {
        '@type': 'Person',
        name: author
    },
    publisher: {
        '@type': 'Organization',
        name: 'Kusum Computer Centre',
        logo: {
            '@type': 'ImageObject',
            url: 'https://kusumcomputercentre.com/logo.png'
        }
    },
    datePublished: datePublished,
    dateModified: datePublished
});

/**
 * FAQ Schema
 */
export const getFAQSchema = (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
        }
    }))
});

export default {
    getOrganizationSchema,
    getLocalBusinessSchema,
    getCourseSchema,
    getWebsiteSchema,
    getBreadcrumbSchema,
    getArticleSchema,
    getFAQSchema
};
