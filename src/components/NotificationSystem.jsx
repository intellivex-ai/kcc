import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, CheckCircle, AlertCircle, Info, Gift } from 'lucide-react';

const NotificationSystem = () => {
    const [notifications, setNotifications] = useState([]);
    const [permission, setPermission] = useState('default');
    const [showPanel, setShowPanel] = useState(false);

    // Mock notifications
    const mockNotifications = [
        {
            id: 1,
            type: 'success',
            title: 'Admission Confirmed',
            message: 'Your CCC course admission has been confirmed!',
            time: '2 hours ago',
            read: false
        },
        {
            id: 2,
            type: 'info',
            title: 'New Course Available',
            message: 'Check out our new Advanced Excel course',
            time: '1 day ago',
            read: false
        },
        {
            id: 3,
            type: 'warning',
            title: 'Exam Registration Deadline',
            message: 'Only 3 days left to register for CCC exam',
            time: '2 days ago',
            read: true
        },
        {
            id: 4,
            type: 'offer',
            title: '20% Off Special Offer',
            message: 'Limited time offer on all courses!',
            time: '3 days ago',
            read: true
        }
    ];

    useEffect(() => {
        setNotifications(mockNotifications);

        // Check notification permission
        if ('Notification' in window) {
            setPermission(Notification.permission);
        }
    }, []);

    const requestPermission = async () => {
        if ('Notification' in window) {
            const perm = await Notification.requestPermission();
            setPermission(perm);

            if (perm === 'granted') {
                new Notification('KCC Notifications Enabled!', {
                    body: 'You\'ll now receive important updates from Kusum Computer Centre',
                    icon: '/logo.png'
                });
            }
        }
    };

    const markAsRead = (id) => {
        setNotifications(notifications.map(n =>
            n.id === id ? { ...n, read: true } : n
        ));
    };

    const deleteNotification = (id) => {
        setNotifications(notifications.filter(n => n.id !== id));
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    const getIcon = (type) => {
        switch (type) {
            case 'success': return <CheckCircle className="text-green-600" size={20} />;
            case 'warning': return <AlertCircle className="text-yellow-600" size={20} />;
            case 'offer': return <Gift className="text-purple-600" size={20} />;
            default: return <Info className="text-blue-600" size={20} />;
        }
    };

    const getBgColor = (type) => {
        switch (type) {
            case 'success': return 'bg-green-50 border-green-200';
            case 'warning': return 'bg-yellow-50 border-yellow-200';
            case 'offer': return 'bg-purple-50 border-purple-200';
            default: return 'bg-blue-50 border-blue-200';
        }
    };

    return (
        <>
            {/* Notification Bell Button */}
            <div className="fixed bottom-24 right-6 z-50">
                <button
                    onClick={() => setShowPanel(!showPanel)}
                    className="relative w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center group"
                >
                    <Bell size={24} className={showPanel ? 'animate-bounce' : ''} />
                    {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 text-white rounded-full text-xs font-bold flex items-center justify-center">
                            {unreadCount}
                        </span>
                    )}
                </button>
            </div>

            {/* Notification Panel */}
            <AnimatePresence>
                {showPanel && (
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 300 }}
                        className="fixed bottom-24 right-24 w-96 max-h-[500px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-4 flex items-center justify-between">
                            <h3 className="font-bold text-lg">Notifications</h3>
                            <button
                                onClick={() => setShowPanel(false)}
                                className="hover:bg-white/20 rounded-lg p-1 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Permission Request */}
                        {permission !== 'granted' && (
                            <div className="p-4 bg-yellow-50 border-b border-yellow-200">
                                <p className="text-sm text-gray-700 mb-2">
                                    Enable notifications to stay updated!
                                </p>
                                <button
                                    onClick={requestPermission}
                                    className="w-full px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                                >
                                    Enable Browser Notifications
                                </button>
                            </div>
                        )}

                        {/* Notifications List */}
                        <div className="overflow-y-auto max-h-[400px]">
                            {notifications.length > 0 ? (
                                notifications.map((notif) => (
                                    <div
                                        key={notif.id}
                                        className={`p-4 border-b border-gray-100 ${!notif.read ? 'bg-blue-50/50' : 'hover:bg-gray-50'
                                            } transition-colors cursor-pointer`}
                                        onClick={() => markAsRead(notif.id)}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`p-2 rounded-lg ${getBgColor(notif.type).split(' ')[0]}`}>
                                                {getIcon(notif.type)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2">
                                                    <h4 className="font-semibold text-gray-900 text-sm">
                                                        {notif.title}
                                                        {!notif.read && (
                                                            <span className="ml-2 w-2 h-2 bg-primary rounded-full inline-block"></span>
                                                        )}
                                                    </h4>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            deleteNotification(notif.id);
                                                        }}
                                                        className="text-gray-400 hover:text-red-600 transition-colors shrink-0"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </div>
                                                <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                                                <p className="text-xs text-gray-400 mt-2">{notif.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-8 text-center text-gray-500">
                                    <Bell size={40} className="mx-auto mb-2 text-gray-300" />
                                    <p>No notifications</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {notifications.length > 0 && (
                            <div className="p-3 bg-gray-50 border-t text-center">
                                <button
                                    onClick={() => setNotifications([])}
                                    className="text-sm text-primary font-semibold hover:underline"
                                >
                                    Clear All
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            {showPanel && (
                <div
                    onClick={() => setShowPanel(false)}
                    className="fixed inset-0 bg-black/20 z-40"
                ></div>
            )}
        </>
    );
};

export default NotificationSystem;
