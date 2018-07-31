<template>
    <div id="menu" class="example row">
        <div class="col-md-12" style="margin-bottom:0px;">
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
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {};
        },
        components: {}
    };
</script>

<style>

</style>
