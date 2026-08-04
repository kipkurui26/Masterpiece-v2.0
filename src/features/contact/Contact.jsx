import ContactFAQ from "./components/ContactFAQ"
import ContactFinalCTA from "./components/ContactFinalCTA"
import ContactHero from "./components/ContactHero"
import ContactMethods from "./components/ContactMethods"
import ContactProcessSection from "./components/ContactProcessSection"
import EnquiryForm from "./components/EnquiryForm"
import ServiceAreas from "./components/ServicesArea"
import ServicesWeHelpWith from "./components/ServicesWeHelpWith"

const Contact = () => {
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