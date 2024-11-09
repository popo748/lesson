import { defineStore } from "pinia";
import { useApi } from "../composables/useApi";

interface Book {
  id?: number;
  title: string;
  author: string;
  published_year: number;
}

export const useBookStore = defineStore("bookStore", {
  state: () => ({
    books: [] as Book[],
  }),
  actions: {
    async fetchBooks(): Promise<Book[]> {
      try {
        const api = useApi();
        const response = await api.get("/books");
        this.books = response.data;
        return this.books;
      } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
      }
    },
    async saveBook(book: Book): Promise<void> {
      try {
        const api = useApi();
        if (book.id) {
          await api.put(`/books/${book.id}`, book);
        } else {
          await api.post("/books/create_book", book);
        }
      } catch (error) {
        console.error("Error saving book:", error);
        throw error;
      }
    },
    async deleteBook(bookId: number): Promise<void> {
      try {
        const api = useApi();
        await api.delete(`/books/${bookId}`);
      } catch (error) {
        console.error("Error deleting book:", error);
        throw error;
      }
    },
  },
});