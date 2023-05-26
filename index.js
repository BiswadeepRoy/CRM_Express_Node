import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes'

const app = express();
const PORT = 3000;

// mongoose connection(mongoDB connection)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// serving static files
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})

routes(app, PORT);