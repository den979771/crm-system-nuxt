<script lang="ts" setup>
import type { ICard, IColumn } from "~/components/kanban/kanban.types";
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery";
import CardDescription from "~/components/ui/card/CardDescription.vue";
import { convertCurrency } from "~/lib/convertCurrency";
import dayjs from "dayjs";
useSeoMeta({
  title: "HOME | CRM System",
});

const dragCardRef = ref<ICard | null>(null);
const sourceFromRef = ref<IColumn | null>(null);

const { data, isLoading, refetch } = useKanbanQuery();
</script>
<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM System by DEN979771</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div v-for="(column, index) in data" :key="column.id">
          <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
            {{ column.name }}
          </div>
          <div>
            <Card
              v-for="card in column.items"
              :key="card.id"
              class="mb-3"
              draggable="true"
            >
              <CardHeader role="button">
                <CardTitle>{{ card.name }}</CardTitle>
                <CardDescription class="mt-2 block">{{
                  convertCurrency(card.price)
                }}</CardDescription>
              </CardHeader>

              <CardContent class="text-sm"
                >Компания {{ card.companyName }}</CardContent
              >
              <CardFooter>{{
                dayjs(card.$createdAt).format("DD MMMM YYYY")
              }}</CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
