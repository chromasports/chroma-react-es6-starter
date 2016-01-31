export default function(db) {
  // setup your schemas here.
  db.app.defineClass({
    type: String,
    value: String
  });

  // example insert/update
  db.app.put({type: 'name', value: 'REACT ES6 STARTER KIT...'});

  return db;
}
