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
    'Content-Security-Policy', "default-src 'self'"
  );
  
  next();
});
</script>