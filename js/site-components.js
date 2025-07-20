// Définition du composant personnalisé <site-header>
class SiteHeader extends HTMLElement {
  // Méthode appelée automatiquement quand l'élément est ajouté au DOM
  async connectedCallback() {
    // On tente de récupérer le fichier header.html
    try {
      // fetch avec cache désactivé pour voir tout de suite les modifs en dev
      const res  = await fetch('/global/header.html', { cache: 'no-cache' });
      
      // Convertit la réponse en texte brut (chaîne HTML)
      const text = await res.text();
      
      // Création d'un fragment DOM à partir du HTML récupéré
      const fragment = document
        .createRange()                           // Crée un Range pour parser du HTML
        .createContextualFragment(text.trim())   // Transforme la chaîne en nœuds DOM
        .firstChild;                             // On ne garde que le premier élément (<header>)

      // Remplace <site-header> par le vrai <header> chargé depuis le fichier externe
      this.replaceWith(fragment);
    } catch (err) {
      // En cas d’erreur (fichier introuvable, réseau, etc.), on logue dans la console
      console.error('Chargement du header échoué :', err);
    }
  }
}
// Enregistrement du composant pour que <site-header> soit reconnu par le navigateur
customElements.define('site-header', SiteHeader);



  
// Même principe pour <site-footer>
class SiteFooter extends HTMLElement {
  async connectedCallback() {
    try {
      // On récupère le fichier footer.html
      const res  = await fetch('/global/footer.html', { cache: 'no-cache' });
      const text = await res.text();

      // Parsing du HTML et récupération du <footer>
      const fragment = document
        .createRange()
        .createContextualFragment(text.trim())
        .firstChild;

      // Remplace <site-footer> par le véritable <footer>
      this.replaceWith(fragment);
    } catch (err) {
      console.error('Chargement du footer échoué :', err);
    }
  }
}
// Enregistrement du composant <site-footer>
customElements.define('site-footer', SiteFooter);
