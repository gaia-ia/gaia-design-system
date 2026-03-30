import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@gaia-dev/ui";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  title: "Components/general/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;

type Item = {
  question: string;
  answer: string | JSX.Element;
};

export const Default = () => {
  const qa: Item[] = [
    {
      question: "Product Information",
      answer: (
        <>
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </>
      ),
    },
    {
      question: "Shipping Details",
      answer: (
        <>
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </>
      ),
    },
    {
      question: "Return Policy",
      answer: (
        <>
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </>
      ),
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-0"
    >
      {qa.map(({ question, answer }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
