<template>
  <div class="form-control w-full">
    <div v-if="props.labelName" class="label">
      <span class="label-text">{{ props.labelName }}</span>
    </div>
    <select v-model="value" class="select select-bordered select-sm w-full">
      <option v-if="props.nullable" :value="undefined">Не выбрано</option>
      <template v-for="item in props.values" :key="item.id">
        <option :value="item.id" :disabled="item.disabled">
          {{ item.value }}
        </option>
      </template>
    </select>
    <div v-if="errorMessage" class="label">
      <span class="label-text-alt text-red-500">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { type TSelect } from '#src/frontm/input/index.ts'
import { watch } from 'vue'

const props = defineProps<{
  name: string
  labelName?: string
  placeholder?: string
  nullable?: boolean
  values: TSelect[]
}>()

const emit = defineEmits<{
  (e: 'change', v: number | string | undefined): void
}>()

const { value, errorMessage } = useField(() => props.name)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
watch(value, newValue => emit('change', newValue))
</script>
