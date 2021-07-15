// Import depencies
const App = require("./App");
const ServerConfig = require('./config/ServerConfig');

// Start server
App.listen(ServerConfig.PORT);
console.log('\n=======================================');
console.log(`SERVER listening on PORT : ${ServerConfig.PORT}`);
console.log('=======================================\n');