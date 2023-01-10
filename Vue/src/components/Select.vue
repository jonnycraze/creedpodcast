<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue';
    const emit = defineEmits(['change'])

    defineProps<{ options: any, label: string, }>();

    const onChange = (v:any) => {
        emit('change', v.currentTarget.value)
    }
</script>

<template>
    <small class="label">{{ label }}</small>
    <select data-testid="select" @change="onChange">
        <option v-for="o in options" :key="o">{{o}}</option>
    </select>
</template>

<style scoped lang="scss">
@import '../css/variables.scss';

select {
    border: 1px solid #c9becb;
    padding: 4px;
    border-radius: 3px;
    font-size: 18px;
    color: $color-darkGray;
}
.label {
    color: $color-darkGray;
    display: block;
    margin: 0 0 4px;
    font-family: $font-workSans;
}
</style>
