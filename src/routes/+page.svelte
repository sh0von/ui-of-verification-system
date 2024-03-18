<script>
	import { Button, Input, Label, Card } from 'flowbite-svelte';
</script>

<div class="border-b px-4 py-8 md:flex md:flex-row md:items-center md:justify-center">
	<div
		class="max-w-md border-b border-gray-300 py-8 pb-4 md:mb-0 md:mr-8 md:mt-4 md:border-b-0 md:border-r md:pb-0 md:pr-8"
	>
		<h1 class="mb-4 text-4xl font-semibold">Welcome to FLOW Duck</h1>
		<p class="mb-6 text-lg">Verify the authenticity of your product with FLOW Duck.</p>
		<Button size="lg">Get Started</Button>
	</div>

	<div class="max-w-md py-8">
		<Label>Enter Serial Number</Label>
		<Input
			type="text"
			id="serialNumber"
			name="serialNumber"
			class="my-4 mb-4 w-full rounded-l-lg border border-gray-300"
			placeholder="Enter serial number"
			required
		/>
		<Button color="purple" pill>Check</Button>
	</div>
</div>

<div
	class=" px-4 py-8 md:flex md:flex-row md:items-center md:justify-center"
>
	<div class="mx-auto max-w-3xl">
		<h2 class="mb-4 text-center text-3xl font-semibold">Featured Products</h2>
		<br />
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<Card>
				<p class="font-normal leading-tight text-gray-700 dark:text-gray-400 text-justify text-xl">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
					chronological order.
				</p>
			</Card>
			<Card>
				<p class="font-normal leading-tight text-gray-700 dark:text-gray-400 text-justify text-xl">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
					chronological order.
				</p>
			</Card>
			<Card>
				<p class="font-normal leading-tight text-gray-700 dark:text-gray-400 text-justify text-xl">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
					chronological order.
				</p>
			</Card>
		</div>
	</div>
</div>
