import React from "react";
import DietitianLayout from "../../layouts/dietitian/DietitianLayout";
import {
  dietitianStats,
  upcomingConsultations,
  patientOverview,
  workload,
} from "../../data";

const Dashboard = () => {
  return (
    <DietitianLayout>
      <div className="space-y-6">
        
        {/* ==================== 1. TOP SUMMARY CARDS ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Total Patients */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-gray-500">Total Patients</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {dietitianStats.totalPatients.toLocaleString()}
              </h3>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              {dietitianStats.totalPatientsGrowth} ↗
            </span>
          </div>

          {/* Pending Requests */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-gray-500">Pending Requests</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {dietitianStats.pendingRequests}
              </h3>
            </div>
            <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
              Action Needed
            </span>
          </div>

          {/* Today's Appointments */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-gray-500">Today's Appointments</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {dietitianStats.todaysAppointments}
              </h3>
            </div>
            <span className="text-xs font-medium text-gray-500">
              {dietitianStats.appointmentsRemaining} remaining
            </span>
          </div>

          {/* Unread Messages */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-gray-500">Unread Messages</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {dietitianStats.unreadMessages}
              </h3>
            </div>
            <span className="w-2.5 h-2.5 bg-rose-500 rounded-full"></span>
          </div>

        </div>

        {/* ==================== 2. MAIN GRID LAYOUT ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN (Upcoming Consultations & Patient Table) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Upcoming Consultations */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-gray-800">Upcoming Consultations</h2>
                <button className="text-xs font-semibold text-blue-600 hover:underline">
                  View Calendar →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {upcomingConsultations.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-blue-50/50 border-l-4 border-blue-600 rounded-r-lg flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-gray-500 block">
                        {item.time}
                      </span>
                      <p className="font-semibold text-sm text-gray-900">
                        {item.patientName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.type} • {item.mode}
                      </p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 font-bold">⋮</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Overview Table */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-gray-800">Patient Overview</h2>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs border rounded-md text-gray-600 hover:bg-gray-50">
                    Filters
                  </button>
                  <button className="px-3 py-1 text-xs border rounded-md text-gray-600 hover:bg-gray-50">
                    Export
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b text-xs uppercase font-semibold text-gray-400 bg-gray-50">
                      <th className="py-2 px-3">Name</th>
                      <th className="py-2 px-3">Status</th>
                      <th className="py-2 px-3">Last Report</th>
                      <th className="py-2 px-3">Primary Goal</th>
                      <th className="py-2 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {patientOverview.map((patient) => (
                      <tr key={patient.id} className="hover:bg-gray-50/80">
                        <td className="py-3 px-3 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                            {patient.initials}
                          </span>
                          <span className="font-medium text-gray-800">{patient.name}</span>
                        </td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              patient.status === "ACTIVE"
                                ? "bg-emerald-100 text-emerald-700"
                                : patient.status === "REVIEWING"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {patient.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-gray-500 text-xs">{patient.lastReport}</td>
                        <td className="py-3 px-3 text-gray-700 text-xs font-medium">
                          {patient.primaryGoal}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button className="text-gray-400 hover:text-blue-600 text-xs">✏️</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-center mt-4 pt-3 border-t">
                <button className="text-xs font-semibold text-blue-600 hover:underline">
                  View All Patients
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Quick Actions & Workload) */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="font-bold text-gray-800 mb-3">Quick Actions</h2>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50/50 hover:border-blue-200 transition text-sm font-medium text-gray-700">
                  <span className="flex items-center gap-2">🍴 Create Meal Plan</span>
                  <span className="text-gray-400">›</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50/50 hover:border-blue-200 transition text-sm font-medium text-gray-700">
                  <span className="flex items-center gap-2">📤 Upload Guide</span>
                  <span className="text-gray-400">›</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50/50 hover:border-blue-200 transition text-sm font-medium text-gray-700">
                  <span className="flex items-center gap-2">💬 Start Chat</span>
                  <span className="text-gray-400">›</span>
                </button>
              </div>
            </div>

            {/* Weekly Consultation Load */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
              <h2 className="font-bold text-gray-800">Weekly Consultation Load</h2>
              
              {/* Clinical Sessions Progress Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-gray-600">Clinical Sessions</span>
                  <span className="text-gray-800">
                    {workload.clinicalSessions.current} / {workload.clinicalSessions.target} {workload.clinicalSessions.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${(workload.clinicalSessions.current / workload.clinicalSessions.target) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Meal Plan Reviews Progress Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-gray-600">Meal Plan Reviews</span>
                  <span className="text-gray-800">
                    {workload.mealPlanReviews.current} / {workload.mealPlanReviews.target}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full"
                    style={{
                      width: `${(workload.mealPlanReviews.current / workload.mealPlanReviews.target) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </DietitianLayout>
  );
};

export default Dashboard;