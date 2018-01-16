<template>
    <!--页脚-->
    <div class="flight-person crew-collapse" style="padding: 0 0.75rem;">
        <div class="captainPerson person-wrap">
            <span class="bolder-span">飞行员：</span>
        </div>
        <div class="stewardPerson person-wrap">
            <span class="bolder-span">乘务员：</span>
        </div>
        <div class="safetyPerson person-wrap">
            <span class="bolder-span">安全员：</span>
        </div>
        <div class="randomPerson person-wrap">
            <span class="bolder-span randomPerson-title">加机组：</span>
        </div>
        <div calss="">
            <span class="aircrew-num-title">机组人数：</span>
            <span class="airCrewNum "></span>
            <span class="StewardNum "></span>
            <span class="otherCrewNum "></span>
        </div>
        <div>
            <span class="flightStatus-name-title">航班状态：</span>
            <span class="flightStatusName "></span>
            <span class="scew-margin delayReason1-wrap">
                <span class="delay-reason1-title">延误原因：</span>
                <span class="delayReason1"></span>
            </span>
        </div>
        <div class="flex-wrap">
            <div class="close-door-time-wrap" style="text-align: left;flex: 1">
                <span class="close-door-time-title">关舱时间：</span>
                <span class="close-door-time"></span>
            </div>
            <div class="scew-margin out-time-wrap" style="text-align: left;flex: 1">
                <span class="out-time-title">推出时间：</span>
                <span class="out-time"></span>
            </div>
        </div>
        <!-- 备降返航状态 -->
        <div>
            <span class="beifan-wrap">
                <span class="ben-fan-title">备降/返航：</span>
                <span class="beifan"></span>
            </span>
        </div>
    </div>
</template>

<script>
    import { Group, Cell, XInput, Datetime, PopupPicker, XButton, Box, Divider } from 'vux'
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
        props: {
            flightDataItem: {
                type: Object,
                required: true
            }
        },
        data () {
            return {

            }
        },
        computed: {

        },
        methods: {

        }
    }

</script>

<style>

</style>
