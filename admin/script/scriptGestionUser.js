
/* documentaliste */

var documentaliste = document.getElementById("documentaliste");
documentaliste.addEventListener("click", verifCreationDocumentaliste);

function verifCreationDocumentaliste() {
    var boutonDocumentaliste = document.getElementById("documentaliste");

    if (!document.getElementById('tableauDocumentaliste')) {
        if (document.getElementById('tableauEnseignant')) {
            var boutonEnseignant = document.getElementById("enseignant");
            var baseArticle = document.getElementById("base")
            baseArticle.removeChild(document.getElementById('tableauEnseignant'));
            baseArticle.removeChild(document.getElementById('contenerResultat'));
            boutonEnseignant.className = "zoneManagementUserBoutonChoix";
        }
        if (document.getElementById('tableauAdministrateur')) {
            var boutonAdministrateur = document.getElementById("administrateur");
            var baseArticle = document.getElementById("base")
            baseArticle.removeChild(document.getElementById('tableauAdministrateur'));
            baseArticle.removeChild(document.getElementById('contenerResultat'));
            boutonAdministrateur.className = "zoneManagementUserBoutonChoix";
        }
        return createTableDocumentaliste();
    } else {
        var baseArticle = document.getElementById("base")
        baseArticle.removeChild(document.getElementById('tableauDocumentaliste'));
        baseArticle.removeChild(document.getElementById('contenerResultat'));
        boutonDocumentaliste.className = "zoneManagementUserBoutonChoix";
    }
}

function createTableDocumentaliste() {
    var boutonDocumentaliste = document.getElementById("documentaliste");
    boutonDocumentaliste.className = "zoneManagementUserBoutonChoix couleurBtn";

    var article1 = document.getElementById("base");

    var tableIntitule = document.createElement('div');
    tableIntitule.className = "intituleTableau";
    tableIntitule.id = "tableauDocumentaliste";
    article1.appendChild(tableIntitule);

    var divContener = document.createElement('div');
    divContener.id = "contenerResultat";
    article1.appendChild(divContener);

    var pNom = document.createElement('p');
    pNom.className = "nomUser";
    var textPNom = document.createTextNode("Nom utilisateur");
    pNom.appendChild(textPNom);
    tableIntitule.appendChild(pNom);

    var pPrenom = document.createElement('p');
    pPrenom.className = "prenomUser";
    var textPPrenom = document.createTextNode("Prénom utilisateur");
    pPrenom.appendChild(textPPrenom);
    tableIntitule.appendChild(pPrenom);

    var pEmail = document.createElement('p');
    pEmail.className = "emailUser";
    var textPEmail = document.createTextNode("Email de contact");
    pEmail.appendChild(textPEmail);
    tableIntitule.appendChild(pEmail);

    var pCollege = document.createElement('p');
    pCollege.className = "collegeUser";
    var textPCollege = document.createTextNode("Collège de référence");
    pCollege.appendChild(textPCollege);
    tableIntitule.appendChild(pCollege);

    var pAction = document.createElement('p');
    pAction.className = "actionUser";
    var textPAction = document.createTextNode("Action");
    pAction.appendChild(textPAction);
    tableIntitule.appendChild(pAction);

    var perso1 = newFicheDocumentaliste('1', 'Dufault', 'Jean-Pierre', 'jpp-dufault@education-national.fr', 'Simin Palay - Lescar', '5132695', '0559350036', 'jpp-dufault@education-national.fr');
    divContener.appendChild(perso1);

    var perso2 = newFicheDocumentaliste('2', 'Marin', 'Paul', 'paul-marin@education-national.fr', 'Calandreta - Pau', '5589436', '0559354456', 'paul-marin@education-national.fr');
    divContener.appendChild(perso2);

    var perso3 = newFicheDocumentaliste('3', 'Pontier', 'Marcel', 'marcel-pontier@education-national.fr', "Jeanne d'Albret - Pau", '5278436', '0559357836', 'marcel-pontier@education-national.fr');
    divContener.appendChild(perso3);

    var perso4 = newFicheDocumentaliste('4', 'Kaboli', 'Chantal', 'kaboli-chantal@education-national.fr', "Bois d'amour - Billère", '5879236', '0559359921', 'kaboli-chantal@education-national.fr');
    divContener.appendChild(perso4);
}

