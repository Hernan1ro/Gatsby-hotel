import React from "react"
import useHabitaciones from "../hooks/useHabitaciones"
import { css } from "@emotion/react"
import Image from "gatsby-image"

const HabitacionesPrevew = ({ habitacion }) => {
  const { imagen, titulo, contenido, slug } = habitacion
  return (
    <div>
      <Image fluid={imagen.fluid} />
      <div>
        <h3>{titulo}</h3>
        <p>{contenido}</p>
      </div>
    </div>
  )
}

export default HabitacionesPrevew
