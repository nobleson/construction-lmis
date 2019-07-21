<template>
<div class="gradient">
  <div class="row justify-content-md-center mt-3">
    <div class="col-md-6">
        <mdb-card border="primary" class="mb-3">
    
                     <mdb-card-body class="text-primary">
                        <div>
                        <b-carousel
                        id="carousel-no-animation"
                        style="text-shadow: 0px 0px 2px #000"
                        no-animation
                        indicators
                        img-width="1024"
                        img-height="480"
                      >
                        <b-carousel-slide
                        caption="First slide"
                        >
                        
                         <img
                            slot="img"
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            src="~/assets/images/1.png"
                            alt="image slot"
                          >
                        </b-carousel-slide>
                        
                        <b-carousel-slide
                        caption="Second Slide"
                        >
                       <img
                            slot="img"
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            src="~/assets/images/4.png"
                            alt="image slot"
                          >
                        </b-carousel-slide>
                        <b-carousel-slide
                        caption="Second Slide"
                        >
                       <img
                            slot="img"
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            src="~/assets/images/4.jpg"
                            alt="image slot"
                          >
                        </b-carousel-slide>
                        <b-carousel-slide
                        caption="Second Slide"
                        >
                        <img
                            slot="img"
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            src="~/assets/images/1.jpg"
                            alt="image slot"
                          >
                        </b-carousel-slide>
                    </b-carousel>
                    </div> 
                </mdb-card-body>
                </mdb-card>

        <h1>Trending Publications</h1>
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

    <div>
    <b-card class="text-center">
      <div>
        
      <div style="background-color:grey">
         <h2 class="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
      <p class="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <hr class="mt-1"/>
      </div>
      <mdb-row>
        <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
          <view-wrapper hover class="rounded z-depth-2 mb-4">
            <img class="img-fluid" src="~/assets/images/LicenceBody.png" width="100%" />
            <mdb-mask overlay="white-slight" waves/>
          </view-wrapper>
          <a class="pink-text">
            <h6 class="font-weight-bold mb-3">
              <mdb-icon icon="map" class="pr-2" />Gwarinpa Onward Construction Ltd</h6>
          </a>
          <h4 class="font-weight-bold mb-3">
            <strong>Title of the news</strong>
          </h4>
          <p>by
            <a class="font-weight-bold">Billy Forester</a>, 15/07/2018</p>
          <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
            possimus voluptas.</p>
          <mdb-btn color="pink" rounded size="md">Read more</mdb-btn>
        </mdb-col>
        <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
          <view-wrapper hover class="rounded z-depth-2 mb-4">
            <img class="img-fluid" src="~/assets/images/Assmt bodies icon.png" width="100%"/>
            <mdb-mask overlay="white-slight" waves/>
          </view-wrapper>
          <a class="deep-orange-text">
            <h6 class="font-weight-bold mb-3">
              <mdb-icon icon="graduation-cap" class="pr-2" />Education</h6>
          </a>
          <h4 class="font-weight-bold mb-3">
            <strong>Title of the news</strong>
          </h4>
          <p>by
            <a class="font-weight-bold">Billy Forester</a>, 13/07/2018</p>
          <p class="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti atque corrupti quos dolores.</p>
          <mdb-btn color="deep-orange" rounded size="md">Read more</mdb-btn>
        </mdb-col>
        <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
          <view-wrapper hover class="rounded z-depth-2 mb-4">
            <img class="img-fluid" src="~/assets/images/LicenceBody.png" width="100%" />
            <mdb-mask overlay="white-slight" waves/>
          </view-wrapper>
          <a class="blue-text">
            <h6 class="font-weight-bold mb-3">
              <mdb-icon icon="fire" class="pr-2" />Culture</h6>
          </a>
          <h4 class="font-weight-bold mb-3">
            <strong>Title of the news</strong>
          </h4>
          <p>by
            <a class="font-weight-bold">Billy Forester</a>, 11/07/2018</p>
          <p class="dark-grey-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
            qui ratione.</p>
          <mdb-btn color="info" rounded size="md">Read more</mdb-btn>
        </mdb-col>
      </mdb-row>
      </div>
    </b-card>
    
  </div>
        

