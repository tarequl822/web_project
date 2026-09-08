import React from "react";
import DietitianLayout from "../../layouts/dietitian/DietitianLayout";
import { patientDetails } from "../../data";

const Patients = () => {
  return (
    <DietitianLayout>
      <div className="space-y-6">
        
        {/* ==================== 1. PATIENT HEADER ==================== */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-gray-900">{patientDetails.name}</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                {patientDetails.status}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mt-2">
              <span>🆔 Patient ID: <strong>{patientDetails.id}</strong></span>
              <span>🎂 {patientDetails.age} years</span>
              <span>✉️ {patientDetails.email}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
              ✏️ Edit Profile
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold shadow-sm transition">
              + Log Entry
            </button>
          </div>
        </div>

        {/* ==================== 2. TOP METRIC CARDS ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: BMI */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-gray-400 uppercase">
              <span>Body Mass Index</span>
              <span>📊</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{patientDetails.bmi.value}</span>
              <span className="text-sm font-semibold text-emerald-600">{patientDetails.bmi.status}</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[65%] rounded-full"></div>
            </div>
            <p className="text-[11px] text-gray-400">Range: {patientDetails.bmi.range}</p>
          </div>

          {/* Card 2: Avg Daily Calorie */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-gray-400 uppercase">
              <span>Avg Daily Calorie</span>
              <span>🔥</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-gray-900">
                {patientDetails.avgCalories.value.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500">kcal</span>
            </div>
            <p className="text-xs font-medium text-amber-600">
              📈 {patientDetails.avgCalories.percentage} ({patientDetails.avgCalories.target} kcal target)
            </p>
          </div>

          {/* Card 3: Current Weight */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-gray-400 uppercase">
              <span>Current Weight</span>
              <span>⚖️</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-gray-900">{patientDetails.weight.current}</span>
              <span className="text-sm text-gray-500">{patientDetails.weight.unit}</span>
            </div>
            <p className="text-xs font-medium text-emerald-600">
              📉 {patientDetails.weight.change}
            </p>
          </div>

        </div>

        {/* ==================== 3. MAIN DASHBOARD CONTENT GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Medical History, Meals, Lifestyle (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Medical History */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
              <h2 className="font-bold text-gray-800 text-base">🏥 Medical History</h2>
              
              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase mb-1">Allergies</p>
                <div className="flex flex-wrap gap-1.5">
                  {patientDetails.medicalHistory.allergies.map((allergy, i) => (
                    <span key={i} className="px-2.5 py-1 bg-rose-50 text-rose-600 rounded-md text-xs font-semibold">
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase mb-1">Blood Type</p>
                <p className="text-sm font-semibold text-gray-800">{patientDetails.medicalHistory.bloodType}</p>
              </div>

              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase mb-1">Conditions</p>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-0.5">
                  {patientDetails.medicalHistory.conditions.map((cond, i) => (
                    <li key={i}>{cond}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recent Meals */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-gray-800 text-base">🥗 Recent Meals</h2>
                <button className="text-xs font-semibold text-blue-600 hover:underline">View All</button>
              </div>

              <div className="space-y-2">
                {patientDetails.recentMeals.map((meal) => (
                  <div key={meal.id} className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-sm text-gray-800">{meal.name}</p>
                      <p className="text-xs text-gray-500">
                        {meal.calories} kcal • {meal.protein} Protein • {meal.carbs} Carbs
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-white border text-gray-600 text-xs rounded font-medium">
                      {meal.mealType}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle Stats */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <h2 className="font-bold text-gray-800 text-base">🌙 Lifestyle Stats</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-50/50 border rounded-lg text-center">
                  <p className="text-xl font-bold text-blue-900">{patientDetails.lifestyle.sleepAvg}</p>
                  <p className="text-xs font-medium text-gray-500">Sleep Avg</p>
                </div>
                <div className="p-3 bg-cyan-50/50 border rounded-lg text-center">
                  <p className="text-xl font-bold text-cyan-900">{patientDetails.lifestyle.waterAvg}</p>
                  <p className="text-xs font-medium text-gray-500">Water Avg</p>
                </div>
              </div>
            </div>

          </div>

          {/* MIDDLE COLUMN: Weight Trend & Calorie Bars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Weight Trend Chart */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-bold text-gray-800 text-base">Weight Trend</h2>
                  <p className="text-xs text-gray-400">Past 30 days evolution</p>
                </div>
                <div className="flex gap-1 text-xs bg-gray-100 p-1 rounded-md font-semibold text-gray-500">
                  <button className="px-2 py-0.5 bg-white rounded shadow-sm text-gray-800">30D</button>
                  <button className="px-2 py-0.5 hover:text-gray-800">90D</button>
                  <button className="px-2 py-0.5 hover:text-gray-800">1Y</button>
                </div>
              </div>

              {/* Clean SVG Trend Line Graph */}
              <div className="h-44 w-full flex flex-col justify-end">
                <svg className="w-full h-32" viewBox="0 0 300 100" preserveAspectRatio="none">
                  <path
                    d="M 10 80 Q 75 60, 150 50 T 290 20"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                  />
                  <circle cx="10" cy="80" r="4" fill="#2563eb" />
                  <circle cx="80" cy="62" r="4" fill="#2563eb" />
                  <circle cx="150" cy="50" r="4" fill="#2563eb" />
                  <circle cx="220" cy="38" r="4" fill="#2563eb" />
                  <circle cx="290" cy="20" r="4" fill="#2563eb" />
                </svg>
                <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase mt-2">
                  <span>AUG 01</span>
                  <span>AUG 08</span>
                  <span>AUG 15</span>
                  <span>AUG 22</span>
                  <span>AUG 30</span>
                </div>
              </div>
            </div>

            {/* Calorie Intake vs Target Progress */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
              <h2 className="font-bold text-gray-800 text-base">Calorie Intake vs Target</h2>
              <div className="space-y-4">
                {patientDetails.calorieIntakeVsTarget.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-700">{item.day}</span>
                      <span className="text-gray-900 font-bold">
                        {item.intake.toLocaleString()} / {item.target.toLocaleString()} kcal
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`${item.barColor} h-full rounded-full`}
                        style={{ width: `${Math.min((item.intake / item.target) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Clinical Notes & Protocol Actions (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Clinical Notes */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <h2 className="font-bold text-gray-800 text-base">Clinical Notes</h2>
              <p className="text-[11px] font-bold text-gray-400 uppercase">Latest Recommendation</p>
              <blockquote className="p-3 bg-gray-50 border-l-2 border-blue-600 text-xs italic text-gray-700 rounded-r-md leading-relaxed">
                "{patientDetails.clinicalNotes.latestRecommendation}"
              </blockquote>
              <p className="text-[10px] text-gray-400 text-right">
                Last updated: {patientDetails.clinicalNotes.lastUpdated}
              </p>
            </div>

            {/* Quick Protocol Actions */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <p className="text-[11px] font-bold text-gray-400 uppercase">Quick Protocol Actions</p>
              <div className="space-y-2">
                <button className="w-full text-left p-2.5 border rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  📄 Download Labs
                </button>
                <button className="w-full text-left p-2.5 border rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  💬 Message Patient
                </button>
                <button className="w-full text-center p-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm">
                  🍴 Assign Meal Plan
                </button>
                <button className="w-full text-center p-2.5 border border-blue-200 text-blue-600 hover:bg-blue-50 text-xs font-bold rounded-lg">
                  Review Progress Log
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </DietitianLayout>
  );
};

export default Patients;