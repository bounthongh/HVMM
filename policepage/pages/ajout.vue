<template>
  <form style="position: relative;">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="data">Consultation</nuxt-link>
          <nuxt-link class="navbar-item" to="ajout">Ajout</nuxt-link>
          <nuxt-link class="navbar-item" to="modif">Modification</nuxt-link>
          <nuxt-link class="navbar-item" to="suppr">Suppréssion</nuxt-link>
          <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="Profil">Profil</a>
            <nuxt-link class="navbar-item" to="/">connection</nuxt-link>
          </div>
        </div>
      </nav>
    </div>
    <hr color="black"/>
    <section class="section">
   <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <thead>
     <tr class="is-selected">
     <th>compnos</th>
     <th>naturecode</th>
     <th>incident_type_description</th>
     <th>main_crimecode</th>
     <th>reptdistrict</th>
     <th>reportingarea</th>
     <th>fromdate</th>
     <th>weapontype</th>
     <th>shooting</th>
     <th>domestic</th>
     <th>shift</th>
     <th>year</th>
     <th>month</th>
     <th>day_week</th>
     <th>ucrpart</th>
     <th>x</th>
     <th>y</th>
     <th>streetname</th>
     <th>xstreetname</th>
     <th>location</th>
     </tr>
    </thead>
    <tbody>
    <tr v-for="value in crimes" :key="value.id">
       <td>{{value.compnos}}</td>
       <td>{{value.naturecode}}</td>
       <td>{{value.incident_type_description}}</td>
       <td>{{value.main_crimecode}}</td>
       <td>{{value.reptdistrict}}</td>
       <td>{{value.reportingarea}}</td>
       <td>{{value.fromdate}}</td>
       <td>{{value.weapontype}}</td>
       <td>{{value.shooting}}</td>
       <td>{{value.domestic}}</td>
       <td>{{value.shift}}</td>
       <td>{{value.year}}</td>
       <td>{{value.month}}</td>
       <td>{{value.day_week}}</td>
       <td>{{value.ucrpart}}</td>
       <td>{{value.x}}</td>
       <td>{{value.y}}</td>
       <td>{{value.streetname}}</td>
       <td>{{value.xstreetname}}</td>
       <td>{{value.location}}</td>
     </tr>
    </tbody>
   </table>
    </section>
    <p>
      Ajout dans la base
    </p>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data: () => ({
    crimes: [],
    errors: []
  }),
  created () {
  axios.post('http://127.0.0.1:8000/', {
        headers: {
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded"
            },
  username: this.username, authority: this.authority, password: this.password,
})
.then(response => {})
.catch(e => {
  this.errors.push(e)
})
  }
}
</script>
