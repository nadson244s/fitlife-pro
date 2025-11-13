"use client";

import { Dumbbell, Clock, Play, Lock } from "lucide-react";

export default function WorkoutsTab() {
  const workouts = [
    {
      id: 1,
      title: "Treino de Pernas",
      duration: "45 min",
      exercises: 6,
      difficulty: "Intermediário",
      isPremium: false,
      image: "🦵",
    },
    {
      id: 2,
      title: "Treino de Peito e Tríceps",
      duration: "50 min",
      exercises: 7,
      difficulty: "Avançado",
      isPremium: false,
      image: "💪",
    },
    {
      id: 3,
      title: "Treino de Costas",
      duration: "40 min",
      exercises: 6,
      difficulty: "Intermediário",
      isPremium: false,
      image: "🏋️",
    },
    {
      id: 4,
      title: "Treino HIIT Completo",
      duration: "30 min",
      exercises: 8,
      difficulty: "Avançado",
      isPremium: true,
      image: "🔥",
    },
    {
      id: 5,
      title: "Treino de Ombros",
      duration: "35 min",
      exercises: 5,
      difficulty: "Intermediário",
      isPremium: true,
      image: "💪",
    },
  ];

  return (
    <div className="pb-20 px-4 pt-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Treinos</h1>
        <p className="text-gray-600 mt-1">Escolha seu treino de hoje</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-medium whitespace-nowrap">
          Todos
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-300 transition-colors">
          Academia
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-300 transition-colors">
          Em Casa
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-300 transition-colors">
          Cardio
        </button>
      </div>

      {/* Workouts List */}
      <div className="space-y-4">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden"
          >
            {workout.isPremium && (
              <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Lock className="w-3 h-3" />
                PREMIUM
              </div>
            )}
            
            <div className="flex items-start gap-4">
              <div className="text-5xl">{workout.image}</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {workout.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {workout.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Dumbbell className="w-4 h-4" />
                    {workout.exercises} exercícios
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {workout.difficulty}
                  </span>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      workout.isPremium
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    }`}
                    disabled={workout.isPremium}
                  >
                    <Play className="w-4 h-4" />
                    {workout.isPremium ? "Bloqueado" : "Iniciar"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium CTA */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 mt-6 shadow-lg">
        <h3 className="text-white text-xl font-bold mb-2">
          Desbloqueie Treinos Premium
        </h3>
        <p className="text-white/90 text-sm mb-4">
          Acesse treinos avançados, planos personalizados e muito mais!
        </p>
        <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full">
          Assinar Agora
        </button>
      </div>
    </div>
  );
}
