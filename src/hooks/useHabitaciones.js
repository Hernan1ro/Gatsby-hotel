import { useStaticQuery, graphql } from "gatsby"

const useHabitaciones = () => {
  const response = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacione {
        nodes {
          titulo
          contenido
          slug
          id
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return response.allDatoCmsHabitacione.nodes
}

export default useHabitaciones
