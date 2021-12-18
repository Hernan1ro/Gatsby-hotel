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
  return response.allDatoCmsHabitacione.nodes.map(habitacion => ({
    titulo: habitacion.titulo,
    id: habitacion.id,
    contenido: habitacion.contenido,
    imagen: habitacion.imagen,
    slug: habitacion.slug,
  }))
}

export default useHabitaciones
