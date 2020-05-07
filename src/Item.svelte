<script>
    import { changeState } from './store/todo.js';
    
    export let item;
</script>

<li
    class:done={item.done}
>
    <input
        type="checkbox"
        bind:checked={item.done}
        on:click={(ev) => changeState(item, ev.target.checked)}
    />
    <span class="description">{item.description}</span>

</li>

<style>
    input[type=checkbox] {
        margin-right: 15px; 
    }

    .description{
        font-size: 1.2em;
    }

    .done {
        text-decoration: line-through;
    }
</style>
