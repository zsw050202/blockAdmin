<template>
    <div id="app">
        <div class="app-wrapper">
            <header class="header">
                <i class="el-icon-menu"></i>
                Block后台管理
            </header>
            <main class="main">
                <aside class="aside">
                    <el-menu background-color="#324157">
                        <el-menu-item index="1">
                            <router-link to="/" tag="div">
                                <i class="el-icon-document"></i>
                                用户管理
                            </router-link> 
                        </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">
                                <span>
                                    <i class="el-icon-more"></i>
                                    博客管理
                                </span>
                            </template>
                            <el-menu-item index="2-1">
                                <router-link to="/addArticle">
                                    <i class="el-icon-circle-plus"></i>
                                    新建博客
                                </router-link> 
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <router-link to="/articles">
                                    <i class="el-icon-tickets"></i>
                                    博客列表
                                </router-link> 
                            </el-menu-item>
                            <!-- <el-menu-item index="2-3">
                                <router-link to="/resetBlock" tag="div">
                                    <i class="el-icon-edit-outline"></i>
                                    修改博客
                                </router-link> 
                            </el-menu-item> -->
                        </el-submenu>
                         <el-menu-item index="3">
                              <router-link to="/demo">
                                    <i class="el-icon-tickets"></i>
                                    测试
                                </router-link> 
                         </el-menu-item>
                    </el-menu>
                </aside>
                <section class="section">
                    <router-view/>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'App'
    }
</script>

<style lang="scss">
    @import './public/common.scss';
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;
    }
    /* wrapper */
    .app-wrapper {
        position: relative;
        height: 100%;
        .header {
            height: 60px;
            line-height: 60px;
            background: $headerColor;
            color: #fff;
            padding-left: 20px;
            font-size: 20px;
        }
        .main {
            display: flex;
            position: absolute;
            width: 100%;
            top: 60px;
            bottom: 0;
            .aside {
                flex-basis: 200px;
                height: 100%;
                background: $asideColor;
                color: #fff;
                .el-menu {
                    border-right: none;
                    .el-menu-item {
                        color: #fff;
                    }
                }
            }
            .section {
                flex: 1;
                height: 100%;
                background: $mainBgColor;
                padding: 20px;
                overflow-y: scroll;
            }
        }
    }

    /* 更改element-ui样式 */
    .el-submenu__title {
        color: #fff;
    }
</style>
