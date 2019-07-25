<template>
  <div class="animated fadeIn">
       <component :companyData="currentcompanyData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>

import companiesView from '~/components/companies/companiesView.vue'
import companiesDetail from '~/components/companies/companiesDetail.vue'
export default {
  components: {
    companiesView,
   companiesDetail,
    
  },
  data() {
    return {
      currentComponent: 'companiesView',
      currentcompanyData: null
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentcompanyData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>
</style>