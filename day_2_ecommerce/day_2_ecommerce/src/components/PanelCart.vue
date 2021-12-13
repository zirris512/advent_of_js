<script setup>
    import CartSummary from "./CartSummary.vue";
    import CartTotals from "./CartTotals.vue";
</script>

<template>
    <div class="panel cart">
        <h1>Your Cart</h1>
        <!-- <p class="empty">Your cart is empty.</p> -->

        <cart-summary />
        <cart-totals />
    </div>
</template>
