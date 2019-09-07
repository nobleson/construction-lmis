<template>
<div class="row justify-content-center mt-3">
      <mdb-container>
        <mdb-row>
            <mdb-form-inline class="md-form">
              <mdbIcon icon="search" />
              <mdb-input type="text" placeholder="Search assessor" aria-label="Search"  v-model="search"/>
            </mdb-form-inline>
          </mdb-row>
          <mdb-card class="mb-3"   v-for="assessor in assesorList" :key="assessor.id"> 
            <mdb-row>
            <mdb-col md="3" offsetMd="1" class="m-3">
              <mdb-view>
                <img  v-if="typeof assessor.photo == 'undefined'" src="~/assets/images/assessor.png" alt=""/>
                <img v-else :src="assessor.photo" alt=""/>
                <a><mdb-mask waves overlay="white-slight"/></a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="8" class="text-md-left ml-3 mt-3">
              <h4 class="h4 mb-4">{{assessor.firstName}} {{assessor.middleName}} {{assessor.lastName}}</h4>
              <a href="#!" class="green-text">
                <h6 class="h6 pb-1">{{assessor.regNumber}}</h6>
              </a>
              <p class="font-weight-normal">{{assessor.contactAddress}}</p>
              <p class="font-weight-normal">From <a><strong>{{assessor.stateOfResidence}}</strong></a></p> 
              <a style="font-size: 18px"><mdb-badge color="orange"><mdb-icon icon="phone" class="warning-color"/>{{assessor.phoneNumber}}</mdb-badge></a>
              <a  style="font-size: 18px"><mdb-badge pill color="teal"><mdb-icon icon="envelope" class="warning-color"/> {{assessor.emailAddress}}</mdb-badge></a>               
            </mdb-col>
            </mdb-row>
           </mdb-card>
        <div class="text-center" v-if="isContentLoading">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
          </div>
      </mdb-container>
    </div>
</template>
<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import {mdbBadge,mdbFormInline, mdbContainer,mdbCard, mdbCol, mdbRow, mdbIcon, mdbTabs, mdbJumbotron, mdbView, mdbMask, mdbBtn, mdbTextarea, mdbInput, mdbCarousel, mdbCarouselItem,mdbBarChart } from 'mdbvue';
import { stringify } from 'querystring';
  export default {
    name: 'ChartPage',
    components: {
      mdbBadge,
      mdbContainer,
      mdbFormInline,
      mdbCard,
      mdbCol,
      mdbRow,
      mdbIcon,
      mdbTabs,
      mdbJumbotron,
      mdbView,
      mdbMask,
      mdbBtn,
      mdbTextarea,
      mdbInput,
      mdbCarouselItem,
      mdbCarousel,
      mdbBarChart
    },
    props: ['assessorData'],
    data() {
      return {
        verticalWithin: 0,
       assesorList:[],
       search: '',             
        barChartData: {
          labels: '',
          datasets: [{
            label: 'Training Poviders Across The States',
             data: '',
            backgroundColor: [
              'rgba(255, 99, 132, 0.3)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.9)',
              'rgba(255, 159, 64, 0.5)',
              'rgba(0, 0, 0, 0.7)',
              'rgba(3, 169, 244, 0.7)',
              'rgba(244, 67, 54, 0.7)',
              'rgba(233, 30, 99, 0.7)',
              'rgba(156, 39, 176, 0.7)',
              'rgba(63, 81, 181, 0.7)',
              'rgba(0, 188, 212, 0.7)',
              'rgba(0, 150, 136, 0.7)',
              'rgba(76, 175, 80, 0.7)',
              'rgba(205, 220, 57, 0.7)',
              'rgba(255, 235, 59, 0.7)',
              'rgba(255, 152, 0, 0.7)',
              'rgba(121, 85, 72, 0.7)',
              'rgba(158, 158, 158, 0.7)',
              'rgba(96, 125, 139, 0.7)',
              'rgba(3, 169, 244, 0.3)',
              'rgba(244, 67, 54, 0.3)',
              'rgba(233, 30, 99, 0.3)',
              'rgba(156, 39, 176, 0.3)',
              'rgba(63, 81, 181, 0.3)',
              'rgba(0, 188, 212, 0.3)',
              'rgba(0, 150, 136, 0.3)',
              'rgba(76, 175, 80, 0.3)',
              'rgba(205, 220, 57, 0.3)',
              'rgba(255, 235, 59, 0.3),',
              'rgba(255, 152, 0, 0.3)',
              'rgba(121, 85, 72, 0.3)',
              'rgba(158, 158, 158, 0.3)',
              'rgba(96, 125, 139, 0.3)',
               'rgba(75, 192, 192, 1)',
               'rgba(255, 159, 64, 1)',

            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(62, 69, 81, 0.3)',
              'rgba(255, 255, 255, 0.3)',
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
        }
    }
    },
    beforeMount(){
      this.createAssesors();
      
    },
    computed: {
        ...mapGetters({isContentLoading: 'assessors/getProviderStatus' }),

        computeChart(){
          var stateLabels = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", 
                  "Bayelsa", "Benue","Borno", "Cross River", "Delta", 
                  "Ebonyi", "Enugu", "Edo", "Ekiti", "Gombe", "Imo", 
                  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
                  "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
                  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
                  "Yobe", "Zamfara", "FCT" ]
          var stateData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]

           for(var i = 0; i < this.assesorList.length; i++){
            var objectAssesor = this.assesorList[i] 

            for(var k = 0; k < stateLabels.length; k++){
              if(objectAssesor.stateOfResidence == stateLabels[k]){
                
                var count = 0;
                count = stateData[k]
                count++
                stateData[k] = count
              }
            }
          } 
          this.barChartData.datasets[0].data = stateData
          this.barChartData.labels = stateLabels


        }
         
    },
    methods: {
      ...mapActions({loadProviders: 'provider/loadProviders', loadAssesors:'assessors/loadAssesors'}),

      createAssesors() {
          let self = this
          this.loadAssesors().then(list => self.getExistingAssesorList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingAssesorList(list){
        if(list){
          console.log('assesor:'+JSON.stringify(list)) 
         return this.assesorList = list
        }
      }, 
      
       getBarchartDataSet(){

          for(var i = 0; i < this.assesorList.length; i++){
            var objectAssesor = this.assesorList[i] 
            // console.log("PROVIDER"+JSON.stringify(objectProvider))

            for(var k = 0; k < this.barChartData.labels.length; k++){
              if(objectAssesor.stateOfResidence == this.barChartData.labels[k]){
                
                var count = 0;
                count = this.barChartData.datasets[0].data[k]
                count++
                this.barChartData.datasets[0].data[k] = count
              }
            }
          }
         //  console.log(this.barChartData.datasets[0].data)
        },
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }

      }
    },
  }
</script>
<style scoped>
.gradient{
  padding-left: 1%;
  padding-right: 1%;
}
@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-md-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-md-6 {width: 50%;}
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
  .col-md-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-md-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}
</style>

