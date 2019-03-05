'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const CrimeController =  require('./src/controllers/crime');
const MongoDBUrl = 'mongodb://localhost:27017/officer';
const Joi = require('joi');

const server = new Hapi.Server({
  port: 8000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (req, h) => {
    return "This is the crime route";
  }
});

server.route({
  config: {
  cors: {
  origin: ['*'],
    additionalHeaders: ['cache-control', 'x-requested-with']
        }
   },
  method: 'GET',
  path: '/crimes',
  handler: CrimeController.list
});

//server.route({
 // method: 'GET',
 // path: '/crimes',
 // handler: CrimeController.list
//});

server.route({
  method: 'GET',
  path: '/crimes/{id}',
  handler: CrimeController.get
});

server.route({
  config: {
  cors: {
  origin: ['*'],
    additionalHeaders: ['cache-control', 'x-requested-with']
        }
   },
  method: 'POST',
  path: '/crimes',
  handler: CrimeController.create
});


//
server.route({
  method: 'PUT',
  path: '/crimes/{id}',
  handler: CrimeController.update
});
//

server.route({
  config: {
  cors: {
  origin: ['*'],
    additionalHeaders: ['cache-control', 'x-requested-with']
        }
   },
  method: 'DELETE',
  path: '/crimes/{id}',
  handler: CrimeController.remove
});

(async () => {
  try {
    await server.start();
    // Once started, connect to Mongo through Mongoose
    mongoose.connect(MongoDBUrl, {useNewUrlParser: true}).then(() => { console.log(`Connected to Mongo server`) }, err => { console.log(err) });
    console.log(`Server running at: ${server.info.uri}`);
  }
  catch (err) {
    console.log(err)
  }
})();
