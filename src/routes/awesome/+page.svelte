<script lang="ts">
	import type { PageData } from './$types';
	import Awesome from '@/custom/md/Awesome.svx';

	let { data }: { data: PageData } = $props();
</script>

<div class="prose mx-6 dark:prose-dark">
	<Awesome />
</div>
