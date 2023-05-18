<script>
  import TodoItem from "./TodoItem.svelte";

</script>
<ol>
  <TodoItem />
  <TodoItem />
  <TodoItem />
  <TodoItem />
  <p class="message">there are 4 unfinished tasks</p>
</ol>

<style>
  .message {
    text-align: center;
  }
</style>
