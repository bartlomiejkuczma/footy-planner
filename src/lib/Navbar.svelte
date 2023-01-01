<script lang="ts">
	let navItems = [
		{ text: 'Fixture', href: '/', icon: 'mdi:calendar-cursor' },
		{ text: 'Location', href: '/', icon: 'mdi:map-marker-multiple' },
		{ text: 'How To Pay', href: '/', icon: 'bx:pound' },
		{ text: 'Fixture Builder', href: '/', icon: 'game-icons:babyfoot-players' }
	];
</script>

<nav>
	<ul class="flex text-sm">
		{#each navItems as navItem}
			<li class="flex flex-col items-center py-2 flex-1 whitespace-nowrap">
				<iconify-icon class="text-2xl" icon={navItem.icon} />
				<a href={navItem.href}>{navItem.text}</a>
			</li>
		{/each}
	</ul>
</nav>
