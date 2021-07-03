const http = require("http");
const fs = require("fs");
var requests = require("requests");

const index1File = fs.readFileSync("index1.html", "utf-8");
const replaceval = (tempval, orgval) => {
    let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgval.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max);
    temperature = temperature.replace("{%location%}", orgval.name);
    temperature = temperature.replace("{%country%}", orgval.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgval.weather[0].main);

    return temperature;

}

const server = http.createServer((req, res) => {
    if (req.url = "/") {
        requests(
            "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=acafb9fbd4091c4980666357cb2a5fad"
        )
            .on("data", (chunk) => {
                const objdata = JSON.parse(chunk);
                const arrData = [objdata];

                console.log(arrData[0].main.temp);
                const realTimeData = arrData
                    .map((val) => replaceval(index1File, val))
                    .join("");
                res.write(realTimeData);
                //   console.log(realTimeData);

            })
            .on("end", (err) => {
                if (err) return console.log("connection closed due to errors", err);
                res.end();

            });
    }
});

server.listen(8000, "127.0.0.1");