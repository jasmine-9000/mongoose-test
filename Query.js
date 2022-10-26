const Tag = require('./Tags');
const Person = require('./Person')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017')


// const res  = await Person.insertOne("name": "foo", "projects": [""])
const results = Person.find({"name": "foo"}).populate("projects.tags");
console.log(results);

process.exit();