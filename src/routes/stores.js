// stores.js
import { writable } from 'svelte/store';

// Define a writable store for managing the selected product
export const selectedProduct = writable({});
