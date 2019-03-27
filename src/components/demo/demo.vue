<template>
  <div class="desin">
    <ul class="listName">
      <li v-for="(item,index) in list" v-if="index!=0" @click="add(item)">{{item.name}}</li>

    </ul>
    <div class="list">
      <draggable v-model="editList" @change="listMove">
        <transition-group>
    <div v-for="(item,index) in editList" :key="index" class="bin"  >

      <el-popover
              :popper-options="{boundariesElement: '.list', gpuAcceleration: false }"
              :value="defaultIndex==index"
              placement="right-start"
              width="400"
              trigger="manual">
      <component v-bind:is="item.editName"  :details="item.props" @change="onchange" class="edit"  :index="index"></component>
      <div  slot="reference" @click="defaultIndex=index"    >
        <component v-bind:is="item.previewName" :details="item.props" class="preview" :class="{active:defaultIndex==index}" ></component>
      </div>

      </el-popover>

    </div>
        </transition-group>
      </draggable>
    </div>
  </div>

</template>

<script>
  import render from './render'
  import addEdit from './components/title'
  import draggable from 'vuedraggable'
  import title from './components/Header'
  export default {
    name: 'demo',
    mixins:[title,addEdit],
    components:{
      render,
        draggable
    },
    data(){
      return {
        list:[],
          defaultIndex:-9,
          editList:[]
      }
    },
      computed:{

      },
      created(){
        this.editList.push(this.list[0])
      },
      mounted(){
        this.defaultIndex=0
      },
    methods:{
        listMove({moved}){
      this.defaultIndex=moved.newIndex

        },
        onClick(){
            console.log(1);
        },
        add(item){

            this.editList.push(this.$cloneDeep(item))

    setTimeout(()=>{
        this.defaultIndex=this.editList.length-1
    })
        },
      onchange(obj,index){

          this.editList[index].props=this.$cloneDeep(obj)

      }
    }
  }
</script>

<style scoped lang="less">
  .desin{
    width: 750px;
    overflow: hidden;
    display: flex;
    margin: 0 auto;
    padding-top: 30px;
    .listName{
      width: 100px;
      background: #fff;
      margin-right: 20px;
      >li{
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #f9f9f9;
        cursor: pointer;
      }
    }
    .list{
      width: 360px;
      min-height: 450px;
      background: #fff;
      .preview{
        min-height: 20px;
      }
      .bin{
        position: relative;
        cursor: pointer;
        .active{
          border: 1px solid #2d51e2;
        }
        .edit{
          position: absolute;
          left: 100%;
          top: 0;
        }
      }
    }
  }

</style>
