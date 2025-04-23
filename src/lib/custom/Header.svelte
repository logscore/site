<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';
	import { goto } from '$app/navigation';
</script>

<div class=" my-4 flex items-center justify-between">
	<Button
		variant="ghost"
		class=" align-center rounded-sm px-3 py-1.5 text-xl font-bold transition-all ease-in-out hover:bg-secondary"
		on:click={() => {
			goto('/');
		}}
	>
		Logan Reeder
	</Button>
	<div class="flex items-center gap-1 py-1 pr-3">
		<a
			class="rounded-sm px-2.5 py-2.5 text-center text-sm font-bold transition-all ease-in-out hover:bg-secondary"
			href="/about">About</a
		>
		<a
			class="rounded-sm px-2.5 py-2.5 text-center text-sm font-bold transition-all ease-in-out hover:bg-secondary"
			href="/projects">My Stuff</a
		>
		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-black transition-all dark:-rotate-90 dark:scale-0 dark:text-white"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</div>
</div>
