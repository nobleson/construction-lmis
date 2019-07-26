<template>
  <div class="animated fadeIn">
       <component :assessorData="currentassessorData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>

import assessorsView from '~/components/assessors/assessorsView'
import assessorsDetail from '~/components/assessors/assessorsDetail'
export default {
  components: {
    assessorsView,
    assessorsDetail,
    
  },
  data() {
    return {
      currentComponent: '',
      currentassessorData: null
    }
  },
   mounted(){
    var data = this.$route.params.data
    if(data == null){
      this.currentComponent = 'assessorsView'
    }else{
      this.currentassessorData = data
       this.currentComponent = 'assessorsView'
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentassessorData = event.data;
     // console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>
</style>