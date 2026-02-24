import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  ChevronDown, 
  Send, 
  CheckCircle2 
} from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  const faqs = [
    {
      q: "What makes Qvanto different from other governance platforms?",
      a: "Qvanto is metadata-driven — it works only on data about data, so no raw data is ever moved. This means zero privacy risk and faster integration across any multi-cloud environment."
    },
    {
      q: "Which regulations does Qvanto support?",
      a: "Qvanto supports GDPR, HIPAA, CCPA, India's DPDP Act, SEBI BRSR, and RBI/IRDAI ESG guidelines out of the box."
    },
    {
      q: "How quickly can Qvanto be deployed?",
      a: "Qvanto deploys in weeks — compared to months or years for traditional governance platforms."
    },
    {
      q: "Which cloud platforms does Qvanto work with?",
      a: "Qvanto is fully vendor-neutral and works across AWS, Azure, GCP, Snowflake, and hybrid on-prem environments."
    },
    {
      q: "Can we request a proof-of-concept before committing?",
      a: "Yes. Contact us at qvanto.ai.ltd@gmail.com to discuss a PoC or trial tailored to your organization."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient pt-48 pb-32 text-center text-white">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
              Let's Talk Governance
            </h1>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Have a question, want a demo, or need a custom enterprise solution? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-32 bg-white">
        <div className="max-content">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Details */}
            <div>
              <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">Get in Touch</span>
              <h2 className="text-4xl font-black tracking-tighter mb-12">Contact Details</h2>
              
              <div className="space-y-12">
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-3xl bg-brand-light text-brand-blue flex items-center justify-center shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-gray-300 mb-2">Email Us</h4>
                    <p className="text-xl font-black text-brand-dark">qvanto.ai.ltd@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-3xl bg-brand-light text-brand-blue flex items-center justify-center shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-gray-300 mb-2">Call Us</h4>
                    <p className="text-xl font-black text-brand-dark">+91 9500006530</p>
                    <p className="text-xl font-black text-brand-dark">+91 9840736745</p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-3xl bg-brand-light text-brand-blue flex items-center justify-center shrink-0">
                    <Linkedin size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-gray-300 mb-2">Connect</h4>
                    <p className="text-xl font-black text-brand-dark">linkedin.com/company/qvanto-ai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-12 rounded-[50px] border border-gray-100 shadow-2xl">
              <h3 className="text-2xl font-black mb-8">Send Us a Message</h3>
              
              {formStatus === 'sent' ? (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-black mb-4">Message Sent!</h4>
                  <p className="text-gray-500 font-medium">We'll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 text-brand-blue font-black uppercase tracking-widest text-xs"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Full Name *</label>
                      <input required type="text" className="w-full bg-white border border-gray-100 rounded-full px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Company Name *</label>
                      <input required type="text" className="w-full bg-white border border-gray-100 rounded-full px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Work Email *</label>
                      <input required type="email" className="w-full bg-white border border-gray-100 rounded-full px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                      <input type="tel" className="w-full bg-white border border-gray-100 rounded-full px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Industry</label>
                      <select className="w-full bg-white border border-gray-100 rounded-full px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                        <option>BFSI</option>
                        <option>Healthcare</option>
                        <option>Telecom</option>
                        <option>Manufacturing</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">I am looking for...</label>
                      <select className="w-full bg-white border border-gray-100 rounded-full px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                        <option>Product Demo</option>
                        <option>Pricing Info</option>
                        <option>Partnership</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Your Message</label>
                    <textarea rows={4} className="w-full bg-white border border-gray-100 rounded-[30px] px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors resize-none"></textarea>
                  </div>

                  <button 
                    disabled={formStatus === 'sending'}
                    className="w-full bg-brand-blue text-white py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-brand-dark transition-all flex items-center justify-center gap-3 shadow-xl"
                  >
                    {formStatus === 'sending' ? 'Sending...' : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-content">
          <div className="text-center mb-24">
            <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">FAQs</span>
            <h2 className="text-4xl font-black tracking-tighter mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[30px] border border-gray-100 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="font-black text-brand-dark">{faq.q}</span>
                  <ChevronDown className={`text-brand-blue transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
