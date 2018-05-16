import Vue from 'vue';
import Router from 'vue-router';
import vUsers from '@/components/vUsers';
import addAritcle from '@/components/addArticle';
import resetBlock from '@/components/resetBlock';
import articles from '@/components/articles';
import demo from '@/components/demo';
import login from '@/components/login';

Vue.use(Router);



let router = new Router({
	routes: [
	    {
	    	path: '/',
	    	name: 'vUsers',
	    	component: vUsers,
	    	meta: { requiresAuth: true }
	    },
	    {
	    	path: '/login',
	    	name: 'login',
	    	component: login,
	    },
	    {
	    	path: '/addArticle',
	    	name: 'addArticle',
	    	component: addAritcle,
	    	meta: { requiresAuth: true }

	    },
	    {
	    	path: '/resetBlock',
	    	name: 'resetBlock',
	    	component: resetBlock,
	    	meta: { requiresAuth: true }

	    },
	    {
	    	path: '/articles',
	    	name: 'articles',
	    	component: articles,
	    	meta: { requiresAuth: true }

	    },
	    {
	    	path: '/demo',
	    	name: 'demo',
	    	component: demo
	    }
	]
})

/* 权限控制 */
router.beforeEach((to,from,next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// 判断是否登陆
		if (true) {
			next({
				path: '/login'
			});
		} else {
			next();
		}
	} else {
		next();
	}	
});


export default router;
