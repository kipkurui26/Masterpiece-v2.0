import { useState } from "react";
import FAQItem from "../../shared/FAQItem";
import surveyData from "../data";

const { faq } = surveyData;

const SurveyFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl text-brand-navy">
          Frequently Asked Questions
        </h2>
        <div>
          {faq.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurveyFAQ;