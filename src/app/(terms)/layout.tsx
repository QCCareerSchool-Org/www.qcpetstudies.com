import { LayoutComponent } from '../serverComponent';

const TextLayout: LayoutComponent = ({ children }) => (
  <main className="textLayout">
    {children}
  </main>
);

export default TextLayout;
