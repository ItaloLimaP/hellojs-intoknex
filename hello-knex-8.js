"use strict"
const knex = require("./db");

knex('cachorro').insert({id = '<nomecachorro>'})

knex.insert([{title: 'Great Gatsby'}, {title: 'Fahrenheit 451'}], 'id').into('books')