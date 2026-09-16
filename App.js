const citations = [
    {
        texte:
            "Le succès est la somme de petits efforts répétés jour après jour.",
        auteur:
            "Robert Collier"
    },
    {
        texte:
            "La réussite commence toujours par la volonté d'essayer.",
        auteur:
            "Anonyme"
    },
    {
        texte:
            "Chaque expert a commencé un jour comme débutant.",
        auteur:
            "Ralph Waldo Emerson"
    },
    {
        texte:
            "Ne regardez pas l'escalier entier. Commencez simplement par la première marche.",
        auteur:
            "Martin Luther King Jr."
    },
    {
        texte:
            "Le meilleur moment pour commencer était hier. Le deuxième meilleur moment est maintenant.",
        auteur:
            "Proverbe"
    },
    {
        texte:
            "La connaissance est une richesse qui ne diminue jamais lorsqu'on la partage.",
        auteur:
            "Proverbe"
    },
    {
        texte:
            "Le courage ne signifie pas l'absence de peur, mais la décision d'avancer malgré elle.",
        auteur:
            "Nelson Mandela"
    },

    {
        texte:
            "La meilleure façon de prédire l'avenir est de le créer.",
        auteur:
            "Peter Drucker"
    },

    {
        texte:
            "Il n'est jamais trop tard pour devenir ce que vous auriez pu être.",
        auteur:
            "George Eliot"
    },
    {
        texte:
            "Les grandes réalisations sont toujours précédées par de grandes idées.",

        auteur:
            "Steve Jobs"
    }

];


/*RÉCUPÉRATION DES ÉLÉMENTS HTML*/

const citationElement =
    document.getElementById("citation");

const auteurElement =
    document.getElementById("auteur");

const boutonNouvelleCitation =
    document.getElementById("nouvelleCitation");

const boutonCopier =
    document.getElementById("copier");

const boutonWhatsApp =
    document.getElementById("whatsapp");

const messageElement =
    document.getElementById("message");

const numeroCitation =
    document.getElementById("numeroCitation");

const totalCitations =
    document.getElementById("totalCitations");


/* ==========================================
   VARIABLES
========================================== */

let indexActuel = 0;


/* Afficher le nombre total */

totalCitations.textContent =
    citations.length;


/* ==========================================
   GÉNÉRER UNE CITATION
========================================== */

function nouvelleCitation() {

    let nouvelIndex;


    /*
       Empêcher d'afficher
       deux fois la même citation
       consécutivement.
    */

    do {

        nouvelIndex =
            Math.floor(
                Math.random() *
                citations.length
            );

    } while (
        nouvelIndex === indexActuel &&
        citations.length > 1
    );


    indexActuel =
        nouvelIndex;


    afficherCitation();

}


/* ==========================================
   AFFICHER LA CITATION
========================================== */

function afficherCitation() {

    const citation =
        citations[indexActuel];


    citationElement.classList.remove(
        "quote-animation"
    );


    /*
       Force le navigateur à
       recalculer l'animation.
    */

    void citationElement.offsetWidth;


    citationElement.classList.add(
        "quote-animation"
    );


    citationElement.textContent =
        citation.texte;


    auteurElement.textContent =
        "— " + citation.auteur;


    numeroCitation.textContent =
        indexActuel + 1;


    messageElement.textContent =
        "";

}


/* ==========================================
   COPIER LA CITATION
========================================== */

async function copierCitation() {

    const texte =
        `"${citationElement.textContent}" — ${auteurElement.textContent.replace("— ", "")}`;

    try {

        await navigator.clipboard.writeText(
            texte
        );


        afficherMessage(
            "✓ Citation copiée dans le presse-papiers !"
        );


    } catch (erreur) {

        afficherMessage(
            "Impossible de copier la citation."
        );

    }

}


/* ==========================================
   PARTAGER SUR WHATSAPP
========================================== */

function partagerWhatsApp() {

    const texte =
        `"${citationElement.textContent}"\n\n${auteurElement.textContent}`;


    const message =
        encodeURIComponent(texte);


    const url =
        `https://wa.me/?text=${message}`;


    window.open(
        url,
        "_blank"
    );

}


/* ==========================================
   MESSAGE
========================================== */

function afficherMessage(texte) {

    messageElement.textContent =
        texte;


    setTimeout(
        function () {

            messageElement.textContent =
                "";

        },

        3000
    );

}


/* ==========================================
   ÉVÉNEMENTS
========================================== */

boutonNouvelleCitation.addEventListener(
    "click",
    nouvelleCitation
);


boutonCopier.addEventListener(
    "click",
    copierCitation
);


boutonWhatsApp.addEventListener(
    "click",
    partagerWhatsApp
);


/* ==========================================
   INITIALISATION
========================================== */

afficherCitation();