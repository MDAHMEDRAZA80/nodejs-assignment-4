const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

         //app.get for Home page (question says to request body parameters for all endpoints)
app.get('/', (req, res) => {
    res.send({ message: 'Hello world!' })
})

// post request for Addition
app.post('/add', (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    if (isNaN(num1) || isNaN(num2)) {
        return res.send({ status: 'failure', message: 'Invalid data types' })
    }
    const sum = num1 + num2
    if (sum < -1000000 || sum > 1000000) {
        return res.send({ status: 'error', message: 'Overflow' })
    }
    return res.send({ status: 'success', message: 'the sum of given two numbers', sum })
})

// Post request for Subtraction
app.post('/sub', (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    if (isNaN(num1) || isNaN(num2)) {
        return res.send({ status: 'failure', message: 'Invalid data types' })
    }
    const difference = num1 - num2
    if (difference < -1000000 || difference > 1000000) {
        return res.send({ status: 'error', message: 'Overflow' })
    }
    return res.send({ status: 'success', message: 'The difference of given two numbers', difference })
})

// Post request for Multiplication 
app.post('/multiply', (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    if (isNaN(num1) || isNaN(num2)) {
        return res.send({ status: 'failure', message: 'Invalid data types' })
    }
    const result = num1 * num2;
    if (result > 1000000) {
        return res.send({ status: 'error', message: 'Underflow' });
    }
    res.send({ status: 'success', message: 'The product of given numbers', result });
});
// Post request for division
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (isNaN(num1) || isNaN(num2)) {
        return res.send({ status: 'failure', message: 'Invalid data types' });
    }
    if (num2 === 0) {
        return res.send({ status: 'error', message: 'Cannot divide by zero' });
    }
    const result = num1 / num2;
    if (result < -1000000) {
        return res.send({ status: 'error', message: 'Underflow' });
    }
    if (result > 1000000) {
        return res.send({ status: 'error', message: 'Underflow' });
    }
    res.send({ status: 'success', message: 'The division of given numbers', result });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
//-----------------------------------------------------------
// const express = require('express')
// const app = express()
// const bodyParser = require("body-parser");
// const port = 3000
// app.use(express.urlencoded());

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())
// // your code goes here


// app.listen(port, () => console.log(`App listening on port ${port}!`))

// module.exports = app;