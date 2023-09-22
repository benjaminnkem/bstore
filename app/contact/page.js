import DefaultWrapper from "../../lib/utils/DefaultWrapper";
import ContactClient from "../../components/UI/Contact/contact-client";

export const metadata = {
  title: "Get In Touch - Bstore",
};

const ContactPage = () => {
  return (
    <>
      <DefaultWrapper>
        <main>
          <ContactClient />
        </main>
      </DefaultWrapper>
    </>
  );
};

export default ContactPage;
