import Header from "@/components/header"
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion"

export default function FAQs() {
  return (
    <section className="pt-24 px-4 md:px-16 lg:px-44">
      <div>
        <Header heading="Frequently Asked Questions" />
      </div>
      <div className="mt-8 flex justify-center">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="question-1">
            <AccordionTrigger>What is MK Farms and how does it work?</AccordionTrigger>
            <AccordionContent>MK Farms is an AI-driven application designed to enhance plant well-being. It uses advanced machine learning algorithms to analyze images of plant leaves, detect diseases, and provide remedies for healthier plants. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-2">
            <AccordionTrigger>What kind of plants does MK Farms cater to?</AccordionTrigger>
            <AccordionContent>MK Farms is designed to assist a wide range of plants, from ornamentals to crops. Its AI can detect diseases in various types of leaves, helping both home gardeners and farmers. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-3">
            <AccordionTrigger>Is MK Farms&apos;s AI capable of recognizing multiple diseases?</AccordionTrigger>
            <AccordionContent>Absolutely. Our AI model is trained on a diverse dataset, enabling it to recognize and diagnose a variety of plant diseases, ensuring comprehensive support for your plants&apos; well-being. </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
