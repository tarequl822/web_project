import React, { useState } from "react";
import DietitianLayout from "../../layouts/dietitian/DietitianLayout";
import { foodLibrary } from "../../data";

const MealPlans = () => {
  // Meal plan state initialized with initial values from screenshot
  const [mealPlan, setMealPlan] = useState({
    breakfast: [
      {
        instanceId: "b1",
        ...foodLibrary.find((f) => f.id === "f1"),
      },
    ],
    lunch: [
      {
        instanceId: "l1",
        ...foodLibrary.find((f) => f.id === "f3"),
      },
    ],
    dinner: [],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [activeMealTarget, setActiveMealTarget] = useState(null); // Modal state for picking meal
  const [selectedFoodForAdd, setSelectedFoodForAdd] = useState(null);

  // Target Daily Goals
  const targets = {
    calories: 2100,
    protein: 150,
    carbs: 220,
    fats: 70,
  };

  // Helper function to calculate total macros across all meals
  const calculateTotals = () => {
    const allItems = [
      ...mealPlan.breakfast,
      ...mealPlan.lunch,
      ...mealPlan.dinner,
    ];

    return allItems.reduce(
      (acc, item) => ({
        calories: acc.calories + (item.calories || 0),
        protein: acc.protein + (item.protein || 0),
        carbs: acc.carbs + (item.carbs || 0),
        fats: acc.fats + (item.fats || 0),
      }),
      { calories: 0, protein: 0, carbs: 0, fats: 0 }
    );
  };

  const totals = calculateTotals();

  // Add food item to a specific meal section
  const handleAddFood = (foodItem, mealType) => {
    const newItem = {
      ...foodItem,
      instanceId: `${mealType}-${Date.now()}-${Math.random()}`,
    };

    setMealPlan((prev) => ({
      ...prev,
      [mealType]: [...prev[mealType], newItem],
    }));

    // Reset selection modal state
    setActiveMealTarget(null);
    setSelectedFoodForAdd(null);
  };

  // Remove food item from a meal section
  const handleRemoveFood = (mealType, instanceId) => {
    setMealPlan((prev) => ({
      ...prev,
      [mealType]: prev[mealType].filter((item) => item.instanceId !== instanceId),
    }));
  };

  // Calculate section total calories
  const getSectionCalories = (sectionItems) =>
    sectionItems.reduce((sum, item) => sum + (item.calories || 0), 0);

  // Filter foods for library search
  const filteredFoods = foodLibrary.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DietitianLayout>
      <div className="space-y-6">
        
        {/* ==================== 1. TOP HEADER & MACRO TRACKER ==================== */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              PROTOCOLS › NEW PLAN
            </p>
            <h1 className="text-2xl font-bold text-blue-700 mt-0.5">Meal Plan Builder</h1>
          </div>

          {/* Macro Progress Bars */}
          <div className="flex flex-wrap items-center gap-6">
            
            {/* Calories Progress */}
            <div className="w-32 space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-gray-500">Calories</span>
                <span className="text-gray-800">
                  {totals.calories.toLocaleString()} / {targets.calories.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min((totals.calories / targets.calories) * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Protein Progress */}
            <div className="w-28 space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-gray-500">Protein</span>
                <span className="text-gray-800">{totals.protein}g / {targets.protein}g</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min((totals.protein / targets.protein) * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Carbs Progress */}
            <div className="w-28 space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-gray-500">Carbs</span>
                <span className="text-gray-800">{totals.carbs}g / {targets.carbs}g</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-amber-600 h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min((totals.carbs / targets.carbs) * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Fats Progress */}
            <div className="w-24 space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-gray-500">Fats</span>
                <span className="text-gray-800">{totals.fats}g / {targets.fats}g</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-rose-500 h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min((totals.fats / targets.fats) * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Patient Selector */}
            <div className="pl-4 border-l border-gray-200">
              <p className="text-[10px] uppercase font-bold text-gray-400">Selected Patient</p>
              <select className="bg-gray-50 border border-gray-200 text-xs font-bold rounded-lg px-2.5 py-1.5 text-gray-800 focus:outline-none">
                <option>Alex Rivers</option>
                <option>Michael Scott</option>
                <option>Elena Rodriguez</option>
              </select>
            </div>

          </div>
        </div>

        {/* ==================== 2. MAIN BUILDER GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT 8 COLS: MEAL SECTIONS (Breakfast, Lunch, Dinner) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* --- BREAKFAST SECTION --- */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4 shadow-sm">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌅</span>
                  <h2 className="font-bold text-gray-800 text-base">Breakfast</h2>
                  <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                    {getSectionCalories(mealPlan.breakfast)} KCAL
                  </span>
                </div>
                <button className="text-xs text-gray-400 hover:text-gray-600 font-semibold">Options</button>
              </div>

              {/* Breakfast Item List */}
              <div className="space-y-2">
                {mealPlan.breakfast.map((item) => (
                  <div
                    key={item.instanceId}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-300 cursor-grab">:::</span>
                      <div>
                        <p className="font-bold text-xs text-gray-900">{item.name}</p>
                        <p className="text-[11px] text-gray-400">{item.portion}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-bold text-xs text-gray-900">{item.calories} kcal</p>
                        <p className="text-[10px] font-semibold text-emerald-600">{item.protein}g PROTEIN</p>
                      </div>
                      <button
                        onClick={() => handleRemoveFood("breakfast", item.instanceId)}
                        className="text-gray-400 hover:text-rose-600 font-bold text-sm px-1"
                        title="Remove food"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Breakfast Add Button */}
              <button
                onClick={() => setActiveMealTarget("breakfast")}
                className="w-full py-6 border-2 border-dashed border-gray-200 hover:border-blue-400 hover:bg-blue-50/30 rounded-xl text-center space-y-1 transition text-gray-400 hover:text-blue-600"
              >
                <span className="text-xl font-light block">+</span>
                <span className="text-xs font-medium block">Click to add food to Breakfast</span>
              </button>
            </div>

            {/* --- LUNCH SECTION --- */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4 shadow-sm">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-lg">☀️</span>
                  <h2 className="font-bold text-gray-800 text-base">Lunch</h2>
                  <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                    {getSectionCalories(mealPlan.lunch)} KCAL
                  </span>
                </div>
                <button className="text-xs text-gray-400 hover:text-gray-600 font-semibold">Options</button>
              </div>

              {/* Lunch Item List */}
              <div className="space-y-2">
                {mealPlan.lunch.map((item) => (
                  <div
                    key={item.instanceId}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-300 cursor-grab">:::</span>
                      <div>
                        <p className="font-bold text-xs text-gray-900">{item.name}</p>
                        <p className="text-[11px] text-gray-400">{item.portion}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-bold text-xs text-gray-900">{item.calories} kcal</p>
                        <p className="text-[10px] font-semibold text-emerald-600">{item.protein}g PROTEIN</p>
                      </div>
                      <button
                        onClick={() => handleRemoveFood("lunch", item.instanceId)}
                        className="text-gray-400 hover:text-rose-600 font-bold text-sm px-1"
                        title="Remove food"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lunch Add Button */}
              <button
                onClick={() => setActiveMealTarget("lunch")}
                className="w-full py-6 border-2 border-dashed border-gray-200 hover:border-blue-400 hover:bg-blue-50/30 rounded-xl text-center space-y-1 transition text-gray-400 hover:text-blue-600"
              >
                <span className="text-xl font-light block">+</span>
                <span className="text-xs font-medium block">Click to add food to Lunch</span>
              </button>
            </div>

            {/* --- DINNER SECTION --- */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4 shadow-sm">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌙</span>
                  <h2 className="font-bold text-gray-800 text-base">Dinner</h2>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-bold rounded uppercase">
                    {mealPlan.dinner.length > 0 ? `${getSectionCalories(mealPlan.dinner)} KCAL` : "EMPTY"}
                  </span>
                </div>
                <button className="text-xs text-gray-400 hover:text-gray-600 font-semibold">Options</button>
              </div>

              {/* Dinner Item List */}
              <div className="space-y-2">
                {mealPlan.dinner.map((item) => (
                  <div
                    key={item.instanceId}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-300 cursor-grab">:::</span>
                      <div>
                        <p className="font-bold text-xs text-gray-900">{item.name}</p>
                        <p className="text-[11px] text-gray-400">{item.portion}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-bold text-xs text-gray-900">{item.calories} kcal</p>
                        <p className="text-[10px] font-semibold text-emerald-600">{item.protein}g PROTEIN</p>
                      </div>
                      <button
                        onClick={() => handleRemoveFood("dinner", item.instanceId)}
                        className="text-gray-400 hover:text-rose-600 font-bold text-sm px-1"
                        title="Remove food"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dinner Add Button */}
              <button
                onClick={() => setActiveMealTarget("dinner")}
                className="w-full py-6 border-2 border-dashed border-gray-200 hover:border-blue-400 hover:bg-blue-50/30 rounded-xl text-center space-y-1 transition text-gray-400 hover:text-blue-600"
              >
                <span className="text-xl font-light block">+</span>
                <span className="text-xs font-medium block">Click to add food to Dinner</span>
              </button>
            </div>

          </div>

          {/* RIGHT 4 COLS: FOOD LIBRARY */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
              <h2 className="font-bold text-gray-800 text-base">Food Library</h2>

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search clinical foods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-100 border border-transparent rounded-lg py-2 px-3 pl-8 text-xs focus:bg-white focus:border-gray-300 focus:outline-none"
                />
                <span className="absolute left-2.5 top-2.5 text-gray-400 text-xs">🔍</span>
              </div>

              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                Commonly Prescribed
              </p>

              {/* Food Library List */}
              <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
                {filteredFoods.map((food) => (
                  <div
                    key={food.id}
                    className="p-3 border rounded-lg hover:border-blue-300 hover:bg-blue-50/30 transition flex items-center justify-between group"
                  >
                    <div>
                      <p className="font-bold text-xs text-gray-800">{food.name}</p>
                      <p className="text-[11px] text-gray-400">
                        {food.calories} kcal • {food.protein}g Protein
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedFoodForAdd(food)}
                      className="px-2.5 py-1 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 text-xs font-semibold rounded transition"
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>

              <button className="w-full py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-xs rounded-lg border text-center transition">
                📂 Browse Custom Database
              </button>
            </div>
          </div>

        </div>

        {/* ==================== 3. FOOTER ACTION BAR ==================== */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-medium">
            <span className="text-emerald-600 font-bold">✓ Changes Saved</span> • Last modified: Just now
          </p>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50">
              Save Template
            </button>
            <button className="px-4 py-2 border rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50">
              Preview Plan
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-sm">
              ▷ Assign to Patient
            </button>
          </div>
        </div>

        {/* ==================== MODAL 1: ADD FOOD TO MEAL ==================== */}
        {activeMealTarget && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-5 space-y-4 shadow-xl">
              <div className="flex justify-between items-center pb-2 border-b">
                <h3 className="font-bold text-gray-900 text-base capitalize">
                  Add Food to {activeMealTarget}
                </h3>
                <button
                  onClick={() => setActiveMealTarget(null)}
                  className="text-gray-400 hover:text-gray-600 text-lg font-bold"
                >
                  ×
                </button>
              </div>

              <div className="space-y-2 max-h-60 overflow-y-auto">
                {foodLibrary.map((food) => (
                  <div
                    key={food.id}
                    onClick={() => handleAddFood(food, activeMealTarget)}
                    className="p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer flex justify-between items-center"
                  >
                    <div>
                      <p className="font-bold text-xs text-gray-800">{food.name}</p>
                      <p className="text-[11px] text-gray-400">{food.portion}</p>
                    </div>
                    <span className="text-xs font-bold text-blue-600">
                      {food.calories} kcal
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== MODAL 2: PICK MEAL FOR LIBRARY ITEM ==================== */}
        {selectedFoodForAdd && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-sm w-full p-5 space-y-4 shadow-xl text-center">
              <h3 className="font-bold text-gray-900 text-base">
                Add "{selectedFoodForAdd.name}" to:
              </h3>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleAddFood(selectedFoodForAdd, "breakfast")}
                  className="p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-400 font-bold text-xs text-gray-700"
                >
                  🌅 Breakfast
                </button>
                <button
                  onClick={() => handleAddFood(selectedFoodForAdd, "lunch")}
                  className="p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-400 font-bold text-xs text-gray-700"
                >
                  ☀️ Lunch
                </button>
                <button
                  onClick={() => handleAddFood(selectedFoodForAdd, "dinner")}
                  className="p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-400 font-bold text-xs text-gray-700"
                >
                  🌙 Dinner
                </button>
              </div>

              <button
                onClick={() => setSelectedFoodForAdd(null)}
                className="text-xs text-gray-400 hover:text-gray-600 underline font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

      </div>
    </DietitianLayout>
  );
};

export default MealPlans;