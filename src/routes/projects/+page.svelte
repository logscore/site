<script lang="ts">
	import type { PageData } from './$types';
	import Projects from '@/custom/md/Projects.svx';

	let { data }: { data: PageData } = $props();
</script>

<div class="prose mx-6 dark:prose-dark">
	<Projects />
</div>
