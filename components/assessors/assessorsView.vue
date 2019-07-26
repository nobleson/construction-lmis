<template>
<div class="gradient">
  <div class="row justify-content-center mt-3">
 <div class="col-md-2">
  <mdb-list-group class="mt-5">
     <mdb-list-group-item>Abia<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Adamawa<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Akwa Ibom<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
     <mdb-list-group-item>Anambra<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Bauchi<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Bayelsa<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Benue<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Borno<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Cross River<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
       <mdb-list-group-item>Delta<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Ebonyi<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Enugu<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
       <mdb-list-group-item>Edo<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Ekiti<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Gombe<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
       <mdb-list-group-item>Imo<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Jigawa<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item> 
      <mdb-list-group-item>Kaduna<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
       <mdb-list-group-item>Kano<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
    </mdb-list-group>
    </div>
  <div class="col-md-8 text-center">
      <h1>Assesssors Across the states Chart</h1>
      <mdb-bar-chart :data="barChartData" :options="barChartOptions" :width="1300" :height="500" class="mt-5"></mdb-bar-chart>
            
  </div>
  <div class="col-md-2">
  <mdb-list-group class="mt-5">
    <mdb-list-group-item>Katsina<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Kebbi<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Kogi<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
     <mdb-list-group-item>Kwara<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Lagos<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Nasarawa<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Niger<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Borno<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Ogun<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
       <mdb-list-group-item>Ondo<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Osun<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Oyo<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
       <mdb-list-group-item>Plateau<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Rivers<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Sokoto<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
       <mdb-list-group-item>Taraba<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item>Yobe<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item> 
      <mdb-list-group-item>Zamfara<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
       <mdb-list-group-item>FCT Abuja<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
  </mdb-list-group>
  </div>
</div>
  </div>
</template>
<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import { mdbBarChart, mdbContainer, mdbListGroup, mdbListGroupItem, mdbBadge } from 'mdbvue';
import { stringify } from 'querystring';
  export default {
    name: 'ChartPage',
    components: {
      mdbBarChart,
      mdbContainer,
       mdbListGroup, 
       mdbListGroupItem, 
       mdbBadge
    },
    props: ['assessorData'],
    data() {
      return {
        verticalWithin: 0,
       assesorList:[],
                    
        barChartData: {
          labels: this.assessorData.labels,
          datasets: [{
            label: 'Training Poviders Across The States',
             data: this.assessorData.data,
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
        ...mapGetters({isProviderLoading: 'provider/getProviderStatus' }),

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
          //console.log('assesor:'+JSON.stringify(list)) 
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

