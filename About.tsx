import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Zap, 
  Users, 
  Globe, 
  Activity, 
  BarChart3, 
  Briefcase, 
  Cpu 
} from 'lucide-react';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

export default function About({ setCurrentPage }: AboutProps) {
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
              We're Building the Governance Layer the World's Data Needs
            </h1>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Qvanto AI transforms innovative governance technology into real, measurable business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-32 bg-white">
        <div className="max-content">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">About Us</span>
              <h2 className="text-4xl font-black tracking-tighter mb-8 leading-tight">Who We Are</h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed font-medium">
                Qvanto is a company dedicated to transforming innovative governance technology into real business impact. We build advanced data governance, privacy, and compliance platforms that integrate seamlessly into enterprise ecosystems.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">
                We specialize in operationalizing governance through deep integration, customization, and hands-on implementation — embedding privacy controls and policy automation directly into business processes.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[50px] p-12 aspect-square flex items-center justify-center">
              <div className="w-full h-full border-4 border-dashed border-gray-200 rounded-[40px] flex items-center justify-center">
                <Users className="text-gray-200" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-gray-50">
        <div className="max-content">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black tracking-tighter mb-6">Vision & Mission</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-16 rounded-[50px] shadow-sm border border-gray-100">
              <div className="w-16 h-16 rounded-3xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-black mb-6">Our Vision</h3>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">
                To be the leading metadata-driven governance platform that empowers enterprises to unlock data potential without compromising privacy and compliance — and to empower the next generation of engineers and creators.
              </p>
            </div>

            <div className="bg-brand-dark text-white p-16 rounded-[50px] shadow-2xl">
              <div className="w-16 h-16 rounded-3xl bg-white/10 text-white flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-black mb-6">Our Mission</h3>
              <div className="space-y-6">
                {[
                  'Simplify governance by integrating seamlessly with existing enterprise systems.',
                  'Accelerate decision-making by reducing data access delays from months to minutes.',
                  'Embed privacy-by-design into every workflow, ensuring compliance with global and Indian regulations.',
                  'Promote ESG efficiency by reducing data duplication and enabling sustainable operations.',
                ].map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <Zap className="text-brand-blue shrink-0" size={20} />
                    <p className="text-white/80 font-medium leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-32 bg-white">
        <div className="max-content">
          <div className="text-center mb-24">
            <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-4xl font-black tracking-tighter mb-6">What We Bring to the Table</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <Briefcase />, title: 'Financial Services', body: 'Experience across leading global banks with deep compliance exposure.' },
              { icon: <Cpu />, title: 'Technology Development', body: 'Software engineering skills and hybrid data platform implementation.' },
              { icon: <ShieldCheck />, title: 'Data Governance', body: 'Familiarity with privacy laws, governance frameworks, and collaboration.' },
              { icon: <Globe />, title: 'Digital Business', body: 'Online customer acquisition and digital product launches.' },
              { icon: <BarChart3 />, title: 'AI & Analytics', body: 'AI model governance, Big Data processing, and Generative AI.' },
            ].map((card, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-[30px] bg-gray-50 flex items-center justify-center text-gray-400 mx-auto mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
                  {React.cloneElement(card.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="font-black text-sm mb-4">{card.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-32 bg-gray-50">
        <div className="max-content">
          <div className="text-center mb-24">
            <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">Founders</span>
            <h2 className="text-4xl font-black tracking-tighter mb-6">Meet the Founders</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { name: 'Pooja Palani', creds: 'B.Tech ECE | BS Data Science' },
              { name: 'Subashini Palani', creds: 'B.Sc B.Ed | Diploma in Computer Applications' },
            ].map((founder, i) => (
              <div key={i} className="bg-white p-12 rounded-[50px] text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-32 h-32 rounded-full bg-gray-100 mx-auto mb-8 flex items-center justify-center">
                  <Users className="text-gray-300" size={48} />
                </div>
                <h4 className="text-2xl font-black mb-2">{founder.name}</h4>
                <p className="text-brand-blue font-black uppercase tracking-widest text-[10px]">{founder.creds}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation / Support */}
      <section className="py-32 bg-white">
        <div className="max-content">
          <div className="text-center mb-24">
            <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">Support</span>
            <h2 className="text-4xl font-black tracking-tighter mb-6">Backed with the Right Support</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Technical mentorship on scaling integrations',
              'Industry introductions in BFSI, Healthcare & Telecom',
              'Compliance and legal guidance for ESG and privacy',
              'Office space, software, and hardware facilities',
            ].map((bullet, i) => (
              <div key={i} className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-blue mb-6">
                  <Award size={24} />
                </div>
                <p className="text-sm text-gray-600 font-bold leading-relaxed">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
