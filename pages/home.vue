<template>
  <div>

    <el-row class="container">
        <el-col :span="24" class="header">
          <el-col :span="10" class="logo" :class="isCollapse?'logo-collapse-width':'logo-width'">
            {{isCollapse?'':sysName}}
          </el-col>
          <el-col :span="10">
            <div class="tools" @click.prevent="collapse">
              <i class="fa fa-align-justify"></i>
            </div>
          </el-col>
          <el-col :span="4" class="userinfo">
            <el-dropdown trigger="hover">
              <span class="el-dropdown-link userinfo-inner">
                <img :src="user.imageUrl" />
                {{sysUserName}}
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-col>
        <el-col :span="24" class="main">
            <aside style="overflow-y: scroll" :class="collapsed?'menu-collapsed':'menu-expanded'">
             <!-- 导航菜单-->

              <el-menu
                :router="true"
                :default-openeds="openMenus"
                default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-submenu index="1">

                  <template slot="title">
                    <i class="el-icon-menu"></i>

                    <!--<i class="iconfont">&#xe6b4;</i>-->
                    <span slot="title">应用</span>
                  </template>
                  <el-menu-item index="/home/webot">微信机器人</el-menu-item>

                  <el-menu-item index="/home/qqbot">QQ机器人</el-menu-item>
                  <el-menu-item index="/home/message-helper">短信群发助手</el-menu-item>
                  <el-menu-item index="/home/com-search">企业信息搜索专家</el-menu-item>

                  <el-menu-item index="/home/ad-tool">安卓软件自运营工具</el-menu-item>

                  <el-menu-item index="/home/gsm-helper">猫池短信助手</el-menu-item>

                  <el-menu-item index="/home/email-helper">邮箱群发助手</el-menu-item>


                  <!--<el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>-->
<!--                  <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>-->
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <i class="iconfont">&#xe630;</i>
                    <span slot="title">征信查询</span>
                  </template>
                  <el-menu-item index="/home/credit-auth">五项查询</el-menu-item>
                  <el-menu-item index="/home/phone-auth">手机实名验证</el-menu-item>
                  <el-menu-item index="/home/bad-record">公安不良记录查询</el-menu-item>
                  <el-menu-item index="/home/gsm-helper">银行实名验证</el-menu-item>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title">
                    <i class="iconfont">&#xe713;</i>
                    <span slot="title">抖音助手</span>
                  </template>
                  <el-menu-item index="/home/credit-auth">抖音助手</el-menu-item>
                  <el-menu-item index="/home/phone-auth">素材库</el-menu-item>
                  <el-menu-item index="/home/bad-record">今日视频</el-menu-item>

                </el-submenu>


                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span slot="title">系统设置</span>
                  </template>

                  <el-menu-item index="/home/update-helper">系统成员</el-menu-item>
                  <el-menu-item index="/home/update-helper">我的消息</el-menu-item>
                  <el-menu-item index="/home/update-helper">角色</el-menu-item>
                  <el-menu-item index="/home/update-helper">菜单</el-menu-item>
                  <el-menu-item index="/home/update-helper">设置</el-menu-item>


                </el-submenu>

<!--                <el-menu-item index="3">
                  <i class="el-icon-menu"></i>
                  <span slot="title">认证</span>
                </el-menu-item>

                <el-menu-item index="4" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>

                <el-menu-item index="5">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>-->

              </el-menu>

<!--              <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
                       unique-opened router v-show="!collapsed">
                <template   v-for="(item,index) in menus">
                  <el-submenu :key="index"  :index="index+''" v-if="!item.leaf && !item.hidden">
                    <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                  </el-submenu>
                  <el-menu-item :key="index" v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
                </template>
              </el-menu>-->
              <!--导航菜单-折叠后-->
