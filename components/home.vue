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
  </div>

    <!--- side column--->
   <mdb-col md="3" class="post">
        
          <h3 class="font-weight-bold"> Recent Publications</h3>
          <div>
           
              <b-media v-for="post in postList" :key="post.id">
                <img slot="aside" :src="post.coverpage" width="200" height="200" alt="Media Aside">
               <b-link :to="{ name: 'publication',params: {data: post}}">
                   <h5 class="mt-0">
                       {{post.title}}
                   </h5>
               </b-link>
                
                <p>
                 {{post.aboutAuthor}}
                </p>
              </b-media>

           <div class="text-center" v-if="isPostLoading"> 
                <b-spinner  v-if="isPostLoading" variant="success" type="grow" label="Spinning"></b-spinner>
                </div>
          </div>
         
        </mdb-col>


    <mdb-col md="3" >

      <div class="aside">

        
      
        </div>

      </mdb-col>
    </div>
     
      <mdb-row>
        <mdb-col md="12" xl="2" lg="2" class="gradient">
            <mdb-card cascade class="cascading-admin-card mt-3">
            <div class="admin-up mt-1">
             <h3><mdb-badge v-if="isTrainerLoading == false" style="background-color:#008751">{{trainerList.length}}</mdb-badge></h3>
                <b-spinner  v-if="isTrainerLoading" variant="warning" type="grow" label="Spinning"></b-spinner>
            </div>
            <mdb-card-body class="text-center">
            <mdb-card-title>Trainers</mdb-card-title>
            <b-link :to="{ name: 'trainer', params: {data: null}}"><mdb-btn color="light-green" style="color:white">view</mdb-btn></b-link>
          </mdb-card-body>
          </mdb-card>
          <mdb-card cascade class="cascading-admin-card mt-3">
            <div class="admin-up mt-1">
             <h3>
               <mdb-badge v-if="isTraineeLoading == false" style="background-color:#008751">{{traineeList.length}}</mdb-badge>
               <b-spinner  v-if="isTraineeLoading" variant="warning" type="grow" label="Spinning"></b-spinner></h3>
            </div>
            <mdb-card-body class="text-center">
            <mdb-card-title> Trainees</mdb-card-title>
            <b-link :to="{ name: 'trainee', params: {data: null}}" ><mdb-btn color="light-green" style="color:white">view</mdb-btn></b-link>
          </mdb-card-body>
          </mdb-card>
      
          <mdb-card cascade class="cascading-admin-card mt-3">
            <div class="admin-up mt-1">
             <h3><mdb-badge  v-if="isArtisanLoading == false"  style="background-color:#008751">{{ artisanList.length}}</mdb-badge></h3>
               <b-spinner  v-if="isArtisanLoading" variant="warning" type="grow" label="Spinning"></b-spinner>
            </div>
            <mdb-card-body class="text-center">
            <mdb-card-title>Artisans</mdb-card-title>
            <b-link :to="{ name: 'artisan', params: {data: null}}"><mdb-btn color="light-green" style="color:white">view</mdb-btn></b-link>
          </mdb-card-body>
          </mdb-card>
          
          <mdb-card cascade class="cascading-admin-card mt-3">
            <div class="admin-up mt-1">
             <h3><mdb-badge v-if="isRegulatoryBodyLoading == false" style="background-color:#008751">{{ regulatorybodiesList.length}}</mdb-badge></h3>
                  <b-spinner  v-if="isRegulatoryBodyLoading" variant="warning" type="grow" label="Spinning"></b-spinner>
            </div>
            <mdb-card-body class="text-center">
            <mdb-card-title>Regulatory Bodies</mdb-card-title>
            <b-link :to="{ name: 'regulatorybody', params: {data: regulatoryData}}"><mdb-btn color="light-green" style="color:white">view</mdb-btn></b-link>
          </mdb-card-body>
          </mdb-card>

        </mdb-col>
        <mdb-col md="12" xl="8" lg="8" >
         <mdb-container style="overflow-x: auto">
            <map name="map_of_nigeria">
             <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Sokoto Statistics</mdb-card-title>
                  <mdb-card-body >
                  <mdb-list-group style="color:black; font-weight-bold">
                    <mdb-list-group-item style="font-size:20px">Assessors<mdb-badge color="primary" pill>{{assessorList.length}}</mdb-badge>
                    </mdb-list-group-item>
                     <mdb-list-group-item style="font-size:20px">Training Providers<mdb-badge color="primary" pill>{{providerList.length}}</mdb-badge>
                    </mdb-list-group-item>
                      <mdb-list-group-item style="font-size:20px">Trainers<mdb-badge color="primary" pill>{{trainerList.length}}</mdb-badge>
                    </mdb-list-group-item>
                    <mdb-list-group-item style="font-size:20px">Trainees<mdb-badge color="primary" pill>{{traineeList.length}}</mdb-badge>
                    </mdb-list-group-item>
                     <mdb-list-group-item style="font-size:20px">Artisans<mdb-badge color="primary" pill>{{artisanList.length}}</mdb-badge>
                    </mdb-list-group-item>
                     <mdb-list-group-item style="font-size:20px">Construction Companies<mdb-badge color="primary" pill>{{companyList.length}}</mdb-badge>
                    </mdb-list-group-item>
                  </mdb-list-group>   
                  </mdb-card-body>            
                </mdb-card>
              <area shape="rect" slot="reference" alt="" title="" coords="213,20,327,95" href="#" target="" />
              </mdb-tooltip>
              <area shape="rect" alt="" title="Kebbi" coords="107,113,181,235" href="#" target="" />
              <area shape="rect" alt="" title="Zamfara" coords="322,102,404,192" href="#" target="" />
              <area shape="rect" alt="" title="Katsina" coords="456,87,509,188" href="#" target="" />
              <area shape="rect" alt="" title="Kaduna" coords="469,238,573,379" href="#" target="" />
              <area shape="rect" alt="" title="Oyo" coords="38,445,128,530" href="#" target="" />
              <area shape="rect" alt="" title="Kano" coords="554,136,614,215" href="#" target="" />
              <area shape="rect" alt="" title="Jigawa" coords="650,99,739,156" href="#" target="" />
              <area shape="rect" alt="" title="FCT" coords="419,405,466,443" href="#" target="" />
              <area shape="rect" alt="" title="Nasarawa" coords="495,420,615,475" href="#" target="" />
              <area shape="rect" alt="" title="Benue" coords="539,518,696,580" href="#" target="" />
              <area shape="rect" alt="" title="Taraba" coords="744,450,873,557" href="#" target="" />
              <area shape="rect" alt="" title="Yobe" coords="823,70,949,187" href="#" target="" />
              <area shape="rect" alt="" title="Ogun" coords="514,617,553,650" href="#" target="" />
              <area shape="rect" alt="" title="Enugu" coords="449,592,495,642" href="#" target="" />
              <area shape="rect" alt="" title="Ondo" coords="198,575,228,648" href="#" target="" />
              <area shape="rect" alt="" title="Osun" coords="157,515,213,558" href="#" target="" />
              <area shape="rect" alt="" title="Delta" coords="259,677,368,725" href="#" target="" />
              <area shape="rect" alt="" title="Ekiti" coords="242,504,284,533" href="#" target="" />
              <area shape="rect" alt="" title="Cross River" coords="554,662,609,740" href="#" target="" />
              <area shape="rect" alt="" title="Imo" coords="414,682,456,718" href="#" target="" />
              <area shape="rect" alt="" title="Bayelsa" coords="301,747,367,792" href="#" target="" />
              <area shape="rect" alt="" title="Anambra" coords="411,622,438,662" href="#" target="" />
              <area shape="rect" alt="" title="Abia" coords="477,678,493,722" href="#" target="" />
              <area shape="rect" alt="" title="Akwa Ibom" coords="493,728,529,772" href="#" target="" />
              <area shape="rect" alt="" title="Rivers" coords="398,733,448,778" href="#" target="" />
              <area shape="rect" alt="" title="Kogi" coords="344,472,448,543" href="#" target="" />
              <area shape="rect" alt="" title="Plateau" coords="645,368,746,440" href="#" target="" />
              <area shape="rect" alt="" title="Bauchi" coords="640,248,775,336" href="#" target="" />
              <area shape="rect" alt="" title="Gombe" coords="825,263,897,342" href="#" target="" />
              <area shape="rect" alt="" title="Adamawa" coords="937,332,994,437" href="#" target="" />
              <area shape="rect" alt="" title="Borno" coords="993,80,1108,228" href="#" target="" />
              <area shape="rect" alt="" title="Ebonyi" coords="511,609,562,655" href="#" target="" />
              <area shape="rect" alt="" title="Edo" coords="308,568,384,625" href="#" target="" />
              <area shape="rect" alt="" title="Lagos" coords="49,609,138,624" href="#" target="" />
              <area shape="rect" alt="" title="Niger" coords="219,289,412,405" href="#" target="" />
             <area shape="rect"  alt=""  title="Ogun" coords="19,546,107,600" href="#" target="" />
             <area shape="rect"  alt="" title="Kwara" coords="172,403,262,483" href="#" target="" />  
            </map>

          <img src="~/assets/images/map.jpg" class="img-fluid" alt="Responsive image" usemap="#map_of_nigeria" style="max-width: 1200px; max-height:800px">
          </mdb-container>
        </mdb-col>
         
        <mdb-col md="12" xl="2" lg="2" class="gradient">
          <mdb-card cascade class="cascading-admin-card mt-3">
            <div class="admin-up mt-1">
             <h3>
               <mdb-badge v-if="isProviderLoading == false" style="background-color:#008751">{{providerList.length}}</mdb-badge>
               <b-spinner  v-if="isProviderLoading" variant="warning" type="grow" label="Spinning"></b-spinner></h3>
            </div>
            <mdb-card-body class="text-center">
            <mdb-card-title> Registered Training Providers</mdb-card-title>
            <b-link :to="{ name: 'provider', params: {data: null}}"><mdb-btn color="light-green" style="color:white">view</mdb-btn></b-link>
          </mdb-card-body>
          </mdb-card>
      
          <mdb-card cascade class="cascading-admin-card mt-3">
            <div class="admin-up mt-1">
             <h3><mdb-badge  v-if="isCompanyLoading == false"  style="background-color:#008751">{{companyList.length}}</mdb-badge></h3>
               <b-spinner  v-if="isCompanyLoading" variant="warning" type="grow" label="Spinning"></b-spinner>
            </div>
            <mdb-card-body class="text-center">
            <mdb-card-title>Registered Construction Companies</mdb-card-title>
            <b-link  :to="{ name: 'company', params: {data: null}}"><mdb-btn color="light-green" style="color:white">view</mdb-btn></b-link>
          </mdb-card-body>
          </mdb-card>
          
          <mdb-card cascade class="cascading-admin-card mt-3">
            <div class="admin-up mt-1">
             <h3><mdb-badge v-if="isAssesorLoading == false" style="background-color:#008751">{{assessorList.length}}</mdb-badge></h3>
                  <b-spinner  v-if="isAssesorLoading" variant="warning" type="grow" label="Spinning"></b-spinner>
            </div>
            <mdb-card-body class="text-center">
            <mdb-card-title>Assessors</mdb-card-title>
            <b-link :to="{ name: 'assessor',params: {data: assessorDataSet}}"><mdb-btn color="light-green" style="color:white">view</mdb-btn></b-link>
          </mdb-card-body>
          </mdb-card>

          <mdb-card cascade class="cascading-admin-card mt-3">
            <div class="admin-up mt-1">
             <h3><mdb-badge v-if="isPostLoading == false" style="background-color:#008751">{{postList.length}}</mdb-badge></h3>
                <b-spinner  v-if="isPostLoading" variant="warning" type="grow" label="Spinning"></b-spinner>
            </div>
            <mdb-card-body class="text-center">
            <mdb-card-title>Puplications</mdb-card-title>
            <b-link :to="{ name: 'publication', params: {data: null}}"><mdb-btn color="light-green" style="color:white">view</mdb-btn></b-link>
          </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
     
    </section>

