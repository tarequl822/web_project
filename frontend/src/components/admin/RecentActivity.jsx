import React from "react";
import {
  MdEmojiEvents,
  MdFileUpload,
  MdPersonAdd,
  MdSecurity,
  MdSystemUpdate,
  MdMoreVert,
} from "react-icons/md";

const iconMap = {
  person: MdPersonAdd,
  update: MdSystemUpdate,
  export: MdFileUpload,
  security: MdSecurity,
  goal: MdEmojiEvents,
};

const typeStyles = {
  primary: "bg-[#d8e2ff] text-[#0058be]",
  secondary: "bg-[#6cf8bb] text-[#006c49]",
  tertiary: "bg-[#ffddb8] text-[#825100]",
  error: "bg-[#ffdad6] text-[#ba1a1a]",
};

const RecentActivity = ({ activities }) => {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#c2c6d6] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#c2c6d6] bg-[#f2f3fd] p-6">
        <h2 className="text-xl font-semibold">
          Recent Activity
        </h2>

        <MdMoreVert
          size={23}
          className="cursor-pointer text-[#727785]"
        />
      </div>

      <div className="divide-y divide-[#e1e2ec]">
        {activities.map((activity) => {
          const Icon = iconMap[activity.icon];

          return (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-6 transition hover:bg-[#f2f3fd]"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${typeStyles[activity.type]}`}
              >
                <Icon size={21} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-base font-medium text-[#191b23]">
                  {activity.title}
                </p>

                <p className="mt-1 text-sm text-[#424754]">
                  {activity.description}
                </p>
              </div>

              <span className="shrink-0 text-xs font-semibold text-[#727785]">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentActivity;