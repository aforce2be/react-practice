import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProductListPage from './pages/product/ProductListPage'
import ProductDetailPage from './pages/product/ProductDetailPage'
import { ProtectedRoute } from './utils/guards'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="products" element={<ProductListPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
