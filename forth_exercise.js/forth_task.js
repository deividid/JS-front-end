function movie(data) {
    let allMovies = [];

    for (let d of data) {
        let movieName = '';
        let movieDirector = '';
        let movieDate = '';

        if (d.includes("addMovie")) {
            movieName = d.slice(9);
            let newObj = {
                name: movieName,
            }
            allMovies.push(newObj);

        } else if (d.includes("directedBy")) {
            let dirIndex = d.indexOf("directedBy");
            movieName = d.slice(0, dirIndex - 1);
            movieDirector = d.slice(dirIndex + 11);

            for (let m of allMovies) {
                if (m.name == movieName) {
                    m["director"] = movieDirector;
                }
            }

        } else if (d.includes("onDate")) {
            let dateIndex = d.indexOf("onDate");
            movieName = d.slice(0, dateIndex - 1);
            movieDate = d.slice(dateIndex + 7);

            for (let m of allMovies) {
                if (m.name == movieName) {
                    m["date"] = movieDate;
                }
            }
        }
    }

    for (let m of allMovies) {
        if ('director' in m && 'date' in m) {
            let movieJSON = JSON.stringify(m)
            console.log(movieJSON);
        
        }
    }

    
}

movie([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])


