<script setup lang="ts">
import {storeToRefs} from 'pinia'; // import storeToRefs helper hook from pinia
import {useAuthStore} from '~/stores/auth'; // import the auth store we just created

const router = useRouter();


const {logUserOut} = useAuthStore(); // use authenticateUser action from  auth store
const {authenticated} = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
  logUserOut();
  router.push('/auth/login');
};
</script>

<template>
  <input type="checkbox" id="menu-open" class="hidden"/>
  <!--  <label for="menu-open"-->
  <!--         class="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"-->
  <!--         data-dev-hint="floating action button">-->
  <!--    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
  <!--      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>-->
  <!--    </svg>-->
  <!--  </label>-->

  <header class="bg-gray-600 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
    <router-link to="/" class="block p-4 text-white font-bold whitespace-nowrap truncate">
      Dashboard
    </router-link>

    <label for="menu-open" id="mobile-menu-button"
           class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
      <svg id="menu-open-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <svg id="menu-close-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </label>
  </header>

  <aside id="sidebar"
         class="bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
         data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
    <div class="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
      <router-link to="/" class="text-white flex items-center space-x-2 px-4" title="Your App is cool">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
        <span class="text-2xl font-extrabold whitespace-nowrap truncate">Dashboard</span>
      </router-link>

      <nav data-dev-hint="main navigation">
        <hr/>
        <p class="m-2 px-4 text-lg uppercase text-gray-500 tracking-wider font-semibold text-center">Components</p>
        <router-link to="/icon"
                     class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
          <Icon name="fa6-solid:icons" color="white"/>
          <span>Icons</span>
        </router-link>
        <router-link to="/button"
                     class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
          <Icon name="teenyicons:button-outline" color="white"/>
          <span>Buttons</span>
        </router-link>
        <router-link to="/form"
                     class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
          <Icon name="fa:wpforms" color="white"/>
          <span>Forms</span>
        </router-link>
        <hr class="mt-3"/>
      </nav>
    </div>

    <nav data-dev-hint="second-main-navigation or footer navigation" class="border m-3">
      <div
          class="flex flex-row flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-red-700 hover:text-white cursor-pointer"
          @click="logout">
        <Icon name="uiw:logout" color="white"/>
        <!--        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"-->
        <!--             stroke="currentColor">-->
        <!--          <path d="M12 14l9-5-9-5-9 5 9 5z"/>-->
        <!--          <path-->
        <!--              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>-->
        <!--          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
        <!--                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>-->
        <!--        </svg>-->
        <nuxt-link class="block transition duration-200 hover:bg-red-700 hover:text-white">
          Logout
        </nuxt-link>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
#sidebar {
  --tw-translate-x: -100%;
}

#menu-close-icon {
  display: none;
}

#menu-open:checked ~ #sidebar {
  --tw-translate-x: 0;
}

#menu-open:checked ~ * #mobile-menu-button {
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}

#menu-open:checked ~ * #menu-open-icon {
  display: none;
}

#menu-open:checked ~ * #menu-close-icon {
  display: block;
}

@media (min-width: 768px) {
  #sidebar {
    --tw-translate-x: 0;
  }
}
</style>