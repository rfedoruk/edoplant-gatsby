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
      <Link to="/">Home</Link>

     {categoryPages.allWpCategory.edges.map(ele => {
      if(ele.node.name !== "Uncategorized"){
        return <Link to={ele.node.link}>{ele.node.name}</Link>
      }
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

export default Header;
