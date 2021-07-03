// // https://gnews.io/api/v4/top-headlines?&country=in&token=2fbe580d865204c7b0fdd62469b20324
// // Country = India
// // multiCollapseExample1
// // Initialize the news api parameters
// // a21eb60c0a33b53221d30894a9fb5a5b
// let country1 = 'in';
// let apiKey1 = '2fbe580d865204c7b0fdd62469b20324';

// // Grab the news container
// let newsAccordion1 = document.getElementById('newsAccordion1');

// // Create an ajax get request
// const xhr1 = new XMLHttpRequest();
// xhr1.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country1}&token=${apiKey1}`, true);

// // What to do when response is ready
// xhr1.onload = function () {
//     if (this.status === 200) {
//         let json1 = JSON.parse(this.responseText);
//         let articles = json1.articles;
//         let newsHtml1 = "";
//         articles.forEach(function (element1, index1) {
//             // console.log(element, index)
//             let news1 = `<div class="accordion-item">
//                             <div class="accordion-header" id="headingOne">
//                                 <h2 class="mb-0">
//                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index1}" 
//                                 aria-expanded="true" aria-controls="collapse${index1}">
//                                 <span class="badge bg-primary"><b>India News${index1 + 1}:</b></span>  ${element1["title"]} ${element1["name"]}
//                                 </button>
//                             </h2>
//                             </div>
//                             <div id="collapse${index1}" class="accordion-collapse collapse " aria-labelledby="heading${index1}" 
//                             data-bs-parent="#newsAccordion">
//                                 <div class="accordion-body"> <img src="${element1["image"]}" class="img-thumbnail"/><br> ${element1["content"]}.<a href="${element1['url']}" target="_blank">Read more Here</a> </div>
//                             </div>
//                             </div>`;
//             newsHtml1 += news1;
//         });
//         newsAccordion1.innerHTML = newsHtml1;

//     }
//     else {
//         console.log("Some error occured")
//     }
// }

// // Country = India
// // multiCollapseExample1

// // Initialize the news api parameters
let country1 = 'in';
let apiKey1 = '4065b6335c30e56481facb58e9539fdc';

// Grab the news container
let newsAccordion1 = document.getElementById('newsAccordion1');

// Create an ajax get request
const xhr1 = new XMLHttpRequest();
xhr1.open('GET', `https://gnews.io/api/v4/top-headlines?&country=in&token=2fbe580d865204c7b0fdd62469b20324`, true);

// What to do when response is ready
xhr1.onload = function () {
    if (this.status === 200) {
        let json1 = JSON.parse(this.responseText);
        let articles = json1.articles;
        let newsHtml1 = "";
        articles.forEach(function (element1, index1) {
            // console.log(element, index)
            let news1 = `<div class="contanier col-lg-12">
            <div class="card col-lg-4" style="width: 18rem;">
                         <img src="${element1["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
                          <div class="card-body">
                           <h5 class="card-title"><span class="badge bg-primary"><b>India News${index1 + 1}:</b></span></h5><h4>${element1["title"]}</h4>
                                 <p class="card-text">${element1["description"]} </p>
                                 <a href="${element1['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                                   </div>
                          </div>
                          </div>`;
            newsHtml1 += news1;
        });
        newsAccordion1.innerHTML = newsHtml1;

    }
    else {
        console.log("Some error occured")
    }
}

xhr1.send()

//Country = United States
// multiCollapseExample2

// Initialize the news api parameters
let country2 = 'us';
let apiKey2 = '2fbe580d865204c7b0fdd62469b20324';

// Grab the news container
let newsAccordion2 = document.getElementById('newsAccordion2');

// Create an ajax get request
const xhr2 = new XMLHttpRequest();
xhr2.open('GET', `https://gnews.io/api/v4/top-headlines?country=${country2}&token=${apiKey2}`, true);

// What to do when response is ready
xhr2.onload = function () {
    if (this.status === 200) {
        let json2 = JSON.parse(this.responseText);
        let articles = json2.articles;
        let newsHtml2 = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news2 = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-danger"><b>United States News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["description"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml2 += news2;
        });
        newsAccordion2.innerHTML = newsHtml2;
    }
    else {
        console.log("Some error occured")
    }
}

xhr2.send()

//Country = United Kingdom
let country3 = 'gb'
let apiKey3 = '31cd0bf8238b4cd31197f4881df62625';

