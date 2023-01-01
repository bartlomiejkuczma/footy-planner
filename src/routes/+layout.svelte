<script lang="ts">
	import '../app.css';
	import 'iconify-icon';
	import Navbar from '$lib/Navbar.svelte';
	import Header from '$lib/Header.svelte';
</script>

<div class="container h-screen flex flex-col">
	<Header />
	<div id="content" class="flex flex-col p-4 gap-y-4 overflow-y-auto bg-slate-200">
		<slot />
	</div>
	<Navbar />
</div>

<style>
	#content {
		height: calc(100% - 64px - 80px);
	}
</style>
