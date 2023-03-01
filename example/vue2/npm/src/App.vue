<template>
  <v-app>
    <v-main>
      <QRcode class="primary">
        <template v-slot:title>
          <div/>
        </template>
      </QRcode>
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
