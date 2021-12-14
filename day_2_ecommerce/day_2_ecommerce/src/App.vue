<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive } from "vue";
import "./styles.css";
import PanelMenu from "./components/PanelMenu.vue";
import PanelCart from "./components/PanelCart.vue";
import { menuItems } from "./data";

const menuData = reactive(menuItems);

const increaseCount = (item) => {
    item.count++;
};

const decreaseCount = (item) => {
    item.count--;
};
</script>

<template>
    <div class="wrapper menu">
        <panel-menu :data="menuData" @addToCart="increaseCount" />
        <panel-cart
            :data="menuData"
            @increaseCount="increaseCount"
            @decreaseCount="decreaseCount"
        />
    </div>
</template>
