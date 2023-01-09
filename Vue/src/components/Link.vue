<template>
  <a :href="url" :class="linkClass" v-bind="$attrs">
      <slot></slot>
      {{label}}
  </a>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity';
export default {
  props: {
    url: {
      type: String,
    },
    label: {
      type: String,
    },
    alt: {
      type: Boolean,
    }
  },
  setup(props) {
    const linkClass = computed(() => {
      return props.alt ? 'linkAlt' : 'link'
    });

    return { linkClass }
  }
}
</script>

<style scoped lang="scss">
.link {
    color: $color-lightGray;
    margin-right: $spacing-md;
    font-size: $font-Small;
    font-weight: bold;

    &:hover {
        color: $color-darkGray;
    }
}

.linkAlt {
    color: $color-lightPurple;

    &:hover {
        color: $color-darkPurple;
    }

    &:visited {
      color: $color-orange;
    }
}
</style>
