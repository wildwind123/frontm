<template>
  <Icon v-if="!props.expanded" icon="flowbite:expand-outline" />
  <Icon v-else icon="majesticons:arrows-collapse-full" />
</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const props = defineProps<{
  expanded: boolean
}>()
</script>
