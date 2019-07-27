export const state = () => ({
  trainees: [],
  isTraineeLoading: true
 
})
export const mutations = {
  setTrainees (state,data){
    state.trainees = data
  },
  changeTraineeStatus(state){
    state.isTraineeLoading = !state.isTraineeLoading
  }
}
export const getters = {
  getTrainees: state => state.trainees,
  getTraineeStatus: state => state.isTraineeLoading
} 

export const actions= {
 loadTrainees(vuexContext){
   let self = this
   return new Promise(function (resolve, reject){
    let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/trainee/getall';
    self.$axios.$get(herokuUrl)
     .then(function (response){
       vuexContext.commit('changeTraineeStatus')
       resolve(response)
     })
     .catch(function (error) {
       reject(error.message) 
     })
   })
  } 

}