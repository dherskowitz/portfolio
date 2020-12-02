<template>
  <div class="grid grid-cols-6 grid-rows-7 md:grid-rows-3 h-screen">
    <div class="col-span-6 md:col-span-4 px-6 bg-purple-900 text-white flex items-center border-gray-800 border-2">
      <div class="">
        <h1 class="text-5xl font-semibold">Daniel Herskowitz</h1>
        <h2 class="text-6xl font-semibold">Full Stack Developer</h2>
      </div>
    </div>
    <div class="col-span-6 md:col-span-2 px-6 flex flex-col justify-center items-center border-gray-800 border-2">
      <div class="text-3xl">Jerusalem, IL</div>
      <div class="text-6xl">{{ timeInJerusalem }}</div>
    </div>

    <div class="col-span-3 md:col-span-1 px-6 flex items-center justify-center border-gray-800 border-2">
      <a href="https://www.linkedin.com/in/daniel-herskowitz-105/" target="_blank" class="inline-block bg-green-900 text-white px-4 py-2 shadow-md hover:scale-110 hover:rotate-6 transition-all transform duration-200">LinkedIn</a>
    </div>

    <MyWork class="hidden md:flex" />

    <div class="col-span-3 md:col-span-1 px-6 flex items-center justify-center border-gray-800 border-2">
      <a href="https://github.com/dherskowitz" target="_blank" class="inline-block bg-green-900 text-white px-4 py-2 shadow-md hover:scale-110 hover:rotate-6 transition-all transform duration-200">Github</a>
    </div>

    <MyWork class="flex md:hidden" />

    <div class="col-span-6 md:col-span-3 px-6 flex items-center border-gray-800 border-2 justify-center">
      <div>My Resume</div>
      <div>A page with my resume and accordian to expand and read about the work I did.
      </div>
    </div>

    <div class="col-span-6 md:col-span-3 px-6 flex items-center border-gray-800 border-2 justify-center">
      <a href="/Daniel Herskowitz Resume.pdf" target="_blank" class="inline-block bg-green-900 text-white px-4 py-2 shadow-md hover:scale-110 hover:rotate-6 transition-all transform duration-200">Download My Resume</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timeInJerusalem: '',
      interval: 0
    };
  },
  mounted () {
    this.interval = setInterval(this.getTimeInJerusalem, 1000);
  },
  methods: {
    getTimeInJerusalem () {
      const options = {
        timeZone: 'Asia/Jerusalem',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      const formatter = new Intl.DateTimeFormat([], options);
      this.timeInJerusalem = formatter.format(new Date());
    }
  }
};
</script>
