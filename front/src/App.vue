<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <span class="application-title">
          {{ application.name }}
        </span>
      </div>

      <v-spacer />

      <div v-for="page in pages" :key="page.name">
        <v-btn class="ma-1" small outlined :to="page.link">{{
          page.name
        }}</v-btn>
      </div>

      <v-spacer />

      <v-btn href="https://github.com/Bedhiver/MyChest" target="_blank" text>
        <span class="mr-2">GitHub repository</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    application: {
      name: "MyChest"
    },
    pages: [
      {
        name: "Accueil",
        link: "/"
      },
      {
        name: "Inscription",
        link: "/register"
      },
      {
        name: "Connexion",
        link: "/login"
      }
    ],
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"]
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap");

.application-title {
  font-family: "Black Ops One", cursive;
  font-size: 40px;
}
</style>