// Grab the news container
let newsAccordion3 = document.getElementById('newsAccordion3');

// Create an ajax get request
const xhr3 = new XMLHttpRequest();
xhr3.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country3}&token=${apiKey3}`, true);

// What to do when response is ready
xhr3.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-secondary"><b>United Kingdom News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["description"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>
           `;
            newsHtml += news;
        });
        newsAccordion3.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr3.send()


//Country = Australia
// multiCollapseExample4

let country4 = 'au'
let apiKey4 = 'e8e4b8b117d32e54740cbf6cfb039811';

// Grab the news container
let newsAccordion4 = document.getElementById('newsAccordion4');

// Create an ajax get request
const xhr4 = new XMLHttpRequest();
xhr4.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country4}&token=${apiKey4}`, true);

// What to do when response is ready
xhr4.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-success"><b>Australia News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["description"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>
             `;
            newsHtml += news;
        });
        newsAccordion4.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr4.send()



//Country = Russian Federation
// multiCollapseExample5

let country5 = 'ru'
let apiKey5 = '599850f0eb5f84f3e94a432176723a04';

// Grab the news container
let newsAccordion5 = document.getElementById('newsAccordion5');

// Create an ajax get request
const xhr5 = new XMLHttpRequest();
xhr5.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country5}&token=${apiKey5}`, true);

// What to do when response is ready
xhr5.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-warning text-dark"><b>Russian Federation News${index + 1}:</b></span> </h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["description"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion5.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr5.send()


//Country = Japan
// multiCollapseExample6

let country6 = 'jp'
let apiKey6 = '69c40753f0e8330756437a69c3595fc9';

// Grab the news container
let newsAccordion6 = document.getElementById('newsAccordion6');

// Create an ajax get request
const xhr6 = new XMLHttpRequest();
xhr6.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country6}&token=${apiKey6}`, true);

// What to do when response is ready
xhr6.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-info text-dark"><b>Japan News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["description"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion6.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr6.send()


//Country = Germany
// multiCollapseExample7
let country7 = 'de'
let apiKey7 = '471220ffcc4bb873f98f56529868ca97';

// Grab the news container
let newsAccordion7 = document.getElementById('newsAccordion7');

// Create an ajax get request
const xhr7 = new XMLHttpRequest();
xhr7.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country7}&token=${apiKey7}`, true);

// What to do when response is ready
xhr7.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-dark"><b>Germany News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["description"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion7.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr7.send()


//Country = France
// multiCollapseExample8
let country8 = 'fr'
let apiKey8 = '945e284e5999dda63409a2deb149e04a';

// Grab the news container
let newsAccordion8 = document.getElementById('newsAccordion8');

// Create an ajax get request
const xhr8 = new XMLHttpRequest();
xhr8.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country8}&token=${apiKey8}`, true);

// What to do when response is ready
xhr8.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image  is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"> <span class="badge bg-light text-dark"><b>France News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["description"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>`;
            newsHtml += news;
        });
        newsAccordion8.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr8.send()


//Country = Brazil
// multiCollapseExample9
let country9 = 'br'
let apiKey9 = 'f05f4f63650ef698e7ea2ea870dcbf3a';

// Grab the news container
let newsAccordion9 = document.getElementById('newsAccordion9');

// Create an ajax get request
const xhr9 = new XMLHttpRequest();
xhr9.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country9}&token=${apiKey9}`, true);

// What to do when response is ready
xhr9.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-success"><b>Brazil News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["description"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion9.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr9.send()




//Country = Switzerland
// multiCollapseExample10
let country10 = 'ch'
let apiKey10 = '9c2a597348f1020356ebb5ec6dcccb3f';

// Grab the news container
let newsAccordion10 = document.getElementById('newsAccordion10');

// Create an ajax get request
const xhr10 = new XMLHttpRequest();
xhr10.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country10}&token=${apiKey10}`, true);

// What to do when response is ready
xhr10.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-light text-dark"><b>Switzerland News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["description"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion10.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr10.send()

//======================================================================================================================================

//Language = India-English
// multiCollapseExample11
let country11 = 'in'
let lang11 = 'en';
let apiKey11 = '30d709b359dac0ac33f0c80887a78616';

// Grab the news container
let newsAccordion11 = document.getElementById('newsAccordion11');

