
A multi-database selector for sequelize.js

## Install

In package.json;

```"sequelize-db": "https://github.com/wookets/sequelize-db/tarball/0.1.0"```

## Usage

```
var db = require('sequelize-db');

// define your models
var schema = function(sequelize, DataTypes) {
  return sequelize.define("posts", {
    name: DataTypes.STRING
  })
}
db.models.posts = schema;


// define your tenants (separate databases)
db.tenants.test = 'mysql://meowpants.com/db';


// use in your code
db('tenant').posts.find() // or whatever sequelize method you want
```

