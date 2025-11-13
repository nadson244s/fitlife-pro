"use client";

import { useState } from "react";
import { ChevronRight, Target, TrendingDown, TrendingUp, Activity } from "lucide-react";

export default function OnboardingScreen() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    goal: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
  });

  const goals = [
    {
      id: "lose",
      title: "Perder Peso",
      icon: TrendingDown,
      description: "Queimar gordura e definir",
    },
    {
      id: "maintain",
      title: "Manter Peso",
      icon: Target,
      description: "Manter forma atual",
    },
    {
      id: "gain",
      title: "Ganhar Massa",
      icon: TrendingUp,
      description: "Construir músculos",
    },
    {
      id: "fitness",
      title: "Melhorar Condicionamento",
      icon: Activity,
      description: "Aumentar resistência",
    },
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-white text-sm font-medium">
              Passo {step} de 4
            </span>
            <span className="text-white/80 text-sm">{(step / 4) * 100}%</span>
          </div>
          <div className="w-full bg-white/30 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          {/* Step 1: Goal */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Qual é seu objetivo?
              </h2>
              <p className="text-gray-600 mb-6">
                Vamos personalizar seu plano de acordo com sua meta
              </p>

              <div className="space-y-3">
                {goals.map((goal) => {
                  const Icon = goal.icon;
                  return (
                    <button
                      key={goal.id}
                      onClick={() => setUserData({ ...userData, goal: goal.id })}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                        userData.goal === goal.id
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div
                        className={`p-3 rounded-xl ${
                          userData.goal === goal.id
                            ? "bg-emerald-500"
                            : "bg-gray-100"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            userData.goal === goal.id
                              ? "text-white"
                              : "text-gray-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-bold text-gray-900">{goal.title}</p>
                        <p className="text-sm text-gray-600">
                          {goal.description}
                        </p>
                      </div>
                      {userData.goal === goal.id && (
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Gender & Age */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Informações básicas
              </h2>
              <p className="text-gray-600 mb-6">
                Precisamos de alguns dados para calcular suas necessidades
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gênero
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setUserData({ ...userData, gender: "male" })}
                      className={`p-4 rounded-xl border-2 font-medium transition-all ${
                        userData.gender === "male"
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Masculino
                    </button>
                    <button
                      onClick={() =>
                        setUserData({ ...userData, gender: "female" })
                      }
                      className={`p-4 rounded-xl border-2 font-medium transition-all ${
                        userData.gender === "female"
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Feminino
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Idade
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 28"
                    value={userData.age}
                    onChange={(e) =>
                      setUserData({ ...userData, age: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Weight & Height */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Medidas corporais
              </h2>
              <p className="text-gray-600 mb-6">
                Essas informações nos ajudam a calcular suas necessidades calóricas
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Peso atual (kg)
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 75"
                    value={userData.weight}
                    onChange={(e) =>
                      setUserData({ ...userData, weight: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 175"
                    value={userData.height}
                    onChange={(e) =>
                      setUserData({ ...userData, height: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {userData.weight && userData.height && (
                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                    <p className="text-sm text-gray-700 mb-1">Seu IMC:</p>
                    <p className="text-2xl font-bold text-emerald-600">
                      {(
                        parseFloat(userData.weight) /
                        Math.pow(parseFloat(userData.height) / 100, 2)
                      ).toFixed(1)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Summary */}
          {step === 4 && (
            <div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <span className="text-3xl">🎉</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Tudo pronto!
                </h2>
                <p className="text-gray-600">
                  Seu plano personalizado está sendo preparado
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Objetivo:</span>
                  <span className="font-bold text-gray-900">
                    {goals.find((g) => g.id === userData.goal)?.title}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Idade:</span>
                  <span className="font-bold text-gray-900">
                    {userData.age} anos
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Peso:</span>
                  <span className="font-bold text-gray-900">
                    {userData.weight} kg
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Altura:</span>
                  <span className="font-bold text-gray-900">
                    {userData.height} cm
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200">
                <p className="text-sm text-gray-700 text-center">
                  <span className="font-bold">Meta calórica diária:</span>{" "}
                  <span className="text-emerald-600 font-bold text-lg">
                    2,000 kcal
                  </span>
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                Voltar
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={
                (step === 1 && !userData.goal) ||
                (step === 2 && (!userData.gender || !userData.age)) ||
                (step === 3 && (!userData.weight || !userData.height))
              }
              className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                (step === 1 && !userData.goal) ||
                (step === 2 && (!userData.gender || !userData.age)) ||
                (step === 3 && (!userData.weight || !userData.height))
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg"
              }`}
            >
              {step === 4 ? "Começar Agora" : "Continuar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
