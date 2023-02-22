<template>
  <v-app>
    <v-main>
      <QRcode/>
    </v-main>
  </v-app>
</template>

<script>
const QRcode = window.QRcode.QRcode

export default {
  name: 'App',
  components: {
    QRcode
  }
}
</script>