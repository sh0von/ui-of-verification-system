<script>
    import { Card, Input, Label, Button } from "flowbite-svelte";
</script>

<div class="flex flex-col p-8 items-center min-h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-6">
            <h2 class="text-xl font-semibold mb-4">Product Details</h2>
            <p class="mb-2"><strong>Product Name:</strong> XYZ</p>
            <p class="mb-2"><strong>Serial Number:</strong> ABC123</p>
            <p class="mb-2"><strong>Manufacturing Date:</strong> January 1, 2023</p>
            <p class="mb-2"><strong>Verified:</strong> Yes</p>
        </div>
        <div class="p-8 bg-gray-200">
            <div class="flex items-center mb-2">
                <svg class="w-8 h-8 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p class="text-lg text-green-500 font-semibold">Product Verified!</p>
            </div>
            <p class="text-lg text-gray-700">The authenticity of the product has been successfully verified.</p>
        </div>
    </div>
</div>
