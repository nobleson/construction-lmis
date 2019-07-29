<template>
 <section class="mt-2">
   <div class="row">
  <div class="col-s-5">
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
          class="carousal"
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
   <div class="ml-4 mr-3 mt-2">
     <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between">
      
        <marquee><h5> ==== News Update Artisans seminar @ Abuja Venue Sharaton, Pw Construction Company recruitment is on from 20 July 2019 to 1 September 2019 ==== </h5></marquee>

      </mdb-card-body>
    </mdb-card>
  </div>
  <b-card class="ml-4 mr-2">
    <b-card-header style="font-size:24px; font-weight:bold" class="text-center">N-POWER BUILD PROGRAMME</b-card-header>
    <b-card-body>
      <mdb-row>
      <mdb-carousel :interval="4000" show multi slide indicators :floating="true" >
      <mdb-carousel-item>
        	<mdb-row>
			<mdb-card-group class="ml-1" deck>
				<mdb-card col="3 " class="blue accents-2">
						<mdb-view hover>
              <img class="card-img-top" src="~/assets/images/npower.png" alt="Card image cap">
						<a href="#!">
						 <h4 class="text-center">
               <mdb-badge  v-if="isTraineeLoading === false" color="warning" style="font-size:25px;" class="mt-2">{{traineeList.length}}</mdb-badge>
              <b-spinner   v-if="isTraineeLoading" variant="warning" type="grow" label="Spinning"></b-spinner>
             </h4>
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</a>
					</mdb-view>
					<mdb-card-body>
						<mdb-card-title class="text-white text-center" style="font-size:19px; font-weight:bold">Trainees </mdb-card-title>
					</mdb-card-body>
				</mdb-card>
				<mdb-card col="3" class="secondary-color">		
            <mdb-view hover>
             <img class="card-img-top" src="~/assets/images/npower.png" alt="Card image cap">
						<a href="#!">
            <h4 class="text-center">
               <mdb-badge   v-if="isTrainerLoading === false" color="warning" style="font-size:25px;" class="mt-2">{{trainerList.length}}</mdb-badge>
                  <b-spinner   v-if="isTrainerLoading" variant="warning" type="grow" label="Spinning"></b-spinner>
             </h4>						
             	<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</a>
					</mdb-view>
					<mdb-card-body>
						<mdb-card-title class="text-white text-center" style="font-size:19px; font-weight:bold">Trainers</mdb-card-title>
					</mdb-card-body>
				</mdb-card>
        <mdb-card col="3" style="background:grey">
					<mdb-view hover>
             <img class="card-img-top" src="~/assets/images/npower.png" alt="Card image cap">
						<a href="#!">
              <h4 class="text-center">
               <mdb-badge  v-if="isProviderLoading === false" color="warning" style="font-size:25px;" class="mt-2">{{providerList.length}}</mdb-badge>
                  <b-spinner   v-if="isProviderLoading" variant="warning" type="grow" label="Spinning"></b-spinner>
              </h4>
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</a>
					</mdb-view> 
					<mdb-card-body>
						<mdb-card-title class="text-white text-center" style="font-size:19px; font-weight:bold">Training Providers</mdb-card-title>
					</mdb-card-body>
				</mdb-card>
				<mdb-card col="3" class=" green accent 2 mr-5">
					<mdb-view hover>
             <img class="card-img-top" src="~/assets/images/npower.png" alt="Card image cap">
						<a href="#!">
             <h4 class="text-center">
               <mdb-badge  v-if="isApprenticeLoading === false" color="warning" style="font-size:25px;" class="mt-2">{{apprenticeList.length}}</mdb-badge>
                 <b-spinner   v-if="isApprenticeLoading" variant="warning" type="grow" label="Spinning"></b-spinner>
             </h4>							
             <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</a>
					</mdb-view>
					<mdb-card-body>
						<mdb-card-title class="text-white text-center" style="font-size:16px; font-weight:bold">Apprentice</mdb-card-title>
					</mdb-card-body>
				</mdb-card>
			</mdb-card-group>
		</mdb-row>
      </mdb-carousel-item>
      </mdb-carousel>
      </mdb-row>
    </b-card-body>
  </b-card>
   </section>
  </div>

    <!--- side column--->
   <mdb-col md="2" class="post">
    <h3 class="font-weight-bold"> Recent Publications</h3>
    <div>
        <b-link :to="{ name: 'publication',params: {data: null}}">
          <b-card
            overlay
            :img-src="post.coverpage"
            img-alt="Card Image"
            text-variant="success"
            v-for="post in postList" :key="post.id"
          > 
            <b-card-text>
                <div  class="text-white text-center rgba-black-strong mt-2" >
                  <h4>{{post.title}}</h4>
                  </div>
                        
            </b-card-text>
          </b-card>
          </b-link>
           <div class="text-center" v-if="isPostLoading"> 
                <b-spinner  v-if="isPostLoading" variant="success" type="grow" label="Spinning"></b-spinner>
           </div>
          </div>
        </mdb-col>


    <mdb-col md="3" >
        
       <b-card>
         <b-card-header style="font-size:24px; font-weight:bold" class="text-center">Featured Jobs</b-card-header>
       
        <b-card-body>
          </b-card-body>
       </b-card>
      
      </mdb-col>

       <mdb-col md="2" class="mr-0.8" >
         <b-card>
         <b-card-header style="font-size:14px; font-weight:bold" class="text-center">Jobs by State</b-card-header>
          <b-card-body>
             <ul>
              <li><a href="#">Adamawa</a></li>
              <br>
              <li><a href="#">Abia</a></li>
              <br>
              <li><a href="#">Anambra</a></li>
              <br>
              <li><a href="#">Kogi</a></li>
              <br>
              <li><a href="#">Enugu</a></li>
              <br>
              <li> <a href="#">Benue</a></li>
              </ul>
          </b-card-body>
          
         </b-card>

          <b-card class="mt-2">
         <b-card-header style="font-size:14px; font-weight:bold" class="text-center">Jobs by Zone</b-card-header>
          <b-card-body>
            <ul>
              <li><a href="#">North East</a></li>
              <br>
              <li><a href="#">North West</a></li>
              <br>
              <li><a href="#">North Central</a></li>
              <br>
              <li><a href="#">South West</a></li>
              <br>
              <li><a href="#">South East</a></li>
              <br>
              <li> <a href="#">South South</a></li>
              </ul>
          </b-card-body>
         </b-card>
        
      </mdb-col>
    </div>
     
      <mdb-row class="mt-3">
        <mdb-col md="12" xl="8" lg="8">
          <mdb-container style="overflow-x: auto">
            <map name="map_of_nigeria">
                <mdb-tooltip trigger="hover" :options="{placement: 'bottom'}" style="color:#fff; font-family:Georgia, Verdana" >
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

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Kebbi Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="107,113,181,235" href="#" target="" />
              </mdb-tooltip>
              
              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Zamfara Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="322,102,404,192" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Katsina Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="456,87,509,188" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Kaduna Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="469,238,573,379" href="#" target="" />
              </mdb-tooltip>
              
              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Oyo Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="38,445,128,530" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Kano Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="554,136,614,215" href="#" target="" />
              </mdb-tooltip>

            <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Jigawa Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="650,99,739,156" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">FCT Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="419,405,466,443" href="#" target="" />
              </mdb-tooltip>
 
              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Nasarawa Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="495,420,615,475" href="#" target="" />
              </mdb-tooltip>

               <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Benue Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="539,518,696,580" href="#" target="" />
              </mdb-tooltip>
         
               <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Taraba Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="Taraba" coords="744,450,873,557" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Ogun Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="823,70,949,187" href="#" target="" />
              </mdb-tooltip>

                <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Enugu Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="449,592,495,642" href="#" target="" />
              </mdb-tooltip>
  
              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Ondo Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="198,575,228,648" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Osun Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="157,515,213,558" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Delta Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="259,677,368,725" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Ekiti Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="242,504,284,533" href="#" target="" />
              </mdb-tooltip>
          
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Cross River Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="554,662,609,740" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Imo Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="414,682,456,718" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Bayelsa Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="301,747,367,792" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Anambra Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="411,622,438,662" href="#" target="" />
              </mdb-tooltip>

            <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Abia Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="477,678,493,722" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Akwa Ibom Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="493,728,529,772" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Rivers Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="398,733,448,778" href="#" target="" />
              </mdb-tooltip>

               <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Kogi Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="344,472,448,543" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Plateau Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="645,368,746,440" href="#" target="" />
              </mdb-tooltip>

              
              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Bauchi Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="640,248,775,336" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Gombe Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="825,263,897,342" href="#" target="" />
              </mdb-tooltip>

               <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Adamawa Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="937,332,994,437" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Borno Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="993,80,1108,228" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Ebonyi Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="511,609,562,655" href="#" target="" />
              </mdb-tooltip>

               <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Edo Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="308,568,384,625" href="#" target="" />
              </mdb-tooltip>

               <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Lagos Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="49,609,138,624" href="#" target="" />
              </mdb-tooltip>

              <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Niger Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="219,289,412,405" href="#" target="" />
              </mdb-tooltip>

               <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Ogun Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="19,546,107,600" href="#" target="" />
              </mdb-tooltip>

                <mdb-tooltip trigger="hover" :options="{placement: 'top'}" style="color:#fff; font-family:Georgia, Verdana" >
                <mdb-card class="card-body" style="width: 22rem; color:black" slot="tip">
                  <mdb-card-title style="color:black">Kwara Statistics</mdb-card-title>
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
              <area shape="rect" slot="reference" alt="" title="" coords="172,403,262,483" href="#" target="" />
              </mdb-tooltip>
              </map>

          <img src="~/assets/images/map.jpg" class="img-fluid" alt="Responsive image" usemap="#map_of_nigeria" style="max-width: 1200px; max-height:800px">
        </mdb-container>
        </mdb-col>
         
        <mdb-col md="12" xl="4" lg="4" class="gradient">
         
         <mdb-card>
            <mdb-card-header style="color:blue; font-size:18px">Top 10 State with highest number of certified Artisans </mdb-card-header>
           <mdb-container>
            <mdb-bar-chart :data="barChartData" :options="barChartOptions" :width="600" :height="300"></mdb-bar-chart>
          </mdb-container>
        </mdb-card>
                
          
         <mdb-card class="mt-2">
            <mdb-card-header  style="color:blue; font-size:18px">Top 10 State with highest number of Assessors</mdb-card-header>
           <mdb-container>
              <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :width="600" :height="300"></mdb-line-chart>
          </mdb-container>
        </mdb-card>
                
          
         <mdb-card class="mt-2">
           <mdb-card-header style="color:blue; font-size:18px">Top 10 Sectors</mdb-card-header>
           <mdb-container>
            <mdb-pie-chart :data="pieChartData" :options="pieChartOptions" :width="600" :height="300"></mdb-pie-chart>
          </mdb-container>
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
     mdbLineChart,
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
      apprenticeList:[],

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
      pieChartData: {
        labels: ["Abuja", "Lagos", "Kano", "Kaduna", "Port Hacourt", "Imo", "Anambara", "Abia", "Enugu","Minna"],
        datasets: [
          {
            data: [40, 50, 10, 40, 20, 45, 67, 34, 15, 90],
            backgroundColor: ["rgba(247, 70, 74, 0.3)", 
                              'rgba(54, 162, 235, 0.4)',  
                              'rgba(255, 206, 86, 0.6)',
                              'rgba(75, 192, 192, 0.8)',
                              'rgba(255, 99, 132, 0.3)', 
                              "rgba(70, 191, 189, 0.3)", 
                              "rgba(253, 180, 92, 0.3)", 
                              "rgba(148, 159, 177, 0.3)", 
                              'rgba(153, 102, 255, 0.9)',
                              'rgba(255, 159, 64, 0.5)',
                              "rgba(77, 83, 96, 0.3)"],
            hoverBackgroundColor: [
                                 "rgba(247, 70, 74, 0.4)", 
                                  "rgba(70, 191, 189, 0.4)", 
                                  "rgba(253, 180, 92, 0.4)", 
                                  "rgba(148, 159, 177, 0.4)",
                                  'rgba(0, 150, 136, 0.7)',
                                    'rgba(76, 175, 80, 0.7)',
                                    'rgba(205, 220, 57, 0.7)',
                                    'rgba(255, 235, 59, 0.7)',
                                    'rgba(255, 152, 0, 0.7)',
                                    "rgba(77, 83, 96, 0.4)"],
                                }
                              ]
                            },
      pieChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
      },

      
      barChartData: {
          labels: ["Abuja", "Lagos", "Kano", "Kaduna", "Port Hacourt", "Imo", "Anambara", "Abia", "Enugu","Minna"],
          datasets: [{
            label: '#Artisans Percentage',
            data: [12, 19, 3, 5, 2, 68, 46, 69, 25, 85,],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
               "rgba(70, 191, 189, 0.3)", 
               "rgba(253, 180, 92, 0.3)", 
              "rgba(148, 159, 177, 5)", 
              'rgba(153, 102, 255, 0.6)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
               'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
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
                color: "rgba(0, 0, 0, 0.1)"
              }
            }],
            yAxes: [{
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }]
          }
        },
      lineChartData: {
          labels: ["Abuja", "Lagos", "Kano", "Kaduna", "Port Hacourt", "Imo", "Anambara", "Abia", "Enugu","Minna"],
          datasets: [
            {
              label: "# Assessors percentage",
               backgroundColor: "rgba(255, 99, 132, 0.1)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 0.8,
              data: [28, 48, 40, 19, 86, 27, 90, 35, 46, 68, 34,]
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
                color: "rgba(0, 0, 0, 0.1)"
              }
            }],
            yAxes: [{
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }]
          }
        }
      };
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
    this.createApprentice();
  },
    computed: {
        ...mapGetters({isProviderLoading: 'provider/getProviderStatus', isCompanyLoading:'company/getCompanyStatus', isAssesorLoading:'assessors/getAssesorStatus', isPostLoading:'post/getPostStatus', isTraineeLoading:'trainees/getTraineeStatus', isTrainerLoading:'trainers/getTrainerStatus', isArtisanLoading:'artisans/getArtisanStatus', isRegulatoryBodyLoading:'regulatorybodies/getRegulatoryBodiesStatus', isApprenticeLoading:'apprentice/getApprenticeStatus'}),
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
 ...mapActions({loadProviders: 'provider/loadProviders', loadCompanies:'company/loadCompanies', loadAssesors:'assessors/loadAssesors',  loadPosts:'post/loadPosts', loadTrainees:'trainees/loadTrainees', loadTrainers:'trainers/loadTrainers', loadArtisans:'artisans/loadArtisans', loadRegulatoryBodies:'regulatorybodies/loadRegulatoryBodies', loadApprentice:'apprentice/loadApprentice'  }),
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
         for(var i = 0; i < list.length; i++){
               let objectList = list[i] 
            for(var k = 0; k < objectList.trainerList.length; k++){
                var object = objectList.trainerList[k]
                object.id = objectList._id
                this.trainerList.push(object)
               }
    
            }
          return this.trainerList
       }
      },

      createTrainees() {
          let self = this
          this.loadTrainees().then(list => self.getExistingTraineeList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingTraineeList(list){
        if(list){
        for(var i = 0; i < list.length; i++){
            let objectList = list[i] 
              for(var k = 0; k < objectList.traineeList.length; k++){
                  var object = objectList.traineeList[k]
                  object.id = objectList._id
                this.traineeList.push(object)
              }
        }
         //console.log('Trainee:'+JSON.stringify(list)) 
         return this.traineeList
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

       createApprentice() {
          let self = this
          this.loadApprentice().then(list => self.getExistingApprenticeList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingApprenticeList(list){
        if(list){
         for(var i = 0; i < list.length; i++){
               let objectList = list[i] 
            for(var k = 0; k < objectList.apprenticeList.length; k++){
                var object = objectList.apprenticeList[k]
                object.id = objectList._id
                this.apprenticeList.push(object)
               }
    
            }
          return this.apprenticeList
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

.classic-admin-card .card-body p {
  font-size: 20px;
	color:black;
 
  margin-bottom: 0;
}

li{
  text-decoration: none; 
}
a{
  color:black;
  text-decoration: none;
}
a:hover{
  color:blue;
}
a:active{
  color:blueviolet;
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

.wrapper {
   overflow-x: hidden;
   z-index: -1;
 }
.gradient{
  padding-left: 2%;
  padding-right: 2%;
}
.carousal{
padding-left: 1%;
}
.gradient1{
  padding-top:1%;
}
.gradient2{
  padding-top:1%;
  padding-left:2%;
  padding-right:1%;
}
.gradient4{
  padding-top:1%;
  padding-left:2%;
  padding-right:1%;
}

p {
  font-family: "Georgia", Verdana, Geneva, Tahoma, sans-serif, serif;
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
  .col-3 {width: 25%;}
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


