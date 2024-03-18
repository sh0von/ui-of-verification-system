<script>
    import { onMount } from 'svelte';
    import { Button, Input, Label, Card } from 'flowbite-svelte';
    import { goto } from '$app/navigation';
    import { selectedProduct } from '../lib/stores'; // Importing the selectedProduct store

    let serialNumber = ''; // Declaring serialNumber variable

    const products = [
        {
            name: 'Test 1',
            serialNumber: 'ABC123',
            manufacturingDate: 'January 1, 2023',
            verified: true,
        },
        {
            name: 'Product 2',
            serialNumber: 'DEF456',
            manufacturingDate: 'February 15, 2023',
            verified: false,
        },
        {
            name: 'Product 3',
            serialNumber: 'GHI789',
            manufacturingDate: 'March 30, 2023',
            verified: true,
        },
    ];
    const checkSerialNumber = () => {
    const serialNumberLowercase = serialNumber.toLowerCase(); // Convert input serial number to lowercase
    const product = products.find(item => item.serialNumber.toLowerCase() === serialNumberLowercase); // Convert serial numbers in the products to lowercase for comparison
    if (product) {
        selectedProduct.set(product); // Set the selected product in the store
        if (product.verified) {
            goto('/verified');
        } else {
            goto('/fake');
        }
    } else {
        // Handle invalid serial number
        console.log('Product not found!');
        goto('/fake');
    }
};


    // Function to handle button click
    const handleClick = () => {
        checkSerialNumber();
    };

    // Function to handle Enter key press
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            checkSerialNumber();
        }
    };

    // Automatically focuses on the input field when the component mounts
    onMount(() => {
        document.getElementById('serialNumber').focus();
    });
</script>

<div class="border-b px-4 py-8 md:flex md:flex-row md:items-center md:justify-center">
    <div class="max-w-md border-b border-gray-300 py-8 pb-4 md:mb-0 md:mr-8 md:mt-4 md:border-b-0 md:border-r md:pb-0 md:pr-8">
        <h1 class="mb-4 text-4xl font-semibold">Welcome to FLOW Duck</h1>
        <p class="mb-6 text-lg">Verify the authenticity of your product with FLOW Duck.</p>
        <Button size="lg">Get Started</Button>
    </div>

    <div class="max-w-md py-8">
        <Label>Enter Serial Number</Label>
        <Input
            bind:value={serialNumber} 
            type="text"
            id="serialNumber"
            name="serialNumber"
            class="my-4 mb-4 w-full rounded-l-lg border border-gray-300"
            placeholder="Enter serial number"
            required
            on:keypress={handleKeyPress}
        />
        <Button color="purple" pill on:click={handleClick}>Check</Button>
    </div>
</div>
<div class="px-4 py-8 md:flex md:flex-row md:items-center md:justify-center">
    <div class="mx-auto max-w-3xl">
        <h2 class="mb-4 text-center text-3xl font-semibold">Featured Products</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            {#each products.slice(0, 3) as product}
                <Card class="bg-white shadow-lg rounded-lg overflow-hidden">
                      <div class="p-4">
                        <h3 class="mb-2 text-xl font-semibold">{product.name}</h3>
                        <p class="text-gray-600 mb-2"><strong>Manufacturing Date:</strong> {product.manufacturingDate}</p>
                        <p class="text-gray-600"><strong>Verified:</strong> {product.verified ? 'Yes' : 'No'}</p>
                    </div>
                </Card>
            {/each}
        </div>
    </div>
</div>
