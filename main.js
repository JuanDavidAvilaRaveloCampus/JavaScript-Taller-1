
let tabla = {
    "Traditional(%)": tradidional = [
        "90-10",
        "80-89",
        "70-79",
        "60-69",
        "< 60",
        "0"
    ],
    "14-Point Range": range = [
        "12-14",
        "9-11",
        "6-8",
        "3-5",
        "1-2",
        "0"
    ],
    "Letter": letter = [
        "A",
        "B",
        "C",
        "D",
        "R",
        "Z"
    ],
    "SBG Rating": rating = [
        4,
        3,
        2,
        1,
        0,
        0
    ],
    "Profienciency Level with Standard": profienciency = [
        "Exceeds profiency",
        "Demostrates profiency",
        "Approaches profiency",
        "Fall well below profiency",
        "Laks all profiency",
        "No attempt made"
    ]
};

console.table(tabla);

let tipoNota = prompt("Ingrese el nombre del tipo de nota que desea ingresar");

// TRADITIONAL

if ( tipoNota == "Traditional") {
    let notaTraditional = prompt("Ingrese su nota");
    if ( notaTraditional >= 90 && notaTraditional <= 100) {
        console.log("Tus notas son: ");
        let tableLetter = {
            "14-Point Range": "12-14",
            "Letter": "A",
            "SBG Rating": "4"
        };
        console.table(tableTraditional);
        console.log("Exceeds profiency");
    }
    else if ( notaTraditional >= 80 && notaTraditional <= 89) {
        console.log("Tus notas son: ");
        let tableTraditional2 = {
            "14-Point Range": "9-11",
            "Letter": "B",
            "SBG Rating": "3"
        };
        console.table(tableTraditional2);
        console.log("Demostrates Proficiency");
    }
    else if ( notaTraditional >= 70 && notaTraditional <= 79) {
        console.log("Tus notas son: ");
        let tableTraditional3 = {
            "14-Point Range": "6-8",
            "Letter": "C",
            "SBG Rating": "2"
        };
        console.table(tableTraditional3);
        console.log("Approaches Proficiency")
    }
    else if ( notaTraditional >= 60 && notaTraditional <= 69) {
        console.log("Tus notas son: ");
        let tableTraditional4 = {
            "14-Point Range": "3-5",
            "Letter": "D",
            "SBG Rating": "1"
        };
        console.table(tableTraditional4);
        console.log("Fall well below proficiency")
    }
    else if ( notaTraditional < 60 ) {
        console.log("Tus notas son: ");
        let tableTraditional5 = {
            "14-Point Range": "1-2",
            "Letter": "E",
            "SBG Rating": "0"
        };
        console.table(tableTraditional5);
        console.log("Lack all proficiency")
    }
    else if ( notaTraditional >= 0 && notaTraditional < 59 ) {
        console.log("Tus notas son: ");
        let tableTraditional6 = {
            "14-Point Range": "0",
            "Letter": "Z",
            "SBG Rating": "0"
        };
        console.table(tableTraditional6);
        console.log("No attempt made")
    }
    else {
        console.log("POR FAVOR INGRESA CORRECTAMENTE TU NOTA")
    }
}

// POINT RANGE

else if ( 
    tipoNota == "14-Point Range"
    || tipoNota == "14-Point" 
    || tipoNota == "14 Point" 
    || tipoNota == "14 Point Range" 
    || tipoNota == "Range" 
    || tipoNota == "Point Range"
    || tipoNota == "Point") {
    let notaPoint = prompt("Ingrese su nota");
    if ( notaPoint >= 12 && notaPoint <= 14) {
        console.log("Tus notas son: ");
        let tablePoint = {
            "Traditional(%)" : "90-100",
            "Letter": "A",
            "SBG Rating": "4"
        };
        console.table(tablePoint);
        console.log("Exceeds profiency");
    }
    else if ( notaPoint >= 9 && notaPoint <= 11) {
        console.log("Tus notas son: ");
        let tablePoint = {
            "Traditional(%)" : "80-89",
            "Letter": "B",
            "SBG Rating": "3"
        };
        console.table(tablePoint);
        console.log("Demostrates Proficiency");
    }
    else if ( notaPoint >= 6 && notaPoint <= 8 ) {
        console.log("Tus notas son: ");
        let tablePoint = {
            "Traditional(%)" : "70-79",
            "Letter": "C",
            "SBG Rating": "2"
        };
        console.table(tablePoint);
        console.log("Approaches Proficiency")
    }
    else if ( notaPoint >= 3 && notaPoint <= 5) {
        console.log("Tus notas son: ");
        let tablePoint = {
            "Traditional(%)" : "60-69",
            "Letter": "D",
            "SBG Rating": "1"
        };
        console.table(tablePoint);
        console.log("Fall well below proficiency")
    }
    else if ( notaPoint >= 1 && notaPoint <= 2 ) {
        console.log("Tus notas son: ");
        let tablePoint = {
            "Traditional(%)" : "< 60",
            "Letter": "E",
            "SBG Rating": "0"
        };
        console.table(tablePoint);
        console.log("Lack all proficiency")
    }
    else if ( notaPoint == 0 ) {
        console.log("Tus notas son: ");
        let tablePoint = {
            "Traditional(%)" : "0",
            "Letter": "Z",
            "SBG Rating": "0"
        };
        console.table(tablePoint);
        console.log("No attempt made")
    }
    else {
        console.log("POR FAVOR INGRESA CORRECTAMENTE TU NOTA")
    }
}

