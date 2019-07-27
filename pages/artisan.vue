<template>
  <div class="animated fadeIn">
       <component :artisanData="currentartisanData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>

import artisansView from '~/components/artisans/artisansView'
import artisansDetail from '~/components/artisans/atisansDetail'
export default {
  components: {
   artisansView,
   artisansDetail,
    
  },
  data() {
    return {
      currentComponent: '',
      currentartisanData: null
    }
  },
  mounted(){
    var data = this.$route.params.data
    if(data == null){
      this.currentComponent = 'artisansView'
    }else{
      this.currentartisanData = data
       this.currentComponent = 'artisansDetail'
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentartisanData = event.data;
    //  console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>
</style>