import { Accordion } from "flowbite-react";

const FAQs = () => {
  return (
    <div className='px-2 md:px-4 lg:px-0'>
      <p className='font-normal mb-5 text-base text-color1 py-3 px-6 border w-fit border-color2 rounded-full'>
        FAQs
      </p>
      <h2 className='text-3xl font-medium text-color1 mt-4 mb-7'>
        Frequntly Asked Question
      </h2>
      <div>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title className='bg-color5 text-color1 font-medium text-xl'>
              What are your office hours?
            </Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-[#343268] font-normal text-sm'>
                Our office hours vary by location, but typically we are open
                Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                may offer extended hours or weekend appointments. Please contact
                your nearest clinic for specific hours.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-color5 text-color1 font-medium text-xl'>
              How can I schedule an appointment?
            </Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-[#343268] font-normal text-sm'>
                To schedule an appointment, contact the relevant person or
                organization via phone, email, or their online scheduling
                system, and choose a convenient date and time.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-color5 text-color1 font-medium text-xl'>
              Do you accept insurance?
            </Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-[#343268] font-normal text-sm'>
                Yes, we accept insurance.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-color5 text-color1 font-medium text-xl'>
              What should I bring to my appointment?
            </Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-[#343268] font-normal text-sm'>
                Bring your ID, insurance card, and any relevant medical records
                or documents.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-color5 text-color1 font-medium text-xl'>
              Do you offer telemedicine appointments?
            </Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-[#343268] font-normal text-sm'>
                Yes, we offer telemedicine appointments.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
