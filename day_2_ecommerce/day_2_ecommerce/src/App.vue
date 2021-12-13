<script setup>
    import "./styles.css";
    import PanelMenu from "./components/PanelMenu.vue";
    import PanelCart from "./components/PanelCart.vue";
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
    <div class="wrapper menu">
        <panel-menu />
        <panel-cart />
    </div>
</template>
