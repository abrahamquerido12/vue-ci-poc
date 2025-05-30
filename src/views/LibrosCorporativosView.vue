<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-semibold text-gray-800">Libros Corporativos (Web Component)</h1>
    <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <p class="text-sm text-gray-500 mb-4">
        Módulo cargado como Web Component. Completa el formulario y envía.
      </p>

      <libro-corporativo-form id="libroFormWC"></libro-corporativo-form>

      <div
        v-if="submissionMessage"
        class="mt-6 p-4 rounded-md text-sm"
        :class="
          isError
            ? 'bg-red-100 text-red-800 border border-red-300'
            : 'bg-green-100 text-green-800 border border-green-300'
        "
      >
        <p class="font-medium">{{ isError ? 'Error:' : 'Éxito:' }}</p>
        <p>{{ submissionMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface LibroFormData {
  nombreEmpresa: string
  tipoEntidad: string
  fechaApertura: string
  nombreLibro: string
  numeroDeActas: string
  responsable: string
}

const submissionMessage = ref<string>('')
const isError = ref<boolean>(false)
let formElement: HTMLElement | null = null

const handleFormSubmissionFromWC = async (event: Event) => {
  const customEvent = event as CustomEvent<{ formData: LibroFormData }>

  if (customEvent.detail && customEvent.detail.formData) {
    const formData = customEvent.detail.formData
    console.log('Datos del formulario recibidos en Vue:', formData)
    submissionMessage.value = 'Enviando datos al servidor NestJS...'
    isError.value = false

    try {
      const apiUrl = 'http://3.148.247.237/api/libros-corporativos/health'

      const response = await fetch(apiUrl.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        let errorMessage = `Error del servidor: ${response.status} ${response.statusText}`
        try {
          const errorData = await response.json()
          errorMessage = errorData.message || errorMessage
        } catch (e) {}
        throw new Error(errorMessage)
      }

      const result = await response.json()
      console.log('Respuesta del servidor NestJS:', result)
      submissionMessage.value = result.message || '¡Operación completada con éxito!'
      isError.value = false
    } catch (error: any) {
      console.error('Error al enviar datos a NestJS:', error)
      submissionMessage.value = error.message || 'Ocurrió un error al procesar la solicitud.'
      isError.value = true
    }
  } else {
    console.warn('Evento formSubmitted de WC no contenía formData en event.detail')
    submissionMessage.value =
      'Error: Datos del formulario no recibidos correctamente del Web Component.'
    isError.value = true
  }
}

onMounted(() => {
  formElement = document.getElementById('libroFormWC')
  if (formElement) {
    formElement.addEventListener('formSubmitted', handleFormSubmissionFromWC as EventListener)
  } else {
    console.error('Elemento Web Component #libroFormWC no encontrado.')
  }
})

onBeforeUnmount(() => {
  if (formElement) {
    formElement.removeEventListener('formSubmitted', handleFormSubmissionFromWC as EventListener)
  }
})
</script>
