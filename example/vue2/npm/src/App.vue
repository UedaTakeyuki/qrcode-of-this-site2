<template>
  <v-app>
    <v-main>
      <QRcode/>
    </v-main>
  </v-app>
</template>

<script>
import {QRcode} from 'qrcode-of-this-site2'

export default {
  components: {
    QRcode,
  },

  data: () => ({
    //
  }),
};
</script>
