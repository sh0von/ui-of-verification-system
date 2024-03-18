<script>
    import { Card, Input, Label, Button } from "flowbite-svelte";
</script>

<div class="border-b px-4 py-8 md:flex md:flex-row md:items-center md:justify-center">
    <div class="max-w-md border-b border-gray-300 py-8 pb-4 md:mb-0 md:mr-8 md:mt-4 md:border-b-0 md:border-r md:pb-0 md:pr-8">
        <h2 class="text-xl font-semibold mb-4">Product Details</h2>
        <p><strong>Product Name:</strong> XYZ</p>
        <p><strong>Serial Number:</strong> ABC123</p>
        <p><strong>Manufacturing Date:</strong> January 1, 2023</p>
        <p><strong>Verified:</strong> Yes</p>
    </div>

    <div class="max-w-md py-8">
        <div class="flex items-center mb-4">
            <svg class="w-8 h-8 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p class="text-lg text-green-500 font-semibold">Product Verified!</p>
        </div>
        <p class="text-lg text-gray-700">The authenticity of the product has been successfully verified.</p>
    </div>
</div>
