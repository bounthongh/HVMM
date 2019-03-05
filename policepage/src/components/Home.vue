<!-- src/components/Home.vue -->

<template>
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
     <td>{{compnos._id}}</td>
     <td>{{naturecode._id}}</td>
     <td>{{incident_type_description._id}}</td>
     <td>{{main_crimecode._id}}</td>
     <td>{{reptdistrict._id}}</td>
     <td>{{reportingarea._id}}</td>
     <td>{{fromdate._id}}</td>
     <td>{{weapontype._id}}</td>
     <td>{{shooting._id}}</td>
     <td>{{domestic._id}}</td>
     <td>{{shift._id}}</td>
     <td>{{year._id}}</td>
     <td>{{month._id}}</td>
     <td>{{day_week._id}}</td>
     <td>{{ucrpart._id}}</td>
     <td>{{x._id}}</td>
     <td>{{y._id}}</td>
     <td>{{streetname._id}}</td>
     <td>{{xstreetname._id}}</td>
     <td>{{location._id}}</td>
   </tr>
  </tbody>
 </table>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'data',
  data: () => ({
    crime: [],
    errors: []
  }),
  created () {
      axios.get('http://127.0.0.1:8000/allcrimes')
      .then(response => {
       this.crime = response.data
        console.log(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
