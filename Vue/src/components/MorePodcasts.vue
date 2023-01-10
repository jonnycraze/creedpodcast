<script setup lang="ts">
    import Podcast from '../interfaces/podcast';
    import PodcastCategory from '../interfaces/podcastCategory';
    import Select from './Select.vue';
    import CondensedBlurb from './CondensedBlurb.vue';
    import { defineProps, reactive, computed, toRefs, ref } from 'vue';
    const categories = ['All','Technology','Web Design'];
    const props = defineProps<{ data: Array<PodcastCategory> }>();
    const { data } = toRefs(props);
    const state = reactive({
        filterBy: 'All'
    });

    const dataToShow = computed(() => {
        const array = data?.value;

        if (state.filterBy === 'All') {
            let _data: (Podcast)[] = [];

            array.forEach(d => {
                d.podcasts = d.podcasts.map(p => {
                    return {
                        ...p,
                        category: d.name,
                    }
                });
                _data = [..._data, ...d.podcasts];
            });

            _data = _data.sort((a, b) => {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            });
            return _data;
        }

        return array.find(d => d.name === state.filterBy)?.podcasts;
    });

    const selectCategory = (value:string) => {
        state.filterBy = value;
    }
</script>

<template>
    <div class="container" data-testid="morePodcasts">
        <h2 class="headline">More Procasts about Web Design &amp; Technology</h2>
        <Select data-testid="selectCategory" label="Categories" :options="categories" @change="selectCategory" />
        <template v-if="dataToShow">
            <div data-testid="totalPodcasts" class="totalData">Total Podcasts: {{ dataToShow.length }}</div>
            <CondensedBlurb data-testid="condensedBlurb" v-for="item in dataToShow" :data="item" :key="item.id" />
        </template>
    </div>
</template>

<style scoped lang="scss">
@import '../css/variables.scss';
.container {
    width: $width-contentContainer;
    margin: $spacing-lg auto;
    padding-top: $spacing-lg;
    border-top: 1px solid $color-lightGray;

    @media screen and (max-width: $screen-tablet) {
        width: auto;
        padding: 0 $spacing-md;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
    }
}

.headline {
    font-size: $font-H2;
    color: $color-darkPurple;
}

.totalData {
    color: $color-lightGray;
    font-style: italic;
    font-family: $font-workSans;
    margin: 4px 0 $spacing-md;
    opacity: .75;
}
</style>
