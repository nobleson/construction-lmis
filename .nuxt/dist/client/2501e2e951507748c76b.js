(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{599:function(t,r,e){"use strict";r.decode=r.parse=e(600),r.encode=r.stringify=e(601)},600:function(t,r,e){"use strict";function o(t,r){return Object.prototype.hasOwnProperty.call(t,r)}t.exports=function(t,r,e,d){r=r||"&",e=e||"=";var c={};if("string"!=typeof t||0===t.length)return c;var l=/\+/g;t=t.split(r);var m=1e3;d&&"number"==typeof d.maxKeys&&(m=d.maxKeys);var v=t.length;m>0&&v>m&&(v=m);for(var i=0;i<v;++i){var f,h,C,_,y=t[i].replace(l,"%20"),x=y.indexOf(e);x>=0?(f=y.substr(0,x),h=y.substr(x+1)):(f=y,h=""),C=decodeURIComponent(f),_=decodeURIComponent(h),o(c,C)?n(c[C])?c[C].push(_):c[C]=[c[C],_]:c[C]=_}return c};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},601:function(t,r,e){"use strict";var o=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,r,e,c){return r=r||"&",e=e||"=",null===t&&(t=void 0),"object"==typeof t?map(d(t),function(d){var c=encodeURIComponent(o(d))+e;return n(t[d])?map(t[d],function(t){return c+encodeURIComponent(o(t))}).join(r):c+encodeURIComponent(o(t[d]))}).join(r):c?encodeURIComponent(o(c))+e+encodeURIComponent(o(t)):""};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function map(t,r){if(t.map)return t.map(r);for(var e=[],i=0;i<t.length;i++)e.push(r(t[i],i));return e}var d=Object.keys||function(t){var r=[];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.push(e);return r}},604:function(t,r,e){var content=e(619);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(8).default)("000898ce",content,!0,{sourceMap:!1})},612:function(t,r,e){t.exports=e.p+"img/260cefd.png"},618:function(t,r,e){"use strict";var o=e(604);e.n(o).a},619:function(t,r,e){(t.exports=e(7)(!1)).push([t.i,".cascading-admin-card[data-v-15ae3ef0]{margin:20px 0}.cascading-admin-card .admin-up[data-v-15ae3ef0]{margin-left:4%;margin-right:4%;margin-top:-20px}.cascading-admin-card .admin-up .far[data-v-15ae3ef0],.cascading-admin-card .admin-up .fas[data-v-15ae3ef0]{-webkit-box-shadow:0 2px 9px 0 rgba(0,0,0,.2),0 2px 13px 0 rgba(0,0,0,.19);box-shadow:0 2px 9px 0 rgba(0,0,0,.2),0 2px 13px 0 rgba(0,0,0,.19);padding:1.7rem;font-size:2rem;color:#fff;text-align:left;margin-right:1rem;border-radius:3px}.cascading-admin-card .admin-up .data[data-v-15ae3ef0]{float:right;margin-top:2rem;text-align:right}.admin-up .data p[data-v-15ae3ef0]{color:#999;font-size:12px}.classic-admin-card .card-body[data-v-15ae3ef0]{color:#fff;margin-bottom:0;padding:.9rem}.classic-admin-card .card-body p[data-v-15ae3ef0]{font-size:13px;opacity:.7;margin-bottom:0}.classic-admin-card .card-body h4[data-v-15ae3ef0]{margin-top:10px}",""])},637:function(t,r,e){"use strict";e.r(r);e(125);var o=e(20),n=e(48),d=e(4),c=(e(599),{name:"ChartPage",components:{mdbContainer:d.t,mdbFormInline:d.w,mdbCard:d.f,mdbCol:d.s,mdbRow:d.Q,mdbIcon:d.y,mdbTabs:d.X,mdbJumbotron:d.A,mdbView:d.bb,mdbMask:d.E,mdbBtn:d.d,mdbTextarea:d.Z,mdbInput:d.z,mdbCarouselItem:d.r,mdbCarousel:d.p,mdbBarChart:d.c},data:function(){return{verticalWithin:0,providerList:[],dataObject:{},search:"",barChartData:{labels:["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Enugu","Edo","Ekiti","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara","FCT"],datasets:[{label:"Training Poviders Across The States",data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},barChartOptions:{responsive:!1,maintainAspectRatio:!1,scales:{xAxes:[{barPercentage:1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"}}],yAxes:[{gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"}}]}}}},mounted:function(){this.createProviders()},computed:Object(o.a)({},Object(n.c)({isProviderLoading:"provider/getProviderStatus"}),{processProviders:function(){var t=this;return this.providerList.filter(function(r){return r.fullLegalName.toLowerCase().indexOf(t.search.toLowerCase())>=0})}}),methods:Object(o.a)({},Object(n.b)({loadProviders:"provider/loadProviders"}),{createProviders:function(){var t=this;this.loadProviders().then(function(r){return t.getExistingProviderList(r)}).catch(function(t){console.log(t.message)})},getExistingProviderList:function(t){if(t)return this.providerList=t},getBarchartDataSet:function(t){for(var i=0;i<t.length;i++)for(var r=t[i],e=0;e<this.barChartData.labels.length;e++)if(r.state==this.barChartData.labels[e]){var o=0;o=this.barChartData.datasets[0].data[e],o++,this.barChartData.datasets[0].data[e]=o}},linkClass:function(t){return this.tabIndex===t?["bg-primary","text-light"]:["bg-light","text-info"]}})}),l=e(0),m=Object(l.a)(c,function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"row justify-content-center mt-3"},[o("mdb-container",[o("mdb-row",[o("mdb-form-inline",{staticClass:"md-form"},[o("mdbIcon",{attrs:{icon:"search"}}),t._v(" "),o("mdb-input",{attrs:{type:"text",placeholder:"Search provider","aria-label":"Search"},model:{value:t.search,callback:function(r){t.search=r},expression:"search"}})],1)],1),t._v(" "),t._l(t.processProviders,function(r){return o("mdb-card",{key:r.id,staticClass:"mb-3"},[o("mdb-row",[o("mdb-col",{staticClass:"m-3",attrs:{md:"3",offsetMd:"1"}},[o("mdb-view",[void 0===r.logo?o("img",{attrs:{src:e(612),alt:""}}):o("img",{attrs:{src:r.logo,alt:""}}),t._v(" "),o("a",[o("mdb-mask",{attrs:{waves:"",overlay:"white-slight"}})],1)])],1),t._v(" "),o("mdb-col",{staticClass:"text-md-left ml-3 mt-3",attrs:{md:"8"}},[o("h4",{staticClass:"h4 mb-4"},[t._v(t._s(r.fullLegalName))]),t._v(" "),o("a",{staticClass:"green-text",attrs:{href:"#!"}},[o("h6",{staticClass:"h6 pb-1"},[t._v(t._s(r.acronym))])]),t._v(" "),o("p",{staticClass:"font-weight-normal"},[t._v(t._s(r.officialAddress))]),t._v(" "),o("p",{staticClass:"font-weight-normal"},[t._v("From "),o("a",[o("strong",[t._v(t._s(r.localGovernment))])]),t._v(", "+t._s(r.state)+" state")]),t._v(" "),o("mdb-btn",{attrs:{outline:"success",size:"sm"},on:{click:function(e){return t.$emit("changeComponent",{component:"ProviderDetail",data:r})}}},[t._v("View Details")])],1)],1)],1)}),t._v(" "),t.isProviderLoading?o("div",{staticClass:"text-center"},[o("b-spinner",{attrs:{variant:"primary",label:"Text Centered"}})],1):t._e()],2)],1)},[],!1,null,null,null).exports,v={name:"ChartPage",components:{mdbContainer:d.t,mdbFormInline:d.w,mdbBadge:d.b,mdbCard:d.f,mdbCol:d.s,mdbRow:d.Q,mdbIcon:d.y,mdbTabs:d.X,mdbJumbotron:d.A,mdbView:d.bb,mdbMask:d.E,mdbBtn:d.d,mdbTextarea:d.Z,mdbInput:d.z,mdbCarouselItem:d.r,mdbCarousel:d.p,mdbBarChart:d.c,mdbCardTitle:d.n,mdbCardText:d.m,mdbCardFooter:d.i,mdbCardBody:d.h,mdbCardHeader:d.k,mdbListGroup:d.C,mdbListGroupItem:d.D,mdbNavItem:d.I,mdbCardGroup:d.j,mdbFooter:d.v,mdbTab:d.T,mdbTabItem:d.V,mdbTabContent:d.U,mdbTabPane:d.W},props:["providerData"],data:function(){return{verticalWithin:0,providerList:[],courseList:[],dataObject:{},facilities:{},allCourseData:null,search:"",barChartData:{labels:["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Enugu","Edo","Ekiti","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara","FCT"],datasets:[{label:"Training Poviders Across The States",data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},barChartOptions:{responsive:!1,maintainAspectRatio:!1,scales:{xAxes:[{barPercentage:1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"}}],yAxes:[{gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"}}]}}}},mounted:function(){this.loadFacilities(),this.loadCourses()},computed:{processCourse:function(){if(this.allCourseData)return this.courseList=this.allCourseData.courseList}},methods:Object(o.a)({},Object(n.b)({loadCoursesByProvider:"course/loadCoursesByProvider",loadFacilitiesByProvider:"facilities/loadFacilitiesByProvider"}),{loadFacilities:function(){var t=this;this.loadFacilitiesByProvider(this.providerData._id).then(function(r){return t.getExistingFacilities(r)}).catch(function(t){console.log(t.message)})},getExistingFacilities:function(t){if(t)return this.facilities=t.facilityList[0]},loadCourses:function(){var t=this;this.loadCoursesByProvider(this.providerData._id).then(function(r){return t.getExistingCourseList(r)}).catch(function(t){console.log(t.message)})},getExistingCourseList:function(t){if(t)return console.log("Courses"+JSON.stringify(t)),this.allCourseData=t},getBarchartDataSet:function(t){for(var i=0;i<t.length;i++)for(var r=t[i],e=0;e<this.barChartData.labels.length;e++)if(r.state==this.barChartData.labels[e]){var o=0;o=this.barChartData.datasets[0].data[e],o++,this.barChartData.datasets[0].data[e]=o}},linkClass:function(t){return this.tabIndex===t?["bg-primary","text-light"]:["bg-light","text-info"]}})},f=(e(618),{components:{ProviderView:m,ProviderDetail:Object(l.a)(v,function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"row justify-content-center mt-3"},[o("mdb-container",[o("b-link",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(r){return t.$emit("changeComponent",{component:"providerView",id:null})}}},[o("mdb-icon",{staticClass:"text-white",attrs:{icon:"arrow-left",size:"lg"}}),t._v("  Back")],1),t._v(" "),o("mdb-row",{staticClass:"mb-3"},[o("mdb-col",{staticClass:"m-3",attrs:{md:"3",offsetMd:"1"}},[o("mdb-view",[void 0===t.providerData.logo?o("img",{attrs:{src:e(612),alt:""}}):o("img",{attrs:{src:t.providerData.logo,alt:""}}),t._v(" "),o("a",[o("mdb-mask",{attrs:{waves:"",overlay:"white-slight"}})],1)])],1),t._v(" "),o("mdb-col",{staticClass:"text-md-left ml-3 mt-3",attrs:{md:"8"}},[o("h4",{staticClass:"h4 mb-4"},[t._v(t._s(t.providerData.fullLegalName))]),t._v(" "),o("a",{staticClass:"green-text",attrs:{href:"#!"}},[o("h6",{staticClass:"h6 pb-1"},[t._v(t._s(t.providerData.acronym))])]),t._v(" "),o("p",{staticClass:"font-weight-normal"},[t._v(t._s(t.providerData.officialAddress))]),t._v(" "),o("p",{staticClass:"font-weight-normal"},[t._v("From "),o("a",[o("strong",[t._v(t._s(t.providerData.localGovernment))])]),t._v(", "+t._s(t.providerData.state)+" state")]),t._v(" "),o("a",{staticStyle:{"font-size":"18px"}},[o("mdb-badge",{attrs:{color:"orange"}},[o("mdb-icon",{staticClass:"warning-color",attrs:{icon:"phone"}}),t._v(t._s(t.providerData.telephone))],1)],1),t._v(" "),o("a",{staticStyle:{"font-size":"18px"}},[o("mdb-badge",{attrs:{pill:"",color:"teal"}},[o("mdb-icon",{staticClass:"warning-color",attrs:{icon:"envelope"}}),t._v(" "+t._s(t.providerData.email))],1)],1)])],1),t._v(" "),o("mdb-card",{staticClass:"mb-3",attrs:{border:"light"}},[o("mdb-card-header",[t._v("Staff Strength")]),t._v(" "),o("mdb-card-body",[o("mdb-row",[o("mdb-col",{staticClass:"mb-r",attrs:{xl:"4",md:"6"}},[o("mdb-card",{staticClass:"cascading-admin-card",attrs:{cascade:""}},[o("div",{staticClass:"admin-up"},[o("mdb-icon",{staticClass:"primary-color",attrs:{icon:"user-circle",far:""}}),t._v(" "),o("div",{staticClass:"data"},[o("p",[t._v("TOTAL")]),t._v(" "),o("h4",[o("strong",[t._v(t._s(t.providerData.noAdminStaff))])])])],1),t._v(" "),o("mdb-card-body",[o("mdb-card-text",[t._v("Admin Staff")])],1)],1)],1),t._v(" "),o("mdb-col",{staticClass:"mb-r",attrs:{xl:"4",md:"6"}},[o("mdb-card",{staticClass:"cascading-admin-card",attrs:{cascade:""}},[o("div",{staticClass:"admin-up"},[o("mdb-icon",{staticClass:"warning-color",attrs:{icon:"user-edit"}}),t._v(" "),o("div",{staticClass:"data"},[o("p",[t._v("TOTAL")]),t._v(" "),o("h4",[o("strong",[t._v(t._s(t.providerData.noPermanentTrainer))])])])],1),t._v(" "),o("mdb-card-body",[o("mdb-card-text",[t._v("Permanent Trainers")])],1)],1)],1),t._v(" "),o("mdb-col",{staticClass:"mb-r",attrs:{xl:"4",md:"12"}},[o("mdb-card",{staticClass:"cascading-admin-card",attrs:{cascade:""}},[o("div",{staticClass:"admin-up"},[o("mdb-icon",{staticClass:"success-color",attrs:{icon:"user-tag"}}),t._v(" "),o("div",{staticClass:"data"},[o("p",[t._v("TOTAL")]),t._v(" "),o("h4",[o("strong",[t._v(t._s(t.providerData.noAdjunctTrainers))])])])],1),t._v(" "),o("mdb-card-body",[o("mdb-card-text",[t._v("Adjunct Staff")])],1)],1)],1)],1)],1)],1),t._v(" "),o("mdb-card",{staticClass:"mb-3",attrs:{border:"light"}},[o("mdb-card-header",[t._v("Facilities")]),t._v(" "),o("mdb-card-body",[o("mdb-card-group",{attrs:{deck:""}},[o("mdb-card",[o("mdb-card-body",[o("mdb-card-title",{attrs:{tag:"h5"}},[t._v("Class Rooms")]),t._v(" "),o("mdb-card-text",[o("div",{domProps:{innerHTML:t._s(t.facilities.classRooms)}})])],1)],1),t._v(" "),o("mdb-card",[o("mdb-card-body",[o("mdb-card-title",{attrs:{tag:"h5"}},[t._v("Masonry Facilities")]),t._v(" "),o("mdb-card-text",[o("div",{domProps:{innerHTML:t._s(t.facilities.mansonoryFacilities)}})])],1)],1),t._v(" "),o("mdb-card",[o("mdb-card-body",[o("mdb-card-title",{attrs:{tag:"h5"}},[t._v("Carpentry Facilities")]),t._v(" "),o("mdb-card-text",[o("div",{domProps:{innerHTML:t._s(t.facilities.carpentaryFacilities)}})])],1)],1),t._v(" "),o("mdb-card",[o("mdb-card-body",[o("mdb-card-title",{attrs:{tag:"h5"}},[t._v("Survey Equipment Facilities")]),t._v(" "),o("mdb-card-text",[o("div",{domProps:{innerHTML:t._s(t.facilities.surveyEquipment)}})])],1)],1),t._v(" "),o("mdb-card",[o("mdb-card-body",[o("mdb-card-title",{attrs:{tag:"h5"}},[t._v("Other Facilities")]),t._v(" "),o("mdb-card-text",[o("div",{domProps:{innerHTML:t._s(t.facilities.otherFacility)}})])],1)],1)],1)],1)],1),t._v(" "),o("mdb-card",{staticClass:"mb-3",attrs:{border:"light"}},[o("mdb-card-header",[t._v("Courses")]),t._v(" "),o("mdb-card-body",[o("mdb-card-group",{attrs:{deck:""}},t._l(t.processCourse,function(r){return o("mdb-card",{key:r.id},[o("mdb-card-body",[o("mdb-card-title",{attrs:{tag:"h5"}},[t._v(t._s(r.courseTitle))]),t._v(" "),o("mdb-card-text",[t._v(t._s(r.courseDescription))]),t._v(" "),o("mdb-card-text",[o("div",{domProps:{innerHTML:t._s(r.infrastructure)}})]),t._v(" "),o("mdb-card-text",{staticClass:"pull-right"},[o("h5",[o("mdb-badge",{attrs:{pill:"",color:"primary"}},[t._v(t._s(r.trade))])],1)])],1)],1)}),1)],1)],1)],1)],1)},[],!1,null,"15ae3ef0",null).exports},data:function(){return{currentComponent:"",currentproviderData:null}},mounted:function(){var data=this.$route.params.data;null==data?this.currentComponent="ProviderView":(this.currentproviderData=data,this.currentComponent="ProviderDetail")},methods:{changeCurrentComponent:function(t){this.currentproviderData=t.data,this.currentComponent=t.component}}}),h=Object(l.a)(f,function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"animated fadeIn"},[r(this.currentComponent,{tag:"component",attrs:{providerData:this.currentproviderData},on:{changeComponent:this.changeCurrentComponent}})],1)},[],!1,null,null,null);r.default=h.exports}}]);