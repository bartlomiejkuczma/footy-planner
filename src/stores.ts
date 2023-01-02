import { writable } from 'svelte/store';
import { GameStatuses } from './stores/enums/game-statuses';

export const headerTitle = writable('');
export const headerSubTitle = writable('');

export const gameStatus = writable(GameStatuses.NotConfirmed);

export const fixturePlanningPlayers = writable<PlayerState[]>([]);

export type PlayerState = {
	id: string;
	name: string;
};
