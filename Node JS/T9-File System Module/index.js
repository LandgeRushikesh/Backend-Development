// import fs from 'fs'
import fs, { writeFile } from 'fs/promises'

// Async method to read a file

/*

fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

*/

// Synchronized method to read a file 

/*
const data = fs.readFileSync('./test.txt', 'utf-8')
console.log(data);

*/

// ReadFile()- using Promise method

/*
fs.readFile('./test.txt', 'utf-8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

*/

// ReadFile() - using async await 

const ReadFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8')
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

ReadFile()

// WriteFile -

const WriteFile = async () => {
    try {
        fs.writeFile('./test.txt', "Hello ....")
    } catch (error) {
        console.log(error);

    }
}

WriteFile()
ReadFile()