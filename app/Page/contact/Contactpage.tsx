/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";


import emailjs from "@emailjs/browser";
import { Float, Pop } from "../../style/animation";
import { useRef, useState, useEffect } from "react";
import { SafetyBridgeData } from "../../data/data";
import { useSearchParams } from "next/navigation";
import { Phone, LoaderPinwheel, Mail, MessageCircle, MapPin, } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import ScrollToTop from "@/app/components/Scrollto";

type LinkKey = "club";

type Social = { id: string; text: string };

type Field =
    | { id: string; as: "input"; type: string; placeholder: string; rows?: never }
    | { id: string; as: "textarea"; placeholder: string; rows: number; type?: never };

const socials: Social[] = [
    { id: "club", text: "AceLab Academy" },
];

const fields: Field[] = [
    { id: "name", as: "input", type: "text", placeholder: "Your Full Name" },
    { id: "email", as: "input", type: "email", placeholder: "Your Email Address" },
    { id: "telephone", as: "input", type: "tel", placeholder: "Your Phone Number" },
    { id: "messenger", as: "textarea", placeholder: "Tell us about your inquiry...", rows: 5 },
];

const contacts = [
    { id: "email", icons: Mail, text: "training@acelabview.com" },
    { id: "voice", icons: Phone, text: "Voice Call Line: 09130058134" },
    { id: "whatsapp", icons: MessageCircle, text: "WhatsApp Line: 0803 880 3207" },
    { id: "address", icons: MapPin, text: "Office: No 2 Orji Close, opposite Da'phantom Arena Off Ada George Road, Port Harcourt" },
];

// const link: Record<LinkKey, { icon: any; link: string }[]> = {
//     club: [
//         { icon: Facebook, link: "https://www.facebook.com/share/v/1YZ9r7MJcq/?mibextid=wwXIfr" },
//         { icon: Linkedin, link: "https://www.linkedin.com/company/ace-labview-ltd/" },
//         { icon: Twitter, link: "https://x.com/acelabacademy?s=21" },
//         { icon: Instagram, link: "https://www.instagram.com/acelabacademy?igsh=dm43ZDFmMXI3cWw2&utm_source=qr" },
//     ]
// };

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
        setShowSuccess(false);

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
        } catch (err) {
            console.error("EmailJS error:", err);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
            <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center text-center bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1c1c1c] text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={`https://res.cloudinary.com/duhojv2px/image/upload/f_auto,q_auto/rnth8iahqpf7fwtdsfed`}
                        alt="Contact Hero"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
                </div>

                <div className="relative z-10 px-4 max-w-4xl mx-auto">
                    <Float>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            Contact <span className="text-[#2661E9] bg-gradient-to-r from-[#2661E9] to-[#3b82f6] bg-clip-text text-transparent">Us</span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100 leading-relaxed">
                            Ready to start your journey? We&apos;re here to answer all your questions and help you take the next step.
                        </p>
                    </Float>
                </div>
            </section>
            <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
                        <div className="space-y-10">
                            <div className="space-y-8">
                                <div className="text-center lg:text-left">
                                    <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-blue-400 mb-3">
                                        Get In Touch
                                    </h2>
                                    <p className="text-gray-600 text-lg max-w-md">
                                        Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {contacts.map(({ id, icons: Icon, text }) => (
                                        <div
                                            key={id}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#2661E9]/20"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2661E9] to-[#3b82f6] rounded-lg flex items-center justify-center">
                                                <Icon size={20} className="text-white" />
                                            </div>
                                            <p className="font-medium text-gray-800 leading-relaxed flex-1">
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t border-gray-300/30 pt-10 space-y-8">
                                <div className="text-left lg:text-left">
                                    <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-blue-400 mb-6">
                                        Follow Our Journey
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {socials.map(({ id, text }) => (
                                        <div
                                            key={id}
                                            className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                                        >
                                            <p className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">
                                                {text}
                                            </p>
                                            {/* <div className="flex justify-center gap-4">
                                                {link[id as LinkKey].map(({ icon: Icon, link }, index) => (
                                                    <a
                                                        key={index}
                                                        href={link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#2661E9] text-gray-600 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                                                    >
                                                        <Icon size={16} />
                                                    </a>
                                                ))}
                                            </div> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#2661E9] to-[#3b82f6] rounded-2xl blur-lg opacity-20"></div>
                            <form
                                ref={formRef}
                                onSubmit={handleSend}
                                className="relative space-y-6 bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-gray-200/60 shadow-xl"
                            >
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        Send Us a Message
                                    </h3>
                                    <p className="text-gray-600">
                                        Fill out the form below and we&apos;ll get back to you shortly
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    {fields.map(({ id, as: Tag, ...props }) => {
                                        const base = "w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#2661E9]/50 focus:border-[#2661E9] transition-all duration-300";
                                        return (
                                            <div key={id} className="space-y-1">
                                                <Tag
                                                    name={id}
                                                    {...props}
                                                    className={base}
                                                    disabled={loading}
                                                    required
                                                />
                                            </div>
                                        );
                                    })}
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="course"
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            Select Your Course Interest *
                                        </label>
                                        <select
                                            id="course"
                                            name="course"
                                            required
                                            value={selectedCourse}
                                            onChange={(e) => setSelectedCourse(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2661E9]/50 focus:border-[#2661E9] transition-all duration-300"
                                            disabled={loading}
                                        >
                                            <option value="">Choose a Course</option>
                                            {SafetyBridgeData.map((course, index) => (
                                                <option key={index} value={course}>
                                                    {course}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-[#2661E9] to-[#3b82f6] hover:from-[#1a4bb8] hover:to-[#2563eb] text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:transform-none"
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <LoaderPinwheel size={20} className="animate-spin" />
                                            Sending Your Message
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            Send Message
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </span>
                                    )}
                                </button>

                                {showSuccess && (
                                    <Pop className="w-full">
                                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-center shadow-sm">
                                            <div className="flex items-center justify-center gap-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Message sent successfully! We&apos;ll get back to you soon.
                                            </div>
                                        </div>
                                    </Pop>
                                )}
                            </form>
                        </div>
                    </div>

                    <div className="mt-20 lg:mt-24">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-blue-400  mb-3">
                                Find Our Office
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Visit us at our conveniently located office in Port Harcourt
                            </p>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2661E9]/10 to-transparent z-10 pointer-events-none"></div>
                            <iframe
                                width="100%"
                                height="500"
                                loading="lazy"
                                className="w-full h-[400px] sm:h-[500px]"
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.790347859203!2d6.999967773822685!3d4.820940940086005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cdaeae2f5e4f%3A0x3cfae77ff0f04b61!2sNo.%202%20Orji%20Close%2C%20Off%20Ada%20George%20Rd%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1728589931339!5m2!1sen!2sng"
                                title="Ace Labview Office Location"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <ScrollToTop />
        </main>
    );
}