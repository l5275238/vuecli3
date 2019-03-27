<template>
  <div class="hello">
   <Demo></Demo>
  </div>
</template>

<script>
  import Demo from './demo/demo'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    components:{
        Demo
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello{
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
