import React, { useEffect } from 'react'
import Layout from "@/components/layouts/Layout";
import api from '@/api';

export default function Home() {
  const fetchProduct = async () => {
    const response = await api.get('/products')
    console.log(response)
  }
  
  useEffect(() => {
    fetchProduct()
  }, []) // dependencis array
  
  return (
    <Layout>
      <p>Home Page</p>
    </Layout>
  )
}
