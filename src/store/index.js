import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

/*引入ajax工具*/
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin);

/*引入时间工具*/
import { dateFormat } from 'vux'

/*引入参数序列化工具*/
import ajaxDataSerialize from '../lib/ajaxDataSerialize'

/*获取当前时间*/
let nowDateString = dateFormat(new Date(), 'YYYY-MM-DD');

export default new Vuex.Store({
    strict: true, //严格监控错误，产生提示，生产模式下需要关闭！！！
    state: {
        pageTitle: '航班动态',
        flightDate: nowDateString,
        sortType: ['0'],
        flightNo: '',
        remoteData: [], //航班动态远程数据
        isShowLoading: false,  //获取数据加载等待
        fruitList: [
            {name: 'apple', cnName: '苹果', number: 1},
            {name: 'pear', cnName: '梨', number: 2},
            {name: 'peach', cnName: '桃子', number: 3}
        ]
    },
    getters: {

    },
    mutations: {
        updateFruitList (state, newValue) {
            state.fruitList = newValue
        },
        /**
         * @desc 改变某一种水果的数量
         * @param state
         * @param newValueObj {{Number},{Number}} index：数组中的位置；value:新的数量
         */
        updateFruitNumber (state, newValueObj) {
            state.fruitList[newValueObj.index].number = newValueObj.value;
        },
        /*改变某一种水果的name*/
        updateFruitName (state, newValueObj) {
            state.fruitList[newValueObj.index].name = newValueObj.value;
        },
        /*改变某一种水果的cnName*/
        updateFruitCnName (state, newValueObj) {
            state.fruitList[newValueObj.index].cnName = newValueObj.value;
        },
        updateFlightDate (state, newValue) {
            state.flightDate = newValue
        },
        updateSortType (state, newValue) {
            state.sortType = newValue
        },
        updateFlightNo (state, newValue) {
            state.flightNo = newValue
        },
        /*重置用户表单数据*/
        resetUserFormData (state) {
            state.flightDate = nowDateString;
            state.sortType = ['0'];
            state.flightNo = '';
        },
        updateRemoteData (state, newValue) {
            state.remoteData = newValue;
        },

        updateIsShowLoading(state, newValue) {
            state.isShowLoading = newValue;
        }
    },
    actions: {
        /**
         * @desc 发送ajax请求，获取航班动态数据
         * @param context vuex context实例
         */
        getRemoteData (context) {
            ajaxGetData(handlePostData(context), context);
        },

        /**
         * @desc 网上准备页面的局部刷新，包括清空表单和重新加载数据
         * @param context
         */
/*        doFlightInformationReload (context) {
            context.commit('resetUserFormData');
            context.dispatch('getRemoteData', handlePostData(this));
        }*/
    }
});

/**
 * @desc 发送ajax请求,获取数据
 * @param postData 处理好的表单数据
 * @param context actions的context，用以对vuex提交改动
 */
function ajaxGetData(postData, context) {
    context.commit('updateIsShowLoading', true);
    let option = {
        url: '/flightInfo/mobileList.do',
        method: 'post',
        //params: postData,
        data: postData,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    AjaxPlugin.$http.request(option)
        .then((res) => {
            console.log(res);
            context.commit('updateRemoteData', res.data);
        })
        .catch((code) => {
            console.log('获取数据时与后台通讯失败', code);
        }).then(() => {
        context.commit('updateIsShowLoading', false);
    })
}

/**
 * @desc ajax之前处理提交的数据
 * @param thisStore 要引用那个store实例
 * @return {Object} 可以直接发送ajax的数据
 **/

function handlePostData(thisStore) {
    return ajaxDataSerialize({
        flightDate: thisStore.state.flightDate,
        sortType: thisStore.state.sortType,
        flightNo: thisStore.state.flightNo
    })
}
