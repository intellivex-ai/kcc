import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { trackError } from '../lib/analytics';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to console
        console.error('Error caught by boundary:', error, errorInfo);

        // Track error in analytics
        trackError(`${error.toString()} | ${errorInfo.componentStack}`, true);

        // Store error details
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
    };

    handleGoHome = () => {
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-xl w-full bg-white rounded-2xl shadow-2xl p-8"
                    >
                        {/* Icon */}
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle size={32} className="text-red-600" />
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-black text-gray-900 text-center mb-3">
                            Oops! Something went wrong
                        </h1>

                        {/* Message */}
                        <p className="text-gray-600 text-center mb-6">
                            We're sorry, but something unexpected happened. Don't worry, our team has been notified.
                        </p>

                        {/* Error details (only in dev) */}
                        {import.meta.env.DEV && this.state.error && (
                            <div className="bg-gray-100 rounded-lg p-4 mb-6 max-h-48 overflow-auto">
                                <p className="font-mono text-sm text-red-600 mb-2">
                                    {this.state.error.toString()}
                                </p>
                                <pre className="font-mono text-xs text-gray-700 whitespace-pre-wrap">
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={this.handleReset}
                                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl transition-colors"
                            >
                                <RefreshCw size={20} />
                                Try Again
                            </button>
                            <button
                                onClick={this.handleGoHome}
                                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-6 rounded-xl transition-colors"
                            >
                                <Home size={20} />
                                Go Home
                            </button>
                        </div>

                        {/* Help text */}
                        <p className="text-center text-sm text-gray-500 mt-6">
                            If the problem persists, please{' '}
                            <a href="/contact" className="text-primary hover:underline font-semibold">
                                contact support
                            </a>
                        </p>
                    </motion.div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
