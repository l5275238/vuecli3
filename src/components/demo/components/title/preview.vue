<template>
    <div :style={background:Details.backgroundColor,color:Details.fontColor,fontSize:size}>
      {{this.Details.name}}
    </div>
</template>

<script>
  export default {
    name: 'preview',
      computed:{
        size() {
            return this.Details.fontSize+"px"
        }
      },


    props:{
      Details:{

      }
    }
  }
</script>

<style scoped>

</style>
