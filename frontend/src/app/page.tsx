"use client";

import GlowChat from "@/components/GlowChat";
import Footer from "@/components/Footer";
import data from "./data.json";

export default function Home() {
  // Features list for homepage, can be extended or localized as needed
  const features = [
    {
      icon: (
        // Placeholder: Replace with a real SVG or image if available
        <svg className="w-8 h-8 text-[#007BFF]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "مساعد ذكي فوري",
      desc: "تواصل مع مساعد ذكي يرد على استفساراتك مباشرة."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#fbbf24]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#fbbf24" strokeWidth="2" fill="none" />
          <path stroke="#f472b6" strokeWidth="2" d="M12 6v6l4 2" />
        </svg>
      ),
      title: "تأثير بصري متوهج",
      desc: "واجهة دردشة مع تأثير متوهج متحرك وجذاب."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#28A745]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="4" stroke="#28A745" strokeWidth="2" fill="none" />
          <path stroke="#007BFF" strokeWidth="2" d="M8 12h8" />
        </svg>
      ),
      title: "دعم كامل للأجهزة",
      desc: "تجربة متكاملة على جميع الأجهزة المحمولة وسطح المكتب."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#a78bfa]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path stroke="#a78bfa" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      ),
      title: "واجهة عربية عصرية",
      desc: "تصميم عربي حديث مع خطوط واضحة وسهلة القراءة."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative bg-[#F8F9FA]">
      <div className="max-w-2xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          {/* Placeholder: Replace with a real logo image if available */}
          <div className="w-16 h-16 rounded-full bg-[#007BFF] flex items-center justify-center text-white text-3xl font-bold shadow-lg select-none">
            G
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          {data.heroTitlePrefix}
          <span className="text-[#007BFF]"> {data.companyName}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          {data.heroDescription}
        </p>
        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-xl shadow p-4 border border-gray-100"
            >
              <div className="mb-2">{feature.icon}</div>
              <h3 className="font-bold text-[#007BFF] mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <GlowChat />
      <Footer />
    </main>
  );
}
