<template>
    <div class="hello">
        <group title="导航" gutter="0">
            <cell
                title="航班动态"
                link="/flight_information"
                is-link>
            </cell>
            <cell
                title="买水果"
                link="/buy_fruit"
                is-link>
            </cell>
            <cell
                title="定义水果"
                link="/fruit_type_define"
                is-link>
            </cell>
            <cell
                title="关于"
                link="/about"
                is-link>
            </cell>
        </group>
        <!--<div style="margin-top: 10rem;text-align: center">{{msg}}</div>-->
    </div>

</template>

<script>
    import { Group, Cell } from 'vux'

    export default {
        name: 'Index',
        components: {
            Group,
            Cell
        },
        data () {
            return {
                msg: '大家好'
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
