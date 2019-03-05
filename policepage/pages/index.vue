<!-- pages/index.vue -->


<template style="background-color: #ffe9aa">
  <div class="connect_box" style="width: 300px; margin: 0 auto; text-align: center; margin-top: 20vh; border-radius: 10px; border: 5px double gray;">
  <h1 style="font-size: 30px; color: #969696; text-shadow: 1px 1px 0px #fff; font-weight: 100;">Connection</h1>
    <form action="Profil" method="post" style="position: relative;">
      <p style="margin: 15px;">
        <input type="username" value="" placeholder="Username" id="username">
        <input type="password" value="" placeholder="Password" id="password">
        <br>
        <br>
        <button type="submit" title="Connection" value="Connection" style="font-size: 15px; color: black; text-shadow: 1px 1px 0px #fff; font-weight: 100; margin-right: 15px;">Connection</button>
        <button type="button" title="Incription" style="font-size: 15px; color: black; text-shadow: 1px 1px 0px #fff; font-weight: 100;" onclick="window.location.href='inscription'">Inscription</button>
      </p>
    </form>
  </div>
</template>


<script>
</script>
