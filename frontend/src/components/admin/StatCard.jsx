import React from "react";
import {
  MdAnalytics,
  MdFastfood,
  MdMedicalServices,
  MdPeople,
  MdTrendingUp,
} from "react-icons/md";

const icons = {
  users: MdPeople,
  dietitian: MdMedicalServices,
  meal: MdFastfood,
  reports: MdAnalytics,
};

const StatCard = ({ stat }) => {
  const Icon = icons[stat.icon];

  const iconStyles = {
    primary: "bg-[#d8e2ff] text-[#0058be]",
    secondary: "bg-[#6cf8bb] text-[#006c49]",
    tertiary: "bg-[#ffddb8] text-[#825100]",
  };

  return (
    <div className="rounded-2xl border border-[#c2c6d6] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-5 flex items-start justify-between">
        <div
          className={`rounded-lg p-2.5 ${iconStyles[stat.type]}`}
        >
          <Icon size={23} />
        </div>

        <span className="flex items-center rounded-full bg-[#6cf8bb] px-2.5 py-1 text-xs font-semibold text-[#006c49]">
          <MdTrendingUp size={15} className="mr-1" />

          {stat.change}
        </span>
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-[#424754]">
        {stat.title}
      </p>

      <h3 className="mt-2 text-[32px] font-bold leading-10 text-[#191b23]">
        {stat.value}
      </h3>
    </div>
  );
};

export default StatCard;