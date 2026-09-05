import React from 'react';
import {
  LayoutDashboard,
  Utensils,
  HeartPulse,
  BarChart3,
  MessageSquare,
  Settings,
  Search,
  Bell,
  Plus,
  ChevronDown,
  ArrowRight,
  Activity,
  Droplets,
  Scale
} from 'lucide-react';
import logo from '../assets/images/logo.jpg';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col justify-between font-sans">
      
      {/* Main Container with Sidebar + Content */}
      <div className="flex flex-1">
        
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200/80 p-6 flex flex-col justify-between shrink-0 hidden md:flex">
          <div>
            {/* App Logo */}
            <div className="flex items-center gap-2 mb-8">
              <img src={logo} alt="Smart Health and Diet Recommendation System" className="h-12 w-12 rounded-xl object-cover" />
              <span className="text-lg font-bold text-[#1E3A8A] tracking-tight">
                Smart Health &amp; Diet
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-1">
              <a href="#dashboard" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 font-medium rounded-xl transition-colors">
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </a>
              <a href="#meals" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
                <Utensils className="w-5 h-5" />
                Meals
              </a>
              <a href="#health" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
                <HeartPulse className="w-5 h-5" />
                Health Info
              </a>
              <a href="#reports" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
                <BarChart3 className="w-5 h-5" />
                Reports
              </a>
              <a href="#chat" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
                <MessageSquare className="w-5 h-5" />
                Chat
              </a>
            </nav>
          </div>

          {/* Sidebar Footer Settings */}
          <div className="pt-6 border-t border-slate-100">
            <a href="#settings" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
              <Settings className="w-5 h-5" />
              Settings
            </a>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          
          {/* Top Header */}
          <header className="bg-white border-b border-slate-200/80 px-8 py-4 flex items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search data, meals, or reports..."
                className="w-full pl-10 pr-4 py-2 bg-slate-100/80 border border-transparent rounded-full text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 transition-all"
              />
            </div>

            {/* Profile & Notifications */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Sarah Jenkins"
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <span className="text-sm font-semibold text-slate-700">Sarah Jenkins</span>
              </div>
            </div>
          </header>

          {/* Page Body */}
          <main className="p-8 max-w-7xl w-full mx-auto space-y-6">
            
            {/* Banner Section */}
            <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Welcome back, Sarah!
              </h1>
              <div className="flex items-center gap-3">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2.5 rounded-xl font-medium text-sm transition-colors flex items-center gap-1.5">
                  <Plus className="w-4 h-4" /> Log Meal
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl font-medium text-sm border border-white/20 transition-colors flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4" /> Dietitian
                </button>
              </div>
            </div>

            {/* Top Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Calories Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center text-center justify-between">
                <span className="text-sm font-medium text-slate-500">Calories</span>
                
                {/* Circular Progress Representation */}
                <div className="relative w-32 h-32 my-4 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-blue-600"
                      strokeDasharray="75, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-xl font-bold text-slate-900">1,640</span>
                    <span className="text-xs text-slate-400">of 2,200</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 font-medium">75% of your daily limit reached</p>
              </div>

              {/* Water Intake Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <span className="text-sm font-medium text-slate-500">Water Intake</span>
                
                {/* Mock Bar Graph */}
                <div className="flex items-end justify-between h-24 my-3 px-2 gap-2">
                  <div className="w-full bg-blue-600 rounded-t h-[30%]" />
                  <div className="w-full bg-blue-600 rounded-t h-[50%]" />
                  <div className="w-full bg-blue-600 rounded-t h-[75%]" />
                  <div className="w-full bg-blue-600 rounded-t h-[60%]" />
                  <div className="w-full bg-blue-600 rounded-t h-[70%]" />
                  <div className="w-full bg-blue-600 rounded-t h-[95%]" />
                  <div className="w-full bg-blue-600 rounded-t h-[80%]" />
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                  <div>
                    <span className="text-lg font-bold text-slate-900">1.8 L</span>
                    <span className="text-xs text-slate-400 block">GOAL: 2.5 L</span>
                  </div>
                  <button className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Sleep Duration Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-sm font-medium text-slate-500">Sleep Duration</span>
                  <div className="text-3xl font-bold text-slate-900 mt-2">7h 45m</div>
                </div>

                <div className="my-6">
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-amber-700 h-2.5 rounded-full w-[88%]" />
                  </div>
                </div>

                <p className="text-xs text-slate-500">Quality Score: <span className="font-semibold text-slate-700">88/100</span></p>
              </div>

            </div>

            {/* Middle Analytics Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Weight Progress Graph Placeholder */}
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold text-slate-800">Weight Progress</h2>
                  <button className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                    Last 30 Days <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Plot Canvas Representation */}
                <div className="h-44 w-full flex flex-col justify-between border-b border-slate-100 relative mb-4">
                  <div className="w-full border-t border-dashed border-slate-100" />
                  <div className="w-full border-t border-dashed border-slate-100" />
                  <div className="w-full border-t border-dashed border-slate-100" />
                  
                  {/* Scatter Dots Visual */}
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full -translate-y-8" />
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full -translate-y-6" />
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full -translate-y-2" />
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full translate-y-1" />
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full translate-y-3" />
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full translate-y-6" />
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full translate-y-9" />
                  </div>
                </div>

                {/* X-Axis Dates */}
                <div className="flex justify-between text-xs text-slate-400 px-2 font-medium">
                  <span>1 MAY</span>
                  <span>7 MAY</span>
                  <span>14 MAY</span>
                  <span>21 MAY</span>
                  <span>28 MAY</span>
                </div>
              </div>

              {/* BMI and Active Minutes Cards Stack */}
              <div className="flex flex-col gap-6">
                
                {/* BMI Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex-1">
                  <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Current BMI</span>
                  <div className="flex items-center gap-3 my-2">
                    <span className="text-3xl font-black text-slate-900">22.4</span>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase">
                      Normal Weight
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    You are within the healthy range for your height.
                  </p>
                </div>

                {/* Active Minutes Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex-1">
                  <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Active Minutes</span>
                  <div className="text-3xl font-black text-slate-900 my-2">48m</div>
                  
                  <div className="space-y-2 text-xs font-medium border-t border-slate-100 pt-3 mt-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Cardio</span>
                      <span className="text-emerald-600 font-bold">32m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Strength</span>
                      <span className="text-blue-600 font-bold">16m</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Row Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Today's Meal Summary */}
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-slate-800">Today's Meal Summary</h2>
                  <a href="#meals" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    View Plan <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Meal Item 1 */}
                  <div className="bg-slate-50 p-3.5 rounded-xl flex items-center gap-3 border border-slate-100">
                    <img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=100&auto=format&fit=crop&q=80" alt="Oatmeal" className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">Breakfast</span>
                      <h3 className="text-sm font-bold text-slate-800">Berry Oatmeal</h3>
                      <p className="text-xs text-slate-500">420 kcal • Logged</p>
                    </div>
                  </div>

                  {/* Meal Item 2 */}
                  <div className="bg-slate-50 p-3.5 rounded-xl flex items-center gap-3 border border-slate-100">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&auto=format&fit=crop&q=80" alt="Chicken Salad" className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">Lunch</span>
                      <h3 className="text-sm font-bold text-slate-800">Grilled Chicken Salad</h3>
                      <p className="text-xs text-slate-500">580 kcal • Logged</p>
                    </div>
                  </div>

                  {/* Meal Item 3 */}
                  <div className="bg-slate-50/50 p-3.5 rounded-xl flex items-center gap-3 border border-dashed border-slate-200">
                    <div className="w-12 h-12 rounded-lg bg-slate-200/60 flex items-center justify-center text-slate-400">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">Dinner</span>
                      <h3 className="text-sm font-bold text-slate-700">Planned: Grilled Salmon</h3>
                      <p className="text-xs text-slate-400">650 kcal • Upcoming</p>
                    </div>
                  </div>

                  {/* Meal Item 4 */}
                  <div className="bg-slate-50 p-3.5 rounded-xl flex items-center gap-3 border border-slate-100">
                    <img src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=100&auto=format&fit=crop&q=80" alt="Nuts" className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">Snacks</span>
                      <h3 className="text-sm font-bold text-slate-800">Mixed Nuts</h3>
                      <p className="text-xs text-slate-500">180 kcal • Logged</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <h2 className="font-bold text-slate-800 mb-4">Recent Activity</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full mt-0.5">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-800">Morning Workout</h3>
                      <p className="text-xs text-slate-500">32 min High Intensity Cardio</p>
                      <span className="text-[10px] text-slate-400">8:15 AM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-full mt-0.5">
                      <Droplets className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-800">Water intake</h3>
                      <p className="text-xs text-slate-500">Drank 500ml water</p>
                      <span className="text-[10px] text-slate-400">10:30 AM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-rose-100 text-rose-600 rounded-full mt-0.5">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-800">Weight Update</h3>
                      <p className="text-xs text-slate-500">68.5 kg (-0.4 kg)</p>
                      <span className="text-[10px] text-slate-400">7:45 AM</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors">
                  See All Activity
                </button>
              </div>

            </div>

          </main>

          {/* Footer */}
          <footer className="border-t border-slate-200/80 bg-white py-4 px-8 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2 mt-auto">
            <div>
              © 2026 Smart Health & Diet Recommendation System. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-slate-800">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-800">Terms of Service</a>
              <a href="#accessibility" className="hover:text-slate-800">Accessibility</a>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}