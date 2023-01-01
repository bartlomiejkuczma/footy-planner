<script lang="ts">
	import '../app.css';
	import 'iconify-icon';
	import Navbar from '$lib/Navbar.svelte';
</script>

<div class="container h-screen flex flex-col">
	<div class="grow">
		<slot />
	</div>
	<Navbar />
</div>
