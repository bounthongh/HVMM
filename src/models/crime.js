'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crimeModel = new Schema({
  compnos: { type: Number, required: true, index: { unique: true } },
  naturecode: { type: String, required: true },
  incident_type_description: { type: String, required: true },
  main_crimecode: { type: String, required: true },
  reptdistrict: { type: String, required: true },
  reportingarea: { type: String, required: true },
  fromdate: { type: Date, required: true },
  weapontype: { type: String, required: true },
  shooting: { type: String, required: true },
  domestic: { type: String, required: true },
  year : { type: Number, required: true },
  shift: { type: String, required: true },
  month: { type: String, required: true },
  day_week: { type: String, required: true },
  ucrpart: { type: String, required: true },
  x: { type: String, required: true },
  y: { type: String, required: true },
  streetname: { type: String, required: true },
  xstreetname: { type: String, required: true },
  location: { type: String, required: true }
});

module.exports = mongoose.model('Crime', crimeModel, 'officer');
