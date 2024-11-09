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
                <v-text-field v-model="itemData.user" label="User" required />
                <v-text-field v-model="itemData.task" label="Task" required />
                <v-text-field v-model="itemData.date" label="Date" required />
                <v-text-field
                  v-model.number="itemData.priority"
                  label="Priority"
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
          <v-btn color="blue darken-1" text @click="$emit('save', itemData)"
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
      item: {
        type: Object,
        required: true,
      },
    },
    emits: ["update:modelValue", "save", "close"],
    setup(props, { emit }) {
      const dialog = ref(props.modelValue);
      const itemData = ref({ ...props.item });
  
      watch(dialog, (newValue) => {
        emit("update:modelValue", newValue);
      });
  
      watch(
        () => props.item,
        (newItem) => {
          itemData.value = { ...newItem };
        }
      );
  
      onMounted(() => {
        itemData.value = { ...props.item };
      });
  
      const updateItemData = (field, value) => {
        itemData.value = { ...itemData.value, [field]: value };
      };
  
      return { dialog, itemData, updateItemData };
    },
  };
  </script>