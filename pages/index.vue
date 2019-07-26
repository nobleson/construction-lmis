<template>
  <div class="animated fadeIn">
       <component :mainData="currentHomeData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>

import home from '~/components/home.vue'
export default {
  components: {
    home
  },
  data() {
    return {
      currentComponent: 'home',
      currentHomeData: null
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentHomeData = event.data;
      //console.log("componentChange"+event.data)
      this.currentComponent = event.component;        
      },
      comChange(){
        console.log("changed")
      }

  },
  
  
}
</script>
<style scoped>
.active{
  background-color: rgba(255, 255, 255, 0.1);
}
.mb-4{
  font-size: 18px;
}
.mb-0{
  font-size: 20px;
}
input[type=submit] {
    width: 32%;
    padding: 10px 15px;
    font-size: 21px;
    color:aliceblue;
    font-family:Arial, Helvetica, sans-serif;
    margin: 5px 5px;
    
}
input[type=email] {
    width: 40%;
    padding: 10px 15px;
    margin: 5px 5px; 
}
.container{
  padding-top: 0.5%;
}

h4 {
  font-weight: bold;
}

.collapse {
  transition: height 0.3s;  
}
.collapse-item {
  transition: all 0.5s;  
}
.gradient-card {
  transition: 0.5s ease-in-out; 
}
.gradient-card.show {
  margin-top: 20px;
}
.gradient-card .card-image {
  display: inline-block;
  width: 100%;
  transition: 0.5s ease-in-out; 
}
.gradient-card.show .card-image {
  width: 112px;
  height: 112px;
  margin-left: 20px;
  margin-top: -20px;
}
.gradient-card .card-body {
  padding: 0 1.25rem;
}
.collapse-content .fas.fa-heart:hover {
  color: #f44336 !important;
}
.collapse-content .fas.fa-share-alt:hover {
  color: #0d47a1 !important;
}
.card.weather-card .collapse-content a.collapsed:after {
  content: 'Expand'; }

.card.weather-card .collapse-content a:not(.collapsed):after {
  content: 'Collapse'; }

.card.chart-card .classic-tabs .nav.tabs-white li a {
  color: #757575;
  font-weight: 500;
}
.card.chart-card .classic-tabs .nav.tabs-white li a.active {
  color: #673ab7;
}
.wrapper {
   overflow-x: hidden;
 }

li:hover {
  background: #008751;
  color: white;
  cursor: pointer;

}
a:active {
    color: blue;
}
li:visited{
   color:white;
}

a:link{
  color:white;
}
ul{
  color:white;
}
li {
 position: relative;
 font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 font-size:20px;
 transition-duration: 0.7s;
}
  .logo{
      padding-top: 1%;
      padding-bottom: 2%;
  }
 
  .logo1{
    float:right;
      padding-top: 1%;
      padding-bottom: 2%;
  }
  .bright{
  color:white;
  text-align: center;
  padding-top: 4%;
}

.top {
    position: absolute;
    display: block;
    font-family:Arial Black;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: white;
}
.float-left{
  color:white;
  font-size: 15px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
  .top {
    padding-left: 6rem;
}
p {
  font-family: "Georgia", Verdana, Geneva, Tahoma, sans-serif, serif;
}
.fixedMenu{
 position: fixed;
 z-index: 1;
  width: 100%;
 
}

.spacer
{
    width: 100%;
    height: 157px;
}
.a{
  color:white;
  text-decoration-color:none;
}


</style>