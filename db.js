var pg = require('pg');

var conString = "postgres://postgres:eaeg6333@localhost/postgres";

var client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }

connection.connect();

module.exports = client;
