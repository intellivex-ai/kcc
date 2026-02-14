/**
 * Push Notifications Library
 * Handles PWA push notification subscriptions
 */

const PUBLIC_VAPID_KEY = 'YOUR_PUBLIC_VAPID_KEY_HERE'; // Replace with actual key

/**
 * Request notification permission
 */
export const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
        console.warn('This browser does not support notifications');
        return false;
    }

    if (Notification.permission === 'granted') {
        return true;
    }

    if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    }

    return false;
};

/**
 * Subscribe to push notifications
 */
export const subscribeToPush = async () => {
    try {
        const registration = await navigator.serviceWorker.ready;

        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
        });

        // Send subscription to your backend
        await sendSubscriptionToBackend(subscription);

        console.log('Push subscription successful');
        return subscription;
    } catch (error) {
        console.error('Push subscription failed:', error);
        return null;
    }
};

/**
 * Unsubscribe from push notifications
 */
export const unsubscribeFromPush = async () => {
    try {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();

        if (subscription) {
            await subscription.unsubscribe();
            console.log('Unsubscribed from push');
            return true;
        }

        return false;
    } catch (error) {
        console.error('Unsubscribe failed:', error);
        return false;
    }
};

/**
 * Check if user is subscribed
 */
export const isSubscribed = async () => {
    try {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();
        return !!subscription;
    } catch (error) {
        return false;
    }
};

/**
 * Show local notification (for testing)
 */
export const showNotification = (title, options = {}) => {
    if (!('Notification' in window)) {
        console.warn('Notifications not supported');
        return;
    }

    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification(title, {
                body: options.body || '',
                icon: options.icon || '/icons/icon-192x192.png',
                badge: '/icons/icon-72x72.png',
                vibrate: [200, 100, 200],
                tag: options.tag || 'default',
                ...options
            });
        });
    }
};

/**
 * Send subscription to backend
 * This is a placeholder - implement your backend endpoint
 */
const sendSubscriptionToBackend = async (subscription) => {
    // TODO: Implement backend call
    // await fetch('/api/push-subscribe', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(subscription)
    // });
    console.log('Subscription:', subscription);
};

/**
 * Convert VAPID key
 */
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}

export default {
    requestNotificationPermission,
    subscribeToPush,
    unsubscribeFromPush,
    isSubscribed,
    showNotification
};
