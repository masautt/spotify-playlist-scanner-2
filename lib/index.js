"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = require("./env");
var getPlaylists_1 = require("./getPlaylists");
var SEARCH_TERM = "memes";
var SEARCH_TYPE = "playlist";
var SEARCH_LIMIT = "10";
getPlaylists_1.getPlaylists({
    term: SEARCH_TERM,
    limit: SEARCH_LIMIT,
    type: SEARCH_TYPE,
    token: env_1.SPOTIFY_ACCESS_TOKEN
}).then(function (data) {
    data.playlists.items.forEach(function (e) {
        console.log(e);
    });
});
