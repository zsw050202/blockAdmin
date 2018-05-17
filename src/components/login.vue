<template>
	<div class="login-wrapper">
		<div class="form">
			<h2 class="title">zswBloc后台管理登录</h2>
			<!-- 登陆表单 -->
			<el-form ref="form" onsubmit="return false;">
				<el-form-item>
					<el-input v-model="form.username" placeholder="请输入管理员用户名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input type="password" v-model="form.userpwd" placeholder="请输入管理员密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="login">登陆</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				form: {
					username: '',
					userpwd: ''
				}
			};
		},
		methods: {
			login () {
				console.log(document.cookie);
				this.$axios.post(apiPort.login, {
					username: this.form.username,
					password: this.form.userpwd
				}).then((res) => {
					if (res.data.status == 1) {
						// 登陆成功
						this.$message.success('welcome back sir');
					} else {
						// 登陆失败
						this.$message.error(res.data.msg);
					}
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.login-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #aaa;
		text-align: center;
		.form {
			position: absolute;
			top: 30%;
			left: 50%;
			margin-left: -15%;
			width: 30%;
			background: #fff;
			padding: 20px;
			border-radius: 5px;
			.title {
				margin-bottom: 20px;
			}
		}
	}
</style>