<template>
    <div>
        <ToolBar></ToolBar>
        <p
        v-if="isShowLoading"
        style="text-align:center;">
            <inline-loading
            ></inline-loading><span style="vertical-align:middle;display:inline-block;font-size:14px;">&nbsp;&nbsp;加载中</span>
        </p>
        <div
        v-else
        class="flight-ul-wrap">
            <FlightListItem
                v-for="(flightDataItem, index) in flightDataList"
                :key="index"
                :flightDataItem="flightDataItem"
            ></FlightListItem>
        </div>
    </div>
</template>

<script>
    import ajaxDataSerialize from '../lib/ajaxDataSerialize'
    import { InlineLoading } from 'vux'

    import ToolBar from './flight_information_components/ToolBar'
    import FlightListItem from './flight_information_components/FlightListItem'


    export default {
        name: 'FlightInformation',
        components: {
            FlightListItem,
            ToolBar,
            InlineLoading
        },
        data () {
            return {

            }
        },
        created () {
            this.$store.dispatch('getRemoteData');
        },
        computed: {
            flightDataList() {
                return this.$store.state.remoteData;
            },
            isShowLoading() {
                return this.$store.state.isShowLoading;
            }
        },
        methods: {

        }
    }
</script>

<style>
    .vux-header{
        -webkit-box-shadow: 0 1px 6px #ccc;
        box-shadow: 0 1px 6px #ccc;
    }
    .flight-ul-wrap {
        padding: 0 0.4rem;
        margin-top: 5px;

    }
</style>
