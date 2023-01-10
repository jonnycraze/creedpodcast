
<script setup lang="ts">
    import Podcast from '../interfaces/podcast';
    import { defineProps, toRefs  } from 'vue';
    import BlurbLinks from './BlurbLinks.vue';

    defineProps<{ data: Podcast }>();
</script>

<template>
    <div class="content">
        <!-- <pre>{{ data }}</pre> -->
        <img class="thumbnail" :src="data.thumbnail" :alt="data.title" />
        <div class="body">
            <h3 class="title">{{ data.title }}</h3>
            <p class="publisher">By: {{ data.publisher }}</p>
            <small>{{data.category}} | {{data.country}}</small>
            <small class="totalEpisodes">{{ data.total_episodes }} Episodes</small>
            <BlurbLinks :data="data" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../css/variables.scss';

.content {
    background-color: $color-white;
    border-radius: 3px;
    box-shadow: 0 0 12px $color-purpleShadow;
    display: flex;
    line-height: 16px;
    margin-bottom: 36px;
    padding: $spacing-md;
    position: relative;
    max-width: 700px;
    font-size: $font-Normal;

    padding: $spacing-sm;
    
    @media screen and (max-width: $screen-tablet) {
        flex-direction: row;
        max-width: inherit;
    }

    .title {
        margin: 0 0 $spacing-sm;
    }

    .thumbnail {
        width: 80px;
        height: 80px;
    }

    .body {
        padding: 0 $spacing-sm;
        flex: 1;

        .totalEpisodes {
            display: block;
            font-family: $font-workSans ;
        }
        .publisher {
            margin: 0 0 4px;
        }
    }

}
</style>
