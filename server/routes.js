const router = require("express").Router();
const axios = require('axios');

router
  .route("/getinfo").get((req, res) => {
    const { shoe_id } = req.query;
    
    axios
      .get('http://localhost:3002/api/getinfo', {params: {shoe_id}})
      .then(data => {
        console.log('this is the data being sent back', data.data)
        res.status(200).send(data.data)
      })
      .catch(err => {
        res.status(404).send('Error getting info from Bryant application', err)
      });
  });


module.exports = router;