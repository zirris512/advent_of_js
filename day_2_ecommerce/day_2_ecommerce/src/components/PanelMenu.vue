<script setup>
    import { menuItems } from "../data";
</script>

<template>
    <div class="panel">
        <h1>To Go Menu</h1>
        <ul class="menu">
            <li v-for="item in menuItems" :key="item.name">
                <div class="plate">
                    <img :src="item.image" :alt="item.alt" class="plate" />
                </div>
                <div class="content">
                    <p class="menu-item">{{ item.name }}</p>
                    <p class="price">${{ item.price }}</p>
                    <button class="add">Add to Cart</button>
                    <!-- <button class="in-cart">
                            <img src="./images/check.svg" alt="Check" />
                            In Cart
                        </button> -->
                </div>
            </li>
        </ul>
    </div>
</template>
