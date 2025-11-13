"use client";

import { Flame, Activity, Target, TrendingUp } from "lucide-react";

export default function DashboardTab() {
  const motivationalQuote = "Seu único limite é você mesmo. Continue firme! 💪";

  return (
    <div className="pb-20 px-4 pt-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Olá, João! 👋</h1>
        <p className="text-gray-600 mt-1">Vamos conquistar seus objetivos hoje</p>
      </div>

      {/* Motivational Quote */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 mb-6 shadow-lg">
        <p className="text-white text-lg font-medium text-center">{motivationalQuote}</p>
      </div>

      {/* Daily Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <Flame className="w-8 h-8 text-orange-500" />
          </div>
          <p className="text-gray-600 text-sm mb-1">Calorias</p>
          <p className="text-2xl font-bold text-gray-900">1,450</p>
          <p className="text-xs text-gray-500 mt-1">de 2,000 kcal</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "72.5%" }}></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <Activity className="w-8 h-8 text-emerald-500" />
          </div>
          <p className="text-gray-600 text-sm mb-1">Treino</p>
          <p className="text-2xl font-bold text-gray-900">45 min</p>
          <p className="text-xs text-gray-500 mt-1">de 60 min</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>
      </div>

      {/* Today's Workout */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Treino de Hoje</h2>
          <Target className="w-6 h-6 text-emerald-600" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl">
            <div>
              <p className="font-semibold text-gray-900">Treino de Pernas</p>
              <p className="text-sm text-gray-600">6 exercícios • 45 min</p>
            </div>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
              Iniciar
            </button>
          </div>
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Progresso Semanal</h2>
          <TrendingUp className="w-6 h-6 text-emerald-600" />
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Treinos Completos</span>
              <span className="text-sm font-semibold text-gray-900">4/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Meta Calórica</span>
              <span className="text-sm font-semibold text-gray-900">6/7 dias</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: "85.7%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mt-6 border border-blue-100">
        <h3 className="font-bold text-gray-900 mb-2">💡 Dica do Dia</h3>
        <p className="text-gray-700 text-sm">
          Beba pelo menos 2 litros de água hoje para manter seu corpo hidratado e otimizar seus resultados!
        </p>
      </div>
    </div>
  );
}
