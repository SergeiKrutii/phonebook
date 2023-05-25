import ContactForm from "./ContactForm/ContactForm";
import ContacctsList from "./ContactsList/ContactsList";
import { StyledContactPage } from "./StyledContactsPage";

const ContactsPage = () => {
  return (
    <StyledContactPage>
      <ContactForm />
      <ContacctsList />
    </StyledContactPage>
  );
};

export default ContactsPage;
