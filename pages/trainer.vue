<template>
  <div class="animated fadeIn">
       <component :trainerData="currenttrainerData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>

import trainersView from '~/components/trainers/trainersView'
import trainersDetail from '~/components/trainers/trainersDetail'
export default {
  components: {
   trainersView,
   trainersDetail,
    
  },
  data() {
    return {
      currentComponent: '',
      currenttrainerData: null
    }
  },
  mounted(){
    var data = this.$route.params.data
    if(data == null){
      this.currentComponent = 'trainersView'
    }else{
      this.currenttrainerData = data
       this.currentComponent = 'trainersDetail'
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currenttrainerData = event.data;
    //  console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>
</style>