const express = require('express')
const Pool = require('pg').Pool;
const app = express()
const PORT = 3007;

app.use(express.json()) //to print out in json

//Posgresql connection configuration
const pool = new Pool({
    // user: 'me',
    host: 'localhost',
    database: 'urbangarden',
    password: 'password',
    port: 5432,
})

app.get('/', async(req, res ) => {
    res.send('We are live from the foggiest place in Cali')
    console.log('This is on now yay!!')
})

///////////////// GET THE WHOLE TABLE FROM USERS, USER_ITEMS & OFFERS //////////////////////////////////

//Gets the whole users table 
app.get('/users', async(req, res) => {
    //to have client connect to db
    const client = await pool.connect();
    
     await client.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.log('error oh noes!!')
            res.status(500).send('Server error');
            client.release()
        } 
        else {
            res.status(200).json(results.rows) // res.json(dbitems.rows)
            client.release()//closes database
        }
    })
})

//GET all from user_items table
app.get('/user_items', async(req, res) => {
    const client = await pool.connect();
    
     await client.query('SELECT * FROM user_items', (err, result) => {
        if (err) {
            console.log('error oh noes!!')
            res.status(500).send('Server error').json({error});
            client.release()
        } 
        else {
            res.status(200).json(result.rows) // res.json(dbitems.rows)
            client.release()//closes database
        }
    })
})


//GET all from offer table
app.get('/offers', async(req, res) => {
    const client = await pool.connect();
    
     await client.query('SELECT * FROM offers', (err, result) => {
        if (err) {
            console.log('error oh noes!!')
            res.status(500).send('Server error');
            client.release()
        } 
        else {
            res.status(200).json(result.rows) // res.json(dbitems.rows)
            client.release()//closes database
        }
    })
})


//////////////////////////////////////////// GET BY ID & ZIPCODE //////////////

//GET users by id - a single item - DONE
app.get('/users/:id', async(req, res) => {
    const client = await pool.connect()
    let id = parseInt(req.params.id)

    await client.query('SELECT * FROM users WHERE id =$1', [id], (err, result) => {
      if (err) {
          res.status(500).send('Server error');
          client.release()
      } 
      else { //res.json(dbitems.rows[0] )
          res.status(200).json(result.rows[0])
          client.release()
      }
    })
});

//GET users_items by ZIPCODE (NEAR ME...)
app.get('/user_items/:zipcode', async(req, res) => {
    const client = await pool.connect()
    let zipcode = parseInt(req.params.zipcode)

    await client.query('SELECT item_name, description, username, available_status FROM user_items WHERE zipcode = $1',
    [zipcode], (err, result) => {
        if (err) {
            res.status(500).send('Server error');
            client.release()
        } 
        else { //res.json(dbitems.rows[0] )
            res.status(200).json(result.rows[0])
            client.release()
        }

    })
});

//By item name
app.get('user_items/:item_name', async(req, res) => {
    const client = await pool.connect()
    let item_name = parseInt(req.params.item_name)

    await client.query('SELECT item_name, description, username, available_status FROM user_items WHERE item_name = $1',
    [item_name], (err, result) => {
        if (err) {
            res.status(500).send('Server error');
            client.release()
        }
        else {
            res.status(200).json(result.rows[0])
            client.release()
        }
    })
})

//SELECT item_name, description, username, available_status FROM user_items WHERE zipcode BETWEEN 94100 AND 94110;
/////////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => console.log(`We are live from the foggiest place in Cali, on port ${PORT}`))
