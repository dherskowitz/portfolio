<template>
  <div>
    <section class="grid grid-cols-6 border-b-2 border-gray-800">
      <Header />
      <Nav />
    </section>
    <section class="container pb-16 my-16 text-xl text-gray-800">
      <div class="px-6 py-8 border-2 border-gray-800 md:px-16">
        <h1 class="text-5xl font-bold">
          About Me
        </h1>
        <p class="pb-2">
          Hi! I am a self taught developer originally from Brooklyn, NY and currently based in Jerusalem, Israel.
        </p>
        <p class="pb-2">
          I have been working as a full stack developer for approximately 5 years with additional experience in the front end.
        </p>
        <p class="pb-2">
          I work with Python, PHP, JavaScript, SQL, Git, HTML, and CSS/SCSS.
        </p>
        <p class="pb-2">
          I also work with Django, Yii, Laravel, Vue, Angular, Node, Webix/Jet, and WordPress
        </p>
        <p class="pb-2">
          Additionally, I am familiar with Linux, Apache, Nginx, Docker, Vagrant, AWS services, Digital Ocean, and Dokku.
        </p>
        <p class="pb-2">
          I can be contacted on <a href="https://www.linkedin.com/in/daniel-herskowitz-105/" target="_blank" class="text-green-900 underline">my LinkedIn page.</a>
        </p>
      </div>
      <div class="px-6 py-8 mt-6 border-2 border-gray-800 md:px-16">
        <h1 class="text-5xl font-bold">
          My Experience
        </h1>
        <div class="mt-10">
          <div class="text-xl font-semibold">
            <span>Hertz Furniture</span>
            <span class="hidden sm:inline">|</span>
            <span class="block mt-2 font-semibold text-green-700 sm:inline">Full Stack Developer</span>
            <span class="hidden sm:inline">|</span>
            <span class="block mt-2 text-base text-gray-600 sm:inline sm:mt-0 sm:text-xl">October 2017 - Present</span>
          </div>
          <div class="mt-4">
            Currently employed as a remote Full Stack Developer for a New Jersey based furniture and design company. Worked on projects such as Single Page Applications, automation and scripting, backend and API development, front end development and UI/UX, mobile development in the Ionic framework, as well as a number of other projects both large and small.
          </div>
        </div>
        <div class="mt-10">
          <div class="text-xl font-semibold">
            <span>HY Enterprises (aka iDingo, iMonty)</span>
            <span class="hidden sm:inline">|</span>
            <span class="block mt-2 font-semibold text-green-700 sm:inline">Full Stack Developer</span>
            <span class="hidden sm:inline">|</span>
            <span class="block mt-2 text-base text-gray-600 sm:inline sm:mt-0 sm:text-xl">February 2016 - October 2017</span>
          </div>
          <div class="mt-4">
            Full Stack Developer at a marketing/direct sales company. Worked as part of a team developing multiple marketing and e-commerce sites using PHP, JavaScript, jQuery, MySQL, Git, HTML/CSS, and WordPress. Managed existing and set up multiple additional Virtual Private Servers with a LAMP stack configuration. Handled basic IT related tasks including software and hardware troubleshooting and repairs.
          </div>
        </div>
        <div class="mt-10">
          <div class="text-xl font-semibold">
            <span>BRH Medical South Africa</span>
            <span class="hidden sm:inline">|</span>
            <span class="block mt-2 font-semibold text-green-700 sm:inline">Consultant</span>
            <span class="hidden sm:inline">|</span>
            <span class="block mt-2 text-base text-gray-600 sm:inline sm:mt-0 sm:text-xl">5 Month Consultancy</span>
          </div>
          <div class="mt-4">
            A short term contract as part of the team setting up the South African branch of an Israeli BioMedical company. Constructed multiple websites; helped design and implement a marketing plan and helped develop relationships between the company and third parties such as medical personnel and potential partners.
          </div>
        </div>
        <div class="mt-10">
          <div class="text-xl font-semibold">
            <span>Sequoia Development Group</span>
            <span class="hidden sm:inline">|</span>
            <span class="block mt-2 font-semibold text-green-700 sm:inline">IT and Web Developer</span>
            <span class="hidden sm:inline">|</span>
            <span class="block mt-2 text-base text-gray-600 sm:inline sm:mt-0 sm:text-xl"> 2 Years (2013 - 2015)</span>
          </div>
          <div class="mt-4">
            IT and Web Developer for a startup real estate development firm. Oversaw the setup of a new office including purchase and installation of all computers, printers, and network gear/PBX. Developed websites and internal tools and handled all IT related tasks.
          </div>
        </div>
        <div class="mt-10">
          <div class="text-xl font-semibold">
            <span>JCN Network DBA Old Junk Car</span>
            <span class="hidden sm:inline">|</span>
            <span class="block mt-2 font-semibold text-green-700 sm:inline">IT and Web Developer</span>
            <span class="hidden sm:inline">|</span>
            <span class="block mt-2 text-base text-gray-600 sm:inline sm:mt-0 sm:text-xl">2 Years (2011 - 2013)</span>
          </div>
          <div class="mt-4">
            IT and Web Developer working with Wordpress, CSS, HTML, PHP and Javascript. Managed and maintained all employee computers, on premises windows server, and the network room for all connected systems. Repaired systems as needed including replacing parts and services.
          </div>
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
