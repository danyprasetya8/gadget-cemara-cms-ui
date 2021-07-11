<template>
  <div class="w-full h-screen flex items-center bg-indigo-100">
    <div class="p-8 w-1/4 mx-auto shadow-lg rounded-2xl bg-white flex flex-col items-center">
      <img
        src="~@/assets/images/logo.svg"
        class="w-32"
      >
      <div class="font-comfortaa text-indigo-900 font-extrabold text-2xl my-5">
        Gadget Cemara CMS
      </div>

      <form
        class="flex flex-col items-center w-full"
        @submit="doLogin"
      >
        <input
          v-model="form.email"
          type="text"
          class="focus:outline-none my-5 border border-gray-200 px-3 py-2 rounded w-11/12"
          placeholder="Email"
        />

        <input
          v-model="form.password"
          type="password"
          class="focus:outline-none border border-gray-200 px-3 py-2 rounded w-11/12"
          placeholder="Password"
        />

        <button
          type="submit"
          class="bg-indigo-900 text-white px-6 py-3 rounded-3xl hover:bg-indigo-800 transition duration-200 each-in-out mt-5 w-11/12"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script src="./js/login-page.js" />
