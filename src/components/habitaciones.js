import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsHabitacione(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const HabitacionTemplate = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Habitaciones</h1>
    </div>
  )
}

export default HabitacionTemplate