function newFicheDocumentaliste(id, nom, prenom, email, college, codeEtab, tel, identifiant) {

    function stopEvent(evt) {
        evt.stopPropagation();
    }

    var divContenerUser = document.createElement('div');
    divContenerUser.id = "divContenerUser" + id;
    divContenerUser.addEventListener("click", boutonDocumentaliste)
    divContenerUser.className = "divFermer";

    var divContenu = document.createElement('div');
    divContenu.className = "resultatTableau avec-border";
    divContenu.id = "divContenu" + id;
    divContenerUser.appendChild(divContenu);

    var pNom = document.createElement('p');
    var textNom = document.createTextNode(nom);
    pNom.appendChild(textNom);
    pNom.className = "nomUser";
    divContenu.appendChild(pNom);

    var pPrenom = document.createElement('p');
    var textPrenom = document.createTextNode(prenom);
    pPrenom.appendChild(textPrenom);
    pPrenom.className = "prenomUser";
    divContenu.appendChild(pPrenom);

    var pEmail = document.createElement('p');
    var textEmail = document.createTextNode(email);
    pEmail.appendChild(textEmail);
    pEmail.className = "emailUser";
    divContenu.appendChild(pEmail);

    var pCollege = document.createElement('p');
    var textCollege = document.createTextNode(college);
    pCollege.appendChild(textCollege);
    pCollege.className = "collegeUser";
    divContenu.appendChild(pCollege);

    var pLien = document.createElement('p');
    pLien.className = "actionUser";
    divContenu.appendChild(pLien);
    var aFleche = document.createElement('a');
    aFleche.id = "lienFleche" + id;
    aFleche.className = "lienBlock";
    pLien.appendChild(aFleche);
    var imgFleche = document.createElement('img');
    imgFleche.className = "angle-down";
    imgFleche.id = "fleche" + id;
    imgFleche.src = "../img/angle-down.svg";
    aFleche.appendChild(imgFleche);

    return divContenerUser;

    function boutonDocumentaliste() {

        var divContenuDynamique = document.getElementById('divContenerUser' + id);
        var borderDiv = document.getElementById('divContenu' + id);
        var flecheBas = document.getElementById('fleche' + id);

        var nombreAngleUp = document.getElementsByClassName("angle-up").length;

        if (nombreAngleUp == 0) {

            borderDiv.className = "resultatTableau sans-border";
            flecheBas.className = "angle-up";
            flecheBas.src = "../img/angle-up.svg";
            divContenuDynamique.className = "divOuverte";

            var divDerouler = document.createElement("div");
            divDerouler.addEventListener("click", stopEvent);
            divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
            divDerouler.id = "deroulerBoutonAction" + id;
            divContenuDynamique.appendChild(divDerouler);

            var divBtnModifSupp = document.createElement("div");
            divBtnModifSupp.className = "boutonModifSupp";
            divBtnModifSupp.id = 'boutonModifSupp' + id;
            divDerouler.appendChild(divBtnModifSupp);

            var boutonModifier = document.createElement("a");
            boutonModifier.className = "btn-updatedelete";
            divBtnModifSupp.appendChild(boutonModifier);
            boutonModifier.href = "#";
            boutonModifier.addEventListener("click", updateDocumentaliste);
            var TexteBoutonModifier = document.createTextNode("Modifier");
            boutonModifier.appendChild(TexteBoutonModifier);
            divBtnModifSupp.appendChild(boutonModifier);

            var boutonSupprimer = document.createElement("a");
            boutonSupprimer.className = "btn-updatedelete";
            divBtnModifSupp.appendChild(boutonSupprimer);
            boutonSupprimer.href = "#";
            boutonSupprimer.addEventListener("click", deleteDocumentaliste);
            var TexteBoutonSupprimer = document.createTextNode("Supprimer");
            boutonSupprimer.appendChild(TexteBoutonSupprimer);
            divBtnModifSupp.appendChild(boutonSupprimer);

            return divContenuDynamique;

        } else {

            var divOuverte = document.querySelector(".divOuverte");
            var flecheBasDivOuverte = document.querySelector(".angle-up");
            var borderDivOuverte = document.querySelector(".sans-border");

            if (document.getElementById('deroulerBoutonAction' + id)) {
                divContenuDynamique.removeChild(document.getElementById('deroulerBoutonAction' + id));
                flecheBas.className = "angle-down";
                flecheBas.src = "../img/angle-down.svg";
                borderDiv.className = "resultatTableau avec-border";
                divOuverte.className = "divFermer";
                return divContenuDynamique;

            } else if (document.getElementById('divUpdateUser' + id)) {
                divContenuDynamique.removeChild(document.querySelector('.divFormUpdate'));
                flecheBas.className = "angle-down";
                flecheBas.src = "../img/angle-down.svg";
                borderDiv.className = "resultatTableau avec-border";
                divOuverte.className = "divFermer";
                return divContenuDynamique;
            }

            if (document.querySelector(".divOuverte")) {

                if (document.querySelector('.divFormUpdate')) {
                    divOuverte.removeChild(document.querySelector('.divFormUpdate'));
                    flecheBasDivOuverte.className = "angle-down";
                    flecheBasDivOuverte.src = "../img/angle-down.svg";
                    borderDivOuverte.className = "resultatTableau avec-border";
                    divContenuDynamique.className = "divOuverte";
                    divOuverte.className = "divFermer";

                    borderDiv.className = "resultatTableau sans-border";
                    flecheBas.className = "angle-up";
                    flecheBas.src = "../img/angle-up.svg";

                    var divDerouler = document.createElement("div");
                    divDerouler.addEventListener("click", stopEvent);
                    divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
                    divDerouler.id = "deroulerBoutonAction" + id;
                    divContenuDynamique.appendChild(divDerouler);

                    var divBtnModifSupp = document.createElement("div");
                    divBtnModifSupp.className = "boutonModifSupp";
                    divBtnModifSupp.id = 'boutonModifSupp' + id;
                    divDerouler.appendChild(divBtnModifSupp);

                    var boutonModifier = document.createElement("a");
                    boutonModifier.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonModifier);
                    boutonModifier.href = "#";
                    boutonModifier.addEventListener("click", updateDocumentaliste);
                    var TexteBoutonModifier = document.createTextNode("Modifier");
                    boutonModifier.appendChild(TexteBoutonModifier);
                    divBtnModifSupp.appendChild(boutonModifier);

                    var boutonSupprimer = document.createElement("a");
                    boutonSupprimer.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonSupprimer);
                    boutonSupprimer.href = "#";
                    boutonSupprimer.addEventListener("click", deleteDocumentaliste);
                    var TexteBoutonSupprimer = document.createTextNode("Supprimer");
                    boutonSupprimer.appendChild(TexteBoutonSupprimer);
                    divBtnModifSupp.appendChild(boutonSupprimer);

                    return divContenuDynamique;

                } else {

                    flecheBasDivOuverte.className = "angle-down";
                    flecheBasDivOuverte.src = "../img/angle-down.svg";
                    borderDivOuverte.className = "resultatTableau avec-border";
                    divOuverte.removeChild(document.querySelector(".divAngle-up"));
                    divContenuDynamique.className = "divOuverte";
                    divOuverte.className = "divFermer";

                    borderDiv.className = "resultatTableau sans-border";
                    flecheBas.className = "angle-up";
                    flecheBas.src = "../img/angle-up.svg";

                    var divDerouler = document.createElement("div");
                    divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
                    divDerouler.addEventListener("click", stopEvent);
                    divDerouler.id = "deroulerBoutonAction" + id;
                    divContenuDynamique.appendChild(divDerouler);

                    var divBtnModifSupp = document.createElement("div");
                    divBtnModifSupp.className = "boutonModifSupp";
                    divBtnModifSupp.id = 'boutonModifSupp' + id;
                    divDerouler.appendChild(divBtnModifSupp);

                    var boutonModifier = document.createElement("a");
                    boutonModifier.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonModifier);
                    boutonModifier.href = "#";
                    boutonModifier.addEventListener("click", updateDocumentaliste);
                    var TexteBoutonModifier = document.createTextNode("Modifier");
                    boutonModifier.appendChild(TexteBoutonModifier);
                    divBtnModifSupp.appendChild(boutonModifier);

                    var boutonSupprimer = document.createElement("a");
                    boutonSupprimer.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonSupprimer);
                    boutonSupprimer.href = "#";
                    boutonSupprimer.addEventListener("click", deleteDocumentaliste);
                    var TexteBoutonSupprimer = document.createTextNode("Supprimer");
                    boutonSupprimer.appendChild(TexteBoutonSupprimer);
                    divBtnModifSupp.appendChild(boutonSupprimer);

                    return divContenuDynamique;

                }
            }
        }
    }

    function updateDocumentaliste() {

        var divContenuDynamique = document.getElementById('divContenerUser' + id)
        var borderDiv = document.getElementById('divContenu' + id);

        divContenuDynamique.removeChild(document.getElementById('deroulerBoutonAction' + id));
        borderDiv.className = "resultatTableau sans-border";

        var divPrincipaleForm = document.createElement("div");
        divPrincipaleForm.id = "divUpdateUser" + id;
        divPrincipaleForm.className = "divFormUpdate avec-border";
        divContenuDynamique.appendChild(divPrincipaleForm);

        var formUpdate = document.createElement("form");
        formUpdate.addEventListener("click", stopEvent);
        formUpdate.className = "formUpdate";
        divPrincipaleForm.appendChild(formUpdate);

        var titre1Form = document.createElement("h3");
        var textTitre1Form = document.createTextNode("Information générale :");
        titre1Form.appendChild(textTitre1Form);
        formUpdate.appendChild(titre1Form);

        var divContenu1 = document.createElement("div");
        divContenu1.className = "divFormContenu";
        formUpdate.appendChild(divContenu1);

        var inputNom = document.createElement("input");
        inputNom.className = "policeForm taille1Form";
        inputNom.type = "text";
        inputNom.name = "nomUser";
        inputNom.placeholder = "Nom utilistateur";
        inputNom.value = nom;
        divContenu1.appendChild(inputNom);

        var inputPrenom = document.createElement("input");
        inputPrenom.className = "policeForm taille1Form";
        inputPrenom.type = "text";
        inputPrenom.name = "prenomUser";
        inputPrenom.placeholder = "Prenom utilistateur";
        inputPrenom.value = prenom;
        divContenu1.appendChild(inputPrenom);

        var inputEmail = document.createElement("input");
        inputEmail.className = "policeForm taille2Form";
        inputEmail.type = "email";
        inputEmail.name = "emailUser";
        inputEmail.placeholder = "Email de contact";
        inputEmail.value = email;
        divContenu1.appendChild(inputEmail);

        var divContenu2 = document.createElement("div");
        divContenu2.className = "divFormContenu";
        formUpdate.appendChild(divContenu2);

        var inputCodeEtab = document.createElement("input");
        inputCodeEtab.className = "policeForm taille1Form";
        inputCodeEtab.type = "text";
        inputCodeEtab.name = "codeEtablissement";
        inputCodeEtab.placeholder = "Code etablissement";
        inputCodeEtab.value = codeEtab;
        divContenu2.appendChild(inputCodeEtab);

        var inputTel = document.createElement("input");
        inputTel.className = "policeForm taille1Form";
        inputTel.type = "tel";
        inputTel.name = "telUser";
        inputTel.placeholder = "Telephone de contact";
        inputTel.value = tel;
        divContenu2.appendChild(inputTel);

        var selectCollege = document.createElement("select");
        selectCollege.className = "policeForm taille3form";
        selectCollege.name = "selectCollege";
        divContenu2.appendChild(selectCollege);
        var option1 = document.createElement("option");
        selectCollege.appendChild(option1);
        var textOption1 = document.createTextNode("- Choisissez un collège -")
        option1.appendChild(textOption1);
        var option2 = document.createElement("option");
        selectCollege.appendChild(option2);
        var textOption2 = document.createTextNode("Calandreta - Pau")
        option2.appendChild(textOption2);
        var option3 = document.createElement("option");
        selectCollege.appendChild(option3);
        var textOption3 = document.createTextNode("Jeanne d'Albret - Pau")
        option3.appendChild(textOption3);
        var option4 = document.createElement("option");
        selectCollege.appendChild(option4);
        var textOption4 = document.createTextNode("Bois d'amour - Billère")
        option4.appendChild(textOption4);
        var option5 = document.createElement("option");
        selectCollege.appendChild(option5);
        var textOption5 = document.createTextNode("Simin Palay - Lescar")
        option5.appendChild(textOption5);

        var titre2Form = document.createElement("h3");
        var textTitre2Form = document.createTextNode("Information de connexion :");
        titre2Form.appendChild(textTitre2Form);
        formUpdate.appendChild(titre2Form);

        var divContenu3 = document.createElement("div");
        divContenu3.className = "divFormContenu";
        formUpdate.appendChild(divContenu3);

        var inputIdentifiant = document.createElement("input");
        inputIdentifiant.className = "policeForm taille2Form";
        inputIdentifiant.type = "text";
        inputIdentifiant.name = "identifiant";
        inputIdentifiant.placeholder = "Identifiant";
        inputIdentifiant.value = identifiant;
        divContenu3.appendChild(inputIdentifiant);

        var inputMdp = document.createElement("input");
        inputMdp.className = "policeForm taille1Form";
        inputMdp.type = "password";
        inputMdp.name = "motDePasse";
        inputMdp.placeholder = "Mot de passe";
        divContenu3.appendChild(inputMdp);

        var inputMdp2 = document.createElement("input");
        inputMdp2.className = "policeForm taille1Form";
        inputMdp2.type = "password";
        inputMdp2.name = "verifMotDePasse";
        inputMdp2.placeholder = "Confirmation mot de passe";
        divContenu3.appendChild(inputMdp2);

        var divContenu4 = document.createElement("div");
        divContenu4.className = "divFormBtn";
        formUpdate.appendChild(divContenu4);

        var boutonEnregistrer = document.createElement("button");
        boutonEnregistrer.className = "btn-modifier";
        boutonEnregistrer.type = "submit";
        boutonEnregistrer.name = "modifier";
        boutonEnregistrer.value = "modifier";
        var textBouton = document.createTextNode("Enregistrer");
        boutonEnregistrer.appendChild(textBouton);
        divContenu4.appendChild(boutonEnregistrer);
    }

    function deleteDocumentaliste() {

        var articleouvert = document.getElementById("base");

        var divBackgroundPop = document.createElement("div");
        divBackgroundPop.addEventListener("click", fermerContenu);
        divBackgroundPop.className = "backgroundPop-up";
        articleouvert.appendChild(divBackgroundPop);

        var divPop = document.createElement("div");
        divPop.addEventListener("click", stopEvent);
        divPop.className = "pop-up";
        divBackgroundPop.appendChild(divPop);

        var textPop = document.createTextNode("Êtes-vous sûr de vouloir supprimer " + nom + (" ") + prenom + " de la liste des documentalistes?");
        divPop.appendChild(textPop);

        var divBoutonPop = document.createElement("div");
        divBoutonPop.addEventListener("click", stopEvent);
        divBoutonPop.className = "boutonPop-up";
        divPop.appendChild(divBoutonPop);

        var btnConfirmer = document.createElement("a");
        var textBtnConfirmer = document.createTextNode("Confirmer");
        btnConfirmer.addEventListener("click", evtBoutonConfirmer);
        btnConfirmer.href = "#";
        btnConfirmer.appendChild(textBtnConfirmer);
        btnConfirmer.className = "boutonConfirmerAnnuler backBlue";
        divBoutonPop.appendChild(btnConfirmer);

        var btnAnnuler = document.createElement("a");
        var textBtnAnnuler = document.createTextNode("Annuler");
        btnAnnuler.addEventListener("click", evtBoutonAnnuler);
        btnAnnuler.href = "#";
        btnAnnuler.appendChild(textBtnAnnuler);
        btnAnnuler.className = "boutonConfirmerAnnuler";
        divBoutonPop.appendChild(btnAnnuler);

        function evtBoutonConfirmer() {
            var divResultat = document.getElementById("contenerResultat");

            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
            divResultat.removeChild(document.querySelector(".divOuverte"));
            /* ajouter fonction pour supprimer de la base de données */
        }

        function evtBoutonAnnuler() {
            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
        }

        function fermerContenu() {
            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
        }

        function stopEvent(evt) {
            evt.stopPropagation();
        }

    }
}



