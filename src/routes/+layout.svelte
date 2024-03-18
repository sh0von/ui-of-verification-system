<script>
	import '../app.pcss';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Footer,
		FooterBrand,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright
	} from 'flowbite-svelte';
</script>

<Navbar class="bg-gray-0 border-b border-gray-600">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>FLOW Duck</span
		>
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

<slot />
<div class="footer-container bg-gray-0 mt-auto border-t border-gray-600">
	<Footer footerType="logo ">
		<div class="sm:flex sm:items-center sm:justify-center">
			<FooterBrand href="/" name="FLOW Duck" />
		</div>
	</Footer>
</div>

<style>
	.footer-container {
		padding: 40px 20px;
	}
</style>
