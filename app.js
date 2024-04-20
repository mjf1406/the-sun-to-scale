const CELESTIAL_BODIES = {
    sun: {
        object: "The Sun",
        diameter: 696340,
    },
};
const SUN_OBJECTS = {
    tennis_ball: {
        diameter: 6.86,
    },
    basket_ball: {
        diameter: 24.2,
    },
    golf_ball: {
        diameter: 4.267,
    },
    ping_pong_ball: {
        diameter: 4,
    },
    base_ball: {
        diameter: 7.5,
    },
    bowling_ball: {
        diameter: 21.83,
    },
    soccer_ball: {
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

let data = [];

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
        data = await fetchPlanetaryData();
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
