<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <body>
    <RouterView/>
  </body>
</template>

<script>
app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy-Report-Only', "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; frame-src 'self'"
  );
  
  next();
});
</script>