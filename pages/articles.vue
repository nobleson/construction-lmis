<template>
<section>
  <b-breadcrumb :items="items"></b-breadcrumb>
<div class="row justify-content-md-center mt-3">
<mdb-card>
  <mdb-card-title>Puplication Title</mdb-card-title>
   <strong>Author Name</strong>
    <p>Last Update</p>
    <p>Trade Curriculum</p>
     <p>Trade Curriculum</p>
     <p>Message</p>
     <p>Tags</p>
  <mdb-card-body>
   How far now
    </mdb-card-body>
</mdb-card>
</div>
  
 </section> 
</template>
<script>
import {mdbCard} from 'mdbvue'
export default {
components:{
  mdbCard
},
data() {
      return {
        items: [
          {
            text: 'Home',
            href: '/pages/index.vue'
          },
          {
            text: 'Manage',
           
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    }
}
</script>
<style scoped>
.card{
  box-shadow: 23px;
}
</style>