// LETTER

else if ( tipoNota == "Letter") {
    let notaLetter = prompt("Ingrese su nota");
    if ( notaLetter == "A" ) {
        console.log("Tus notas son: ");
        let tableLetter = {
            "14-Point Range": "12-14",
            "Traditional(%)" : "90-100",
            "SBG Rating": "4"
        };
        console.table(tableLetter);
        console.log("Exceeds profiency");
    }
    else if ( notaLetter == "B" ) {
        console.log("Tus notas son: ");
        let tableLetter = {
            "14-Point Range": "9-11",
            "Traditional(%)" : "80-89",
            "SBG Rating": "3"
        };
        console.table(tableLetter);
        console.log("Demostrates Proficiency");
    }
    else if ( notaLetter == "C" ) {
        console.log("Tus notas son: ");
        let tableLetter = {
            "14-Point Range": "6-8",
            "Traditional(%)" : "70-79",
            "SBG Rating": "2"
        };
        console.table(tableLetter);
        console.log("Approaches Proficiency")
    }
    else if ( notaLetter == "D" ) {
        console.log("Tus notas son: ");
        let tableLetter = {
            "14-Point Range": "3-5",
            "Traditional(%)" : "60-69",
            "SBG Rating": "1"
        };
        console.table(tableLetter);
        console.log("Fall well below proficiency")
    }
    else if ( notaLetter == "E" ) {
        console.log("Tus notas son: ");
        let tableLetter = {
            "14-Point Range": "1-2",
            "Traditional(%)" : "< 60",
            "SBG Rating": "0"
        };
        console.table(tableLetter);
        console.log("Lack all proficiency")
    }
    else if ( notaLetter == "Z" ) {
        console.log("Tus notas son: ");
        let tableLetter = {
            "14-Point Range": "0",
            "Traditional(%)" : "0",
            "SBG Rating": "0"
        };
        console.table(tableLetter);
        console.log("No attempt made")
    }
    else {
        console.log("POR FAVOR INGRESA CORRECTAMENTE TU NOTA")
    }
}

// SBG

else if ( tipoNota == "SBG RAting" || tipoNota == "SBG" || tipoNota == "Rating") {
    let notaSbg = prompt("Ingrese su nota");
    if ( notaSbg == "4" ) {
        console.log("Tus notas son: ");
        let tableSbg = {
            "14-Point Range": "12-14",
            "Traditional(%)" : "90-100",
            "Letter": "A",
        };
        console.table(tableSbg);
        console.log("Exceeds profiency");
    }
    else if ( notaSbg == "3" ) {
        console.log("Tus notas son: ");
        let tableSbg = {
            "14-Point Range": "9-11",
            "Traditional(%)" : "80-89",
            "Letter": "B",
        };
        console.table(tableSbg);
        console.log("Demostrates Proficiency");
    }
    else if ( notaSbg == "2" ) {
        console.log("Tus notas son: ");
        let tableSbg = {
            "14-Point Range": "6-8",
            "Traditional(%)" : "70-79",
            "Letter": "C",
        };
        console.table(tableSbg);
        console.log("Approaches Proficiency")
    }
    else if ( notaSbg == "1" ) {
        console.log("Tus notas son: ");
        let tableSbg = {
            "14-Point Range": "3-5",
            "Traditional(%)" : "60-69",
            "Letter": "D",
        };
        console.table(tableSbg);
        console.log("Fall well below proficiency")
    }
    else if ( notaSbg == "0" ) {
        console.log("Tus notas son: ");
        let tableSbg = {
            "14-Point Range": "1-2",
            "Traditional(%)" : "< 60",
            "Letter": "E",
        };
        console.table(tableSbg);
        console.log("Lack all proficiency")
    }
    else if ( notaSbg == "0" ) {
        console.log("Tus notas son: ");
        let tableSbg = {
            "14-Point Range": "0",
            "Traditional(%)" : "0",
            "Letter": "Z",
        };
        console.table(tableSbg);
        console.log("No attempt made")
    }
    else {
        console.log("POR FAVOR INGRESA CORRECTAMENTE TU NOTA")
    }
}

else {
    console.log("POR FAVOR... INGRESA CORRECTAMENTE EL TIPO DE NOTA")
}