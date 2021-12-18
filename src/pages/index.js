import React from "react"
import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"
import useHabitaciones from "../hooks/useHabitaciones"

const IndexPage = () => {
  const data = useHabitaciones()

  console.log(data)
  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />
    </Layout>
  )
}

export default IndexPage
