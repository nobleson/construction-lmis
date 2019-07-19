<template>
  <div class="mt-2">
    <div class="search">
    <mdb-card class="mb-4"  >
      <mdb-card-body class="d-sm-flex justify-content-between">
      
        <b-nav-form>
          <b-form-input class="p-2 flex-fill bd-highlight"> placeholder="Search"></b-form-input>
          <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
    
      </mdb-card-body>
    </mdb-card>
      <mdb-card class="mb-4"  >
      <mdb-card-body class="d-sm-flex justify-content-between">
        
        <mdb-container>
        <mdb-select color="primary" v-model="colorOptions" label="Blue select" />
        <mdb-select color="primary" v-model="colorOptions" label="Blue select" />
        <mdb-select color="primary" v-model="colorOptions" label="Blue select" />
        </mdb-container>

      </mdb-card-body>
    </mdb-card>
    <mdb-container>
    <mdb-row>
          <mdb-card reverse>
            <mdb-view hover cascade>
              <a href="#!">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Card image cap"></mdb-card-image>
                <mdb-mask waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body class="text-center" cascade>
              <mdb-card-title><strong>My adventure</strong></mdb-card-title>
              <h5 class="indigo-text"><strong>Photography</strong></h5>
              <mdb-card-text>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam.</mdb-card-text>
              <a class="px-2 fa-lg li-ic">
                <mdb-icon fab icon="linkedin"/></a>
              <a class="px-2 fa-lg tw-ic">
                <mdb-icon fab icon="twitter"/></a>
              <a class="px-2 fa-lg fb-ic">
                <mdb-icon fab icon="facebook"/></a>
            </mdb-card-body>
          </mdb-card>
        </mdb-row>
      </mdb-container>
      
</div>
  </div>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol,  mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup,mdbView, mdbMask, } from 'mdbvue';
import { mdbSelect, mdbInput, mdbBtn, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbFormInline, mdbNavItem, mdbDropdown, mdbDropdownToggle, mdbNavbarMenu, mdbDropdownItem, mdbIcon } from 'mdbvue';
export default {
  name:"trainingproviders",
  layout:'carouselSlot',
  components:{
    mdbRow,
    mdbContainer,
    mdbSelect,
    mdbInput,
      mdbBtn,
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbFormInline,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownToggle,
      mdbNavbarMenu,
      mdbDropdownItem,
			mdbCol,
			mdbCard,
			mdbCardImage,
			mdbCardHeader,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbCardFooter,
			mdbCardUp,
			mdbCardAvatar,
			mdbCardGroup,
			mdbView,
			mdbMask,
			mdbIcon
  },
  data (){
    return{
      colorOptions: [
          { text: 'Option nr 1', value: 'Option 1', selected: true },
          { text: 'Option nr 2', value: 'Option 2' },
          { text: 'Option nr 3', value: 'Option 3' },
          { text: 'Option nr 4', value: 'Option 4' },
          { text: 'Option nr 5', value: 'Option 5' }
        ]
    }
  }
}
</script>
<style scoped>
.bg{
   color:cadetblue;
}
.search{
  padding-left:2%;
}
.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
</style>


