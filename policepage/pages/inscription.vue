<template>
  <div class="container">
    <div class="connect_box" style="width: 750px; height: 390px; margin: 0 auto; text-align: center; margin-top: 20vh; border-radius: 10px; border: 5px double gray;">
      <form style="position: relative;">
      <h1 style="font-size: 30px; color: #969696; text-shadow: 1px 1px 0px #fff; font-weight: 100;">Inscription</h1>
        <p style="margin: 15px;">
        <br>
          <input style="margin-right: 10vh; width: 250px;" type="text" value="" placeholder="Name" id="name"><input style="width: 250px;" type="text" value="" placeholder="First Name" id="first_name">
            <br><br>
            <input style="margin-right: 10vh; width: 250px;" type="username" value="" placeholder="Username" id="username"><select style="width: 250px;">
            <option value="Agent">Agent</option>
            <option value="Détective">Détective</option>
            <option value="Chef de police">Chef de police</option>
          </select>
            <br><br>
          <input style="margin-right: 10vh; width: 250px;" type="password" value="" placeholder="Password" id="password"><input style="width: 250px;" type="password" value="" placeholder="Confirm Password" id="confirm_password">
            <br><br>
          <input style="width: 585px;" type="text" value="" placeholder="Mail" id="mail">
            <br><br>
          <button type="button" title="Demande d'inscription" onclick="document.getElementById('affiche').style.display='block'" style="margin-right: 9vh; width: 250px; font-size: 15px; color: black; text-shadow: 1px 1px 0px #fff; font-weight: 100;">Demande d'inscription</button>
          <button type="button" title="Annuler" onclick="window.location.href='/'" style="width: 250px; font-size: 15px; color: black; text-shadow: 1px 1px 0px #fff; font-weight: 100;">Annuler</button>
        </p>
          <label id="affiche" style="display:none">Demande en cour de validation</label>
      </form>
    </div>
  </div>
</template>
