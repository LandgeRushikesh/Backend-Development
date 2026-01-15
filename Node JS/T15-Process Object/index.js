// console.log(process);

// argv property
console.log(process.argv);
console.log(process.argv[2]);


// process.env
console.log(process.env);
console.log(process.env.USERNAME);

// process id -
console.log(process.pid);

// current Working directory
console.log(process.cwd());

// title
console.log(process.title);


// memoryUsage
console.log(process.memoryUsage());

// Update
console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`About to exit with code : ${code}`);

})

// exit 
process.exit(0)

console.log("Hello from after exit");//this will not print as process is exited
