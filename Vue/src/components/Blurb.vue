<script setup lang="ts">
  import { defineProps } from 'vue';
  import Podcast from '../interfaces/podcast';
  import BlurbLinks from './BlurbLinks.vue';
  import Link from './Link.vue';

  defineProps<{ data: Podcast, position: number }>()
</script>

<template>
  <article class="content">
    <div class="contentLeft">
      <div class="contentRank">{{ position }}</div>
      <div class="thumbnailContainer">
        <img class="contentThumbnail" :src="data.image" :alt="data.title" />
      </div>
      <div class="contentLeftBody">
        <h2 class="contentTitle">{{ data.title }}</h2>
        <span class="contentPublisher">
          by <Link :url="data.website" :label="data.publisher" target="_blank" alt />
        </span>
        <span>{{data.total_episodes}} episodes</span>
        <BlurbLinks :data="data" />
      </div>
    </div>
    <div class="contentRight">
      <p class="contentRightDescription">
        {{ data.description }}
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.thumbnailContainer {
    height: 145px;
    margin: $spacing-md;
    width: 145px;
}
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

    @media screen and (max-width: $screen-tablet) {
        flex-direction: column;
    }

    &Title {
        font-size: $font-H2;
        margin: 0 0 $spacing-md;
        line-height: $font-H2;
    }

    &Left {
        margin-left: -45px;
        display: flex;
        flex-direction: row;
        flex-grow: 1;

        &Body {
            display: flex;
            flex-direction: column;
            padding: $spacing-lg;
            width: 60%;
        }
    }
        
    &Rank {
        align-items: center;
        background: $color-orange;
        background: linear-gradient($color-orange 0%, $color-lightPurple 100%);
        border-radius: 50px;
        color: $color-white;
        display: flex;
        height: 50px;
        justify-content: center;
        left: -90px;
        position: absolute;
        top: -5px;
        width: 50px; 
        transition: ease all .25s;
        font-size: $font-H2;
        font-weight: bold;

        @media screen and (max-width: $screen-tablet) {
            left: -12px;
            top: -28px;
        }
    }

    &Thumbnail {
        width: 100%; height: auto;
    }

    &Publisher {
        display: block;
        margin-bottom: $spacing-sm;
    }

    &Right {
        display: flex;

        &Description {
            font-family: 'WorkSans', Arial, Helvetica, sans-serif;
            height: 162px;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 205px;

            @media screen and (max-width: $screen-tablet) {
                height: auto;
                margin-top: $spacing-md;
                width: 100%;
            }
        }
    }

    &Links {
        border-top: 1px solid $color-lightGray;
        margin-top: $spacing-md;
        padding-top: $spacing-sm;
        text-transform: uppercase;

        &Icon {
            margin-right: 4px;
        }
        &Link {
            text-transform: uppercase;
        }
    }
}
</style>
