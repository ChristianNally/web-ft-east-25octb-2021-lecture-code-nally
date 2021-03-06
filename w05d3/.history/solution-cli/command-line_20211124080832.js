// require('dotenv').config();
// const { Client, Pool } = require('pg');
const pg = require('pg');
const Client = pg.Client;

// const configObj = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT
// };
// console.log('db connection info:',configObj);

const configObj = {
  user: "postgres",
  host: 'localhost',
  database: 'spot',
  password: 'postgres',
  port: 5433
};
console.log('db connection info:',configObj);

const client = new Client(configObj);

client.connect()
.then(() => {
  console.log('db connected');
})
.catch(err => console.error('db connection error', err.stack));

const verb = process.argv[2];

// Browse
// Read
// Edit 
// Add
// Delete

// let id;

switch (verb) {
  case 'browse':
    console.log('Running the browse verb');
    client.query('SELECT id,question FROM objectives ORDER BY day_id;')
      .then((response) => {
        // console.log('response',response);
//        console.log('response.rows',response.rows);
        for (objective of response.rows){
          console.log(`ID: ${objective.id} :: ${objective.question}`);
        }
        client.end();
      });
    break;

//       client.query('SELECT * FROM objectives WHERE id = $1;', [id])
  case 'read':
    id = process.argv[3];
    const query = 'SELECT * FROM objectives WHERE id = ' + id + ';'
    console.log("Query:",query);
    client.query(query)
      .then((response) => {
        console.log("response.rows",response.rows);
        client.end();
      });

    break;

//   case 'edit':
//     id = process.argv[3];
//     const newQuestion = process.argv[4];
//     client.query('UPDATE objectives SET question = $1 WHERE id = $2;', [newQuestion, id])
//       .then(() => {
//         console.log('question updated successfully');
//         client.end();
//       });
//     break;

//   case 'add':
//     // const newQuestion = process.argv[3];
//     // const newAnswer = process.argv[4];
//     // client.query(`INSERT INTO objectives(type,question, answer) VALUES('knowledge',$1, $2);`, [newQuestion, newAnswer])
//     //   .then(() => {
//     //     console.log('added new objective');
//     //     client.end();
//     //   });
//     break;

//   case 'delete':
//     id = process.argv[3];
//     client.query('DELETE FROM objectives WHERE id = $1;', [id])
//       .then(() => {
//         console.log('deleted objective');
//         client.end();
//       });
//     break;

  default:
    console.log('please enter a proper verb');
    client.end();
}
