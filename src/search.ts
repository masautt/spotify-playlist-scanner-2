import axios from "axios";

interface Args {
    term: string | undefined;
    type: string | undefined;
    limit: string | undefined;
    token: string | undefined;
}
export const search = ({ type, term, limit, token }: Args) => {
    axios({
        method: "GET",
        url: "https://api.spotify.com/v1/search",
        params: {
            q: term,
            type: type,
            limit: `${limit}`
        },
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then((result) => result.data).catch(err => console.log(err));
}
