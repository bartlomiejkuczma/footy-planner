<script lang="ts">
	import { goto } from '$app/navigation';
	import { headerTitle, headerSubTitle } from '../../../stores';

	headerTitle.set('Fixture Builder');
	headerSubTitle.set('Manage games for different types of fixtures');

	function cancelFixture() {
		goto('/fixture-builder');
	}
</script>

<div class="mt-auto">
	<h2 class="text-lg font-bold text-slate-600">Custom Fixture Slot</h2>
	<h4 class="text-xs font-normal text-slate-600">Edited to your demands</h4>
</div>

<div class="card items-center px-4 py-6 bg-grass-green text-slate-50">
	<h2 class="card-title font-normal text-sm pb-4">Sun 1 Jan 2023</h2>
	<div class="card-body flex flex-row items-center justify-evenly p-0">
		<iconify-icon class="text-6xl text-slate-900" icon="ion:shirt" />
		<p class="font-bold text-2xl px-4">18:00</p>
		<iconify-icon class="text-6xl" icon="ion:shirt" />
	</div>
</div>

<form novalidate>
	<fieldset>
		<div class="form-control w-full">
			<label for="date" class="label">
				<span class="label-text">Date</span>
			</label>
			<input
				name="date"
				type="text"
				placeholder="Sun 1 Jan 2023"
				class="input input-bordered w-full font-bold"
			/>
		</div>
		<div class="form-control w-full">
			<label for="date" class="label">
				<span class="label-text">Start Time</span>
			</label>
			<input
				name="date"
				type="text"
				placeholder="18:00"
				class="input input-bordered w-full font-bold"
			/>
		</div>
	</fieldset>
</form>

<div>
	<h4 class="text-sm text-slate-600">Home Side Colour</h4>
	<div class="flex pt-4 justify-evenly">
		<iconify-icon class="text-6xl text-slate-900 bg-deep-gold rounded-md p-2" icon="ion:shirt" />
		<iconify-icon class="text-6xl text-white bg-deep-gold rounded-md p-2" icon="ion:shirt" />
		<iconify-icon class="text-6xl text-red-600 bg-deep-gold rounded-md p-2" icon="ion:shirt" />
		<iconify-icon class="text-6xl text-blue-600 bg-deep-gold rounded-md p-2" icon="ion:shirt" />
	</div>
</div>

<div>
	<h4 class="text-sm text-slate-600">Away Side Colour</h4>
	<div class="flex pt-4 justify-evenly">
		<iconify-icon class="text-6xl text-slate-900 bg-deep-gold rounded-md p-2" icon="ion:shirt" />
		<iconify-icon class="text-6xl text-white bg-deep-gold rounded-md p-2" icon="ion:shirt" />
		<iconify-icon class="text-6xl text-red-600 bg-deep-gold rounded-md p-2" icon="ion:shirt" />
		<iconify-icon class="text-6xl text-blue-600 bg-deep-gold rounded-md p-2" icon="ion:shirt" />
	</div>
</div>

<div class="flex gap-8">
	<button class="btn btn-error basis-0 grow" on:click={cancelFixture}>Cancel Fixture</button>
	<button class="btn btn-primary basis-0 grow">Confirm</button>
</div>
