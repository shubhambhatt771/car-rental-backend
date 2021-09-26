const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { router } = require('./routes/cars.routes');
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

const init = async () => {

    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("database connected"))
        .catch(err => console.log(err));

    app.use('/api/cars', router);
    app.listen(PORT, () => console.log("server running on PORT =>", PORT));

}
init();