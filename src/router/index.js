import Vue from 'vue';
import Router from 'vue-router';
import vUsers from '@/components/vUsers';
import addAritcle from '@/components/addArticle';
import resetBlock from '@/components/resetBlock';
import articles from '@/components/articles';
import demo from '@/components/demo';

Vue.use(Router);

export default new Router({
	routes: [
	    {
	    	path: '/',
	    	name: 'vUsers',
	    	component: vUsers
	    },
	    {
	    	path: '/addArticle',
	    	name: 'addArticle',
	    	component: addAritcle
	    },
	    {
	    	path: '/resetBlock',
	    	name: 'resetBlock',
	    	component: resetBlock
	    },
	    {
	    	path: '/articles',
	    	name: 'articles',
	    	component: articles
	    },
	    {
	    	path: '/demo',
	    	name: 'demo',
	    	component: demo
	    }
	]
})
