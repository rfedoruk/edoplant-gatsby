import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const Header = ({data}) => {

  const categoryPages = useStaticQuery(graphql`
    query HeaderQuery {
      allWpCategory {
        edges {
          node {
            id
            link
            name
          }
        }
      }
    }
  `)

  console.log(categoryPages.allWpCategory);
  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >

     {categoryPages.allWpCategory.edges.map(ele => {
       console.log(ele);
       return <Link to={ele.node.link}>{ele.node.name}</Link>
     })} 
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Edoplant`,
}

// export const query = graphql`
// query HeaderQuery {
//   allWpCategory {
//     edges {
//       node {
//         id
//         link
//         name
//       }
//     }
//   }
// }
// `
export default Header
