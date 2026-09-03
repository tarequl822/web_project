import React from 'react';
import { ArrowRight, Activity, Heart, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 text-slate-800 flex flex-col justify-between font-sans relative overflow-hidden select-none">
      
      {/* Background Soft Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 z-10 max-w-4xl mx-auto w-full text-center">
        
        {/* Brand Logo & Tag */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-slate-100 flex items-center justify-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Activity className="w-7 h-7" />
            </div>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200/50">
            Smart Health Platform
          </span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smart Health & Diet</span><br className="hidden sm:inline" /> Recommendation System
        </h1>
        
        <p className="text-slate-600 text-sm sm:text-lg max-w-xl mb-8 leading-relaxed font-normal">
          Your personalized journey to a healthier lifestyle starts here.<br className="hidden sm:inline" /> 
          Leverage data-driven insights to reach your fitness and dietary goals.
        </p>

        {/* Hero Card Container */}
        <div className="w-full max-w-xl bg-white/70 backdrop-blur-md rounded-3xl shadow-xl shadow-slate-200/60 border border-white p-6 sm:p-8 mb-8 transition-all duration-300 hover:shadow-2xl hover:bg-white/90">
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-50 to-indigo-50/50 p-4">
            <img
              src="https://img.freepik.com/free-vector/healthy-lifestyle-concept-illustration_114360-7212.jpg" 
              alt="Healthy Lifestyle Illustration"
              className="w-full h-auto object-contain max-h-64 sm:max-h-72 mx-auto mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          {/* Micro Features Row */}
          <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100/80 text-xs text-slate-500">
            <div className="flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Personalized Plans</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Data-Driven Insights</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleGetStarted}
          className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-base px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-200 flex items-center gap-3 group cursor-pointer"
        >
          Get Started
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200/60 bg-white/60 backdrop-blur-md py-4 px-6 text-xs text-slate-500 z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © 2026 Smart Health & Diet Recommendation System. All rights reserved.
          </div>
          <div className="flex gap-6 font-medium">
            <a href="#privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}