/* enseignant */

var enseignant = document.getElementById("enseignant");
enseignant.addEventListener("click", verifCreationEnseignant);

function verifCreationEnseignant() {
    var boutonEnseignant = document.getElementById("enseignant");

    if (!document.getElementById('tableauEnseignant')) {
        if (document.getElementById('tableauDocumentaliste')) {
            var boutonDocumentaliste = document.getElementById("documentaliste");
            var baseArticle = document.getElementById("base")
            baseArticle.removeChild(document.getElementById('tableauDocumentaliste'));
            baseArticle.removeChild(document.getElementById('contenerResultat'));
            boutonDocumentaliste.className = "zoneManagementUserBoutonChoix";
        }
        if (document.getElementById('tableauAdministrateur')) {
            var boutonAdministrateur = document.getElementById("administrateur");
            var baseArticle = document.getElementById("base")
            baseArticle.removeChild(document.getElementById('tableauAdministrateur'));
            baseArticle.removeChild(document.getElementById('contenerResultat'));
            boutonAdministrateur.className = "zoneManagementUserBoutonChoix";
        }
        return createTableEnseignant();
    } else {
        var baseArticle = document.getElementById("base")
        baseArticle.removeChild(document.getElementById('tableauEnseignant'));
        baseArticle.removeChild(document.getElementById('contenerResultat'));
        boutonEnseignant.className = "zoneManagementUserBoutonChoix";
    }
}

