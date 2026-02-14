import { useEffect } from 'react';

const LiveChat = () => {
    useEffect(() => {
        // Tawk.to script loader
        var Tawk_API = Tawk_API || {};
        var Tawk_LoadStart = new Date();

        (function () {
            var s1 = document.createElement("script");
            var s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/6990397b2b63cd1c37ed5084/1jhdm13gr';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();

        // Customize widget appearance
        if (window.Tawk_API) {
            window.Tawk_API.customStyle = {
                visibility: {
                    desktop: {
                        position: 'br', // bottom-right
                        xOffset: 20,
                        yOffset: 20
                    },
                    mobile: {
                        position: 'br',
                        xOffset: 10,
                        yOffset: 80
                    }
                }
            };
        }

        return () => {
            // Cleanup if component unmounts
            if (window.Tawk_API && window.Tawk_API.hideWidget) {
                window.Tawk_API.hideWidget();
            }
        };
    }, []);

    return null; // This component doesn't render anything
};

export default LiveChat;
