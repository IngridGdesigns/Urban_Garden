//https://blog.cloudboost.io/how-to-make-an-oauth-2-server-with-node-js-a6db02dc2ce7

//https://levelup.gitconnected.com/testing-the-component-surface-with-react-testing-library-b7d1bc2bec4f
//requiere expres
//https://scotch.io/tutorials/build-simple-authentication-in-express-in-15-minutes
const express = require('express')

//require posgresql
const Pool = require('pg').Pool;

//intitialise express app
const app = express()

//create port to connect to
const PORT = 3007;

//parse to json
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

//Gets the whole users table --DONE
app.get('/users', async(req, res) => {
   
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

//GET all from user_items table -- DONE
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


//GET all from offer table -- DONE
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

    await client.query('SELECT * FROM users WHERE user_id =$1', [id], (err, result) => {
      if (err) {
          res.status(500).send(err);
          client.release()
      } 
      else { //res.json(dbitems.rows[0] )
          res.status(200).json(result.rows[0])
          client.release()
      }
    })
});

//GET offers by barter_id - a single item -
app.get('/offers/:barter_id', async(req, res) => {
    const client = await pool.connect()
    let id = parseInt(req.params.barter_id)

    await client.query('SELECT * FROM offers WHERE barter_id =$1', [id], (err, result) => {
      if (err) {
          res.status(500).send(err);
          client.release()
      } 
      else { //res.json(dbitems.rows[0] )
          res.status(200).json(result.rows[0])
          client.release()
      }
    })
});

//GET user_items by id - a single item - DONE
app.get('/user_items/:item_id', async(req, res) => {
    const client = await pool.connect()
    let id = parseInt(req.params.item_id)

    await client.query('SELECT * FROM user_items WHERE item_id =$1', [id], (err, result) => {
      if (err) {
          res.status(500).send(err);
          client.release()
      } 
      else { //res.json(dbitems.rows[0] )
          res.status(200).json(result.rows[0])
          client.release()
      }
    })
});


// GET users_items by ZIPCODE (NEAR ME..try to connect with location api) -- DONE
app.get('/user_items/find/:zipcode', async(req, res) => {
    const client = await pool.connect()
    let zipcode = parseInt(req.params.zipcode)
    // let item_name = req.body.item_name;
    // let username = req.body.username;
    // let description = req.body.description;
    // let available_status = req.body.available_status;

    await client.query('SELECT item_name, username, available_status FROM user_items WHERE zipcode = $1',
    [zipcode], (err, result) => {
        if (err) {
            res.status(500).send('Server error');
            client.release()
        } 
        else { //res.json(dbitems.rows[0] )
            res.status(200).json(result.rows)
            client.release()
        }

    })
});

// // By item name - need help here
app.get('/user_items/search/:item_name', async(req, res) => {
    const client = await pool.connect()
    let item_name = req.params.item_name;
//SELECT item_name, email, username, available_status FROM user_items WHERE item_name = $1

    await client.query("SELECT * FROM user_items WHERE item_name ILIKE $1", ['%' + item_name + '%'], (err, result) => {
        if (err) {
            res.status(500).send(err);
            client.release()
        }
        else {
            res.status(200).json(result.rows)
            client.release()
        }
    })
})

//SELECT item_name, email, username, available_status FROM user_items WHERE zipcode BETWEEN 94100 AND 94110;


/////////////////////////////////////////// POST //////////////////

//POST - add new user
app.post('/users', async (req, res) => {
    const client = await pool.connect();
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let zipcode = req.body.zipcode;
    
    await client.query('INSERT INTO users(username, email, password, zipcode) VALUES($1, $2, $3, $4) RETURNING *', 
    [username, email, password, zipcode], (err, result) => {
        if(err){
            res.status(500).send('Server error')
            client.release()
        }
        else {
            res.status(200).json(result.rows[0])
            client.release()
        }
    })
})

//POST - Add a New item to user_items table -- food to barter posts
app.post('/user_items', async (req, res) => {
    const client = await pool.connect();
    let item_name = req.body.item_name;
    let username = req.body.username;
    let description = req.body.description;
    let zipcode = req.body.zipcode;
    let available_status = req.body.available_status;
    
    await client.query('INSERT INTO user_items(item_name, username, description, zipcode, available_status) VALUES($1, $2, $3, $4, $5) RETURNING *', 
    [item_name, username, description, zipcode, available_status], (err, result) => {
        if(err){
            res.status(500).send('Server error')
            client.release()
        }
        else {
            res.status(200).json(result.rows[0])
            client.release()
        }
    })
})

//POST - Add a New barter offers to offers table -- food to barter posts -- DONE
// item_id |  item_name   | user_id_offering | 
//user2_asking | offer_accepted | *barter_id  -- PRIMARY SERIAL KEY
app.post('/offers', async (req, res) => {
    const client = await pool.connect();
   
    let id = parseInt(req.body.item_id);
    let item = req.body.item_name;
    let offering = parseInt(req.body.user_id_offering)
    let asking = parseInt(req.body.user2_asking);
    let offer_accepted = req.body.offer_accepted;
    
    await client.query('INSERT INTO offers(item_id, item_name, user_id_offering, user2_asking, offer_accepted) VALUES($1, $2, $3, $4, $5) RETURNING *', 
    [id, item, offering, asking, offer_accepted], (err, result) => {
        if(err){
            console.log(err)
            res.status(500).send('Server error')
            client.release()
        }
        else {
            res.status(200).json(result.rows[0])
            client.release()
        }
    })
})

