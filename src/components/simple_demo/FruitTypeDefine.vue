<template>
    <div>
        <ul>
            <li class="flex-wrap">
                <label>name</label>
                <label>cnName</label>
                <label>number</label>
                <label> </label>
            </li>
            <li class="flex-wrap fruit-li" v-for="(fruit, index) in LocalFruitList">
                <input type="text" class="fruit-input" id="fruit-name" v-model="fruit.name">
                <input type="text" class="fruit-input" id="fruit-cn-name" v-model="fruit.cnName">
                <input type="number" class="fruit-input" id="fruit-number" v-model="fruit.number">
                <button @click="deleteThisFruit(index)">X</button>
            </li>
        </ul>
        <Box gap="10px 10px" @click.native="addNewFruit">
            <XButton :gradients="['#1D62F0', '#19D5FD']" type="button">
                添加新水果
            </XButton>
        </Box>
        <Box gap="10px 10px" @click.native="submitChange">
            <XButton :gradients="['#1D62F0', '#19D5FD']" type="button" >
                提交更改
            </XButton>
        </Box>
    </div>

</template>

<script>
    import {XButton, Box} from 'vux'
    export default {
        name: 'FruitTypeDefine',
        components: {
            XButton,
            Box
        },
        created() {
            /*从store中复制水果列表*/
            this.LocalFruitList = JSON.parse(JSON.stringify(this.$store.state.fruitList));
        },
        data () {
            return {
                LocalFruitList: []
            }
        },
        computed: {
            /**
             * @desc 得到水果map对象
             */
            fruitMap() {
                return getArrayMapById(this.LocalFruitList);
            }
        },
        /**
         * @desc 删除数组中的一项
         * @param 要删除的索引
         */
        methods: {
            /**
             * @desc 从本地水果列表中删除一种水果
             **/
            deleteThisFruit(fruitIndex) {
                this.LocalFruitList.splice(fruitIndex, 1);
            },
            /**
             * @desc 编辑完成，向store提交新水果列表，并且跳转到买水果页面
             **/
            submitChange() {
                /*判断水果的name是否有重复*/
                if(!this.isHasRepeatName()) {
                    alert('水果的name重复，无法添加');
                    return false;
                }

                /*新的水果列表提交到store*/
                this.$store.commit('updateFruitList', this.LocalFruitList);

                //提示操作成功
                this.$vux.toast.show({
                    isShowMask: true,
                    position: 'middle',
                    time: 1000,
                    text: '更新列表成功,跳转中',
                    onHide: () => {
                        this.$router.push('/buy_fruit');
                    }
                });
            },
            /**
             * @desc 向本地水果列表添加水果
             **/
            addNewFruit() {
                this.LocalFruitList.push(
                    {name: 'example', cnName: 'example', number: 0},
                );
            },
            /**
             * @dsc 是否有重名的水果
             * @return {Boolean} 重名false, 不重名true
             **/
            isHasRepeatName() {
                let mapLength = Object.getOwnPropertyNames(this.fruitMap).length;
                let ListLength = this.LocalFruitList.length;
                console.log(mapLength, ListLength);
                return mapLength === ListLength;
            },
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


<style scoped>
.fruit-input {
    width: 50px;
}

.flex-wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.fruit-li {
    margin-bottom: 1rem;
}
</style>
