(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{629:function(t,n,e){"use strict";e.r(n);var r=e(4),o={name:"ChartPage",components:{mdbBarChart:r.c,mdbContainer:r.t},data:function(){return{barChartData:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},barChartOptions:{responsive:!1,maintainAspectRatio:!1,scales:{xAxes:[{barPercentage:1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"}}],yAxes:[{gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"}}]}}}}},c=e(0),l={components:{companiesView:Object(c.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"row justify-content-center mt-3"},[n("mdb-container",[n("b-card",[n("b-card-header",[n("h4",{staticClass:"font-weight-bold"},[this._v("Construction Companies state chart")])]),this._v(" "),n("mdb-bar-chart",{attrs:{data:this.barChartData,options:this.barChartOptions,width:600,height:300}})],1)],1)],1)},[],!1,null,null,null).exports,companiesDetail:Object(c.a)({},void 0,void 0,!1,null,null,null).exports},data:function(){return{currentComponent:"",currentcompanyData:null}},mounted:function(){var data=this.$route.params.data;null==data?this.currentComponent="companiesView":(this.currentpublicationData=data,this.currentComponent="companiesDetail")},methods:{changeCurrentComponent:function(t){this.currentcompanyData=t.data,console.log(t.data),this.currentComponent=t.component}}},d=Object(c.a)(l,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"animated fadeIn"},[n(this.currentComponent,{tag:"component",attrs:{companyData:this.currentcompanyData},on:{changeComponent:this.changeCurrentComponent}})],1)},[],!1,null,null,null);n.default=d.exports}}]);