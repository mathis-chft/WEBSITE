<template>
    <nav class="fixed flex items-center justify-between w-screen h-24 text-center bg-black">
        <img routerlink="/" class="hover:transition-opacity ml-8 duration-300 h-10 w-10 rounded-full hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2" src="../assets/face.webp" alt="Photo de profil">
        <h1 class="text-xl text-white">Mathis CHOUFFOT</h1>
        <a href="https://www.linkedin.com/in/mathis-chouffot/">
            <img class="hover:transition-opacity mr-8 duration-300 min-h-full h-8 w-8 rounded-md hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2" src="../assets/linkedin.svg" alt="Logo LinkedIn">
        </a>
    </nav>
    <div class="flex flex-col items-center pt-52">
        <h2 class="text-3xl text-white mb-14">001. ABOUT ME</h2>
        <h3 class="w-1/2 text-xl leading-relaxed text-center text-white mb-28">Hey there! I'm <a>Mathis CHOUFFOT</a>, student at <a>Epitech Digital School</a>. I'm all about learning about and working on <a>digital transformation</a>. My school projects cover a wide range of digital topics, from <a>UX/UI</a> design to <a>developement</a> passing by <a>business</a>. Basically, I'm trying to figure out how digital can be used to transform the world.</h3>
    </div>
    <div class="flex flex-col items-center gap-12">
        <h2 class="items-center justify-around text-3xl text-center text-white mb-14">002. MY PROJECTS</h2>
        <div class="hover:transition-opacity duration-300 h-48 w-[50%] rounded-[34px] bg-[#0c0c0c] hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2"></div>
        <div class="hover:transition-opacity duration-300 h-48 w-[50%] rounded-[34px] bg-[#0c0c0c] hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2"></div>
    </div>
</template>