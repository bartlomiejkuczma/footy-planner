import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import { gameStatus } from '@stores';
import { GameStatuses } from '@stores/enums/game-statuses';

/** @type {import('./$types').PageLoad} */
export function load() {
	if (get(gameStatus) === GameStatuses.Confirmed) {
		goto('/fixture-management');
	}
}
