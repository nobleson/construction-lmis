<template>
  <div class="bg">
    <mdb-container md="12">
      <mdb-row>
    <img src="~/assets/images/map (3).png" class="img-fluid"> 
    </mdb-row>
    </mdb-container>
  </div>
</template>
<script>
import {mdbContainer,
    mdbRow, } from 'mdbvue';
export default {
  name:"Company",
  layout:'CarousalSlot',
  components:{
    mdbRow,
    mdbContainer
  }
}
</script>
<style scoped>
.bg{
 background-color: chocolate;
  color:cadetblue;
}
</style>


