<template>
    <div class="row" id="breadcrumb">
        <div class="col-md-12" style="margin-top:0px;margin-bottom:0px;">
            <ol class="breadcrumb breadcrumb-arrow" style="margin-bottom:0px;">
                <li v-for="(value,index) in breads">
                        <a v-if="index != (breads.length -1)" href="#">{{value.name}}</a>
                         <div v-if="index == (breads.length -1)" class="active"><span>{{value.name}}</span></div>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: ["breads"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
