<script setup lang="ts">
definePageMeta({
  layout: 'panel',
  middleware: "auth"
})
</script>

<template>
  <main id="content" class="flex-1 p-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Replace with your content -->
      <div class="px-2 py-3 sm:px-0">
        <div
            class="border-4 border-dashed border-gray-200 rounded-lg text-center justify-center align-center items-center">
          <h1 class="text-3xl font-bold text-center mb-2">Buttons</h1>
          <hr class="m-3"/>
          <div class="flex flex-col ">
            <h1>Basic Button</h1>
            <div class="items-center text-center align-center justify-center">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded m-2">
                Blue
              </button>
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded m-2">
                Green
              </button>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded m-2">
                Red
              </button>
              <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-2 rounded m-2">
                Yellow
              </button>
              <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold p-2 rounded m-2">
                Purple
              </button>
              <button class="bg-black hover:bg-black text-white font-bold p-2 rounded m-2">
                Black
              </button>
            </div>
          </div>
          <div class="flex flex-col ">
            <h1>Outline Button</h1>
            <div class="items-center text-center align-center justify-center">
              <button class="bg-transparent hover:bg-blue-700 text-blue-500 hover:text-white font-bold p-2 border border-blue-500 hover:border-transparent rounded m-2">
                Blue
              </button>
              <button class="bg-transparent hover:bg-green-700 text-green-500 hover:text-white font-bold p-2 border border-green-500 hover:border-transparent rounded m-2">
                Green
              </button>
              <button class="bg-transparent hover:bg-red-700 text-red-500 hover:text-white font-bold p-2 border border-red-500 hover:border-transparent rounded m-2">
                Red
              </button>
              <button class="bg-transparent hover:bg-yellow-500 text-white-500 hover:text-white font-bold p-2 border border-yellow-500 hover:border-transparent rounded m-2">
                Yellow
              </button>
              <button class="bg-transparent hover:bg-purple-700 text-purple-500 hover:text-white font-bold p-2 border border-purple-500 hover:border-transparent rounded m-2">
                Purple
              </button>
              <button class="bg-transparent hover:bg-black text-black hover:text-white font-bold p-2 border border-black hover:border-transparent rounded m-2">
                Black
              </button>
            </div>
          </div>
          <div class="flex flex-col ">
            <h1>Rounded Button</h1>
            <div class="items-center text-center align-center justify-center">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full m-2">
                Blue
              </button>
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded-full m-2">
                Green
              </button>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded-full m-2">
                Red
              </button>
              <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-2 rounded-full m-2">
                Yellow
              </button>
              <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold p-2 rounded-full m-2">
                Purple
              </button>
              <button class="bg-black hover:bg-black text-white font-bold p-2 rounded-full m-2">
                Black
              </button>
            </div>
          </div>
          <p class="text-2xl m-3">More Custom Button check in <a href="https://v1.tailwindcss.com/components/buttons" class="text-green-500 cursor-pointer" target="_blank">tailwindcss</a></p>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>

<style scoped>

</style>