import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Database, 
  Zap, 
  Users, 
  Settings, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Search, 
  BarChart3, 
  Workflow, 
  Tag, 
  FileText, 
  Layers, 
  Globe,
  Activity,
  ShieldAlert,
  RotateCcw
} from 'lucide-react';

interface ProductProps {
  setCurrentPage: (page: string) => void;
}

export default function Product({ setCurrentPage }: ProductProps) {
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
              One Platform. Complete Governance.
            </h1>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              The Qvanto Governance & Compliance Platform administers your data assets, manages customer privacy, and automates IT processes — on cloud and on-prem.
            </p>
            <button className="bg-brand-dark text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl">
              See All Features
            </button>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-32 bg-white">
        <div className="max-content">
          <div className="text-center mb-24">
            <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">What the Platform Does</span>
            <h2 className="text-4xl font-black tracking-tighter mb-6">Built for the Modern Enterprise</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'High-Compliance Data Organization', body: 'Meet regulatory requirements out-of-the-box from day one.' },
              { title: 'Centralized Data Asset Administration', body: 'Manage ownership, access, and privacy from one place.' },
              { title: 'Instant Analytics Ecosystems', body: 'Spin up compliant data workbenches on any cloud instantly.' },
              { title: 'Democratized Data Access', body: 'Securely share data across all business teams without silos.' },
              { title: 'Full IT Process Automation', body: 'Replace manual approvals with intelligent automation.' },
            ].map((card, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-[30px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all group">
                <h4 className="font-black text-sm mb-4 group-hover:text-brand-blue transition-colors">{card.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-content">
          <div className="text-center mb-24">
            <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">Features</span>
            <h2 className="text-4xl font-black tracking-tighter mb-6">Everything You Need to Govern Data — In One Place</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: <Database />, title: 'Data Assets Marketplace', body: 'A centralized repository where all data assets are listed and requested.' },
              { icon: <Users />, title: 'Third-Party Data & License', body: 'Link ownership of all data assets for review and approval.' },
              { icon: <Search />, title: 'Metadata Management', body: 'Steward information assets, data definitions, and manage changes.' },
              { icon: <Lock />, title: 'Secure Analytics Container', body: 'Keep consuming teams in secure containers to protect private data.' },
              { icon: <Layers />, title: 'Data Lineage', body: 'Track data from source to dashboards with complete visibility.' },
              { icon: <Workflow />, title: 'Flexible Workflows', body: 'Define business processes linked directly to automated IT execution.' },
              { icon: <Tag />, title: 'Data Tagging', body: 'Tag attributes as PII or ESG and link them to defined projects.' },
              { icon: <ShieldCheck />, title: 'Regulatory Compliance', body: 'Banking-grade compliance controls — GDPR, CCPA, and DPDP.' },
              { icon: <Settings />, title: 'Data Policy Controls', body: 'Enforce custom-defined policies to control how data is used.' },
              { icon: <FileText />, title: 'Audit', body: 'Audit all data requests, usage, privacy, and project costs.' },
              { icon: <Activity />, title: 'Data Quality Integration', body: 'Monitor quality via dashboards and customizable rules.' },
              { icon: <Globe />, title: 'Multi-Entity & Cross-Border', body: 'Enable cross-border teams with clear approvals and segregation.' },
            ].map((feat, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:border-brand-blue/30 transition-all">
                <div className="text-brand-blue mb-6">{feat.icon}</div>
                <h4 className="font-black text-sm mb-4">{feat.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">{feat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-32 bg-white">
        <div className="max-content">
          <div className="text-center mb-24">
            <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">Why Qvanto</span>
            <h2 className="text-4xl font-black tracking-tighter mb-6">Why Enterprises Choose Qvanto Over the Rest</h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-[40px] border border-gray-100 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="p-8 font-black uppercase tracking-widest text-xs">Feature</th>
                  <th className="p-8 font-black uppercase tracking-widest text-xs">Competitors</th>
                  <th className="p-8 font-black uppercase tracking-widest text-xs">Qvanto</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                {[
                  { f: 'Metadata-Driven', c: 'Few', q: '✅' },
                  { f: 'Multi-Cloud / On-Prem Neutral', c: 'Rare', q: '✅' },
                  { f: 'No Raw Data Moved', c: 'Some', q: '✅' },
                  { f: 'Privacy Automation', c: 'Add-On', q: '✅ Core' },
                  { f: 'ESG-Friendly', c: 'Rare', q: '✅ Core' },
                  { f: 'Deployment Speed', c: 'Months–Years', q: '✅ Weeks' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-8 border-b border-gray-100">{row.f}</td>
                    <td className="p-8 border-b border-gray-100 text-gray-400">{row.c}</td>
                    <td className="p-8 border-b border-gray-100 text-brand-blue font-black">{row.q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ESG Use Case */}
      <section className="py-32 bg-brand-light">
        <div className="max-content">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">Use Case</span>
              <h2 className="text-4xl font-black tracking-tighter mb-8 leading-tight">Data Governance for ESG — WESGaaS</h2>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed font-medium">
                Wholesale Environmental, Social & Governance as a Service. Qvanto's WESGaaS pod supports end-to-end ESG data governance for regulated enterprises.
              </p>
              
              <div className="space-y-4 mb-12">
                {[
                  'External & Internal ESG Data Collection',
                  'ESG Data Asset Curation',
                  'ESG Data Asset Distribution',
                  'ESG Model Build',
                  'ESG Application Hosting',
                  'ESG Dashboards (Power BI)',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-black text-xs">
                      {i + 1}
                    </div>
                    <p className="font-bold text-sm text-brand-dark">{step}</p>
                  </div>
                ))}
              </div>

              <div className="bg-brand-blue text-white p-8 rounded-[30px] shadow-xl">
                <p className="text-xl font-black italic">
                  "93% efficiency gain — Compliance approval time cut from 45 days to 3 days."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-[50px] p-12 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-12">
                  <div className="text-xs font-black uppercase tracking-widest text-gray-300">ESG Performance</div>
                  <BarChart3 className="text-brand-blue" />
                </div>
                <div className="space-y-8">
                  <div className="h-4 bg-gray-50 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue w-[85%]"></div>
                  </div>
                  <div className="h-4 bg-gray-50 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 w-[60%]"></div>
                  </div>
                  <div className="h-4 bg-gray-50 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 w-[45%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Scenarios */}
      <section className="py-32 bg-white">
        <div className="max-content">
          <div className="text-center mb-24">
            <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">Solutions</span>
            <h2 className="text-4xl font-black tracking-tighter mb-6">Every Critical Data Scenario. One Platform.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldAlert />, title: 'Incident Response', body: 'Real-time data visibility allows rapid response to breaches.' },
              { icon: <CheckCircle2 />, title: 'Data Compliance', body: 'Stay compliant with GDPR, CCPA, DPDB, and HIPAA automatically.' },
              { icon: <Lock />, title: 'Data Loss Prevention', body: 'Enforce DLP strategies to protect sensitive data at every layer.' },
              { icon: <ShieldCheck />, title: 'Ransomware Defense', body: 'Early detection and mitigation of ransomware attacks.' },
              { icon: <ArrowRight />, title: 'Cyber Insurance', body: 'Demonstrate robust monitoring to qualify for coverage.' },
              { icon: <RotateCcw />, title: 'Business Continuity', body: 'Maintain operations seamlessly during disasters.' },
            ].map((card, i) => (
              <div key={i} className="p-12 border border-gray-100 rounded-[40px] hover:shadow-xl transition-all">
                <div className="text-brand-blue mb-8">{card.icon}</div>
                <h4 className="font-black text-lg mb-4">{card.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 bg-gray-50">
        <div className="max-content">
          <div className="text-center mb-24">
            <span className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4 block">Pricing</span>
            <h2 className="text-4xl font-black tracking-tighter mb-6">Flexible Plans for Every Enterprise</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Base Tier', desc: 'Automation + Governance', price: '₹2–4L / year', btn: 'Get Started' },
              { name: 'Enterprise Tier', desc: 'Full AI Enablement', price: '₹10–15L / year', btn: 'Talk to Sales', highlight: true },
              { name: 'Consultancy', desc: 'Implementation for large enterprises', price: 'Custom Pricing', btn: 'Contact Us' },
            ].map((plan, i) => (
              <div key={i} className={`p-12 rounded-[50px] flex flex-col ${plan.highlight ? 'bg-brand-blue text-white shadow-2xl scale-105 relative z-10' : 'bg-white border border-gray-100'}`}>
                <h4 className="font-black text-xl mb-2">{plan.name}</h4>
                <p className={`text-sm mb-12 font-medium ${plan.highlight ? 'text-white/80' : 'text-gray-400'}`}>{plan.desc}</p>
                <div className="text-3xl font-black mb-12 tracking-tighter">{plan.price}</div>
                <button className={`mt-auto py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all ${plan.highlight ? 'bg-brand-dark text-white hover:bg-white hover:text-brand-blue' : 'bg-brand-blue text-white hover:bg-brand-dark'}`}>
                  {plan.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
