import React from "react";

const UserGrowthChart = ({ data }) => {
  const points = data
    .map((item, index) => {
      const x = (index / (data.length - 1)) * 1000;
      const y = 190 - item.value * 1.75;

      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `0,200 ${points} 1000,200`;

  return (
    <section className="rounded-2xl border border-[#c2c6d6] bg-white p-7 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#191b23]">
            User Growth Trends
          </h2>

          <p className="text-sm text-[#424754]">
            Performance monitoring for the last 12 months
          </p>
        </div>

        <div className="flex gap-2">
          <button className="rounded-full border border-[#c2c6d6] px-4 py-2 text-xs font-semibold">
            Weekly
          </button>

          <button className="rounded-full bg-[#0058be] px-4 py-2 text-xs font-semibold text-white">
            Monthly
          </button>
        </div>
      </div>

      <div className="relative h-64 overflow-hidden rounded-xl border-b border-[#c2c6d6] bg-gradient-to-b from-blue-50 to-white">
        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between opacity-30">
          <div className="border-t border-[#727785]" />
          <div className="border-t border-[#727785]" />
          <div className="border-t border-[#727785]" />
          <div className="border-t border-[#727785]" />
        </div>

        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient
              id="growthGradient"
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#0058be"
                stopOpacity="0.22"
              />

              <stop
                offset="100%"
                stopColor="#0058be"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <polygon
            points={areaPoints}
            fill="url(#growthGradient)"
          />

          <polyline
            points={points}
            fill="none"
            stroke="#0058be"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="mt-3 flex justify-between text-xs font-semibold text-[#424754]">
        {data.map((item) => (
          <span key={item.month}>{item.month}</span>
        ))}
      </div>
    </section>
  );
};

export default UserGrowthChart;