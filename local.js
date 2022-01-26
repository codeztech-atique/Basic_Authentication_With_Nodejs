require('dotenv').config()
const app = require('./index');
const port = process.env.PORT || 8081;
const chalk = require('chalk');

// Server
app.listen(port, () => {
    console.log(chalk.green('╔═══════════════════════════════════════════════════════════'));
    console.log(chalk.green('║ Background Server Listening at | port: %s, dyno: %s', port));
    console.log(chalk.green('╚═══════════════════════════════════════════════════════════'));
});
