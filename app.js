const CELESTIAL_BODIES = [
    {
        name: "sol",
        radius: 696340.0,
        classification: "star",
        primary: "",
        orbital_radius: null,
    },
    {
        name: "mercury",
        radius: 2439.7,
        classification: "major-planet",
        primary: "sol",
        orbital_radius: 58344000.0,
    },
    {
        name: "venus",
        radius: 6051.8,
        classification: "major-planet",
        primary: "sol",
        orbital_radius: 107712000.0,
    },
    {
        name: "earth",
        radius: 6371.0,
        classification: "major-planet",
        primary: "sol",
        orbital_radius: 149600000.0,
    },
    {
        name: "mars",
        radius: 3389.5,
        classification: "major-planet",
        primary: "sol",
        orbital_radius: 227392000.0,
    },
    {
        name: "jupiter",
        radius: 69911.0,
        classification: "major-planet",
        primary: "sol",
        orbital_radius: 777920000.0,
    },
    {
        name: "saturn",
        radius: 58232.0,
        classification: "major-planet",
        primary: "sol",
        orbital_radius: 1473560000.0,
    },
    {
        name: "uranus",
        radius: 25362.0,
        classification: "major-planet",
        primary: "sol",
        orbital_radius: 2875312000.0,
    },
    {
        name: "nepture",
        radius: 24622.0,
        classification: "major-planet",
        primary: "sol",
        orbital_radius: 4495480000.0,
    },
    {
        name: "pluto",
        radius: 1188.5,
        classification: "minor-planet",
        primary: "sol",
        orbital_radius: 5906208000.0,
    },
    {
        name: "eris",
        radius: 1163.0,
        classification: "minor-planet",
        primary: "sol",
        orbital_radius: 10151856000.0,
    },
    {
        name: "haumea",
        radius: 780.0,
        classification: "minor-planet",
        primary: "sol",
        orbital_radius: 6465712000.0,
    },
    {
        name: "makemake",
        radius: 715.0,
        classification: "minor-planet",
        primary: "sol",
        orbital_radius: 6815776000.0,
    },
    {
        name: "gongong",
        radius: 615.0,
        classification: "minor-planet",
        primary: "sol",
        orbital_radius: 10096504000.0,
    },
    {
        name: "quaoar",
        radius: 543.0,
        classification: "minor-planet",
        primary: "sol",
        orbital_radius: 6536024000.0,
    },
    {
        name: "ceres",
        radius: 469.7,
        classification: "minor-planet",
        primary: "sol",
        orbital_radius: 414092800.0,
    },
    {
        name: "orcus",
        radius: 455.0,
        classification: "minor-planet",
        primary: "sol",
        orbital_radius: 5894240000.0,
    },
    {
        name: "sedna",
        radius: 453.0,
        classification: "minor-planet",
        primary: "sol",
        orbital_radius: 75817280000.0,
    },
    {
        name: "salacia",
        radius: 423.0,
        classification: "minor-planet",
        primary: "sol",
        orbital_radius: 6310128000.0,
    },
    {
        name: "ganymede",
        radius: 2634.1,
        classification: "natural-satellite",
        primary: "jupiter",
        orbital_radius: 1070000.0,
    },
    {
        name: "titan",
        radius: 2574.73,
        classification: "natural-satellite",
        primary: "saturn",
        orbital_radius: 1222000.0,
    },
    {
        name: "callisto",
        radius: 2410.3,
        classification: "natural-satellite",
        primary: "jupiter",
        orbital_radius: 1883000.0,
    },
    {
        name: "io",
        radius: 1821.6,
        classification: "natural-satellite",
        primary: "jupiter",
        orbital_radius: 422000.0,
    },
    {
        name: "luna",
        radius: 1738.0,
        classification: "natural-satellite",
        primary: "earth",
        orbital_radius: 384000.0,
    },
    {
        name: "europa",
        radius: 1560.8,
        classification: "natural-satellite",
        primary: "jupiter",
        orbital_radius: 671000.0,
    },
    {
        name: "triton",
        radius: 1353.4,
        classification: "natural-satellite",
        primary: "neptune",
        orbital_radius: 355000.0,
    },
    {
        name: "titania",
        radius: 788.9,
        classification: "natural-satellite",
        primary: "uranus",
        orbital_radius: 436000.0,
    },
    {
        name: "rhea",
        radius: 763.8,
        classification: "natural-satellite",
        primary: "saturn",
        orbital_radius: 527000.0,
    },
    {
        name: "oberon",
        radius: 761.4,
        classification: "natural-satellite",
        primary: "uranus",
        orbital_radius: 583000.0,
    },
    {
        name: "iapetus",
        radius: 735.6,
        classification: "natural-satellite",
        primary: "saturn",
        orbital_radius: 3560000.0,
    },
    {
        name: "charon",
        radius: 606.0,
        classification: "natural-satellite",
        primary: "pluto",
        orbital_radius: 19000.0,
    },
    {
        name: "umbriel",
        radius: 584.7,
        classification: "natural-satellite",
        primary: "uranus",
        orbital_radius: 266000.0,
    },
    {
        name: "ariel",
        radius: 578.9,
        classification: "natural-satellite",
        primary: "uranus",
        orbital_radius: 191000.0,
    },
    {
        name: "dione",
        radius: 561.4,
        classification: "natural-satellite",
        primary: "saturn",
        orbital_radius: 377000.0,
    },
    {
        name: "tethys",
        radius: 533.1,
        classification: "natural-satellite",
        primary: "saturn",
        orbital_radius: 295000.0,
    },
    {
        name: "enceladus",
        radius: 252.1,
        classification: "natural-satellite",
        primary: "saturn",
        orbital_radius: 238000.0,
    },
    {
        name: "miranda",
        radius: 235.8,
        classification: "natural-satellite",
        primary: "uranus",
        orbital_radius: 129900.0,
    },
    {
        name: "proteus",
        radius: 210.0,
        classification: "natural-satellite",
        primary: "neptune",
        orbital_radius: 117600.0,
    },
    {
        name: "mimas",
        radius: 198.2,
        classification: "natural-satellite",
        primary: "saturn",
        orbital_radius: 185500.0,
    },
    {
        name: "nereid",
        radius: 17.0,
        classification: "natural-satellite",
        primary: "neptune",
        orbital_radius: 5513000.0,
    },
    {
        name: "hi'iaka",
        radius: 160.0,
        classification: "natural-satellite",
        primary: "haumea",
        orbital_radius: 49500.0,
    },
    {
        name: "hyperion",
        radius: 135.0,
        classification: "natural-satellite",
        primary: "saturn",
        orbital_radius: 1481000.0,
    },
];
const SUN_OBJECTS = {
    tennis_ball: {
        name: "tennis ball",
        diameter: 6.86,
    },
    basket_ball: {
        name: "basket ball",
        diameter: 24.2,
    },
    golf_ball: {
        name: "golf ball",
        diameter: 4.267,
    },
    ping_pong_ball: {
        name: "ping pong ball",
        diameter: 4,
    },
    base_ball: {
        name: "base ball",
        diameter: 7.5,
    },
    bowling_ball: {
        name: "bowling ball",
        diameter: 21.83,
    },
    soccer_ball: {
        name: "soccer ball",
        diameter: 23,
    },
};
const TENNIS_BALL_SUN = {
    // Major Planets
    mercury: {
        object: "",
    },
    venus: {
        object: "",
    },
    earth: {
        object: "",
    },
    mars: {
        object: "",
    },
    jupiter: {
        object: "",
    },
    saturn: {
        object: "",
    },
    uranus: {
        object: "",
    },
    neptune: {
        object: "",
    },
    // Dwarf Planets
    pluto: {
        object: "",
    },
    haumea: {
        object: "",
    },
    makemake: {
        object: "",
    },
    eris: {
        object: "",
    },
    ceres: {
        object: "",
    },
    // Natural Satellites
    moon: {
        object: "",
    },
    ganymede: {
        object: "",
    },
    titan: {
        object: "",
    },
    callisto: {
        object: "",
    },
    io: {
        object: "",
    },
    europa: {
        object: "",
    },
    triton: {
        object: "",
    },
    titania: {
        object: "",
    },
    rhea: {
        object: "",
    },
    oberon: {
        object: "",
    },
};
async function fetchPlanetaryData() {
    const url = "https://api.le-systeme-solaire.net/rest/bodies";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("There was an error!", error);
    }
}
async function checkPlanetaryData() {
    const localData = JSON.parse(localStorage.getItem("planetaryData"));
    const dt = new Date(localData.datetime);
    console.log("🚀 ~ checkPlanetaryData ~ dt:", dt);
    const old = isDateOneMonthOrOlder(dt);
    console.log("🚀 ~ checkPlanetaryData ~ old:", old);

    if (
        !localData ||
        localData === "undefined" ||
        localData.length === 0 ||
        old
    ) {
        let data = await fetchPlanetaryData();
        data = {
            datetime: new Date(),
            bodies: data.bodies,
        };
        console.log("🚀 ~ checkPlanetaryData ~ data:", data);
        localStorage.setItem("planetaryData", JSON.stringify(data));
    }
}
function isDateOneMonthOrOlder(date) {
    const currentDate = new Date(); // Current date and time
    const oneMonthAgo = new Date(
        currentDate.setMonth(currentDate.getMonth() - 1)
    ); // Subtract one month from the current date

    // Create a Date object from the input and compare
    const inputDate = new Date(date);

    return inputDate <= oneMonthAgo;
}

