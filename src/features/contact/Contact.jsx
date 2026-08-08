import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ContactFAQ from "./components/ContactFAQ"
import ContactFinalCTA from "./components/ContactFinalCTA"
import ContactHero from "./components/ContactHero"
import ContactMethods from "./components/ContactMethods"
import ContactProcessSection from "./components/ContactProcessSection"
import EnquiryForm from "./components/EnquiryForm"
import ServiceAreas from "./components/ServicesArea"
import ServicesWeHelpWith from "./components/ServicesWeHelpWith"

const Contact = () => {
  const { hash } = useLocation()

  // Scroll to a section when the URL carries a hash (e.g. /contact#enquiry-form
  // from the home hero CTA). Runs after the sections have rendered.
  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    requestAnimationFrame(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }, [hash])

  return (
    <div>
      <ContactHero/>
      <ServicesWeHelpWith/>
      <ContactMethods/>
      <EnquiryForm/>
      <ContactProcessSection/>
      <ServiceAreas/>
      <ContactFAQ/>
      <ContactFinalCTA/>
    </div>
  )
}

export default Contact