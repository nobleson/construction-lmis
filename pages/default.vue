<template>
  <div class="wrapper">
    <div class="fixedMenu">
      <header id="header" class="header">
        <div class="top-header hidden-xs" style="background-color:#56b000">
            <div class="container clearfix">
              <div class="contact-section float-right float-none-xs text-decoration:none text-white">
                <span class="email-info">Email : <a href="mailto:c-lmis2019@corbon.gov.ng" >c-lmis2019@corbon.gov.ng </a> </span>
                </div>
              <div class="float-left ">
                <h6>Contacts: 070678493843, 070686578479, 09067475846</h6>
                </div>
            </div>
        </div>
      <b-navbar toggleable="lg" style="background-color:#008751">
        <div class="container">
        <b-navbar-brand href="#"> <img src="~/assets/images/new.png"  width="80" height="80"></b-navbar-brand>
        <div class="top">
            <p>
                <h5>CONSTRUCTION LABOUR MARKET INFORMATION SYSTEM</h5>
            <p/>
        </div>
        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <img src="~/assets/images/corbon.png" >
            </b-navbar-nav>
        </b-collapse>
   </div>
    </b-navbar>

</header>
</div>
<div class="spacer">
    &nbsp;
</div>
		
 <div>

  <b-navbar toggleable="lg" style="background-color:#56b000 " >
   
    <b-navbar-toggle target="nav">
        
    </b-navbar-toggle>
     <b-collapse id="nav" is-nav>
    <b-navbar-nav class="ml-auto"  >
        
        <b-nav-item  ></b-nav-item>
        <b-nav-item class="active" :to="{ name: 'index'}"><span class="text-white">Home</span></b-nav-item>
        <b-nav-item :to="{ name: 'publication'}" ><span class="text-white">Publication</span></b-nav-item>
        <b-nav-item :to="{ name: 'provider'}" ><span class="text-white">Provider</span></b-nav-item>
  

         
          <b-nav-item-dropdown  right>
             <template slot="button-content"><span class="text-white">Company</span></template>
              <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#" >EShjjjjjjjjjjjjjh-----jjhj</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">EShjjjjjjjjjjjjjhjj----jjhj</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">EShjjjjjjjjjjjjjhjj----jjFA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><span class="text-white">Other Menu</span></template>
              <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">EShjjjjjjjjjjjjjhjjjjjfsjfsfsfjhsfhjFA</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">Sign OutEShjjjjjjjjjjjjjhjjjjjfsjfsfsfjhsfhjFA</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
        </b-collapse>
  </b-navbar>
</div>

  <div class="animated fadeIn">
       <component :mainData="currentHomeData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>

<back-to-top bottom="50px" right="50px">
  <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
</back-to-top>

  <mdb-footer style="background-color:#263238" class="page-footer font-small pt-0">
            <div style="background-color:#263238">
                <mdb-container class="text-left">
                    <mdb-row class="py-4 d-flex align-items-center">
                        <mdb-col md="6" lg="5" class="text-center text-md-left mb-4 mb-md-0">
                            <h6 class="mb-0 white-text">Subscribe to our Newsletter for updates</h6>
                        </mdb-col>
                        <mdb-col md="6" lg="7" class="text-center text-md-right">
                          <div class="subscribe">
                          <form>
                            <input type="email" placeholder="Your email address">
                            <input type="submit"  style="background-color:#56b000">
                          </form>
                        </div>
                        </mdb-col>
                    </mdb-row>
                </mdb-container>
            </div>
        <div >
                <mdb-row class="mt-3 justify-content-center" >
                    <mdb-col md="3" lg="4" xl="3" class="mb-4">
                        <h6 class="text-uppercase font-weight-bold"><strong>C-LMIS</strong></h6>
                        <hr class="green accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px"/>
                      
                        <h6 class="text-uppercase mb-4 font-weight-bold">CONSTRUCTION LABOUR MARKET INFORMATIOM SYSTEM</h6>
                
                    </mdb-col>
                    <mdb-col md="2" lg="2" xl="2" class="mb-4">
                        <h6 class="text-uppercase font-weight-bold"><strong>Products</strong></h6>
                        <hr class="green accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px"/>
                        <p><a href="#!">MDBootstrap</a></p>
                        <p><a href="#!">MDWordPress</a></p>
                        <p><a href="#!">BrandFlow</a></p>
                        <p><a href="#!">Bootstrap Angular</a></p>
                    </mdb-col>
                    <mdb-col md="3" lg="2" xl="2" class="mb-4">
                        <h6 class="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                        <hr class="green accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px"/>
                        <p><a href="#!">Your Account</a></p>
                        <p><a href="#!">Become an Affiliate</a></p>
                        <p><a href="#!">Shipping Rates</a></p>
                        <p><a href="#!">Help</a></p>
                    </mdb-col>
                    <mdb-col md="4" lg="3" xl="3" class="mb-4">
                        <h6 class="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                        <hr class="green accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px"/>
                        <p><i class="fas fa-home mr-3"></i> Abuja, NY 10012, US</p>
                        <p><i class="fas fa-envelope mr-3"></i> info@clmis.corbon.gov.ng</p>
                        <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                    </mdb-col>
                </mdb-row>
                 <mdb-col md="4" lg="4" class="ml-lg-0">
                        <div class="text-center text-md-right">
                            <ul class="list-unstyled list-inline">
                                <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-google-plus-g"></i></a></li>
                                <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </mdb-col>
            </div>
            <div class="footer-copyright text-center py-3">
    
                <mdb-container fluid>
                    &copy; 2019 Copyright: <a href="https://www.c-lmis.corbon.gov.ng" class="font-weight-bold">c-lmis.corbon.gov.ng </a>
                </mdb-container>
            </div>
        </mdb-footer>

  </div>
</template>

<script>
import home from '~/components/home.vue'
import publicationView from '~/components/publication/publicationView.vue'
import publicationDetail from '~/components/publication/publicationDetail.vue'
export default {
  layout:'empty',
  components: {
    home,
    publicationView,
    publicationDetail,
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
      console.log("componentChange"+event.data)
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