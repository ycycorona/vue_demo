import Vue from 'vue'
import Router from 'vue-router'

/*要通过vue-router加载的不同组件*/
import FlightInformation from '../components/FlightInformation'
import About from '../components/About'
import BuyFruit from '../components/simple_demo/BuyFruit'
import FruitTypeDefine from '../components/simple_demo/FruitTypeDefine'
import Index from '../components/Index'

Vue.use(Router)

export default new Router({
    mode: 'history', //不加这句，启用锚点模式
    routes: [
        {
            path: '/',
            redirect: '/index'},
        {
            name: 'index',
            path: '/index',
            component: Index
        },
        {
            name: 'flight_information',
            path: '/flight_information',
            component: FlightInformation
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'buy_fruit',
            path: '/buy_fruit',
            component: BuyFruit
        },
        {
            name: 'fruit_type_define',
            path: '/fruit_type_define',
            component: FruitTypeDefine
        },
    ]
})