</div>

  <div class="col-lg-2">
      <h6 class="h1-responsive font-weight-bold text-center my-2"> Posts</h6>
    <div>
    <b-card class="text-center">
      <mdb-row>
       <mdb-col >
        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img class="img-fluid" src="~/assets/images/corbon.png" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
         <a class="green-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="fire" class="pr-2" />Construction</h6>
        </a>
        <h6 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h6>
        <p>Nam libero tempore, cum soluta quod maxime placeat mdb-iconcere
         </p>
        <p>by
          <a>
            <strong>Carine Fox</strong>
          </a>, 19/08/2018</p>
         <b-button variant="success"   @click="$emit('changeComponent',{component: 'publicationdetail', id: null})" class="">Read More</b-button>
      </mdb-col>
     
    </mdb-row>
  
    </b-card>
  </div>

    <div>
    <b-card class="text-center">
      <mdb-row>
       <mdb-col >
        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img class="img-fluid" src="~/assets/images/corbon.png" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
         <a class="green-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="fire" class="pr-2" />Construction</h6>
        </a>
        <h6 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h6>
        <p>Nam libero tempore, cum soluta quod maxime placeat mdb-iconcere
         </p>
        <p>by
          <a>
            <strong>Carine Fox</strong>
          </a>, 19/08/2018</p>
        <mdb-btn color="success" size="md" class="waves-light ">Read more</mdb-btn>
      </mdb-col>
     
    </mdb-row>
  
    </b-card>
  </div>

    <div>
    <b-card class="text-center">
      <mdb-row>
       <mdb-col >
        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img class="img-fluid" src="~/assets/images/corbon.png" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
         <a class="green-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="fire" class="pr-2" />Construction</h6>
        </a>
        <h6 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h6>
        <p>Nam libero tempore, cum soluta quod maxime placeat mdb-iconcere
         </p>
        <p>by
          <a>
            <strong>Carine Fox</strong>
          </a>, 19/08/2018</p>
        <mdb-btn color="success" size="md" class="waves-light ">Read more</mdb-btn>
      </mdb-col>
     
    </mdb-row>
  
    </b-card>
  </div>

    <div>
    <b-card class="text-center">
      <mdb-row>
       <mdb-col >
        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img class="img-fluid" src="~/assets/images/corbon.png" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
         <a class="green-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="fire" class="pr-2" />Construction</h6>
        </a>
        <h6 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h6>
        <p>Nam libero tempore, cum soluta quod maxime placeat mdb-iconcere
         </p>
        <p>by
          <a>
            <strong>Carine Fox</strong>
          </a>, 19/08/2018</p>
        <mdb-btn color="success" size="md" class="waves-light ">Read more</mdb-btn>
      </mdb-col>
     
    </mdb-row>
  
    </b-card>
  </div>

    <div>
    <b-card class="text-center">
      <mdb-row>
       <mdb-col >
        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img class="img-fluid" src="~/assets/images/corbon.png" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
         <a class="green-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="fire" class="pr-2" />Construction</h6>
        </a>
        <h6 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h6>
        <p>Nam libero tempore, cum soluta quod maxime placeat mdb-iconcere
         </p>
        <p>by
          <a>
            <strong>Carine Fox</strong>
          </a>, 19/08/2018</p>
        <mdb-btn color="success" size="md" class="waves-light ">Read more</mdb-btn>
      </mdb-col>
     
    </mdb-row>
  
    </b-card>
  </div>

    <div>
    <b-card class="text-center">
      <mdb-row>
       <mdb-col >
        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img class="img-fluid" src="~/assets/images/corbon.png" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
         <a class="green-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="fire" class="pr-2" />Construction</h6>
        </a>
        <h6 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h6>
        <p>Nam libero tempore, cum soluta quod maxime placeat mdb-iconcere
         </p>
        <p>by
          <a>
            <strong>Carine Fox</strong>
          </a>, 19/08/2018</p>
        <mdb-btn color="success" size="md" class="waves-light ">Read more</mdb-btn>
      </mdb-col>
     
    </mdb-row>
  
    </b-card>
  </div>


   </div>
    
  <div class=" col-lg-3 grey">

    <h2 class="h1-responsive font-weight-bold text-center my-5">Related Post</h2>
    <p class="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      .</p>
   <div class="mt-2">
    <b-card class="text-center whitesmoke">
      <div>
       <mdb-row>
      <mdb-col lg="5" xl="4" color="white">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h3>
        <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
         </p>
        <p>by
          <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
        <mdb-btn color="primary" size="md">Read More</mdb-btn>
      </mdb-col>
    </mdb-row>
    <hr class="my-2" />
    </div>
   </b-card>
   </div>

 <div class="mt-2">
    <b-card class="text-center whitesmoke">
      <div>
       <mdb-row>
      <mdb-col lg="5" xl="4" color="white">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h3>
        <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
         </p>
        <p>by
          <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
        <mdb-btn color="primary" size="md">Read More</mdb-btn>
      </mdb-col>
    </mdb-row>
    <hr class="my-2" />
    </div>
   </b-card>
   </div>

 <div class="mt-2">
    <b-card class="text-center whitesmoke">
      <div>
       <mdb-row>
      <mdb-col lg="5" xl="4" color="white">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h3>
        <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
         </p>
        <p>by
          <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
        <mdb-btn color="primary" size="md">Read More</mdb-btn>
      </mdb-col>
    </mdb-row>
    <hr class="my-2"/>
    </div>
   </b-card>
   </div>


    <div class="mt-2">
    <b-card class="text-center whitesmoke">
      <div>
       <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h3>
        <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
         </p>
        <p>by
          <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
        <mdb-btn color="primary" size="md">Read More</mdb-btn>
      </mdb-col>
    </mdb-row>
    <hr class="my-2" />
    </div>
   </b-card>
   </div>

  <div class="mt-2">
    <b-card class="text-center whitesmoke">
      <div>
       <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h3>
        <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
         </p>
        <p>by
          <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
        <mdb-btn color="primary" size="md">Read More</mdb-btn>
      </mdb-col>
    </mdb-row>
    <hr class="my-2" />
    </div>
   </b-card>
   <hr class="my-2" />
 
   </div>

            
    </div>

</div>
</div>
</template>
<script>
import { mdbSelect, mdbContainer, mdbRow, mdbView, mdbCol, mdbCard, mdbCardBody, mdbMask, mdbIcon, ViewWrapper, mdbBtn } from 'mdbvue';

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


