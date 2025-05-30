<template>
  <aside
    class="bg-white text-gray-800 shadow-xl transition-all duration-300 ease-in-out fixed top-0 left-0 h-full z-40 flex flex-col"
    :class="isOpen ? 'w-64' : 'w-20'"
  >
    <div
      class="flex items-center p-4 border-b border-gray-200"
      :class="isOpen ? 'justify-between' : 'justify-center'"
    >
      <router-link
        v-if="isOpen"
        to="/"
        class="text-2xl font-bold text-sky-600 whitespace-nowrap hover:text-sky-700"
      >
        LEGALHUNT
      </router-link>
      <button
        @click="$emit('toggle-sidebar')"
        class="p-2 text-gray-600 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
        :aria-label="isOpen ? 'Cerrar menú' : 'Abrir menú'"
      >
        <ChevronLeft v-if="isOpen" />
        <Menu v-else />
      </button>
    </div>

    <nav class="flex-grow p-2 pt-4 overflow-y-auto">
      <ul>
        <li v-for="item in menuItems" :key="item.name" class="mb-1">
          <router-link :to="item.path" v-slot="{ href, navigate, isActive }" custom>
            <a
              :href="href"
              @click="navigate"
              class="flex items-center p-2.5 rounded-md transition-colors duration-150 group"
              :class="[
                isActive
                  ? 'bg-sky-100 text-sky-700 font-medium'
                  : 'text-gray-600 hover:bg-sky-50 hover:text-sky-600',
                isOpen ? '' : 'justify-center',
              ]"
              :title="item.name"
            >
              <component
                :is="item.icon"
                :size="20"
                class="shrink-0 transition-transform duration-200 group-hover:scale-110"
              />
              <span v-if="isOpen" class="ml-3 flex-1 whitespace-nowrap">{{ item.name }}</span>
            </a>
          </router-link>
        </li>
      </ul>
    </nav>

    <div v-if="isOpen" class="p-4 border-t border-gray-200 text-center text-xs text-gray-500">
      © {{ new Date().getFullYear() }} LegalHunt
    </div>
  </aside>
</template>

<script setup lang="ts">
defineOptions({ name: 'AppSidebar' })
import { Home, FileText, BookOpen, Users, Settings, ChevronLeft, Menu } from 'lucide-vue-next'

defineProps({
  isOpen: Boolean,
})

defineEmits(['toggle-sidebar'])

const menuItems = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Contratos', path: '/contratos', icon: FileText },
  { name: 'Libros Corporativos', path: '/libros-corporativos', icon: BookOpen },
  { name: 'Clientes', path: '/clientes', icon: Users },
  { name: 'Configuración', path: '/configuracion', icon: Settings },
]
</script>
