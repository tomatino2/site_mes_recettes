let recettes = [];


fetch('recettes.json')
    .then(response => response.json())
    .then(data => {
        recettes = data;
        afficherRecettes(recettes);
    });


function afficherRecettes(filtreRecettes) {
    const liste = document.getElementById('recette-liste');
    liste.innerHTML = ''; // Vide la liste pour réafficher

    filtreRecettes.forEach(recette => {
        const li = document.createElement('li');
        li.textContent = recette.nom;
        liste.appendChild(li);
    });
}


document.getElementById('search-bar').addEventListener('input', (e) => {
    const recherche = e.target.value.toLowerCase();
    const recettesFiltrees = recettes.filter(recette =>
        recette.nom.toLowerCase().includes(recherche) ||
        recette.ingrédients.some(ing => ing.toLowerCase().includes(recherche))
    );
    afficherRecettes(recettesFiltrees);
});
