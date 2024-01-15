<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
})
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/stores/auth'; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
import Swall from 'sweetalert2';

const user = ref({
  username: 'kminchelle',
  password: '0lelplR',
});
const router = useRouter();

const login = async () => {
  Swall.fire({
    title: 'Harap Bersabar',
    icon: 'info',
    text: 'Mencoba Login',
    allowOutsideClick: false,
    didOpen: () => {
      Swall.showLoading();
    },
  });
  await authenticateUser(user.value);
  if (authenticated) {
    Swall.close();
    await Swall.fire({
      icon: 'success',
      title: 'Mantap',
      text: 'Login Berhasil',
      showConfirmButton: false,
      timer: 1500,
    });
    await router.push('/');
  }
};
</script>
<template>
  <div class="flex w-screen h-screen flex items-center justify-center bg-[#ededed]">
    <div class="flex flex-col w-full max-w-lg text-center rounded-lg m-2">
      <form class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div class="text-2xl m-3">
          <h2>Login</h2>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" v-model="user.username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" v-model="user.password">
        </div>
        <div class="flex items-center justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"  @click.prevent="login">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>