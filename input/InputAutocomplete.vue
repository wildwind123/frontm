<template>
  <div class="w-full relative">
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" class="grow" placeholder="Search" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="h-4 w-4 opacity-70"
      >
        <path
          fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </label>
    <ul>
      <li
        class="p-1 border cursor-pointer hover:bg-slate-300"
        v-for="item in props.items"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { type TAutoComplete } from '#src/frontm/input/input.ts'

const props = defineProps<{
  items: TAutoComplete[]
  selected?: TAutoComplete
}>()
</script>
