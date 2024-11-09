<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn color="primary" @click="addBook">Add New Book</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="book in books"
        :key="book.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <BookCard :book="book" @edit="editBook" @delete="deleteBook" />
      </v-col>
    </v-row>

    <BookDialog
      v-if="dialog"
      :modelValue="dialog"
      :title="dialogTitle"
      :book="editedBook"
      @save="saveBook"
      @close="closeDialog"
    />
  </v-container>
</template>

<script>
import { useBookStore } from "../stores/bookStore";

export default {
  setup() {
    const bookStore = useBookStore();
    const books = ref([]);
    const dialog = ref(false);
    const dialogTitle = ref("Add New Book");
    const editedBook = ref({ title: "", author: "", published_year: null });

    onMounted(async () => {
      books.value = await bookStore.fetchBooks();
    });

    const addBook = () => {
      dialogTitle.value = "Add New Book";
      editedBook.value = { title: "", author: "", published_year: null };
      dialog.value = true;
    };

    const editBook = (book) => {
      dialogTitle.value = "Edit Book";
      editedBook.value = { ...book };
      dialog.value = true;
    };

    const saveBook = async (book) => {
      await bookStore.saveBook(book);
      books.value = await bookStore.fetchBooks();
      dialog.value = false;
    };

    const deleteBook = async (bookId) => {
      await bookStore.deleteBook(bookId);
      books.value = await bookStore.fetchBooks();
    };

    const closeDialog = () => {
      dialog.value = false;
    };

    return {
      books,
      dialog,
      dialogTitle,
      editedBook,
      addBook,
      editBook,
      saveBook,
      deleteBook,
      closeDialog,
    };
  },
};
</script>