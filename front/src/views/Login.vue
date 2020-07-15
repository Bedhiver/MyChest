<template>
  <div class="login">
    <h1 class="text-center mt-4">Login page</h1>
    <v-container fuild>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <v-card class="pa-4 grey lighten-3" tile>
            <v-form ref="form" v-model="valid">
              <v-text-field v-model="emailIn" :rules="emailRules" label="Adresse email" required></v-text-field>
              <v-text-field
                v-model="passwordIn"
                :rules="passwordRules"
                :type="'password'"
                label="Mot de passe"
                required
              ></v-text-field>
            </v-form>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4 mt-4"
              @click="validate"
            >Se connecter</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    emailIn: "",
    passwordIn: "",
    valid: true,
    emailRules: [
      v => !!v || "E-mail requis !",
      v => /.+@.+\..+/.test(v) || "L'adresse e-mail doit être valide !"
    ],
    passwordRules: [v => !!v || "Ne doit pas être vide"]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    }
  }
};
</script>