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
  const { imagen, titulo, contenido } = information.allDatoCmsPagina.nodes[0]
  return (
    <>
      <h2>{titulo}</h2>
      <div>
        <p>{contenido}</p>
        <img src={imagen.fluid.src} alt="Hotel" />
      </div>
    </>
  )
}

export default ContenidoInicio
