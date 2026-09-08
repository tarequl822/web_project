import dietitianStats from "./dietitianStats.json";
import upcomingConsultations from "./upcomingConsultations.json";
import patientOverview from "./patientOverview.json";
import patientDetails from "./patientDetails.json";

// Workload fallback object
const workload = {
  clinicalSessions: { current: 32, target: 40, unit: "hrs" },
  mealPlanReviews: { current: 18, target: 20, unit: "reviews" },
};

export {
  dietitianStats,
  upcomingConsultations,
  patientOverview,
  patientDetails,
  workload,
};