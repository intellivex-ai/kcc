/**
 * Performance Monitoring & Web Vitals Tracking
 * Tracks Core Web Vitals and custom performance metrics
 */

/**
 * Report Web Vitals to analytics
 * @param {object} metric - Web Vital metric
 */
const reportWebVital = (metric) => {
    // Send to Google Analytics if available
    if (window.gtag) {
        window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
        });
    }

    // Log to console in development
    if (import.meta.env.DEV) {
        console.log(`[Web Vital] ${metric.name}:`, metric.value, metric);
    }
};

/**
 * Measure Largest Contentful Paint (LCP)
 */
const measureLCP = () => {
    try {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];

            reportWebVital({
                name: 'LCP',
                value: lastEntry.renderTime || lastEntry.loadTime,
                id: `lcp-${Date.now()}`,
                entries: [lastEntry]
            });
        });

        observer.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (error) {
        console.error('LCP measurement error:', error);
    }
};

/**
 * Measure First Input Delay (FID)
 */
const measureFID = () => {
    try {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
                reportWebVital({
                    name: 'FID',
                    value: entry.processingStart - entry.startTime,
                    id: `fid-${Date.now()}`,
                    entries: [entry]
                });
            });
        });

        observer.observe({ type: 'first-input', buffered: true });
    } catch (error) {
        console.error('FID measurement error:', error);
    }
};

/**
 * Measure Cumulative Layout Shift (CLS)
 */
const measureCLS = () => {
    try {
        let clsValue = 0;
        let clsEntries = [];

        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();

            entries.forEach((entry) => {
                if (!entry.hadRecentInput) {
                    clsEntries.push(entry);
                    clsValue += entry.value;
                }
            });
        });

        observer.observe({ type: 'layout-shift', buffered: true });

        // Report on page hide
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                reportWebVital({
                    name: 'CLS',
                    value: clsValue,
                    id: `cls-${Date.now()}`,
                    entries: clsEntries
                });
            }
        });
    } catch (error) {
        console.error('CLS measurement error:', error);
    }
};

/**
 * Measure Time to First Byte (TTFB)
 */
const measureTTFB = () => {
    try {
        const navEntry = performance.getEntriesByType('navigation')[0];
        if (navEntry) {
            const ttfb = navEntry.responseStart - navEntry.requestStart;

            reportWebVital({
                name: 'TTFB',
                value: ttfb,
                id: `ttfb-${Date.now()}`,
                entries: [navEntry]
            });
        }
    } catch (error) {
        console.error('TTFB measurement error:', error);
    }
};

/**
 * Measure First Contentful Paint (FCP)
 */
const measureFCP = () => {
    try {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
                if (entry.name === 'first-contentful-paint') {
                    reportWebVital({
                        name: 'FCP',
                        value: entry.startTime,
                        id: `fcp-${Date.now()}`,
                        entries: [entry]
                    });
                }
            });
        });

        observer.observe({ type: 'paint', buffered: true });
    } catch (error) {
        console.error('FCP measurement error:', error);
    }
};

/**
 * Custom performance mark
 * @param {string} name - Mark name
 */
export const performanceMark = (name) => {
    try {
        performance.mark(name);
    } catch (error) {
        console.error('Performance mark error:', error);
    }
};

/**
 * Custom performance measure
 * @param {string} name - Measure name
 * @param {string} startMark - Start mark name
 * @param {string} endMark - End mark name (optional, defaults to now)
 */
export const performanceMeasure = (name, startMark, endMark) => {
    try {
        const measure = performance.measure(name, startMark, endMark);

        if (import.meta.env.DEV) {
            console.log(`[Performance] ${name}:`, measure.duration.toFixed(2), 'ms');
        }

        // Send to analytics
        if (window.gtag) {
            window.gtag('event', 'timing_complete', {
                name: name,
                value: Math.round(measure.duration),
                event_category: 'Performance'
            });
        }

        return measure;
    } catch (error) {
        console.error('Performance measure error:', error);
    }
};

/**
 * Initialize all performance monitoring
 */
export const initPerformanceMonitoring = () => {
    // Wait for page load
    if (document.readyState === 'complete') {
        startMonitoring();
    } else {
        window.addEventListener('load', startMonitoring);
    }
};

const startMonitoring = () => {
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();
    measureFCP();

    if (import.meta.env.DEV) {
        console.log('[Performance Monitoring] Initialized');
    }
};

/**
 * Get performance summary
 * @returns {object} - Performance summary
 */
export const getPerformanceSummary = () => {
    try {
        const navEntry = performance.getEntriesByType('navigation')[0];

        return {
            dns: navEntry.domainLookupEnd - navEntry.domainLookupStart,
            connection: navEntry.connectEnd - navEntry.connectStart,
            ttfb: navEntry.responseStart - navEntry.requestStart,
            download: navEntry.responseEnd - navEntry.responseStart,
            domInteractive: navEntry.domInteractive,
            domComplete: navEntry.domComplete,
            loadComplete: navEntry.loadEventEnd,
            total: navEntry.loadEventEnd - navEntry.fetchStart
        };
    } catch (error) {
        console.error('Performance summary error:', error);
        return null;
    }
};

export default {
    initPerformanceMonitoring,
    performanceMark,
    performanceMeasure,
    getPerformanceSummary
};
