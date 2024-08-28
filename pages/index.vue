<script lang="ts" setup>
import { ICard, IColumn } from "~/components/kanban/kanban.types";

useSeoMeta({
  title: "HOME | CRM System",
});

const dragCardRef = ref<ICard | null>(null);
const sourceFromRef = ref<IColumn | null>(null);
</script>
<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM System by DEN979771</h1>
    <Card class="mb-3" draggable="true">
      <CardHeader role="button">Title</CardHeader>
      <CardContent>Hello world</CardContent>
      <CardFooter>Date</CardFooter>
    </Card>
  </div>
</template>
