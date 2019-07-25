export const state = () => ({
    companies: [],
    iscompanyLoading: false
   
  })
  export const mutations = {
    setCompanies (state,data){
      state.providers = data
    },
    changeCompanyStatus(state){
      state.iscompanyLoading = !state.iscompanyLoading
    }
  }
  export const getters = {
    getCompanies: state => state.posts,

    getCompanyStatus: state => state.iscompanyLoading
  } 
  
  export const actions= {
   loadCompanies(vuexContext){
     let self = this
     return new Promise(function (resolve, reject){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/company/getall';
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