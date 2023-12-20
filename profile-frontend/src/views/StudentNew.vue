<template>
     <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
           <div class="card">
             <div class="card-header bg-dark text-white text-center">
                Registar Student
             </div>
             <div class="card-body">
         <form action="">
       <div class="d-grid col-6 mx-auto mb-3">
        <img v-if="this.photo" height="100" :src="this.photo" id="fotoimg" class="img-thumbnail" alt="">
        <img v-else height="100" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-256.png" class="img-thumbnail" id="photoimg" alt="">

       </div>
               </form>

             </div>
           </div>
        </div>

     </div>
  </template>
  