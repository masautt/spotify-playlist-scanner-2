"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
exports.getPlaylists = function (_a) {
    var type = _a.type, term = _a.term, limit = _a.limit, token = _a.token;
    return axios_1.default({
        method: "GET",
        url: "https://api.spotify.com/v1/search",
        params: {
            q: term,
            type: type,
            limit: "" + limit
        },
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    }).then(function (result) { return result.data; }).catch(function (err) { return console.log(err); });
};
