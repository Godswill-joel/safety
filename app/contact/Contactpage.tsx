/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Image from "next/image";
import './contact.css';
import "../globals.css";
import emailjs from "@emailjs/browser";
import { Float, Pop } from "../style/animation";
import { useRef, useState, useEffect } from "react";
import { SafetyBridgeData } from "../data/data";
import { useSearchParams } from "next/navigation";
import { Phone, LoaderPinwheel, Mail, MessageCircle, MapPin } from "lucide-react";
import ScrollToTop from "@/app/components/Scrollto";

type Field =
    | { id: string; as: "input"; type: string; placeholder: string; rows?: never }
    | { id: string; as: "textarea"; placeholder: string; rows: number; type?: never };

const fields: Field[] = [
    { id: "name", as: "input", type: "text", placeholder: "Full Name" },
    { id: "email", as: "input", type: "email", placeholder: "Email Address" },
    { id: "telephone", as: "input", type: "tel", placeholder: "Phone Number" },
    { id: "messenger", as: "textarea", placeholder: "Tell us about your inquiry...", rows: 4 },
];

const contacts = [
    { id: "email", Icon: Mail, label: "Email", value: "asuquog588@gmail.com" },
    { id: "voice", Icon: Phone, label: "Voice Call", value: "" },
    { id: "whatsapp", Icon: MessageCircle, label: "WhatsApp", value: "234 201 342 4578" },
    { id: "address", Icon: MapPin, label: "Office", value: "" },
];

