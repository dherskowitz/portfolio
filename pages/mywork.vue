<template>
  <div>
    <section class="grid grid-cols-6 border-gray-800 border-b-2">
      <Header />
      <Nav />
    </section>
    <section class="container my-16 pb-16 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-800">
      <div class="col-span-3 md:col-span-2 lg:col-span-3 p-6 border-2 border-gray-800">
        <div class="text-5xl text-purple-900">Hertz Furniture</div>
        <div class="text-2xl">Some of the projects I have worked on while employed at Hertz Furniture:</div>
        <p class="pb-2">Projects at Hertz Furniture are built using PHP/Yii Framework/JavaScript/Webix UI/ Webix Jet/MySQL/Airtable</p>
        <div class="mt-2">
          <div class="text-xl">Vendor Portal</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ducimus quis?</div>
        </div>
        <div class="mt-2">
          <div class="text-xl">Order Entry</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ducimus quis?</div>
        </div>
        <div class="mt-2">
          <div class="text-xl">Ionic App</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ducimus quis?</div>
        </div>
        <div class="mt-2">
          <div class="text-xl">Airtable Sync</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ducimus quis?</div>
        </div>
        <div class="mt-2">
          <div class="text-xl">trello sync</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ducimus quis?</div>
        </div>
        <div class="mt-2">
          <div class="text-xl">Order Files Fetching</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ducimus quis?</div>
        </div>
        <div class="mt-2">
          <div class="text-xl">Leads response</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ducimus quis?</div>
        </div>
        <div class="mt-2">
          <div class="text-xl">Email Signature Generator</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ducimus quis?</div>
        </div>
        <div class="mt-2">
          <div class="text-xl">Instagram Page</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ducimus quis?</div>
        </div>
        <div class="mt-2">
          <div class="text-xl">Gallery Page</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ducimus quis?</div>
        </div>
      </div>
      <div class="col-span-3 md:col-span-2 lg:col-span-3 p-6 border-2 border-gray-800">
        <div class="text-5xl text-purple-900">Frum Philly</div>
        <img src="/frumphilly-screenshot.jpg" alt="">
        <div class="text-lg text-gray-800 pt-8 pb-4">
          <p class="pb-2">Frum Philly is a fullstack Django application for the Philadelphia and South Jersey Jewish communities.</p>
          <p class="pb-2">It includes local and social authentication, image compression, data validation, account management, and more.</p>
          <p class="pb-2">The application is hosted on a Digital Ocean droplet and uses Dokku for management and deployment.</p>
          <p class="pb-2">Built with Python/Django/PostgresSQL/TailwindCSS/AlpineJS</p>
        </div>
        <div class="pb-4 flex justify-center">
          <a class="mt-2 mx-6 py-2 px-10 bg-green-900 text-white text-xl font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://github.com/dherskowitz/frumphilly_site" target="_blank">Github</a>
          <a class="mt-2 mx-6 py-2 px-10 bg-green-900 text-white text-xl font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://www.frumphilly.com/" target="_blank">Website</a>
        </div>
      </div>
      <div class="col-span-3 md:col-span-1 p-6 border-2 border-gray-800 flex flex-col justify-between">
        <div class="text-xl font-semibold">Firefox Right Click Search</div>
        <div class="pb-2">A Firefox browser add-on to search a saved search engine from the context menu.</div>
        <p class="pb-2">Built with JavaScript</p>
        <div>
          <a class="block text-center mt-2 py-2 px-10 bg-green-900 text-white text-base font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://github.com/dherskowitz/firefox-right-click-search" target="_blank">Github</a>
          <a class="block text-center mt-2 py-2 px-10 bg-green-900 text-white text-base font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://addons.mozilla.org/en-US/firefox/addon/right-click-search/" target="_blank">Firefox Add-Ons Page</a>
        </div>
      </div>
      <div class="col-span-3 md:col-span-1 p-6 border-2 border-gray-800 flex flex-col justify-between">
        <div class="text-xl font-semibold">Dollar-to-NIS</div>
        <div class="pb-2">A Progressive Web App to convert between USD & NIS.</div>
        <p class="pb-2">Built with JavaScript/Gridsome</p>
        <div>
          <a class="block text-center mt-2 py-2 px-10 bg-green-900 text-white text-base font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://github.com/dherskowitz/dollar-to-nis" target="_blank">Github</a>
          <a class="block text-center mt-2 py-2 px-10 bg-green-900 text-white text-base font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://dollar-to-nis.vercel.app/" target="_blank">Website</a>
        </div>
      </div>
      <div class="col-span-3 md:col-span-1 p-6 border-2 border-gray-800 flex flex-col justify-between">
        <div class="text-xl font-semibold">What Time Is Shabbos</div>
        <div class="pb-2">A Progressive Web App to get the Sabbath start/end times for a given region.</div>
        <p class="pb-2">Built with JavaScript/Gridsome/Python/AWS Lambda</p>
        <div>
          <a class="block text-center mt-2 py-2 px-10 bg-green-900 text-white text-base font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://github.com/dherskowitz/whatTimeIsShabbos" target="_blank">Github</a>
          <a class="block text-center mt-2 py-2 px-10 bg-green-900 text-white text-base font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://what-time-is-shabbos.now.sh/" target="_blank">Website</a>
        </div>
      </div>
      <div class="col-span-3 md:col-span-1 p-6 border-2 border-gray-800 flex flex-col justify-between">
        <div class="text-xl font-semibold">Safari Judaica</div>
        <div class="pb-2">A sample JAMstack site using Airtable as a Database and product data copied from <a href="http://safarijudaica.com/" target="_blank" class="text-green-500 underline">safarijudaica.com</a> with permission from the site owner.</div>
        <p class="pb-2">Built with JavaScript/Gridsome/Airtable</p>
        <div>
          <a class="block text-center mt-2 py-2 px-10 bg-green-900 text-white text-base font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://github.com/dherskowitz/whatTimeIsShabbos" target="_blank">Github</a>
          <a class="block text-center mt-2 py-2 px-10 bg-green-900 text-white text-base font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://what-time-is-shabbos.now.sh/" target="_blank">Website</a>
        </div>
      </div>
      <div class="col-span-3 md:col-span-1 p-6 border-2 border-gray-800 flex flex-col justify-between">
        <div class="text-xl font-semibold">Tal Chaim</div>
        <div class="pb-2">A static site with a serverless contact form submitting to an AWS Lambda function which uses AWS SES to send an email to the site owner.</div>
        <p class="pb-2">Built with JavaScript/Gridsome</p>
        <div>
          <a class="block text-center mt-2 py-2 px-10 bg-green-900 text-white text-base font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://talchaim.com/" target="_blank">Website</a>
        </div>
      </div>
      <div class="col-span-3 md:col-span-1 p-6 border-2 border-gray-800 flex flex-col justify-between">
        <div class="text-xl font-semibold">Mirror Image</div>
        <div class="pb-2">A static site for a Philadelphia business.</div>
        <p class="pb-2">Built with JavaScript/Gridsome</p>
        <div>
          <a class="block text-center mt-2 py-2 px-10 bg-green-900 text-white text-base font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://showerdoorsphiladelphia.com/" target="_blank">Website</a>
        </div>
      </div>
      <div class="col-span-3 md:col-span-1 p-6 border-2 border-gray-800 flex flex-col justify-between">
        <div class="text-xl font-semibold">DJ Locksmith</div>
        <div class="pb-2">A static site for a Jerusalem area business.</div>
        <p class="pb-2">Built with HTML/CSS/JavaScript</p>
        <div>
          <a class="block text-center mt-2 py-2 px-10 bg-green-900 text-white text-base font-semibold hover:shadow-xl hover:bg-green-700 transition-all duration-150 ease-in-out" href="https://dj-locksmith.com/" target="_blank">Website</a>
        </div>
      </div>
    </section>
  </div>
</template>
