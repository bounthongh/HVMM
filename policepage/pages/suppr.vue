<template>
  <form style="position: relative;">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="consul">Consultation</nuxt-link>
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
    <hr color="black"/>
    <p>
      Suppression dans la base
    </p>
    <div class="control">
    <input class="input" v-model="compnos" type="number" placeholder="Text input">
    <button type="button" @click="Delete">delete</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: '',
  data () {
    return {
    data: {
     compnos: '',
      errors: []
      }
    }
  },
  methods: {
        Delete($event) {
            axios.delete('http://127.0.0.1:8000/crimes/' + this.compnos, {
            headers:{
                    "cache-control": "no-cache",
                    "content-type": "application/x-www-form-urlencoded"
                },
    })
    .then(response => {})
    .catch(e => {
      this.errors.push(e)
    })
        }
    }
  }
</script>
