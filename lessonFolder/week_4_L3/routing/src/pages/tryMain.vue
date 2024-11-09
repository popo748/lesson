<template>
    <p v-color-on-hover="'blue'">hover me to change color </p>
    <p v-color-on-hover>this will turn red on hover</p>
    <br>
    <ul>
    <li v-highlight-on-click>click me to change color </li>
    <li v-highlight-on-click>click me to change color </li>
</ul>

    



</template>
<style>
.highlighted{
    background-color: aqua;
}
</style>