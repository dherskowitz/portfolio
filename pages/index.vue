<template>
  <div class="grid grid-cols-6 grid-rows-7 md:grid-rows-3 h-screen">
    <Header />

    <div
      class="col-span-6 md:col-span-2 p-6 flex flex-col justify-center items-center border-gray-800 border-2"
    >
      <div class="text-xl lg:text-3xl">
        Time In Jerusalem, IL
      </div>
      <div class="text-4xl lg:text-5xl xl:text-6xl">
        {{ timeInJerusalem }}
      </div>
    </div>

    <div class="col-span-3 md:col-span-1 p-6 flex items-center justify-center border-gray-800 border-2">
      <a href="https://www.linkedin.com/in/daniel-herskowitz-105/" target="_blank" class="inline-block bg-green-900 text-white px-4 py-2 hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out">LinkedIn</a>
    </div>

    <MyWork class="hidden flex-col md:flex" />

    <div class="col-span-3 md:col-span-1 p-6 flex items-center justify-center border-gray-800 border-2">
      <a href="https://github.com/dherskowitz" target="_blank" class="inline-block bg-green-900 text-white px-4 py-2 hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out">Github</a>
    </div>

    <MyWork class="flex flex-col md:hidden" />

    <div class="col-span-6 md:col-span-3 p-6 flex flex-col items-center border-gray-800 border-2 justify-center text-center">
      <!-- <div class="text-4xl text-gray-900 mb-1">About Me</div> -->
      <div class="text-2xl lg:text-4xl text-gray-900 mb-4 capitalize">My history & experience</div>
      <a href="/aboutme" class="inline-block bg-green-900 text-white px-4 py-2 hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out">About Me</a>
    </div>

    <div class="col-span-6 md:col-span-3 p-6 flex flex-col items-center border-gray-800 border-2 justify-center text-center">
      <p class="text-2xl lg:text-4xl text-gray-900 mb-4 capitalize">My Resume</p>
      <a href="/Daniel Herskowitz Resume.pdf" target="_blank" class="inline-block bg-green-900 text-white px-4 py-2 hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out capitalize">Download my resume as a PDF</a>
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
    },
    head: {
        title: 'Daniel Herskowitz | Full Stack Developer | Jerusalem | NY',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Full stack developer based in Jerusalem and New York'
            }
        ]
    }
};
</script>
