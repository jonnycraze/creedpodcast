<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import data from './assets/data/podcasts-by-genre.json';
  import Header from './components/Header.vue';
  import Blurb from './components/Blurb.vue';
  import MorePodcasts from './components/MorePodcasts.vue';

  const podcasts = ref([
    data[1].podcasts[0],
    data[1].podcasts[9],
    data[1].podcasts[2],
    data[1].podcasts[8],
    data[1].podcasts[7],
  ]);

  const state = reactive({
    showMorePodcasts: false,
  });
</script>

<template>
  <section class="wrapper">
    <Header />
    <div class="content">
      <div v-for="(item, i) in podcasts" :key="i">
        <Blurb :data="item" :position="i+1" />
      </div>
      <button data-testid="findMoreButton" class="showMoreButton" @click="state.showMorePodcasts = true">
        Find More Podcasts
      </button>
    </div>
    <MorePodcasts v-if="state.showMorePodcasts" :data="{data}" />
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
      margin-top: 100vh;
      margin: 0;
      padding: 0;
  }
  .content {
      max-width: 730px;
      margin: 0 auto $spacing-lg;
      padding: 15px 30px 15px 15px;
  }
  .showMoreButton {
    cursor: pointer;
    padding: $spacing-sm $spacing-md;
    background-color: $color-lightPurple;
    color: $color-white;
    border: none;
    font-size: 16px;
    border-radius: 4px;
    letter-spacing: .05rem;
    text-transform: uppercase;
    box-shadow: 2px 2px 4px rgba($color: #000000, $alpha: 0.3);
    transition: all 0.5s;

    &:hover {
        background-color: $color-darkPurple;
        transition: all 0.5s;
    }
  }

</style>

<!-- These styles are unscoped, meaning they cascade as expected and impact the entire application -->
<style lang="scss">  
  @font-face {
    font-family: "SpaceMono";
    src: url('assets/fonts/SpaceMono-Regular.ttf');
    src: url('assets/fonts/SpaceMono-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "SpaceMono";
    src: url('assets/fonts/SpaceMono-Bold.ttf');
    src: url('assets/fonts/SpaceMono-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "WorkSans";
    src: url('assets/fonts/WorkSans-Regular.ttf');
    src: url('assets/fonts/WorkSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: $color-offWhite;
    font-family: 'SpaceMono', Arial, Helvetica, sans-serif;
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
  }

  a:link {
    text-decoration: none;
  }
</style>