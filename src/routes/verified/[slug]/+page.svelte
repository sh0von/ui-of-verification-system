<script>
    // Import necessary modules
    import { page } from "$app/stores";
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { Label, Spinner } from 'flowbite-svelte';

    // Define the products array
    const products = [
        {
            name: 'Test 1',
            serialNumber: 'ABC123',
            manufacturingDate: 'January 1, 2023',
            verified: true
        },
        {
            name: 'Product 2',
            serialNumber: 'DEF456',
            manufacturingDate: 'February 15, 2023',
            verified: false
        },
        {
            name: 'Product 3',
            serialNumber: 'GHI789',
            manufacturingDate: 'March 30, 2023',
            verified: true
        }
    ];

    let selectedProduct; // Declare a variable to store the selected product

    // Function to fetch product details based on the slug
    const fetchProductDetails = () => {
        // Find the product with the matching serial number (slug)
        selectedProduct = products.find(item => item.serialNumber === $page.params.slug);
        
        // If no product with the matching serial number is found, redirect to the home page
        if (!selectedProduct) {
            goto('/fake');
        }
    };

    // Call the fetchProductDetails function when the component mounts
    onMount(() => {
        fetchProductDetails();
    });
</script>
<div class="flex flex-col p-8 items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-6">
            
{#if selectedProduct}

<h2 class="text-2xl font-semibold mb-4">Product Details</h2>
                <div class="mb-4">
                    <Label>Product Name</Label>
                    <p class="text-gray-700">{ selectedProduct.name }</p>
                </div>
                <div class="mb-4">
                    <Label>Serial Number</Label>
                    <p class="text-gray-700">{ selectedProduct.serialNumber }</p>
                </div>
                <div class="mb-4">
                    <Label>Manufacturing Date</Label>
                    <p class="text-gray-700">{ selectedProduct.manufacturingDate }</p>
                </div>
                <div class="mb-4">
                    <Label>Verified</Label>
                    <p class="text-green-500 font-semibold">{ selectedProduct.verified ? 'Yes' : 'No' }</p>
                </div>
                {:else}
                <div class="text-center p-8"><Spinner  color="purple" size={8}/></div>
                {/if}
        </div>
        {#if selectedProduct}
        <div class="p-6 bg-gray-200">
            <div class="flex items-center mb-4">
                <svg class="w-8 h-8 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p class="text-lg text-green-500 font-semibold">Product Verified!</p>
            </div>
            <p class="text-lg text-gray-700">The authenticity of the product has been successfully verified.</p>
        </div>

        {:else}
        <div class="text-center p-8"><Spinner  color="purple" size={8}/></div>
        {/if}
    </div>
</div>
