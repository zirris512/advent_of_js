<script setup>
import { ref, watch, toRef } from "vue";

const props = defineProps(["subtotals"]);
const subtotalRef = toRef(props, "subtotals");

const subtotal = ref(0);
const tax = ref(0);
const total = ref(0);

watch(subtotalRef, () => {
    subtotal.value = subtotalRef.value;
    tax.value = subtotal.value * 0.075;
    total.value = subtotal.value + tax.value;
});
</script>

<template>
    <div class="totals">
        <div class="line-item">
            <div class="label">Subtotal:</div>
            <div class="amount price subtotal">${{ subtotal.toFixed(2) }}</div>
        </div>
        <div class="line-item">
            <div class="label">Tax:</div>
            <div class="amount price tax">${{ tax.toFixed(2) }}</div>
        </div>
        <div class="line-item total">
            <div class="label">Total:</div>
            <div class="amount price total">${{ total.toFixed(2) }}</div>
        </div>
    </div>
</template>
