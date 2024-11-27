// // URL d'entrée personnalisée
const entryURL = 'https://pydefis.callicode.fr/defis/ExempleURL/get/Neozia/ee049';
// // URL de sortie personnalisée
const outputURL = 'https://pydefis.callicode.fr/defis/ExempleURL/post/Neozia/ee049';


// Fonction principale
async function solveChallenge() {
    try {
        // 1. Récupérer les données de l'URL d'entrée
        const entryResponse = await fetch(entryURL, {
            method: 'GET'
        });

        // Vérification de la réponse
        if (!entryResponse.ok) {
            throw new Error(`Erreur lors de la récupération de l'URL d'entrée: ${entryResponse.status}`);
        }

        // Lire les données de l'entrée
        const entryText = await entryResponse.text();
        const lines = entryText.split('\n');

        // Extraire la signature et les données
        const signature = lines[0];
        const num1 = parseInt(lines[1], 10);
        const num2 = parseInt(lines[2], 10);

        console.log("Signature :", signature);
        console.log("Données :", num1, num2);

        // 2. Calculer la réponse (ici, somme des deux nombres)
        const response = num1 + num2;

        console.log("Réponse calculée :", response);

        // 3. Préparer les données en tant que formulaire encodé
        const formData = new URLSearchParams();
        formData.append('sig', signature);
        formData.append('rep', response);

        // Envoyer la réponse à l'URL de sortie
        const postResponse = await fetch(outputURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString() // Convertit les données en chaîne encodée
        });

        // Vérification de la réponse
        if (!postResponse.ok) {
            throw new Error(`Erreur lors de l'envoi de la réponse : ${postResponse.status}`);
        }

        // Lire le résultat final
        const result = await postResponse.text();
        console.log("Résultat :", result);

    } catch (error) {
        console.error("Erreur :", error.message);
    }
}

// Exécuter la fonction
solveChallenge();
