import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaMeta, FaInstagram, FaXTwitter } from "react-icons/fa6";
import "../style/footer.css";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/movjwyab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent!");
        reset();
      } else {
        alert(`Failed: ${response.status}. Try again.`);
        console.error("Form error:", response.status, await response.json());
      }
    } catch (error) {
      alert("Error sending. Try again.");
      console.error("Form error:", error);
    }
  };

  return (
    <footer className="contact">
      <div className="footer-container">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#About" data-content="Siplush">
                Brand
              </a>
            </li>

            <li>
              <a href="#Featuressection" data-content="feature-section">
                Features
              </a>
            </li>
            <li>
              <a href="#BOM" data-content="lifestyle-section">
                Paradise Shaker
              </a>
            </li>
            <li>
              <a href="#JoinBrandsSection" data-content="JoinBrandsSection">
                Testimony
              </a>
            </li>
            <li>
              <a href="#FAQ" data-content="What you wonder">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: reachus@siplush.com</p>
          <p>Address: 1839 Yeager Ave, La Verne, CA 91750-5858</p>
        </div>
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder="John Doe"
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="Example@email.com"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                {...register("message")}
                placeholder="Your message"
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Siplush Brand. All rights reserved.
        </p>
        <div className="icons">
          {/* <a href="#" target="_blank" rel="noopener noreferrer"><FaMeta className="icon" /></a> */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a> */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer"><FaXTwitter className="icon" /></a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
