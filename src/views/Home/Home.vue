<template>
  <div class="home">
   <Demo></Demo>
  </div>
</template>

<script>
// @ is an alias to /src
import Demo from '@/components/demo/demo'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
      Demo
  }
}
</script>