function createTableEnseignant() {
    var boutonEnseignant = document.getElementById("enseignant");
    boutonEnseignant.className = "zoneManagementUserBoutonChoix couleurBtn";

    var article1 = document.getElementById("base");

    var tableIntitule = document.createElement('div');
    tableIntitule.className = "intituleTableau";
    tableIntitule.id = "tableauEnseignant";
    article1.appendChild(tableIntitule);

    var divContener = document.createElement('div');
    divContener.id = "contenerResultat";
    article1.appendChild(divContener);

    var pNom = document.createElement('p');
    pNom.className = "nomUser";
    var textPNom = document.createTextNode("Nom utilisateur");
    pNom.appendChild(textPNom);
    tableIntitule.appendChild(pNom);

    var pPrenom = document.createElement('p');
    pPrenom.className = "prenomUser";
    var textPPrenom = document.createTextNode("Prénom utilisateur");
    pPrenom.appendChild(textPPrenom);
    tableIntitule.appendChild(pPrenom);

    var pEmail = document.createElement('p');
    pEmail.className = "emailUser";
    var textPEmail = document.createTextNode("Email de contact");
    pEmail.appendChild(textPEmail);
    tableIntitule.appendChild(pEmail);

    var pCollege = document.createElement('p');
    pCollege.className = "collegeUser";
    var textPCollege = document.createTextNode("Collège de référence");
    pCollege.appendChild(textPCollege);
    tableIntitule.appendChild(pCollege);

    var pAction = document.createElement('p');
    pAction.className = "actionUser";
    var textPAction = document.createTextNode("Action");
    pAction.appendChild(textPAction);
    tableIntitule.appendChild(pAction);

    var perso1 = newFicheEnseignant('1', 'Bilow', 'Jacques', 'jacques-bilow@education-national.fr', "Jeanne d'Albret - Pau", '0559350036', 'jacques-bilow@education-national.fr');
    divContener.appendChild(perso1);

    var perso2 = newFicheEnseignant('2', 'Pitch', 'Marion', 'marion-pitch@education-national.fr', "Bois d'amour - Billère", '0559350489', 'marion-pitch@education-national.fr');
    divContener.appendChild(perso2);

    var perso3 = newFicheEnseignant('3', 'Mouchou', 'Claire', 'claire-mouchou@education-national.fr', "Simin Palay - Lescar", '0559357833', 'claire-mouchou@education-national.fr');
    divContener.appendChild(perso3);

    var perso4 = newFicheEnseignant('4', 'Georgio', 'Yann', 'georgio-yann@education-national.fr', "Calandreta - Pau", '0559461897', 'georgio-yann@education-national.fr');
    divContener.appendChild(perso4);

    var perso5 = newFicheEnseignant('5', 'Albertini', 'Hayden', 'hayden-albertini@education-national.fr', "Nationalisé - Arzacq-Arraziguet", '0559327456', 'hayden-albertini@education-national.fr');
    divContener.appendChild(perso5);

    var perso6 = newFicheEnseignant('6', 'Hermolino', 'Emma', 'hermolino-emma@education-national.fr', "Joseph Peyré - Garlin", '0559049429', 'hermolino-emma@education-national.fr');
    divContener.appendChild(perso6);
}

