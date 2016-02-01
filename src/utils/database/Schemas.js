/**
 * Setup IndexedDB schemas (as per dexie documentation)
 * @param  {Dexie} db
 * @return {Dexie} returns the db initially passed to the function
 */
export default function(db) {
  // Setup your schemas here
  // In theory we could move each schema in to its own module
  // TODO: create an example showing the above
  db.app.defineClass({
    type: String,
    value: String
  });

  // example insert/update
  // in future this should not be done here unless
  // setting up some app specific stuff which you require
  // before react is instantiated
  db.app.put({type: 'name', value: 'REACT ES6 STARTER KIT...'});

  // return the db
  return db;
}
