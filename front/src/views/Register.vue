<template>
  <div class="register">
    <h1 style="text-align: center">Register page</h1>

    <div style="margin-left: 10%; margin-right: 10%">
      <v-form ref="form" v-model="valid">
        <v-text-field :rules="emailRules" label="Adresse email" required></v-text-field>

        <v-text-field
          v-model="passwordIn"
          :rules="passwordRules"
          :type="'password'"
          label="Mot de passe"
          required
        ></v-text-field>

        <v-text-field
          v-model="passwordRepeatIn"
          :rules="passwordRules"
          :type="'password'"
          label="Retapez votre mot de passe"
          required
        ></v-text-field>

        <v-text-field :rules="questionRules" label="Tapez votre question secrète" required></v-text-field>

        <v-text-field :rules="answerRules" label="Réponse" required></v-text-field>
      </v-form>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Valider</v-btn>
    </div>
  </div>
</template>

<script>
// let booltest = true;

// let outPw = "";
// let outPwR = "";

// function foo(pwI,pwO) {
//   if (booltest) return "Ne doit pas être vide";
//   else {

//     return "Incorrect";
//   }

//   if(pwI != pwO)
//   return "Incorrect"
//   else return "Ne doit pas être vide"
// }

// function key(io) {
//   let fooBool = true;
//   if (io) fooBool = false;
//   return fooBool;
// }

export default {
  data: () => ({
    passwordIn: "",
    passwordRepeatIn: "",
    valid: true,
    emailRules: [
      v => !!v || "E-mail requis !",
      v => /.+@.+\..+/.test(v) || "L'adresse e-mail doit être valide !"
    ],
    // passwordRules: [v => !!v || foo(passwordIn, passwordRepeatIn)],
    passwordRules: [v => !!v || "Ne doit pas être vide"],
    questionRules: [v => !!v || "Ne doit pas être vide"],
    answerRules: [
      v => !!v || "Ne doit pas être vide",
      v =>
        /^[a-z]*$/.test(v) ||
        "La réponse doit être en minuscule et être en un seul mot"
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();

      if (this.passwordIn != this.passwordRepeatIn) {
        // booltest = false;
        this.passwordIn = "";
        this.passwordRepeatIn = "";
      }
      console.log("validé !!!");
    }
  }
};
</script>
