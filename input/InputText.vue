<template>
  <div class="form-control w-full">
    <div v-if="props.labelName" class="label">
      <span class="label-text">{{ props.labelName }}</span>
    </div>
    <label class="input input-bordered flex items-center gap-2">
      <input
        class="grow"
        v-bind="{ ...$attrs, class: undefined }"
        v-model="value"
        type="text"
        :placeholder="props.placeholder"
      />
    </label>
    <div v-if="errorMessage" class="label">
      <span class="label-text-alt text-red-500">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { watch } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    labelName?: string
    placeholder?: string
    emptyUndefined?: boolean
  }>(),
  {
    emptyUndefined: true,
  },
)

const { value, errorMessage } = useField(() => props.name)

if (props.emptyUndefined) {
  watch(value, newValue => {
    if (newValue !== '') {
      return
    }
    value.value = undefined
  })
}
</script>
