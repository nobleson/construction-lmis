export const state = () => ({
    providers: [],
    isproviderLoading: false
   
  })
  export const mutations = {
    setProviders (state,data){
      state.providers = data
    },
    changeProviderStatus(state){
      state.isproviderLoading = !state.isproviderLoading
    }
  }
  export const getters = {
    getProviders: state => state.posts,

    getProviderStatus: state => state.isPostLoading
  } 
  
  export const actions= {
   loadProviders(vuexContext){
     let self = this
     return new Promise(function (resolve, reject){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/getall';
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