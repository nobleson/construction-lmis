export const state = () => ({
regsuccess: false,
regerror: false,
facilitiesFormReset: false,
facilities: null,
isContentLoading: true
})
export const mutations = {
changeLoaderStatus (state) {
  state.isContentLoading = !state.isContentLoading
},
successToggle (state) {
  state.regsuccess = !state.regsuccess
},
errorToggle (state) {
  state.regerror = !state.regerror
},
setFacilities (state,data){
  state.facilities = data
}
}
export const getters = {
getFormState: state => state.facilitiesFormReset,

getSuccessState: state => state.regsuccess,

getErrorState: state => state.regerror,

getFacilities: state => state.facilities,

getLoaderStatus: state => state.isContentLoading

} 

export const actions= {
registerFacilities(vuexContext,facilitiesData){
  let self = this
  return new Promise( function(resolve,reject){
    let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/facility/create';
    self.$axios.$post(herokuUrl,facilitiesData)
     .then(function (response) {   
      resolve('success')
      })
     .catch(function (error) {
       reject('error')
     });
  });
},
updateFacilities(vuexContext,facilitiesData){
  let self = this
  return new Promise( function(resolve,reject){
    let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/facility/'+facilitiesData._id;
    self.$axios.$put(herokuUrl,facilitiesData)
     .then(function (response) {   
      resolve('success')
      })
     .catch(function (error) {
       reject('error')
     });
  });
},
loadFacilities(vuexContext){
let self = this
return new Promise(function(resolve, reject){
  let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/facility/getall';
   self.$axios.$get(herokuUrl)
    .then(function (response){
      vuexContext.commit('changeLoaderStatus')
      resolve(response)
    })
    .catch(function (error) {
      reject(error.message)
    });
  })
},
loadFacilitiesByProvider(vuexContext,_id){
  let self = this
  return new Promise(function(resolve, reject){
    let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/facility/'+_id;
     self.$axios.$get(herokuUrl)
      .then(function (response){
        resolve(response)
      })
      .catch(function (error) {
        reject(error.message)
      });
    })
  },

toggleSucessAlert(vuexContext){
  vuexContext.commit('successToggle')
},
toggleErrorAlert(vuexContext){
  vuexContext.commit('errorToggle')
},
}