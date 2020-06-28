import React from "react"

// Modules

// Components
import MainTemplate from "templates/MainTemplate"
import SEO from "components/seo"
import TripsView from "views/TripsView"

const ContactPage = () => (
  <MainTemplate>
    <SEO title="Kontakt" />
    <TripsView />
  </MainTemplate>
)

export default ContactPage
