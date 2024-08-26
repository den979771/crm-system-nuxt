<script lang="ts" setup>
import { useIsLoadingStore } from "~/store/auth.store";

useHead({
  title: "Login",
});

const emailRef = ref("");
const passwordRef = ref("");
const nameRef = ref("");

const isLoadingStore = useIsLoadingStore();
const router = useRouter();
</script>
<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

      <form>
        <Input
          placeholder="Email"
          type="email"
          class="mb-3"
          v-model="emailRef"
        />
        <Input
          placeholder="Password"
          type="password"
          class="mb-3"
          v-model="passwordRef"
        />
        <Input placeholder="Name" type="name" class="mb-3" v-model="nameRef" />
        <div class="flex items-center justify-center gap-5">
          <Button type="button">Login</Button>
          <Button type="button">Register</Button>
        </div>
      </form>
    </div>
  </div>
</template>
