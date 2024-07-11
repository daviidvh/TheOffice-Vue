<script setup>


import listaUsuarios from '@/personajes.json';
import { useRouter } from 'vue-router';

const router = useRouter();

function infoUser(indice) {
  router.push({ name: 'perfil', params: { nombreUsuario: listaUsuarios[indice - 1].nombre } });
}

// Función para calcular la edad a partir de la fecha de nacimiento
function calcularEdad(fechaNacimiento) {
  const ahora = new Date();
  const nacimiento = new Date(fechaNacimiento);
  const edad = ahora.getFullYear() - nacimiento.getFullYear();

  // Ajustar la edad si aún no ha pasado el cumpleaños en este año
  if (
    ahora.getMonth() < nacimiento.getMonth() ||
    (ahora.getMonth() === nacimiento.getMonth() && ahora.getDate() < nacimiento.getDate())
  ) {
    return edad - 1;
  }

  return edad;
}


function irConfiguracion(){
  router.push("/configuracion")
}
</script>

<template>
  <v-toolbar>
    <v-app-bar-nav-icon>
      <v-img src="https://res.cloudinary.com/teepublic/image/private/s--VV384PHE--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-299/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-410/b_rgb:36538b/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1598385246/production/designs/13403182_1.jpg" width="60px"></v-img>
    </v-app-bar-nav-icon>

    <v-toolbar-title>Nuestro equipo de Dunder Mifflin</v-toolbar-title>
  </v-toolbar>

  <v-container>
    <v-row>
      <v-col v-for="personaje in listaUsuarios" :key="personaje.id" cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto" max-width="400" color="#3b5482">
          <v-img
            class="align-end text-white"
            height="200"
            :src="personaje.imagen"
            cover
          >
            <v-card-title>{{ personaje.nombre }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            {{ personaje.email }}
          </v-card-subtitle>

          <v-card-text>
            {{ personaje.cargo }}
          </v-card-text>

          <v-card-text>
            {{ personaje.ciudad }}, {{ personaje.estado }}
          </v-card-text>

          <v-card-text>
            Edad: {{ calcularEdad(personaje.fechaNacimiento) }} años
          </v-card-text>

          <v-card-actions>
            <v-col>
              <v-row justify="center">
                <v-btn color="orange" @click="infoUser(personaje.id)">Informacion</v-btn>
                <!-- <v-btn color="orange" @click="irConfiguracion">Configuracion</v-btn> -->
              </v-row>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>