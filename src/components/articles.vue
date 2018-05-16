<template>
	<div class="articles-wrapper">
		<div class="search-part">
			<el-form :inline="true">
				<el-form-item>
					<el-input v-model="queryTitle" placeholder="输入文章名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="query">查询</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="contents">
			<el-tabs v-model="activeTab" @tab-click="tabChange" tab-position="top">
				<el-tab-pane label="ALL"></el-tab-pane>
			    <el-tab-pane label="HTML"></el-tab-pane>
			    <el-tab-pane label="CSS"></el-tab-pane>
			    <el-tab-pane label="Javascript"></el-tab-pane>
			    <el-tab-pane label="NodeJs"></el-tab-pane>
			    <el-tab-pane label="Database"></el-tab-pane>
			    <el-tab-pane label="Server"></el-tab-pane>
			</el-tabs>
			<el-table :data="tableData" border style="width: 100%" v-loading="loading">
				<el-table-column prop="_id" label="ID"></el-table-column>
				<el-table-column prop="createdAt" label="发表时间"></el-table-column>
				<el-table-column prop="title" label="题目"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
				        <el-button
				           size="mini"
				           @click="handleEdit(scope.row._id)">编辑</el-button>
				        <el-button
				           size="mini"
				           type="danger"
				           @click="handleDelete(scope.row._id)">删除</el-button>
				    </template>
				</el-table-column>
			</el-table>
			<div class="pages">
				<el-pagination
				  	background
				  	@current-change = "getPage"
				  	layout="prev, pager, next"
				  	:total="pages">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted () {
			this.getPage();
		},
		data () {
			return {
				queryTitle: '',
				loading: false,
				activeTab: 0,
				artType: '',
				tableData: [],
				pages: 0
			};
		},
		methods: {
			query () {},
			getPage (page) {
				this.$axios.get(apiPort.articles, {params: {page: page,artType: this.artType}}).then((res) => {
					if (res.data.status == 1) {
						this.tableData = res.data.data;
						this.pages = res.data.pages * 10;
					}
				});
			},
			tabChange () {
				switch (parseInt(this.activeTab)) {
					case 0:
						// all
						this.artType = '';
						this.getPage ();
						break;
					case 1:
						// html
						this.artType = 'HTML';
						this.getPage ();
						break;
					case 2:
						// css
						this.artType = 'CSS';
						this.getPage ();
						break;
					case 3:
						// javascript
						this.artType = 'Javascript';
						this.getPage ();
						break;
					case 4:
						// nodejs
						this.artType = 'Node';
						this.getPage ();
						break;
					case 5:
						// database
						this.artType = 'Database';
						this.getPage ();
						break;
					case 6:
						// server
						this.artType = 'Server';
						this.getPage ();
						break;
				}
			},
			handleEdit (id) {
				this.$router.push({path: '/resetBlock', query: {id: id}});
			},
			handleDelete (id) {
				this.$axios.post(apiPort.deleteArticle, {id: id}).then((res) => {
					if (res.data.status == 1) {
						this.$message.success(res.data.msg);
						this.getPage();
					} else {
						this.$message.error(res.data.msg);
					}
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.articles-wrapper {
		.contents {
			.pages {
				text-align: center;
				margin-top: 10px;
			}
		}
	}
</style>