import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect:'/ebook'
		},
		{
			path: '/ebook',
			component:()=>import('./views/ebook/index.vue'),
			children:[
				{
					path:':fileName',       //设置动态路由
					component:()=>import('./components/ebook/EbookReader.vue')
				}
			]
		}
	]
})