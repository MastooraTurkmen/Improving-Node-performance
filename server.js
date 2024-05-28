const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        
    }
}

app.get('/', (req, res) => {
    res.send('Performance example')
})

app.get('/timer', (req, res) => {
    res.send('Ding ding ding!');
})