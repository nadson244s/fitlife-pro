"use client";

import { Apple, Coffee, Sandwich, Moon, Lock, RefreshCw } from "lucide-react";

export default function DietTab() {
  const meals = [
    {
      id: 1,
      name: "Café da Manhã",
      icon: Coffee,
      time: "08:00",
      calories: 450,
      protein: 25,
      carbs: 55,
      fats: 12,
      isPremium: false,
      foods: [
        "2 ovos mexidos",
        "2 fatias de pão integral",
        "1 banana",
        "Café com leite",
      ],
    },
    {
      id: 2,
      name: "Lanche da Manhã",
      icon: Apple,
      time: "10:30",
      calories: 200,
      protein: 15,
      carbs: 20,
      fats: 8,
      isPremium: false,
      foods: ["1 iogurte grego", "1 porção de castanhas"],
    },
    {
      id: 3,
      name: "Almoço",
      icon: Sandwich,
      time: "13:00",
      calories: 650,
      protein: 45,
      carbs: 70,
      fats: 18,
      isPremium: false,
      foods: [
        "150g de frango grelhado",
        "1 xícara de arroz integral",
        "Salada verde",
        "Legumes cozidos",
      ],
    },
    {
      id: 4,
      name: "Lanche da Tarde",
      icon: Apple,
      time: "16:00",
      calories: 250,
      protein: 20,
      carbs: 30,
      fats: 5,
      isPremium: true,
      foods: ["Shake de proteína", "1 maçã"],
    },
    {
      id: 5,
      name: "Jantar",
      icon: Moon,
      time: "19:30",
      calories: 550,
      protein: 40,
      carbs: 45,
      fats: 15,
      isPremium: true,
      foods: [
        "150g de peixe grelhado",
        "Batata doce",
        "Brócolis no vapor",
        "Salada",
      ],
    },
  ];

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalProtein = meals.reduce((sum, meal) => sum + meal.protein, 0);
  const totalCarbs = meals.reduce((sum, meal) => sum + meal.carbs, 0);
  const totalFats = meals.reduce((sum, meal) => sum + meal.fats, 0);

  return (
    <div className="pb-20 px-4 pt-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Plano Alimentar</h1>
        <p className="text-gray-600 mt-1">Seu cardápio personalizado de hoje</p>
      </div>

      {/* Daily Summary */}
      <div className="bg-white rounded-2xl p-5 shadow-md mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Resumo Diário</h2>
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-500">{totalCalories}</p>
            <p className="text-xs text-gray-600 mt-1">Calorias</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-500">{totalProtein}g</p>
            <p className="text-xs text-gray-600 mt-1">Proteínas</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-500">{totalCarbs}g</p>
            <p className="text-xs text-gray-600 mt-1">Carboidratos</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-500">{totalFats}g</p>
            <p className="text-xs text-gray-600 mt-1">Gorduras</p>
          </div>
        </div>
      </div>

      {/* Meals List */}
      <div className="space-y-4">
        {meals.map((meal) => {
          const Icon = meal.icon;
          return (
            <div
              key={meal.id}
              className="bg-white rounded-2xl p-5 shadow-md relative overflow-hidden"
            >
              {meal.isPremium && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  PREMIUM
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {meal.name}
                    </h3>
                    <span className="text-sm text-gray-500">{meal.time}</span>
                  </div>

                  {!meal.isPremium ? (
                    <>
                      <ul className="space-y-1 mb-3">
                        {meal.foods.map((food, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            • {food}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-4 text-xs text-gray-600 bg-gray-50 rounded-lg p-3">
                        <div>
                          <span className="font-semibold text-orange-500">
                            {meal.calories}
                          </span>{" "}
                          kcal
                        </div>
                        <div>
                          <span className="font-semibold text-red-500">
                            {meal.protein}g
                          </span>{" "}
                          prot
                        </div>
                        <div>
                          <span className="font-semibold text-blue-500">
                            {meal.carbs}g
                          </span>{" "}
                          carb
                        </div>
                        <div>
                          <span className="font-semibold text-yellow-500">
                            {meal.fats}g
                          </span>{" "}
                          gord
                        </div>
                      </div>

                      <button className="mt-3 flex items-center gap-2 text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors">
                        <RefreshCw className="w-4 h-4" />
                        Trocar alimentos
                      </button>
                    </>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <Lock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Desbloqueie com Premium
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Premium CTA */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 mt-6 shadow-lg">
        <h3 className="text-white text-xl font-bold mb-2">
          Cardápios Completos Premium
        </h3>
        <p className="text-white/90 text-sm mb-4">
          Acesse receitas exclusivas, troque alimentos ilimitadamente e tenha
          acompanhamento nutricional!
        </p>
        <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full">
          Assinar Agora
        </button>
      </div>
    </div>
  );
}
