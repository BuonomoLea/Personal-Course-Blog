
// Helper pour obtenir le bon chemin vers le dossier global
function getGlobalPath(file) {
  // Calcule la profondeur du fichier courant
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);
  // Ignore le nom du repo (premier segment)
  const repoOffset = 1;
  // Si le dernier segment contient un point, c'est un fichier
  const isFile = segments[segments.length - 1].includes('.');
  // Calcule la profondeur réelle à partir du dossier racine du repo
  const depth = isFile ? segments.length - 1 - repoOffset : segments.length - repoOffset;
  return `${'../'.repeat(depth)}global/${file}`;
}

// Définition du composant personnalisé <site-header>
class SiteHeader extends HTMLElement {
  async connectedCallback() {
    try {
      const res  = await fetch(getGlobalPath('header.html'), { cache: 'no-cache' });
      const text = await res.text();
      const fragment = document
        .createRange()
        .createContextualFragment(text.trim())
        .firstChild;
      this.replaceWith(fragment);
    } catch (err) {
      console.error('Chargement du header échoué :', err);
    }
  }
}
customElements.define('site-header', SiteHeader);

// Définition du composant personnalisé <site-footer>
class SiteFooter extends HTMLElement {
  async connectedCallback() {
    try {
      const res  = await fetch(getGlobalPath('footer.html'), { cache: 'no-cache' });
      const text = await res.text();
      const fragment = document
        .createRange()
        .createContextualFragment(text.trim())
        .firstChild;
      this.replaceWith(fragment);
    } catch (err) {
      console.error('Chargement du footer échoué :', err);
    }
  }
}
customElements.define('site-footer', SiteFooter);
