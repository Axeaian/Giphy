const Giphfetch = (val) => {

    let search = val.replace(" ", "+");

    async function Giphdata() {
        const response = await fetch(
            `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=IUbmiD5tMxUr3ajPMz1i2I9gpjEoUu0T`
        );
        const data = await response.json();
        return data;
    }
    return (
        Giphdata()
    );
}

export default Giphfetch;
