import { Inter } from 'next/font/google'
import Footer from './components/Footer/footer'
import { Navbar } from './components/Navbar/navbar'
import CartStore from './context/CartStore'
import ProductStore from './context/ProductStore'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WOWNEX',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <CartStore>
            <ProductStore>
              <Navbar />
              {children}
              <Footer />
            </ProductStore>
          </CartStore>
        </div>
      </body>
    </html>
  );
}
