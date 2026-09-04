import React from "react";

const ActiveSessionsChart = ({ data }) => {
  return (
    <section className="flex min-h-[410px] flex-col rounded-2xl border border-[#c2c6d6] bg-white p-7 shadow-sm">
      <h2 className="text-xl font-semibold text-[#191b23]">
        Daily Active Sessions
      </h2>

      <p className="mt-1 text-sm text-[#424754]">
        Peak system load analysis
      </p>

      <div className="mt-8 flex flex-1 items-end justify-between gap-3">
        {data.map((item, index) => (
          <div
            key={`${item.day}-${index}`}
            className="flex h-full flex-1 items-end"
          >
            <div
              className="w-full rounded-t-xl bg-[#4edea3] transition hover:bg-[#006c49]"
              style={{
                height: `${item.value}%`,
              }}
              title={`${item.value}%`}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-between text-xs font-semibold text-[#424754]">
        {data.map((item, index) => (
          <span key={`${item.day}-${index}`}>
            {item.day}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ActiveSessionsChart;
