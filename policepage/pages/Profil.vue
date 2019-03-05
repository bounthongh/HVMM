<template>
  <form style="position: relative;">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="data">Consultation</nuxt-link>
          <nuxt-link class="navbar-item" to="ajout">Ajout</nuxt-link>
          <nuxt-link class="navbar-item" to="modif">Modification</nuxt-link>
          <nuxt-link class="navbar-item" to="suppr">Suppression</nuxt-link>
          <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="Profil">Profil</a>
            <nuxt-link class="navbar-item" to="/">Déconnection</nuxt-link>
          </div>
        </div>
      </nav>
    </div>
    <hr size="4" color="black">
    <p>
      <img src="../img/plaque_detective.jpg" style="content-center"/>
    </p>
  </form>
</template>
