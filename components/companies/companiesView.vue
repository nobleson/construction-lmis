<template>
<div class="row justify-content-center mt-3">
      <mdb-container>
        <mdb-row>
            <mdb-form-inline class="md-form">
              <mdbIcon icon="search" />
              <mdb-input type="text" placeholder="Search company" aria-label="Search"  v-model="search"/>
            </mdb-form-inline>
          </mdb-row>
          <mdb-card class="mb-3"   v-for="company in processCompany" :key="company.id"> 
            <mdb-row>
            <mdb-col md="3" offsetMd="1" class="m-3">
              <mdb-view>
                <img  v-if="typeof company.logo == 'undefined'" src="~/assets/images/company.png" alt=""/>
                <img v-else :src="company.logo" alt=""/>
                <a><mdb-mask waves overlay="white-slight"/></a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="8" class="text-md-left ml-3 mt-3">
              <h4 class="h4 mb-4">{{company.companyName}}</h4>
              <a href="#!" class="green-text">
                <h6 class="h6 pb-1">{{company.companyAcronym}}</h6>
              </a>
              <h5 v-if="company.companyType == 'Registered Building Contractor'" style="font-size: 18px"><mdb-badge pill color="primary"> {{company.companyType}}</mdb-badge></h5>
              <h5 v-else style="font-size: 18px"><mdb-badge pill color="danger"> {{company.companyType}}</mdb-badge></h5>
              <p class="font-weight-normal">{{company.officialAddress}}</p>
              <p class="font-weight-normal">From <a><strong>{{company.companyState}}</strong></a></p> 
               <mdb-btn outline="success" size="sm" @click="$emit('changeComponent',{component: 'companiesDetail',data: company})" >View Details</mdb-btn>
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
  import {mdbBadge,mdbFormInline, mdbContainer,mdbCard, mdbCol, mdbRow, mdbIcon, mdbTabs, mdbJumbotron, mdbView, mdbMask, mdbBtn, mdbTextarea, mdbInput, mdbCarousel, mdbCarouselItem,mdbBarChart } from 'mdbvue';
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
    data() {
      return {
        companyList: [],
        search: '',
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
      this.loadAllCompaniess()
    },
    computed: {
     ...mapGetters({isProviderLoading: 'provider/getProviderStatus' }),      
     processCompany: function(){
           // let json = JSON.parse(JSON.stringify(this.assesors));
            var self=this;
            return this.companyList.filter(function(copmany){return copmany.companyName.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
        }
    },
    methods: {
      ...mapActions({loadCompanies: 'company/loadCompanies'}),
     loadAllCompaniess() {
          let self = this
          this.loadCompanies().then(list => self.getExistingCompanyList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingCompanyList(list){
        if(list){
          console.log("DATA"+JSON.stringify(list)) 
         return this.companyList = list
        } 
      }
    }
  }
</script>
