const cars = {
  "Abarth": [
    "500",
    "595",
    "695"
  ],

  "Alfa Romeo": [
    "Giulia",
    "Giulietta",
    "Stelvio",
    "Tonale",
    "Junior"
  ],

  "Audi": [
    "A1",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q7",
    "Q8",
    "TT"
  ],

  "BMW": [
    "Serie 1",
    "Serie 2",
    "Serie 3",
    "Serie 4",
    "Serie 5",
    "Serie 6",
    "Serie 7",
    "X1",
    "X2",
    "X3",
    "X4",
    "X5",
    "X6",
    "X7",
    "Z4"
  ],

  "Citroën": [
    "C1",
    "C3",
    "C3 Aircross",
    "C4",
    "C4 X",
    "C5 Aircross",
    "C5 X",
    "Berlingo"
  ],

  "Dacia": [
    "Sandero",
    "Duster",
    "Jogger",
    "Spring"
  ],

  "Fiat": [
    "500",
    "500X",
    "500L",
    "Panda",
    "Punto",
    "Tipo",
    "Bravo",
    "Doblo",
    "Ducato"
  ],

  "Ford": [
    "Fiesta",
    "Focus",
    "Puma",
    "Kuga",
    "Mondeo",
    "Mustang",
    "Explorer",
    "Ranger"
  ],

  "Honda": [
    "Jazz",
    "Civic",
    "HR-V",
    "CR-V",
    "ZR-V"
  ],

  "Hyundai": [
    "i10",
    "i20",
    "i30",
    "Bayon",
    "Kona",
    "Tucson",
    "Santa Fe"
  ],

  "Jeep": [
    "Renegade",
    "Compass",
    "Avenger",
    "Cherokee",
    "Grand Cherokee",
    "Wrangler"
  ],

  "Kia": [
    "Picanto",
    "Rio",
    "Ceed",
    "Stonic",
    "Niro",
    "Sportage",
    "Sorento"
  ],

  "Lancia": [
    "Ypsilon",
    "Delta",
    "Musa"
  ],

  "Land Rover": [
    "Range Rover",
    "Range Rover Evoque",
    "Discovery",
    "Discovery Sport",
    "Defender"
  ],

  "Lexus": [
    "CT",
    "IS",
    "ES",
    "NX",
    "RX",
    "UX"
  ],

  "Maserati": [
    "Ghibli",
    "Levante",
    "Grecale",
    "Quattroporte",
    "GranTurismo"
  ],

  "Mazda": [
    "Mazda2",
    "Mazda3",
    "CX-3",
    "CX-30",
    "CX-5",
    "MX-5"
  ],

  "Mercedes-Benz": [
    "Classe A",
    "Classe B",
    "Classe C",
    "Classe E",
    "Classe S",
    "CLA",
    "GLA",
    "GLB",
    "GLC",
    "GLE",
    "GLS",
    "Classe G"
  ],

  "MINI": [
    "Cooper",
    "Clubman",
    "Countryman",
    "Paceman"
  ],

  "Nissan": [
    "Micra",
    "Juke",
    "Qashqai",
    "X-Trail",
    "Ariya"
  ],

  "Opel": [
    "Corsa",
    "Astra",
    "Mokka",
    "Crossland",
    "Grandland",
    "Insignia"
  ],

  "Peugeot": [
    "108",
    "208",
    "308",
    "408",
    "508",
    "2008",
    "3008",
    "5008"
  ],

  "Porsche": [
    "718 Cayman",
    "718 Boxster",
    "911",
    "Taycan",
    "Macan",
    "Cayenne",
    "Panamera"
  ],

  "Renault": [
    "Clio",
    "Captur",
    "Megane",
    "Arkana",
    "Austral",
    "Espace",
    "Koleos"
  ],

  "Seat": [
    "Ibiza",
    "Leon",
    "Arona",
    "Ateca",
    "Tarraco"
  ],

  "Skoda": [
    "Fabia",
    "Scala",
    "Octavia",
    "Superb",
    "Kamiq",
    "Karoq",
    "Kodiaq"
  ],

  "Smart": [
    "Fortwo",
    "Forfour",
    "1",
    "3",
    "5"
  ],

  "Subaru": [
    "Impreza",
    "Forester",
    "Outback",
    "XV",
    "BRZ"
  ],

  "Tesla": [
    "Model 3",
    "Model S",
    "Model X",
    "Model Y"
  ],

  "Toyota": [
    "Aygo",
    "Yaris",
    "Yaris Cross",
    "Corolla",
    "C-HR",
    "RAV4",
    "Camry",
    "Highlander",
    "Land Cruiser",
    "Supra"
  ],

  "Volkswagen": [
    "Polo",
    "Golf",
    "Passat",
    "T-Roc",
    "T-Cross",
    "Tiguan",
    "Touareg",
    "Touran",
    "ID.3",
    "ID.4",
    "ID.5",
    "ID.7"
  ],

  "Volvo": [
    "V40",
    "V60",
    "V90",
    "S60",
    "S90",
    "XC40",
    "XC60",
    "XC90"
  ]
};

