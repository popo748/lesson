<template>
    <v-text-field
        v-model="inputName"
        type="text"
        label="Name"
        width="600"
    ></v-text-field>
    <v-text-field
        v-model.number="inputAge"
        type="number"
        label="Age"
        width="600"
    ></v-text-field>
    <div>{{ greetingMessage }}</div>
</template>

<script>
export default {
    data() {
        return {
            inputName: "",
            inputAge: null,
            greetingMessage: "Hello Its Me",
        };
    },
    watch: {
        inputName(newName) {
            console.log(newName);
            if (newName && this.inputAge !== null) {
                this.greetingMessage = `hello ${newName}`;
            } else if (newName) {
                this.greetingMessage = `hello ${newName}`;
            } else {
                this.greetingMessage = `hello there`;
            }
        },
        inputAge(newAge) {
            console.log(newAge);
            if (this.inputName && newAge !== null) {
                this.greetingMessage = `hello ${this.inputName} you are ${newAge}`;
            } else if (this.inputName) {
                this.greetingMessage = `hello ${this.inputName}`;
            } else {
                this.greetingMessage = `hello there`;
            }
        },
    },
};
</script>
