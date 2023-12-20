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

       <div class="input-group mb-3">
        <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
        <input type="text" v-model="name" id="name" placeholder="Input name" required maxlength="50" class="form-control">
       </div>

       </form>

             </div>
           </div>
        </div>

     </div>
  </template>
  