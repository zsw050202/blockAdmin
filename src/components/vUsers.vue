<template>
	<div class="user-wrapper">
		<div class="search-part">
			<el-form :inline="true">
				<el-form-item>
					<el-input v-model="searchName" placeholder="输入用户名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="query">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="dialogVisible = true"><i class="el-icon-circle-plus"></i> 新建</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="contents">
			<el-table :data="tableData" border style="width: 100%" v-loading="loading">
				<!-- <el-table-column prop="_id" label="ID"></el-table-column> -->
				<el-table-column prop="createdAt" label="注册时间"></el-table-column>
				<el-table-column prop="username" label="用户名"></el-table-column>
				<el-table-column prop="password" label="密码"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
				        <el-button
				           size="mini"
				           @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				        <el-button
				           size="mini"
				           type="danger"
				           @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
		<!-- 弹框 -->
		<el-dialog title="新建用户" :visible.sync="dialogVisible" width="500px">
			<el-form label-width="80px" :mode="userForm">
			    <el-form-item label="用户名">
			    	<el-input v-model="userForm.username"></el-input>
			    </el-form-item>
			    <el-form-item label="密码">
			    	<el-input v-model="userForm.password"></el-input>
			    </el-form-item>
		    </el-form>
		    <div slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="addUser">确 定</el-button>
		    </div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		mounted () {
			this.getPage();
		},
		data () {
			return {
				searchName: '',
				loading: false,
				dialogVisible: false,
				userForm: {
					username: '',
					password: ''
				},
				tableData: [],
				pages: 0
			};
		},
		methods: {
			query () {},
			addUser () {
				this.dialogVisible = false;
				this.$axios.post(apiPort.addUser, this.userForm).then((res) => {
					if (res.data.status == 1) {
						this.$message.success(res.data.msg);
						this.getPage();
					} else {
						this.$message.error(res.data.msg);
					}
				});
			},
			handleEdit () {},
			handleDelete (index, doc) {
				let postData = {username: doc.username};
				this.$axios.post(apiPort.deleteUser, postData).then((res) => {
					if (res.data.status == 1) {
						this.$message.success(res.data.msg);
						this.getPage();
					} else {
						this.$message.error(res.data.msg);
					}
				});
			},
			getPage (page) {
				this.$axios.get(apiPort.getUsers, {params: {
					page: page
				}}).then((res) => {
					if (res.data.status == 1) {
						this.tableData = res.data.data;
						this.pages = res.data.pages * 10;
					}
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.user-wrapper {
		.search-part {}
		.contents {
			.pages {
				margin-top: 15px;
				text-align: center;
			}
		}
	}
</style>