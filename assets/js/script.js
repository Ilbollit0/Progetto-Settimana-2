/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/

/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = [
  {
    nome: "Cuffie wireless con cancellazione del rumore",
    categoria: "Elettronica",
    prezzo: 89.99,
    rating: 4,
    immagine: "Cuffie",
    disponibile: true,
  },
  {
    nome: "Tablet 10 pollici 64GB",
    categoria: "Elettronica",
    prezzo: 199.0,
    rating: 5,
    immagine: "Tablet",
    disponibile: true,
  },
  {
    nome: "Il romanzo dell'anno",
    categoria: "Libri",
    prezzo: 14.9,
    rating: 4,
    immagine: "Libro",
    disponibile: true,
  },
  {
    nome: "Zaino da viaggio 30L impermeabile",
    categoria: "Abbigliamento",
    prezzo: 49.99,
    rating: 4,
    immagine: "Zaino",
    disponibile: true,
  },
  {
    nome: "Lampada LED da scrivania orientabile",
    categoria: "Casa",
    prezzo: 29.5,
    rating: 3,
    immagine: "Lampada",
    disponibile: true,
  },
  {
    nome: "Smartwatch fitness con GPS",
    categoria: "Elettronica",
    prezzo: 119.0,
    rating: 4,
    immagine: "Smartwatch",
    disponibile: true,
  },
  {
    nome: "Mouse ergonomico wireless",
    categoria: "Elettronica",
    prezzo: 24.9,
    rating: 4,
    immagine: "Mouse",
    disponibile: true,
  },
  {
    nome: "Caffettiera moka 6 tazze",
    categoria: "Casa",
    prezzo: 22.0,
    rating: 5,
    immagine: "Caffettiera",
    disponibile: true,
  },
  {
    nome: "Monitor 24 pollici Full HD",
    categoria: "Elettronica",
    prezzo: 150.0,
    rating: 3,
    immagine: "Monitor",
    disponibile: true,
  },
  {
    nome: "Felpa con cappuccio unisex",
    categoria: "Abbigliamento",
    prezzo: 39.9,
    rating: 2,
    immagine: "Felpa",
    disponibile: true,
  },
  {
    nome: "Set di pentole antiaderenti",
    categoria: "Casa",
    prezzo: 64.9,
    rating: 2,
    immagine: "Pentole",
    disponibile: false,
  },
  {
    nome: "Manuale di fotografia digitale",
    categoria: "Libri",
    prezzo: 24.5,
    rating: 4,
    immagine: "Fotografia",
    disponibile: false,
  },
];

console.log(prodotti)
/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function formattaPrezzo(prezzo) {
  const parti = String(prezzo).split(".");
  const interi = parti[0];
  let decimali = parti[1];
 
  if (decimali === undefined) {
    decimali = "00";
  } else if (decimali.length === 1) {
    decimali = decimali + "0";
  }
 
  return `€ ${interi},${decimali}`;
}
 
console.log(`Monitor: ${formattaPrezzo(150)}`); 


/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function stelline(rating) {
  let risultato = "";
 
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      risultato += "★";
    } else {
      risultato += "☆";
    }
  }
 
  return risultato;
}
 
console.log(`Monitor: rating 3 → "${stelline(3)}"`); // "★★★☆☆"


/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtraPerCategoria(categoria) {
  const trovati = [];
 
  for (const p of prodotti) {
    if (p.categoria === categoria) {
      trovati.push(p);
    }
  }
 
  return trovati;
}
 
console.table(filtraPerCategoria("Libri"));


/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtraDisponibiliConRating() {
  const trovati = [];
 
  for (const p of prodotti) {
    if (p.disponibile && p.rating >= 3) {
      trovati.push(p);
    }
  }
 
  return trovati;
}
 
console.table(filtraDisponibiliConRating());


/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function renderProdotti(lista) {
  const container = document.querySelector("#prodotti");
  let html = "";
 
  for (const p of lista) {
    // il bottone è lo stesso: cambiano solo "disabled" e il testo
    const disabilitato = p.disponibile ? "" : "disabled";
    const testoBottone = p.disponibile ? "Aggiungi al carrello" : "Esaurito";
 
    html += `
      <article class="prodotto">
        <div class="img-prodotto">${p.immagine}</div>
        <p class="nome">${p.nome}</p>
        <p class="rating"><span class="stelle">${stelline(p.rating)}</span> <span class="voto">(${p.rating})</span></p>
        <p class="prezzo">${formattaPrezzo(p.prezzo)}</p>
        <button class="btn-carrello" ${disabilitato}>${testoBottone}</button>
      </article>
    `;
  }
 
  container.innerHTML = html;
}

console.log(renderProdotti)

/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
