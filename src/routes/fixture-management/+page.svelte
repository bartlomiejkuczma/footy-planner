<script lang="ts">
	import { headerTitle, headerSubTitle } from '@stores';

	headerTitle.set('Fixture Management');
	headerSubTitle.set('Data selection is automatically saved');
</script>

<div class="flex flex-col grow text-slate-600">
	<h2 class="text-2xl font-bold">Players</h2>
	<h4 class="text-sm font-normal p-4 text-center">
		No players currently considered for the fixture
	</h4>
	<div class="flex gap-4 justify-end mt-auto">
		<button class="btn btn-accent btn-circle text-white">
			<iconify-icon class="text-2xl" icon="ic:baseline-plus" />
		</button>
		<button class="btn btn-secondary btn-circle text-white">
			<iconify-icon class="text-2xl" icon="material-symbols:arrow-forward" />
		</button>
	</div>
</div>
