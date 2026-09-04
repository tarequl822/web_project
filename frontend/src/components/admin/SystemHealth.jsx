import React from "react";

const SystemHealth = ({ health }) => {
  return (
    <div className="rounded-2xl bg-[#0058be] p-7 text-white shadow-lg">
      <h2 className="text-xl font-semibold">
        System Health
      </h2>

      <p className="mt-1 text-sm opacity-90">
        All clusters are performing optimally with{" "}
        {health.uptime} uptime.
      </p>

      <div className="mt-8 space-y-5">
        {/* Server Load */}
        <div>
          <div className="mb-1 flex justify-between text-xs font-semibold">
            <span>Server Load</span>
            <span>{health.serverLoad}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-white"
              style={{
                width: `${health.serverLoad}%`,
              }}
            />
          </div>
        </div>

        {/* Database */}
        <div>
          <div className="mb-1 flex justify-between text-xs font-semibold">
            <span>Database Latency</span>
            <span>{health.databaseLatency}ms</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-[#6cf8bb]"
              style={{
                width: "15%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;