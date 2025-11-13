"use client";

import {
  User,
  Mail,
  Phone,
  Calendar,
  Target,
  Crown,
  Settings,
  Bell,
  Share2,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function ProfileTab() {
  const userProfile = {
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "+55 11 98765-4321",
    age: 28,
    weight: 77.5,
    height: 1.75,
    goal: "Perder peso",
    isPremium: false,
  };

  return (
    <div className="pb-20 px-4 pt-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Perfil</h1>
        <p className="text-gray-600 mt-1">Gerencie sua conta e preferências</p>
      </div>

      {/* User Info Card */}
      <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {userProfile.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">
              {userProfile.name}
            </h2>
            <p className="text-sm text-gray-600">{userProfile.email}</p>
            {!userProfile.isPremium && (
              <span className="inline-block mt-2 text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                Plano Gratuito
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              {userProfile.weight}
            </p>
            <p className="text-xs text-gray-600">kg</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              {userProfile.height}
            </p>
            <p className="text-xs text-gray-600">altura (m)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{userProfile.age}</p>
            <p className="text-xs text-gray-600">anos</p>
          </div>
        </div>
      </div>

      {/* Premium Upgrade */}
      {!userProfile.isPremium && (
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Crown className="w-8 h-8 text-white" />
            <h3 className="text-white text-xl font-bold">Upgrade Premium</h3>
          </div>
          <p className="text-white/90 text-sm mb-4">
            Desbloqueie todos os recursos, treinos avançados e
            acompanhamento personalizado!
          </p>
          <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full">
            Ver Planos Premium
          </button>
        </div>
      )}

      {/* Personal Info */}
      <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
        <h3 className="font-bold text-gray-900 mb-4">Informações Pessoais</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
            <Mail className="w-5 h-5 text-gray-600" />
            <div className="flex-1">
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-sm font-medium text-gray-900">
                {userProfile.email}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
            <Phone className="w-5 h-5 text-gray-600" />
            <div className="flex-1">
              <p className="text-sm text-gray-600">Telefone</p>
              <p className="text-sm font-medium text-gray-900">
                {userProfile.phone}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
            <Target className="w-5 h-5 text-gray-600" />
            <div className="flex-1">
              <p className="text-sm text-gray-600">Objetivo</p>
              <p className="text-sm font-medium text-gray-900">
                {userProfile.goal}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
        <h3 className="font-bold text-gray-900 mb-4">Configurações</h3>
        <div className="space-y-1">
          <button className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors w-full text-left">
            <Settings className="w-5 h-5 text-gray-600" />
            <span className="flex-1 text-sm font-medium text-gray-900">
              Preferências
            </span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors w-full text-left">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="flex-1 text-sm font-medium text-gray-900">
              Notificações
            </span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors w-full text-left">
            <Share2 className="w-5 h-5 text-gray-600" />
            <span className="flex-1 text-sm font-medium text-gray-900">
              Compartilhar Progresso
            </span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Logout */}
      <button className="flex items-center justify-center gap-3 bg-white rounded-2xl p-4 shadow-md w-full hover:bg-red-50 transition-colors group">
        <LogOut className="w-5 h-5 text-red-600" />
        <span className="text-sm font-medium text-red-600">Sair da Conta</span>
      </button>

      {/* App Version */}
      <p className="text-center text-xs text-gray-500 mt-6">
        FitLife Pro v1.0.0
      </p>
    </div>
  );
}
