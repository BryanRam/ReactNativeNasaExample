var api = {
    getRovers(){
        var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=sxBwSiPW5SSnKgYQ0HrMZhMSYXYyPOK4xohFng6d';
        return fetch(url).then((res) => res.json()); //convert result to json
    }
};

module.exports = api;