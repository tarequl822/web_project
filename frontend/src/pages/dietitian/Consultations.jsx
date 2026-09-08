import React, { useState } from "react";
import DietitianLayout from "../../layouts/dietitian/DietitianLayout";
import { consultations, consultationMessages } from "../../data";

const Consultations = () => {
  // State for active chat selection and live text entry
  const [activeChatId, setActiveChatId] = useState(1);
  const [messages, setMessages] = useState(consultationMessages);
  const [inputText, setInputText] = useState("");

  const activePatient = consultations.find((c) => c.id === activeChatId) || consultations[0];
  const activeChatMessages = messages[activeChatId] || [];

  // Handler for sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "dietitian",
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMessage],
    }));

    setInputText("");
  };

  return (
    <DietitianLayout>
      <div className="h-[calc(100vh-7rem)] bg-white rounded-xl border border-gray-200 shadow-sm flex overflow-hidden">
        
        {/* ==================== LEFT INNER PANE: CONSULTATION LIST ==================== */}
        <div className="w-80 border-r border-gray-200 flex flex-col bg-gray-50/50">
          
          {/* Search Bar Header */}
          <div className="p-4 border-b border-gray-200 bg-white">
            <h2 className="font-bold text-gray-800 text-lg mb-2">Consultations</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Find a patient or chat..."
                className="w-full bg-gray-100 border border-transparent rounded-lg py-1.5 px-3 pl-8 text-xs focus:bg-white focus:border-gray-300 focus:outline-none"
              />
              <span className="absolute left-2.5 top-2 text-gray-400 text-xs">🔍</span>
            </div>
          </div>

          {/* Conversations Scroll List */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
            {consultations.map((item) => {
              const isSelected = item.id === activeChatId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveChatId(item.id)}
                  className={`w-full text-left p-3.5 flex items-start gap-3 transition ${
                    isSelected
                      ? "bg-blue-50/80 border-l-4 border-blue-600"
                      : "hover:bg-gray-100/80"
                  }`}
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                      {item.avatar}
                    </div>
                    {item.online && (
                      <span className="w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full absolute bottom-0 right-0"></span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <p className="font-bold text-sm text-gray-900 truncate">{item.patientName}</p>
                      <span className="text-[10px] text-gray-400 ml-1">{item.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{item.lastMessage}</p>
                  </div>

                  {item.unreadCount > 0 && (
                    <span className="w-4 h-4 bg-blue-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                      {item.unreadCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* ==================== RIGHT INNER PANE: ACTIVE CHAT ==================== */}
        <div className="flex-1 flex flex-col bg-white">
          
          {/* Active Chat Header */}
          <div className="h-16 border-b border-gray-200 px-6 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                {activePatient.avatar}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm leading-tight">
                  {activePatient.patientName}
                </h3>
                <p className="text-xs text-emerald-600 font-medium">
                  Patient ID: {activePatient.patientId} • {activePatient.online ? "Online" : "Offline"}
                </p>
              </div>
            </div>

            {/* Quick Consultation Tools */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-sm">
                📹
              </button>
              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-sm">
                📞
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg text-sm">
                ⋮
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50/30">
            
            {/* Date Divider */}
            <div className="flex justify-center my-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-[10px] font-bold uppercase tracking-wider">
                TODAY
              </span>
            </div>

            {/* Render Chat Messages */}
            {activeChatMessages.map((msg) => {
              const isDietitian = msg.sender === "dietitian";
              return (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 ${
                    isDietitian ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isDietitian && (
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mb-1">
                      {activePatient.avatar}
                    </div>
                  )}

                  <div className={`max-w-md space-y-1`}>
                    <div
                      className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                        isDietitian
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-gray-100 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>

                    <p
                      className={`text-[10px] text-gray-400 ${
                        isDietitian ? "text-right" : "text-left"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Digital Prescription Attachment Card */}
            {activeChatId === 1 && (
              <div className="max-w-sm ml-auto bg-white border border-gray-200 rounded-xl p-4 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📄</span>
                    <div>
                      <p className="font-bold text-xs text-gray-900">Digital Prescription</p>
                      <p className="text-[10px] text-gray-400">Auth No: VP-8829-X</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded">
                    Active
                  </span>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-medium text-gray-700">
                    <span>Vitamin D3 (Cholecalciferol)</span>
                    <span className="font-bold">2000 IU / Day</span>
                  </div>
                  <p className="text-[11px] text-gray-500">
                    Take one capsule every morning with breakfast. Continue for 90 days.
                  </p>
                </div>

                <button className="w-full py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold text-xs rounded-lg transition border border-blue-200">
                  📥 Download Official Copy
                </button>
              </div>
            )}

          </div>

          {/* Chat Footer / Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="p-4 border-t border-gray-200 bg-white flex items-center gap-3"
          >
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 text-lg p-1"
            >
              📎
            </button>

            <input
              type="text"
              placeholder="Search consultations, files, or messages..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-gray-100 border border-transparent rounded-full py-2 px-4 text-xs focus:bg-white focus:border-gray-300 focus:outline-none"
            />

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full shadow-sm transition"
            >
              Send
            </button>
          </form>

        </div>

      </div>
    </DietitianLayout>
  );
};

export default Consultations;