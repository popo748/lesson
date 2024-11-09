<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn color="primary" @click="addItem">Add New Item</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="item in items"
        :key="item.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ItemCard :item="item" @edit="editItem" @delete="deleteItem" />
      </v-col>
    </v-row>

    <ItemDialog
      v-if="dialog"
      :modelValue="dialog"
      :title="dialogTitle"
      :item="editedItem"
      @save="saveItem"
      @close="closeDialog"
    />
  </v-container>
</template>

<script>
import { useItemStore } from "../stores/itemStore";

export default {
  setup() {
    const itemStore = useItemStore();
    const items = ref([]);
    const dialog = ref(false);
    const dialogTitle = ref("Add New Item");
    const editedItem = ref({ user: "", task: "", priority: null, date: "" });

    onMounted(async () => {
      items.value = await itemStore.fetchItems();
    });

    const addItem = () => {
      dialogTitle.value = "Add New Item";
      editedItem.value = { user: "", task: "", priority: null, date: "" };
      dialog.value = true;
    };

    const editItem = (item) => {
      dialogTitle.value = "Edit Item";
      editedItem.value = { ...item };
      dialog.value = true;
    };

    const saveItem = async (item) => {
      await itemStore.saveItem(item);
      items.value = await itemStore.fetchItems();
      dialog.value = false;
    };

    const deleteItem = async (itemId) => {
      await itemStore.deleteItem(itemId);
      items.value = await itemStore.fetchItems();
    };

    const closeDialog = () => {
      dialog.value = false;
    };

    return {
      items,
      dialog,
      dialogTitle,
      editedItem,
      addItem,
      editItem,
      saveItem,
      deleteItem,
      closeDialog,
    };
  },
};
</script>