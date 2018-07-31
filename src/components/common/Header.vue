<template>
    <div id="header" class="row" :style="$store.state.headercss.style">
        <div class="col-md-9">这里是文字或者图片
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
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {};
        },
        components: {}
    };
</script>

<style>

</style>
