<template>
  <div>
    <section class="grid grid-cols-6 border-gray-800 border-b-2">
      <Header />
      <Nav />
    </section>
    <section class="container my-16 pb-16 text-gray-800 text-xl">
      <div class="py-8 px-6 md:px-16 border-2 border-gray-800">
        <h1 class="text-5xl font-bold">About Me</h1>
        <p class="pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta unde nisi, libero rem ducimus labore explicabo vero corporis porro deserunt.</p>
      </div>
      <div class="py-8 px-6 md:px-16 mt-6 border-2 border-gray-800">
        <h1 class="text-5xl font-bold">My Experience</h1>
        <div class="mt-10">
          <div class="text-xl font-semibold">
            <span>Hertz Furniture</span>
            <span class="hidden sm:inline">|</span>
            <span class="font-semibold block sm:inline mt-2 text-green-700">Full Stack Developer</span>
            <span class="hidden sm:inline">|</span>
            <span class="text-gray-600 block sm:inline mt-2 sm:mt-0 text-base sm:text-xl">October 2017 - Present</span>
          </div>
          <div class="mt-4">Currently employed as a remote Full Stack Developer for a New Jersey based furniture and design company. Worked on projects such as Single Page Applications, automation and scripting, backend and API development, front end development and UI/UX, mobile development in the Ionic framework, as well as a number of other projects both large and small.</div>
        </div>
        <div class="mt-10">
          <div class="text-xl font-semibold">
            <span>HY Enterprises (aka iDingo, iMonty)</span>
            <span class="hidden sm:inline">|</span>
            <span class="font-semibold block sm:inline mt-2 text-green-700">Full Stack Developer</span>
            <span class="hidden sm:inline">|</span>
            <span class="text-gray-600 block sm:inline mt-2 sm:mt-0 text-base sm:text-xl">February 2016 - October 2017</span>
          </div>
          <div class="mt-4">Full Stack Developer at a marketing/direct sales company. Worked as part of a team developing multiple marketing and e-commerce sites using PHP, JavaScript, jQuery, MySQL, Git, HTML/CSS, and WordPress. Managed existing and set up multiple additional Virtual Private Servers with a LAMP stack configuration. Handled basic IT related tasks including software and hardware troubleshooting and repairs.</div>
        </div>
        <div class="mt-10">
          <div class="text-xl font-semibold">
            <span>BRH Medical South Africa</span>
            <span class="hidden sm:inline">|</span>
            <span class="font-semibold block sm:inline mt-2 text-green-700">Consultant</span>
            <span class="hidden sm:inline">|</span>
            <span class="text-gray-600 block sm:inline mt-2 sm:mt-0 text-base sm:text-xl">5 Month Consultancy</span>
          </div>
          <div class="mt-4">A short term contract as part of the team setting up the South African branch of an Israeli BioMedical company. Constructed multiple websites; helped design and implement a marketing plan and helped develop relationships between the company and third parties such as medical personnel and potential partners.</div>
        </div>
        <div class="mt-10">
          <div class="text-xl font-semibold">
            <span>Sequoia Development Group</span>
            <span class="hidden sm:inline">|</span>
            <span class="font-semibold block sm:inline mt-2 text-green-700">IT and Web Developer</span>
            <span class="hidden sm:inline">|</span>
            <span class="text-gray-600 block sm:inline mt-2 sm:mt-0 text-base sm:text-xl"> 2 Years (2013 - 2015)</span>
          </div>
          <div class="mt-4">IT and Web Developer for a startup real estate development firm. Oversaw the setup of a new office including purchase and installation of all computers, printers, and network gear/PBX. Developed websites and internal tools and handled all IT related tasks.</div>
        </div>
        <div class="mt-10">
          <div class="text-xl font-semibold">
            <span>JCN Network DBA Old Junk Car</span>
            <span class="hidden sm:inline">|</span>
            <span class="font-semibold block sm:inline mt-2 text-green-700">IT and Web Developer</span>
            <span class="hidden sm:inline">|</span>
            <span class="text-gray-600 block sm:inline mt-2 sm:mt-0 text-base sm:text-xl">2 Years (2011 - 2013)</span>
          </div>
          <div class="mt-4">IT and Web Developer working with Wordpress, CSS, HTML, PHP and Javascript. Managed and maintained all employee computers, on premises windows server, and the network room for all connected systems. Repaired systems as needed including replacing parts and services.</div>
        </div>
      </div>
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
