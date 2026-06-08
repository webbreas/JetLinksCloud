import { StrictMode, type ComponentType } from 'react';
import { createRoot } from 'react-dom/client';
import '@/shared/styles/index.css';

export function mountPage(Page: ComponentType) {
  const root = document.getElementById('root');
  if (!root) {
    throw new Error('Root element #root not found');
  }

  createRoot(root).render(
    <StrictMode>
      <Page />
    </StrictMode>,
  );
}
