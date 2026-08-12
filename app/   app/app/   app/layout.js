export const metadata = {
  title: 'Sistema Genesis',
  description: 'Portal Privado - 95 Socias'
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{margin:0, background:'#0A0A0A', color:'#fff', fontFamily:'Inter, sans-serif'}}>
        {children}
      </body>
    </html>
  );
}
