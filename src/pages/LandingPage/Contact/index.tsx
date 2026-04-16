
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isValid, setIsValid] = useState(false);

    // Validate form
    useEffect(() => {
        const { name, email, message } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isFormValid = name.trim().length > 0 && emailRegex.test(email) && message.trim().length > 0;
        setIsValid(isFormValid);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValid) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Success handling
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <section className="min-h-screen bg-gray-50 text-gray-900 pt-48 pb-20 relative overflow-hidden" style={{ fontFamily: '"Jost", sans-serif' }}>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-100/50 to-purple-100/40 rounded-full blur-[180px] pointer-events-none"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px] opacity-100 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="font-gilda text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl"
                    >
                        <h2 className="text-2xl font-semibold mb-8">Send Me a Message</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="group">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-blue-600 transition-colors">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300"
                                    placeholder="Jane Smith"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-blue-600 transition-colors">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300"
                                    placeholder="jane@example.com"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-blue-600 transition-colors">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                                className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform flex items-center justify-center gap-2
                                    ${isValid && !isSubmitting
                                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white cursor-pointer hover:scale-[1.02] shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'}
                                `}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FiSend className={`w-5 h-5 ${isValid ? '' : 'text-gray-500'}`} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Side - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-10 lg:pl-8 pt-4"
                    >
                        <div>
                            <h2 className="text-3xl font-light mb-6">Contact Information</h2>
                            <p className="text-gray-600 leading-relaxed text-lg font-light">
                                Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <ContactItem
                                icon={<FiPhone className="w-6 h-6 text-blue-500" />}
                                title="Phone"
                                content="08159225460"
                                href="tel:+2348159225460"
                                delay={0.5}
                            />

                            <ContactItem
                                icon={<FiMail className="w-6 h-6 text-purple-500" />}
                                title="Email"
                                content="amoriademakinwa@gmail.com"
                                href="mailto:amoriademakinwa@gmail.com"
                                delay={0.6}
                            />

                            <ContactItem
                                icon={<FiMapPin className="w-6 h-6 text-pink-500" />}
                                title="Address"
                                content="Ibadan, Nigeria"
                                delay={0.7}
                            />
                        </div>

                        {/* Additional Info / Availability */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="mt-12 p-8 bg-white rounded-2xl border border-gray-200 shadow-md backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <h3 className="text-gray-900 font-medium">Available for Work</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                I am currently accepting new freelance projects and full-time opportunities. Let's build something amazing together.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const ContactItem = ({ icon, title, content, href, delay }: { icon: React.ReactNode, title: string, content: string, href?: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className="flex items-start space-x-6 group"
    >
        <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm group-hover:bg-gray-50 group-hover:border-gray-300 transition-all duration-300">
            {icon}
        </div>
        <div className="pt-1">
            <h3 className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">{title}</h3>
            {href ? (
                <a href={href} className="text-xl text-gray-900 font-medium hover:text-blue-600 transition-colors">
                    {content}
                </a>
            ) : (
                <p className="text-xl text-gray-900 font-medium">{content}</p>
            )}
        </div>
    </motion.div>
);
