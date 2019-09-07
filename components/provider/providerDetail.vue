<template>
<div class="row justify-content-center mt-3">
      <mdb-container>
         <b-link @click="$emit('changeComponent',{component: 'providerView', id: null})"  href="#" class="card-link"><mdb-icon icon="arrow-left" size="lg" class="text-white" />  Back</b-link>
            <mdb-row class="mb-3">
            <mdb-col md="3" offsetMd="1" class="m-3">
              <mdb-view>
                <img  v-if="typeof providerData.logo == 'undefined'" src="~/assets/images/provider.png" alt=""/>
                <img v-else :src="providerData.logo" alt=""/>
                <a><mdb-mask waves overlay="white-slight"/></a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="8" class="text-md-left ml-3 mt-3">
              <h4 class="h4 mb-4">{{providerData.fullLegalName}}</h4>
              <a href="#!" class="green-text">
                <h6 class="h6 pb-1">{{providerData.acronym}}</h6>
              </a>
              <p class="font-weight-normal">{{providerData.officialAddress}}</p>
              <p class="font-weight-normal">From <a><strong>{{providerData.localGovernment}}</strong></a>, {{providerData.state}} state</p>
              <a style="font-size: 18px"><mdb-badge color="orange"><mdb-icon icon="phone" class="warning-color"/>{{providerData.telephone}}</mdb-badge></a>
              <a  style="font-size: 18px"><mdb-badge pill color="teal"><mdb-icon icon="envelope" class="warning-color"/> {{providerData.email}}</mdb-badge></a>
            </mdb-col>
            </mdb-row>

            <mdb-card border="light" class="mb-3" >
            <mdb-card-header>Staff Strength</mdb-card-header>
            <mdb-card-body>
                <mdb-row>
                 <mdb-col xl="4" md="6" class="mb-r">
                    <mdb-card cascade class="cascading-admin-card">
                        <div class="admin-up">
                        <mdb-icon icon="user-circle" far class="primary-color"/>
                        <div class="data">
                            <p>TOTAL</p>
                            <h4>
                            <strong>{{providerData.noAdminStaff}}</strong>
                            </h4>
                        </div>
                        </div>
                        <mdb-card-body>
                        <mdb-card-text>Admin Staff</mdb-card-text>
                        </mdb-card-body>
                    </mdb-card>
                    </mdb-col>
                    <mdb-col xl="4" md="6" class="mb-r">
                    <mdb-card cascade class="cascading-admin-card">
                        <div class="admin-up">
                        <mdb-icon icon="user-edit" class="warning-color"/>
                        <div class="data">
                            <p>TOTAL</p>
                            <h4>
                            <strong>{{providerData.noPermanentTrainer}}</strong>
                            </h4>
                        </div>
                        </div>
                        <mdb-card-body>
                        <mdb-card-text>Permanent Trainers</mdb-card-text>
                        </mdb-card-body>
                    </mdb-card>
                    </mdb-col>
                    <mdb-col xl="4" md="12" class="mb-r">
                    <mdb-card cascade class="cascading-admin-card">
                        <div class="admin-up">
                        <mdb-icon icon="user-tag" class="success-color"/>
                        <div class="data">
                            <p>TOTAL</p>
                            <h4>
                            <strong>{{providerData.noAdjunctTrainers}}</strong>
                            </h4>
                        </div>
                        </div>
                        <mdb-card-body>
                        <mdb-card-text>Adjunct Staff</mdb-card-text>
                        </mdb-card-body>
                    </mdb-card>
                    </mdb-col>
                </mdb-row>
            </mdb-card-body>
            </mdb-card>

            <mdb-card border="light" class="mb-3">
            <mdb-card-header>Facilities</mdb-card-header> 
            <mdb-card-body>
                <mdb-card-group deck>
                    <mdb-card>
                    <mdb-card-body>
                        <mdb-card-title tag="h5">Class Rooms</mdb-card-title>
                        <mdb-card-text><div  v-html="facilities.classRooms"></div></mdb-card-text>
                    </mdb-card-body>
                    </mdb-card>
                    <mdb-card>
                    <mdb-card-body>
                        <mdb-card-title tag="h5">Masonry Facilities</mdb-card-title>
                        <mdb-card-text><div  v-html="facilities.mansonoryFacilities"></div></mdb-card-text>
                    </mdb-card-body>
                    </mdb-card>
                    <mdb-card>
                    <mdb-card-body>
                        <mdb-card-title tag="h5">Carpentry Facilities</mdb-card-title>
                        <mdb-card-text><div  v-html="facilities.carpentaryFacilities"></div></mdb-card-text>
                    </mdb-card-body>
                    </mdb-card>
                    <mdb-card>
                    <mdb-card-body>
                        <mdb-card-title tag="h5">Survey Equipment Facilities</mdb-card-title>
                        <mdb-card-text><div  v-html="facilities.surveyEquipment"></div></mdb-card-text>
                    </mdb-card-body>
                    </mdb-card>
                    <mdb-card>
                    <mdb-card-body>
                        <mdb-card-title tag="h5">Other Facilities</mdb-card-title>
                        <mdb-card-text><div  v-html="facilities.otherFacility"></div></mdb-card-text>
                    </mdb-card-body>
                    </mdb-card>
                </mdb-card-group>
            </mdb-card-body>
            </mdb-card>
            <mdb-card border="light" class="mb-3">
            <mdb-card-header>Courses</mdb-card-header> 
            <mdb-card-body>
                <mdb-card-group deck>
                    <mdb-card  v-for="course in processCourse" :key="course.id">
                      <mdb-card-body>
                          <mdb-card-title tag="h5">{{course.courseTitle}}</mdb-card-title>
                          <mdb-card-text>{{course.courseDescription}}</mdb-card-text>
                          <mdb-card-text><div  v-html="course.infrastructure"></div></mdb-card-text>
                          <mdb-card-text class="pull-right"><h5><mdb-badge pill color="primary">{{course.trade}}</mdb-badge></h5></mdb-card-text>
                      </mdb-card-body>
                    </mdb-card>
                </mdb-card-group>
            </mdb-card-body>
            </mdb-card>
      </mdb-container>
    </div>
