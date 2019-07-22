<template>
<div class="gradient">
  <div class="row justify-content-md-center mt-3">
    <div class="col-md-6">
        
        <h1>Publications</h1>
        <br>
          <div>
            <ul class="list-unstyled">
              <b-media tag="li">
                <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p class="mb-0">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                  Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                  ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  <b-button variant="success"   @click="$emit('changeComponent',{component: 'publicationdetail', id: null})" class="">Read More ...</b-button>

                </p>
              </b-media>

              <b-media tag="li" class="my-4">
                <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder"></b-img>

                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p class="mb-0">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                  Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                  ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </b-media>

              <b-media tag="li">
                <b-img slot="aside" blank blank-color="#bac" width="64" alt="placeholder"></b-img>

                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p class="mb-0">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                  Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                  ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </b-media>
            </ul>
          </div>
        <br>
 
   </div>       
    </div>

</div>
</template>
<script>
import { mdbSelect, mdbContainer, mdbRow, mdbView, mdbCol, mdbCard, mdbCardBody, mdbMask, mdbIcon, ViewWrapper, mdbBtn } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
export default {
  layout:'default',
  components: {
    mdbSelect,
    mdbView,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbMask,
    mdbIcon,
    ViewWrapper,
    mdbBtn
  },
   data() {
      return {
        verticalWithin: 0,
        postList: [],
        dataObject: {}
      }
    },
    mounted(){
            this.createPosts();
    },
    computed: {
        ...mapGetters({isPostLoading: 'post/getPostStatus' }),
        processPosts: function(){
              return this.postList
        }
    
         
    },
    methods: {
      ...mapActions({loadPosts: 'post/loadPosts'}),
        createPosts() {
          let self = this
          this.loadPosts().then(list => self.getExistingPostList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingPostList(list){
        if(list){
          console.log('POST:'+JSON.stringify(list)) 
         return this.postList = list
        }
      },  
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      }         
    } 
};
</script>
<style scoped>
.loop-container {
  padding: 3rem;
}



@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-lg-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-md-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-lg-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-md-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}
</style>


