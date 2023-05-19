<script>
  import "../styles.css"
</script>

<header>
  <nav>
    <a href="/"> home</a>
    <a href='/about'> about</a>
  </nav>
  <h1>Hello World Svelte</h1>
</header>

<slot />

<style>
  h1 {
    color: red;
    text-align: center;
  }

</style>
