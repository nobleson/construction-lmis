export const state = () => ({
    regsuccess: false,
    regerror: false,
    reportFormReset: false,
    reports:null,
    isContentLoading: true
  })
  export const mutations = {
    changeFormState (state) {
      state.reportFormReset = !state.reportFormReset
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setReports (state,data){
      state.reports = data
    },
    changeLoaderStatus(state){
      state.isContentLoading = !state.isContentLoading;
    } 
  }
  export const getters = {
    getFormState: state => state.reportFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,
  
    getReports: state => state.reports,
  
    getLoaderStatus: state => state.isContentLoading
  
  } 
  
  export const actions= {
    registerCourse(vuexContext,courseData){
      let self = this
      return new Promise( function(resolve,reject){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/course/create';
        self.$axios.$post(herokuUrl,courseData)
         .then(function (response) {   
          resolve('success')
          })
         .catch(function (error) {
           reject('error')
         });
      });
    },
    updateCourse(vuexContext,courseData){
      let self = this
      return new Promise( function(resolve,reject){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/course/'+courseData._id;
        self.$axios.$put(herokuUrl,courseData)
         .then(function (response) {   
          resolve('success')
          })
         .catch(function (error) {
           reject('error')
         });
      });
    },
    deleteCourse(vuexContext,_id){
        let self = this
        return  new Promise(
          function (resolve, reject) {
            let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/course/'+_id;
            self.$axios.$delete(herokuUrl)
             .then(function (response) {        
              resolve('success')
           })
             .catch(function (error) { 
              reject('error')
             });
        });
      },
   loadCourses(vuexContext){
    let self = this
      return new Promise(function(resolve,reject){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/course/getall';
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
    loadCoursesByProvider(vuexContext,_id){
      let self = this
        return new Promise(function(resolve,reject){
          let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/center/course/'+_id;
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
    toggleFormState(vuexContext) {
      vuexContext.commit('changeFormState')
    },
    toggleSucessAlert(vuexContext){
      vuexContext.commit('successToggle')
    },
    toggleErrorAlert(vuexContext){
      vuexContext.commit('errorToggle')
    },
  }
  