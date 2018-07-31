<template>
    <div id="footer" class="example" >
        <div class="row" >
            <div class="col-md-12">
                <div class="footer" :style="$store.state.footercss.style">
                    <div class="container">
                        <div class="clearfix">
                            <div class="footer-logo">
                                <a href="#">&nbsp;&nbsp;&nbsp;&nbsp;联系人<img src="../../assets/footer/contacts.png" /></a>
                            </div>
                            <dl class="footer-nav" v-for="link in links">
                                <dt class="nav-title">{{link.title}}</dt>
                                <dd class="nav-item" v-for="l in link.links"><a :href="l.url">{{l.name}}</a></dd>
                            </dl>
                        </div>
                        <div class="footer-copyright text-center">Copyright &copy; 2014 Flathemes.All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                links: [{
                    title: 'qq',
                    links: [{
                        name: '1947381760',
                        url: '#',
                    }, {
                        name: '305707460',
                        url: '#',
                    }],
                }, {
                    title: '微信',
                    links: [{
                        name: '18511254774',
                        url: '#',
                    }, {
                        name: '1947381760@qq.com',
                        url: '#',
                    }],
                }],
            };
        },
        methods: {}
    };
</script>

<style>

</style>
