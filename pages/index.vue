<template>
 <section class="mt-2">
   <div class="row">
  <div class="col-s-6">
<section>
   <mdb-col>
        <b-carousel
          v-model="slide"
          :interval="4000"
          indicators
          controls
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          class="gradient"
        >

          <!-- Slides with image only -->
          <b-carousel-slide
          caption="CORBON OFFICE"
          >
          <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="~/assets/images/4.png"
              alt="image slot"
            >
          </b-carousel-slide>

           <!-- Slides with custom text -->
          <b-carousel-slide
          caption="CONSTRUCTION COMPANY @ WORK "
          >
            <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="~/assets/images/1.jpg"
              alt="image slot"
            >
          </b-carousel-slide>

           <!-- Slides with custom text -->
          <b-carousel-slide
          caption="CORBON STRUCTURE CONSTRUCTION GALLERY"
          >
            <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="~/assets/images/1.png"
              alt="image slot"
            >
          </b-carousel-slide>
          
          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          
        </b-carousel>
       
    </mdb-col>
 </section>

  <section>
   <div class="gradient2">
     <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between">
      
        <marquee><h5> ==== News Update Artisans seminar @ Abuja Venue Sharaton, Pw Construction Company recruitment is on from 20 July 2019 to 1 September 2019 ==== </h5></marquee>

      </mdb-card-body>
    </mdb-card>
    <!-- Multiple Carousal -->
    <mdb-carousel :interval="4000" show multi slide indicators :floating="true" >
      <mdb-carousel-item>
        <mdb-row>
          <mdb-col md="3" class="mb-3">
            <mdb-card class="classic-admin-card brown accent-2">
              <mdb-card-body>
                <div class="pull-right">
                  <img src="~/assets/images/favicon-32x32.png"/>
                </div>
                <p class="white-text">Regulatory Bodies</p>
                <h4><strong>2000</strong></h4>
              </mdb-card-body>
            <mdb-card-body>
              <p>Available Regulatory Bodies </p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col md="3" class="mb-3">
          <mdb-card class="classic-admin-card secondary-color">
            <mdb-card-body>
              <div class="pull-right">
                 <img src="~/assets/images/Assmt bodies icon.png"/>
              </div>
              <p class="white-text">Assesment Bodies</p>
              <h4><strong>2000</strong></h4>
            </mdb-card-body>
           
            <mdb-card-body>
              <p>Available Assesment Bodies</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
       
       <mdb-col md="3" class="mb-3">
          <mdb-card class="classic-admin-card primary-color">
            <mdb-card-body>
              <div class="pull-right">
                <mdb-icon icon="award" width="" height=""/>
              </div>
              <p class="white-text">Awarding Bodies</p>
              <h4><strong>5000</strong></h4>
            </mdb-card-body>
         
            <mdb-card-body>
              <p>Available Awarding Bodies</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>

         <mdb-col md="3" class="mb-3">
          <mdb-card class="classic-admin-card green">
            <mdb-card-body>
              <div class="pull-right">
                  <img src="~/assets/images/licence Icon.png" size="36x36"/>
              </div>
              <p class="white-text">Licensing Bodies</p>
              <h4><strong>6000</strong></h4>
            </mdb-card-body>
          
            <mdb-card-body>
              <p>Available Licensing Bodies</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
  
      <mdb-carousel-item>
       <mdb-row>
          <mdb-col md="3" class="mb-3">
            <mdb-card class="classic-admin-card1 grey">
              <mdb-card-body>
                <div class="pull-right">
                  <img src="~/assets/images/artisan.png"/>
                </div>
                <p class="white-text">Artisans & Craftmen</p>
                <h4><strong>1000</strong></h4>
              </mdb-card-body>
            <mdb-card-body>
              <p>Available Artisans </p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col md="3" class="mb-3">
          <mdb-card class="classic-admin-card1 green">
            <mdb-card-body>
              <div class="pull-right">
                 <img src="~/assets/images/const.png"/>
              </div>
              <p class="white-text">Companies</p>
              <h4><strong>6000</strong></h4>
            </mdb-card-body>
           
            <mdb-card-body>
              <p>Companies Registered</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
       
       <mdb-col md="3" class="mb-3">
          <mdb-card class="classic-admin-card1 grey accents">
            <mdb-card-body>
              <div class="pull-right">
                <mdb-icon icon="newspaper" />
              </div>
              <p class="white-text">Articles</p>
              <h4><strong>7000</strong></h4>
            </mdb-card-body>
         
            <mdb-card-body>
              <p>Total Articles</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>

         <mdb-col md="3" class="mb-3">
          <mdb-card class="classic-admin-card1 warning-color accent-2">
            <mdb-card-body>
              <div class="pull-right">
                  <img src="~/assets/images/licence Icon.png" size="36x36"/>
              </div>
              <p class="white-text">Accessors</p>
              <h4><strong>8000</strong></h4>
            </mdb-card-body>
          
            <mdb-card-body>
              <p>Total Accessors</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>  
      </mdb-row>
      </mdb-carousel-item>
        
    </mdb-carousel>
  </div>   
    </section>
    
 <section>
      <mdb-row>
         <mdb-col xl="3" md="3" class="mb-3">
          <div class="container">
            <mdb-polar-chart :data="polarChartData" :options="polarChartOptions" :width="300" :height="200"/>
            <hr>
          <mdb-bar-chart :data="barChartData" :options="barChartOptions" :width="300" :height="200"/>
        </div>
        </mdb-col>
        <mdb-col md="6" class="mb-3">
           <mdb-container>
          <img src="~/assets/images/map (3).png" class="img-fluid" alt="Responsive image">
          </mdb-container>
        </mdb-col>
        
         <mdb-col xl="3" md="3" class="mb-3">
          <div class="container">
        <mdb-polar-chart :data="polarChartData" :options="polarChartOptions" :width="300" :height="200"/>
          <hr>
          <mdb-pie-chart :data="pieChartData" :options="pieChartOptions" :width="300" :height="200"/>
        </div>
        </mdb-col>
      </mdb-row>
    </section>
  </div>

    <!--- side column--->
      
   <mdb-col md="3" class="post">
        
          <h3 class="font-weight-bold"> Trending Publications</h3>
          <div>
           <b-link to="publication">
              <mdb-media>
                <mdb-media-body>
                  <h5 class="mt-0 font-weight-bold">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </mdb-media-body>
              </mdb-media>
           </b-link>
          
          </div>
          <br/>
         <div class="mt-1">
               <div>
             <mdb-media>
                <mdb-media-body>
                  <h5 class="mt-0 font-weight-bold">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </mdb-media-body>
              </mdb-media>
          </div>
          
          
            </div>

            <div class="mt-2">
               <div>
             <mdb-media>
                <mdb-media-body>
                  <h5 class="mt-0 font-weight-bold">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </mdb-media-body>
              </mdb-media>
          </div>
          
            </div>
        
        <b-card class="mt-3">
          <h6 class="font-weight-bold">Related Post</h6>
          <div>
        <b-link to="publication">
              <mdb-media>
                <mdb-media-body>
                  <h5 class="mt-0 font-weight-bold">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </mdb-media-body>
              </mdb-media>
           </b-link>
          </div>
          <br/>
         <div class="mt-3">
               <div>
             <mdb-media>
                <mdb-media-body>
                  <h5 class="mt-0 font-weight-bold">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </mdb-media-body>
              </mdb-media>
          </div>
          
          
            </div>

            <div class="mt-3">
               <div>
             <mdb-media>
                <mdb-media-body>
                  <h5 class="mt-0 font-weight-bold">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </mdb-media-body>
              </mdb-media>
          </div>
          
            </div>
        
        </b-card>
    
      
        </mdb-col>


    <mdb-col md="3" class="mb-3">

      <div class="aside">

        <div class="gradient3">
        <mdb-card :class="['gradient-card', gradient4 && 'show']" @click.native="gradient4 = true" v-on-clickaway="away4" class="mb-4">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url('/assets/images/Assesment Body.png')">
              <a>
                <mdb-mask waves class="text-black d-flex h-100 ">
                  <div class="first-content align-self-center p-3" v-if="!gradient4">
                    <h3 class="card-title font-weight-bold">Construction Sites</h3>
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
                <p class="text-uppercase text-muted">Construction Sites Information</p>
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
        <div class="gradient3">
        <mdb-card :class="['gradient-card', gradient5 && 'show']" @click.native="gradient5 = true" v-on-clickaway="away5" class="mb-4">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(~/)">
              <a>
                <mdb-mask waves class="text-black d-flex h-100 ">
                  <div class="first-content align-self-center p-3" v-if="!gradient5">
                    <h3 class="card-title font-weight-bold">Construction Jobs</h3>
                    <p class="lead mb-0">Details</p>
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

        <div class="gradient3">
        <mdb-card :class="['gradient-card', gradient6 && 'show']" @click.native="gradient6 = true" v-on-clickaway="away6" class="mb-4">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url('~/assets/images/corbon.png'),">
              <a>
                <mdb-mask waves class="text-black d-flex h-100 ">
                  <div class="first-content align-self-center p-3" v-if="!gradient6">
                    <h3 class="card-title font-weight-bold">Training Providers</h3>
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
                <p class="text-uppercase text-muted">Training providers Information </p>
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

        <div class="gradient3">
        <mdb-card :class="['gradient-card', gradient2 && 'show']" @click.native="gradient2 = true" v-on-clickaway="away2" class="mb-4">
          <div class="d-flex d-inline-flex">
            <div class="card-image"  style="background-image: url()">
              <a>
                <mdb-mask waves class="text-black d-flex h-100 " >
                  <div class="first-content align-self-center p-3" v-if="!gradient2">
                    <h3 class="card-title font-weight-bold">Artisans and Craftmen</h3>
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

        <div class="gradient3">

        <mdb-card :class="['gradient-card', gradient1 && 'show']" @click.native="gradient1 = true" v-on-clickaway="away1" class="mb-4">
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

    <!--- Second Card-->
        <mdb-card :class="['gradient-card', gradient3 && 'show']" @click.native="gradient3 = true" v-on-clickaway="away3" class="mb-4">
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
    
    <!---Third-->
    <div class="gradient">
    <mdb-card :class="['gradient-card', gradient7 && 'show']" @click.native="gradient7 = true" v-on-clickaway="away7">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url()">
              <a>
                <mdb-mask waves class="text-black d-flex h-100 ">
                  <div class="first-content align-self-center p-3" v-if="!gradient7">
                    <h3 class="card-title font-weight-bold">Companies</h3>
                    <p class="lead mb-0">Details</p>
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
        </div>
        </div> 
      
        </div>

      </mdb-col>
    </div>
    
    </section>

