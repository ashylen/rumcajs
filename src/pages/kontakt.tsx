import React from "react"

// Modules

// Components
import MainTemplate from "templates/MainTemplate"
import SEO from "components/seo"
import ContactView from "views/ContactView"

const ContactPage = () => (
  <MainTemplate>
    <SEO title="Kontakt" />
    <ContactView />
  </MainTemplate>
)

export default ContactPage
