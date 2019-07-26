export const state = () => ({
    assesors: [],
    isAssesorLoading: true
   
  })
  export const mutations = {
    setAssesors (state,data){
      state.assessors = data
    },
    changeAssesorStatus(state){
      state.isAssesorLoading = !state.isAssesorLoading
    }
  }
  export const getters = {
    getAssesors: state => state.assesors,

    getAssesorStatus: state => state.isAssesorLoading
  } 
  
  export const actions= {
   loadAssesors(vuexContext){
     let self = this
     return new Promise(function (resolve, reject){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/assesor/getall';
      self.$axios.$get(herokuUrl)
       .then(function (response){
         vuexContext.commit('changeAssesorStatus')
         resolve(response)
       })
       .catch(function (error) {
         reject(error.message) 
       })
     })
    } 
  
  }