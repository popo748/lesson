<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="bookData.title" label="Title" required />
                <v-text-field v-model="bookData.author" label="Author" required />
                <v-text-field
                  v-model.number="bookData.published_year"
                  label="Published Year"
                  required
                  type="number"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('close')">Close</v-btn>
          <v-btn color="blue darken-1" text @click="$emit('save', bookData)"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: {
        type: Boolean,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      book: {
        type: Object,
        required: true,
      },
    },
    emits: ["update:modelValue", "save", "close"],
    setup(props, { emit }) {
      const dialog = ref(props.modelValue);
      const bookData = ref({ ...props.book });
  
      watch(dialog, (newValue) => {
        emit("update:modelValue", newValue);
      });
  
      watch(
        () => props.book,
        (newBook) => {
          bookData.value = { ...newBook };
        }
      );
  
      onMounted(() => {
        bookData.value = { ...props.book };
      });
  
      const updateBookData = (field, value) => {
        bookData.value = { ...bookData.value, [field]: value };
      };
  
      return { dialog, bookData, updateBookData };
    },
  };
  </script>