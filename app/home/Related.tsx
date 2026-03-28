"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "TRAININGS AND CERTIFICATIONS",
        answer:
            `Our training courses are thoughtfully curated to improve performance and drive innovative business solutions. Choose from a wide range of tailored courses that perfectly match your needs. 
             Immerse yourself in engaging learning environments where participants are encouraged to question, grow, and learn alongside peers. Don’t miss out on this opportunity to kickstart your personal and professional growth.
             Take the first step today! Click here to explore our exciting courses and pave the way for a brighter future filled with success and achievements.`,
    },
    {
        question: "CONSULTANCY SERVICES",
        answer:
            `As a leading ISO-approved organization, we are committed to empowering businesses with top-notch solutions. Our expertise in ISO training and certifications standards (9001, 45001, 14001) sets us apart as the preferred partner for industries such as manufacturing, production, oil and gas, real estate, healthcare, science, and technology.
         At our organization, we take pride in supporting businesses of all sizes and sectors. If you’re seeking cutting-edge solutions to elevate your operations and ensure excellence, give us a try. Let our proven track record and commitment to quality help take your business to new heights. 
         Reach out to us and experience the difference of partnering with a trusted ISO-certified leader in the industry.`,
    },
    {
        question: "BUSINESS SOLUTIONS ",
        answer:
            `Discover the power of our third-party conformity assessment services, designed to bridge the gaps for organizations and pinpoint areas in need of improvement. We are dedicated to ensuring even the most complex businesses thrive in both the short and long term, staying healthy and profitable.
            Our audit procedures adhere to international best practices, and our services are highly sought after by businesses seeking ISO and SON certifications. Experience the difference we can make for your organization.
            Get in touch with us today, and you’ll be glad you did. Let our expertise and commitment to excellence elevate your business to new heights. Together, we’ll pave the way for your success and prosperity.`,
    },
    {
        question: "What is meant by a step-by-step process?",
        answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
    },
];

export default function RelatedQuestions() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <>
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@700;800;900&display=swap');
      `}</style>

            <section
                className="w-full bg-white overflow-hidden"
                style={{ fontFamily: "'Barlow', sans-serif" }}
            >
                <div className="max-w-[1200px] top-10 mx-auto flex flex-col lg:flex-row items-stretch">
                    <div
                        className="relative shrink-0 lg:w-[500px]"
                        /* paddingBottom creates blank white space below the photo
                           so the card can visually "float" off the image           */
                        style={{ paddingBottom: "96px" }}
                    >
                        {/* Full-height photo */}
                        <div
                            className="relative w-full"
                            style={{ height: "680px" }}
                        >
                            <Image
                                src="https://res.cloudinary.com/dzhpdvoqd/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/Aboutscreen_iov49j.webp"
                                alt="Firefighter holding oxygen tank"
                                fill
                                className="object-cover object-top"
                                sizes="500px"
                                priority
                            />
                        </div>
                        <div
                            className="absolute bottom-5 left-15 bg-white"
                            style={{
                                width: "300px",
                                borderTop: "4px solid #ea580c",
                                padding: "30px 45px 26px",
                                boxShadow: "0 16px 48px rgba(0,0,0,0.13)",
                            }}
                        >
                            <h3
                                className="text-gray-900 font-extrabold leading-[1.25] mb-7"
                                style={{
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontSize: "25px",
                                    letterSpacing: "0.01em",
                                }}
                            >
                                If You Need Help, Get&nbsp;A&nbsp;Consultation
                            </h3>
                            <button className="text-white font-bold text-[14px] bg-orange-600 tracking-wide hover:text-orange-700 transition-colors duration-200">
                                <Link
                                    href="#"

                                >
                                    Get Started
                                </Link>
                            </button>

                        </div>
                    </div>

                    {/* ══════════════════════════════════════
              RIGHT — tag, heading, description, FAQ
          ══════════════════════════════════════ */}
                    <div className="flex-1 flex flex-col justify-center px-14 py-16 lg:py-20">

                        {/* Tag */}
                        <p className="text-orange-600 font-semibold text-[14px] tracking-[0.05em] mb-3">
                            Clients Inquiries
                        </p>

                        {/* Heading */}
                        <h2
                            className="text-gray-900 font-black leading-[1.08] mb-5"
                            style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontSize: "46px",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Related Questions
                        </h2>

                        {/* Body */}
                        <p className="text-gray-500 text-[15px] leading-[1.75] mb-9 max-w-[520px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
                            ad minim veniam quis nostrud incididunt ut labore consectetur.
                        </p>

                        {/* ── Accordion ── */}
                        <div className="flex flex-col gap-[6px]">
                            {faqs.map((faq, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <div key={i}>
                                        {/* Header button */}
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                            className={`w-full flex items-center gap-5 px-5 py-[17px] text-left transition-colors duration-200 ${isOpen
                                                ? "bg-orange-600"
                                                : "bg-white border border-gray-200 hover:bg-gray-50"
                                                }`}
                                        >
                                            {/* ± symbol */}
                                            <span
                                                className={`flex-shrink-0 w-6 h-6 flex items-center justify-center font-light text-[24px] leading-none select-none ${isOpen ? "text-white" : "text-gray-500"
                                                    }`}
                                            >
                                                {isOpen ? "−" : "+"}
                                            </span>

                                            <span
                                                className={`font-bold text-[15px] tracking-[0.01em] ${isOpen ? "text-white" : "text-gray-900"
                                                    }`}
                                            >
                                                {faq.question}
                                            </span>
                                        </button>

                                        {/* Answer — slides open */}
                                        {isOpen && (
                                            <div
                                                className="bg-white border border-t-0 border-gray-200 px-6 pt-5 pb-6"
                                            >
                                                <p className="text-gray-500 text-[14px] leading-[1.8] pl-11">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}

                                        {/* Closed items: left orange accent line */}
                                        {!isOpen && (
                                            <div className="h-0" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}