</template>
<script>

import { mixin as clickaway } from 'vue-clickaway';
import { mdbFooter, mdbContainer, mdbRow, mdbCol,} from 'mdbvue';
import { mdbNavbar,mdbCarousel, mdbCarouselItem, mdbCarouselCaption,
          mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbInput, 
          mdbBtn, waves, mdbCard,  mdbCardImage, mdbCardHeader, 
          mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, 
          mdbCardAvatar, mdbCardGroup, mdbView,  mdbMedia, mdbMediaBody, mdbMask, mdbIcon, mdbTooltip,
          mdbLineChart, mdbTabPane, mdbProgress, mdbTbl, mdbTab, mdbTabItem, mdbTabContent, mdbMasonry,
          mdbMasonryItem, mdbRadarChart, mdbBarChart, mdbPolarChart, mdbPieChart, mdbDoughnutChart, mdbScatterChart, mdbBubbleChart,
          mdbHorizontalBarChart
       } from 'mdbvue';

export default {
  name: 'index',
  components: {
    mdbMedia,
    mdbMediaBody,
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider {
  
  overflow: hidden;
  width: 360px;
  height: 640px;
}

.slider-cards {
  position: relative;
  width: 900px;
  margin: 20px 50px;  
  z-index: 1;
}

.slider-card {
  display: inline-block;
  background-color: grey;
  overflow: hidden;
  width: 260px;
  height: 360px;
  margin-right: 30px;
  border-radius: 12px;
  box-shadow:0px 60px 20px -20px rgba(0, 0, 0, 0.3)
}
.slider-card img {
  width: 100%;
}
.slider-info {
  position: relative;
  overflow: hidden;
  background-color: white;
  margin-top: -180px;
  margin-left: 30px;
  padding: 200px 20px 0;
  width: 300px;
  height: 400px;
  text-align: center;
  border-radius: 8px;
}

.slider-info h1 {
  font-family: Arial Black, Gadget, sans-serif;
  line-height: 25px;
  font-size: 23px;
}
.slider-info p {
  font-family: Arial, Helvetica, sans-serif;
}

.slider-button {
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  border: none;
  color: white;
  background-color: #E71284;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
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
   z-index: -1;
 }
.gradient{
  padding-left: 1%;
 
  }
  li:hover {
  background: #008751;
  cursor: pointer;
}
li a {
  color: #2BBBAD;
}

li {
  
  background: rgb(29, 240, 110);
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
  margin-top: 10px;
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


</style>


