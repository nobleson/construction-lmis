<template>
  <div class="animated fadeIn">
       <component :traineeData="currenttraineeData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>

import traineesView from '~/components/trainees/traineesView'
import traineesDetail from '~/components/trainees/traineesDetail'
export default {
  components: {
   traineesView,
   traineesDetail,
    
  },
  data() {
    return {
      currentComponent: '',
      currenttraineeData: null
    }
  },
  mounted(){
    var data = this.$route.params.data
    if(data == null){
      this.currentComponent = 'traineesView'
    }else{
      this.currenttraineeData = data
       this.currentComponent = 'traineesDetail'
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currenttraineeData = event.data;
    //  console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>
</style>