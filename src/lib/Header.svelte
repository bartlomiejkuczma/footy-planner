<script lang="ts">
	import { page } from '$app/stores';
	import { headerTitle, headerSubTitle } from '../stores';

	$: isHomePage = $page.url.pathname === '/';
</script>

{#if isHomePage}
	<div class="flex flex-col items-center py-9 font-bold bg-white">
		<p class="text-2xl text-grass-green leading-none">Cotham</p>
		<p class="text-3xl text-deep-gold leading-none">Super League</p>
	</div>
{:else}
	<div class="flex flex-col p-4 bg-slate-50">
		<p class="text-lg font-bold text-grass-green">{$headerTitle}</p>
		<p class="text-sm font-light text-slate-700">{$headerSubTitle}</p>
	</div>
{/if}