function newFicheEnseignant(id, nom, prenom, email, college, tel, identifiant) {

    function stopEvent(evt) {
        evt.stopPropagation();
    }

    var divContenerUser = document.createElement('div');
    divContenerUser.id = "divContenerUser" + id;
    divContenerUser.addEventListener("click", boutonEnseignant)
    divContenerUser.className = "divFermer";

    var divContenu = document.createElement('div');
    divContenu.className = "resultatTableau avec-border";
    divContenu.id = "divContenu" + id;
    divContenerUser.appendChild(divContenu);

    var pNom = document.createElement('p');
    var textNom = document.createTextNode(nom);
    pNom.appendChild(textNom);
    pNom.className = "nomUser";
    divContenu.appendChild(pNom);

    var pPrenom = document.createElement('p');
    var textPrenom = document.createTextNode(prenom);
    pPrenom.appendChild(textPrenom);
    pPrenom.className = "prenomUser";
    divContenu.appendChild(pPrenom);

    var pEmail = document.createElement('p');
    var textEmail = document.createTextNode(email);
    pEmail.appendChild(textEmail);
    pEmail.className = "emailUser";
    divContenu.appendChild(pEmail);

    var pCollege = document.createElement('p');
    var textCollege = document.createTextNode(college);
    pCollege.appendChild(textCollege);
    pCollege.className = "collegeUser";
    divContenu.appendChild(pCollege);

    var pLien = document.createElement('p');
    pLien.className = "actionUser";
    divContenu.appendChild(pLien);
    var aFleche = document.createElement('a');
    aFleche.id = "lienFleche" + id;
    aFleche.className = "lienBlock";
    pLien.appendChild(aFleche);
    var imgFleche = document.createElement('img');
    imgFleche.className = "angle-down";
    imgFleche.id = "fleche" + id;
    imgFleche.src = "../img/angle-down.svg";
    aFleche.appendChild(imgFleche);

    return divContenerUser;

    function boutonEnseignant() {

        var divContenuDynamique = document.getElementById('divContenerUser' + id);
        var borderDiv = document.getElementById('divContenu' + id);
        var flecheBas = document.getElementById('fleche' + id);

        var nombreAngleUp = document.getElementsByClassName("angle-up").length;

        if (nombreAngleUp == 0) {

            borderDiv.className = "resultatTableau sans-border";
            flecheBas.className = "angle-up";
            flecheBas.src = "../img/angle-up.svg";
            divContenuDynamique.className = "divOuverte";

            var divDerouler = document.createElement("div");
            divDerouler.addEventListener("click", stopEvent);
            divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
            divDerouler.id = "deroulerBoutonAction" + id;
            divContenuDynamique.appendChild(divDerouler);

            var divBtnModifSupp = document.createElement("div");
            divBtnModifSupp.className = "boutonModifSupp";
            divBtnModifSupp.id = 'boutonModifSupp' + id;
            divDerouler.appendChild(divBtnModifSupp);

            var boutonModifier = document.createElement("a");
            boutonModifier.className = "btn-updatedelete";
            divBtnModifSupp.appendChild(boutonModifier);
            boutonModifier.href = "#";
            boutonModifier.addEventListener("click", updateEnseignant);
            var TexteBoutonModifier = document.createTextNode("Modifier");
            boutonModifier.appendChild(TexteBoutonModifier);
            divBtnModifSupp.appendChild(boutonModifier);

            var boutonSupprimer = document.createElement("a");
            boutonSupprimer.className = "btn-updatedelete";
            divBtnModifSupp.appendChild(boutonSupprimer);
            boutonSupprimer.href = "#";
            boutonSupprimer.addEventListener("click", deleteEnseignant);
            var TexteBoutonSupprimer = document.createTextNode("Supprimer");
            boutonSupprimer.appendChild(TexteBoutonSupprimer);
            divBtnModifSupp.appendChild(boutonSupprimer);

            return divContenuDynamique;

        } else {

            var divOuverte = document.querySelector(".divOuverte");
            var flecheBasDivOuverte = document.querySelector(".angle-up");
            var borderDivOuverte = document.querySelector(".sans-border");

            if (document.getElementById('deroulerBoutonAction' + id)) {
                divContenuDynamique.removeChild(document.getElementById('deroulerBoutonAction' + id));
                flecheBas.className = "angle-down";
                flecheBas.src = "../img/angle-down.svg";
                borderDiv.className = "resultatTableau avec-border";
                divOuverte.className = "divFermer";
                return divContenuDynamique;

            } else if (document.getElementById('divUpdateUser' + id)) {
                divContenuDynamique.removeChild(document.querySelector('.divFormUpdate'));
                flecheBas.className = "angle-down";
                flecheBas.src = "../img/angle-down.svg";
                borderDiv.className = "resultatTableau avec-border";
                divOuverte.className = "divFermer";
                return divContenuDynamique;
            }

            if (document.querySelector(".divOuverte")) {

                if (document.querySelector('.divFormUpdate')) {
                    divOuverte.removeChild(document.querySelector('.divFormUpdate'));
                    flecheBasDivOuverte.className = "angle-down";
                    flecheBasDivOuverte.src = "../img/angle-down.svg";
                    borderDivOuverte.className = "resultatTableau avec-border";
                    divContenuDynamique.className = "divOuverte";
                    divOuverte.className = "divFermer";

                    borderDiv.className = "resultatTableau sans-border";
                    flecheBas.className = "angle-up";
                    flecheBas.src = "../img/angle-up.svg";

                    var divDerouler = document.createElement("div");
                    divDerouler.addEventListener("click", stopEvent);
                    divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
                    divDerouler.id = "deroulerBoutonAction" + id;
                    divContenuDynamique.appendChild(divDerouler);

                    var divBtnModifSupp = document.createElement("div");
                    divBtnModifSupp.className = "boutonModifSupp";
                    divBtnModifSupp.id = 'boutonModifSupp' + id;
                    divDerouler.appendChild(divBtnModifSupp);

                    var boutonModifier = document.createElement("a");
                    boutonModifier.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonModifier);
                    boutonModifier.href = "#";
                    boutonModifier.addEventListener("click", updateEnseignant);
                    var TexteBoutonModifier = document.createTextNode("Modifier");
                    boutonModifier.appendChild(TexteBoutonModifier);
                    divBtnModifSupp.appendChild(boutonModifier);

                    var boutonSupprimer = document.createElement("a");
                    boutonSupprimer.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonSupprimer);
                    boutonSupprimer.href = "#";
                    boutonSupprimer.addEventListener("click", deleteEnseignant);
                    var TexteBoutonSupprimer = document.createTextNode("Supprimer");
                    boutonSupprimer.appendChild(TexteBoutonSupprimer);
                    divBtnModifSupp.appendChild(boutonSupprimer);

                    return divContenuDynamique;

                } else {

                    flecheBasDivOuverte.className = "angle-down";
                    flecheBasDivOuverte.src = "../img/angle-down.svg";
                    borderDivOuverte.className = "resultatTableau avec-border";
                    divOuverte.removeChild(document.querySelector(".divAngle-up"));
                    divContenuDynamique.className = "divOuverte";
                    divOuverte.className = "divFermer";

                    borderDiv.className = "resultatTableau sans-border";
                    flecheBas.className = "angle-up";
                    flecheBas.src = "../img/angle-up.svg";

                    var divDerouler = document.createElement("div");
                    divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
                    divDerouler.addEventListener("click", stopEvent);
                    divDerouler.id = "deroulerBoutonAction" + id;
                    divContenuDynamique.appendChild(divDerouler);

                    var divBtnModifSupp = document.createElement("div");
                    divBtnModifSupp.className = "boutonModifSupp";
                    divBtnModifSupp.id = 'boutonModifSupp' + id;
                    divDerouler.appendChild(divBtnModifSupp);

                    var boutonModifier = document.createElement("a");
                    boutonModifier.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonModifier);
                    boutonModifier.href = "#";
                    boutonModifier.addEventListener("click", updateEnseignant);
                    var TexteBoutonModifier = document.createTextNode("Modifier");
                    boutonModifier.appendChild(TexteBoutonModifier);
                    divBtnModifSupp.appendChild(boutonModifier);

                    var boutonSupprimer = document.createElement("a");
                    boutonSupprimer.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonSupprimer);
                    boutonSupprimer.href = "#";
                    boutonSupprimer.addEventListener("click", deleteEnseignant);
                    var TexteBoutonSupprimer = document.createTextNode("Supprimer");
                    boutonSupprimer.appendChild(TexteBoutonSupprimer);
                    divBtnModifSupp.appendChild(boutonSupprimer);

                    return divContenuDynamique;

                }
            }
        }
    }
    function deleteEnseignant() {

        var articleouvert = document.getElementById("base");

        var divBackgroundPop = document.createElement("div");
        divBackgroundPop.addEventListener("click", fermerContenu);
        divBackgroundPop.className = "backgroundPop-up";
        articleouvert.appendChild(divBackgroundPop);

        var divPop = document.createElement("div");
        divPop.addEventListener("click", stopEvent);
        divPop.className = "pop-up";
        divBackgroundPop.appendChild(divPop);

        var textPop = document.createTextNode("Êtes-vous sûr de vouloir supprimer " + nom + (" ") + prenom + " de la liste des documentalistes?");
        divPop.appendChild(textPop);

        var divBoutonPop = document.createElement("div");
        divBoutonPop.addEventListener("click", stopEvent);
        divBoutonPop.className = "boutonPop-up";
        divPop.appendChild(divBoutonPop);

        var btnConfirmer = document.createElement("a");
        var textBtnConfirmer = document.createTextNode("Confirmer");
        btnConfirmer.addEventListener("click", evtBoutonConfirmer);
        btnConfirmer.href = "#";
        btnConfirmer.appendChild(textBtnConfirmer);
        btnConfirmer.className = "boutonConfirmerAnnuler backBlue";
        divBoutonPop.appendChild(btnConfirmer);

        var btnAnnuler = document.createElement("a");
        var textBtnAnnuler = document.createTextNode("Annuler");
        btnAnnuler.addEventListener("click", evtBoutonAnnuler);
        btnAnnuler.href = "#";
        btnAnnuler.appendChild(textBtnAnnuler);
        btnAnnuler.className = "boutonConfirmerAnnuler";
        divBoutonPop.appendChild(btnAnnuler);

        function evtBoutonConfirmer() {
            var divResultat = document.getElementById("contenerResultat");

            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
            divResultat.removeChild(document.querySelector(".divOuverte"));
            /* ajouter fonction pour supprimer de la base de données */
        }

        function evtBoutonAnnuler() {
            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
        }

        function fermerContenu() {
            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
        }

        function stopEvent(evt) {
            evt.stopPropagation();
        }

    }

    function updateEnseignant() {
        var divContenuDynamique = document.getElementById('divContenerUser' + id)
        var borderDiv = document.getElementById('divContenu' + id);

        divContenuDynamique.removeChild(document.getElementById('deroulerBoutonAction' + id));
        borderDiv.className = "resultatTableau sans-border";

        var divPrincipaleForm = document.createElement("div");
        divPrincipaleForm.id = "divUpdateUser" + id;
        divPrincipaleForm.className = "divFormUpdate avec-border";
        divContenuDynamique.appendChild(divPrincipaleForm);

        var formUpdate = document.createElement("form");
        formUpdate.addEventListener("click", stopEvent);
        formUpdate.className = "formUpdate";
        divPrincipaleForm.appendChild(formUpdate);

        var titre1Form = document.createElement("h3");
        var textTitre1Form = document.createTextNode("Information générale :");
        titre1Form.appendChild(textTitre1Form);
        formUpdate.appendChild(titre1Form);

        var divContenu1 = document.createElement("div");
        divContenu1.className = "divFormContenu";
        formUpdate.appendChild(divContenu1);

        var inputNom = document.createElement("input");
        inputNom.className = "policeForm taille1Form";
        inputNom.type = "text";
        inputNom.name = "nomUser";
        inputNom.placeholder = "Nom utilistateur";
        inputNom.value = nom;
        divContenu1.appendChild(inputNom);

        var inputPrenom = document.createElement("input");
        inputPrenom.className = "policeForm taille1Form";
        inputPrenom.type = "text";
        inputPrenom.name = "prenomUser";
        inputPrenom.placeholder = "Prenom utilistateur";
        inputPrenom.value = prenom;
        divContenu1.appendChild(inputPrenom);

        var inputEmail = document.createElement("input");
        inputEmail.className = "policeForm taille2Form";
        inputEmail.type = "email";
        inputEmail.name = "emailUser";
        inputEmail.placeholder = "Email de contact";
        inputEmail.value = email;
        divContenu1.appendChild(inputEmail);

        var divContenu2 = document.createElement("div");
        divContenu2.className = "divFormContenu";
        formUpdate.appendChild(divContenu2);

        var selectMatiere = document.createElement("select");
        selectMatiere.className = "policeForm taille4form";
        selectMatiere.name = "selectMatiere";
        divContenu2.appendChild(selectMatiere);
        var option1 = document.createElement("option");
        selectMatiere.appendChild(option1);
        var textOption1 = document.createTextNode("- Choisissez une matière -")
        option1.appendChild(textOption1);
        var option2 = document.createElement("option");
        selectMatiere.appendChild(option2);
        var textOption2 = document.createTextNode("Français")
        option2.appendChild(textOption2);
        var option3 = document.createElement("option");
        selectMatiere.appendChild(option3);
        var textOption3 = document.createTextNode("Anglais")
        option3.appendChild(textOption3);
        var option4 = document.createElement("option");
        selectMatiere.appendChild(option4);
        var textOption4 = document.createTextNode("Histoire")
        option4.appendChild(textOption4);
        var option5 = document.createElement("option");
        selectMatiere.appendChild(option5);
        var textOption5 = document.createTextNode("Géographie")
        option5.appendChild(textOption5);

        var inputTel = document.createElement("input");
        inputTel.className = "policeForm taille1Form";
        inputTel.type = "tel";
        inputTel.name = "telUser";
        inputTel.placeholder = "Telephone de contact";
        inputTel.value = tel;
        divContenu2.appendChild(inputTel);

        var selectCollege = document.createElement("select");
        selectCollege.className = "policeForm taille3form";
        selectCollege.name = "selectCollege";
        divContenu2.appendChild(selectCollege);
        var option1 = document.createElement("option");
        selectCollege.appendChild(option1);
        var textOption1 = document.createTextNode("- Choisissez un collège -")
        option1.appendChild(textOption1);
        var option2 = document.createElement("option");
        selectCollege.appendChild(option2);
        var textOption2 = document.createTextNode("Calandreta - Pau")
        option2.appendChild(textOption2);
        var option3 = document.createElement("option");
        selectCollege.appendChild(option3);
        var textOption3 = document.createTextNode("Jeanne d'Albret - Pau")
        option3.appendChild(textOption3);
        var option4 = document.createElement("option");
        selectCollege.appendChild(option4);
        var textOption4 = document.createTextNode("Bois d'amour - Billère")
        option4.appendChild(textOption4);
        var option5 = document.createElement("option");
        selectCollege.appendChild(option5);
        var textOption5 = document.createTextNode("Simin Palay - Lescar")
        option5.appendChild(textOption5);

        var titre2Form = document.createElement("h3");
        var textTitre2Form = document.createTextNode("Information de connexion :");
        titre2Form.appendChild(textTitre2Form);
        formUpdate.appendChild(titre2Form);

        var divContenu3 = document.createElement("div");
        divContenu3.className = "divFormContenu";
        formUpdate.appendChild(divContenu3);

        var inputIdentifiant = document.createElement("input");
        inputIdentifiant.className = "policeForm taille2Form";
        inputIdentifiant.type = "text";
        inputIdentifiant.name = "identifiant";
        inputIdentifiant.placeholder = "Identifiant";
        inputIdentifiant.value = identifiant;
        divContenu3.appendChild(inputIdentifiant);

        var inputMdp = document.createElement("input");
        inputMdp.className = "policeForm taille1Form";
        inputMdp.type = "password";
        inputMdp.name = "motDePasse";
        inputMdp.placeholder = "Mot de passe";
        divContenu3.appendChild(inputMdp);

        var inputMdp2 = document.createElement("input");
        inputMdp2.className = "policeForm taille1Form";
        inputMdp2.type = "password";
        inputMdp2.name = "verifMotDePasse";
        inputMdp2.placeholder = "Confirmation mot de passe";
        divContenu3.appendChild(inputMdp2);

        var divContenu4 = document.createElement("div");
        divContenu4.className = "divFormBtn";
        formUpdate.appendChild(divContenu4);

        var boutonEnregistrer = document.createElement("button");
        boutonEnregistrer.className = "btn-modifier";
        boutonEnregistrer.type = "submit";
        boutonEnregistrer.name = "modifier";
        boutonEnregistrer.value = "modifier";
        var textBouton = document.createTextNode("Enregistrer");
        boutonEnregistrer.appendChild(textBouton);
        divContenu4.appendChild(boutonEnregistrer);
    }
}

