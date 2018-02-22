<template>
    <div id="vue-content" v-cloak style="margin-top: 30px;padding: 0 10px">
        <div style="text-align: center;margin-bottom: 1rem">{{msg}}</div>
        <div class="btn-row">
            <span>买水果：</span>
            <button
                v-for="(fruit, index) in fruitList"
                type="button"
                class="buy-btn"
                @click="addOne(fruit.name)">
                购买一个{{fruit.cnName}}
            </button>
        </div>
        <div class="btn-row">
            <span>吃水果：</span>
            <button
                v-for="(fruit, index) in fruitList"
                type="button"
                class="eat-btn"
                @click="eatOne(fruit.name)">
                吃一个{{fruit.cnName}}
            </button>
        </div>
        <div class="display-row">
            <span>现在分别有：</span>
            <span
            v-for="(fruit, index) in fruitList">
                {{fruit.cnName}}:{{fruit.number}}
            </span>
        </div>
        <div class="display-row">
            <span>现在一共有水果：{{sumFruitNumber}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'buyFruit',
        created() {
        },
        data () {
            return {
                msg: '买水果示例'
            }
        },
        computed: {
            /**
             * @dsc 从store获取水果列表, 注意只能get,不能set
             **/
            fruitList() {
                return this.$store.state.fruitList;
            },
            /**
             * @desc 得到某种水果在数组中的位置
             */
            fruitMap() {
                return getArrayMapById(this.fruitList);
            },
            /**
             * @desc 计算水果总数
             */
            sumFruitNumber() {
                let sumNumber = 0;
                this.fruitList.forEach(function (thisFruit, index, fruitList) {
                    sumNumber += Number(thisFruit.number);
                });
                return sumNumber;
            },
        },
        methods: {
            /**
             * @desc 购买一个‘水果’
             * @param name 水果的名字
             */
            addOne(name) {
                //currentFruit当前要操作的水果
                let currentFruit = this.fruitList[this.fruitMap[name]];

                let newNumber = currentFruit.number + 1;
                let fruitIndex = this.fruitMap[name];
                this.$store.commit('updateFruitNumber', {index: fruitIndex, value: newNumber});
            },
            /**
             * @desc 吃掉一个‘水果’
             * @param name 水果的名字
             */
            eatOne(name) {
                let currentFruit = this.fruitList[this.fruitMap[name]];

                //如果已经没吃了，给予提示
                if (currentFruit.number > 0) {
                    let newNumber = currentFruit.number -1;
                    let fruitIndex = this.fruitMap[name];
                    this.$store.commit('updateFruitNumber', {index: fruitIndex, value: newNumber});
                } else {
                    alert(currentFruit.cnName + '已经没有了，不买还想吃？');
                }

            }
        }

    }


    /*通用工具函数*/
    /**
     * @通过name返回map,
     * @param array {Array}
     * @param {Object}
     * */
    function getArrayMapById(array) {
        let obj = {};
        array.forEach(function (item, index, thisArray) {
            obj[item.name] = index;
        });
        return obj;
    }


</script>

<style>
    .btn-row,
    .display-row {
        margin-bottom: 1rem;
    }

    .eat-btn:not(:first-of-type),
    .buy-btn:not(:first-of-type) {
        margin-left: 0.5rem;
    }
    [v-cloak] {
        display: none;
    }
</style>
