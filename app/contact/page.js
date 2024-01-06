import ContactClient from "@/components/UI/Contact/contact-client";
import DefaultWrapper from "@/lib/utils/DefaultWrapper";

export const metadata = {
  title: "Get In Touch",
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
