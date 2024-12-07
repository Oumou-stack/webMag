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
      // let journal = data.journal;
      // let nomJournal = journal.nomJournal;
      // console.log(nomJournal);
      
      // let themes = journal.themes;
      
      // let journalTheme = themes.nom;
      // // console.log(journalTheme); 

      // let description = themes.description;
      // // console.log(description);

      // let phraseAccroche = journal.phraseAccroche;
      // // console.log(phraseAccroche);
      
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
    let logoJournal = journal.logo;
    let abonnezVous = journal.texteAppelAction;
    let themes = journal.themes;
    let avatar = journal.avatar;
    let themesList = "";
    // console.log(journalTheme);

      themes.forEach((theme) => {
       themesList += `<a href = "#" target = "_blank"><li>${theme.nom}</li></a>`;
      });

    let contenuNav =
    `<div class="logo">
      <img src="${logoJournal}" alt="logo les pollinisateurs">
    </div>
      <ul id = "themesList">
          ${themesList}
      </ul>
    <div class="abonné-container">
      <a class="button primary" target="_blank" href="#">${abonnezVous}</a>
      <img class="avatar" src="${avatar}" alt="avatar abonné">
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

      // console.log(themes);
      
      let themesList = " ";

      themes.forEach((theme) => {
        themesList += ` <div class = "mag-theme"><h4>${theme.nom}</h4><p>${theme.description}</p> </div>`;
       });

      let contenuHeader =
    `<div class = "presentation-container" >
      <div class="mag-tittle">
         <h2 data-aos="fade-right" data-aos-duration="1500">${nomJournal}</h2>
         <h3 data-aos="fade-left" data-aos-duration="1500">${phraseAccroche}</h3>
      </div>
      <div class="mag-themes">
          ${themesList}   
      </div>
      </div>`;
// console.log(contenuHeader);

      let conteneur = document.getElementById('header');
      conteneur.insertAdjacentHTML('beforeend', contenuHeader);
    }

  function afficherLastArticle(data) {
      let journal = data.journal;
      let articlePrincipal = journal.articlePrincipal;
      let image = articlePrincipal.image;
      console.log(image);
      // let image = articlePrincipal.image;
      // let titreArticleRecent = articlePrincipal.titre;
      // let dateArticleRecent = articlePrincipal.date;
      // let themeArticleRecent = articlePrincipal.theme;
      // let descriptionArticleRecent = articlePrincipal.description;
      let lireArticle = journal.texteAppelAction2;
      
      let articleRecent = 
      `<h4 class="tittle" data-aos="fade-right" data-aos-duration="1500">Article le plus récent</h4>
          <img data-aos="fade-left" data-aos-duration="1500" src="${image}" alt="image dernier article plantes d'interieur">
        
        <div class="button-container">
            <a class="button primary" target="_blank" href="#">${lireArticle}</a>
          </div>`;
      // `
      // <img src="${image}">
      // <div class="article-text-bloc">
      //    <h4 class="tittle">Article le plus récent</h4>
      //    <div class="article-tittle">
      //       <h5>${titreArticleRecent}</h5>
      //       <h6>${themeArticleRecent} - ${dateArticleRecent}</h6>
      //     </div>
      //    <div class="article-description">
      //     <p>${descriptionArticleRecent}</p>
      //    </div>
      // </div>
      // <div class="button-container">
      //    <a class="button primary" target="_blank" href="#">${lireArticle}</a>
      //  </div>`;
    
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
        let description = article.description;

        articleList += `   
         <div class="article-card">
            <div class="article-image">
              <img src= "${imageArticle}" alt="image de l'article">
            </div>
            <div id="article">
              <div class="article-tittle">
                <h5>${titreArticle}</h5>
                <h6>${themeArticle} - ${dateArticle}</h6>
              </div>
              <div class="article-description">
                <p>${description}</p>
                <a class="button primary" target="_blank" href="#">${lireArticle}</a>
              </div>
            </div>
          </div>`
        });
        
        
        let articleCard =
        `<h4 class="tittle" data-aos="fade-right" data-aos-duration="1500">Autres articles</h4>
          <div class="articles-container">
          ${articleList}
          </div>`;

      let conteneur = document.getElementById('autres-articles-box');
      // console.log(conteneur);
      
      conteneur.insertAdjacentHTML('beforeend', articleCard);

      // console.log(articleCard);
    }
    
function afficherEquipe(data) {
  let journal = data.journal;
  let equipe = journal.equipe;
  

  equipe.forEach(collegue => {
    let nomCollegue = collegue.prenom;
    // console.log(nomCollegue);
    
    let metierCollegue = collegue.metier;
    //console.log(metierCollegue);
    
    let presentationCollegue = collegue.presentation;
    //console.log(presentationCollegue);
    
    let photoCollegue = collegue.image;
    //console.log();
    
    let gitHub = collegue.reseaux[0].link;
    // console.log(gitHub);
    let linkedin = collegue.reseaux[1].link;
    // console.log(linkedin);

    let equipeList = 
    `<div class="equipe-card" data-aos="zoom-in" data-aos-duration="1500">
        <img class="avatar" src="${photoCollegue}" alt="avatar ${nomCollegue}">
        <h5>${nomCollegue}</h5>
        <h6>${metierCollegue}</h6>
        <p>${presentationCollegue}</p>
        <div class="socials-container">
         <div class="socials">
            <a href="${gitHub}" target="_blank" >
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="${linkedin}" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
         </div>
        </div>
    </div>`;

    // console.log(equipeList);
    let conteneur = document.getElementById('equipe-cards');
  conteneur.insertAdjacentHTML('beforeend', equipeList);
  

  });
  // let equipeList = `${equipeList}`;

  // let equipeCardsContainer = 
  //       ` <div class="equipe-cards">
  //         ${equipeList}
  //         </div>`;
  let conteneur = document.getElementById('equipe-box');
  let conteneurTittle = `<h5 class="tittle" data-aos="fade-right" data-aos-duration="1500">Découvrez notre équipe</h5>`;
  // console.log(conteneurTittle);
  conteneur.insertAdjacentHTML('afterbegin', conteneurTittle);
}

function afficherFooter(data) {
  let journal = data.journal;
  let nomJournal = journal.nomJournal;
  let annee = journal.annee;
// console.log(nomJournal, annee);
  let instagram = journal.reseaux[0].link;
    // console.log(instagram);
  let tiktok = journal.reseaux[1].link;
    // console.log(tiktok);
  let facebook = journal.reseaux[2].link;
    // console.log(facebook);

    let contact = journal.texteAppelAction3;

let journalFooter = 
`<h5>${nomJournal} - ${annee}</h5>
      <div class="socials-container">
         <div class="socials">
             <a href="${instagram}" target="_blank">
                 <i class="fa-brands fa-instagram"></i>
             </a>
             <a href="${tiktok}" target="_blank">
                 <i class="fa-brands fa-tiktok"></i>
             </a>
             <a href="${facebook}" target="_blank">
                 <i class="fa-brands fa-facebook"></i>
             </a>
         </div>
     </div>
     <div class="contact-box">
         <a class="button primary" href="bathily.oumou2103@gmail.com" target="_blank">${contact}</a>
     </div>`;
console.log(journalFooter);

  let conteneur = document.getElementById('footer');
  // console.log(conteneur);
  
  conteneur.insertAdjacentHTML('beforeend', journalFooter);
}