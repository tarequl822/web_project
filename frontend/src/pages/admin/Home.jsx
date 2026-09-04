import React from "react";

import ActiveSessionsChart from "../../components/admin/ActiveSessionsChart";
import QuickActions from "../../components/admin/QuickActions";
import RecentActivity from "../../components/admin/RecentActivity";
import StatCard from "../../components/admin/StatCard";
import SystemHealth from "../../components/admin/SystemHealth";
import UserGrowthChart from "../../components/admin/UserGrowthChart";
import { dashboardData } from "../../data/admin";
import DashboardLayout from "../../layouts/admin/DashboardLayout";

const Home = () => {
  const {
    stats,
    userGrowth,
    activeSessions,
    recentActivity,
    systemHealth,
  } = dashboardData;

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[1440px] space-y-8 p-6 md:p-8">
        {/* Statistics */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              stat={stat}
            />
          ))}
        </section>

        {/* Analytics */}
        <section className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-8">
            <UserGrowthChart data={userGrowth} />
          </div>

          <div className="col-span-12 xl:col-span-4">
            <ActiveSessionsChart
              data={activeSessions}
            />
          </div>
        </section>

        {/* Activity + Health */}
        <section className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-7">
            <RecentActivity
              activities={recentActivity}
            />
          </div>

          <div className="col-span-12 space-y-6 xl:col-span-5">
            <SystemHealth health={systemHealth} />

            <QuickActions />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Home;