// Create an ajax get request
const xhr11 = new XMLHttpRequest();
xhr11.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country11}&lang=${lang11}&token=${apiKey11}`, true);

// What to do when response is ready
xhr11.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill bg-primary"><b>India-English News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["description"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion11.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr11.send()



//Language = India-Hindi
// multiCollapseExample12
let country12 = 'in'
let lang12 = 'hi';
let apiKey12 = 'dd36aeaa9c36e66201cc21edbd7592fa';

// Grab the news container
let newsAccordion12 = document.getElementById('newsAccordion12');

// Create an ajax get request
const xhr12 = new XMLHttpRequest();
xhr12.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country12}&lang=${lang12}&token=${apiKey12}`, true);

// What to do when response is ready
xhr12.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-secondary"><b>India-Hindi News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion12.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr12.send()


//Language = India-Marathi
// multiCollapseExample13
let country13 = 'in'
let lang13 = 'mr';
let apiKey13 = '48a417b5fd5ef3f28da4f93bb5e9a0d3';

// Grab the news container
let newsAccordion13 = document.getElementById('newsAccordion13');

// Create an ajax get request
const xhr13 = new XMLHttpRequest();
xhr13.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country13}&lang=${lang13}&token=${apiKey13}`, true);

// What to do when response is ready
xhr13.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card" style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill bg-success"><b>India-Marathi News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion13.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr13.send()



//Language = India-Tamil
// multiCollapseExample14
let country14 = 'in'
let lang14 = 'ta';
let apiKey14 = '8bb2d40b030d8c210325046e26f18256';

// Grab the news container
let newsAccordion14 = document.getElementById('newsAccordion14');

// Create an ajax get request
const xhr14 = new XMLHttpRequest();
xhr14.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country14}&lang=${lang14}&token=${apiKey14}`, true);

// What to do when response is ready
xhr14.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-danger"><b>India-Tamil News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion14.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr14.send()



//Language = India-Telugu
// multiCollapseExample15
let country15 = 'in'
let lang15 = 'te';
let apiKey15 = '3ce84463518544e27954b0e4730a2b17';

// Grab the news container
let newsAccordion15 = document.getElementById('newsAccordion15');

// Create an ajax get request
const xhr15 = new XMLHttpRequest();
xhr15.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country15}&lang=${lang15}&token=${apiKey15}`, true);

// What to do when response is ready
xhr15.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill bg-warning text-dark"><b>India-Telugu News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion15.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr15.send()


//Language = India-Malayalam
// multiCollapseExample16
let country16 = 'in'
let lang16 = 'ml';
let apiKey16 = '079238b6df7f071c174792fabcaa4249';

// Grab the news container
let newsAccordion16 = document.getElementById('newsAccordion16');

// Create an ajax get request
const xhr16 = new XMLHttpRequest();
xhr16.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country16}&lang=${lang16}&token=${apiKey16}`, true);

// What to do when response is ready
xhr16.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-info text-dark"><b>India-Malayalam News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>
            `;
            newsHtml += news;
        });
        newsAccordion16.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr16.send()




//Language = United States-English
// multiCollapseExample17
let country17 = 'us'
let lang17 = 'en';
let apiKey17 = 'bac456db9292b2b1a02ff7515e7c0e87';

// Grab the news container
let newsAccordion17 = document.getElementById('newsAccordion17');

// Create an ajax get request
const xhr17 = new XMLHttpRequest();
xhr17.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country17}&lang=${lang17}&token=${apiKey17}`, true);

// What to do when response is ready
xhr17.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill bg-light text-dark"><b>United States-English News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion17.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr17.send()



//Language = United Kingdom-English
// multiCollapseExample18
let country18 = 'gb'
let lang18 = 'en';
let apiKey18 = '51c646b2fa7b9d55e29b4444cbc54081';

// Grab the news container
let newsAccordion18 = document.getElementById('newsAccordion18');

// Create an ajax get request
const xhr18 = new XMLHttpRequest();
xhr18.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country18}&lang=${lang18}&token=${apiKey18}`, true);

// What to do when response is ready
xhr18.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-dark"><b>United Kingdom-English News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion18.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr18.send()


//Language = Russian Federation-Russian
// multiCollapseExample19
let country19 = 'ru'
let lang19 = 'ru';
let apiKey19 = '2f859088d51db26368f3d0fc233d2257';

// Grab the news container
let newsAccordion19 = document.getElementById('newsAccordion19');

// Create an ajax get request
const xhr19 = new XMLHttpRequest();
xhr19.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country19}&lang=${lang19}&token=${apiKey19}`, true);

