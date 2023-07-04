import './global.css';
import { Header, Container, Box } from '@playmr/design-system';
import { css } from '@playmr/styled-system/css';
import { flex } from '@playmr/styled-system/patterns';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Header>
          <Container>
            <div className={flex({ direction: 'row', align: 'center' })}>
              <Box className={css({ marginRight: '15px' })}>Play MonoRepo</Box>
            </div>
          </Container>
        </Header>
        {children}
      </body>
    </html>
  );
};