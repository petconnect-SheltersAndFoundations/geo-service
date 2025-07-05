const Location = require('../models/locationModels');

exports.createLocation = async (req, res) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.status(201).json(location);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getNearbyLocations = async (req, res) => {
  try {
    const { lng, lat, distance = 5000 } = req.query;

    const locations = await Location.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          $maxDistance: parseInt(distance)
        }
      }
    });

    res.json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
