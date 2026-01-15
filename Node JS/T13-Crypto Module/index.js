import crypto from 'crypto'


// createHash() - 
// const hash = crypto.createHash('sha256')
// hash.update('password123')

// console.log(hash.digest('hex'));

// Random bytes -

// crypto.randomBytes(16, (err, buf) => {
//     if (err) {
//         throw err;
//     }
//     console.log(buf.toString('hex'));

// })

// createCipheriv() & createDecipheriv() -

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('Hello , this is the secret message', 'utf-8', 'hex')
encrypted += cipher.final('hex')

console.log(encrypted);


// Decipher
const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf-8')
decrypted += decipher.final('utf-8')

console.log(decrypted);