<script>
    import { onMount } from 'svelte';

    import Input from './Input.svelte';
    import Item from './Item.svelte';
    import { todos } from './store/todo.js';

    onMount(async () => {
        const data = await fetch('todo-feed.json').then(res => res.json());
        todos.set(data.data);
    });

</script>

<main>
	<h1>My ToDo list!</h1>
	
    <Input />

    <section class="todo">
        <section class="list">
            <h2>todo</h2>
            <ul class="active">
                {#each $todos.filter(el => !el.done) as todo}
                    <Item item={todo} />
                {/each}
            </ul>
        </section>
        
        <section class="list">
            <h2>done</h2>
            <ul class="completed">
                {#each $todos.filter(el => el.done) as todo}
                    <Item item={todo} />
                {/each}
            </ul>
        </section>
    </section>
</main>

<style>
    :global(body) {
		margin: 0;
        padding: 0;
	}

	main {
		text-align: left;
		padding: 1em 0;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
        text-align: center;
	}

    h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

    ul {
        list-style: none;
        margin: 15px 0;
        padding: 0;
    }

    .todo {
        max-width: 1140px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
    }

    .list {
        flex: 1 1;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
