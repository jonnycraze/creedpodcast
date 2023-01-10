
<script setup lang="ts">
    import Link from './Link.vue';
    import Podcast from '../interfaces/podcast';
    import { defineProps } from 'vue';

    defineProps<{ data: Podcast }>();
</script>

<template>
    <div class="links">
        <Link :url="`https://podcasts.apple.com/us/podcast/alexa-stop-podcast/id${data.itunes_id}`" label="Itunes" target="_blank">
            <fa-icon icon="fa-brands fa-apple" />
        </Link>
        <Link :url="data.website" label="Website" target="_blank">
            <fa-icon icon="fa-solid fa-link" />
        </Link>
        <Link :url="data.rss" label="RSS" target="_blank">
            <fa-icon icon="fa-solid fa-rss" />
        </Link>
    </div>
</template>

<style scoped lang="scss">
@import '../css/variables.scss';

.links {
    border-top: 1px solid $color-lightGray;
    margin-top: $spacing-md;
    padding-top: $spacing-sm;
    text-transform: uppercase;
}
</style>
