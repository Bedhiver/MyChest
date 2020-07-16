<template>
  <div>
    <div class="ma-10">
      <v-parallax
        dark
        height="500"
        src="https://images6.alphacoders.com/101/1016956.jpg"
        alt="Parallax image background"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-3 font-weight-medium mb-4">
              Welcome in <span class="application-title-parallax">MyChest</span>
            </h1>
            <h4 class="subheading">
              The right place to save and retrieve safely your passwords
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    application: {
      version: "1.0"
    }
  })
};
</script>

<style>
.application-title-parallax {
  font-family: "Black Ops One", cursive;
}
</style>
