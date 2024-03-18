<script>
    import { Card } from "flowbite-svelte";
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <svg class="w-24 h-24 text-red-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
    <h2 class="text-3xl font-semibold text-gray-900 mb-4">Product Not Verified</h2>
    <p class="text-lg text-gray-700 text-center mb-8">We're sorry, but the authenticity of the product could not be verified. Please try again or contact support for assistance.</p>
    <button class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">Retry Verification</button>
</div>
