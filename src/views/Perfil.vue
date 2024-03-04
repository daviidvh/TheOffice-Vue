<script setup>
import UserCard from '@/components/UserCard.vue';
defineProps(["nombreUsuario"]);


</script>

<template>
    <v-toolbar>
            <v-app-bar-nav-icon>
      <v-img src="https://res.cloudinary.com/teepublic/image/private/s--VV384PHE--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-299/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-410/b_rgb:36538b/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1598385246/production/designs/13403182_1.jpg" width="60px" 
     ></v-img>
    </v-app-bar-nav-icon>

      <v-toolbar-title>Perfil de {{ nombreUsuario }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="mostrarFavoritos = false">
        <v-v-svg-icon type="mdi" :path="path"></v-v-svg-icon>
      </v-btn>
      <v-btn @click="irFavoritos">
        <v-v-svg-icon type="mdi" :path="path2"></v-v-svg-icon>
      </v-btn>
      <v-btn @click="irCrear">
        <v-v-svg-icon type="mdi" :path="path3"></v-v-svg-icon>
      </v-btn>
    </v-toolbar>
    <div>
        <UserCard :nombreUsuario="nombreUsuario" />
    </div>
</template>


