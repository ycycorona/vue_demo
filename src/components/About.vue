<template>
    <div>
        <div class="vux-demo">
            <div class="title">{{title}}</div>
            <div style="white-space: pre;text-align: center">{{msg}}</div>
        </div>

        <div style="text-align: center">
            <div>count: {{count}}</div>
            <div>count/2: {{countDivide2}}</div>
            <XButton
            type="primary"
            @click.native="clickPlusOne"
            mini>
                点击count+1
            </XButton>
        </div>

        <group>
            <x-input title="" v-model="title"></x-input>
            <x-input title="" v-model="title"></x-input>
        </group>
    </div>
</template>

<script>
    import { Group, Cell, XButton, XInput} from 'vux'
    export default {
        components: {
            Group,
            Cell,
            XButton,
            XInput
        },
        mounted() {
            this.$vux.toast.text('mounted钩子函数触发,并在控制台打印出了实例引用');
            console.log(this);
        },
        data () {
            return {
                title: '这是一个Vue实例项目',
                msg: '展示了vue+webpack+vuex+vue-router+vux\n联合开发环境',
                count: 0,
            }
        },
        computed: {
            /*依赖于data变化，动态计算data/2*/
            countDivide2() {
                return this.count/2;
            }
        },
        methods: {
            clickPlusOne() {
                this.count += 1;
            }
        },
        watch: {
            count(newValue, oldValue) {
                this.$vux.toast.text('count变化为' + newValue);
            }
        }
    }
</script>

<style scoped>
    .vux-demo .title{
        font-size: 16px;
        font-weight: 600;
        text-align: center;
    }
    .vux-demo {
        margin-top: 2em;
        margin-bottom: 5em;
    }
    .vux-demo div {
        padding: 0 30px;
    }
</style>
