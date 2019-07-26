export const state = () => ({
    posts: [],
    isPostLoading: true
   
  })
  export const mutations = {
    setPosts (state,data){
      state.posts = data
    },
    changePostStatus(state){
      state.isPostLoading = !state.isPostLoading
    }
  }
  export const getters = {
    getPosts: state => state.posts,

    getPostStatus: state => state.isPostLoading
  } 
  
  export const actions= {
   loadPosts(vuexContext){
     let self = this
     return new Promise(function (resolve, reject){
      let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/post/getall';
      self.$axios.$get(herokuUrl)
       .then(function (response){
         vuexContext.commit('changePostStatus')
         resolve(response)
       })
       .catch(function (error) {
         reject(error.message) 
       })
     })
    } 
  
  }
  
  
  /* export const state = () => ({
    regsuccess: false,
    regerror: false,
    logoURL: '',
    apprentishipFormReset: false,
    apprentiship:  []
  })
  
  export const mutations = {
    changeFormState (state) {
      state.apprentishipFormReset = !state.apprentishipFormReset
    },
    successToggle (state) {
      state.regsuccess = !state.regsuccess
    },
    errorToggle (state) {
      state.regerror = !state.regerror
    },
    setApprentiship (state,data){
      state.apprentiship = data
    },
    setLogoURL(state,data){
      state.logoURL = data
    }
  }
  export const getters = {
    getFormState: state => state.apprentishipFormReset,
  
    getSuccessState: state => state.regsuccess,
  
    getErrorState: state => state.regerror,
  
    getLogoURL: state => state.logoURL,
  
    getLicensingBodies: state => state.licensingBodies
  
  }
  
  export const actions= {
  
      registerLicensingBody(vuexContext,licensingBodyData){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/licensing/create';
       this.$axios.$post(herokuUrl,licensingBodyData)
        .then(function (response) {        
        vuexContext.commit('successToggle')
        vuexContext.dispatch('resetSuccess')
      })
        .catch(function (error) {
          vuexContext.commit('errorToggle')
          vuexContext.dispatch('resetError')
        })
        .finally(function () {
  
            
          vuexContext.commit('changeFormState')
        });
      },
  
      loadLicensingBodies(vuexContext){
        let herokuUrl = 'https://shielded-savannah-72922.herokuapp.com/api/bodies/licensing/getall';
       this.$axios.$get(herokuUrl)
        .then(function (response){
         // let data = JSON.parse(response);
          vuexContext.commit('setLicensingBodies',response);
          console.log("awarding bodies:"+vuexContext.state.licensingBodies)
          //console.log("trade:"+response)
        })
        .catch(function (error) {
          console.log("trade fails to load")
        })
        .finally(function () {
        });
  
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
      resetSuccess(vuexContext) { 
        setTimeout(function () {vuexContext.commit('successToggle');}, 5000);
    },
    resetError(vuexContext) { 
      setTimeout(function () {vuexContext.commit('errorToggle');}, 5000);
    }
  } */
   