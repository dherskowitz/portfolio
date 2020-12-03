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
        <div v-if="!timeInJerusalem" class="text-gray-900 bg-gray-900 w-full overflow-hidden animate-pulse" style="height:6rem;">loading...</div>
      </div>
    </div>

    <a href="https://www.linkedin.com/in/daniel-herskowitz-105/" target="_blank" class="col-span-3 md:col-span-1 p-6 flex items-center justify-center border-gray-800 border-2 bg-blue-800 hover:bg-blue-900 transition-all duration-150">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current text-gray-200"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M0 0h24v24H0z" stroke="none" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 00-4 0" />
        </svg>
        <div class="text-lg text-gray-200">LinkedIn</div>
      </div>
    </a>

    <MyWork class="hidden flex-col md:flex" />

    <a href="https://github.com/dherskowitz" target="_blank" class="col-span-3 md:col-span-1 p-6 flex items-center justify-center border-gray-800 border-2 bg-gray-900 hover:bg-gray-700 transition-all duration-150">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current text-gray-200"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M0 0h24v24H0z" stroke="none"/>
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>
        </svg>
        <div class="text-lg text-gray-200">Github</div>
      </div>
    </a>

    <MyWork class="flex flex-col md:hidden" />

    <div class="col-span-6 md:col-span-3 p-6 flex flex-col items-center border-gray-800 border-2 justify-center text-center">
      <a href="/aboutme" class="inline-block bg-green-900 text-3xl font-semibold text-white px-4 py-2 hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out">My History & Experience</a>
    </div>

    <div class="col-span-6 md:col-span-3 p-6 flex flex-col items-center border-gray-800 border-2 justify-center text-center bg-green-900">
      <a href="/Daniel Herskowitz Resume.pdf" target="_blank" class="inline-block bg-green-600 text-3xl font-semibold text-white px-4 py-2 hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out capitalize">Download my resume as a PDF</a>
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
