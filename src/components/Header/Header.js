import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledHeader = styled.header``

const StyledSiteTitle = styled.h1``

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledSiteTitle>
      <Link to={`/app`}>{siteTitle}</Link>
    </StyledSiteTitle>
  </StyledHeader>
)

Header.propTypes = {
  /**
   * Specify the Header site title
   */
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