/* administrateur */

var administrateur = document.getElementById("administrateur");
administrateur.addEventListener("click", verifCreationAdministrateur);

function verifCreationAdministrateur() {
    var boutonAdministrateur = document.getElementById("administrateur");

    if (!document.getElementById('tableauAdministrateur')) {
        if (document.getElementById('tableauDocumentaliste')) {
            var boutonDocumentaliste = document.getElementById("documentaliste");
            var baseArticle = document.getElementById("base")
            baseArticle.removeChild(document.getElementById('tableauDocumentaliste'));
            baseArticle.removeChild(document.getElementById('contenerResultat'));
            boutonDocumentaliste.className = "zoneManagementUserBoutonChoix";
        }
        if (document.getElementById('tableauEnseignant')) {
            var boutonEnseignant = document.getElementById("enseignant");
            var baseArticle = document.getElementById("base")
            baseArticle.removeChild(document.getElementById('tableauEnseignant'));
            baseArticle.removeChild(document.getElementById('contenerResultat'));
            boutonEnseignant.className = "zoneManagementUserBoutonChoix";
        }
        return createTableAdministrateur();
    } else {
        var baseArticle = document.getElementById("base")
        baseArticle.removeChild(document.getElementById('tableauAdministrateur'));
        baseArticle.removeChild(document.getElementById('contenerResultat'));
        boutonAdministrateur.className = "zoneManagementUserBoutonChoix";
    }
}

function createTableAdministrateur() {

    var boutonAdministrateur = document.getElementById("administrateur");
    boutonAdministrateur.className = "zoneManagementUserBoutonChoix couleurBtn";

    var article1 = document.getElementById("base");

    var tableIntitule = document.createElement('div');
    tableIntitule.className = "intituleTableau";
    tableIntitule.id = "tableauAdministrateur";
    article1.appendChild(tableIntitule);

    var divContener = document.createElement('div');
    divContener.id = "contenerResultat";
    article1.appendChild(divContener);

    var pNom = document.createElement('p');
    pNom.className = "nomUser";
    var textPNom = document.createTextNode("Nom utilisateur");
    pNom.appendChild(textPNom);
    tableIntitule.appendChild(pNom);

    var pPrenom = document.createElement('p');
    pPrenom.className = "prenomUser";
    var textPPrenom = document.createTextNode("Prénom utilisateur");
    pPrenom.appendChild(textPPrenom);
    tableIntitule.appendChild(pPrenom);

    var pEmail = document.createElement('p');
    pEmail.className = "emailUser";
    var textPEmail = document.createTextNode("Email de contact");
    pEmail.appendChild(textPEmail);
    tableIntitule.appendChild(pEmail);

    var pTel = document.createElement('p');
    pTel.className = "collegeUser";
    var textPTel = document.createTextNode("Téléphone de contact");
    pTel.appendChild(textPTel);
    tableIntitule.appendChild(pTel);

    var pAction = document.createElement('p');
    pAction.className = "actionUser";
    var textPAction = document.createTextNode("Action");
    pAction.appendChild(textPAction);
    tableIntitule.appendChild(pAction);

    var perso1 = newFicheAdministrateur('1', 'Lacherez', 'Benoit', 'benoit-lacherez@conseil-general.fr', '0559340202', 'benoit-lacherez@conseil-general.fr');
    divContener.appendChild(perso1);

    var perso2 = newFicheAdministrateur('2', 'Dufour', 'Paul', 'paul-dufour@education-national.fr', '0559340508', 'paul-dufour@education-national.fr');
    divContener.appendChild(perso2);
}

