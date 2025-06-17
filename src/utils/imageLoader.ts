// Function to get the correct image path with basePath for GitHub Pages
export function getImagePath(src: string): string {
  // Check if we're in production (GitHub Pages deployment)
  const isProduction = process.env.NODE_ENV === 'production';

  // Get the repository name from the environment or use a default
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'action-driving';

  // If in production and the path starts with a slash, prepend the basePath
  if (isProduction && src.startsWith('/')) {
    return `/${repoName}${src}`;
  }

  // Otherwise, return the original path
  return src;
}