function populateDropdownFromArray(id, array) {
    if (!array) return;
    if (typeof array === "object") {
        array = Object.keys(SUN_OBJECTS).map((key) => ({
            name: SUN_OBJECTS[key].name,
            diameter: SUN_OBJECTS[key].diameter,
        }));
    }
    const dropdown = document.getElementById(id);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const option = document.createElement("option");
        option.value = element.name;
        option.text = element.name;
        dropdown.appendChild(option);
    }
}
function setSunObjectDiameter() {
    const dropdown = document.getElementById("sun-objects");
    let selectedOption = dropdown.value.replaceAll(" ", "_");
    const diameter = SUN_OBJECTS[selectedOption].diameter;

    const sunObjectDiameter = document.getElementById("sun-object-diameter");
    sunObjectDiameter.innerHTML = `<b>${diameter}cm</b>...`;
}

function populateOutput() {
    document.getElementById("output-major-planet").innerHTML = "";
    document.getElementById("output-minor-planet").innerHTML = "";
    document.getElementById("output-natural-satellite").innerHTML = "";

    const data = computeScaledOutput();
    const item = "ITEM";
    for (let index = 0; index < data.length; index++) {
        if (index === 0) continue;
        const element = data[index];
        const elemId = `output-${element.classification}`;
        const radius = (element.radius * 2 * 10).toFixed(1).toLocaleString();
        const orbitalRadius = (element.orbital_radius / 100)
            .toFixed(1)
            .toLocaleString();
        const primary = element.primary.toTitleCase();
        const p = document.createElement("p");
        p.innerHTML = `<b>${element.name.toTitleCase()}</b> would be a(n) <b>${item}</b> with a diameter of <b>${radius}mm</b> at about <b>${orbitalRadius}m</b> away from <i>${primary}</i>.`;
        document.getElementById(elemId).appendChild(p);
    }
}

function computeScaleFactor() {
    const dropdown = document.getElementById("sun-objects");
    let selectedOption = dropdown.value.replaceAll(" ", "_");
    const SunObjectRadius = SUN_OBJECTS[selectedOption].diameter / 2;
    const sunRadius = CELESTIAL_BODIES.find((i) => i.name === "sol").radius;
    return SunObjectRadius / sunRadius;
}

function computeScaledOutput() {
    const scaleFactor = computeScaleFactor();
    const data = [];
    for (let index = 0; index < CELESTIAL_BODIES.length; index++) {
        const element = CELESTIAL_BODIES[index];
        const radius = element.radius * scaleFactor;
        const name = element.name;
        const classification = element.classification;
        const primary = element.primary;
        const orbital_radius = element.orbital_radius * scaleFactor;

        data.push({
            name: name,
            radius: radius,
            classification: classification,
            primary: primary,
            orbital_radius: orbital_radius,
        });
    }
    return data;
}

function setupListeners() {
    const dropdown = document.getElementById("sun-objects");
    dropdown.addEventListener("change", setSunObjectDiameter);
    dropdown.addEventListener("change", populateOutput);
}

// Extended Methods

String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};
