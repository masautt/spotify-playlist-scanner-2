import { ACCESS_TOKEN } from "./env";
import { search} from "./search";
const SEARCH_TERM = "memes";
const SEARCH_TYPE = "playlist";
const SEARCH_LIMIT = "10";

search({
    term : SEARCH_TERM,
    limit : SEARCH_LIMIT,
    type : SEARCH_TYPE,
    token : ACCESS_TOKEN
}).then(data => {
    data.playlists.items.forEach((e : any) => {
        console.log(e);
        
    });
});



