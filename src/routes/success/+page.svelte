<script>
	import NavBar from '../../components/NavBar.svelte';

	export let data;
	let userId = data.userId;
</script>

<NavBar />

<div class="container u-flex-vertical">
	<h1 class="heading-level-1 u-margin-32 u-normal">Success!</h1>
	<p class="body-text-1 u-margin-32 u-normal">Thanks for participating in the giveaway, {userId}</p>
</div>
