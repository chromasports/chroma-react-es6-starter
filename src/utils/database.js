// import dexiejs indexeddb wrapper
import Dexie from 'dexie';

// import table and index schemas
import Schemas from './database/schemas';

// instantiate the new database (creates if doesnt exist)
let db = new Dexie('chromaReactES6Starter');

db.version(1)
  .stores({
    app: 'type'
  });

// setup db schemas updates if already exists
Schemas(db);

db.open();
// export the database for use within the app
export default db;

// The code below was an experiment (I have not removed intentionally)
// the aim was to wrap the initialisation of dexie in a Promise
// which when resolved THEN rendered the app... This proved to work
// BUT also failed as I could not access the db method from anywhere else...
// If you have any ideas on how this COULD work then please feel free to try
// and implement something similar.
// export let db;
//
// export default () => {
//   return new Promise((resolve, reject) => {
//     // instantiate the new database (creates if doesnt exist)
//     db = new Dexie('chromaReactES6Starter');
//
//     db.version(1)
//       .stores({
//         app: 'type'
//       });
//
//     // setup db schemas updates if already exists
//     Schemas(db);
//
//     db.open()
//       .then(resolve)
//       .catch(reject);
//   });
// }
//
// // export the database for use within the app
// export let DB = db;
