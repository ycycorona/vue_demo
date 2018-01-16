<template>
    <div>
        <div class="flight-item " style="display: block"
        @click="toggleIsShowFlightListItemFoot"
        :class="{'completed-flight': flightDataItem.ata}"
        >
            <!-- 航班在当前页面中的显示序号 -->
            <div class="flex-wrap  main-card" style="padding: 0.5rem 0">
                <!--卡片左侧-->
                <div class="item-left ">
                    <div class="flex-wrap">
                        <div class=" flight-city" style="text-align: center;font-size: 13px;flex: 1">
                            <span class="departureAirportName">{{itemMain.departureAirportName}}</span><span>{{itemMain.outBay}}</span>
                        </div>
                        <div class=" " style="text-align: center;flex: 1">
                            <div class="arrow-top-text flightNo">{{itemMain.flightNo}}</div>
                            <div class="icon-arrow"><i class="icon-arrow-line"></i> <!----></div>
                            <div class="arrow-bottom-text acReg">{{itemMain.acReg}}</div>
                        </div>
                        <div class="flight-city seat-num" style="text-align: center;font-size: 13px;flex: 1">
                            <span class="arrivalAirportName">{{itemMain.arrivalAirportName}}<span>{{itemMain.bay}}</span></span>
                        </div>
                    </div>
                </div>
                <!--卡片右侧-->
                <div class="item-right ">
                    <div class="" style="font-size:12px">
                        <span class="up-down up">起</span>
                        <span class="std fix-width-1">{{itemMain.std}}</span>(<span style='white-space:pre;' class="atd-etd fix-width-1">{{itemMain.atdEtd}}</span>
                        <span style='white-space:pre;' class="time-type up fix-width-2" v-if="itemMain.atdEtd">{{itemMain.dFlag}}</span>)
                    </div>
                    <div class="" style="font-size:12px">
                        <span class="up-down down">落</span>
                        <span class="sta fix-width-1">{{itemMain.sta}}</span>(<span style='white-space:pre;' class="ata-eta fix-width-1">{{itemMain.ataEta}}</span>
                        <span style='white-space:pre;' class="time-type down fix-width-2" v-if="itemMain.ataEta">{{itemMain.aFlag}}</span>)
                    </div>
                </div>
                <div class="item-right item-right-edge">
                    <span class="delay-status "></span>
                </div>
            </div>
            <FlightListItemFoot
            v-show="isShowFlightListItemFoot"
            :flightDataItem="flightDataItem"
            >
            </FlightListItemFoot>
        </div>
    </div>
</template>

<script>
    import {Group, Cell} from 'vux'
    import FlightListItemFoot from './FlightListItemFoot.vue'
    export default {
        components: {
            Group,
            Cell,
            FlightListItemFoot
        },
        props: {
            flightDataItem: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                isShowFlightListItemFoot: false //航班页脚是否显示
            }
        },
        computed: {
            /*卡片主题部分的内容*/
            itemMain () {
                let flightDataItem = this.flightDataItem;

                let computedItem = {
                    departureAirportName: flightDataItem.departureAirportName,
                    outBay: flightDataItem.outBay ? '('+flightDataItem.outBay+')' : '',
                    flightNo: flightDataItem.flightNo,
                    acReg: 'B' + flightDataItem.acReg,
                    arrivalAirportName: flightDataItem.arrivalAirportName,
                    bay: flightDataItem.bay ? '('+flightDataItem.bay+')' : '',
                    std: flightDataItem.std.slice(11, 16), //计飞
                    atdEtd: flightDataItem.atd === "" ? flightDataItem.etd.slice(11, 16) : flightDataItem.atd.slice(11, 16),//预飞或者实飞
                    dFlag: flightDataItem.atd === "" ? '预' : '实',
                    sta: flightDataItem.sta.slice(11, 16), //计达
                    ataEta: flightDataItem.ata === "" ? flightDataItem.eta.slice(11, 16) : flightDataItem.ata.slice(11, 16),//预达或者实达
                    aFlag: flightDataItem.ata === "" ? '预' : '实'
                };
                if (computedItem.atdEtd === ''){
                    computedItem.atdEtd = '         ';
                }
                if (computedItem.ataEta === ''){
                    computedItem.ataEta = '         ';
                }
                return computedItem;
            }
        },
        methods: {
            /**
             * @desc 切换航班页脚的显示状态
             */
            toggleIsShowFlightListItemFoot () {
                this.isShowFlightListItemFoot = !this.isShowFlightListItemFoot;
            }
        }
    }
</script>

<style>
    .flight-item {
        display: block;
        background-color: #fff;
        color: black;
        margin-bottom: .3rem;
        border-radius: 5px;
        border: solid 1px #e1e1e8;
    }

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
        text-align: left;
        font-size: 12px;
        line-height: 1.8;
    }

    .flex-wrap > .item-right.item-right-edge {
        flex: 1;
    }

    /*线*/
    .arrow-top-text {
        font-size: 12px;
        margin-bottom: -0.8rem;
    }

    .arrow-bottom-text {
        font-size: 12px;
        margin-top: -0.7rem;
    }

    .icon-arrow {
        width: 90%;
        height: .4rem;
        display: inline-block;
        position: relative;
    }

    .icon-arrow {
        -ms-flex-item-align: start;
        align-self: flex-start;
    }

    .icon-arrow-line {
        position: absolute;
        left: 0;
        width: 100%;
        transform: translateY(-50%);
    }

    .icon-arrow-line:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        background: #ccc;
    }

    .icon-arrow-line:after {
        content: '';
        position: absolute;
        right: -1px;
        bottom: -1px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: .2rem .2rem .2rem 0;
        border-color: transparent transparent #ccc;
    }

    /*起落*/
    .up-down.up {
        padding: 1px;
        background-color: #e26b0a;
        color: #ffffff;
    }

    .up-down.down {
        padding: 1px;
        background-color: #76933c;
        color: #ffffff;
    }

    /*延误类型*/
    .delay-status.cancel {
        padding: 2px;
        background-color: red;
        color: #ffffff;
        padding-left: 4px;
        padding-right: 4px;
    }

    .delay-status.yan {
        padding: 2px;
        background-color: #f0ad4e;
        color: #ffffff;
    }

    .delay-status.bei {
        padding: 2px;
        background-color: #f0ad4e;
        color: #ffffff;
    }

    .delay-status.fan {
        padding: 2px;
        background-color: #f0ad4e;
        color: #ffffff;
    }

    .flight-person .member-num {
        padding: 0 0.2rem;
    }

    .scew-margin {
        margin-left: 0.5em;
    }

    /*页脚*/
    .flight-person {
        color: white;
        background-color: #216bba;
        border-radius: 0 0 5px 5px;
    }

    .flight-person > div {
        line-height: 1.2;
    }

    .flight-person span {
        font-size: 12px;
    }

    .person-wrap.no-dec {
        word-break: break-all;
    }

    .person-wrap a {
        margin-right: 0.5rem;
        color: white;
    }

    a.no-dec {
        color: black;
    }

    .flight-person span {
        font-size: 12px;
    }

    .completed-flight {
        background: rgb(181, 181, 184);
        color: white
    }
</style>
