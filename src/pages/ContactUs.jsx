import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import ApiService from "../services/ApiService";

const ContactUs = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    subject: "", 
    message: "" 
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.subject || !form.message) {
      Swal.fire({
        icon: "warning",
        title: t("contact.validation.title"),
        text: t("contact.validation.message"),
        confirmButtonText: "OK",
        confirmButtonColor: "#0C479A",
      });
      return;
    }
    
    try {
      setSubmitting(true);
      const response = await ApiService.request({ 
        method: "POST", 
        url: "/contactUs", 
        data: form 
      });
      if (response.data.status) {
        Swal.fire({ 
          icon: "success", 
          title: t("contact.success.title"), 
          text: response.data.message || t("contact.success.message"), 
          confirmButtonText: "OK",
          confirmButtonColor: "#0C479A",
        });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        Swal.fire({ 
          icon: "error", 
          title: t("contact.error.title"), 
          text: response.data.message || t("contact.error.message"),
          confirmButtonText: "OK",
          confirmButtonColor: "#0C479A",
        });
      }
    } catch (err) {
      Swal.fire({ 
        icon: "error", 
        title: t("contact.error.title"), 
        text: t("contact.error.message"),
        confirmButtonText: "OK",
        confirmButtonColor: "#0C479A",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="contact-page-section" id="contact">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Header Section */}
              <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
                <h1 className="contact-page-title">{t("contact.title")}</h1>
                <p className="contact-page-subtitle">{t("contact.subtitle")}</p>
              </div>

              {/* Contact Form */}
              <div className="contact-form-wrapper" data-aos="fade-up" data-aos-delay="200">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-4">
                    {/* Full Name */}
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control contact-input"
                        placeholder={t("contact.form.fullName")}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control contact-input"
                        placeholder={t("contact.form.email")}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control contact-input"
                        placeholder={t("contact.form.phoneNumber")}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                    </div>

                    {/* Subject */}
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control contact-input"
                        placeholder={t("contact.form.subject")}
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <textarea
                        className="form-control contact-textarea"
                        rows="6"
                        placeholder={t("contact.form.message")}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn contact-submit-btn w-100"
                        disabled={submitting}
                      >
                        {submitting ? t("contact.form.sending") : t("contact.form.send")}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;
