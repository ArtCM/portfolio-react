
import React from 'react';

import './../../public/styles/global.css';
import './../../public/styles/style.css';

export const metadata = {
  title: 'Cod Explorer Challenges',
  description: 'Pagina desmontração dos desafios da Code Explorer concluídos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
