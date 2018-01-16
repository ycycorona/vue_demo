<template>
    <div id="app">
        <Header
        ref="Header"
        :isShowBack="false"
        :pageTitle="pageTitle"
        @click-reload="reloadPage"
        @click-home="goHomePage">
        </Header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/base_compotents/Header'
    import ajaxDataSerialize from './lib/ajaxDataSerialize'

    //页面名称map
    let pageNameMap = {
        'index': '首页',
        'flight_information': '航班动态',
        'about': '关于',
        'buy_fruit': '买水果',
        'fruit_type_define': '定义水果'
    };
    export default {
        components: {
            Header,
        },
        name: 'app',
        created() {
            console.log('app加载。');
        },
        data () {
            return {
                routeName: 'flight_information'
            }
        },
        computed: {
            /*获取当前路由对应的页面名称*/
            pageTitle () {
                return pageNameMap[this.$route.name];
            }
        },
        methods: {
            /**
             * @desc 刷新页面
             **/
            reloadPage() {
                //this.$router.go(0);
                window.location.reload();
                //this.$store.dispatch('doFlightInformationReload');
            },
            goHomePage() {
                this.$router.push('/index')
            }
        },
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import "style/base.less";
    body {
        /*background-color: #fbf9fe;*/
        background-color: #efeff4;
    }
</style>
