<template>
    <div class="col-span-6 md:col-span-2 flex md:flex-col lg:flex-row justify-around items-center border-gray-800 md:border-l-2 p-6">
         <NuxtLink class="text-xl lg:text-2xl text-center font-semibold p-2 border-b-2 hover:border-gray-800" to="/">Home</NuxtLink>
         <NuxtLink class="text-xl lg:text-2xl text-center font-semibold p-2 border-b-2 hover:border-gray-800" to="/mywork">My Work</NuxtLink>
         <NuxtLink class="text-xl lg:text-2xl text-center font-semibold p-2 border-b-2 hover:border-gray-800" to="/aboutme">About Me</NuxtLink>
    </div>
</template>

<style>
.nuxt-link-exact-active {
  @apply border-gray-800;
}
</style>
