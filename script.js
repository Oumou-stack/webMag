function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI !
      let journal = data.journal;
      let nomJournal = journal.nomJournal;
      // console.log(nomJournal);
      
      let themes = journal.themes;
      
      let journalTheme = themes.nom;
      // console.log(journalTheme); 

      let description = themes.description;
      // console.log(description);

      let phraseAccroche = journal.phraseAccroche;
      // console.log(phraseAccroche);
      
      afficherNav(data);
      afficherHeader(data);
      afficherLastArticle(data);
      afficherArticles(data);
      afficherEquipe(data);
      afficherFooter(data);

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();
 
 ///ON écrit les fonctions ici

  function afficherNav(data) {
    let journal = data.journal;
    let nomJournal = data.journal.nomJournal;
    let abonnezVous = journal.texteAppelAction;
    let themes = journal.themes;
    let themesList = "";
    // console.log(journalTheme);

      themes.forEach((theme) => {
       themesList += `<a href = "#" target = "_blank"><li>${theme.nom}</li></a>`;
      });

    let contenuNav =
    `<div class="logo">
      <img src="./images/logo.svg">
      <h2>${nomJournal}</h2>
    </div>
      <ul id = "themesList">
          ${themesList}
      </ul>
    <div class="abonner-container">
      <a class="button primary" target="_blank" href="#">${abonnezVous}</a>
      <img class="avatar" src="images/avatar.jpg" alt="avatar chien cool">
    </div>`;
      let conteneur = document.getElementById('nav');
      conteneur.insertAdjacentHTML('beforeend', contenuNav);

    }

  function afficherHeader(data) {
      let journal = data.journal;
      let nomJournal = data.journal.nomJournal;
      let phraseAccroche = journal.phraseAccroche;
      let themes = journal.themes;
      // let journalTheme = themes.nom;
      // console.log(journalTheme);

      console.log(themes);
      
      let themesList = " ";

      themes.forEach((theme) => {
        themesList += ` <div class = "mag-theme"><h4>${theme.nom}</h4><p>${theme.description}</p> </div>`;
       });

      let contenuHeader =
    `<div class = "presentation-container" >
      <div class="mag-tittle">
         <h2>${nomJournal}</h2>
         <h3>${phraseAccroche}</h3>
      </div>
      <div class="mag-themes">
          ${themesList}   
      </div>
      </div>`;
// console.log(contenuHeader);

      let conteneur = document.getElementById('header');
      conteneur.insertAdjacentHTML('beforeend', contenuHeader);
    }
function afficheBanner(data) {
  let journal = data.journal;
  let banner = journal.banner;
  let image = journal.banner[0].image;
  let bannerDescription = journal.banner[0].description;

  // let bannerContenu = "";

  // bannerImage += `<img src=${image}> <h2>${bannerDescription}</h2>`;
  // console.log(banner);  

  // bannerContenu = ` <div class="hero">
  //          ${bannerImage}
  //        </div>`
  let conteneur = document.getElementById('banner');
  console.log(conteneur);
    
  conteneur.insertAdjacentHTML('beforeend', bannerContenu);
}

  function afficherLastArticle(data) {
      let journal = data.journal;
      let articlePrincipal = journal.articlePrincipal;
      let titreArticleRecent = articlePrincipal.titre;
      let dateArticleRecent = articlePrincipal.date;
      let themeArticleRecent = articlePrincipal.theme;
      let descriptionArticleRecent = articlePrincipal.description;
      let lireArticle = journal.texteAppelAction2;
      let articleRecent = 
      `<div class="article-name">
         <h4>Article le plus récent</h4>
         <h5>${titreArticleRecent}</h5>
         <p>${themeArticleRecent} - ${dateArticleRecent}</p>
      </div>
      <div class="article-description">
         <p>${descriptionArticleRecent}</p>
         <img src = "https://i.pinimg.com/736x/af/7c/41/af7c41abe1bd0e635d247e93fede05f9.jpg">
      </div>
      <div class="button-container">
         <a class="button primary" target="_blank" href="#">${lireArticle}</a>
       </div>`;
    
       let conteneur = document.getElementById('last-article-box');
      //  console.log(conteneur);
       
       conteneur.insertAdjacentHTML('beforeend', articleRecent);
    
      }

  function afficherArticles(data) {
        let journal = data.journal;
        let articles = data.journal.articles;
        let lireArticle = journal.texteAppelAction2;
        // console.log(articles, journal);

        let articleList = " ";
//* Boucle for each pour affichage des donnnées de larticle
        articles.forEach(article => {
        let titreArticle = article.titre;
        let dateArticle = article.date;
        let themeArticle = article.theme;
        let imageArticle = article.image;

        articleList += `   
            <img src = "${imageArticle}">
         <div class="article-txt-box">
            <div class="article-name">
               <h4>${titreArticle}</h4>
               <p>${themeArticle} - ${dateArticle}</p>
            </div>
            <div class="article-description">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio suscipit deserunt delectus quo, accusamus ad. Optio, rem repudiandae. Mollitia hic fugit harum? Odit sed in numquam ipsa, porro dolore maxime?</p>
            </div>`
        });
        
        
        let articleCard =
        `<h3>Autres articles</h3>
      <div class="articles-container">
      <div class="article-img-box">
      ${articleList}
      </div>
            <div class="button-container">
               <a class="button primary" target="_blank" href="#">${lireArticle}</a>
             </div>
         </div>
      </div>`;

      let conteneur = document.getElementById('autres-articles-box');
      // console.log(conteneur);
      
      conteneur.insertAdjacentHTML('beforeend', articleCard);

      // console.log(articleCard);
    }
    
function afficherEquipe(data) {
  let journal = data.journal;
  let equipe = data.journal.equipe;
  // console.log(equipe);
  
  let equipeList = " ";

  equipe.forEach(collegue => {
    let nomCollegue = collegue.prenom;
    // console.log(nomCollegue);
    
    let metierCollegue = collegue.metier;
    // console.log(metierCollegue);
    
    let presentationCollegue = collegue.presentation;
    // console.log(presentationCollegue);
    
    let photoCollegue = collegue.image;
    // console.log();
    

    equipeList += `<img class="avatar" src="${photoCollegue}" alt="${nomCollegue}">
      <h5>${nomCollegue}</h5>
      <h6>${metierCollegue}</h6>
        <p>${presentationCollegue}</p>
    `;

      // console.log(equipeList);
      
  });
        
    let equipeCard =
    `<h3>Découvrez notre équipe</h3>
      <div class="equipe-cards">
        <div class = "equipe-card">
          ${equipeList}
        </div>
      </div>`;

    let conteneur = document.getElementById('equipe-box');
      // console.log(conteneur);
      conteneur.insertAdjacentHTML('beforeend', equipeCard);
}

function afficherFooter(data) {
  let journal = data.journal;
  let nomJournal = journal.nomJournal;
  let annee = journal.annee;
// console.log(nomJournal, annee);

let journalFooter = `${nomJournal} ${annee}`;
console.log(journalFooter);

  // let journalFooter = `<footer id = "footer"><p>${nomJournal} ${annee}</p></footer>`;

  let conteneur = document.getElementById('footer');
  // console.log(conteneur);
  
  conteneur.insertAdjacentHTML('beforeend', journalFooter);
}