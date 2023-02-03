<template>
    <nav class="bg-black h-24 w-screen flex fixed justify-between items-center text-center">
        <RouterLink to="/">
            <img class="hover:transition-opacity ml-8 duration-300 h-11 w-11 rounded-full hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2" src="../assets/face.webp" alt="Photo de profil">
        </RouterLink>
        <h1 class="text-xl title text-white">Mathis CHOUFFOT</h1>
        <a href="https://www.linkedin.com/in/mathis-chouffot/">
            <img class="hover:transition-opacity duration-300 min-h-full mr-8 h-9 w-9 rounded-md hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2 " src="../assets/linkedin.svg" alt="Logo LinkedIn">
        </a>
    </nav>

    <div class="pt-52 flex flex-col items-center">
        <h1 class="text-3xl text-white mb-14">001. ABOUT ME</h1>
        <h2 class="text-xl w-1/2 text-white mb-28 text-center leading-relaxed">Hey there! I'm <a>Mathis CHOUFFOT</a>, student at <a>Epitech Digital School</a>. I'm all about learning about and working on <a>digital transformation</a>. My school projects cover a wide range of digital topics, from <a>UX/UI</a> design to <a>developement</a> passing by <a>business</a>. Basically, I'm trying to figure out how digital can be used to transform the world.</h2>
    </div>

    <h1 class="text-3xl text-white mb-14 justify-around items-center text-center">002. MY PROJECTS</h1>
    <div class=" gap-12 mb-12 flex flex-col items-center">
        <div class="hover:transition-opacity duration-300 h-48 w-[50%] rounded-[34px] bg-[#0c0c0c] hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2"></div>
        <div class="hover:transition-opacity duration-300 h-48 w-[50%] rounded-[34px] bg-[#0c0c0c] hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2"></div>
        <div class="hover:transition-opacity duration-300 h-48 w-[50%] rounded-[34px] bg-[#0c0c0c] hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2"></div>
    </div>
</template>