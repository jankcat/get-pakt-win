'use strict';

const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const SteamAPI = require('steamapi');
const locations = require('./steam_countries.min.json');

const key = functions.config().win.steam;

const steam = new SteamAPI(key);

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
const app = express();
app.use(cors({ origin: true })); // Automatically allow cross-origin requests

// POST endpoint for phoning home
app.post('/', async (req, res) => {
  if (!req.body.user) {
    res.send("No user provided.");
    return;
  }
  // Get steam id from profile URL, and get the details
  try {
    const id = await steam.resolve(req.body.user);
    const user = await steam.getUserSummary(id);
    if (!user.nickname) {
      res.send("No username, private profile?");
      return;
    }
    
    // resolve location
    const location = {
      country: user.countryCode || 'Unknown',
      state: user.stateCode || null,
      city: user.cityId || null,
      coords: '',
    };
    
    // Resolve country/state/city names if we can
    if (user.countryCode && locations[user.countryCode]) {
      const country = locations[user.countryCode];
      location.country = country.name;
      location.coords = country.coordinates;
      if (user.stateCode && country.states && country.states[user.stateCode]) {
        const state = country.states[user.stateCode];
        location.state = state.name;
        if (state.coordinates) location.coords = state.coordinates;
        if (user.cityId && state.cities && state.cities[user.cityId]) {
          const city = state.cities[user.cityId];
          location.city = city.name;
          if (city.coordinates) location.coords = city.coordinates;
        }
      }
    }
    
    // build location string
    let locationString = 'Unknown';
    if (isNaN(location.country)) locationString = location.country;
    if (isNaN(location.state)) locationString = location.state + ", " + locationString;
    if (isNaN(location.city)) locationString = location.city + ", " + locationString;
        
    const data = {
      date: Date.now(),
      id: id,
      avatar: (user.avatar && user.avatar.small) ? user.avatar.small : "",
      profile: (user.url) ? user.url : req.body.user,
      name: user.nickname,
      coordinates: location.coords,
      location: locationString,
    }; 
    
    console.log(data);
    
    await db.collection('paktd').doc(id).set(data);
    res.send(`Inserted win: ${id}`);
    
  } catch (e) {
    console.error(e);
    res.send("Failed!");
  }
});

// turn the express app into a single firebase function called win
exports.win = functions.https.onRequest(app);