import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const ContenidoInicio = () => {
  const information = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  console.log(information)
  return (
    <>
      <h2>Titulo de pagina</h2>
    </>
  )
}

export default ContenidoInicio
