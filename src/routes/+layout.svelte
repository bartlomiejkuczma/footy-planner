<script lang="ts">
	import '../app.css';
	import 'iconify-icon';
	import Navbar from '$lib/Navbar.svelte';
	import Header from '$lib/Header.svelte';
</script>

<div class="container h-screen flex flex-col">
	<Header />
	<div class="grow">
		<slot />
	</div>
	<Navbar />
</div>
