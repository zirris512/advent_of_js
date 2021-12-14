<script setup>
defineProps(["data"]);
const emits = defineEmits(["addToCart", "reset"]);

const showButton = (item) => {
    if (item.count > 0) {
        return false;
    }
    return true;
};

const addItem = (item) => {
    emits("addToCart", item);
};

const resetButton = (item) => {
    emits("reset", item);
};
</script>

<template>
    <div class="panel">
        <h1>To Go Menu</h1>
        <ul class="menu">
            <li v-for="(item, idx) in data" :key="item.name">
                <div class="plate">
                    <img :src="item.image" :alt="item.alt" class="plate" />
                </div>
                <div class="content">
                    <p class="menu-item">{{ item.name }}</p>
                    <p class="price">${{ item.price }}</p>
                    <button
                        class="add"
                        v-if="showButton(item)"
                        @click="addItem(item)"
                    >
                        Add to Cart
                    </button>
                    <button class="in-cart" v-else @click="resetButton(item)">
                        <img src="/images/check.svg" alt="Check" />
                        In Cart
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>
