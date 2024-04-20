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
        name: "neptune",
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
const REAL_WORLD_OBJECTS_BY_SIZE = {
    0: "a grain of sand",
    "0.00": "a grain of sand",
    "0.0": "a grain of sand",
    0.01: "a grain of sand",
    0.02: "a grain of sand",
    0.03: "a grain of sand",
    0.04: "a grain of sand",
    0.05: "a grain of sand",
    0.06: "a grain of sand",
    0.07: "a grain of sand",
    0.08: "a grain of sand",
    0.09: "a grain of sand",
    0.1: "a strand of human hair", // Average diameter of a human hair
    0.2: "a pinhead", // Small pinhead
    0.3: "a fine sewing needle", // Diameter of a fine sewing needle
    0.4: "", // Approximate thickness of standard cardboard
    0.5: "the tip of a standard pencil", // Diameter of the lead in a standard mechanical pencil
    0.6: "the graphite from a mechanical pencil", // Graphite diameter for a 0.6 mm mechanical pencil
    0.7: "a grain of rice", // Average diameter of a ladybug
    0.8: "a grain of rice", // Width of a medium grain of rice
    0.9: "a matchstick head", // Diameter of a typical matchstick head
    1.0: "the tip of a paper clip wire", // Typical diameter of the wire used in a standard paper clip
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
    sunObjectDiameter.innerHTML = `<b>${diameter} cm</b>`;
}
function setSunObjectIcon() {
    const dropdown = document.getElementById("sun-objects");
    let selectedOption = dropdown.value.replaceAll(" ", "-");
    const img = document.getElementById("sun-object");
    img.src = `images/${selectedOption}.svg`;
    img.alt = `A(n) ${selectedOption.replaceAll("-", " ")}`;
}
function populateOutput() {
    document.getElementById("output-major-planet").innerHTML = "";
    document.getElementById("output-minor-planet").innerHTML = "";
    document.getElementById("output-natural-satellite").innerHTML = "";
    const scaleDiv = document.getElementById("scale");
    scaleDiv.innerHTML = "";

    let data = computeScaledOutput();
    const scale = `1 : ${data.scale.toLocaleString()}`;
    scaleDiv.innerHTML = scale;
    data = data.data;

    for (let index = 0; index < data.length; index++) {
        if (index === 0) continue;
        let img;
        const element = data[index];
        const elemId = `output-${element.classification}`;
        const radius = formatKilometersToReadable(element.radius * 2);
        const orbitalRadius = formatKilometersToReadable(
            element.orbital_radius / 100000
        );
        const primary = element.primary.toTitleCase();
        // const diameterMM = (element.radius * 2 * 1000000).toFixed(1); // Multiplying by 1,000,000 to convert from cm to mm
        const diameterMM = Math.floor(element.radius * 2 * 1000000 * 10) / 10; // Multiplying by 1,000,000 to convert from cm to mm
        console.log(`🚀 ~ populateOutput ~ ${element.name}:`, diameterMM);
        const item = REAL_WORLD_OBJECTS_BY_SIZE[diameterMM];

        if (element.classification === "major-planet") {
            img = document.createElement("img");
            img.src = `images/${element.name}.svg`;
            img.style.height = "30px";
        }

        const p = document.createElement("div");
        p.classList.add("flex", "gap-2", "items-center");

        if (element.classification === "major-planet") p.appendChild(img);

        const span = document.createElement("span");
        span.innerHTML = `<b>${element.name.toTitleCase()}</b> would be <b>${item}</b> with a diameter of <b>${radius}</b> at about <b>${orbitalRadius}</b> away from <i>${primary}</i>.`;

        p.appendChild(span);
        document.getElementById(elemId).appendChild(p);
    }
}

function formatKilometersToReadable(km) {
    const millimeters = km * 1000000;
    if (millimeters >= 1000000) {
        const meters = millimeters / 1000000;
        return `${meters.toFixed(2).toLocaleString()} km`; // Output in meters
    } else if (millimeters >= 1000) {
        const meters = millimeters / 1000;
        return `${meters.toFixed(2).toLocaleString()} m`; // Output in meters
    } else if (millimeters >= 10) {
        const centimeters = millimeters / 10;
        return `${centimeters.toFixed(2).toLocaleString()} cm`; // Output in centimeters
    } else {
        return `${millimeters.toFixed(2).toLocaleString()} mm`; // Output in millimeters
    }
}

function computeScaleFactor() {
    const dropdown = document.getElementById("sun-objects");
    let selectedOption = dropdown.value.replaceAll(" ", "_");
    const SunObjectRadius = SUN_OBJECTS[selectedOption].diameter / 2;
    const sunRadius = CELESTIAL_BODIES.find((i) => i.name === "sol").radius;
    const scaleFactor = SunObjectRadius / sunRadius;

    const realUnitsPerModelUnit = 1 / scaleFactor;
    const scale = realUnitsPerModelUnit;

    return { scaleFactor: scaleFactor, scale: scale };
}

function computeScaledOutput() {
    const scaleData = computeScaleFactor();
    const scaleFactor = scaleData.scaleFactor;
    const scale = scaleData.scale;
    const data = [];
    for (let index = 0; index < CELESTIAL_BODIES.length; index++) {
        const element = CELESTIAL_BODIES[index];
        const radius = (element.radius * scaleFactor) / 100000; // Divide by 100,000 to convert from cm to km so that we can format it nicely.
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
    return { data: data, scale: scale };
}

function setupListeners() {
    const dropdown = document.getElementById("sun-objects");
    dropdown.addEventListener("change", setSunObjectDiameter);
    dropdown.addEventListener("change", populateOutput);
    dropdown.addEventListener("change", setSunObjectIcon);
}

// Extended Methods

String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};
