export const state = () => ({
    trainers: [],
    isTrainerLoading: true
   
  })
  export const mutations = {
    setTrainers (state,data){
      state.trainers = data
    },
    changeTrainerStatus(state){
      state.isTrainerLoading = !state.isTrainerLoading
    }
  }
  export const getters = {
    getTrainers: state => state.trainers,
    getTrainerStatus: state => state.isTrainerLoading
  } 
  
  export const actions= {
   loadTrainers(vuexContext){
     let self = this
     return new Promise(function (resolve, reject){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/trainer/getall';
      self.$axios.$get(herokuUrl)
       .then(function (response){
         vuexContext.commit('changeTrainerStatus')
         resolve(response)
       })
       .catch(function (error) {
         reject(error.message) 
       })
     })
    } 
  
  }