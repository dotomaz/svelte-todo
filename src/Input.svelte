<script>
    import { add } from './store/todo.js';
    let input = '';

    function addTodo(){
        if( input.length ) {
            add(input);
            input = '';
        }
    }
</script>

<section
    class="container"
>
    <div class="input-field">
        <input
            type="text"
            placeholder="What needs to be done?"
            bind:value={input}
            on:keypress={(ev) => ev.keyCode === 13 && addTodo(input)}
        />

        <button
            on:click={() => addTodo(input) }
        >
            Add
        </button>
    </div>
</section>

<style type="text/scss">

    .input-field{
        max-width: 1140px;
        margin: 0 auto;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #fff;
        overflow: hidden;
        display: flex;
        align-content: stretch;
        
        input {
            flex: 1 1;
            margin: 0;
            padding: 10px 20px;
            border: 0;
            outline: none;
        }

        button {
            border: 0;
            background-color: #c42626;
            color: #fff;
            margin: 0;
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    .container {
        background-color: #efefef;
        padding: 30px 15px;
        margin: 0;
    }
</style>