function newFicheAdministrateur(id, nom, prenom, email, tel, identifiant) {

    function stopEvent(evt) {
        evt.stopPropagation();
    }

    var divContenerUser = document.createElement('div');
    divContenerUser.id = "divContenerUser" + id;
    divContenerUser.addEventListener("click", boutonAdministrateur)
    divContenerUser.className = "divFermer";

    var divContenu = document.createElement('div');
    divContenu.className = "resultatTableau avec-border";
    divContenu.id = "divContenu" + id;
    divContenerUser.appendChild(divContenu);

    var pNom = document.createElement('p');
    var textNom = document.createTextNode(nom);
    pNom.appendChild(textNom);
    pNom.className = "nomUser";
    divContenu.appendChild(pNom);

    var pPrenom = document.createElement('p');
    var textPrenom = document.createTextNode(prenom);
    pPrenom.appendChild(textPrenom);
    pPrenom.className = "prenomUser";
    divContenu.appendChild(pPrenom);

    var pEmail = document.createElement('p');
    var textEmail = document.createTextNode(email);
    pEmail.appendChild(textEmail);
    pEmail.className = "emailUser";
    divContenu.appendChild(pEmail);

    var pTel = document.createElement('p');
    var textTel = document.createTextNode(tel);
    pTel.appendChild(textTel);
    pTel.className = "collegeUser";
    divContenu.appendChild(pTel);

    var pLien = document.createElement('p');
    pLien.className = "actionUser";
    divContenu.appendChild(pLien);
    var aFleche = document.createElement('a');
    aFleche.id = "lienFleche" + id;
    aFleche.className = "lienBlock";
    pLien.appendChild(aFleche);
    var imgFleche = document.createElement('img');
    imgFleche.className = "angle-down";
    imgFleche.id = "fleche" + id;
    imgFleche.src = "../img/angle-down.svg";
    aFleche.appendChild(imgFleche);

    return divContenerUser;

    function boutonAdministrateur() {

        var divContenuDynamique = document.getElementById('divContenerUser' + id);
        var borderDiv = document.getElementById('divContenu' + id);
        var flecheBas = document.getElementById('fleche' + id);

        var nombreAngleUp = document.getElementsByClassName("angle-up").length;

        if (nombreAngleUp == 0) {

            borderDiv.className = "resultatTableau sans-border";
            flecheBas.className = "angle-up";
            flecheBas.src = "../img/angle-up.svg";
            divContenuDynamique.className = "divOuverte";

            var divDerouler = document.createElement("div");
            divDerouler.addEventListener("click", stopEvent);
            divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
            divDerouler.id = "deroulerBoutonAction" + id;
            divContenuDynamique.appendChild(divDerouler);

            var divBtnModifSupp = document.createElement("div");
            divBtnModifSupp.className = "boutonModifSupp";
            divBtnModifSupp.id = 'boutonModifSupp' + id;
            divDerouler.appendChild(divBtnModifSupp);

            var boutonModifier = document.createElement("a");
            boutonModifier.className = "btn-updatedelete";
            divBtnModifSupp.appendChild(boutonModifier);
            boutonModifier.href = "#";
            boutonModifier.addEventListener("click", updateAdministrateur);
            var TexteBoutonModifier = document.createTextNode("Modifier");
            boutonModifier.appendChild(TexteBoutonModifier);
            divBtnModifSupp.appendChild(boutonModifier);

            var boutonSupprimer = document.createElement("a");
            boutonSupprimer.className = "btn-updatedelete";
            divBtnModifSupp.appendChild(boutonSupprimer);
            boutonSupprimer.href = "#";
            boutonSupprimer.addEventListener("click", deleteAdministrateur);
            var TexteBoutonSupprimer = document.createTextNode("Supprimer");
            boutonSupprimer.appendChild(TexteBoutonSupprimer);
            divBtnModifSupp.appendChild(boutonSupprimer);

            return divContenuDynamique;

        } else {

            var divOuverte = document.querySelector(".divOuverte");
            var flecheBasDivOuverte = document.querySelector(".angle-up");
            var borderDivOuverte = document.querySelector(".sans-border");

            if (document.getElementById('deroulerBoutonAction' + id)) {
                divContenuDynamique.removeChild(document.getElementById('deroulerBoutonAction' + id));
                flecheBas.className = "angle-down";
                flecheBas.src = "../img/angle-down.svg";
                borderDiv.className = "resultatTableau avec-border";
                divOuverte.className = "divFermer";
                return divContenuDynamique;

            } else if (document.getElementById('divUpdateUser' + id)) {
                divContenuDynamique.removeChild(document.querySelector('.divFormUpdate'));
                flecheBas.className = "angle-down";
                flecheBas.src = "../img/angle-down.svg";
                borderDiv.className = "resultatTableau avec-border";
                divOuverte.className = "divFermer";
                return divContenuDynamique;
            }

            if (document.querySelector(".divOuverte")) {

                if (document.querySelector('.divFormUpdate')) {
                    divOuverte.removeChild(document.querySelector('.divFormUpdate'));
                    flecheBasDivOuverte.className = "angle-down";
                    flecheBasDivOuverte.src = "../img/angle-down.svg";
                    borderDivOuverte.className = "resultatTableau avec-border";
                    divContenuDynamique.className = "divOuverte";
                    divOuverte.className = "divFermer";

                    borderDiv.className = "resultatTableau sans-border";
                    flecheBas.className = "angle-up";
                    flecheBas.src = "../img/angle-up.svg";

                    var divDerouler = document.createElement("div");
                    divDerouler.addEventListener("click", stopEvent);
                    divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
                    divDerouler.id = "deroulerBoutonAction" + id;
                    divContenuDynamique.appendChild(divDerouler);

                    var divBtnModifSupp = document.createElement("div");
                    divBtnModifSupp.className = "boutonModifSupp";
                    divBtnModifSupp.id = 'boutonModifSupp' + id;
                    divDerouler.appendChild(divBtnModifSupp);

                    var boutonModifier = document.createElement("a");
                    boutonModifier.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonModifier);
                    boutonModifier.href = "#";
                    boutonModifier.addEventListener("click", updateAdministrateur);
                    var TexteBoutonModifier = document.createTextNode("Modifier");
                    boutonModifier.appendChild(TexteBoutonModifier);
                    divBtnModifSupp.appendChild(boutonModifier);

                    var boutonSupprimer = document.createElement("a");
                    boutonSupprimer.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonSupprimer);
                    boutonSupprimer.href = "#";
                    boutonSupprimer.addEventListener("click", deleteAdministrateur);
                    var TexteBoutonSupprimer = document.createTextNode("Supprimer");
                    boutonSupprimer.appendChild(TexteBoutonSupprimer);
                    divBtnModifSupp.appendChild(boutonSupprimer);

                    return divContenuDynamique;

                } else {

                    flecheBasDivOuverte.className = "angle-down";
                    flecheBasDivOuverte.src = "../img/angle-down.svg";
                    borderDivOuverte.className = "resultatTableau avec-border";
                    divOuverte.removeChild(document.querySelector(".divAngle-up"));
                    divContenuDynamique.className = "divOuverte";
                    divOuverte.className = "divFermer";

                    borderDiv.className = "resultatTableau sans-border";
                    flecheBas.className = "angle-up";
                    flecheBas.src = "../img/angle-up.svg";

                    var divDerouler = document.createElement("div");
                    divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
                    divDerouler.addEventListener("click", stopEvent);
                    divDerouler.id = "deroulerBoutonAction" + id;
                    divContenuDynamique.appendChild(divDerouler);

                    var divBtnModifSupp = document.createElement("div");
                    divBtnModifSupp.className = "boutonModifSupp";
                    divBtnModifSupp.id = 'boutonModifSupp' + id;
                    divDerouler.appendChild(divBtnModifSupp);

                    var boutonModifier = document.createElement("a");
                    boutonModifier.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonModifier);
                    boutonModifier.href = "#";
                    boutonModifier.addEventListener("click", updateAdministrateur);
                    var TexteBoutonModifier = document.createTextNode("Modifier");
                    boutonModifier.appendChild(TexteBoutonModifier);
                    divBtnModifSupp.appendChild(boutonModifier);

                    var boutonSupprimer = document.createElement("a");
                    boutonSupprimer.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonSupprimer);
                    boutonSupprimer.href = "#";
                    boutonSupprimer.addEventListener("click", deleteAdministrateur);
                    var TexteBoutonSupprimer = document.createTextNode("Supprimer");
                    boutonSupprimer.appendChild(TexteBoutonSupprimer);
                    divBtnModifSupp.appendChild(boutonSupprimer);

                    return divContenuDynamique;

                }
            }
        }
    }
    function deleteAdministrateur() {

        var articleouvert = document.getElementById("base");

        var divBackgroundPop = document.createElement("div");
        divBackgroundPop.addEventListener("click", fermerContenu);
        divBackgroundPop.className = "backgroundPop-up";
        articleouvert.appendChild(divBackgroundPop);

        var divPop = document.createElement("div");
        divPop.addEventListener("click", stopEvent);
        divPop.className = "pop-up";
        divBackgroundPop.appendChild(divPop);

        var textPop = document.createTextNode("Êtes-vous sûr de vouloir supprimer " + nom + (" ") + prenom + " de la liste des documentalistes?");
        divPop.appendChild(textPop);

        var divBoutonPop = document.createElement("div");
        divBoutonPop.addEventListener("click", stopEvent);
        divBoutonPop.className = "boutonPop-up";
        divPop.appendChild(divBoutonPop);

        var btnConfirmer = document.createElement("a");
        var textBtnConfirmer = document.createTextNode("Confirmer");
        btnConfirmer.addEventListener("click", evtBoutonConfirmer);
        btnConfirmer.href = "#";
        btnConfirmer.appendChild(textBtnConfirmer);
        btnConfirmer.className = "boutonConfirmerAnnuler backBlue";
        divBoutonPop.appendChild(btnConfirmer);

        var btnAnnuler = document.createElement("a");
        var textBtnAnnuler = document.createTextNode("Annuler");
        btnAnnuler.addEventListener("click", evtBoutonAnnuler);
        btnAnnuler.href = "#";
        btnAnnuler.appendChild(textBtnAnnuler);
        btnAnnuler.className = "boutonConfirmerAnnuler";
        divBoutonPop.appendChild(btnAnnuler);

        function evtBoutonConfirmer() {
            var divResultat = document.getElementById("contenerResultat");

            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
            divResultat.removeChild(document.querySelector(".divOuverte"));
            /* ajouter fonction pour supprimer de la base de données */
        }

        function evtBoutonAnnuler() {
            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
        }

        function fermerContenu() {
            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
        }

        function stopEvent(evt) {
            evt.stopPropagation();
        }

    }

    function updateAdministrateur() {
        var divContenuDynamique = document.getElementById('divContenerUser' + id)
        var borderDiv = document.getElementById('divContenu' + id);

        divContenuDynamique.removeChild(document.getElementById('deroulerBoutonAction' + id));
        borderDiv.className = "resultatTableau sans-border";

        var divPrincipaleForm = document.createElement("div");
        divPrincipaleForm.id = "divUpdateUser" + id;
        divPrincipaleForm.className = "divFormUpdate avec-border";
        divContenuDynamique.appendChild(divPrincipaleForm);

        var formUpdate = document.createElement("form");
        formUpdate.addEventListener("click", stopEvent);
        formUpdate.className = "formUpdate";
        divPrincipaleForm.appendChild(formUpdate);

        var titre1Form = document.createElement("h3");
        var textTitre1Form = document.createTextNode("Information générale :");
        titre1Form.appendChild(textTitre1Form);
        formUpdate.appendChild(titre1Form);

        var divContenu1 = document.createElement("div");
        divContenu1.className = "divFormContenu2";
        formUpdate.appendChild(divContenu1);

        var inputNom = document.createElement("input");
        inputNom.className = "policeForm taille1Form inputMaring";
        inputNom.type = "text";
        inputNom.name = "nomUser";
        inputNom.placeholder = "Nom utilistateur";
        inputNom.value = nom;
        divContenu1.appendChild(inputNom);

        var inputPrenom = document.createElement("input");
        inputPrenom.className = "policeForm taille1Form";
        inputPrenom.type = "text";
        inputPrenom.name = "prenomUser";
        inputPrenom.placeholder = "Prenom utilistateur";
        inputPrenom.value = prenom;
        divContenu1.appendChild(inputPrenom);

        var divContenu2 = document.createElement("div");
        divContenu2.className = "divFormContenu2";
        formUpdate.appendChild(divContenu2);

        var inputTel = document.createElement("input");
        inputTel.className = "policeForm taille1Form inputMaring";
        inputTel.type = "tel";
        inputTel.name = "telUser";
        inputTel.placeholder = "Telephone de contact";
        inputTel.value = tel;
        divContenu2.appendChild(inputTel);

        var inputEmail = document.createElement("input");
        inputEmail.className = "policeForm taille2Form";
        inputEmail.type = "email";
        inputEmail.name = "emailUser";
        inputEmail.placeholder = "Email de contact";
        inputEmail.value = email;
        divContenu2.appendChild(inputEmail);

        var titre2Form = document.createElement("h3");
        var textTitre2Form = document.createTextNode("Information de connexion :");
        titre2Form.appendChild(textTitre2Form);
        formUpdate.appendChild(titre2Form);

        var divContenu3 = document.createElement("div");
        divContenu3.className = "divFormContenu";
        formUpdate.appendChild(divContenu3);

        var inputIdentifiant = document.createElement("input");
        inputIdentifiant.className = "policeForm taille2Form";
        inputIdentifiant.type = "text";
        inputIdentifiant.name = "identifiant";
        inputIdentifiant.placeholder = "Identifiant";
        inputIdentifiant.value = identifiant;
        divContenu3.appendChild(inputIdentifiant);

        var inputMdp = document.createElement("input");
        inputMdp.className = "policeForm taille1Form";
        inputMdp.type = "password";
        inputMdp.name = "motDePasse";
        inputMdp.placeholder = "Mot de passe";
        divContenu3.appendChild(inputMdp);

        var inputMdp2 = document.createElement("input");
        inputMdp2.className = "policeForm taille1Form";
        inputMdp2.type = "password";
        inputMdp2.name = "verifMotDePasse";
        inputMdp2.placeholder = "Confirmation mot de passe";
        divContenu3.appendChild(inputMdp2);

        var divContenu4 = document.createElement("div");
        divContenu4.className = "divFormBtn";
        formUpdate.appendChild(divContenu4);

        var boutonEnregistrer = document.createElement("button");
        boutonEnregistrer.className = "btn-modifier";
        boutonEnregistrer.type = "submit";
        boutonEnregistrer.name = "modifier";
        boutonEnregistrer.value = "modifier";
        var textBouton = document.createTextNode("Enregistrer");
        boutonEnregistrer.appendChild(textBouton);
        divContenu4.appendChild(boutonEnregistrer);
    }
}

