export const state = () => ({
  artisans: [],
  isArtisanLoading: true
 
})
export const mutations = {
  setArtisans (state,data){
    state.artisans = data
  },
  changeArtisanStatus(state){
    state.isArtisanLoading = !state.isArtisanLoading
  }
}
export const getters = {
  getArtisans: state => state.artisans,

  getArtisanStatus: state => state.isArtisanLoading
} 

export const actions= {
 loadArtisans(vuexContext){
   let self = this
   return new Promise(function (resolve, reject){
    let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/artisan/getall';
    self.$axios.$get(herokuUrl)
     .then(function (response){
       vuexContext.commit('changeArtisanStatus')
       resolve(response)
     })
     .catch(function (error) {
       reject(error.message) 
     })
   })
  } 

}