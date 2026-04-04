"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "TRAININGS AND CERTIFICATIONS",
        answer: `Our training courses are thoughtfully curated to improve performance and drive innovative business solutions.Choose from a wide range of tailored courses that perfectly match your needs.
        Immerse yourself in engaging learning environments where participants are encouraged to question, grow, and learn alongside peers.Don’t miss out on this opportunity to kickstart your personal and professional growth.
         Take the first step today! Click here to explore our exciting courses and pave the way for a brighter future filled with success and achievements.,`
    },
    {
        question: "CONSULTANCY SERVICES",
        answer: `As a leading ISO- approved organization, we are committed to empowering businesses with top - notch solutions.
         Our expertise in ISO training and certifications standards(9001, 45001, 14001) sets us apart as the preferred partner for industries such as manufacturing, production, oil and gas, real estate, healthcare, science, and technology. 
         At our organization, we take pride in supporting businesses of all sizes and sectors.If you’re seeking cutting - edge solutions to elevate your operations and ensure excellence, give us a try. Let our proven track record and commitment to quality help take your business to new heights.Reach out to us and experience the difference of partnering with a trusted ISO - certified leader in the industry.
         `},
    {
        question: "BUSINESS SOLUTIONS ",
        answer: `Discover the power of our third - party conformity assessment services, designed to bridge the gaps for organizations and pinpoint areas in need of improvement.We are dedicated to ensuring even the most complex businesses thrive in both the short and long term, staying healthy and profitable.
        Our audit procedures adhere to international best practices, and our services are highly sought after by businesses seeking ISO and SON certifications. Experience the difference we can make for your organization.Get in touch with us today, and you’ll be glad you did.Let our expertise and commitment to excellence elevate your business to new heights.Together, we’ll pave the way for your success and prosperity. `
    },

];

const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

export default function RelatedQuestions() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@700;800;900&display=swap');
            `}</style>

            <section className="w-full bg-white overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

                    {/* IMAGE */}
                    <motion.div
                        className="relative w-full lg:w-[500px]"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* responsive height */}
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[680px]">
                            <Image
                                src="https://res.cloudinary.com/dzhpdvoqd/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/Aboutscreen_iov49j.webp"
                                alt="Firefighter"
                                fill
                                className="object-cover object-top"
                            />
                        </div>

                        {/* floating card */}
                        <motion.div
                            variants={slideUp}
                            className="absolute bottom-4 left-4 sm:left-8 bg-white w-[85%] sm:w-[300px] p-5 sm:p-6 shadow-xl"
                            style={{ borderTop: "4px solid #ea580c" }}
                        >
                            <h3 className="font-extrabold text-black mb-4 text-lg sm:text-xl md:text-2xl">
                                If You Need Help, Get A Consultation
                            </h3>

                            <button className="bg-orange-600 text-white px-4 py-2 text-sm sm:text-base rounded-md hover:bg-white hover:text-orange-600 border border-orange-600 transition">
                                <Link href="#">Get Started</Link>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* TEXT */}
                    <motion.div
                        className="flex-1 w-full px-0 sm:px-6 lg:px-10 py-10 lg:py-16"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.p
                            variants={slideRight}
                            className="text-orange-600 text-base sm:text-lg md:text-xl lg:text-[24px] mb-3"
                        >
                            Clients Inquiries
                        </motion.p>

                        <motion.h2
                            variants={slideRight}
                            className="text-black font-bold mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[46px]"
                        >
                            Related Questions
                        </motion.h2>

                        <motion.p
                            variants={slideUp}
                            className="text-black text-sm sm:text-base md:text-lg lg:text-xl mb-8"
                        >
                           Safety Bridge is a Quality, Health, Safety, Security Environmental (QHSSE) consultancy and Training Company offering services to clients anywhere in the world covering
                        </motion.p>

                        {/* ACCORDION */}
                        <motion.div variants={staggerContainer} className="flex flex-col gap-2">
                            {faqs.map((faq, i) => {
                                const isOpen = openIndex === i;

                                return (
                                    <motion.div key={i} variants={slideUp}>

                                        <button
                                            onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                            className={`w-full flex gap-3 sm:gap-5 px-4 sm:px-5 py-3 sm:py-4 text-left ${isOpen
                                                ? "bg-orange-600 text-white"
                                                : "bg-white border hover:bg-gray-50"
                                                }`}
                                        >
                                            <span className="text-lg">{isOpen ? "−" : "+"}</span>
                                            <span className="font-bold text-sm sm:text-base md:text-lg text-black">
                                                {faq.question}
                                            </span>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="overflow-hidden border px-4 sm:px-6"
                                                >
                                                    <p className="py-3 sm:py-4 text-sm sm:text-base text-gray-500 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}