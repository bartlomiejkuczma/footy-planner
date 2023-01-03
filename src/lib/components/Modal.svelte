<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatcher = createEventDispatcher();
	const closeModal = () => dispatcher('close');

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	const handle_keydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeModal();
			return;
		}
	};

	if (previously_focused) {
		onDestroy(() => {
			(previously_focused as HTMLElement)?.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<input type="checkbox" id="my-modal-6" class="modal-toggle" checked />
<div class="modal modal-bottom sm:modal-middle" role="dialog" aria-modal="true" transition:fade>
	<div class="modal-box bg-grass-green">
		<div class="w-full flex justify-center">
			<slot name="icon" />
		</div>
		<h3 class="font-bold text-sm text-white text-center">
			<slot name="title" />
		</h3>
		<p class="p-2">
			<slot name="body" />
		</p>
	</div>
</div>
