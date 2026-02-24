import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-content">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="text-2xl font-black tracking-tighter text-brand-blue mb-6">QVANTO AI</div>
            <p className="text-gray-500 max-w-xs leading-relaxed mb-8">
              Driven by data. Defined by Innovation. Powered by Purpose.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:qvanto.ai.ltd@gmail.com" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all">
                <Mail size={18} />
              </a>
              <a href="tel:+919500006530" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-brand-blue transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('product')} className="hover:text-brand-blue transition-colors">Product</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-brand-blue transition-colors">About</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-brand-blue transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-widest mb-8">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li>qvanto.ai.ltd@gmail.com</li>
              <li>+91 9500006530</li>
              <li>Chennai, India</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">
            © 2026 QVANTO AI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-xs font-bold text-gray-300 uppercase tracking-widest">
            <a href="#" className="hover:text-brand-blue">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
