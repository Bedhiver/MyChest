<template>
  <div class="register">
    <h1 class="text-center mt-4">Register page</h1>

    <v-container fluid>
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

              <v-text-field
                v-model="passwordRepeatIn"
                :rules="passwordRules"
                :type="'password'"
                label="Retapez votre mot de passe"
                required
              ></v-text-field>

              <v-text-field
                v-model="questionIn"
                :rules="questionRules"
                label="Tapez votre question secrète"
                required
              ></v-text-field>

              <v-text-field v-model="answerIn" :rules="answerRules" label="Réponse" required></v-text-field>
            </v-form>
            <v-btn :disabled="!valid" color="success" class="mr-4 mt-4" @click="validate">Valider</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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

// TODO: Change rules to show different errors !

import axios from "axios";

let userToSave = {
  emailUser: "",
  passwordUser: "",
  questionUser: "",
  answerUser: ""
};

function saveUser(userToSave) {
  axios
    .post(url, userToSave)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

import { url } from "../config-database-connect";

export default {
  data: () => ({
    emailIn: "",
    questionIn: "",
    answerIn: "",
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
      } else {
        userToSave.emailUser = this.emailIn;
        userToSave.passwordUser = this.passwordIn;
        userToSave.questionUser = this.questionIn;
        userToSave.answerUser = this.answerIn;

        console.log(`user to save : ${userToSave.emailUser}`);

        saveUser(userToSave);

        console.log(url);
      }
      // else {
      //   user;

      //   console.log("Validé !!!");
      //   saveUser();
      // }
    }
  }
};
</script>
