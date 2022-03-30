
// Change these lines:

// pgClient.on('error', () => console.log('Lost PG connection'));
 
// pgClient
//   .query('CREATE TABLE IF NOT EXISTS values (number INT)')
//   .catch(err => console.log(err));
 
// to this:

// pgClient.on("connect", (client) => {
//   client
//     .query("CREATE TABLE IF NOT EXISTS values (number INT)")
//     .catch((err) => console.error(err));
// });