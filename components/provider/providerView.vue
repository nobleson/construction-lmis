<template>
<div class="row justify-content-center mt-3">
      <mdb-container>
          <b-card>
              <b-card-header><h4 class="font-weight-bold">Training Proivders state chart</h4></b-card-header>
              <mdb-bar-chart :data="barChartData" :options="barChartOptions" :width="600" :height="300"></mdb-bar-chart>
              
          </b-card>
          
      </mdb-container>
    </div>
</template>
<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
  import { mdbBarChart, mdbContainer } from 'mdbvue';
import { stringify } from 'querystring';
  export default {
    name: 'ChartPage',
    components: {
      mdbBarChart,
      mdbContainer
    },
    
    data() {
      return {
        verticalWithin: 0,
        providerList: [],
        dataObject: {},
                    
  
        barChartData: {
          labels: ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", 
                  "Bayelsa", "Benue","Borno", "Cross River", "Delta", 
                  "Ebonyi", "Enugu", "Edo", "Ekiti", "Gombe", "Imo", 
                  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
                  "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
                  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
                  "Yobe", "Zamfara", "FCT" ],
          datasets: [{
            label: 'Training Poviders Across The States',
             data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
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
    mounted(){
            this.createProviders();
    },
    computed: {
        ...mapGetters({isProviderLoading: 'provider/getProviderStatus' }),
        processProviders: function(){
              return this.providerList
        }
         
    },
    methods: {
      ...mapActions({loadProviders: 'provider/loadProviders'}),
        createProviders() {
          let self = this
          this.loadProviders().then(list => self.getExistingProviderList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingProviderList(list){
        if(list){
          this.getBarchartDataSet(list)
         return this.providerList = list
        } 
      }, 
       getBarchartDataSet(providerList){
          for(var i = 0; i < providerList.length; i++){
            var objectProvider = providerList[i] 
             //console.log("PROVIDER"+JSON.stringify(objectProvider))

            for(var k = 0; k < this.barChartData.labels.length; k++){
              if(objectProvider.state == this.barChartData.labels[k]){
                
                var count = 0;
                count = this.barChartData.datasets[0].data[k]
                count++
                this.barChartData.datasets[0].data[k] = count
              }
            }
          }
          // console.log(this.barChartData.datasets[0].data)
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
