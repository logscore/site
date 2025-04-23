<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { TwitterLogo } from 'svelte-radix';
</script>

<div class="mx-6 my-4 flex items-center justify-between">
	<Button
		variant="ghost"
		class="gap-1.5 rounded-sm px-2 py-1.5 text-center text-sm font-bold transition-all ease-in-out hover:bg-secondary"
		href="https://x.com/logscore"
	>
		<TwitterLogo />
		Follow Me
	</Button>
	<Button
		variant="ghost"
		class="rounded-sm px-2 py-1.5 text-center text-xs font-bold transition-all ease-in-out hover:bg-secondary"
		href="https://github.com/logscore/site">Edit this page</Button
	>
</div>
