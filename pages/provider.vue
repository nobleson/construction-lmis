<template>
  <div class="animated fadeIn">
       <component :providerData="currentproviderData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>

import ProviderView from '~/components/provider/providerView.vue'
import ProviderDetail from '~/components/provider/providerDetail.vue'
export default {
  components: {
    ProviderView,
    ProviderDetail,
    
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
      this.currentComponent = 'ProviderView'
    }else{
      this.currentproviderData = data
       this.currentComponent = 'ProviderDetail'
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