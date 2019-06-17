<template>
  <div class="wrapper">
<header id="header" class="header">
  <div class="top-header hidden-xs" style="background-color:black">
      <div class="container clearfix">
        <div class="contact-section float-right float-none-xs">
          <span class="email-info">Email : <a href="mailto:apply2018@npvn.ng" >C-LMIS2019@corbon.gov.ng </a> </span>
          </div>
      </div>
  </div>

<div class="middle-header">
<div class="middle-header hidden-xs" style="background-color:#008751">
<mdb-container>
        <mdb-row>
            <mdb-col md="3" >
                <div class="logo">
                <img src="~/assets/images/corbon.png">
                </div>
            </mdb-col>
            <mdb-col md="6">
            <div class="bright" style="color:white">
              <p>
                <h5> Construction Labour Market Information System </h5>
              <p/>
              </div>
            </mdb-col>
            <mdb-col md="3">
                <div class="logo1">
                <img src="~/assets/images/new.png" width="80" height="80">
                </div>
            </mdb-col>
        </mdb-row>
    </mdb-container>
  </div>
	</div>
</header>
			<!--Header-->
  <div class="search">
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search">          
  </div>
  </div>

<!-- ----Header Main------- -->
<vue-navigation-bar style="background-color:#1C2331" :options="navbarOptions" />
<!-- ----Header Main------- -->

<nuxt/>

<back-to-top bottom="50px" right="50px">
  <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
</back-to-top>

 <mdb-footer color="stylish-color-dark" class="font-small pt-4 mt-4 ">
            <div class="text-center text-md-left">
                <mdb-row class="text-center text-md-left mt-3 pb-3">
                    <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Construction Labour Market Information System</h6>
                        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
   navbarOptions: {
                    elementId: 'main-navbar',
                    isUsingVueRouter: true,
                    mobileBreakpoint: 992,
                    brandImagePath: './',
                    brandImageAltText: 'brand-image',
                    showBrandImageInMobilePopup: true,
                    ariaLabelMainNav: 'Main Navigation',
                    menuOptionsRight: [
                        
                         {
                            type: 'link',
                            text: 'Home',
                            path: "/",
                           
                            
                        },

                         {
                            type: 'link',
                            text: 'Company',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'List',
                                    subText: 'List of Comapies',
                                    path: '/Company',
                                   
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Locations',
                                    subText: 'You\'re a presentation tool!',
                                    path: './locations',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Blog',
                                    subText: 'I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.',
                                    path: './blog',
                                },
                            ]
                        },

                         {
                            type: 'link',
                            text: 'Advert',
                            path: './Advert',
                
                        },

                         {
                            type: 'link',
                            text: 'Company',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'About',
                                    subText: 'Stupid corporate wet blankets. Like booze ever killed anyone.',
                                    path: './about',
                                   
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Locations',
                                    subText: 'You\'re a presentation tool!',
                                    path: './locations',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Blog',
                                    subText: 'I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.',
                                    path: './blog',
                                },
                            ]
                        },

                         {
                            type: 'link',
                            text: 'Company',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'About',
                                    subText: 'Stupid corporate wet blankets. Like booze ever killed anyone.',
                                    path: './about',
                                   
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Locations',
                                    subText: 'You\'re a presentation tool!',
                                    path: './locations',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Blog',
                                    subText: 'I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.',
                                    path: './blog',
                                },
                            ]
                        },

                         {
                            type: 'link',
                            text: 'Company',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'About',
                                    subText: 'Stupid corporate wet blankets. Like booze ever killed anyone.',
                                    path: './about',
                                   
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Locations',
                                    subText: 'You\'re a presentation tool!',
                                    path: './locations',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Blog',
                                    subText: 'I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.',
                                    path: './blog',
                                },
                            ]
                        },

                         {
                            type: 'link',
                            text: 'Company',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'About',
                                    subText: 'Stupid corporate wet blankets. Like booze ever killed anyone.',
                                    path: './about',
                                   
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Locations',
                                    subText: 'You\'re a presentation tool!',
                                    path: './locations',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Blog',
                                    subText: 'I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.',
                                    path: './blog',
                                },
                            ]
                        },

                        {
                            type: 'link',
                            text: 'Company',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'About',
                                    subText: 'Stupid corporate wet blankets. Like booze ever killed anyone.',
                                    path: './about',
                                   
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Locations',
                                    subText: 'You\'re a presentation tool!',
                                    path: './locations',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Blog',
                                    subText: 'I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.',
                                    path: './blog',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: 'Contact',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'Customer Service',
                                    path: './customer-service'
                                },
                                {
                                    type: 'link',
                                    text: 'Accounting',
                                    path: './accounting',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Reception',
                                    path: './reception',
                                    iconLeft: '<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: 'Pricing',
                            path: './pricing',
                            iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
                        },
                    ],
                    
                }
            }
            
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.gradient{
    padding-bottom: 1%;
    padding-left: 2%;
    padding-right: 2%;
  }
  li:hover {
  background: #008751;
  cursor: pointer;
}
li a {
  color: #2BBBAD;
}

li {
  color: #fff;
  background: #00695C;
  display: block;
  float: left;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
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
</style>


