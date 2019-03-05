var Crime =  require('../models/crime');

/**
 * List Crimes
 */
exports.list = (req, h) => {
  return Crime.find({}).exec().then((crime) => {

    return { crimes: crime };

  }).catch((err) => {

    return { err: err };

  });
}

/**
 * Get Crime by ID compnos
 */
exports.get = (req, h) => {

return Crime.findOne({compnos: req.params.id}).exec().then((crime) => {
//return Crime.findById(req.params.id).exec().then((crime) => {
    if(!crime) return { message: 'crimes not Found' };

    return { crime: crime };

  }).catch((err) => {

    return { err: err };

  });
}


/**
 * POST a Crime
 */
exports.create = (req, h) => {

  const crimeData = {
    compnos: req.payload.compnos,
    naturecode: req.payload.naturecode,
    incident_type_description: req.payload.incident_type_description,
    main_crimecode: req.payload.main_crimecode,
    reptdistrict: req.payload.reptdistrict,
    reportingarea: req.payload.reportingarea,
    fromdate: req.payload.fromdate,
    weapontype: req.payload.weapontype,
    shooting: req.payload.shooting,
    domestic: req.payload.domestic,
    year : req.payload.year,
    shift: req.payload.shift,
    month: req.payload.month,
    day_week: req.payload.day_week,
    ucrpart: req.payload.ucrpart,
    x: req.payload.x,
    y: req.payload.y,
    streetname: req.payload.streetname,
    xstreetname: req.payload.xstreetname,
    location: req.payload.location
  };

  return Crime.create(crimeData).then((crime) => {

     return { message: "Crime created successfully", crime: crime };

  }).catch((err) => {

    return { err: err };

  });
}

/**
 * PUT | Update Crime by ID compnos
 */
exports.update = (req, h) => {

  // return Crime.findById(req.params.id).exec().then((crime) => {
    return Crime.findOne({ compnos: req.params.id}).exec().then((crime) => {
    if (!crime) return { err: 'Crime not found' };

    crime.compnos = req.payload.compnos;
    crime.naturecode = req.payload.naturecode;
    crime.incident_type_description = req.payload.incident_type_description;
    crime.main_crimecode = req.payload.main_crimecode;
    crime.reptdistrict = req.payload.reptdistrict;
    crime.reportingarea = req.payload.reportingarea;
    crime.fromdate = req.payload.fromdate;
    crime.weapontype = req.payload.weapontype;
    crime.shooting = req.payload.shooting;
    crime.domestic = req.payload.domestic;
    crime.shift = req.payload.shift;
    crime.year = req.payload.year;
    crime.month = req.payload.month;
    crime.day_week = req.payload.day_week;
    crime.ucrpart = req.payload.ucrpart;
    crime.x = req.payload.x;
    crime.y = req.payload.y;
    crime.streetname = req.payload.streetname;
    crime.xstreetname = req.payload.xstreetname;
    crime.location = req.payload.location;

    crime.save();
    return { message: "Crime data updated successfully", crime : crime };
  }).catch((err) => {

      return { err: err };

  });
}


/**
 * Delete Crime by ID compnos
 */
exports.remove = (req, h) => {

  //return Crime.findById(req.params.id).exec(function (err, crime) {
    return Crime.findOne({ compnos: req.params.id }).exec().then((crime) => {
		  if(!crime) return { message: 'Crime not found' };

				crime.remove();
        return { message: 'Crime was removed' };
		  }).catch((err) => {
		    return { err: err };
		  });
}
