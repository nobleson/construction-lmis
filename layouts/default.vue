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
                <h6 style="font-size: 14px;">Contacts: 070678493843</h6>
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
        <b-nav-item class="active" :to="{ name: 'index'}" style="font-size:14px"><span class="text-white">Home</span></b-nav-item>
        <b-nav-item :to="{ name: 'publication',params: {data: null}}" style="font-size:14px"><span class="text-white">Publications</span></b-nav-item>
        <b-nav-item :to="{ name: 'company',params: {data: null}}" style="font-size:14px"><span class="text-white">Companies</span></b-nav-item>
        <b-nav-item :to="{ name: 'provider',params: {data: null}}" style="font-size:14px"><span class="text-white">Training Providers</span></b-nav-item>
        <b-nav-item :to="{ name: 'assessor',params: {data: null}}" style="font-size:14px"><span class="text-white">Assessors</span></b-nav-item>
        <b-nav-item  style="font-size:14px" ><span class="text-white">Artisans</span></b-nav-item>
        <b-nav-item  style="font-size:14px" ><span class="text-white">Jobs</span></b-nav-item>
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

  <mdb-footer style="background-color:#263238" class="page-footer font-small pt-0 float-center">
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
             
              <mdb-row class="mt-3 container" >
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
                    <mdb-col md="4" lg="3" xl="3" class="mb-4 float-right ml-auto">
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
import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem} from 'mdbvue';
export default {
  
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem

    
  },
  
  data() {
    return {
   /* Navbar Section */
    }  
  },
  methods: {
      goToHome(){
        
         this.$router.push('/publication')
      }
    }

};
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
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
.link {
  font-size:14px;
  color: #ffffff; 
}
.link:link {
  text-decoration: none;
}

b-nav-item:visited {
  text-decoration: none;
}

b-nav-item:hover {
  text-decoration: underline;
}

b-nav-item:active {
  text-decoration: underline;
}

.wrapper {
   overflow-x: hidden;
 }
li a {
  color: #2BBBAD;
}
li:hover {
  color: #008751;
  cursor: pointer;

}
li:visited{
   color:white;
}
a:active {
    color: blue;
    text-decoration: none;
}
a:hover {
    text-decoration: none;
}
a:visited {
    text-decoration: none;
}
a{
  text-decoration: none;
  font-size:14px;
  color:white;
}
ul{
  color:white;
}
li {
 position: relative;
 font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 font-size:10px;
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
    