</template>
<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import {mdbFormInline, mdbContainer,mdbCard, mdbCol, mdbRow, mdbIcon, mdbTabs,
          mdbJumbotron, mdbView, mdbMask, mdbBtn, mdbTextarea, mdbInput, mdbCarousel,
           mdbCarouselItem,mdbBarChart,
            mdbCardTitle,
            mdbBadge, 
            mdbCardText,
            mdbCardFooter,
            mdbCardBody,
            mdbCardHeader,
            mdbListGroup,
            mdbListGroupItem,
            mdbNavItem,
            mdbCardGroup,
            mdbFooter,
            mdbTab,
            mdbTabItem,
            mdbTabContent,
            mdbTabPane } from 'mdbvue';
  export default {
    name: 'ChartPage',
    components: {
      mdbContainer,
      mdbFormInline,
      mdbBadge, 
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
      mdbBarChart,
      mdbCardTitle,
      mdbCardText,
      mdbCardFooter,
      mdbCardBody,
      mdbCardHeader,
      mdbListGroup,
      mdbListGroupItem,
      mdbNavItem,
      mdbCardGroup,
      mdbFooter,
      mdbTab,
      mdbTabItem,
      mdbTabContent,
      mdbTabPane

    },
    props: ['providerData'],
    data() {
      return {
        verticalWithin: 0,
        providerList: [],
        courseList: [],
        dataObject: {},
        facilities: {},
        allCourseData: null,
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
        this.loadFacilities();
        this.loadCourses();
    },
    computed: {
      processCourse: function(){
        if(this.allCourseData){
          return this.courseList = this.allCourseData.courseList
        }
      }
    },
    methods: {
      ...mapActions({loadCoursesByProvider: 'course/loadCoursesByProvider',loadFacilitiesByProvider: 'facilities/loadFacilitiesByProvider'}),

     loadFacilities() {
          this.loadFacilitiesByProvider(this.providerData._id).then(e => this.getExistingFacilities(e)).catch(function(error){console.log(error.message)});
        },
      getExistingFacilities(list){
        if(list){
          return this.facilities = list.facilityList[0]
        }
      }, 
      loadCourses() {
          this.loadCoursesByProvider(this.providerData._id).then(e => this.getExistingCourseList(e)).catch(function(error){console.log(error.message)});
        },
        getExistingCourseList(list){
          if(list){
            console.log("Courses"+JSON.stringify(list))
            return this.allCourseData = list
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
<style scoped>
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
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
</style>