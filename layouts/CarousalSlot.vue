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

<div class="body">
  <mdb-row>
      <mdb-col md="9">
  <div class="gradient">
    <nuxt/>
    </div>
  <div class="gradient">
    <mdb-row>
      <mdb-col md="4" class="mb-4">
        <mdb-card :class="['gradient-card', gradient1 && 'show']" @click.native="gradient1 = true" v-on-clickaway="away1">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url (' + require('./assets/images/new.png') + ')'}">
              <a>
                <mdb-mask waves class="text-black d-flex h-100 ">
                  <div class="first-content align-self-center p-3" v-if="!gradient1">
                    <h3 class="card-title font-weight-bold">Assesors</h3>
                    <p class="lead mb-0">Details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient1">
                    <mdb-icon icon="money-bill-alt" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient1">
                <p class="text-uppercase text-muted">Assesors</p>
                <h4 class="font-weight-bold">2000$</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient1">
              <mdb-progress color="primary" :value="25" />
              <p class="text-muted">Better than last week (25%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
      <mdb-col md="4" class="mb-4">
        <mdb-card :class="['gradient-card', gradient3 && 'show']" @click.native="gradient3 = true" v-on-clickaway="away3">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url()">
              <a>
                <mdb-mask waves class="text-black d-flex h-100 ">
                  <div class="first-content align-self-center p-3" v-if="!gradient3">
                    <h3 class="card-title font-weight-bold">Articles</h3>
                    <p class="lead mb-0">Details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient3">
                    <mdb-icon icon="chart-pie" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient3">
                <p class="text-uppercase text-muted">Articles</p>
                <h4 class="font-weight-bold">20000</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient3">
              <mdb-progress color="amber" :value="75" />
              <p class="text-muted">Worse than last week (75%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>

    <mdb-col md="4" class="mb-4">
        <mdb-card :class="['gradient-card', gradient7 && 'show']" @click.native="gradient7 = true" v-on-clickaway="away7">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url()">
              <a>
                <mdb-mask waves class="text-black d-flex h-100 ">
                  <div class="first-content align-self-center p-3" v-if="!gradient7">
                    <h3 class="card-title font-weight-bold">Companies</h3>
                    <p class="lead mb-0">Check Strenghts</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient7">
                    <mdb-icon icon="chart-bar" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient7">
                <p class="text-uppercase text-muted">Registered Companies in Total</p>
                <h4 class="font-weight-bold">2000</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient7">
              <mdb-progress color="cyan" :value="50" />
              <p class="text-muted">Better than last week (50%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
     </mdb-row>  
  </div>

</mdb-col>
  <!-- Side column -->
        <mdb-col md="3">
          <div class="gradient">
         <div class="side">
        <mdb-card :class="['gradient-card', gradient4 && 'show']" @click.native="gradient4 = true" v-on-clickaway="away4">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url()">
              <a>
                <mdb-mask waves class="text-black d-flex h-100 ">
                  <div class="first-content align-self-center p-3" v-if="!gradient4">
                    <h3 class="card-title font-weight-bold">Top Sites</h3>
                    <p class="lead mb-0">Details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient4">
                    <mdb-icon icon="chart-bar" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient4">
                <p class="text-uppercase text-muted">Top Sites Information</p>
                <h4 class="font-weight-bold">2000</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient4">
              <mdb-progress color="cyan" :value="50" />
              <p class="text-muted">Better than last week (50%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
        </div>
        </div>
        <div class="gradient">
          <div class="side">
              <mdb-card :class="['gradient-card', gradient5 && 'show']" @click.native="gradient5 = true" v-on-clickaway="away5">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url()">
              <a>
                <mdb-mask waves class="text-black d-flex h-100 ">
                  <div class="first-content align-self-center p-3" v-if="!gradient5">
                    <h3 class="card-title font-weight-bold">Top Jobs</h3>
                    <p class="lead mb-0">Top Jobs Highlite</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient5">
                    <mdb-icon icon="chart-pie" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient5">
                <p class="text-uppercase text-muted">Details</p>
                <h4 class="font-weight-bold">20000</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient5">
              <mdb-progress color="amber" :value="75" />
              <p class="text-muted">Worse than last week (75%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
    </div>
</div>
<div class="gradient">
      <div class="side">
        <mdb-card :class="['gradient-card', gradient6 && 'show']" @click.native="gradient6 = true" v-on-clickaway="away6">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url('~/assets/images/corbon.png'),">
              <a>
                <mdb-mask waves class="text-black d-flex h-100 ">
                  <div class="first-content align-self-center p-3" v-if="!gradient6">
                    <h3 class="card-title font-weight-bold">Traning Providers</h3>
                    <p class="lead mb-0">Details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient6">
                    <mdb-icon icon="chart-bar" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient6">
                <p class="text-uppercase text-muted">Training providrrs Information </p>
                <h4 class="font-weight-bold">2000</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient6">
              <mdb-progress color="cyan" :value="50" />
              <p class="text-muted">Better than last week (50%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
        </div>
</div>

<div class="gradient">
        <div class="side">
        <mdb-card :class="['gradient-card', gradient2 && 'show']" @click.native="gradient2 = true" v-on-clickaway="away2">
          <div class="d-flex d-inline-flex">
            <div class="card-image"  style="background-image: url()">
              <a>
                <mdb-mask waves class="text-black d-flex h-100 " >
                  <div class="first-content align-self-center p-3" v-if="!gradient2">
                    <h3 class="card-title font-weight-bold">Artisans</h3>
                    <p class="lead mb-0">Details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient2">
                    <mdb-icon icon="chart-line" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient2">
                <p class="text-uppercase text-muted">Artisans Data Summary</p>
                <h4 class="font-weight-bold">200</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient2">
              <mdb-progress color="purple" :value="25" />
              <p class="text-muted">Worse than last week (25%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
    
          </div>
    </div>

    <div class="gradient">
      <div class="container">
          <mdb-card>
          <mdb-card-body>
            <mdb-card-title>Place your Advert</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
        </div>
      </div>

      <div class="gradient">
      <div class="container">
          <mdb-card>
          <mdb-card-body>
            <mdb-card-title>Place your Advert</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
        </div>
      </div>

  </mdb-col>
        
      </mdb-row>
    </div>
<!-- Cards Extended -->

 <!-- End to End carousal -->
 <div class="row">
 <div class="gradient">
    <mdb-carousel :interval="4000" show multi slide  :floating="true" >
      <mdb-carousel-item>
        <mdb-row>
          <mdb-col md="4" class="mb-4">
          <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
            <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 class="pink-text"><mdb-icon icon="chart-pie" /> Marketing</h5>
                <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                <mdb-btn color="pink" icon="clone left"><mdb-icon  /> View project</mdb-btn>
              </div>
            </div>
          </mdb-card>
          </mdb-col>
         
          <mdb-col md="4" class="mb-4">
            <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
            <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 class="pink-text"><mdb-icon icon="chart-pie" /> Marketing</h5>
                <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                <mdb-btn color="pink" icon="clone left"><mdb-icon  /> View project</mdb-btn>
              </div>
            </div>
          </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-4">
           <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
            <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 class="pink-text"><mdb-icon icon="chart-pie" /> Marketing</h5>
                <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                <mdb-btn color="pink" icon="clone left"><mdb-icon  /> View project</mdb-btn>
              </div>
            </div>
          </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
      <mdb-carousel-item>
        <mdb-row>
          <mdb-col md="4" class="mb-4">
            <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
            <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 class="pink-text"><mdb-icon icon="chart-pie" /> Marketing</h5>
                <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                <mdb-btn color="pink" icon="clone left"><mdb-icon  /> View project</mdb-btn>
              </div>
            </div>
          </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-4">
              <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
            <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 class="pink-text"><mdb-icon icon="chart-pie" /> Marketing</h5>
                <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                <mdb-btn color="pink" icon="clone left"><mdb-icon  /> View project</mdb-btn>
              </div>
            </div>
          </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-4">
           <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
            <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 class="pink-text"><mdb-icon icon="chart-pie" /> Marketing</h5>
                <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                <mdb-btn color="pink" icon="clone left"><mdb-icon /> View project</mdb-btn>
              </div>
            </div>
          </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
      <mdb-carousel-item>
        <mdb-row>
          <mdb-col md="4" class="mb-4">
           <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
            <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 class="pink-text"><mdb-icon icon="chart-pie" /> Marketing</h5>
                <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                <mdb-btn color="pink" icon="clone left"><mdb-icon  /> View project</mdb-btn>
              </div>
            </div>
          </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-4">
            <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
            <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 class="pink-text"><mdb-icon icon="chart-pie" /> Marketing</h5>
                <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                <mdb-btn color="pink" icon="clone left"><mdb-icon  /> View project</mdb-btn>
              </div>
            </div>
          </mdb-card>
          </mdb-col>
         
          <mdb-col md="4" class="mb-4">
            <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
            <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 class="pink-text"><mdb-icon icon="chart-pie" /> Marketing</h5>
                <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                <mdb-btn color="pink" icon="clone left"><mdb-icon  /> View project</mdb-btn>
              </div>
            </div>
          </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
    </mdb-carousel>

  </div>
  </div>   
 <!-- End of Carousal -->

<!-- Chart Section -->
<div class="body">
  <div class="gradient">
  <mdb-row>
    <mdb-col md="3">
      <div class="container">
        <mdb-polar-chart :data="polarChartData" :options="polarChartOptions" :width="300" :height="200"/>
      <hr>
      <mdb-pie-chart :data="pieChartData" :options="pieChartOptions" :width="300" :height="200"/>
    </div>
      </mdb-col>
       <mdb-col md="6">
          <mdb-container>
         <img src="~/assets/images/map (3).png" class="img-fluid" alt="Responsive image">
         </mdb-container>
      </mdb-col>
       <mdb-col md="3">
    <div class="gradient">
      <div class="container">
       <mdb-polar-chart :data="polarChartData" :options="polarChartOptions" :width="300" :height="200"/>
        <hr>
      <mdb-bar-chart :data="barChartData" :options="barChartOptions" :width="300" :height="200"/>
    </div>
    </div>
      </mdb-col>
    </mdb-row>
    </div>
</div>
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
  name: 'headerMain',
  layout:'headerMain',
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
   interval: null,
      lineChartData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      },
      lineChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
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
      radarChartData: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 0.7,
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      radarChartOptions: {
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
      scatterChartData: {
        datasets: [
          {
            label: 'V(node2)',
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: [{
              x: 1,
              y: -1.711e-2,
            }, {
              x: 1.26,
              y: -2.708e-2,
            }, {
              x: 1.58,
              y: -4.285e-2,
            }, {
              x: 2.0,
              y: -6.772e-2,
            }, {
              x: 2.51,
              y: -1.068e-1,
            }, {
              x: 3.16,
              y: -1.681e-1,
            }, {
              x: 3.98,
              y: -2.635e-1,
            }, {
              x: 5.01,
              y: -4.106e-1,
            }, {
              x: 6.31,
              y: -6.339e-1,
            }, {
              x: 7.94,
              y: -9.659e-1,
            }, {
              x: 10.00,
              y: -1.445,
            }, {
              x: 12.6,
              y: -2.110,
            }, {
              x: 15.8,
              y: -2.992,
            }, {
              x: 20.0,
              y: -4.102,
            }, {
              x: 25.1,
              y: -5.429,
            }, {
              x: 31.6,
              y: -6.944,
            }, {
              x: 39.8,
              y: -8.607,
            }, {
              x: 50.1,
              y: -1.038e1,
            }, {
              x: 63.1,
              y: -1.223e1,
            }, {
              x: 79.4,
              y: -1.413e1,
            }, {
              x: 100.00,
              y: -1.607e1,
            }, {
              x: 126,
              y: -1.803e1,
            }, {
              x: 158,
              y: -2e1,
            }, {
              x: 200,
              y: -2.199e1,
            }, {
              x: 251,
              y: -2.398e1,
            }, {
              x: 316,
              y: -2.597e1,
            }, {
              x: 398,
              y: -2.797e1,
            }, {
              x: 501,
              y: -2.996e1,
            }, {
              x: 631,
              y: -3.196e1,
            }, {
              x: 794,
              y: -3.396e1,
            }, {
              x: 1000,
              y: -3.596e1,
            }
            ]
          }
        ]
      },
      scatterChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
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
      bubbleChartData: {
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: [{
              x: 5,
              y: 7,
              r: 7
            }]
          },
          {
            label: "My Second dataset",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
            data: [{
              x: 15,
              y: 2,
              r: 6
            }]
          },
          {
            label: "My Thrid dataset",
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 0.8,
            data: [{
              x: 10,
              y: 4,
              r: 14
            }]
          }
        ]
      },
      bubbleChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
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
      horizontalBarChartData: {
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
      horizontalBarChartOptions: {
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
                            text: 'Advert',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'About',
                                    subText: 'Company And Adverts',
                                    path: './Advert',
                                   
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
       randomize(arr) {
      return arr.map(value => Math.floor(Math.random()*30));
    },
    changeData(){
      let lineData = {...this.lineChartData};
      lineData.datasets.forEach(dataset => {
        dataset.data = this.randomize(dataset.data);
      });
      this.lineChartData = lineData;
    },
  },
  beforeDestroy(){
    window.clearInterval(this.interval);
  },
  mixins: [clickaway]
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

.btn-to-top {
  
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
.bright{
  color:white;
  text-align: center;
  padding-top: 4%;
}



</style>


