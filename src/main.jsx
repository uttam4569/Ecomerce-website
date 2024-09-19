import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProductContextWrapper } from './Context/ProductContext.jsx';
import { CartContextWrapper } from './Context/CartContext.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CartContextWrapper>
      <ProductContextWrapper>
        <App />
      </ProductContextWrapper>
    </CartContextWrapper>
  </StrictMode>
);