// What to do when response is ready
xhr19.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill bg-primary"><b>Russian Federation-Russian News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion19.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr19.send()



//Language = Germany-German
// multiCollapseExample20
let country20 = 'de'
let lang20 = 'de';
let apiKey20 = '9dfdfc03369361116bbe7abba3eaf31f';

// Grab the news container
let newsAccordion20 = document.getElementById('newsAccordion20');

// Create an ajax get request
const xhr20 = new XMLHttpRequest();
xhr20.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country20}&lang=${lang20}&token=${apiKey20}`, true);

// What to do when response is ready
xhr20.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-secondary"><b>Germany-German News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion20.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr20.send()



//Language = France-French
// multiCollapseExample21
let country21 = 'fr'
let lang21 = 'fr';
let apiKey21 = 'a17f19eb4241ec6a389b6136106b0444';

// Grab the news container
let newsAccordion21 = document.getElementById('newsAccordion21');

// Create an ajax get request
const xhr21 = new XMLHttpRequest();
xhr21.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country21}&lang=${lang21}&token=${apiKey21}`, true);

// What to do when response is ready
xhr21.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill bg-success"><b>France-French News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion21.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr21.send()


//Language = Romania-Romanian
// multiCollapseExample22
let country22 = 'ro'
let lang22 = 'ro';
let apiKey22 = '1244ce6188370ec9602cd0ffcdc1e894';

// Grab the news container
let newsAccordion22 = document.getElementById('newsAccordion22');

// Create an ajax get request
const xhr22 = new XMLHttpRequest();
xhr22.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country22}&lang=${lang22}&token=${apiKey22}`, true);

// What to do when response is ready
xhr22.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge bg-danger"><b>Romania-Romanian News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion22.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr22.send()


//Language = Japan-Japanese
// multiCollapseExample23
let country23 = 'jp'
let lang23 = 'jp';
let apiKey23 = 'a6d441ef441fa8715d83c99ae4f387fc';

// Grab the news container
let newsAccordion23 = document.getElementById('newsAccordion23');

// Create an ajax get request
const xhr23 = new XMLHttpRequest();
xhr23.open('GET', `https://gnews.io/api/v4/top-headlines?&country=${country23}&lang=${lang23}&token=${apiKey23}`, true);

// What to do when response is ready
xhr23.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill bg-warning text-dark"><b>Japan-Japanese News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion23.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr23.send()



// =======================================================================================================================================
//Topics = breaking-news
// multiCollapseExample24

let topic24 = 'breaking-news'
let lang24 = 'en';
let apiKey24 = '4cb0cff412dd223f56ed7a46b90bfdbb';

// Grab the news container
let newsAccordion24 = document.getElementById('newsAccordion24');

// Create an ajax get request
const xhr24 = new XMLHttpRequest();
xhr24.open('GET', `https://gnews.io/api/v4/top-headlines?&topic=${topic24}&lang=${lang24}&token=${apiKey24}`, true);

// What to do when response is ready
xhr24.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill btn-danger"><b>Breaking-news${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion24.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr24.send()



//Topics = world
// multiCollapseExample25

let topic25 = 'world'
let lang25 = 'en';
let apiKey25 = '9ffbdf6d00900ba1552fc4e18f360c57';

// Grab the news container
let newsAccordion25 = document.getElementById('newsAccordion25');

// Create an ajax get request
const xhr25 = new XMLHttpRequest();
xhr25.open('GET', `https://gnews.io/api/v4/top-headlines?&topic=${topic25}&lang=${lang25}&token=${apiKey25}`, true);

// What to do when response is ready
xhr25.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill bg-success"><b>World News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion25.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr25.send()


//Topics = nation
// multiCollapseExample26

let topic26 = 'nation'
let lang26 = 'en';
let apiKey26 = '0ef8a0ec4ca26dd3075be0240d2b4c68';

// Grab the news container
let newsAccordion26 = document.getElementById('newsAccordion26');

// Create an ajax get request
const xhr26 = new XMLHttpRequest();
xhr26.open('GET', `https://gnews.io/api/v4/top-headlines?&topic=${topic26}&lang=${lang26}&token=${apiKey26}`, true);

