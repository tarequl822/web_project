import React from "react";
import DashboardLayout from "../../layouts/admin/DashboardLayout";

const Placeholder = ({ title, description }) => (
  <DashboardLayout title={title}>
    <section className="mx-auto max-w-[1440px] p-6 md:p-8">
      <div className="rounded-2xl border border-[#c2c6d6] bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#191b23]">{title}</h1>
        <p className="mt-2 text-sm text-[#5f6573]">{description}</p>
      </div>
    </section>
  </DashboardLayout>
);

export default Placeholder;