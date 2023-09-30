import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import '@/styles/global.scss';

export const metadata = {
  title: 'Tunahan Tezcan - Software Engineer',
  description: 'Tunahan Tezcan - Software Engineer personal website',
  url: 'https://tunahantezcan.com',
  image: '/images/og.png',
  twitter: '@tunahantezcan',
  keywords: [
    'Tunahan Tezcan',
    'Tunahan',
    'Tezcan',
    'Software Engineer',
    'Software',
    'Engineer',
    'Full Stack',
    'Full Stack Engineer',
    'Full Stack Developer',
    'Full Stack Software Engineer',
    'Full Stack Software Developer',
    'Full Stack Web Developer',
    'Full Stack Web Engineer',
    'Full Stack Web Software Engineer',
    'Full Stack Web Software Developer',
    'Full Stack Web',
    'Full Stack Web Engineer',
    'Full Stack Web Developer',
    'Full Stack Web Software Engineer',
    'Full Stack Web Software Developer',
    'Full Stack Web',
    'Full Stack Web Engineer',
    'Full Stack Web Developer',
    'Full Stack Web Software Engineer',
    'Full Stack Web Software Developer',
    'Full Stack Web',
    'Full Stack Web Engineer',
    'Full Stack Web Developer',
    'Full Stack Web Software Engineer',
    'Full Stack Web Software Developer',
    'Full Stack Web',
    'Full Stack Web Engineer',
    'Full Stack Web Developer',
    'Full Stack Web Software Engineer',
    'Full Stack Web Software Developer',
    'Full Stack Web',
    'Full Stack Web Engineer',
    'Full Stack Web Developer',
    'Full Stack Web Software Engineer',
    'Full Stack Web Software Developer',
    'Full Stack Web',
    'Full Stack Web Engineer',
    'Full Stack Web Developer',
    'Full Stack Web Software Engineer',
    'Full Stack Web Software Developer',
    'Full Stack Web',
    'Full Stack Web Engineer',
    'Full Stack Web Developer',
    'Full Stack Web Software Engineer',
    'Full Stack Web Software Developer',
    'Full Stack Web',
    'Full Stack Web Engineer',
    'Full Stack Web Developer',
    'Full Stack Web Software Engineer',
    'Full Stack Web Software Developer',
  ],
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body suppressHydrationWarning={true}>
      <Nav />
      <main className='app'>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
