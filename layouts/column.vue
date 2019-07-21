<template>
<div class="wrapper">
    <div class="fixedMenu">
      <header id="header" class="header">
        <div class="top-header hidden-xs" style="background-color:#81c784">
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
  <b-navbar toggleable="lg" style="background-color:#81c784 " >
   
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

<section class="mt-2">
   <div class="row">
  <div class="col-s-9">

    <nuxt/>

  <section>
   </section>
    
 <section>
      
    </section>
  </div>

    <!--- side column--->
      
         
    <mdb-col md="3" class="mb-3">

      <div class="aside">
       <div class="gradient">
             <div class="container">
                <mdb-card class="text-center">
                <mdb-card-body class="text-center">
                  <mdb-card-title></mdb-card-title>
                  <img
                    src="~/assets/images/corbon.png"
                    alt="logo"
                    id="animated-img"
                    class="animated rubberBand infinite loop-container text-center"
                  >
            <h4>Place Your Advert</h4>
            <mdb-card-text class="text-center">Some quick example text to build on the card title <br> and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
        </div>
        </div>

          <div class="gradient">
             <div class="container">
                <mdb-card class="text-center">
                <mdb-card-body class="text-center">
                  <mdb-card-title></mdb-card-title>
                  <img
                    src="~/assets/images/corbon.png"
                    alt="logo"
                    id="animated-img"
                    class="animated rubberBand infinite loop-container text-center"
                  >
            <h4>Place Your Advert</h4>
            <mdb-card-text class="text-center">Some quick example text to build on the card title <br> and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
        </div>
        </div>
         
        </div> 


               
      </mdb-col>
    </div>
    </section>

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
import { mixin as clickaway } from 'vue-clickaway';
import { mdbFooter, mdbContainer, mdbRow, mdbCol,} from 'mdbvue';
import { mdbNavbar,mdbCarousel, mdbCarouselItem, mdbCarouselCaption,
        mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbInput, 
        mdbBtn, waves, mdbCard,  mdbCardImage, mdbCardHeader, 
        mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, 
        mdbCardAvatar, mdbCardGroup, mdbView, mdbMask, mdbIcon, mdbTooltip,
        mdbLineChart, mdbTabPane, mdbProgress, mdbTbl, mdbTab, mdbTabItem, mdbTabContent, mdbMasonry,
        mdbMasonryItem, mdbRadarChart, mdbBarChart, mdbPolarChart, mdbPieChart, mdbDoughnutChart, mdbScatterChart, mdbBubbleChart,
        mdbHorizontalBarChart
        } from 'mdbvue';

export default {
  name: 'publication',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbIcon,
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbCard,  
    mdbCardImage, 
    mdbCardHeader, 
    mdbCardBody, 
    mdbCardTitle, 
    mdbCardText, 
    mdbCardFooter, 
    mdbCardUp, 
    mdbCardAvatar, 
    mdbCardGroup, 
    mdbBtn, 
    mdbView, 
    mdbMask, 
    mdbIcon,
    mdbTooltip,
    mdbProgress,
    mdbTbl,
    mdbTab,
    mdbTabItem,
    mdbTabContent,
    mdbTabPane,
    mdbRadarChart,
    mdbBarChart,
    mdbPolarChart,
    mdbPieChart,
    mdbDoughnutChart,
    mdbScatterChart,
    mdbBubbleChart,
    mdbHorizontalBarChart
  },
  mounted() {
    this.interval = setInterval(this.changeData, 2000);
    this.fullHeight2 = '100%';
  },
  data() {
    return {
      slide:0,
      slide:null,
      show1: false,
      show2: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      height1: '2.65rem',
      gradient1: false,
      gradient2: false,
      gradient3: false,
      gradient4: false,
      gradient5: false,
      gradient6: false,
      gradient7: false,
      tab: 0,
    
   /*  Chart Data Set */
   
     polarChartData: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: ["rgba(247, 70, 74, 0.3)", "rgba(70, 191, 189, 0.3)", "rgba(253, 180, 92, 0.3)", "rgba(148, 159, 177, 0.3)", "rgba(77, 83, 96, 0.3)"],
            hoverBackgroundColor: ["rgba(247, 70, 74, 0.4)", "rgba(70, 191, 189, 0.4)", "rgba(253, 180, 92, 0.4)", "rgba(148, 159, 177, 0.4)", "rgba(77, 83, 96, 0.4)"],
          }
        ]
      },
      polarChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
      },
  
      pieChartData: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
          }
        ]
      },
      pieChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
      },

       barChartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
        }]
      },
      barChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
        }
      },
    
    
    
    }
            
  },
  methods: {
    changeCurrentComponent(newComponent) {
      this.currentComponent = newComponent;
    },
    toggle1() {
      this.show1 = !this.show1;
      this.show1 ? this.height1 = this.fullHeight1 : this.height1 = '2.65rem';
    },
    beforeEnter(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    leave(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    away1() {
      this.gradient1 = false;
    },
    away2() {
      this.gradient2 = false;
    },
    away3() {
      this.gradient3 = false;
    },
    away4() {
      this.gradient4 = false;
    },
     away5() {
      this.gradient5 = false;
    },
     away6() {
      this.gradient6 = false;
    },
     away7() {
      this.gradient7 = false;
    },
   /*  Chart Method Sections */
      
    
  },
 
  mixins: [clickaway]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gradient{
  padding-left: 1%;
}

.wrapper {
   overflow-x: hidden;
   z-index: -1;
 }

.bright{
  color:white;
  text-align: center;
  padding-top: 4%;
}
.gradient1{
  padding-top:1%;
}
.gradient2{
  padding-top:1%;
  padding-left:2%;
}

p {
  font-family: "Georgia", Verdana, Geneva, Tahoma, sans-serif, serif;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 20px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
.pull-right{
  float:right;
}

.classic-admin-card1 .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card1 .card-body p {
  font-size: 20px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card1 .card-body h4 {
  margin-top:10px;
}

* {
  box-sizing: border-box;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}
.aside {
  padding-right:2%;
  font-size: 14px;
 position:static;
  top: 0%;
}



/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
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
li a {
  color: #2BBBAD;
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
  color:blue;
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

</style>



  