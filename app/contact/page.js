import DefaultWrapper from "../DefaultWrapper";
import ContactClient from "./components/contact-client";

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
