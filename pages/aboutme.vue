<template>
  <div>
    <section class="grid grid-cols-6 border-gray-800 border-b-2">
      <Header />
      <Nav />
    </section>
    <section class="container my-6">
      <h1>About Me</h1>
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
