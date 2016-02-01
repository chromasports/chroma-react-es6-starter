// import dexiejs indexeddb wrapper
import Dexie from 'dexie';

// import table and index schemas
import Schemas from './database/Schemas';

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


// export default () => {
//   return new Promise((resolve, reject) => {
//
//   });
// }
