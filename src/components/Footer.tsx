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
import { NavLink } from "react-router-dom";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#191e25] text-white">


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
                    <NavLink
                      to={link.href}
                      className="text-white/50 hover:text-[#f84525] text-sm transition-colors flex items-center gap-2"
                      style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                    >
                      <ArrowRight size={12} className="text-[#f84525] shrink-0" />
                      {link.label}
                    </NavLink>
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
                    Kigali/Nyarugenge
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#f84525] shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                  >
                    0782099213
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#f84525] shrink-0" />
                  <a
                    href="#"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                  >
                    airbnb@liston.com
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
              © 2026 ListOn. All rights reserved.
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
