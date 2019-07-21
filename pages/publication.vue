<template>
  <div class="animated fadeIn">
       <component :publicationData="currentpublicationData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>

import publicationview from '~/components/publication/publicationview.vue'
import publicationdetail from '~/components/publication/publicationdetail.vue'
export default {
  components: {
    publicationview,
    publicationdetail,
    
  },
  data() {
    return {
      currentComponent: 'publicationview',
      currentpublicationData: null
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentpublicationData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>
</style>