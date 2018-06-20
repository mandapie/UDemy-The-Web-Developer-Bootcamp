var movies = [
    {
        title: "Harry Potter",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Your Name",
        rating: 4,
        hasWatched: true
    },
    {
        title: "Moanna",
        rating: 5,
        hasWatched: false
    },
    {
        title: "Player One",
        rating: 4.5,
        hasWatched: true
    }
]

movies.forEach(movie => {
    if (movie.hasWatched === true) {
        console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
    }
    else {
        console.log("You have not watched \"" + movie.title + "\" - " + movie.rating + " stars");
    }
});