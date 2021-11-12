const chalk = require("chalk");
const pkg = require("../package.json");

console.log(`
${chalk.green("Hey there! 👋")}
Thanks for giving the ${pkg.name} a try. 🎉

run 
${chalk.yellow("npm start")} to start a development environment at ${chalk.green("localhost:8000")}
or
${chalk.yellow("npm run build")} to create a production ready static site in ${chalk.green("./public")}
`);
