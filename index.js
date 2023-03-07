
/* Vytvoření základního objektu serverové aplikace */
/* Připojení modulu frameworku Express (https://expressjs.com/) */
const express = require("express");
/* Připojení externího modulu body-parser (https://www.npmjs.com/package/body-parser) -
middleware pro parsování těla požadavku */
const bodyParser = require("body-parser");
/* Připojení externího modulu moment (https://momentjs.com/) - knihovna pro formátování
datových a časových údajů */
const moment = require("moment");
/* Připojení vestavěných modulů fs (práce se soubory) a path (cesty v adresářové struktuře) */
const fs = require("fs");
const path = require("path");
const app = express();
/* Nastavení porstarttu, na němž bude spuštěný server naslouchat */
const port = 3000;
/* Identifikace složky obsahující statické soubory klientské části webu */
app.use(express.static("public"));
/* Spuštění webového serveru */
app.listen(port, () => {
console.log(`Server naslouchá na portu ${port}`);
});
