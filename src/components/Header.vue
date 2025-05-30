<template>
  <header class="bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-30 h-16">
    <div :class="isSidebarOpen ? 'flex-grow sm:flex-grow-0' : 'flex-grow'"></div>

    <div class="flex items-center space-x-3 sm:space-x-4">
      <span class="text-gray-700 text-sm font-medium hidden sm:block"> Hola, Abraham </span>
      <button
        class="p-2 text-gray-600 hover:text-sky-600 hover:bg-sky-100 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
        aria-label="Notificaciones"
        title="Notificaciones"
      >
        <Bell :size="20" />
      </button>
      <button
        class="p-1.5 text-gray-600 hover:text-sky-600 hover:bg-sky-100 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
        aria-label="Perfil de usuario"
        title="Perfil de usuario"
      >
        <UserCircle :size="24" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Bell, UserCircle } from 'lucide-vue-next'

defineProps({
  isSidebarOpen: Boolean,
})
defineEmits(['toggle-sidebar'])
</script>

<script lang="ts">
export default {
  name: 'AppHeader',
}
</script>
