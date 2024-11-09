<template>
    <div :style="[baseStyle, { color: textColor, fontSize: fontSize + 'px' }]">
        Dynamic Style Binding
    </div>
    <input
        v-model="textColor"
        placeholder="Enter Text Color"
    />
    <input
        v-model="fontSize"
        placeholder="Enter Font Size"
    />
</template>
<script>
export default {
    data() {
        return {
            isActive: false,
            isError: false,
            textColor: "black",
            fontSize: 16,
            baseStyle: {
                padding: "10px",
                border: "1px solid #ccc",
            },
        };
    },
};
</script>
