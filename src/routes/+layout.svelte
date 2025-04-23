<script lang="ts">
	import Header from '@/custom/Header.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from '@/custom/Footer.svelte';
	import Separator from '@/components/ui/separator/separator.svelte';

	let { children } = $props();
</script>

<ModeWatcher />
<div class="mx-auto flex min-h-screen max-w-[50rem] flex-col">
	<Header />
	<Separator class="mb-6" />
	<main class="w-full flex-grow">
		{@render children()}
	</main>
	<Separator class="mt-4" />
	<Footer />
</div>
