<template>
  <div class="animated fadeIn">
       <component :publicationData="currentpublicationData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>

import publicationView from '~/components/publication/publicationView.vue'
import publicationDetail from '~/components/publication/publicationDetail.vue'
export default {
  components: {
    publicationView,
    publicationDetail,
    
  },
  data() {
    return {
      currentComponent: '',
      currentpublicationData: null
    }
  },
  mounted(){
    var data = this.$route.params.data
    if(data == null){
      this.currentComponent = 'publicationView'
    }else{
      this.currentpublicationData = data
       this.currentComponent = 'publicationDetail'
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentpublicationData = event.data;
    //  console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>
</style>