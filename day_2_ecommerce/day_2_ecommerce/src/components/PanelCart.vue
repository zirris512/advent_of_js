<script setup>
import { computed, ref, watch } from "vue";
import CartSummary from "./CartSummary.vue";
import CartTotals from "./CartTotals.vue";

const { data } = defineProps(["data"]);
const emits = defineEmits(["increaseCount", "decreaseCount"]);
const cart = ref([]);
const cartSubtotals = ref(0);

const increaseCartCount = (item) => {
    emits(
        "increaseCount",
        data.find((val) => val.name === item.name)
    );
};

const decreaseCartCount = (item) => {
    emits(
        "decreaseCount",
        data.find((val) => val.name === item.name)
    );
};

watch(data, () => {
    cart.value = [];
    data.forEach((item) => {
        if (item.count > 0) {
            cart.value.push({ ...item, subtotal: item.price * item.count });
        }
    });
    cartSubtotals.value = cart.value.reduce(
        (prevItem, currItem) => prevItem + currItem.subtotal,
        0
    );
});

const isEmpty = computed(() => cart.value.length === 0);
</script>

<template>
    <div class="panel cart">
        <h1>Your Cart</h1>
        <p class="empty" v-if="isEmpty">Your cart is empty.</p>

        <cart-summary
            :cart="cart"
            @decreaseCount="decreaseCartCount"
            @increaseCount="increaseCartCount"
            v-else
        />
        <cart-totals :subtotals="cartSubtotals" />
    </div>
</template>
