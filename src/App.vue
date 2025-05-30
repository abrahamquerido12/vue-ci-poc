<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'

const isSidebarOpen = ref(true) // Sidebar abierto por defecto

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex h-screen bg-gray-100 font-sans">
    <Sidebar :is-open="isSidebarOpen" @toggle-sidebar="toggleSidebar" />

    <div
      class="flex-1 flex flex-col transition-all duration-300 ease-in-out"
      :class="isSidebarOpen ? 'ml-64' : 'ml-20'"
    >
      <Header @toggle-sidebar="toggleSidebar" :is-sidebar-open="isSidebarOpen" />
      <main class="flex-1 p-4 sm:p-6 overflow-y-auto bg-slate-50">
        <router-view />
      </main>
    </div>
  </div>
</template>
