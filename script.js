const data = '[{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg","description":"London"},{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg","description":"Paris"},{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg","description":"New York"},{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg","description":"Nova Scotia"},{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/tokio.jpg","description":"Tokio"},{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg","description":"Venice"}]'

const object = JSON.parse(data);

// console.log(getGallery);

const getGallery = document.querySelector(".gallery");

const getHtmlforImage = (img) =>{
    const url = img.url;
    const description = img.description;
    return '<img src="' + url + '" alt="' + description + '">'
};

const getHtmlforDescription = (des) => {
    const description = des.description;
    return '<div class="image__description">' + description + "</div>";
};

object.forEach((element) => {

    getGallery.innerHTML +=
    '<div class="image">' +
    getHtmlforImage(element) +
    getHtmlforDescription(element) +
    "</div>";

});
