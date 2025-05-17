import React, { useState } from "react";
import FAQItem from "../conpounent/faqitem";
import SubFAQ from "../conpounent/subfaq";
import "../style/faq.css";
import { a } from "framer-motion/client";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  // Parent items
  const items = [
    "Top Questions",
    "Product Care",
    "Orders & Warranty",
    "Sustainability",
    "Brand Philosophy",
  ];

  // Child items mapping with content
  const subItemsMapping = {
    "Top Questions": [
      {
        title:
          "Is the SIPLUSH™ Paradise Shaker Bottle made from safe, high-quality materials and compliant with health standards?",
        content:
          "The SIPLUSH™ Paradise Shaker Bottle is designed with your safety in mind! It meets Prop 65 and FDA requirements, and we use grade 304 food-grade stainless steel to ensure top quality and peace of mind.",
      },
      {
        title: "Have SIPLUSH™ Paradise Shaker Bottle been tested? ",
        content:
          "Yes! At SIPLUSH™, we ensure our products meet all US regulatory requirements, including California Proposition 65 and FDA 21. Our bottles are rigorously tested and validated by trusted labs to meet strict safety guidelines. ",
      },
      {
        title:
          "Can I use my SIPLUSH™ Paradise Shaker Bottle for beverages other than water?",
        content:
          "Absolutely! It's perfect for water, juice, smoothies, and protein shakes. For the best experience, we recommend avoiding hot or carbonated liquids.",
      },
      {
        title: "Are SIPLUSH™ Paradise Shaker Bottle dishwasher safe?",
        content:
          "Your SIPLUSH™ bottle is meticulously crafted with a focus on its sleek design and stylish finish. To maintain its pristine look, we recommend giving it tender loving care by hand washing it to ensure it stays as stunning as the day you got it.",
      },
      {
        title: "Are SIPLUSH™ Paradise Shaker Bottle microwave safe?",
        content:
          "We don’t recommend it—our bottles aren’t microwave-safe. But don’t worry, they’re perfect for keeping your beverages fresh and ready to go!",
      },
      {
        title: "Have SIPLUSH™ Paradise Shaker Bottle been tested?",
        content:
          "Yes! At SIPLUSH™, we ensure our products meet all US regulatory requirements, including California Proposition 65. Our bottles are rigorously tested and validated by trusted labs to meet strict safety guidelines, including being free from BPA, BPS, PFOS, phthalates, and more.",
      },
      {
        title: "Where can I find the size/dimensions of each bottle?",
        content:
          "You can find all the size and dimension details in the product information leaflet included with your purchase!",
      },
      {
        title:
          "What are the instructions for using the SIPLUSH™ Paradise Shaker Bottle?",
        content:
          "To use your SIPLUSH™ Paradise Shaker Bottle, simply add your favorite mix-ins like protein powder or chia seeds, secure the lid and agitator tightly, shake it up vigorously, and enjoy your delicious blend!",
      },
      {
        title: "Do SIPLUSH™ Paradise Shaker Bottle prevent condensation?",
        content:
          "Yes! The SIPLUSH™ Paradise Shaker Bottle is made with vacuum-insulated stainless steel, which completely eliminates condensation. This means you can carry it confidently without worrying about wet hands, water rings on surfaces, or any potential damage to electronic devices in your bag.",
      },
      {
        title:
          "Do SIPLUSH™ Paradise Shaker Bottle fit in standard car cup holders?",
        content:
          "Yes, it does! The SIPLUSH™ Paradise Shaker Bottle is designed to fit comfortably in most standard car and treadmill cup holders, making it easy to take with you wherever you go.",
      },
      {
        title:
          "Can I use my SIPLUSH™ Paradise Shaker Bottle for hot and cold drinks?",
        content:
          "Your SIPLUSH™ bottle is specially designed to keep your cold drinks fresh and stylish! For the best experience and leak-free sipping, we recommend using it exclusively for cold beverages.",
      },
      {
        title: "How long does my drink stay cold?",
        content:
          "The double-wall vacuum insulation keeps drinks cold (50°F/10°C) for up to 19 hours. For best results, fill with ice and pre-chilled drinks.",
      },
      {
        title: "What is the thing inside my SIPLUSH™ Paradise Shaker Bottle?",
        content:
          "The plastic agitator helps mix protein powders, ingredients, or infuse fruits, ensuring a smooth blend every time.",
      },
      {
        title:
          "Can I use my SIPLUSH™ Paradise Shaker Bottle for more than protein shakes?",
        content:
          "Absolutely! It’s perfect for water, cocktails, energy drinks, and more - great for outdoor activities such as BBQs, beach days, or camping trips.",
      },
      {
        title: "Why is my SIPLUSH™ Paradise Shaker Bottle leaking?",
        content:
          "Ensure the lid is securely twisted and the chug cap is properly tightened. Check that the silicone ring is flat-side out and properly positioned.",
      },
    ],

    "Product Care": [
      {
        title: "How often do I need to wash my Siplush bottle?",
        content:
          "For the best hygiene and freshness, we recommend washing your SIPLUSH™ bottle every day. This ensures your bottle stays clean and ready for your next drink!",
      },
      {
        title:
          "How do I clean the different parts of my SIPLUSH™ Paradise Shaker Bottle?",
        content: (
          <>
            To clean your SIPLUSH™ bottle, use warm soapy water and a soft
            sponge. Avoid bleach or abrasive scrubbers, and make sure to air dry
            or towel dry it thoroughly for the best results.
            <br />
            <br />
            Here's a step-by-step guide:
            <ul>
              <li>1. Remove the lid, agitator, and bottle.</li>
              <li>2. Soak all parts in warm water with mild dish soap.</li>
              <li>3. Clean with warm soapy water and a soft sponge.</li>
              <li>4. Avoid bleach or abrasive scrubbers.</li>
              <li>5. Air dry or towel dry thoroughly before reassembling.</li>
            </ul>
          </>
        ),
      },
      {
        title: "Are SIPLUSH™ Paradise Shaker Bottle freezer safe?",
        content:
          "Freezing your shaker isn’t a good idea—it can make the stainless steel super cold, which might be uncomfortable to touch and could even cause frostbite. Plus, it’s designed to keep your drinks cold, not to freeze them!",
      },
    ],

    "Orders & Warranty": [
      {
        title: "Does SIPLUSH™ Paradise Shaker Bottle have a warranty?",
        content:
          "Yes! Since SIPLUSH sells on Amazon, we follow Amazon's warranty policy. If you experience any issues, such as defects or missing parts, you can easily request a replacement by visiting the 'Your Orders' page on Amazon.",
      },
      {
        title: "What is SIPLUSH's return policy?",
        content:
          "Since SIPLUSH sells on Amazon, we follow Amazon's return policy. You can return your purchase within 30 days of delivery for a hassle-free experience!",
      },
    ],
    Sustainability: [
      {
        title: "Are SIPLUSH™ Paradise Shaker Bottle environmentally friendly?",
        content:
          "Yes, SIPLUSH™ Paradise Shaker Bottles are designed with the environment in mind! By choosing stainless steel over plastic, you’re helping to reduce plastic waste. Stainless steel is durable, reusable, and fully recyclable, making it a more eco-friendly option. With continuous use, you can avoid single-use plastic bottles, making a positive impact on the planet while enjoying a high-quality, long-lasting product.",
      },
      {
        title: "Is Siplush committed to sustainable practices?",
        content:
          "Yes, SIPLUSH is dedicated to sustainability! We focus on using eco-friendly materials, such as stainless steel, to reduce plastic waste. Our products are designed to be durable and reusable, helping to minimize the environmental impact. We’re committed to making choices that contribute to a healthier planet, one bottle at a time.",
      },
      {
        title: "Can I recycle my Siplush bottle at the end of its life?",
        content:
          "Yes, absolutely! Since SIPLUSH™ bottles are made from stainless steel, they are fully recyclable. When your bottle reaches the end of its life, you can recycle it and help reduce environmental waste.",
      },
      {
        title: "Can I recycle my SIPLUSH bottle at the end of its life?",
        content: (
          <>
            Yes! SIPLUSH bottles are made from 100% stainless steel and are
            fully recyclable—but not through curbside bins. To recycle it
            properly:
            <ul>
              <li>1. Remove any non-metal parts (lid, straw, silicone ring)</li>
              <li>2. Rinse the bottle clean</li>
              <li>
                3. Drop it off at a local scrap metal recycling center Use{" "}
                <a
                  href="https://www2.calrecycle.ca.gov/BevContainer/RecyclingCenters/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CalRecycle
                </a>{" "}
                or{" "}
                <a
                  href="https://search.earth911.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Earth911
                </a>{" "}
                to find a location near you.
              </li>
            </ul>
            Let your bottle live on—sustainably. ♻️
          </>
        ),
      },
    ],
    "Brand Philosophy": [
      {
        title: "What inspired the creation of Siplush?",
        content:
          'SIPLUSH was inspired by the idea of combining "sip" (a drinking vessel), "plus" (representing quality), and "lush" (symbolizing an extraordinary experience). We wanted to create a bottle that not only serves its purpose but enhances your drinking experience with style, quality, and sustainability.',
      },
      {
        title: "How did we get our start? ",
        content:
          "SIPLUSH began with a mission to create high-quality beverage containers inspired by the Californian lifestyle, designed to keep you energized and hydrated for any activity or daily moment.",
      },
      {
        title: "What sets Siplush apart from other brands?",
        content:
          "SIPLUSH stands out by advocating a Californian lifestyle—embracing active and conscious living. We focus on seamlessly integrating health and wellness into everyday life, offering products that align with your vibrant, eco-friendly, and active lifestyle.",
      },
    ],
  };

  return (
    <section className="FAQ-section" id="FAQ">
      <div className="accordion-wrap">
        <h1 className="faq-header">FAQ</h1>
        {items.map((item, index) => (
          <FAQItem
            key={index}
            title={item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          >
            {openIndex === index && <SubFAQ subItems={subItemsMapping[item]} />}
          </FAQItem>
        ))}
      </div>
    </section>
  );
};

export default Faq;
