const UrbanDictionary = (val) => {

    let search = val.replace(" ", "+");

    async function ud() {
        const response = await fetch(
            `https://api.urbandictionary.com/v0/define?term=${search}`
        );
        const data = await response.json();
        console.log(data);
        return data;
    }
    return (
        ud()
    );
}

export default UrbanDictionary;
