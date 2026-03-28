'use client';
import Link from 'next/link';
import { footerData } from '../data/data';
import { useState, type FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Mail, Phone, Send } from 'lucide-react';

// Footer data structure


export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) return;
    
        console.log('Subscribing:', email);
        setEmail('');
    };

    return (
        <footer className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dzhpdvoqd/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/bg3_hnw2qo.jpg"
            alt="Footer background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#001133]/70" />
        </div>
      
        {/* Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
            {/* About Us */}
            <div>
              <h3 className="text-3xl font-bold mb-4 relative inline-block">
                {footerData.aboutUs.title}
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
              </h3>
              <p className="text-gray-300 text-2xl leading-relaxed">
                {footerData.aboutUs.description}
              </p>
            </div>
      
            {/* Office */}
            <div>
              <h3 className="text-3xl font-bold mb-4 relative inline-block">
                {footerData.office.title}
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
              </h3>
              <div className="space-y-3">
                <address className="text-gray-300 text-2xl not-italic leading-relaxed">
                  {footerData.office.address.line1}<br />
                  {footerData.office.address.line2}<br />
                  {footerData.office.address.line3}
                </address>
      
                <Link
                  href={`mailto:${footerData.office.email}`}
                  className="flex items-center text-gray-300 hover:text-white text-sm group"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:text-orange-500" />
                  <span className="underline">{footerData.office.email}</span>
                </Link>
      
                <Link
                  href={`tel:${footerData.office.phone.replace(/\s/g, '')}`}
                  className="flex items-center text-gray-300 hover:text-white text-sm group"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:text-orange-500" />
                  {footerData.office.phone}
                </Link>
              </div>
            </div>
      
            {/* Quick Menu */}
            <div>
              <h3 className="text-3xl font-bold mb-4 relative inline-block">
                {footerData.quickMenu.title}
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
              </h3>
              <ul className="space-y-2">
                {footerData.quickMenu.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all text-xl"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
      
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Newsletter
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
              </h3>
      
              <form onSubmit={handleSubscribe} className="mb-8">
                <div className="flex items-center bg-white/10 rounded-lg overflow-hidden border border-white/20 focus-within:border-blue-400">
                  <Mail className="w-5 h-5 text-gray-400 ml-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="enter your email to subscribe"
                    className="flex-1 bg-transparent px-3 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 hover:bg-orange-500/20"
                  >
                    <Send className="w-5 h-5 text-orange-500" />
                  </button>
                </div>
              </form>
      
              <div className="flex gap-3">
                {footerData.socialMedia.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-orange-500 group"
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="w-5 h-5 text-[#001845] group-hover:text-white"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      
        {/* Bottom Bar */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-6">
            <p className="text-center text-gray-400 text-sm">
              Copyright © 2026 All Rights Reserved by{" "}
              <span className="text-white font-semibold">
                Safety Bridge Limited®
              </span>
            </p>
          </div>
        </div>
      </footer>
    );
}