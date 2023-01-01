<script lang="ts">
	import '../app.css';
	import 'iconify-icon';
	import Navbar from '$lib/Navbar.svelte';
	import Header from '$lib/Header.svelte';
</script>

<div class="container h-screen flex flex-col">
	<Header />
	<div class="flex flex-col grow p-4 gap-y-4 bg-slate-200">
		<slot />
	</div>
	<Navbar />
</div>