export default function Page() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const searchParams = useSearchParams();
    const courseFromUrl = searchParams.get("course") ?? "";
    const [selectedCourse, setSelectedCourse] = useState(courseFromUrl);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    
        const { name, email, telephone, messenger, course } = Object.fromEntries(
            new FormData(formRef.current!)
        );
    
        try {
            const result = await emailjs.send(
                "service_90eyelb",
                "template_fwydtz4",
                { name, email, telephone, messenger, course },
                "mmsmu4Hstun_vEhzQ"
            );
    
            console.log(result.text);
            setShowSuccess(true);    
            formRef.current?.reset();
            setSelectedCourse("");
        } catch (err) {
            console.error("EmailJS error:", err);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (showSuccess) {
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 3000); 
    
            return () => clearTimeout(timer);
        }
    }, [showSuccess]);

    return (
        <main className="min-h-screen bg-[#F5F2EE] text-gray-900" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            {/* ── HERO ── */}
            <section className="relative h-[72vh] min-h-[420px] flex items-end pb-16 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://res.cloudinary.com/duhojv2px/image/upload/f_auto,q_auto/rnth8iahqpf7fwtdsfed"
                        alt="Contact Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="hero-overlay absolute inset-0" />
                </div>

                {/* Big italic watermark */}
                <div className="absolute bottom-0 right-0 font-display text-[clamp(80px,15vw,180px)] font-black italic text-white/[0.04] leading-none select-none pointer-events-none pr-4">
                    contact
                </div>

                <div className="relative z-10 px-6 sm:px-10 lg:px-16 max-w-7xl w-full mx-auto">
                    <Float>
                        <p className="font-body text-xl uppercase tracking-[0.25em] text-orange-600 mb-3">
                            Safety Bridge LTD
                        </p>
                        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-white leading-[1.05] mb-5">
                            Let's <em className="text-orange-600 not-italic">Talk</em>
                        </h1>
                        <p className="font-body text-gray-300 text-base sm:text-lg max-w-lg leading-relaxed">
                            We're here to answer your questions and guide you toward the right course for your career.
                        </p>
                    </Float>
                </div>
            </section>

            {/* ── CONTACT CARDS ── */}
            <section className="bg-[#F5F2EE] py-20 px-6 sm:px-10 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="accent-line"></div>
                        <p className="font-body text-xs uppercase tracking-[0.22em] text-gray-500">Reach Us</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {contacts.map(({ id, Icon, label, value }, i) => (
                            <div
                                key={id}
                                className={`contact-card rounded-2xl p-6 animate-slide-up delay-${i + 1}`}
                            >
                                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                                    <Icon size={19} className="text-[#e95c1f]" />
                                </div>
                                <p className="font-body text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">{label}</p>
                                <p className="font-body text-gray-800 font-medium text-sm leading-snug">
                                    {value || <span className="text-gray-400 italic text-xs">—</span>}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FORM + SIDEBAR ── */}
            <section className="diagonal-section py-32 px-6 sm:px-10 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

                        {/* Left sidebar */}
                        <div className="lg:col-span-2 space-y-10">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-[2px] bg-orange-600"></div>
                                    <p className="font-body text-[11px] text-orange-600 uppercase tracking-[0.22em]">Get In Touch</p>
                                </div>
                                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                                    Send Us<br />a Message
                                </h2>
                                <p className="font-body text-gray-400 text-base leading-relaxed max-w-xs">
                                    Fill out the form, and a member of our team will respond within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-5 pt-4">
                                {[
                                    "Fill in your personal details",
                                    "Select the course you're interested in",
                                    "Describe your inquiry",
                                    "Hit send — we'll be in touch!",
                                ].map((step, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="number-badge">{i + 1}</div>
                                        <p className="font-body text-gray-300 text-sm leading-relaxed pt-2">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <form
                                ref={formRef}
                                onSubmit={handleSend}
                                className="space-y-5 bg-[#F5F2EE] text-black rounded-3xl p-8 sm:p-10"
                            >
                                {fields.map(({ id, as: Tag, ...props }) => (
                                    <div key={id} className="floating-label-group">
                                        <Tag
                                            name={id}
                                            {...props}
                                            className={`form-input w-full px-5 py-4 rounded-xl ${Tag === "textarea" ? "resize-none" : ""}`}
                                            disabled={loading}
                                            required
                                        />
                                    </div>
                                ))}

                                {/* Course select */}
                                <div>
                                    <select
                                        id="course"
                                        name="course"
                                        required
                                        value={selectedCourse}
                                        onChange={(e) => setSelectedCourse(e.target.value)}
                                        className="form-input select-styled w-full px-5 py-4 rounded-xl"
                                        disabled={loading}
                                    >
                                        <option value="">Select Course Interest</option>
                                        {SafetyBridgeData.map((course, index) => (
                                            <option key={index} value={course}>{course}</option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="send-btn w-full py-4 rounded-xl mt-2"
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <LoaderPinwheel size={18} className="animate-spin" />
                                            Sending…
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-3">
                                            Send Message
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    )}
                                </button>

                                {showSuccess && (
                                    <Pop className="w-full">
                                        <div className="bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl flex items-center gap-3">
                                            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="font-body text-sm font-medium">
                                                Message sent! We'll get back to you shortly.
                                            </p>
                                        </div>
                                    </Pop>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MAP ── */}
            <section className="bg-[#F5F2EE] py-20 px-6 sm:px-10 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="accent-line"></div>
                                <p className="font-body text-xs uppercase tracking-[0.22em] text-gray-500">Location</p>
                            </div>
                            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                                Find Our Office
                            </h2>
                        </div>
                        <p className="font-body text-sm text-gray-500 max-w-xs leading-relaxed">
                            Conveniently located in Port Harcourt — drop by anytime during business hours.
                        </p>
                    </div>

                    <div className="map-wrapper shadow-2xl rounded-2xl overflow-hidden border border-[#E8E3DC]">
                        <iframe
                            width="100%"
                            height="500"
                            loading="lazy"
                            className="w-full h-[380px] sm:h-[480px] block"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.790347859203!2d6.999967773822685!3d4.820940940086005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cdaeae2f5e4f%3A0x3cfae77ff0f04b61!2sNo.%202%20Orji%20Close%2C%20Off%20Ada%20George%20Rd%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1728589931339!5m2!1sen!2sng"
                            title="Safety Bridge Office Location"
                        />
                    </div>
                </div>
            </section>

            <ScrollToTop />
        </main>
    );
}
