
import { useState } from "react";
import toast from "react-hot-toast";
import "./ContactForm.css";

const ContactForm = () => {
    const [sending, setSending] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        setSending(true);

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success("Success! Your message has been sent.");
                form.reset();
            } else {
                toast.error(data.message || "Unable to send your message.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact-section">
            <div id="contact-heading">
                <h1>Contact Carolina Huddle</h1>

                <p>
                    Have a question or want to talk Panthers football?
                    Send us a message.
                </p>
            </div>

            <form id="contact-form" onSubmit={handleSubmit}>
                <input
                    type="hidden"
                    name="access_key"
                    value="3f341a18-bfcb-410d-85a1-c6d41a97c9ce"
                />

                <input
                    type="hidden"
                    name="subject"
                    value="New Carolina Huddle Message"
                />

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                />

                <button type="submit" disabled={sending}>
                    {sending ? "SENDING..." : "SEND MESSAGE"}
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
