/**
 * Google AdSense Integration Component
 * Displays responsive ads in various formats
 */

import { useEffect, useRef } from 'react';

const AdSense = ({
    adClient = 'ca-pub-XXXXXXXXXXXXXXXX', // Replace with your AdSense client ID
    adSlot,
    adFormat = 'auto',
    fullWidthResponsive = true,
    style = {},
    className = ''
}) => {
    const adRef = useRef(null);

    useEffect(() => {
        // Skip in development
        if (import.meta.env.DEV) {
            return;
        }

        try {
            // Load AdSense script if not already loaded
            if (!window.adsbygoogle) {
                const script = document.createElement('script');
                script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
                script.async = true;
                script.crossOrigin = 'anonymous';
                script.setAttribute('data-ad-client', adClient);
                document.head.appendChild(script);
            }

            // Push ad
            if (window.adsbygoogle && adRef.current) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (error) {
            console.error('AdSense error:', error);
        }
    }, [adClient]);

    // Show placeholder in development
    if (import.meta.env.DEV) {
        return (
            <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center ${className}`} style={style}>
                <p className="text-gray-500 font-semibold text-sm">Ad Placeholder</p>
                <p className="text-gray-400 text-xs mt-1">AdSense ads will appear here in production</p>
            </div>
        );
    }

    return (
        <div className={className} style={style}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block', ...style }}
                data-ad-client={adClient}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
            ></ins>
        </div>
    );
};

/**
 * Predefined Ad Components for common placements
 */

// Banner Ad (Horizontal - Top/Bottom of pages)
export const BannerAd = ({ adSlot, className = '' }) => (
    <AdSense
        adSlot={adSlot}
        adFormat="horizontal"
        className={className}
        style={{ minHeight: '90px' }}
    />
);

// Sidebar Ad (Vertical - Sidebars)
export const SidebarAd = ({ adSlot, className = '' }) => (
    <AdSense
        adSlot={adSlot}
        adFormat="vertical"
        className={className}
        style={{ minHeight: '600px', minWidth: '160px' }}
    />
);

// In-Article Ad (Responsive - Within content)
export const InArticleAd = ({ adSlot, className = '' }) => (
    <AdSense
        adSlot={adSlot}
        adFormat="fluid"
        className={`my-8 ${className}`}
        style={{ minHeight: '250px' }}
    />
);

// Square Ad (Medium Rectangle)
export const SquareAd = ({ adSlot, className = '' }) => (
    <AdSense
        adSlot={adSlot}
        adFormat="rectangle"
        className={className}
        style={{ minHeight: '250px', minWidth: '250px' }}
    />
);

// Responsive Auto Ad
export const ResponsiveAd = ({ adSlot, className = '' }) => (
    <AdSense
        adSlot={adSlot}
        adFormat="auto"
        fullWidthResponsive={true}
        className={className}
        style={{ minHeight: '100px' }}
    />
);

export default AdSense;
