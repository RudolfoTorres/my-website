function changeDescriptions(text,width,display){
    console.log(text);
    console.log(width);
    console.log(display);
};

const descriptions = [
    {
        text: "//Programador PHP e MySQL (Back-end);",
        width: "14.1em",
        display: "none"
    },
    {
        text: "//Desenvolvedor Web CSS, HTML5 e Javascript",
        width: "14.1em",
        display: "none"
    },
    {
        text: "//Biblioteca 3D render (Three.js)",
        width: "14.1em",
        display: "none"
    }
];

for (var i = 0; i < descriptions.length; i++) {
    changeDescriptions(descriptions[i].text, descriptions[i].width, descriptions[i].display);
};