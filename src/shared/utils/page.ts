export function getPagePath(): string {
  if (typeof window === 'undefined') {
    return '/';
  }

  const path = window.location.pathname;
  if (path === '/' || path.endsWith('/index.html')) {
    return '/';
  }

  return path;
}

export function isHomePage(): boolean {
  return getPagePath() === '/';
}

export function isAiPage(): boolean {
  const path = getPagePath();
  return path.endsWith('/ai.html') || path.includes('/ai');
}

export function isSolutionPage(): boolean {
  const path = getPagePath();
  return path.endsWith('/smart-business.html') || path.includes('/smart-business');
}
