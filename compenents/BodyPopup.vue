<template>
  <Teleport to="body">
    <div class="fixed w-[100vw] h-[100vh] left-0 top-0">
      <div ref="popupLabel" class="bg-slate-300 flex">
        <div class="flex-1 text-center flex items-center justify-center">
          <slot name="label"></slot>
        </div>
        <div class="flex items-center mx-4">
          <button @click="emit('event:close')">
            <Icons.X></Icons.X>
          </button>
        </div>
      </div>
      <div
        class="backdrop-blur-sm"
        :style="{
          height: bodyHeight,
        }"
      >
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import { Icons } from '#src/frontm/icons/index.ts'
import { computed, useTemplateRef } from 'vue'
import { useElementBounding } from '@vueuse/core'

const emit = defineEmits<{
  (e: 'event:close'): void
}>()

const popupLabel = useTemplateRef('popupLabel')
const popupLabelBound = useElementBounding(popupLabel)

const bodyHeight = computed(() => {
  return `calc(100vh - ${popupLabelBound.bottom.value}px)`
})
</script>
