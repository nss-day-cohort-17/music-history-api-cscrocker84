'use strict'

// <require a song model>

const { bookshelf } = require('..db/database');
const Song = require('../models/song');

// < use model methods for getting all songs and one song then send the response back with the data>

module.exports.getSongs = (req, res, next) => {
    Song.getAllSongs()
    .then((songs) => {
        res.status(200).json(songs)
    })
    .catch((error) => {
        next(error);
    })
}

// and one song then send the response back with the data>

module.exports.getSong = ({params: {id}}, res, next) => {
    song.getOneSong(id)
    .then((song) => {
        res.status(200).json(song)
    })
    .catch((error) => {
        next(error)
    })
}
// <stretch goal: methods for adding, deleting, editing a song>
