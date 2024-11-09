<template>
    <v-text-field
        v-model="inputValue"
        :label="label"
        :type="type"
        :error-messages="errors"
        @input="$emit('input', inputValue)"
        @blur="$emit('blur')"
        width="500"
    >
        <template
            v-if="prependIcon"
            v-slot:prepend-inner
        >
            <v-icon>{{ prependIcon }}</v-icon>
        </template>
        <template
            v-if="appendIcon"
            v-slot:append-inner
        >
            <v-icon>{{ appendIcon }}</v-icon>
        </template>
    </v-text-field>
</template>
<script>
export default {
    name: "CustomerInput",
    props: {
        value: {
            type: [String, Number],
            default: "",
        },
        label: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "text",
        },
        prependIcon: {
            type: String,
            default: null,
        },
        appendIcon: {
            type: String,
            default: null,
        },
        rules: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            inputValue: this.value,
            errors: [],
        };
    },
    watch: {
        inputValue(newValue) {
            this.validateInput(newValue);
        },
        value(newValue) {
            this.inputValue = newValue;
        },
    },
    methods: {
        validateInput(value) {
            this.errors = [];
            this.rules.forEach((rule) => {
                // Use a regular function here
                if (!rule(value)) {
                    this.errors.push(rule.message || "Invalid input");
                }
            });
        },
    },
};
</script>
