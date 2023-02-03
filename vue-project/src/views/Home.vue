<template>
    <div>
        <nav class=" bg-black h-24 flex fixed w-full justify-around items-center text-center">
            <RouterLink to="/">
                <img class="h-12 w-12 rounded-full hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2" src="../assets/face.png">
            </RouterLink>

            <h1 class="text-lg title text-white">Mathis CHOUFFOT</h1>
            
            <a href="https://www.linkedin.com/in/mathis-chouffot/">
                <img class="h-10 w-10 rounded-md hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2" src="../assets/linkedin.svg">
            </a>
        </nav>
    </div>


    <div class="pt-64 flex flex-col items-center">
        <h1 class="text-3xl text-white mb-10">001. ABOUT ME</h1>
        <h2 class="text-xl w-1/2 text-white mb-28 text-center leading-relaxed">Hi ! <a>I'm Mathis CHOUFFOT</a>, I am a student at <a>Epitech Digital School</a>. I am led to discover and use digital through different projects. From the <a>UX/UI</a> to the <a>developement</a>, passing by <a>business</a>, we approach the question of <a>digital transformation</a>.</h2>
        
        <h1 class="text-3xl text-white mb-10">002. MY PROJECTS</h1>
        <div class="h-48 w-[50%] rounded-[34px] mb-12 bg-[#0c0c0c] hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2"></div>
        <div class="h-48 w-[50%] rounded-[34px] mb-12 bg-[#0c0c0c] hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2"></div>
        <div class="h-48 w-[50%] rounded-[34px] mb-12 bg-[#0c0c0c] hover:ring-[#00B15A] hover:ring-offset-2 hover:ring-offset-black hover:ring-2 hover:outline-offset-2"></div>
    </div>

</template>