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
			<!--Header-->
  <div class="search">
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search">          
  </div>
  </div> 

<!-- ----Header Main------- -->
             
 <div>

  <b-navbar toggleable="lg" style="background-color:#56b000 " >
   
    <b-navbar-toggle target="nav">
        
    </b-navbar-toggle>
     <b-collapse id="nav" is-nav>
    <b-navbar-nav class="ml-auto" color="white">
        
        <b-nav-item class="active" :to="{ name: 'index'}">Home</b-nav-item>
        <b-nav-item :to="{ name: 'publication'}">Publication</b-nav-item>
        <b-nav-item :to="{ name: 'trainingproviders'}">Training Providers</b-nav-item>
        <b-nav-item :to="{ name: 'publication'}">Next Menu</b-nav-item>
        <b-nav-item :to="{ name: 'trainingproviders'}">Companies</b-nav-item>
  
        <b-nav-item-dropdown text="Company" right>
          <b-dropdown-item :to="{ name: 'trainingproviders'}">Company Info</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">EShjjjjjjjjjjjjjh-----jjjjjfsjfsfsfjhsfhj</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">EShjjjjjjjjjjjjjhjj----jjjfsjfsfsfjhsfhj</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">EShjjjjjjjjjjjjjhjj----jjjfsjfsfsfjhsfhjFA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">Training Providers</template>
              <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">EShjjjjjjjjjjjjjhjjjjjfsjfsfsfjhsfhjFA</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">Sign OutEShjjjjjjjjjjjjjhjjjjjfsjfsfsfjhsfhjFA</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
        </b-collapse>
  </b-navbar>
</div>

<!-- <vue-navigation-bar style="background-color:#81c784 "  :options="navbarOptions" /> -->
<!-- ----Header Main------- -->

<nuxt/>

<back-to-top bottom="50px" right="50px">
  <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
</back-to-top>

 <mdb-footer color="stylish-color-dark" class="font-small pt-4 mt-4 ">
            <div class="text-center text-md-left">
                <mdb-row class="text-center text-md-left mt-3 pb-3">
                    <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">CONSTRUCTION LABOUR MARKET INFORMATIOM SYSTEM</h6>
                    </mdb-col>
                    <hr class="w-100 clearfix d-md-none"/>
                    <mdb-col md="2" lg="2" xl="2" class="mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                        <p><a href="#!">MDBootstrap</a></p>
                        <p><a href="#!">MDWordPress</a></p>
                        <p><a href="#!">BrandFlow</a></p>
                        <p><a href="#!">Bootstrap Angular</a></p>
                    </mdb-col>
                    <hr class="w-100 clearfix d-md-none"/>
                    <mdb-col md="3" lg="2" xl="2" class="mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold"></h6>
                        <p><a href="#!">Your Account</a></p>
                        <p><a href="#!">Become an Affiliate</a></p>
                        <p><a href="#!">Shipping Rates</a></p>
                        <p><a href="#!">Help</a></p>
                    </mdb-col>
                    <hr class="w-100 clearfix d-md-none"/>
                    <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p><i class="fas fa-home mr-3"></i> Abuja, NY 10012, US</p>
                        <p><i class="fas fa-envelope mr-3"></i> info@clmis.corbon.gov.ng</p>
                        <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                    </mdb-col>
                </mdb-row>
                <hr/>
                <mdb-container>
                <mdb-row class="d-flex align-items-center">
                    <mdb-col md="8" lg="8">
                        <p class="text-center text-md-left grey-text">&copy; 2018 Copyright: <a href="https://www.clmis.corbon.gov.ng">C-LMIS</a></p>
                    </mdb-col>
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
                </mdb-row>
                </mdb-container>
            </div>
        </mdb-footer>
   
  </div>
</template>
<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol,} from 'mdbvue';
export default {
  name: 'headerMain',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    
  },
  
  data() {
    return {
   /* Navbar Section */
    }
    
}
};
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.search {
    width: 60%;
    margin: 15px auto;
}
.has-search .form-control-feedback {
    position: absolute;
    display: block;
    width: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #007851;
}
  .has-search .form-control {
    padding-left: 2.375rem;
}

.wrapper {
   overflow-x: hidden;
 }

li:hover {
  background: #008751;
  cursor: pointer;
}
li:visited{
   color:white;
}
li a {
  color: #2BBBAD;
}
a:link{
  color:white;
}

li {
 color: #64dd17;
 position: relative;
 font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 font-size:18px;
 font-style:normal;
 font-variant-caps: all-small-caps;
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
.search {
    width: 60%;
    margin: 15px auto;
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
    height: 170px;
}
.a{
  color:white;
  text-decoration-color:none;
}



</style> 
    


