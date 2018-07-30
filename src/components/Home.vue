<template>
  <div id="home" class="container example">
    <div class="row">
      <div class="col-md-9">
      </div>
      <div class="col-md-2">
        <form>
          <div class="form-group">
            <label for="userName">用户名:</label>
            <input type="text" id="userName" class="form-control" placeholder="用户名">
          </div>
          <div class="form-group">
            <label for="password">密码:</label>
            <input type="password" id="password" class="form-control" placeholder="密码">
          </div>
          <button type="button" class="btn btn-info">登陆</button>
        </form>
      </div>
      <div class="col-md-1">
        <br/>
        <br/>
        <p><a href="#">忘记密码?</a></p>
        <br/>
        <br/>
        <p><a href="#">注册</a></p>
      </div>
    </div>
  
    <!--documents-->
    <div class="example row" >
      <div class="col-md-12">
        <!-- <h2 class="example-title">菜单标题</h2> -->
        <nav class="navbar navbar-default" role="navigation" style="$store.state.menucss.style">
          <div class="container-fluid">
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <!-- <li class="active"><a href="#">Link</a></li> -->
                <!-- <li class="disabled"><a href="#">Link</a></li> -->
                <li class="dropdown" v-for="menu in $store.state.menu.menus">
                  <a v-bind:href="menu.path" class="dropdown-toggle" data-toggle="dropdown">{{menu.name}} <b class="caret"></b></a>
                  <ul class="dropdown-menu" role="menu">
                    <!-- <li class="dropdown-header">Setting</li> -->
                    <li v-for="subMenu in menu.subMenus"><a v-bind:href="subMenu.path">{{subMenu.name}}</a></li>
                  </ul>
                </li>
              </ul>
              <!-- <form class="navbar-form navbar-right" role="search">
                                    <div class="form-search search-only">
                                      <i class="search-icon glyphicon glyphicon-search"></i>
                                      <input type="text" class="form-control search-query">
                                    </div>
                                  </form> -->
            </div>
            <!-- /.navbar-collapse -->
          </div>
        </nav>
      </div>
    </div>
    <!-- 最新新闻 -->
    <div class="example" >
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <h2 class="example-title">最新新闻：</h2>
        </div>
      </div>
      <div class="row" v-for="news in newses">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="panel panel-primary" :style="$store.state.commoncss.panel.style">
            <div class="panel-heading">
              <h3 class="panel-title"><a href="#" target="blank">{{news.title}}</a></h3>
            </div>
            <div class="panel-body">
              <p>{{news.summary}}</p>
              <div class="row">
                <div class="col-md-3">
                  <span>{{news.author}}&nbsp;</span>
                  <span>{{news.newsTime}}</span>
                </div>
                <div class="col-md-6">
                </div>
                <div class="col-md-3">
                  <span>阅读数:{{news.readCount}}&nbsp;</span>
                  <span>点赞数:{{news.starCount}}</span>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        newses: [{
          title: '毕业3年，为何技术能力相差越来越大？',
          summary: '导读：毕业三年，每个人在技术能力跑道上，有了或大或小的差距。有些人永远在重复的劳动，有些人却能从中总结和解决...',
          author: '大数据v',
          newsTime: '07月07日',
          readCount: 0,
          starCount: 0,
        }, {
          title: '毕业3年，为何技术能力相差越来越大？',
          summary: '导读：毕业三年，每个人在技术能力跑道上，有了或大或小的差距。有些人永远在重复的劳动，有些人却能从中总结和解决...',
          author: '大数据v',
          newsTime: '07月07日',
          readCount: 0,
          starCount: 0,
        }, {
          title: '毕业3年，为何技术能力相差越来越大？',
          summary: '导读：毕业三年，每个人在技术能力跑道上，有了或大或小的差距。有些人永远在重复的劳动，有些人却能从中总结和解决...',
          author: '大数据v',
          newsTime: '07月07日',
          readCount: 0,
          starCount: 0,
        }, {
          title: '毕业3年，为何技术能力相差越来越大？',
          summary: '导读：毕业三年，每个人在技术能力跑道上，有了或大或小的差距。有些人永远在重复的劳动，有些人却能从中总结和解决...',
          author: '大数据v',
          newsTime: '07月07日',
          readCount: 0,
          starCount: 0,
        }, ]
      };
    },
    methods: {}
  };
</script>

<style>
  
</style>