<!--              <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
                <li :key="index" v-for="(item,index) in menus" v-if="!item.hidden" class="el-submenu item">
                  <template v-if="!item.leaf">
                    <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
                    <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                      <li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
                    </ul>
                  </template>
                  <template v-else>
                    <li class="el-submenu">
                      <div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
                    </li>
                  </template>
                </li>
              </ul>-->
          </aside>
        <section class="content-container">
          <div style="width: 100%;height: 100%;" class="grid-content bg-purple-light">

            <el-col v-if="false" :span="24" class="breadcrumb-container">
              <!--<strong class="title">{{$route.name}}</strong>-->
              <el-breadcrumb separator="/" class="breadcrumb-inner">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                  {{ item.name }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>

            <el-col :span="24" style="width: 100%;height: 100%;" class="content-wrapper">
              <transition name="fade" mode="out-in">
                  <nuxt-child/>
              </transition>
            </el-col>

          </div>

        </section>

    </el-col>
  </el-row>
  </div>
</template>

<script>
  import cookie from 'js-cookie';
  export default {
    data() {
      return {
        openMenus:['1'],
        sysName:'PURE TECH',
        collapsed:false,
        isCollapse:false,
        sysUserName: '',
        sysUserAvatar: '/static/head.jpg',
        menus:[{
            name:"主页",
          iconCls:"",
          leaf:false
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    computed: {
      user(){
        return this.$store.state.user;
      },
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleOpen() {
        //console.log('handleopen');
      },
      handleClose() {
        //console.log('handleclose');
      },
      handleselect: function (a, b) {
      },
      //退出登录
      logout: function () {
        var _this = this;
        this.$confirm('确认退出吗?', '提示', {
          //type: 'warning'
        }).then(() => {
         // sessionStorage.removeItem('user');
          cookie.remove('token')
          cookie.remove('userId')

          _this.$router.push('/login');
        }).catch(() => {
        });
      },
      //折叠导航栏
      collapse:function(){

        //this.isCollapse=!this.isCollapse;
        //this.collapsed=this.isCollapse;
      },
      showMenu(i,status){
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
      }
    },
    mounted() {
      var user = sessionStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
        this.sysUserName = user.name || '';
        this.sysUserAvatar = user.avatar || '';
      }
    }
  }
</script>

<!--
lang="scss"
-->
<style scoped lang="scss">
/*  @import '~scss_vars';*/

  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
    color:#fff;
  .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
  .userinfo-inner {
    cursor: pointer;
    color:#fff;
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }
  }
  }
  .logo {
  //width:230px;
    height:60px;
    font-size: 22px;
    padding-left:20px;
    padding-right:20px;
    border-color: rgba(238,241,146,0.3);
    border-right-width: 1px;
/*   border-right-style: solid;*/
  img {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 18px;
  }
  .txt {
    color:#fff;
  }
  }
  .logo-width{
    width:230px;
  }
  .logo-collapse-width{
    width:60px
  }
  .tools{
    padding: 0px 23px;
    width:14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  }
  .main {
    display: flex;
  // background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  aside {
    flex:0 0 230px;
    width: 230px;
  // position: absolute;
  // top: 0px;
  // bottom: 0px;
  .el-menu{
    height: 100%;
  }
  .collapsed{
    width:60px;
  .item{
    position: relative;
  }
  .submenu{
    position:absolute;
    top:0px;
    left:60px;
    z-index:99999;
    height:auto;
    display:none;
  }
  }
  }
  .menu-collapsed{
    flex:0 0 60px;
    width: 60px;
  }
  .menu-expanded{
    flex:0 0 230px;
    width: 230px;
  }
  .content-container {
  // background: #f1f2f7;
    flex:1;
  // position: absolute;
  // right: 0px;
  // top: 0px;
  // bottom: 0px;
  // left: 230px;
    overflow-y: scroll;
    padding: 20px;
  .breadcrumb-container {
   margin-bottom: 15px;
  .title {
    width: 200px;
    float: left;
    color: #475669;
  }
    .breadcrumb-inner {
      /*float: left;*/
    }
  }
  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }
  }
  }
}
</style>
