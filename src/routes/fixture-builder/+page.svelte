<script lang="ts">
	import { goto } from '$app/navigation';
	import { GameStatuses } from '@stores/enums/game-statuses';
	import { headerTitle, headerSubTitle, gameStatus } from '@stores';

	headerTitle.set('Fixture Builder');
	headerSubTitle.set('Manage games for different types of fixtures');

	function routeToEditPage() {
		goto('/fixture-builder/edit');
	}

	function confirmFixture() {
		gameStatus.set(GameStatuses.Confirmed);
		goto('/fixture-management');
	}
</script>

<div class="mt-auto">
	<h2 class="text-lg font-bold text-slate-600">Proposed Fixture Slot</h2>
	<h4 class="text-xs font-normal text-slate-600">According to your defined fixture schedule</h4>
</div>
<div class="card items-center px-4 py-6 bg-grass-green text-slate-50">
	<h2 class="card-title font-normal text-sm pb-4">Sun 1 Jan 2023</h2>
	<div class="card-body flex flex-row items-center justify-evenly p-0">
		<iconify-icon class="text-6xl text-slate-900" icon="ion:shirt" />
		<p class="font-bold text-2xl px-4">18:00</p>
		<iconify-icon class="text-6xl" icon="ion:shirt" />
	</div>
</div>
<div class="flex gap-8">
	<button class="btn btn-secondary basis-0 grow" on:click={routeToEditPage}>Edit</button>
	<button class="btn btn-primary basis-0 grow" on:click={confirmFixture}>Confirm</button>
</div>
