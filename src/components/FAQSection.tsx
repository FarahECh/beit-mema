"use client";
import { useState } from "react";
import FAQItem from "./FAQItem";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    title: "What are the check-in and check-out times?",
    description:
      "Check-in is at 3 PM, and check-out is at 12 PM. We kindly ask guests to vacate the premises by 12 PM to ensure a smooth transition for the next guests.",
  },
  {
    title: "Is parking available?",
    description:
      "Yes, we offer free private parking on-site for all our guests. The parking area is secure and easily accessible from your accommodation.",
  },
  {
    title: "What amenities are included?",
    description:
      "Our guesthouse comes fully equipped with WiFi, air conditioning, heating, fully-equipped kitchen, linens, towels, toiletries, and outdoor seating area. We also provide complimentary coffee and tea.",
  },
  {
    title: "Are pets allowed?",
    description: "No pets are allowed inside the guesthouses.",
  },
  {
    title: "What is your cancellation policy?",
    description:
      "Bookings made are non-refundable. However, there is flexibility in changing dates depending on availability. Confirmation of a booking is done by settling the full amount via OMT transfer or WHISH money within three (3) days of your booking.",
  },
  {
    title: "Do you provide food?",
    description:
      "Food is available at extra cost (optional). All meals are home-cooked and freshly made.",
  },
  {
    title: "Do you offer airport transfers?",
    description:
      "Yes, we can arrange airport transfers for an additional fee. Please contact us in advance to arrange this service and discuss pricing.",
  },
  {
    title: "What activities are available nearby?",
    description:
      "Our location offers easy access to hiking trails, historical sites, wineries, and local restaurants. We're happy to provide recommendations and help arrange activities during your stay.",
  },
  {
    title: "Is the accommodation suitable for children?",
    description:
      "Yes, Beit Mema is kids-friendly where members of the family can enjoy playing outside in the spacious outdoor area.",
  },
  {
    title: "Can I bring external guests to the guesthouse during my stay?",
    description:
      "Unfortunately, only guests who reserved the guesthouse are allowed on premises. Additional guests may be charged. We appreciate your understanding and cooperation.",
  },
  {
    title: "Is there a cleaning service available on-site?",
    description:
      "Yes, cleaning service is available at extra cost ($5/hour). Please let us know if you’d like us to arrange this service during your stay. ",
  },

  {
    title: "Can I modify my reservation?",
    description:
      "We try our best to meet any modification requests; however, our services are limited by certain considerations. Late minute modifications, especially during peak seasons, are not possible. If you wish to modify your reservation, please contact us.",
  },
  {
    title: "Do you provide towels for guests?",
    description:
      "Yes, we provide standard towels for guests. However, we do not provide pool towels, so kindly bring your own pool towel if you plan to use the pool.",
  },
  {
    title: "What are the rules & regulations?",
    description:
      "Our property features three separate lodgings with shared common areas and pool. Quiet hours begin at 11 PM. For complete privacy, you can rent the entire property - contact us for rates and availability.",
  },
];

export default function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <div className="w-full flex flex-col items-center pb-12 md:pb-24 px-4 md:px-0">
      <h1 className="font-made-mirage-medium text-4xl md:text-7xl mb-8 md:mb-16 text-center">
        FAQs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 place-items-stretch w-full">
        {displayedFaqs.map((faq, index) => (
          <AnimatePresence key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <FAQItem
                index={index + 1}
                title={faq.title}
                description={faq.description}
              />
            </motion.div>
          </AnimatePresence>
        ))}
      </div>

      {faqs.length > 3 && (
        <div className="flex items-center justify-center md:justify-end w-full">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 mt-6 md:mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="font-metropolis-medium text-main">
              {showAll ? "Show Less" : "Explore All"}
            </p>
            <span className="bg-main/50 rounded-full p-2">
              {showAll ? (
                <ChevronUp className="text-main h-4 w-4" />
              ) : (
                <ChevronDown className="text-main h-4 w-4" />
              )}
            </span>
          </motion.button>
        </div>
      )}
    </div>
  );
}
