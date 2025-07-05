require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const geoRoutes = require('./routes/geo');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('🌍 MongoDB connected to geo-service'))
  .catch(err => console.error('❌ Error MongoDB:', err));

app.use('/api/v1/geo', geoRoutes);

const PORT = process.env.PORT || 3026;
app.listen(PORT, () => {
  console.log(`📍 Geo Service running on port ${PORT}`);
});
