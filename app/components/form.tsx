    import React, { useState } from 'react';

    // You might need to install lucide-react in your Next.js project:
    // npm install lucide-react
    import { User, Mail, MessageSquare, Send, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
    type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
    };

    export default function FormComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = () => {
        const newErrors: FormErrors = {};
        if (!name.trim()) newErrors.name = 'Name is required.';
        if (!email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!message.trim()) newErrors.message = 'Message is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setStatus('submitting');
        
        try {
            // Make a fetch request to your API route
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (!response.ok) {
                // If the server responds with an error status (like 400 or 500)
                const errorData = await response.json().catch(() => ({ message: 'Network response was not ok.' }));
                throw new Error(errorData.message || 'Network response was not ok.');
            }
            
            const data = await response.json();
            console.log('API Response:', data);

            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
            setErrors({});
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('error');
        }
    };

    const getButtonContent = () => {
        if (status === 'submitting') {
        return (
            <>
            <Loader className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
            </>
        );
        }
        if (status === 'success') {
        return (
            <>
            <CheckCircle className="mr-2 h-5 w-5" />
            Message Sent!
            </>
        );
        }
        if (status === 'error') {
            return (
                <>
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Try Again
                </>
            )
        }
        return (
        <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
        </>
        );
    };

    return (
        <div className="flex items-center justify-center p-4 font-sans">
        <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">I&apos;m always open to discussing new projects or creative ideas.</p>
            
            <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        placeholder="Your Name"
                        className={`w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
                        required
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1 ml-2">{errors.name}</p>}
                </div>

                {/* Email Input */}
                <div className="relative">
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className={`w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
                        required
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1 ml-2">{errors.email}</p>}
                </div>

                {/* Message Textarea */}
                <div className="relative">
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <MessageSquare className="absolute left-4 top-5 h-5 w-5 text-gray-400" />
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                        placeholder="Your Message"
                        rows={5}
                        className={`w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none`}
                        required
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                    ></textarea>
                    {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1 ml-2">{errors.message}</p>}
                </div>
            </div>
            
            <div className="mt-8">
                <button
                    type="submit"
                    disabled={status === 'submitting' || status === 'success'}
                    className={`w-full flex items-center justify-center px-6 py-4 text-lg font-bold text-white rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                        status === 'submitting' ? 'bg-gray-500 cursor-not-allowed' :
                        status === 'success'   ? 'bg-green-600 cursor-not-allowed' :
                        status === 'error'     ? 'bg-red-600 hover:bg-red-700 focus:ring-red-400' :
                                                'bg-blue-600 hover:bg-blue-700 focus:ring-blue-400'
                    }`}
                >
                {getButtonContent()}
                </button>
            </div>

            {status === 'error' && (
                <p role="alert" className="text-center text-red-500 mt-4">
                Oops! Something went wrong. Please try again later.
                </p>
            )}

            </form>
        </div>
        </div>
    );
    }
