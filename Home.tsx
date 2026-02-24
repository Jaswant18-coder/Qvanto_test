import React from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  AlertTriangle, 
  Cloud, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Database,
  Globe
} from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient pt-48 pb-32 relative overflow-hidden">
        <div className="max-content relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white/80 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
                Welcome to Qvanto AI
              </span>
              <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tighter">
                Enterprises Have the Data. They Lack the Governance Speed.
              </h1>
              <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed font-medium">
                Qvanto AI gives the right person the right access — in minutes — while keeping privacy and compliance fully automated.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-brand-dark text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:translate-y-[-2px] transition-all shadow-xl"
                >
                  Request a Demo
                </button>
                <button 
                  onClick={() => setCurrentPage('product')}
                  className="border-2 border-white text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white hover:text-brand-blue transition-all"
                >
                  Explore the Platform
                </button>
              </div>
              <p className="mt-12 text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
                Driven by data. Defined by Innovation. Powered by Purpose.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="bg-white/10 backdrop-blur-3xl rounded-[40px] p-8 border border-white/20 shadow-2xl">
                <div className="bg-white rounded-[30px] p-6 shadow-inner">
                  {/* Mock UI Illustration */}
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-3 bg-gray-100 rounded-full"></div>
                    <div className="w-20 h-3 bg-blue-100 rounded-full"></div>
                    <div className="w-8 h-3 bg-gray-100 rounded-full ml-auto"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="h-32 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <ShieldCheck className="text-brand-blue" size={40} />
                    </div>
                    <div className="h-32 bg-gray-50 rounded-2xl flex items-center justify-center">
                      <Database className="text-gray-300" size={40} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-[90%]"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-[95%]"></div>
                    <div className="h-2 bg-blue-400 rounded-full w-[40%] mt-4"></div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-xl animate-bounce">
                @
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-brand-blue mb-1">5,000+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Websites</div>
            </div>
            <div>
              <div className="text-3xl font-black text-brand-blue mb-1">100</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-black text-brand-blue mb-1">9 Years</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">In Business</div>
            </div>
            <div>
              <div className="text-3xl font-black text-brand-blue mb-1">150+</div>
              <div className="flex justify-center gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => <TrendingUp key={i} size={14} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Qvanto Section */}
      <section className="py-32 bg-white">
        <div className="max-content text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter mb-8">About Qvanto AI</h2>
          <p className="text-lg text-gray-500 leading-relaxed font-medium">
            Qvanto AI is a data-driven enterprise governance platform. We're one of the leading innovators in metadata-driven compliance, building advanced solutions for the modern banking and enterprise sector.
          </p>
          <div className="mt-16 flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-4">Our Products</span>
            <div className="w-6 h-10 border-2 border-gray-100 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-gray-200 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-content">
          <div className="text-center mb-24">
            <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">The Problem</span>
            <h2 className="text-4xl font-black tracking-tighter mb-6">Why Enterprise Governance is Broken</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Modern enterprises manage massive amounts of classified data shared across multiple cloud platforms. Managing access and privacy is painfully slow, risky, and complex.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clock className="text-brand-blue" />, title: '35%', sub: 'of analyst time is lost waiting for data approvals' },
              { icon: <AlertTriangle className="text-red-500" />, title: 'Millions in Fines', sub: 'One privacy breach can cost an enterprise everything' },
              { icon: <Cloud className="text-blue-400" />, title: 'Multi-Cloud Chaos', sub: 'Siloed environments slow collaboration and ESG reporting' },
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[30px] shadow-sm border border-gray-100"
              >
                <div className="mb-8">{card.icon}</div>
                <h3 className="text-3xl font-black tracking-tighter mb-4">{card.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 bg-white">
        <div className="max-content">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">The Solution</span>
              <h2 className="text-4xl font-black tracking-tighter mb-8 leading-tight">Qvanto Fixes This — In Weeks, Not Years</h2>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed font-medium">
                Qvanto plugs directly into your existing cloud and on-prem systems to automate governance from day one, without ever moving your raw data.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {[
                  { title: 'Seamless Integration', body: 'Plugs into AWS, Azure, GCP, Snowflake with zero disruption.' },
                  { title: 'Access in Minutes', body: 'Reduce data access delays from months to minutes.' },
                  { title: 'Privacy by Design', body: 'GDPR, HIPAA, and DPDP Act compliance built-in.' },
                  { title: 'ESG Ready', body: 'Reduce data duplication and enable sustainable operations.' },
                ].map((feat, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-brand-blue shrink-0" size={20} />
                    <div>
                      <h4 className="font-black text-sm mb-2">{feat.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{feat.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setCurrentPage('product')}
                className="btn-primary flex items-center gap-2 group"
              >
                Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-brand-blue/5 rounded-[50px] p-12 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[120px] font-black text-brand-blue leading-none mb-4">93%</div>
                  <div className="text-xs font-black uppercase tracking-[0.4em] text-brand-dark">Efficiency Gain</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="py-32 bg-brand-dark text-white">
        <div className="max-content">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black tracking-tighter mb-6">Results That Speak for Themselves</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { num: '93%', label: 'Efficiency Gain', sub: 'Approval time cut from 45 days to 3 days' },
              { num: '$11.5B', label: 'Market Size', sub: 'Global Data Governance Market by 2030' },
              { num: '25%+', label: 'CAGR', sub: "India's digital governance market growth" },
              { num: '40% YoY', label: 'Multi-Cloud Adoption', sub: 'Across BFSI, Healthcare & Telecom' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-5xl font-black text-brand-blue mb-4">{stat.num}</div>
                <div className="text-xs font-black uppercase tracking-widest text-white/60 mb-4">{stat.label}</div>
                <p className="text-sm text-white/40 leading-relaxed">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-32 bg-white">
        <div className="max-content">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-[40px] p-12">
                <div className="space-y-8">
                  {[
                    'Multi-cloud adoption up 40% YoY in BFSI, Healthcare & Telecom',
                    'ESG net-zero goals adopted by Tata, Reliance, Infosys, Wipro, HCL',
                    'Compliance teams are 10–15% of total workforce — and growing',
                    'ESG penalties, compliance fines, and investor pressure rising sharply',
                  ].map((bullet, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 text-brand-blue">
                        <TrendingUp size={20} />
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">Market Opportunity</span>
              <h2 className="text-4xl font-black tracking-tighter mb-8 leading-tight">A Market That Cannot Wait</h2>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed font-medium">
                India's regulatory landscape is shifting fast. SEBI BRSR is mandatory for the top 1,000 listed companies. The DPDP Act 2023, RBI, and IRDAI guidelines are driving urgent compliance action.
              </p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="btn-primary"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32">
        <div className="max-content">
          <div className="hero-gradient rounded-[50px] p-16 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 relative z-10">
              Ready to Transform Your Data Governance?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium relative z-10">
              Join enterprises that trust Qvanto to automate compliance, secure data access, and accelerate decision-making.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-brand-dark text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl"
              >
                Book a Demo
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-brand-blue px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
