<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-semibold text-gray-800">{{ pageTitle }}</h1>
    <div class="bg-white p-6 sm:p-8 rounded-lg shadow-md">
      <p class="text-gray-600">
        Contenido para la sección: <span class="font-medium">{{ pageTitle }}</span
        >.
      </p>
      <div
        class="mt-6 p-6 border border-dashed border-gray-300 rounded-md min-h-[200px] flex items-center justify-center"
      >
        <p class="text-center text-gray-500">
          Más detalles y funcionalidades específicas de esta página irían aquí.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  pageTitle: {
    type: String,
    default: 'Página Genérica',
  },
})
</script>
