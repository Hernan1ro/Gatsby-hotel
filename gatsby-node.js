exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacione {
        nodes {
          slug
        }
      }
    }
  `)
  // console.log(resultado.data.allDatoCmsHabitacione.nodes)
  // Si hay errores
  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.erros)
  }
  //Si hay páginas, crear archivo
}
