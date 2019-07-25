export const state = () => ({
    assesors: [],
    isassesorLoading: false
   
  })
  export const mutations = {
    setAssesors (state,data){
      state.assessors = data
    },
    changeAssesorStatus(state){
      state.isassesorLoading = !state.isassesorLoading
    }
  }
  export const getters = {
    getAssesors: state => state.assesors,

    getAssesorStatus: state => state.isassesorLoading
  } 
  
  export const actions= {
   loadAssesors(vuexContext){
     let self = this
     return new Promise(function (resolve, reject){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/assesor/getall';
      self.$axios.$get(herokuUrl)
       .then(function (response){
         resolve(response)
       })
       .catch(function (error) {
         reject(error.message) 
       })
     })
    } 
  
  }