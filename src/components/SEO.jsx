import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for Meta Tags
 * Handles title, description, Open Graph, Twitter Cards, and canonical URLs
 */
const SEO = ({
    title = 'Kusum Computer Centre - CCC, O-Level & Government Services',
    description = 'Leading computer education center in Varanasi offering CCC, O-Level courses and government services like banking, passport, PAN card, and more.',
    keywords = 'computer education, CCC, O-Level, Varanasi, government services, computer courses, NIELIT',
    image = 'https://kusumcomputercentre.com/logo.png',
    url = 'https://kusumcomputercentre.com',
    type = 'website',
    schemaMarkup = null
}) => {
    const siteTitle = title.includes('Kusum') ? title : `${title} | Kusum Computer Centre`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Kusum Computer Centre" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Schema.org Markup */}
            {schemaMarkup && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaMarkup)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
