let friends = {
    names: "wisdom , sochima",
    hobby: "reading",
    
    laptop: {
        cpu: "i5",
        ram: 4,
        brand: "hp"
    }
}

for (let key in friends)
{
    console.log(key, friends[key]);
}