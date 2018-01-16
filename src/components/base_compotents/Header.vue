<template>
    <div>
        <x-header
        slot="header"
        style="width:100%;"
        :title="pageTitle"
        :left-options="{showBack: isShowBack}"
        >
        <span slot="right">
            <x-icon @click="emitClickReload" type="ios-reload" size="35" style="fill:#007aff;position:relative;top:-8px;left:-3px;"></x-icon>
        </span>
        <span slot="left" v-if="$route.name!='index'">
            <x-icon @click="emitClickHome" type="ios-home" size="35" style="fill:#007aff;position:relative;top:-8px;left:-3px;"></x-icon>
        </span>
        </x-header>
    </div>
</template>

<script>
    import {XHeader} from 'vux'
    export default {
        components: {
            XHeader
        },
        name: 'Header',
        props: {
            pageTitle: {
                type: String,
                default: ''
            },
            isShowBack: {
                type: Boolean,
                default: false
            }

        },
        data () {
            return {

            }
        },
        methods: {
            emitClickReload() {
                this.$emit('click-reload');
            },
            emitClickHome() {
                this.$emit('click-home');
            }
        }
    }
</script>

<style>
    .vux-header {
        top: 0;
        -webkit-box-shadow: 0 1px 6px #ccc;
        box-shadow: 0 1px 6px #ccc;
    }
</style>
