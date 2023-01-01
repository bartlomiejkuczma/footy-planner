<script lang="ts">
	let navItems = [
		{ text: 'Location', href: '/', icon: 'mdi:map-marker-multiple' },
		{ text: 'How To Pay', href: '/', icon: 'bx:pound' },
		{ text: 'Next Game', href: '/', icon: 'mdi:calendar-cursor' },
		{ text: 'Fixture Builder', href: '/', icon: 'game-icons:babyfoot-players' },
		{ text: 'More', href: '/', icon: 'mdi:dots-vertical' }
	];
</script>

<nav>
	<ul class="flex justify-evenly bg-slate-50 text-slate-600">
		{#each navItems as navItem}
			<li class="flex flex-col items-center py-3 whitespace-nowrap">
				<iconify-icon class="text-2xl" icon={navItem.icon} />
				<a class="text-xs" href={navItem.href}>{navItem.text}</a>
			</li>
		{/each}
	</ul>
</nav>
