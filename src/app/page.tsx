"use client";

import { useState } from "react";
import BottomNav from "@/components/custom/BottomNav";
import DashboardTab from "@/components/custom/DashboardTab";
import WorkoutsTab from "@/components/custom/WorkoutsTab";
import DietTab from "@/components/custom/DietTab";
import ProgressTab from "@/components/custom/ProgressTab";
import ProfileTab from "@/components/custom/ProfileTab";

export default function FitLifePro() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <DashboardTab />;
      case "workouts":
        return <WorkoutsTab />;
      case "diet":
        return <DietTab />;
      case "progress":
        return <ProgressTab />;
      case "profile":
        return <ProfileTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Content Area */}
      <div className="transition-all duration-300 ease-in-out">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  );
}
