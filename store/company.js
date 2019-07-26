export const state = () => ({
    companies: [],
    isCompanyLoading: true
   
  })
  export const mutations = {
    setCompanies (state,data){
      state.providers = data
    },
    changeCompanyStatus(state){
      state.isCompanyLoading = !state.isCompanyLoading
    }
  }
  export const getters = {
    getCompanies: state => state.posts,

    getCompanyStatus: state => state.isCompanyLoading
  } 
  
  export const actions= {
   loadCompanies(vuexContext){
     let self = this
     return new Promise(function (resolve, reject){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/company/getall';
      self.$axios.$get(herokuUrl)
       .then(function (response){
         vuexContext.commit('changeCompanyStatus')
         resolve(response)
       })
       .catch(function (error) {
         reject(error.message) 
       })
     })
    } 
  
  }