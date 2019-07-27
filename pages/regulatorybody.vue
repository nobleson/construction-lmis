<template>
  <div class="animated fadeIn">
       <component :regulatorybodyData="currentregulatorybodyData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>

import regulatoryBodyView from '~/components/regulatorybodies/regulatoryBodyView'
import regulatoryBodyDetail from '~/components/regulatorybodies/regulatoryBodyDetail'
export default {
  components: {
   regulatoryBodyView,
   regulatoryBodyDetail,
    
  },
  data() {
    return {
      currentComponent: '',
      currentregulatorybodyData: null
    }
  },
  mounted(){
    var data = this.$route.params.data
    if(data == null){
      this.currentComponent = 'regulatoryBodyView'
    }else{
      this.regulatorybodyData = data
       this.currentComponent = 'regulatoryBodyDetail'
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentregulatorybodyData = event.data;
    //  console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>
</style>