const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");

Object.keys(cars)
  .sort()
  .forEach(brand => {

    const option = document.createElement("option");

    option.value = brand;
    option.textContent = brand;

    brandSelect.appendChild(option);
  });

brandSelect.addEventListener("change", () => {

  const brand = brandSelect.value;

  modelSelect.innerHTML = "";

  if (!brand) {

    modelSelect.disabled = true;

    const option = document.createElement("option");

    option.value = "";
    option.textContent = "Prima seleziona la marca";

    modelSelect.appendChild(option);

    return;
  }

  modelSelect.disabled = false;

  const firstOption = document.createElement("option");

  firstOption.value = "";
  firstOption.textContent = "Seleziona modello";

  modelSelect.appendChild(firstOption);

  cars[brand].forEach(model => {

    const option = document.createElement("option");

    option.value = model;
    option.textContent = model;

    modelSelect.appendChild(option);
  });
});

const selectedServices = [];

document.querySelectorAll(".service").forEach(button => {

  button.addEventListener("click", () => {

    const service = button.dataset.service;

    if (selectedServices.includes(service)) {

      selectedServices.splice(
        selectedServices.indexOf(service),
        1
      );

      button.classList.remove("selected");

    } else {

      selectedServices.push(service);

      button.classList.add("selected");
    }

    document.getElementById("serviceCount").textContent =
      selectedServices.length;

    const selectedText =
      document.getElementById("selectedServices");

    if (selectedServices.length === 0) {

      selectedText.textContent =
        "Nessun servizio selezionato";

    } else {

      selectedText.textContent =
        selectedServices.join(" • ");
    }
  });
});

document.getElementById("bookButton").addEventListener("click", () => {

  const name =
    document.getElementById("name").value.trim();

  const brand =
    brandSelect.value;

  const model =
    modelSelect.value;

  const phone =
    document.getElementById("phone").value.trim();

  const date =
    document.getElementById("date").value;

  const time =
    document.getElementById("time").value;

  const address =
    document.getElementById("address").value.trim();

  const notes =
    document.getElementById("notes").value.trim();

  if (selectedServices.length === 0) {

    alert("Seleziona almeno un servizio.");

    return;
  }

  if (
    !name ||
    !brand ||
    !model ||
    !phone ||
    !date ||
    !time ||
    !address
  ) {

    alert("Compila tutti i campi obbligatori.");

    return;
  }

  const servicesText =
    selectedServices
      .map(service => "• " + service)
      .join("\n");

  const message =
    "🚗 NUOVA PRENOTAZIONE BRUNI DETAIL\n\n" +
    "🧽 SERVIZI:\n" +
    servicesText +
    "\n\n" +
    "👤 Nome: " +
    name +
    "\n" +
    "🚘 Auto: " +
    brand +
    " " +
    model +
    "\n" +
    "📞 Telefono: " +
    phone +
    "\n" +
    "📅 Data: " +
    date +
    "\n" +
    "⏰ Orario: " +
    time +
    "\n" +
    "📍 Indirizzo: " +
    address +
    "\n" +
    "📝 Note: " +
    (notes || "Nessuna");

  window.open(
    "https://wa.me/393664776201?text=" +
    encodeURIComponent(message),
    "_blank"
  );
});