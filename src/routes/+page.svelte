<script>
    import { A, TextPlaceholder, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input, Footer, FooterBrand, FooterLinkGroup, FooterLink, FooterCopyright, Label } from 'flowbite-svelte';
</script>

<style>
    .footer-container {
        padding: 40px 20px; 
    }
</style>

<div style="min-height: 100vh;" class="bg-gray-100">
    <Navbar class="bg-gray-200 border-b border-gray-600">
        <NavBrand href="/">
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FLOW Duck</span>
        </NavBrand>
        <div class="flex md:order-2">
            <Button size="sm">Verify Product</Button>
            <NavHamburger />
        </div>
        <NavUl class="order-1">
            <NavLi href="/" active={true}>Home</NavLi>
            <NavLi href="/">About</NavLi>
            <NavLi href="/">Navbar</NavLi>
            <NavLi href="/">Contact</NavLi>
        </NavUl>
    </Navbar>

    <div class="py-8 px-4 md:flex md:flex-row md:items-center md:justify-center border-b ">
        <div class="max-w-md md:mr-8 md:mb-0 md:mt-4 py-8 border-b md:border-b-0 md:border-r border-gray-300 md:pr-8 pb-4 md:pb-0">
            <h1 class="text-4xl font-semibold mb-4">Welcome to FLOW Duck</h1>
            <p class="text-lg mb-6">Verify the authenticity of your product with FLOW Duck.</p>
            <Button size="lg">Get Started</Button>
        </div>

        <div class="max-w-md py-8">
            <Label>Enter Serial Number</Label>
            <Input type="text" id="serialNumber" name="serialNumber" class="border mb-4 my-4 border-gray-300 rounded-l-lg w-full" placeholder="Enter serial number" required />
            <Button color="purple" pill>Check</Button>
        </div>
    </div>  

    <div class="py-8 px-4 md:flex md:flex-row md:items-center md:justify-center border-b border-gray-700">
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-semibold mb-4 text-center">Featured Products</h2>
            <br>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white rounded-lg shadow-md p-4">
                    <h3 class="text-xl font-semibold mb-2">Product Name 1</h3>
                    <p class="text-gray-600 mb-4">Description of Product 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-4">
                    <h3 class="text-xl font-semibold mb-2">Product Name 1</h3>
                    <p class="text-gray-600 mb-4">Description of Product 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-4">
                    <h3 class="text-xl font-semibold mb-2">Product Name 1</h3>
                    <p class="text-gray-600 mb-4">Description of Product 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer-container bg-gray-200 mt-auto">
        <Footer footerType="logo ">
            <div class="sm:flex sm:items-center sm:justify-between">
                <FooterBrand href="/" name="FLOW Duck" />
                <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <FooterLink href="/">About</FooterLink>
                    <FooterLink href="/">Privacy Policy</FooterLink>
                    <FooterLink href="/">Licensing</FooterLink>
                    <FooterLink href="/">Contact</FooterLink>
                </FooterLinkGroup>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <FooterCopyright href="/" by="Flowbite™" />
        </Footer>
    </div>
</div>
