<script setup>
const { cart } = defineProps(["cart"]);
const emits = defineEmits(["increaseCount", "decreaseCount"]);

const incrementCount = (item) => {
    emits("increaseCount", item);
};

const decrementCount = (item) => {
    emits("decreaseCount", item);
};
</script>

<template>
    <ul class="cart-summary">
        <li v-for="item in cart" :key="item.name">
            <div class="plate">
                <img :src="item.image" :alt="item.alt" class="plate" />
                <div class="quantity">{{ item.count }}</div>
            </div>
            <div class="content">
                <p class="menu-item">{{ item.name }}</p>
                <p class="price">${{ item.price }}</p>
            </div>
            <div class="quantity__wrapper">
                <button class="decrease" @click="decrementCount(item)">
                    <img src="images/chevron.svg" />
                </button>
                <div class="quantity">{{ item.count }}</div>
                <button class="increase" @click="incrementCount(item)">
                    <img src="images/chevron.svg" />
                </button>
            </div>
            <div class="subtotal">${{ item.subtotal.toFixed(2) }}</div>
        </li>
    </ul>
</template>
