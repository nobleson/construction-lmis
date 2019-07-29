<template>
   <div class="container">
        <div class="row justify-content-center mt-3 ">
        <div class="col-md-9 article " >

       
            <div class="row">
            <div class="subtitle mt-5">
                <h1>{{publicationData.title}}</h1>
                  <hr/>
            </div>
             <img :src="publicationData.coverpage" width="800" class="img-fluid"/>
           
            </div>
             
            <div class="row">
                <div class="col-md-2 mt-5">
                    <div >

                        <p><strong>Author</strong></p>
                        <p>{{publicationData.author}}</p>
                       <hr style="border-top: dotted 1px;" />

                        <p>Date Published</p>
                        <p>{{publicationData.dateCreated}}</p>
                       <hr style="border-top: dotted 1px;" />

                      <hr style="border-top: dotted 1px;" />

                        </div>
                        
                    </div>

                    <div class="col-md-10 mt-3">
                         <div class="content mt-3" v-html="publicationData.authorExcerpt"> 
                             
                        </div>
                        </div>
            </div>
              
          
            </div>

            <div class="col-md-3">


            <b-card class=" mt-5">
               <b-card-title><h4 class="font-weight-bold">Newsletter</h4> </b-card-title>

               <hr style="border-top: dotted 1px;" />
                Subscribe to c-lmis to get the must-read publications & insights in your inbox.
                <b-card-body>
                    
                <mdb-input label="Your Email" v-model="value" />
                <mdb-btn  class="text-white text-center" color="light-green"  >Subscribe</mdb-btn>            
                </b-card-body>
                 <hr style="border-top: dotted 1px;" /> 
            
               </b-card>

                <div class="details mt-5"> 
                <hr style="border-top: dotted 1px;" /> 
                    <img class="img-fluid " :src="publicationData.authorProfilePhoto" width="100% mt-2" />
               
                 <hr style="border-top: dotted 1px;" />

                <h5 class="font-weight-bold mb-1">
                    <strong>{{publicationData.title}}</strong>
                </h5>

                   <p class="dark-grey-text">
                       {{publicationData.type}}
                    </p> 

                    <mdb-btn class="text-white" color="light-green" icon="cart-arrow-down"> Buy Document</mdb-btn>

                      <hr style="border-top: dotted 1px;" />

                        <div>
                            <ul class="list-unstyled list-inline">
                                <li class="list-inline-item"><a class="btn-floating btn-sm rgba-green-slight mx-2"><i class="fab fa-facebook-f fa-2x"></i></a></li>
                                <li class="list-inline-item"><a class="btn-floating btn-sm rgba-green-slight mx-2"><i class="fab fa-twitter fa-2x" ></i></a></li>
                        
                            </ul>
                        </div>                      

            </div>

              
                <div class="details mt-4">
                    <ul class="font-weight-bold">
                       <!-- <li><a href="#">Buliding serena lime line</a></li> -->
                       
                    </ul>

            </div>

                    
            </div>
        </div>
   </div>
</template>
<script>
import {mdbBtn, mdbCard,  mdbInput, mdbIcon, mdbListGroup, mdbListGroupItem, mdbCardTitle} from 'mdbvue'
export default {
    components:{
        mdbBtn,
        mdbCard,
        mdbCardTitle,
        mdbListGroup,
        mdbListGroupItem,
        mdbInput,
        mdbIcon
    },
    props:['publicationData']
}
</script>
<style>
.article{
   border-right: 1px solid #56b000;
}
ul {
  list-style-type: none;
  font-size: 15px;
}
h1{
    font-size:50px;
    font-family: 'Times New Roman', Times, serif;
    font-weight:bold;
}

h5{
  font-size:20px;
    font-family: 'Times New Roman', Times, serif;
    font-weight:bold;  
}
p{
    font-size:16px;
    font-family:Arial, Helvetica, sans-serif;
}
.gradient{
    padding-left:2%;
    padding-right:2%;
}
.content{
    font-family: 'Times New Roman', Times, serif;
    line-height:2.0rem;
}

.subtitle{
    font-size: 30px;
}
.date{
    font-style: italic;
}
</style>


