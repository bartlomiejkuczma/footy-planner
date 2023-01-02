<script lang="ts">
	import { page, navigating } from '$app/stores';
	import { onMount } from 'svelte';

	let navItems = [
		{
			text: 'Location',
			href: '/location',
			icon: 'mdi:map-marker-multiple',
			active: false,
			styleClass: ''
		},
		{ text: 'How To Pay', href: '/how-to-pay', icon: 'bx:pound', active: false, styleClass: '' },
		{ text: 'Next Game', href: '/', icon: 'mdi:calendar-cursor', active: false, styleClass: '' },
		{
			text: 'Fixture Builder',
			href: '/fixture-builder',
			icon: 'game-icons:babyfoot-players',
			relativeActivePaths: ['/fixture-management'],
			active: false,
			styleClass: ''
		},
		{ text: 'More', href: '/more', icon: 'mdi:dots-vertical', active: false, styleClass: '' }
	];

	function updateRouteClasses(): void {
		let routeActiveSegment =
			$navigating == null ? $page.url.pathname : $navigating?.to?.url.pathname ?? '';

		navItems.forEach((item) => {
			item.active =
				item.href.length == 1
					? routeActiveSegment === item.href
					: routeActiveSegment.startsWith(item.href) ||
					  (item?.relativeActivePaths?.some((p) => routeActiveSegment.startsWith(p)) ?? false);
			item.styleClass = item.active ? 'font-bold text-grass-green' : '';
		});

		navItems = navItems;
	}

	onMount(async () => {
		updateRouteClasses();
	});

	$: if ($navigating) updateRouteClasses();
</script>

<nav class="sticky bottom-0">
	<ul class="flex justify-evenly bg-white text-slate-600">
		{#each navItems as navItem}
			<li class="flex flex-col items-center py-3 whitespace-nowrap {navItem.styleClass}">
				<iconify-icon class="text-2xl" icon={navItem.icon} />
				<a class="text-xs" href={navItem.href}>{navItem.text}</a>
			</li>
		{/each}
	</ul>
</nav>
