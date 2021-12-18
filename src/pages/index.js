import React from "react"
import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"
import useHabitaciones from "../hooks/useHabitaciones"
import { css } from "@emotion/react"
import HabitacionesPrevew from "../components/habitacionesPrevew"

const IndexPage = () => {
  const habitaciones = useHabitaciones()

  console.log(habitaciones)
  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras habitaciones
      </h2>

      <ul>
        {habitaciones.map(habitacion => {
          return <HabitacionesPrevew />
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage
