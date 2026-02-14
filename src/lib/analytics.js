/**
 * Google Analytics 4 Integration
 * Handles page views, events, and user tracking
 */

const GA_MEASUREMENT_ID = 'G-0T9LYER45J'; // Replace with your actual GA4 ID

/**
 * Initialize Google Analytics
 */
export const initGA = () => {
    // Skip in development
    if (import.meta.env.DEV) {
        console.log('[GA] Analytics disabled in development');
        return;
    }

    // Load GA script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false // We'll send page views manually
    });

    window.gtag = gtag;

    console.log('[GA] Analytics initialized');
};

/**
 * Track page view
 * @param {string} path - Page path
 * @param {string} title - Page title
 */
export const trackPageView = (path, title) => {
    if (!window.gtag) return;

    window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title || document.title
    });

    if (import.meta.env.DEV) {
        console.log('[GA] Page view:', path, title);
    }
};

/**
 * Track custom event
 * @param {string} eventName - Event name
 * @param {object} params - Event parameters
 */
export const trackEvent = (eventName, params = {}) => {
    if (!window.gtag) return;

    window.gtag('event', eventName, params);

    if (import.meta.env.DEV) {
        console.log('[GA] Event:', eventName, params);
    }
};

/**
 * Track button click
 * @param {string} buttonName - Button name/label
 * @param {string} category - Category (optional)
 */
export const trackButtonClick = (buttonName, category = 'Button') => {
    trackEvent('click', {
        event_category: category,
        event_label: buttonName
    });
};

/**
 * Track form submission
 * @param {string} formName - Form name
 * @param {boolean} success - Whether submission was successful
 */
export const trackFormSubmission = (formName, success = true) => {
    trackEvent(success ? 'form_submit' : 'form_error', {
        event_category: 'Form',
        event_label: formName,
        value: success ? 1 : 0
    });
};

/**
 * Track download
 * @param {string} fileName - Downloaded file name
 * @param {string} fileType - File type/category
 */
export const trackDownload = (fileName, fileType = 'PDF') => {
    trackEvent('file_download', {
        event_category: 'Download',
        event_label: fileName,
        file_type: fileType
    });
};

/**
 * Track external link click
 * @param {string} url - External URL
 * @param {string} linkText - Link text
 */
export const trackExternalLink = (url, linkText = '') => {
    trackEvent('click', {
        event_category: 'External Link',
        event_label: linkText || url,
        outbound: true
    });
};

/**
 * Track search
 * @param {string} searchTerm - Search query
 */
export const trackSearch = (searchTerm) => {
    trackEvent('search', {
        search_term: searchTerm
    });
};

/**
 * Track error
 * @param {string} description - Error description
 * @param {boolean} fatal - Whether error is fatal
 */
export const trackError = (description, fatal = false) => {
    trackEvent('exception', {
        description: description,
        fatal: fatal
    });
};

/**
 * Set user properties
 * @param {object} properties - User properties
 */
export const setUserProperties = (properties) => {
    if (!window.gtag) return;

    window.gtag('set', 'user_properties', properties);
};

/**
 * Track custom timing
 * @param {string} category - Timing category
 * @param {string} variable - Variable name
 * @param {number} value - Time in milliseconds
 */
export const trackTiming = (category, variable, value) => {
    trackEvent('timing_complete', {
        name: variable,
        value: Math.round(value),
        event_category: category
    });
};

export default {
    initGA,
    trackPageView,
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackDownload,
    trackExternalLink,
    trackSearch,
    trackError,
    setUserProperties,
    trackTiming
};
