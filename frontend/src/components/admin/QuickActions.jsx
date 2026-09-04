import React from "react";
import {
  MdAddModerator,
  MdHealthAndSafety,
  MdMail,
  MdStorage,
} from "react-icons/md";

const actions = [
  {
    id: 1,
    title: "Audit Security",
    icon: MdAddModerator,
  },
  {
    id: 2,
    title: "Backup Data",
    icon: MdStorage,
  },
  {
    id: 3,
    title: "Notify Users",
    icon: MdMail,
  },
  {
    id: 4,
    title: "Compliance",
    icon: MdHealthAndSafety,
  },
];

const QuickActions = () => {
  return (
    <div className="rounded-2xl border border-[#c2c6d6] bg-white p-7 shadow-sm">
      <h3 className="mb-5 text-xl font-semibold">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.id}
              className="group flex flex-col items-center gap-2 rounded-xl border border-[#c2c6d6] p-5 transition hover:border-[#0058be] hover:bg-[#f2f3fd]"
            >
              <Icon
                size={23}
                className="text-[#0058be] transition group-hover:scale-110"
              />

              <span className="text-xs font-semibold">
                {action.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;