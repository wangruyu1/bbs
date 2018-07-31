<template>
    <div class="example">
        <div class="row">
            <div class="col-md-12">
                <h2 class="example-title">{{message.title}}</h2>
            </div>
        </div>
        <div class="row" v-for="news in message.newses">
            <div class="col-md-12">
                <div class="panel panel-primary" :style="$store.state.commoncss.panel.style">
                    <div class="panel-heading">
                        <h3 class="panel-title"><a href="#" target="blank">{{news.title}}</a></h3>
                    </div>
                    <div class="panel-body">
                        <p>{{news.summary}}</p>
                        <div class="row">
                            <div class="col-md-3">
                                <span><a href="#">{{news.author}}</a>&nbsp;</span>
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
</template>

<script>
export default {
  name: "Message",
  props: ["message"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
</style>
