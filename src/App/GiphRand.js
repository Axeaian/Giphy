const GiphRand = (val) => {

    let search = val.replace(" ", "+");

    async function Giphdata() {
        const response = await fetch(
            `http://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_YOUR_API_KEY}&tag=${search}&limit=1`
        );
        const data = await response.json();
        return data;
    }
    return (
        Giphdata()
    );
}

export default GiphRand;
