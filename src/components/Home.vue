<template>
  <div id="home" class="container example">
    <!-- 顶部 -->
    <Header></Header>
    <!--菜单-->
    <Menu></Menu>
    <!-- 菜单导航 -->
    <BreadCrumb :breads="breads"></BreadCrumb>
    <!-- 消息栏 -->
    <div class="row">
      <div class="col-md-8">
        <Message :message="message"></Message>
        <div class="example" style="text-align:center;">
          <div class="row">
            <div class="col-md-12">
              <Paginate v-model="pagination.currentPage" :page-count="pagination.pageCount" :page-range="pagination.pageRange" :margin-pages="pagination.marginPage" :click-handler="pageChange()" :prev-text="'上一页'" :next-text="'下一页'" :container-class="'pagination'"
                :page-class="'page-item'"></Paginate>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h4>今日推荐:</h4>
        <div class="alert alert-info">
          <div class="float: left; width: 40%;">
            <img src="../assets/news.png" style="width:80px;height:80px;" />
          </div>
          <div class="float: right; width: 60%;">
            <a class="alert-link">63篇强化学习论文全解读【ICML2018】63篇强化学习论文全解读【ICML2018】</a>
          </div>
        </div>
      </div>
    </div>
  
  
  
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "./common/Footer";
  import BreadCrumb from "./common/BreadCrumb";
  import Header from "./common/Header";
  import Menu from "./common/Menu";
  import Message from "./common/Message";
  import Paginate from "vuejs-paginate";
  
  export default {
    name: "Home",
    data() {
      return {
        breads: [{
            name: "首页"
          },
          {
            name: "新闻"
          },
          {
            name: "今日最热"
          }
        ],
        pagination: {
          currentPage: 10,
          pageCount: 20,
          pageRange: 5,
          marginPage: 5
        },
        message: {
          title: '最新新闻',
          newses: [{
              title: "毕业3年，为何技术能力相差越来越大？",
              summary: "导读：毕业三年，每个人在技术能力跑道上，有了或大或小的差距。有些人永远在重复的劳动，有些人却能从中总结和解决...",
              author: "大数据v",
              newsTime: "07月07日",
              readCount: 0,
              starCount: 0
            },
            {
              title: "毕业3年，为何技术能力相差越来越大？",
              summary: "导读：毕业三年，每个人在技术能力跑道上，有了或大或小的差距。有些人永远在重复的劳动，有些人却能从中总结和解决...",
              author: "大数据v",
              newsTime: "07月07日",
              readCount: 0,
              starCount: 0
            },
            {
              title: "毕业3年，为何技术能力相差越来越大？",
              summary: "导读：毕业三年，每个人在技术能力跑道上，有了或大或小的差距。有些人永远在重复的劳动，有些人却能从中总结和解决...",
              author: "大数据v",
              newsTime: "07月07日",
              readCount: 0,
              starCount: 0
            },
            {
              title: "毕业3年，为何技术能力相差越来越大？",
              summary: "导读：毕业三年，每个人在技术能力跑道上，有了或大或小的差距。有些人永远在重复的劳动，有些人却能从中总结和解决...",
              author: "大数据v",
              newsTime: "07月07日",
              readCount: 0,
              starCount: 0
            }
          ]
        },
      };
    },
    methods: {
      pageChange: function(currebtPage) {}
    },
    components: {
      Footer,
      Paginate,
      BreadCrumb,
      Header,
      Menu,
      Message,
    }
  };
</script>

<style>
  
</style>
