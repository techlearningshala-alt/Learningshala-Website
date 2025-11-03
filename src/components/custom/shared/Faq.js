import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = ({ faqData }) => {

  return (
    <Accordion type="single" collapsible>
      {faqData.map(({ value, question, answer }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger className="font-semibold">{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}

    </Accordion>
  );
};

export default Faq;
