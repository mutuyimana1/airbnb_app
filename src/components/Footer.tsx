import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Send,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { logoWhite, mobileApp } from "../assets/images";
import { footerLinks } from "../data/travelData";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#191e25] text-white">
      {/* CTA Banner */}
      <div className="bg-[#f84525] py-10 md:py-12">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="shrink-0 w-[100px] h-[70px] flex items-center justify-center">
                <img
                  src={mobileApp}
                  alt="ListOn App"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <h3
                  className="text-white capitalize mb-1"
                  style={{
                    fontFamily: "'Wix Madefor Display', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                  }}
                >
                  Download Our App
                </h3>
                <p
                  className="text-white/80 text-sm"
                  style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                >
                  Get the best travel experience on your mobile device
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-5 py-3 rounded-xl transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-white shrink-0"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.39.74 3.19.8 1.21-.24 2.38-.93 3.67-.84 1.58.13 2.77.75 3.54 1.9-3.21 1.9-2.51 5.86.81 7.04-.57 1.5-1.3 2.95-3.21 4.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div>
                  <div
                    className="text-xs text-white/70"
                    style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                  >
                    Download on the
                  </div>
                  <div
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                  >
                    App Store
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-5 py-3 rounded-xl transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-white shrink-0"
                >
                  <path d="M3.18 23.76c.31.17.68.18 1.03-.02l12.09-6.98-2.64-2.65-10.48 9.65zm-1.11-20.3C2 3.68 2 3.98 2 4.29v15.43c0 .31 0 .6.07.85l10.3-9.46-10.3-7.65zm20.56 8.29l-2.76-1.59-3.03 2.78 3.03 2.79 2.77-1.6c.79-.46.79-1.94-.01-2.38zM4.21.26C3.86.06 3.49.07 3.18.24l10.48 9.64 2.64-2.64L4.21.26z" />
                </svg>
                <div>
                  <div
                    className="text-xs text-white/70"
                    style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                  >
                    GET IT ON
                  </div>
                  <div
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                  >
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-white/10 py-7">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <h4
                className="text-white font-semibold text-lg"
                style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
              >
                Subscribe to Our Newsletter
              </h4>
              <p
                className="text-white/50 text-sm"
                style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
              >
                Get travel tips and destination guides delivered to your inbox
              </p>
            </div>
            <div className="flex gap-0 rounded-full overflow-hidden border border-white/20 max-w-[380px] w-full">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 text-white placeholder-white/30 px-5 py-3 outline-none text-sm min-w-0"
                style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
              />
              <button className="bg-[#f84525] hover:bg-[#e03e1f] px-5 py-3 transition-colors shrink-0">
                <Send size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-14">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Brand */}
            <div>
              <a href="#" className="inline-block mb-5">
                <img
                  src={logoWhite}
                  alt="ListOn"
                  className="h-8 w-auto object-contain"
                />
              </a>
              <p
                className="text-white/50 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
              >
                Your premier travel companion for discovering amazing places,
                local businesses, and unforgettable experiences around the
                globe.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  { icon: <FaFacebook size={15} />, href: "#" },
                  { icon: <FaTwitter size={15} />, href: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f84525] flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h5
                className="text-white font-semibold text-base mb-5"
                style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
              >
                Quick Links
              </h5>
              <ul className="flex flex-col gap-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-[#f84525] text-sm transition-colors flex items-center gap-2"
                      style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                    >
                      <ArrowRight size={12} className="text-[#f84525] shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div>
              <h5
                className="text-white font-semibold text-base mb-5"
                style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
              >
                Categories
              </h5>
              <ul className="flex flex-col gap-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-[#f84525] text-sm transition-colors flex items-center gap-2"
                      style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                    >
                      <ArrowRight size={12} className="text-[#f84525] shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h5
                className="text-white font-semibold text-base mb-5"
                style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
              >
                Contact Us
              </h5>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="text-[#f84525] mt-0.5 shrink-0"
                  />
                  <span
                    className="text-white/50 text-sm leading-relaxed"
                    style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                  >
                    1234 Travel Avenue, Suite 100, New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#f84525] shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#f84525] shrink-0" />
                  <a
                    href="mailto:hello@liston.com"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                  >
                    hello@liston.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p
              className="text-white/30 text-sm"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              © 2024 ListOn. All rights reserved.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, i) => (
                  <React.Fragment key={item}>
                    {i > 0 && <span className="text-white/20">|</span>}
                    <a
                      href="#"
                      className="text-white/30 hover:text-white text-xs transition-colors"
                      style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                    >
                      {item}
                    </a>
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
