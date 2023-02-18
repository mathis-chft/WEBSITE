<template>
    <nav class="fixed flex items-center justify-between w-screen h-24 text-center bg-black">
      <a href="#" @click.prevent="scrollToTop">
        <img routerlink="/" class="ml-8 duration-300 md:hover:scale-110 md:hover:ease-in-out h-10 w-10 rounded-full md:hover:ring-[#00B15A] md:hover:ring-offset-2 md:hover:ring-offset-black md:hover:ring-2 md:hover:outline-offset-2" src="../assets/face.webp" alt="Photo de profil de Mathis Chouffot">
      </a>
      
      <RouterLink to="/">
        <h1 class="text-xl not-italic text-white">Mathis CHOUFFOT</h1>
      </RouterLink>
      <a href="https://www.linkedin.com/in/mathis-chouffot/" target="_blank">
        <img class="mr-8 duration-300 hover:scale-110 hover:ease-in-out min-h-full h-8 w-8 rounded-md hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2" src="../assets/linkedin.svg" alt="Logo LinkedIn redirigeant vers la page LinkedIn de Mathis Chouffot">
      </a>
    </nav>
  </template>
  <script>
  export default {
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  };
  </script>