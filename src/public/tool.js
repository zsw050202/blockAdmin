import Vue from 'vue';
Vue.prototype.isLogin = function (res) {
	if (res.data.isLogin == false) {
		// 转到登陆页面
		this.$message.error('由于您长时间未操作，请重新登陆');
		this.$router.push('/');
		return false;
	}
}

/* 公共方法中不使用this参数时，可使用以下方法 */
// let publicFun = {};
// // 公共方法 --判断是否在登陆状态
// publicFun.isLogin = function(res) {
// 	if (res.isLogin == false) {
// 		// 转到登陆页面
// 		router.push('/');
// 		return false;
// 	}
// }

// export default publicFun;