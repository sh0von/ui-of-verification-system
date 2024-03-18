<script>
    import { Card, Input, Label, Button } from "flowbite-svelte";
</script>

<div class="flex flex-col p-8 items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-6">
            <h2 class="text-2xl font-semibold mb-4">Product Details</h2>
            <div class="mb-4">
                <Label>Product Name</Label>
                <p class="text-gray-700">XYZ</p>
            </div>
            <div class="mb-4">
                <Label>Serial Number</Label>
                <p class="text-gray-700">ABC123</p>
            </div>
            <div class="mb-4">
                <Label>Manufacturing Date</Label>
                <p class="text-gray-700">January 1, 2023</p>
            </div>
            <div class="mb-4">
                <Label>Verified</Label>
                <p class="text-green-500 font-semibold">Yes</p>
            </div>
        </div>
        <div class="p-6 bg-gray-200">
            <div class="flex items-center mb-4">
                <svg class="w-8 h-8 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p class="text-lg text-green-500 font-semibold">Product Verified!</p>
            </div>
            <p class="text-lg text-gray-700">The authenticity of the product has been successfully verified.</p>
        </div>
    </div>
</div>
