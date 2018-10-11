<template>
  <div id="default-page">
    <nuxt/>
  </div>
</template>

<script>
  export default{
    mounted(){
      console.log("default mounted");

        var raw_user = window.localStorage.getItem("login_user");
        //console.log("msgKeys")

        if(raw_user){
          //获取短信提醒关键字数组
          var user = JSON.parse(raw_user);
          this.$store.commit('login', {user:user});
          //this.$store.state.msgKeys=msgKeys;
        }

    }
  }
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  width: 100%;
  height: 100%;

}

@font-face {
  font-family: 'iconfont';  /* project id 626013 */
  src: url('//at.alicdn.com/t/font_626013_5mp4du4cxha.eot');
  src: url('//at.alicdn.com/t/font_626013_5mp4du4cxha.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_626013_5mp4du4cxha.woff') format('woff'),
  url('//at.alicdn.com/t/font_626013_5mp4du4cxha.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_626013_5mp4du4cxha.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;}


.el-submenu .iconfont {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  display: inline-block;

/*  font-family: element-icons!important;*/
  speak: none;
  font-style: normal;
  font-weight: 400;
  -webkit-font-feature-settings: normal;
  font-feature-settings: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
}

.el-submenu__title i {
  color: #909399;
}

body{
  width: 100%;
  height: 100%;
}

#default-page{
  width: 100%;
  height: 100%;
}

#__nuxt{
  width: 100%;
  height: 100%;
}

#__layout{
  width: 100%;
  height: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
