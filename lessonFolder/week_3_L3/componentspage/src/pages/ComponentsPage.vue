<template>
    <div>
        <CustomInput
            v-model="inputDataProperty"
            label="Some Label"
            type="text"
            appendIcons="mdi-check-circle-outline"
            color="green"
        />
    </div>
</template>
<script>
import CustomInput from "@/components/CustomInput.vue";

export default {
    components: {
        CustomInput,
    },
    data() {
        return {
            inputDataProperty: "",
        };
    },
};
</script>
