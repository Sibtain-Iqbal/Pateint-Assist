import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/Home-Comp/ui/button";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 text-white mt-20">
      {/* Accent Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-extrabold font-poppins tracking-wide">
                HealthConnect
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-lg leading-relaxed text-base">
              Empowering patients with seamless access to trusted healthcare
              professionals. Appointments, health records, and virtual care —
              all in one smart platform.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 hover:bg-black hover:text-white transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 hover:bg-black hover:text-white transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 hover:bg-black hover:text-white transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 hover:bg-black hover:text-white transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white/90 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/find-your-doctor"
                  className="text-gray-300 hover:text-black transition-colors"
                >
                  Find Doctors
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-black transition-colors">
                  Specialties
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-black transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-teal-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white/90 tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-teal-300" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-teal-300" />
                <span>support@healthconnect.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-teal-300" />
                <span>
                  123 Medical Center Dr, <br /> Health City, HC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 HealthConnect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-teal-300 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-teal-300 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-teal-300 text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
