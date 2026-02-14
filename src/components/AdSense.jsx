import React, { useEffect } from 'react';

/**
 * Google AdSense Component
 * Displays responsive ads from Google AdSense
 */

const AdSense = ({
    adClient = 'ca-pub-XXXXXXXXXXXXXXXX', // Replace with your AdSense ID
    adSlot,
    adFormat = 'auto',
    fullWidthResponsive = true,
    style = {}
}) => {
    useEffect(() => {
        try {
            // Push ad to AdSense queue
            if (window.adsbygoogle && process.env.NODE_ENV === 'production') {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (error) {
            console.error('AdSense error:', error);
        }
    }, []);

    // Don't show ads in development
    if (process.env.NODE_ENV !== 'production') {
        return (
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" style={style}>
                <p className="text-gray-500 font-semibold">Ad Placeholder</p>
                <p className="text-sm text-gray-400 mt-2">AdSense will appear here in production</p>
            </div>
        );
    }

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block', ...style }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format={adFormat}
            data-full-width-responsive={fullWidthResponsive}
        ></ins>
    );
};

/**
 * Display Ad - Large rectangular ad
 */
export const DisplayAd = ({ adSlot }) => {
    return (
        <div className="my-8">
            <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
            <AdSense
                adSlot={adSlot}
                adFormat="rectangle"
                style={{ minHeight: '250px' }}
            />
        </div>
    );
};

/**
 * Banner Ad - Horizontal banner
 */
export const BannerAd = ({ adSlot }) => {
    return (
        <div className="my-6">
            <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
            <AdSense
                adSlot={adSlot}
                adFormat="horizontal"
                style={{ minHeight: '90px' }}
            />
        </div>
    );
};

/**
 * Sidebar Ad - Vertical skyscraper
 */
export const SidebarAd = ({ adSlot }) => {
    return (
        <div className="mb-6">
            <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
            <AdSense
                adSlot={adSlot}
                adFormat="vertical"
                style={{ minHeight: '600px', minWidth: '160px' }}
            />
        </div>
    );
};

/**
 * In-Article Ad - Blends with content
 */
export const InArticleAd = ({ adSlot }) => {
    return (
        <div className="my-6">
            <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
            <AdSense
                adSlot={adSlot}
                adFormat="fluid"
                style={{ minHeight: '200px' }}
            />
        </div>
    );
};

/**
 * Multiplex Ad - Grid of multiple ads
 */
export const MultiplexAd = ({ adSlot }) => {
    return (
        <div className="my-8">
            <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
            <AdSense
                adSlot={adSlot}
                adFormat="autorelaxed"
                style={{ minHeight: '300px' }}
            />
        </div>
    );
};

export default AdSense;
