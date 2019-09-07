<template>
<div class="row justify-content-center mt-3">
      <mdb-container>
        <mdb-row>
            <mdb-form-inline class="md-form">
              <mdbIcon icon="search" />
              <mdb-input type="text" placeholder="Search provider" aria-label="Search"  v-model="search"/>
            </mdb-form-inline>
          </mdb-row>
          <mdb-card class="mb-3"   v-for="provider in processProviders" :key="provider.id"> 
            <mdb-row>
            <mdb-col md="3" offsetMd="1" class="m-3">
              <mdb-view>
                <img  v-if="typeof provider.logo == 'undefined'" src="~/assets/images/provider.png" alt=""/>
                <img v-else :src="provider.logo" alt=""/>
                <a><mdb-mask waves overlay="white-slight"/></a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="8" class="text-md-left ml-3 mt-3">
              <h4 class="h4 mb-4">{{provider.fullLegalName}}</h4>
              <a href="#!" class="green-text">
                <h6 class="h6 pb-1">{{provider.acronym}}</h6>
              </a>
              <p class="font-weight-normal">{{provider.officialAddress}}</p>
              <p class="font-weight-normal">From <a><strong>{{provider.localGovernment}}</strong></a>, {{provider.state}} state</p>
               <mdb-btn outline="success" size="sm" @click="$emit('changeComponent',{component: 'ProviderDetail',data: provider})" >View Details</mdb-btn>
            </mdb-col>
            </mdb-row>
           </mdb-card>
        <div class="text-center" v-if="isProviderLoading">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
          </div>
      </mdb-container>
    </div>
</template>
<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
  import {mdbFormInline, mdbContainer,mdbCard, mdbCol, mdbRow, mdbIcon, mdbTabs, mdbJumbotron, mdbView, mdbMask, mdbBtn, mdbTextarea, mdbInput, mdbCarousel, mdbCarouselItem,mdbBarChart } from 'mdbvue';
import { stringify } from 'querystring';
  export default {
    name: 'ChartPage',
    components: {
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
    
    data() {
      return {
        verticalWithin: 0,
        providerList: [],
        dataObject: {},
        search: '',
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
           // let json = JSON.parse(JSON.stringify(this.assesors));
            var self=this;
            return this.providerList.filter(function(provider){return provider.fullLegalName.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
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
         // console.log("DATA"+JSON.stringify(list)) 
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
