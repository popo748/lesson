import { defineStore } from "pinia";
import { useApi } from "../composables/useApi";

interface Item {
  id?: number;
  user: string;
  task: string;
  priority: number;
  date: string;

}

export const useItemStore = defineStore("itemStore", {
  state: () => ({
    items: [] as Item[],
  }),
  actions: {
    async fetchItems(): Promise<Item[]> {
      try {
        const api = useApi();
        const response = await api.get("/items");
        this.items = response.data;
        return this.items;
      } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
      }
    },
    async saveItem(item: Item): Promise<void> {
      try {
        const api = useApi();
        if (item.id) {
          await api.put(`/items/${item.id}`, item);
        } else {
          await api.post("/items/create_item", item);
        }
      } catch (error) {
        console.error("Error saving book:", error);
        throw error;
      }
    },
    async deleteItem(itemId: number): Promise<void> {
      try {
        const api = useApi();
        await api.delete(`/items/${itemId}`);
      } catch (error) {
        console.error("Error deleting book:", error);
        throw error;
      }
    },
  },
});