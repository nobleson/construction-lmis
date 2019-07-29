export const state = () => ({
    apprentice: [],
    isApprenticeLoading: true
   
  })
  export const mutations = {
    setApprentice (state,data){
      state.apprentice = data
    },
    changeApprenticeStatus(state){
      state.isApprenticeLoading = !state.isApprenticeLoading
    }
  }
  export const getters = {
    getApprentice: state => state.apprentice,
  
    getApprenticeStatus: state => state.isApprenticeLoading
  } 
  
  export const actions= {
   loadApprentice(vuexContext){
     let self = this
     return new Promise(function (resolve, reject){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/apprentice/getall';
      self.$axios.$get(herokuUrl)
       .then(function (response){
         vuexContext.commit('changeApprenticeStatus')
         resolve(response)
       })
       .catch(function (error) {
         reject(error.message) 
       })
     })
    } 
  
  }