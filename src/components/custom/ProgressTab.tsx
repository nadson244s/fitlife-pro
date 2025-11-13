"use client";

import { TrendingUp, TrendingDown, Calendar, Award } from "lucide-react";

export default function ProgressTab() {
  const weeklyData = [
    { day: "Seg", weight: 78.5, workouts: 1 },
    { day: "Ter", weight: 78.3, workouts: 1 },
    { day: "Qua", weight: 78.2, workouts: 0 },
    { day: "Qui", weight: 78.0, workouts: 1 },
    { day: "Sex", weight: 77.8, workouts: 1 },
    { day: "Sáb", weight: 77.7, workouts: 0 },
    { day: "Dom", weight: 77.5, workouts: 0 },
  ];

  const achievements = [
    { id: 1, title: "Primeira Semana", icon: "🎯", unlocked: true },
    { id: 2, title: "10 Treinos", icon: "💪", unlocked: true },
    { id: 3, title: "Meta Calórica 7 dias", icon: "🔥", unlocked: true },
    { id: 4, title: "Perda de 5kg", icon: "⭐", unlocked: false },
    { id: 5, title: "30 Dias Consecutivos", icon: "🏆", unlocked: false },
  ];

  const maxWeight = Math.max(...weeklyData.map((d) => d.weight));
  const minWeight = Math.min(...weeklyData.map((d) => d.weight));

  return (
    <div className="pb-20 px-4 pt-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Seu Progresso</h1>
        <p className="text-gray-600 mt-1">Acompanhe sua evolução</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-5 h-5 text-emerald-600" />
            <span className="text-sm text-gray-600">Peso Atual</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">77.5 kg</p>
          <p className="text-sm text-emerald-600 mt-1">-1.0 kg esta semana</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Sequência</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">12 dias</p>
          <p className="text-sm text-blue-600 mt-1">Seu melhor: 15 dias</p>
        </div>
      </div>

      {/* Weight Chart */}
      <div className="bg-white rounded-2xl p-5 shadow-md mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Evolução do Peso
        </h2>
        <div className="relative h-48">
          <div className="absolute inset-0 flex items-end justify-between gap-2">
            {weeklyData.map((data, index) => {
              const heightPercent =
                ((data.weight - minWeight) / (maxWeight - minWeight)) * 100;
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="relative w-full flex items-end justify-center h-40">
                    <div
                      className="w-full bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t-lg transition-all hover:opacity-80"
                      style={{ height: `${heightPercent || 20}%` }}
                    >
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 whitespace-nowrap">
                        {data.weight}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 mt-2">{data.day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Workout Frequency */}
      <div className="bg-white rounded-2xl p-5 shadow-md mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Frequência de Treinos
        </h2>
        <div className="flex gap-2">
          {weeklyData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className={`w-full h-12 rounded-lg ${
                  data.workouts > 0
                    ? "bg-emerald-500"
                    : "bg-gray-200"
                }`}
              ></div>
              <span className="text-xs text-gray-600 mt-2">{data.day}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          4 treinos completados esta semana
        </p>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl p-5 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-6 h-6 text-amber-500" />
          <h2 className="text-lg font-bold text-gray-900">Conquistas</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                achievement.unlocked
                  ? "bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200"
                  : "bg-gray-100 opacity-50"
              }`}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <p className="text-xs text-center text-gray-700 font-medium">
                {achievement.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mt-6 border border-blue-100">
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Resumo do Mês
        </h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Peso perdido:</span>
            <span className="font-bold text-emerald-600">-3.2 kg</span>
          </div>
          <div className="flex justify-between">
            <span>Treinos realizados:</span>
            <span className="font-bold text-blue-600">18 treinos</span>
          </div>
          <div className="flex justify-between">
            <span>Calorias queimadas:</span>
            <span className="font-bold text-orange-600">~8,500 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
