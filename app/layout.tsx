import '@/assets/styles/globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from '@/context/GlobalContext'
import 'photoswipe/dist/photoswipe.css'

// For SEO and this will be used in by default every page if you dont specify this in every page
export const metadata = {
  title: 'Estate Pro | Find The Perfect Rental',
  description: 'Find the perfect rental property for you. Estate Pro is a platform that connects renters with landlords.',
  keywords: 'rental, property, estate, landlord, rent, lease, find properties, find rentals, estate pro',
}

type MainLayoutProps = { 
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <GlobalProvider>
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
    </GlobalProvider>
  )
}

export default MainLayout