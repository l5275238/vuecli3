<template>
  <v-form :form="form" :vform="vform" ref="vform" :formSet="formSet" >

  </v-form>
</template>

<script>
  import editMixins from '../mixins/editMixins'
  export default {
    name: 'edit',
      mixins:[editMixins],
    data(){
      return {

          formSet:{
              isFilterBar:true,
              itemWidth:"100%"

          },
          form:{

          },
          vform:[

              {
                  key:"name",
                  name:"标题设置",
                  width:'80px'
              },
              {
                  key:"fontColor",
                  name:"字体颜色",
                  width:'80px',
                  render:(h,params)=>{
                      console.log(params);
                      return h('el-color-picker',{
                          props:{
                              value:params.fontColor
                          },
                          style:{
                              width:"40px"
                          },
                          on:{
                              change:(value)=>{
                                  this.form.fontColor=value

                              }
                          }
                      })
                  }
              },
              {
                  key:"backgroundColor",
                  name:"背景颜色",
                  width:'80px',
                  render:(h,params)=>{
                      return h('el-color-picker',{
                          props:{
                              value:params.backgroundColor
                          },
                          style:{
                              width:"40px"
                          },
                          on:{
                              change:(value)=>{
                                 this.form.backgroundColor=value

                              }
                          }
                      })
                  }
              },
              {
                  key:"fontSize",
                  name:"字体大小",
                  width:'80px',
                  render:(h,params)=>{
                      return h('el-slider',{
                          props:{
                              value:this.form.fontSize,
                          },

                          on:{
                              change:(value)=>{
                                  console.log(value);
                                  // this.form.fontSize=value
                                  // Object.assign({},this.form,)

                              }
                          }
                      })
                  }
              },

          ]
      }
    },

    methods:{

    }
  }
</script>

<style scoped>

</style>
