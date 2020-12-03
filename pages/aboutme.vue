<template>
  <div>
    <section class="grid grid-cols-6 border-gray-800 border-b-2">
      <Header />
      <Nav />
    </section>
    <section class="container my-16 pb-16 text-gray-800">
      <div class="p-6 text-xl border-2 border-gray-800">
        <h1 class="text-5xl font-semibold">About Me</h1>
        <p class="pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta unde nisi, libero rem ducimus labore explicabo vero corporis porro deserunt.</p>
      </div>
      <div class="p-6 mt-6 border-2 border-gray-800"></div>
    </section>
  </div>
</template>

<script>
export default {
    head: {
        title: 'About Me | Daniel Herskowitz | Full Stack Developer | Jerusalem | NY',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'About my history and work experience.'
            }
        ]
    }
};
</script>
