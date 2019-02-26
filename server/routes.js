const router = require("express").Router();
const axios = require('axios');

// PRODUCT DETAILS ROUTES

router
  .route("/getinfo").get((req, res) => {
    
    const { shoe_id } = req.query;
    
    axios
      .get('http://ec2-52-14-78-34.us-east-2.compute.amazonaws.com:3002/api/getinfo', {params: {shoe_id}})
      .then(info => {
        res.status(200).send(info.data)
      })
      .catch(err => {
        res.status(404).send('Error getting info from Bryant application', err)
      });
  });

router
  .route("/getcolors").get((req, res) => {

   const {shoe_id} = req.query;

    axios
      .get("http://ec2-52-14-78-34.us-east-2.compute.amazonaws.com:3002/api/getcolors", {params: {shoe_id}})
      .then(colors => {
        res.status(200).send(colors.data) 
      })
      .catch(err => {
        res.status(404).send('Error getting colors', err);
      });
  });


router
  .route("/getpictures").get((req, res) => {

    const {shoe_id, color_id} = req.query;
    
    axios
      .get("http://ec2-52-14-78-34.us-east-2.compute.amazonaws.com:3002/api/getpictures", {params: {shoe_id, color_id}})
      .then(pictures => {
        res.status(200).send(pictures.data) 
      })
      .catch(err => {
        res.status(404).send('Error getting pictures', err)
      });
  });

// REVIEWS ROUTES

router
  .route('/review/preview').get((req, res) => {

    const { productId } = req.query;

    axios
      .get('http://ec2-54-193-33-71.us-west-1.compute.amazonaws.com:3003/api/review/preview', {params: {productId}})
      .then(previews => {
        res.status(200).send(previews.data)
      })
      .catch(err => {
        res.status(404).send('Error getting previws', err)
      });
  });

router
  .route('/review/fullview').get((req, res) => {

    axios

      .get('http://ec2-54-193-33-71.us-west-1.compute.amazonaws.com:3003/api/review/fullview')
      .then(views => {
        res.status(200).send(views.data)
      })
      .catch(err => {
        res.status(404).send('Error getting views', err)
      });
  });

router
  .route('review/count').get((req, res) => {

    const { id } = req.query;

    axios
      .get('http://ec2-54-193-33-71.us-west-1.compute.amazonaws.com:3003/api/review/count', {params: {id}})
      .then(count => {
        res.status(200).send(count.data)
      })
      .catch(err => {
        res.status(404).send('Error getting count', err)
      });
  });

router
  .route('product-detail').get((req, res) => {
    const { id } = req.query;

    axios
      .get('http://ec2-54-193-33-71.us-west-1.compute.amazonaws.com:3003/api/product-detail', {params: {id}})
      .then(details => {
        res.status(200).send(details.data)
      })
      .catch(err => {
        res.status(404).send('Error getting details', err)
      });
  });




// CAROUSEL ROUTE

router
  .route('/shoeList').get((req, res) => {

    const { category } = req.query;

    axios
      .get('http://ec2-18-219-43-149.us-east-2.compute.amazonaws.com:3004/api/shoeList', {params: { category }})
      .then(shoes => {
        res.status(200).send(shoes.data)
      })
      .catch(err => {
        res.status(404).send('Error getting shoes', err)
      });
  });



module.exports = router;



