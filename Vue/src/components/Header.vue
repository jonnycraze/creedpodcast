<script setup lang="ts">
  import Navigation from './Navigation.vue';
</script>

<template>
    <header class="header">
        <Navigation />
        <div class="banner">
            <div class="headlineWrapper">
                <h1 class="headline">
                    Top 5 
                    <span class="headlineAccent">Web Design</span> 
                    Podcasts
                </h1>
                <div class="flourish1"></div>
                <div class="flourish2"></div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">

    .header {
        width: 100%;
        margin-bottom: $spacing-lg;
    }

    .banner {
        background-color: $color-darkPurple;
        text-align: center;
        height: 134px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;

        @media screen and (max-width: $screen-tablet) {
            height: 215px;
        }
    }

    .headline {
        font-size: $font-H1;
        color: $color-white;
        position: relative;
        z-index: 20;
        line-height: $font-H1;

        &Wrapper {
            padding: 0 100px;
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &Accent {
            font-weight: bold;
            background: linear-gradient(to right, $color-orange 0%, $color-lightPurple 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            @media screen and (max-width: $screen-tablet) {
                display: block;
                margin-top: 8px;
            }
        }
    }

    .flourish1 {
        background: linear-gradient(to right, $color-orange 0%, $color-lightPurple 100%);
        border-radius: 246px; 
        height: 246px;
        opacity: .6;
        position: absolute;
        right: 0;
        top: -150px;
        width: 246px; 
        z-index: 10;
        transition: ease all 1.1s;
        
        @media screen and (max-width: $screen-tablet) {
            border-radius: 317px; 
            height: 317px;
            right: -110px;
            top: -220px;
            width: 317px;
        }
    }
    .flourish2 {
        width: 0; 
        height: 0; 
        border-left: 80px solid transparent;
        border-right: 80px solid transparent;
        border-bottom: 110px solid rgba(255,182,150,0.7);
        position: absolute;
        z-index: 10;
        bottom: 0;
        right: 0;
        transition: ease all 1.1s;
        
        @media screen and (max-width: $screen-tablet) {
            border-left-width: 100px;
            border-right-width: 100px;
            border-bottom-width: 140px;
            right: -60px;
        }
    }
</style>
