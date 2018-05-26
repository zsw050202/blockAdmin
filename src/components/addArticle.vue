<template>
	<div class="article-wrapper">
		<h3 class="title">添加博客文章</h3>
		<el-form ref="form" :model="formData" label-width="80px">
			<el-form-item label="题目:">
			    <el-input v-model="formData.title"></el-input>
		    </el-form-item>
		    <el-form-item label="描述:">
			    <el-input v-model="formData.des"></el-input>
		    </el-form-item>
		    <el-form-item label="类型:">
			    <el-radio-group v-model="formData.artType">
			    	<el-radio label="HTML" name="type"></el-radio>
			    	<el-radio label="CSS" name="type"></el-radio>
			    	<el-radio label="Javascript" name="type"></el-radio>
			    	<el-radio label="Node" name="type"></el-radio>
			    	<el-radio label="Database" name="type"></el-radio>
			    	<el-radio label="Server" name="type"></el-radio>
			    	<el-radio label="Life" name="type"></el-radio>
			    </el-radio-group>
		    </el-form-item>
		    <el-form-item label="内容:">
		    	<div  ref="editor" style="text-align:left;background:#fff"></div>
			</el-form-item>
			<el-form-item>
			    <el-button type="primary" @click="submit">创建</el-button>
			    <el-button>取消</el-button>
		    </el-form-item>
		</el-form>
	</div>
</template>

<script>
	// 富文本编辑器
	import E from 'wangeditor';
	export default {
        mounted () {
        	// 初始化富文本编辑器
        	var editor = new E(this.$refs.editor);
        	editor.customConfig.onchange = (html) => {
        		this.editorContent = html;
        	}
        	editor.create();
        },
		data () {
			return {
				formData: {},
				editorContent: ''
			};
		},
		methods: {
			submit () {
				this.formData.contents = this.editorContent;
				// 只做不为空的验证
				if (this.formData.title && this.formData.des && this.formData.artType && this.formData.contents) {
					this.$axios.post(apiPort.addBlock, this.formData).then((res) => {
						this.isLogin(res);
						if (res.data.status == 1) {
							this.$message.success(res.data.msg);
						} else {
							this.$message.error(res.data.msg);
						}
					});
				} else {
					this.$message.error('请检查项目是否填写完整');
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.article-wrapper {
		.title {
			padding-left: 30px;
			padding-bottom: 30px;
		}
	}
</style>