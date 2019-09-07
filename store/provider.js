export const state = () => ({
    providers: [],
    isProviderLoading: true
   
  })
  export const mutations = {
    setProviders (state,data){
      state.providers = data
    },
    changeProviderStatus(state){
      state.isProviderLoading = !state.isProviderLoading
    }
  }
  export const getters = {
    getProviders: state => state.posts,

    getProviderStatus: state => state.isProviderLoading
  } 
  
  export const actions= {
    
   loadProviders(vuexContext){
     let self = this
     return new Promise(function (resolve, reject){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/getall';
      self.$axios.$get(herokuUrl)
       .then(function (response){
         vuexContext.commit('changeProviderStatus')
         resolve(response)
       })
       .catch(function (error) {
         reject(error.message) 
       })
     })
    },
    getProviderDetails(vuexContext,_id){
      let self= this
      return new Promise(function (resolve, reject){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/'+_id;
        self.$axios.$get(herokuUrl)
         .then(function (response){
          resolve(response)
         })
         .catch(function (error) {
           reject(error.message)
         });
      })
    }    
  
  }