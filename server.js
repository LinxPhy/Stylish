require('dotenv').config()

const express = require('express')
const {google} = require("googleapis")
const path = require('path')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN,
        credentials: true
    })
)

const port = process.env.SERVER_PORT 

const table_values = async function (req, res, next){
    
    const auth = new google.auth.GoogleAuth({

        keyFile: path.join(__dirname, "credentials/_credentials.json"),
        scopes: "https://www.googleapis.com/auth/spreadsheets",

    })

    const client = await auth.getClient();
    const googleSheets = await google.sheets({ version: "v4", auth: client });
    const spreadsheetId = process.env.SPREADSHEET_ID;

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1",
    })

    const results = []
    const rows = getRows.data.values
    
    if (rows.length) {

        rows.shift()

        for (const row of rows){

            results.push({ 
                id: parseInt(row[0]), name: row[1], brand: row[2], sex: row[3],
                type: row[4], description: row[5], colour: row[6], size: row[7], 
                price: row[8], display_image: row[9], image: row[10], size_removed: row[11],
                inStock: row[12], otherImages: row[13]
            })

        }
        
    }


    req.values = JSON.stringify(results)

    next()
}


app.use(table_values)


app.get('/api', async(req, res) => {
    var values = req.values
    res.status(200).send(values)
})

app.get('/api/filters', async(req, res) => {
    var values = JSON.parse(req.values)
    
    let filters = {
        brand: [...new Set(values.map(value => value.brand))],
        sex: [...new Set(values.map(value => value.sex))],
        type: [...new Set(values.map(value => value.type))]
    };

    res.status(200).send(JSON.stringify(filters))
})

app.get('/api/item/:id', async(req, res) => {
    
    var values = JSON.parse(req.values)
    var id = parseInt(req.params.id)

    var result = values.find(value => value.id === id)
    res.status(200).send(JSON.stringify(result))
        
})

app.listen(port, () => { `Server is running on port ${port}`})