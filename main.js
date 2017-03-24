//npm install vue
var Vue = require('vue');
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Vuex from 'vuex'
Vue.use(Vuex);
import VueResource from 'vue-resource'
Vue.use(VueResource);
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper)
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI)
var store = new Vuex.Store({
	state:{
		isLeftPopUp:false,
		isBottomPopUp:false
	},
	mutations:{
		set_fe:function(state,data){
			state.name = data
		},
		set_isLeftPopUp:function(state,data){
			state.isLeftPopUp = data
		},
		set_isBottomPopUp:function(state,data){
			state.isBottomPopUp = data
		}
	}
})
//单页面应用所需要的路由管理
import Index from "./components/index.vue";
import News from "./components/news.vue";
//import Players from "components/channels/players.vue";
//import Heros from "./components/channels/Heros.vue";
//import ChampionDetail from "./components/championdetail.vue";
var router = new VueRouter({
	routes:[
		{
			path:'/index',
			component:Index,
			children:[
				{
					path:'news/:id',
					component:News
				}/*，{
					path:'players/:id',
					component:Players
				},
				{
					path:'heros/:id',
					component:Heros
				},
				{
					path:'videos/:id',
					component:Videos
				}*/
			]
		},
		/*{
			path:'/detail/:id',
			component:ChampionDetail
		}*/
		{
			path:'/',
			redirect:'/index/news/1'
		}
	]
})
/*router.redirect({
			'*':'/index/news/:id'
		})*/
new Vue({
	router:router,
	store:store
}).$mount('#lol')