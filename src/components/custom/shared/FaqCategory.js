"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Minus, Plus } from "lucide-react";
import { cleanHTML } from "@/lib/cleanHTML";

const FaqCategory = ({ faqData = [], loading, screenSize }) => {
  const categories = faqData;

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full">
      {screenSize && screenSize.width > 991 && (
        <div className="w-full flex-row items-start gap-4">
          <Tabs
            defaultValue={categories[0]?.cat_id || ""}
            orientation="vertical"
            className="w-full flex flex-row items-start gap-4"
          >
            {/* Left side: Tab buttons */}
            <TabsList className="shrink-0 grid grid-cols-1 h-auto w-fit min-w-[150px] gap-1 bg-white">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat?.cat_id}
                  value={cat?.cat_id}
                  className="flex font-bold px-3 py-2 justify-start border border-gray-200 data-[state=active]:text-primary data-[state=active]:shadow-sm"
                >
                  {cat.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Right side: Tab content with FAQs */}
            <div className="flex-1">
              {categories.map((cat) => (
                <TabsContent key={cat.cat_id} value={cat.cat_id}>
                  <Accordion type="single" collapsible className="w-full">
                    {cat.items.map(({ id, question, answer }) => (
                      <AccordionItem key={id} value={id}>
                        <AccordionTrigger className="font-bold data-[state=open]:text-primary">
                          {question}
                        </AccordionTrigger>
                        <AccordionContent><div dangerouslySetInnerHTML={{ __html: cleanHTML(answer) }} /></AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      )}

      {screenSize && screenSize.width <= 991 && (
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            {categories.map((cat) => (
              <AccordionItem key={cat.id} value={cat.id}>
                {/* Outer Category Accordion */}
                <AccordionTrigger className="text-lg font-semibold data-[state=open]:text-primary">
                  {cat.category}
                </AccordionTrigger>

                <AccordionContent>
                  {/* Inner FAQ Accordion */}
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full border rounded-lg p-3 border-gray-200"
                  >
                    {cat.items.map(({ id, question, answer }) => (
                      <AccordionItem key={id} value={id}>
                        <AccordionTrigger className="group flex items-center justify-between py-3 text-sm font-medium text-left text-gray-800 data-[state=open]:text-primary transition-all [&>svg]:hidden">
                          <span>{question}</span>
                          {/* Custom Plus / Minus icons */}
                          <span className="ml-2 flex items-center">
                            <Plus className="h-4 w-4 transition-transform group-data-[state=open]:hidden" />
                            <Minus className="h-4 w-4 hidden transition-transform group-data-[state=open]:block" />
                          </span>
                        </AccordionTrigger>

                        <AccordionContent className="text-sm">
                          {answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default FaqCategory;
