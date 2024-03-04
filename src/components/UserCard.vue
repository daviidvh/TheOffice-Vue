<script setup>
import listaUsuarios from '@/personajes.json';
import router from '@/router';

const { nombreUsuario } = defineProps(["nombreUsuario"]);

const datosUsuario = listaUsuarios.find(usuario => usuario.nombre === nombreUsuario);

// Función para calcular la edad a partir de la fecha de nacimiento
const calcularEdad = (fechaNacimiento) => {
  const ahora = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = ahora.getFullYear() - nacimiento.getFullYear();

  // Ajustar la edad si aún no ha pasado el cumpleaños en este año
  if (
    ahora.getMonth() < nacimiento.getMonth() ||
    (ahora.getMonth() === nacimiento.getMonth() && ahora.getDate() < nacimiento.getDate())
  ) {
    edad -= 1;
  }

  return edad;
};



function volverAtras(){
  router.push("/");
}
</script>

<template>
  <v-card :loading="loading" class="mx-auto my-12 custom-card" max-width="374">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
    </template>

    <v-img height="250" :src="datosUsuario.imagen" cover></v-img>

    <v-card-item>
      <v-card-title>{{ datosUsuario.nombre }} - {{ calcularEdad(datosUsuario.fechaNacimiento) }} años</v-card-title>

      <v-card-subtitle>
        <span class="me-1">{{ datosUsuario.email }}</span>
        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        {{ datosUsuario.cargo }} • {{ datosUsuario.ciudad }}, {{ datosUsuario.estado }}
      </div>
      <div>{{ datosUsuario.descripcion }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn color="deep-purple-lighten-2" variant="text" @click="volverAtras">Volver atras</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.custom-card {
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.v-card__title {
  font-size: 1.5rem;
}

.v-card__subtitle {
  display: flex;
  align-items: center;
}

.v-card__text {
  margin-top: 16px;
}

.v-divider {
  margin: 8px 0;
}

.v-card-actions {
  justify-content: flex-end;
}
</style>