</template>
<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway';
import {  mdbBadge, mdbFooter, mdbContainer, mdbRow, mdbCol,} from 'mdbvue';
import { mdbNavbar, mdbMediaImage, mdbCarousel, mdbCarouselItem, mdbCarouselCaption,
          mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbInput,mdbListGroup, mdbListGroupItem, 
          mdbBtn, waves, mdbCard,  mdbCardImage, mdbCardHeader, 
          mdbCardBody,  mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, 
          mdbCardAvatar, mdbCardGroup, mdbView,  mdbMedia, mdbMediaBody, mdbMask, mdbIcon, mdbTooltip,
          mdbLineChart, mdbTabPane, mdbProgress, mdbTbl, mdbTab, mdbTabItem, mdbTabContent, mdbMasonry,
          mdbMasonryItem, mdbRadarChart, mdbBarChart, mdbPolarChart, mdbPieChart, mdbDoughnutChart, mdbScatterChart, mdbBubbleChart,
          mdbHorizontalBarChart
       } from 'mdbvue';

export default {
  name: 'index',
  components: {
    mdbListGroup,
    mdbListGroupItem,
    mdbBadge, 
    mdbMedia,
    mdbMediaImage,
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
  data() {
    return {
      mapDataSet: {
        coordinates: []
      },
      providerList:[],
      companyList:[],
      assessorList:[],
      postList:[],
      assessorDataSet: {
        labels: [],
        data: []
      },
      traineeList:[],
      artisanList:[],
      regulatorybodiesList:[],
      trainerList:[],

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
      mounted() {
    this.interval = setInterval(this.changeData, 2000);
    this.fullHeight2 = '100%';
    this.createProviders();
    this.createCompanies();
    this.createAssesors();
    this.createPosts();
    this.createTrainees();
    this. createTrainers();
    this.createArtisans();
    this.createRegulatoryBodies();
  },
    computed: {
        ...mapGetters({isProviderLoading: 'provider/getProviderStatus', isCompanyLoading:'company/getCompanyStatus', isAssesorLoading:'assessors/getAssesorStatus', isPostLoading:'post/getPostStatus', isTraineeLoading:'trainees/getTraineeStatus', isTrainerLoading:'trainers/getTrainerStatus', isArtisanLoading:'artisans/getArtisanStatus', isRegulatoryBodyLoading:'regulatorybodies/getRegulatoryBodiesStatus' }),
        processProviders: function(){
              return this.providerList
        },
        generateMapDataset(){
          this.mapDataSet.coordinates.push({coords:"213,20,327,95",state: 'Sokoto'})
          this.mapDataSet.coordinates.push({coords:"107,113,181,235",state: 'Kebbi'})
          this.mapDataSet.coordinates.push({coords:"322,102,404,192",state: 'Zamfara'})
          this.mapDataSet.coordinates.push({coords:"456,87,509,188",state: 'Katsina'})
          this.mapDataSet.coordinates.push({coords:"469,238,573,379",state: 'Kaduna'})
          this.mapDataSet.coordinates.push({coords:"38,445,128,530",state: 'Oyo'})
          this.mapDataSet.coordinates.push({coords:"554,136,614,215",state: 'Kano'})
          this.mapDataSet.coordinates.push({coords:"650,99,739,156",state: 'Jigawa'})
          this.mapDataSet.coordinates.push({coords:"419,405,466,443",state: 'FCT'})
          this.mapDataSet.coordinates.push({coords:"495,420,615,475",state: 'Nasarawa'})
          this.mapDataSet.coordinates.push({coords:"539,518,696,580",state: 'Benue'})
          this.mapDataSet.coordinates.push({coords:"744,450,873,557",state: 'Taraba'})
          this.mapDataSet.coordinates.push({coords:"823,70,949,187",state: 'Yobe'})
          this.mapDataSet.coordinates.push({coords:"514,617,553,650",state: 'Ogun'})
          this.mapDataSet.coordinates.push({coords:"449,592,495,642",state: 'Enugu'})
          this.mapDataSet.coordinates.push({coords:"198,575,228,648",state: 'Ondo'})
          this.mapDataSet.coordinates.push({coords:"157,515,213,558",state: 'Osun'})
          this.mapDataSet.coordinates.push({coords:"259,677,368,725",state: 'Delta'})
          this.mapDataSet.coordinates.push({coords:"242,504,284,533",state: 'Ekiti'})
          this.mapDataSet.coordinates.push({coords:"554,662,609,740",state: 'Cross River'})
          this.mapDataSet.coordinates.push({coords:"414,682,456,718",state: 'Imo'})
          this.mapDataSet.coordinates.push({coords:"301,747,367,792",state: 'Bayelsa'})
          this.mapDataSet.coordinates.push({coords:"411,622,438,662",state: 'Anambra'})
          this.mapDataSet.coordinates.push({coords:"477,678,493,722",state: 'Abia'})
          this.mapDataSet.coordinates.push({coords:"493,728,529,772",state: 'Akwa Ibom'})
          this.mapDataSet.coordinates.push({coords:"398,733,448,778",state: 'Rivers'})
          this.mapDataSet.coordinates.push({coords:"344,472,448,543",state: 'Kogi'})
          this.mapDataSet.coordinates.push({coords:"645,368,746,440",state: 'Plateau'})
          this.mapDataSet.coordinates.push({coords:"640,248,775,336",state: 'Bauchi'})
          this.mapDataSet.coordinates.push({coords:"825,263,897,342",state: 'Gombe'})
          this.mapDataSet.coordinates.push({coords:"937,332,994,437",state: 'Adamawa'})
          this.mapDataSet.coordinates.push({coords:"993,80,1108,228",state: 'Borno'})
          this.mapDataSet.coordinates.push({coords:"511,609,562,655",state: 'Ebonyi'})
          this.mapDataSet.coordinates.push({coords:"308,568,384,625",state: 'Edo'})
          this.mapDataSet.coordinates.push({coords:"49,609,138,624",state: 'Lagos'})
          this.mapDataSet.coordinates.push({coords:"219,289,412,405",state: 'Niger'})
          this.mapDataSet.coordinates.push({coords:"19,546,107,600",state: 'Ogun'})
          this.mapDataSet.coordinates.push({coords:"172,403,262,483",state: 'Kwara'})
        }        
    },
  methods: {
 ...mapActions({loadProviders: 'provider/loadProviders', loadCompanies:'company/loadCompanies', loadAssesors:'assessors/loadAssesors',  loadPosts:'post/loadPosts', loadTrainees:'trainees/loadTrainees', loadTrainers:'trainers/loadTrainers', loadArtisans:'artisans/loadArtisans', loadRegulatoryBodies:'regulatorybodies/loadRegulatoryBodies'  }),
      createProviders() {
          let self = this
          this.loadProviders().then(list => self.getExistingProviderList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingProviderList(list){
        if(list){
          //console.log('provider:'+JSON.stringify(list)) 
         return this.providerList = list
        }
      },  
      createAssessorsData(assessorList){
          var stateLabels = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", 
                  "Bayelsa", "Benue","Borno", "Cross River", "Delta", 
                  "Ebonyi", "Enugu", "Edo", "Ekiti", "Gombe", "Imo", 
                  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
                  "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
                  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
                  "Yobe", "Zamfara", "FCT" ]
          var stateData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]

           for(var i = 0; i < assessorList.length; i++){
            var objectAssesor = assessorList[i] 

            for(var k = 0; k < stateLabels.length; k++){
              if(objectAssesor.stateOfResidence == stateLabels[k]){
                
                var count = 0;
                count = stateData[k]
                count++
                stateData[k] = count
              }
            }
          } 
          this.assessorDataSet.labels = stateLabels
          this.assessorDataSet.data = stateData
         // console.log("assessorDataSet:"+JSON.stringify(this.assessorDataSet))
          return this.assessorDataSet

        },
      createCompanies() {
          let self = this
          this.loadCompanies().then(list => self.getExistingCompanyList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingCompanyList(list){
        if(list){
          //console.log('provider:'+JSON.stringify(list)) 
         return this.companyList = list
        }
      },

      createAssesors() {
          let self = this
          this.loadAssesors().then(list => self.getExistingAssesorList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingAssesorList(list){
        if(list){
         this.createAssessorsData(list)
         // console.log('assesor:'+JSON.stringify(list)) 
         return this.assessorList = list
        }
      },

      createPosts() {
          let self = this
          this.loadPosts().then(list => self.getExistingPostList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingPostList(list){
        if(list){
        // console.log('assesor:'+JSON.stringify(list)) 
         return this.postList = list
        }
      },

      createTrainers() {
          let self = this
          this.loadTrainers().then(list => self.getExistingTrainerList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingTrainerList(list){
        if(list){
         //console.log('Trainee:'+JSON.stringify(list)) 
         return this.trainerList = list
        }
      },

      createTrainees() {
          let self = this
          this.loadTrainees().then(list => self.getExistingTraineeList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingTraineeList(list){
        if(list){
         //console.log('Trainee:'+JSON.stringify(list)) 
         return this.traineeList = list
        }
      },

      createArtisans() {
          let self = this
          this.loadArtisans().then(list => self.getExistingArtisanList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingArtisanList(list){
        if(list){
         //console.log('Artisan:'+JSON.stringify(list)) 
         return this.artisanList= list
        }
      },

      createRegulatoryBodies() {
          let self = this
          this.loadRegulatoryBodies().then(list => self.getExistingRegulatoryBodiesList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingRegulatoryBodiesList(list){
        if(list){
         //console.log('Bodies:'+JSON.stringify(list)) 
         return this.regulatorybodiesList= list
        }
      },
     
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
mdb-list-group > mdb-list-group-item{
  background-color: black;
}
a{
  color:black;
}
a:hover{
  color:blue;
}
a:active{
  color:blueviolet;
}
.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  font-size: 20px;
}
.admin-up1 .data1 p {
  color: white;
}
.data{

  font-size: 20px;
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
  padding-left: 2%;
  padding-right: 2%;
 
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


