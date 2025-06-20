'use client';

import { useState } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

// It's good practice to manage keys like this as constants or environment variables.
// For Next.js, use process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (ensure it's defined in .env.local or your deployment environment)
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "bdafad9d-e6d9-40e7-b655-f9cd0b6212f6"; // Fallback if needed, or handle if undefined


export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);
        setIsSuccess(null);

        const formData = new FormData(event.currentTarget);
        const formValues = {
            access_key: WEB3FORMS_ACCESS_KEY,
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };
        
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formValues),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitMessage(result.message || "Form submitted successfully! We'll be in touch.");
                setIsSuccess(true);
                event.currentTarget.reset(); // Reset form on success
            } else {
                setSubmitMessage(result.message || "An error occurred while submitting the form. Please try again.");
                setIsSuccess(false);
            }
    }

    return (
        <div className="overflow-clip font-main">
            <Header currentPage="contact" />
            <section className="w-screen bg-bannerMarImg bg-repeat bg-cover bg-top">
                <div className="flex justify-center items-center w-full z-0 pt-16 px-16 bg-blackOverlay gap-4">
                    <div className="py-16 w-full flex flex-col justify-center items-center shadow-xl">
                        <h2 className="text-2xl font-bold mb-8 text-white">Get in Touch</h2> {/* Added a heading */}
                        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"> {/* Added form styling */}
                            <div className="mb-4"> {/* Added margin-bottom */}
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2"> {/* Added label styling */}
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    placeholder="Your name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /* Added input styling */
                                />
                            </div>
                            <div className="mb-4"> {/* Added margin-bottom */}
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label> {/* Added label styling */}
                                <input type="email" name="email" id="email" required placeholder="email@example.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /> {/* Added input styling */}
                            </div>
                            <div className="mb-6"> {/* Added margin-bottom */}
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label> {/* Added label styling */}
                                <textarea name="message" id="message" required rows={3} placeholder="Enter Message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"></textarea> {/* Added textarea styling */}
                            </div>
                            <button type="submit" className='bg-gray-700 hover:bg-slate-600 text-slate-50 border rounded w-full py-2 px-3' disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit Form"}
                            </button>
                            {submitMessage && (
                                <p className={`mt-4 text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                                    {submitMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}