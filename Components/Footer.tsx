"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { socialMedia } from "@/data";
import MaginButton from "./ui/MaginButton";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''
        )
        
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                setIsSubmitting(false);
            });
    };

    return (
        <footer className="w-full pt-20 pb-10 relative" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96"></div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw] text-center text-white">
                    Ready to take <span className="text-purple">your</span> digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today.
                </p>
                <form className="w-full max-w-lg bg-gray-900 p-8 rounded-lg" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full px-3 py-2 text-white bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-purple-500"
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 text-white bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-purple-500"
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            className="w-full px-3 py-2 text-white bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-purple-500"
                            id="subject"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="w-full px-3 py-2 text-white bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-purple-500"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-purple font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : (
                                <>
                                    <span className="mr-2">Send Mail</span>
                                </>
                            )}
                        </button>
                    </div>
                    {isSubmitted && <p className="text-green-500 mt-4">Message sent successfully!</p>}
                </form>
                <a href="mailto:contact@jsmastery.pro">
                    <MaginButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light text-white">
                    Copyright © 2024 G MANOHAR
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a
                            key={info.id}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <img src={info.img} alt="icons" width={20} height={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
