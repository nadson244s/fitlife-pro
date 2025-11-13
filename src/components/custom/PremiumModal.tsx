"use client";

import { Crown, Check, X, Zap, Star, Shield } from "lucide-react";

export default function PremiumModal() {
  const plans = [
    {
      id: "monthly",
      name: "Mensal",
      price: "R$ 29,90",
      period: "/mês",
      popular: false,
      savings: null,
    },
    {
      id: "quarterly",
      name: "Trimestral",
      price: "R$ 24,90",
      period: "/mês",
      popular: true,
      savings: "Economize 17%",
    },
    {
      id: "annual",
      name: "Anual",
      price: "R$ 19,90",
      period: "/mês",
      popular: false,
      savings: "Economize 33%",
    },
  ];

  const freeFeatures = [
    "Treinos básicos",
    "Plano alimentar simples",
    "Acompanhamento de peso",
    "3 receitas por semana",
  ];

  const premiumFeatures = [
    "Todos os treinos desbloqueados",
    "Planos alimentares completos",
    "Receitas ilimitadas",
    "Troca de alimentos ilimitada",
    "Gráficos avançados de progresso",
    "Acompanhamento personalizado",
    "Chat de suporte prioritário",
    "Novos treinos toda semana",
    "Modo offline",
    "Sem anúncios",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pb-20 px-4 pt-6">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-4 shadow-lg">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            FitLife Pro Premium
          </h1>
          <p className="text-gray-600">
            Desbloqueie todo o potencial do seu treino
          </p>
        </div>

        {/* Plans */}
        <div className="space-y-4 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl p-6 shadow-lg transition-all hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-emerald-500 ring-4 ring-emerald-100"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3" />
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  {plan.savings && (
                    <p className="text-sm text-emerald-600 font-medium">
                      {plan.savings}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </p>
                  <p className="text-sm text-gray-600">{plan.period}</p>
                </div>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Assinar Agora
              </button>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Gratuito vs Premium
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Free Column */}
            <div>
              <div className="text-center mb-4">
                <p className="font-bold text-gray-900">Gratuito</p>
              </div>
              <div className="space-y-3">
                {freeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-600">{feature}</span>
                  </div>
                ))}
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-400">
                    Recursos limitados
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Column */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-1">
                  <Crown className="w-4 h-4 text-amber-500" />
                  <p className="font-bold text-gray-900">Premium</p>
                </div>
              </div>
              <div className="space-y-3">
                {premiumFeatures.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-900 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-emerald-600 font-bold">
                    +6 recursos extras
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Premium Features */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Tudo que você ganha com Premium
          </h2>
          <div className="space-y-3">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-emerald-100 rounded-full p-1 flex-shrink-0">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="bg-white rounded-xl p-4 shadow-md mb-2">
              <Shield className="w-8 h-8 text-emerald-600 mx-auto" />
            </div>
            <p className="text-xs text-gray-600">Pagamento Seguro</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-xl p-4 shadow-md mb-2">
              <Star className="w-8 h-8 text-amber-500 mx-auto" />
            </div>
            <p className="text-xs text-gray-600">Avaliação 4.9</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-xl p-4 shadow-md mb-2">
              <Zap className="w-8 h-8 text-blue-600 mx-auto" />
            </div>
            <p className="text-xs text-gray-600">Acesso Imediato</p>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 text-center">
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-bold">Garantia de 7 dias</span>
          </p>
          <p className="text-xs text-gray-600">
            Não gostou? Devolvemos 100% do seu dinheiro, sem perguntas.
          </p>
        </div>
      </div>
    </div>
  );
}
