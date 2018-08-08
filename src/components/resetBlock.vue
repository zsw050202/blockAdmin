<template>
	<div class="resetBlock-wrapper">
		<h3 class="title">修改博客</h3>
		<!-- 富文本编辑器 -->
		<div ref="editor" style="text-align:left;background:#fff"></div>
		<el-button class="confirm-btn" type="primary" @click="submit">确认修改</el-button>
	</div>
</template>

<script>
	// 富文本编辑器
	import E from 'wangeditor';

	export default {
		mounted () {
			this.artId = this.$route.query.id;
			this.getArticle();
		},
		data () {
			return {
				artId: '',
				queryArticle: '',
				contents: '',
				editorContent: ''
			};
		},
		methods: {
			getArticle () {
				this.$axios.get(apiPort.queryArticle, {
					params: {id: this.artId}
				}).then((res) => {
					this.isLogin(res);
					// 初始化编辑编辑器
					var editor = new E(this.$refs.editor);
        			editor.customConfig.onchange = (html) => {
        				this.editorContent = html;
		        	}
		        	editor.create();
		        	editor.txt.html(res.data.data.contents);

				});
			},
			submit () {
				// console.log(this.$refs.ue.getUEContent());
				this.$axios.post(apiPort.updateArticle, {id: this.artId, contents: this.editorContent}).then((res) => {
					this.isLogin(res);
					if (res.data.status == 1) {
						this.$message.success(res.data.msg);
					} else {
						this.$message.error(res.data.msg);
					}
				});
				// console.log(this.contents);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.resetBlock-wrapper {
		height: 100%;
		.title {
			margin-bottom: 15px;
		}
		.quill-editor {
			background: #fff;
		}
		.confirm-btn {
			margin-top: 20px;
		}
	}
</style>