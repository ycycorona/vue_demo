<template>
    <div>
        <group>
            <Datetime
                v-model="flightDate"
                title="日期："></Datetime>
            <XInput title="航班号：" v-model="flightNo"></XInput>
            <popup-picker
                title="排序："
                :data="sortList"
                v-model="sortType"
                show-name
            ></popup-picker>
        </group>
        <Box gap="10px 10px" @click.native="doSearch">
            <XButton :gradients="['#1D62F0', '#19D5FD']">确定</XButton>
        </Box>
        <Divider >航班动态展示</Divider >
    </div>
</template>

<script>
    import { Group, Cell, XInput, Datetime, PopupPicker, XButton, Box, Divider } from 'vux'
    import ajaxDataSerialize from '../../lib/ajaxDataSerialize';
    export default {
        components: {
            Group,
            Cell,
            XInput,
            Datetime,
            PopupPicker,
            XButton,
            Box,
            Divider
        },
        data () {
            return {
                sortList: [[{
                    name: '机号',
                    value: '0'
                },{
                    name: '计飞',
                    value: '1'
                }]],
            }
        },
        computed: {
            flightDate: {
                get () {
                    return this.$store.state.flightDate
                },
                set (newValue) {
                    this.$store.commit('updateFlightDate', newValue)
                }
            },
            flightNo: {
                get () {
                    return this.$store.state.flightNo
                },
                set (newValue) {
                    this.$store.commit('updateFlightNo', newValue)
                }
            },
            sortType: {
                get () {
                    return this.$store.state.sortType
                },
                set (newValue) {
                    this.$store.commit('updateSortType', newValue)
                }
            }
        },
        methods: {
            doSearch () {
                this.$store.dispatch('getRemoteData');
                console.log('搜索');
            },
        }
    }

</script>

<style>
    .flex-wrap {
        display: flex;
        justify-content: space-around;
        align-items: center;

    }

    .flex-wrap > .item-left {
        flex: 8;
    }

    .flex-wrap > .item-right {
        flex: 5;
    }

    .flex-wrap > .item-right.item-right-edge {
        flex: 1;
    }
</style>
