<template>
  <div class="animated fadeIn">
       <component :providerData="currentproviderData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>

import providerView from '~/components/provider/providerView.vue'
import providerDetail from '~/components/provider/providerDetail.vue'
export default {
  components: {
    providerView,
    providerDetail,
    
  },
  data() {
    return {
      currentComponent: '',
      currentproviderData: null
    }
  },

   mounted(){
    var data = this.$route.params.data
    if(data == null){
      this.currentComponent = 'providerView'
    }else{
      this.currentproviderData = data
       this.currentComponent = 'providerDetail'
    }
  },
  
  methods: {
      changeCurrentComponent(event){
      this.currentproviderData = event.data;
    //  console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>
</style>