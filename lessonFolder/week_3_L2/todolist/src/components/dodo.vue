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
                    v-if="savedTexts.length > 0"
                    class="mb-4"
                >
                    <strong>Completion Progress:</strong>
                    {{ completionPercentage }}%
                    <v-progress-linear
                        v-model="completionPercentage"
                        color="success"
                        height="20"
                    ></v-progress-linear>
                </div>
                <div
                    v-for="(savedText, index) in sortedTexts"
                    :key="savedText.id"
                    class="d-flex align-center mb-2 todo-item"
                    :class="{ pinned: savedText.pinned }"
                >
                    <v-checkbox
                        v-model="savedText.completed"
                        class="mr-2"
                        hide-details
                    ></v-checkbox>
                    <div
                        class="d-flex align-center"
                        style="flex-grow: 1"
                    >
                        <span
                            v-if="!savedText.editing"
                            :class="{
                                'text-decoration-line-through':
                                    savedText.completed,
                            }"
                        >
                            {{ savedText.text }}
                        </span>
                        <v-text-field
                            v-else
                            v-model="savedText.text"
                            dense
                            hide-details
                            outlined
                            @blur="saveEdit(savedText)"
                        ></v-text-field>
                    </div>
                    <v-icon
                        :color="savedText.pinned ? 'green' : 'white'"
                        small
                        @click="togglePin(savedText)"
                    >
                        mdi-pin
                    </v-icon>
                    <v-icon
                        v-if="!savedText.editing"
                        small
                        @click="edit(savedText)"
                        >mdi-pencil</v-icon
                    >
                    <v-icon
                        v-if="savedText.editing"
                        small
                        @click="cancelEdit(savedText)"
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
            nextId: 1,
        };
    },
    computed: {
        sortedTexts() {
            return [...this.savedTexts].sort((a, b) => {
                if (a.pinned === b.pinned) return 0;
                return a.pinned ? -1 : 1;
            });
        },
        completionPercentage() {
            if (this.savedTexts.length === 0) return 0;
            const completedTasks = this.savedTexts.filter(
                (task) => task.completed
            ).length;
            const percentage = (completedTasks / this.savedTexts.length) * 100;
            return Math.round(percentage);
        },
    },
    methods: {
        saveText() {
            if (this.newText.trim() !== "") {
                this.savedTexts.push({
                    id: this.nextId++,
                    text: this.newText,
                    completed: false,
                    editing: false,
                    pinned: false,
                });
                this.newText = "";
            }
        },
        edit(item) {
            item.editing = true;
        },
        saveEdit(item) {
            item.editing = false;
        },
        cancelEdit(item) {
            item.editing = false;
        },
        removeText(index) {
            this.savedTexts.splice(index, 1);
        },
        togglePin(item) {
            item.pinned = !item.pinned;
        },
    },
};
</script>

<style scoped>
.todo-item {
    border: 2px solid transparent;
    border-radius: 4px;
    padding: 8px;
    transition: all 0.3s ease;
}

.todo-item.pinned {
    border-color: green;
}
</style>
