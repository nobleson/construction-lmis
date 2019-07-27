export const state = () => ({
    regulatorybodies: [],
    isRegulatoryBodyLoading: true
   
  })
  export const mutations = {
    setRegulatoryBodies (state,data){
      state.regulatorybodies = data
    },
    changeRegulatoryBodiesStatus(state){
      state.isRegulatoryBodyLoading = !state.isRegulatoryBodyLoading
    }
  }
  export const getters = {
    getRegulatoryBodies: state => state.regulatorybodies,
  
    getRegulatoryBodiesStatus: state => state.isRegulatoryBodyLoading
  } 
  
  export const actions= {
    loadRegulatoryBodies(vuexContext){
     let self = this
     return new Promise(function (resolve, reject){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/regulatory/getall';
      self.$axios.$get(herokuUrl)
       .then(function (response){
         vuexContext.commit('changeRegulatoryBodiesStatus')
         resolve(response)
       })
       .catch(function (error) {
         reject(error.message) 
       })
     })
    } 
  
  }