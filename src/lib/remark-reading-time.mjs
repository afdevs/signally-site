/**
 * Compte les mots d'un article au moment du build et expose le total
 * via `remarkPluginFrontmatter.words`, que le gabarit convertit en
 * temps de lecture. Évite d'embarquer une dépendance pour trois lignes.
 */
export function remarkReadingTime() {
  return (tree, file) => {
    let text = '';

    const walk = (node) => {
      // Seuls les nœuds porteurs de prose comptent : on ignore le code,
      // qui fausserait l'estimation.
      if (node.type === 'text' || node.type === 'inlineCode') {
        text += ' ' + node.value;
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    };
    walk(tree);

    const words = text.split(/\s+/).filter(Boolean).length;
    file.data.astro.frontmatter.words = words;
  };
}
