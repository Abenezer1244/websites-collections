
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#04120c] py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-[#0a2319] transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tight uppercase">Design Haven</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We create human-centric spaces that inspire and empower. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-[#0a2319] transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-[#0a2319] transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-[#0a2319] transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-[#0a2319] transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a></li>
              <li><a href="#ai-assistant" className="hover:text-yellow-400 transition-colors">AI Designer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Information</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 shrink-0" />
                <span>123 Design Avenue, Creative District, New York</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400 shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                <span>hello@designhaven.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
          <p>© 2024 Design Haven Interior Design Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