// What to do when response is ready
xhr26.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill btn-primary"><b>Nation News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion26.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr26.send()


//Topics = business
// multiCollapseExample27

let topic27 = 'business'
let lang27 = 'en';
let apiKey27 = '8145ad2a206c66f5c1437e1757f09687';

// Grab the news container
let newsAccordion27 = document.getElementById('newsAccordion27');

// Create an ajax get request
const xhr27 = new XMLHttpRequest();
xhr27.open('GET', `https://gnews.io/api/v4/top-headlines?&topic=${topic27}&lang=${lang27}&token=${apiKey27}`, true);

// What to do when response is ready
xhr27.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill btn-secondary"><b>Business News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion27.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr27.send()



//Topics = technology
// multiCollapseExample28

let topic28 = 'technology'
let lang28 = 'en';
let apiKey28 = '372819cd2c33f4d39abdcc6a22a7eb86';

// Grab the news container
let newsAccordion28 = document.getElementById('newsAccordion28');

// Create an ajax get request
const xhr28 = new XMLHttpRequest();
xhr28.open('GET', `https://gnews.io/api/v4/top-headlines?&topic=${topic28}&lang=${lang28}&token=${apiKey28}`, true);

// What to do when response is ready
xhr28.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill btn-warning"><b>Technology News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion28.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr28.send()


//Topics = entertainment
// multiCollapseExample29

let topic29 = 'entertainment'
let lang29 = 'en';
let apiKey29 = 'd96ccf3577bb737dfdc1e0f8769e9fd8';

// Grab the news container
let newsAccordion29 = document.getElementById('newsAccordion29');

// Create an ajax get request
const xhr29 = new XMLHttpRequest();
xhr29.open('GET', `https://gnews.io/api/v4/top-headlines?&topic=${topic29}&lang=${lang29}&token=${apiKey29}`, true);

// What to do when response is ready
xhr29.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill btn-info text-dark"><b>Entertainment News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion29.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr29.send()



//Topics = sports
// multiCollapseExample30

let topic30 = 'sports'
let lang30 = 'en';
let apiKey30 = 'f10df80d7ade822486f7423a0400d596';

// Grab the news container
let newsAccordion30 = document.getElementById('newsAccordion30');

// Create an ajax get request
const xhr30 = new XMLHttpRequest();
xhr30.open('GET', `https://gnews.io/api/v4/top-headlines?&topic=${topic30}&lang=${lang30}&token=${apiKey30}`, true);

// What to do when response is ready
xhr30.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill btn-light text-dark"><b>Sports News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion30.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr30.send()



//Topics = science
// multiCollapseExample31

let topic31 = 'science'
let lang31 = 'en';
let apiKey31 = '22a6e0766e38d6fc89a9c143b3ef2522';

// Grab the news container
let newsAccordion31 = document.getElementById('newsAccordion31');

// Create an ajax get request
const xhr31 = new XMLHttpRequest();
xhr31.open('GET', `https://gnews.io/api/v4/top-headlines?&topic=${topic31}&lang=${lang31}&token=${apiKey31}`, true);

// What to do when response is ready
xhr31.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill btn-warning  text-dark"><b>Science News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion31.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr31.send()



//Topics = health
// multiCollapseExample32

let topic32 = 'health'
let lang32 = 'en';
let apiKey32 = 'a475701d0b1781eb9433d0a3f85a682d';

// Grab the news container
let newsAccordion32 = document.getElementById('newsAccordion32');

// Create an ajax get request
const xhr32 = new XMLHttpRequest();
xhr32.open('GET', `https://gnews.io/api/v4/top-headlines?&topic=${topic32}&lang=${lang32}&token=${apiKey32}`, true);

// What to do when response is ready
xhr32.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card " style="width: 18rem;">
            <img src="${element["image"]}" class="card-img-top" alt="Sorry the Image is not availble Right Now!!!">
             <div class="card-body">
              <h5 class="card-title"><span class="badge rounded-pill btn-danger"><b>Health News${index + 1}:</b></span></h5><h4>${element["title"]}</h4>
                    <p class="card-text">${element["content"]} </p>
                    <a href="${element['url']}" target="_blank" class="btn btn-primary">Read more Here</a>
                      </div>
             </div>`;
            newsHtml += news;
        });
        newsAccordion32.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr32.send()



