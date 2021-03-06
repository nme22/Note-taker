// Import anything we need
const express = require('express')

// require routes
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Initialize the application and create my port
const app = express();
const PORT = process.env.PORT || 3000;

// setting up the body parsing for static and routing middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {
    // do logging
    next(); // make sure we go to the next routes and don't stop here
});
app.use(express.static('public'));

// bring in routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)


// start my server
app.listen(PORT, () => console.log(`My app is running on PORT: ${PORT}`));