<template>
    <div class="d-flex justify-center">
        <h1 class="mx-auto">To-Do-List</h1>
    </div>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field
                    v-model="newText"
                    label="Enter your text here"
                    outlined
                    @keyup.enter="saveText"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div
                    v-for="(savedText, index) in savedTexts"
                    :key="index"
                    class="d-flex align-center mb-2"
                >
                    <v-checkbox
                        v-model="savedTexts[index].completed"
                        class="mr-2"
                        hide-details
                    ></v-checkbox>
                    <div
                        class="d-flex align-center"
                        style="flex-grow: 1"
                    >
                        <span
                            v-if="!savedTexts[index].editing"
                            :class="{
                                'text-decoration-line-through':
                                    savedTexts[index].completed,
                            }"
                        >
                            {{ savedText.text }}
                        </span>
                        <v-text-field
                            v-else
                            v-model="savedTexts[index].text"
                            dense
                            hide-details
                            outlined
                            @blur="saveEdit(index)"
                        ></v-text-field>
                    </div>
                    <v-icon
                        v-if="!savedTexts[index].editing"
                        small
                        @click="edit(index)"
                        >mdi-pencil</v-icon
                    >
                    <v-icon
                        v-if="savedTexts[index].editing"
                        small
                        @click="cancelEdit(index)"
                        >mdi-close</v-icon
                    >
                    <v-icon
                        small
                        @click="removeText(index)"
                        >mdi-delete</v-icon
                    >
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            newText: "",
            savedTexts: [],
        };
    },
    methods: {
        saveText() {
            if (this.newText.trim() !== "") {
                this.savedTexts.push({
                    text: this.newText,
                    completed: false,
                    editing: false,
                });
                this.newText = "";
            }
        },
        edit(index) {
            this.savedTexts[index].editing = true;
        },
        saveEdit(index) {
            this.savedTexts[index].editing = false;
        },
        cancelEdit(index) {
            this.savedTexts[index].editing = false;
        },
        removeText(index) {
            this.savedTexts.splice(index, 1);
        },
    },
};
</script>