/////////PUT - UPDATE ////////////////

//PUT -- Update users by id - DONE
app.put('/users/:user_id', async(req, res) => {
    const client = await pool.connect();
    const id = parseInt(req.params.user_id) //turns string into a integer
    const { username, email, password, zipcode } = req.body
console.log(req.body)
    try {
    let results = await client.query(
        'UPDATE users SET username = $1, email = $2, password = $3, zipcode = $4 WHERE user_id = $5 RETURNING *',
        [username, email, password, zipcode, id])
        res.status(200).json(`This user with the id: ${id} was updated!`)
    } catch (err) {
        console.log('you have an error')
        console.log(err)
        res.status(500).send(err)
    }   finally {
        client.release();
    }
})

//PUT -- Update user_items by id - DONE
app.put('/user_items/:item_id', async(req, res) => {
    const client = await pool.connect();
    const id = parseInt(req.params.item_id) //turns string into a integer
    const { item_name, description, zipcode, available_status } = req.body
console.log(req.body)
    try {
    let results = await client.query(
        'UPDATE user_items SET item_name = $1, description = $2, zipcode = $3, available_status = $4 WHERE item_id = $5 RETURNING *',
        [item_name, description, zipcode, available_status, id])
        res.status(200).json(`This item was updated with id: ${id}`)
    } catch (err) {
        console.log('you have an error')
        console.log(err)
        res.status(500).send(err)
    }   finally {
        client.release();
    }
})

//Edit - UPDATE offers by barter id
app.put('/offers/:barter_id', async(req, res) => {
    const client = await pool.connect();
    const id = parseInt(req.params.barter_id)
   
    const { item_name, user_id_offering, user2_asking, offer_accepted } = req.body
    console.log(req.body)
    try {
    let results = await client.query(
        'UPDATE offers SET item_name = $1, user_id_offering = $2, user2_asking = $3, offer_accepted = $4 WHERE barter_id = $5 RETURNING *',
        [item_name, user_id_offering, user2_asking, offer_accepted, id])
        res.status(200).json(`This item was updated with id: ${id}`)
    } catch (err) {
        console.log('you have an error')
        console.log(err)
        res.status(500).send(err)
    }   finally {
        client.release();
    }
})


////////////////////////////////////
//DELETE USER by id - DONE
app.delete('/users/:id', async(req, res) => {
    const client = await pool.connect()
    let id = parseInt(req.params.id)

   await client.query('DELETE FROM users WHERE user_id =$1', [id], (err, results) => {
       if(err){
           console.log('Oh noes you have an error!!')
           res.status(500).send('There is a server error')
           client.release()
       }
       else {
           console.log('tchau, it was deleted')
           res.status(200).end()
           client.release()//closes database
       }
   })
})

// Delete user_items by id - DONE
app.delete('/user_items/:item_id', async(req, res) => {
    const client = await pool.connect()
    let id = parseInt(req.params.item_id)

   await client.query('DELETE FROM user_items WHERE item_id =$1', [id], (err, results) => {
       if(err){
           console.log('Oh noes you have an error!!')
           res.status(500).send('There is a server error')
           client.release()
       }
       else {
           console.log('tchau, it was deleted')
           res.status(200).end()
           client.release()//closes database
       }
   })
})

// Delete offers by id - DONE!
app.delete('/offers/:barter_id', async(req, res) => {
    const client = await pool.connect()
    let id = parseInt(req.params.barter_id)

   await client.query('DELETE FROM offers WHERE barter_id =$1', [id], (err, results) => {
       if(err){
           console.log('Oh noes you have an error!!')
           res.status(500).send('There is a server error')
           client.release()
       }
       else {
           console.log('tchau, it was deleted')
           res.status(200).end()
           client.release()//closes database
       }
   })
})
///////////////// test timestamp

app.get('/desserts', async (req, res) => {
    const client = await pool.connect()

    await client.query('SELECT * FROM desserts', (err, results) => {
        if(err){
            console.log('Oh noes you have an error!!')
            res.status(500).send('There is a server error')
            client.release()
        }
        else {
            console.log('tchau, it was deleted')
            res.status(200).json(results.rows)
            client.release()//closes database
        }
    })
})
//get by id
app.get('/desserts/:id', async (req, res) => {
    const client = await pool.connect()
    let id = parseInt(req.params.id)

    await client.query('SELECT * FROM desserts WHERE id = $1', [id], (err, results) => {
        if(err){
            console.log('Oh noes you have an error!!')
            res.status(500).send('There is a server error')
            client.release()
        }
        else {
            console.log('tchau, it was deleted')
            res.status(200).json(results.rows[0])
            client.release()//closes database
        }
    })
})

//post
app.post('/desserts', async (req, res) => {
    const client = await pool.connect();
    let item = req.body.item;
    
    
    await client.query('INSERT INTO desserts(item) VALUES($1) RETURNING *', 
    [item], (err, result) => {
        if(err){
            console.log(err)
            res.status(500).send('Server error')
            client.release()
        }
        else {
            res.status(200).json(result.rows[0])
            client.release()
        }
    })
})








//amazon-api - cloudinary storing of images and grabs links in db





//////////////////////////////////////////////

app.listen(PORT, () => console.log(`We are live from the foggiest place in Cali, on port ${PORT}`))
