<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { headerTitle, headerSubTitle, fixturePlanningPlayers } from '@stores';

	const MIN_PLAYERS_PER_GAME = 6;

	headerTitle.set('Fixture Management');
	headerSubTitle.set('Data selection is automatically saved');

	let stateMap = {
		submitPlayersEnabled: false,
		showNoPlayersText: true,
		activeEditPlayer: ''
	};

	let visibilityMap = {
		addPlayerActions: '',
		addPlayerPopup: 'translate-y-48',
		editPlayerPopup: 'translate-y-48',
		playerListHeightOffset: 'mb-20',
		submitPlayersAction: 'btn-secondary'
	};

	function openAddPlayerPopup() {
		visibilityMap = {
			...visibilityMap,
			addPlayerActions: 'translate-y-48',
			addPlayerPopup: '',
			editPlayerPopup: 'translate-y-48',
			playerListHeightOffset: 'mb-[8.75rem]'
		};
	}

	function closeAddPlayerPopup() {
		visibilityMap = {
			...visibilityMap,
			addPlayerActions: '',
			addPlayerPopup: 'translate-y-48',
			editPlayerPopup: 'translate-y-48',
			playerListHeightOffset: 'mb-20'
		};
	}

	function openEditPlayerPopup() {
		visibilityMap = {
			...visibilityMap,
			addPlayerActions: 'translate-y-48',
			addPlayerPopup: 'translate-y-48',
			editPlayerPopup: '',
			playerListHeightOffset: 'mb-[8.75rem]'
		};
	}

	function closeEditPlayerPopup() {
		visibilityMap = {
			...visibilityMap,
			addPlayerActions: '',
			addPlayerPopup: 'translate-y-48',
			editPlayerPopup: 'translate-y-48',
			playerListHeightOffset: 'mb-20'
		};
	}

	function updateSubmitState() {
		stateMap = {
			...stateMap,
			submitPlayersEnabled: $fixturePlanningPlayers.length > MIN_PLAYERS_PER_GAME - 1
		};

		visibilityMap = {
			...visibilityMap,
			submitPlayersAction: stateMap.submitPlayersEnabled ? 'btn-primary' : 'btn-secondary'
		};
	}

	function onPlayerSelect(id: string) {
		stateMap.activeEditPlayer = id;

		openEditPlayerPopup();
	}

	function onPlayerAddClear(e: Event) {
		closeAddPlayerPopup();

		const htmlForm = e.target as HTMLFormElement;
		htmlForm.reset();
	}

	function onPlayerAdd(e: Event) {
		const htmlForm = e.target as HTMLFormElement;
		const formData = new FormData(htmlForm);
		const playerName = formData.get('name');

		if (playerName && playerName.toString().length > 0) {
			fixturePlanningPlayers.set([
				...$fixturePlanningPlayers,
				{ name: playerName.toString(), id: uuidv4() }
			]);

			closeAddPlayerPopup();
			updateSubmitState();

			htmlForm.reset();
		}
	}

	function onPlayerEdit(e: Event) {
		const htmlForm = e.target as HTMLFormElement;
		const formData = new FormData(htmlForm);
		const playerName = formData.get('name');

		if (playerName && playerName.toString().length > 0) {
			let playerEditIndex = $fixturePlanningPlayers.findIndex((p) => p.id === stateMap.activeEditPlayer);

			if (playerEditIndex > -1) {
				let newState = [...$fixturePlanningPlayers];
				newState[playerEditIndex] = { ...$fixturePlanningPlayers[playerEditIndex], name: playerName.toString() }

				fixturePlanningPlayers.set(newState);
			}
		}

		closeEditPlayerPopup();

		htmlForm.reset();
	}

	function onPlayerDelete() {
		fixturePlanningPlayers.set(
			$fixturePlanningPlayers.filter((p) => p.id !== stateMap.activeEditPlayer)
		);
		stateMap.activeEditPlayer = '';

		closeEditPlayerPopup();
	}
</script>

<div class="flex flex-col grow text-slate-600 relative overflow-y-hidden">
	<h2 class="text-2xl pb-2 font-bold">Players</h2>

	{#if $fixturePlanningPlayers.length === 0}
		<h4 class="text-sm font-normal pb-4 text-center">
			No players currently considered for the fixture
		</h4>
	{/if}

	<div
		class="grow overflow-y-auto {visibilityMap.playerListHeightOffset} transition-spacing duration-200 ease-in-out"
	>
		<ul class="grid grid-cols-2 gap-x-4 gap-y-2">
			{#each $fixturePlanningPlayers as player}
				<li id={player.id} class="basis-1/2">
					<button
						class="btn btn-block btn-secondary no-animation"
						on:click={() => onPlayerSelect(player.id)}>{player.name}</button
					>
				</li>
			{/each}
		</ul>
	</div>

	<div
		class="absolute bottom-0 right-0 flex gap-4 transition duration-200 ease-in-out {visibilityMap.addPlayerActions}"
	>
		<button
			class="btn btn-circle text-white {visibilityMap.submitPlayersAction}"
			disabled={!stateMap.submitPlayersEnabled}
		>
			<iconify-icon class="text-2xl" icon="material-symbols:arrow-forward" />
		</button>
		<button class="btn btn-accent btn-circle text-white" on:click={openAddPlayerPopup}>
			<iconify-icon class="text-2xl" icon="ic:baseline-plus" />
		</button>
	</div>

	<div class="absolute bottom-0 transition duration-200 ease-in-out {visibilityMap.addPlayerPopup}">
		<h2 class="text-sm font-bold text-slate-600 pb-2">Add Player</h2>
		<div class="card bg-slate-50">
			<div class="card-body p-4">
				<form on:submit|preventDefault={onPlayerAdd} on:reset={onPlayerAddClear}>
					<fieldset class="flex gap-4">
						<div>
							<label for="name" class="block text-xs leading-tight">
								<span class="">Name</span>
							</label>
							<input
								name="name"
								type="text"
								class="block input-sm bg-transparent outline-none pl-0 border-b h-8 w-full font-bold"
							/>
						</div>
						<button class="btn btn-error btn-square" type="reset">
							<iconify-icon class="text-2xl" icon="mdi:bin" />
						</button>
						<button class="btn btn-primary btn-square" type="submit">
							<iconify-icon class="text-2xl" icon="mdi:tick" />
						</button>
					</fieldset>
				</form>
			</div>
		</div>
	</div>

	<div
		class="absolute bottom-0 transition duration-200 ease-in-out w-full {visibilityMap.editPlayerPopup}"
	>
		<div class="flex align-bottom">
			<h2 class="text-sm font-bold text-slate-600 pb-2">Edit Player</h2>
			<button class="btn btn-link min-h-min h-5 text-error font-bold" on:click={onPlayerDelete}
				>Remove</button
			>
		</div>
		<div class="card bg-slate-50">
			<div class="card-body p-4">
				<form on:submit|preventDefault={onPlayerEdit}>
					<fieldset class="flex gap-4">
						<div class="w-full">
							<label for="name" class="block text-xs leading-tight">
								<span class="">Name</span>
							</label>
							<input
								name="name"
								type="text"
								class="block input-sm bg-transparent outline-none pl-0 border-b h-8 w-full font-bold"
							/>
						</div>
						<button class="btn btn-primary btn-square" type="submit">
							<iconify-icon class="text-2xl" icon="mdi:tick" />
						</button>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
</div>
