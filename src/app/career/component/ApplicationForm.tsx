"use client";
import {
  FormDataType,
  FormDataTypeWithJobTitle,
  FormErrors,
  JobModelProps,
} from "@/utils/types";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const JobApplicationModal: React.FC<JobModelProps> = ({
  jobTitle,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = React.useState<
    FormDataType & { city: string }
  >({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    coverLetter: "",
    resume: null,
    city: "",
  });

  const [formErrors, setFormErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        coverLetter: "",
        resume: null,
        city: "",
      });
      setFormErrors({});
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  }, [isOpen]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxSize = 500 * 1024; // 500 KB in bytes
    const isPDF = file.type === "application/pdf";

    if (!isPDF) {
      setFormErrors((prev) => ({
        ...prev,
        resume: "Only PDF files are allowed",
      }));
      setFormData((prev) => ({ ...prev, resume: null }));
      return;
    }

    if (file.size > maxSize) {
      setFormErrors((prev) => ({
        ...prev,
        resume: "File size must be under 500KB",
      }));
      setFormData((prev) => ({ ...prev, resume: null }));
      return;
    }

    setFormData((prev) => ({ ...prev, resume: file }));
    setFormErrors((prev) => ({ ...prev, resume: "" }));
  };

  const validateForm = () => {
    const errors: FormErrors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    if (!formData.phone.trim()) errors.phone = "Phone Number is required.";
    if (!formData.city.trim()) errors.city = "City is required.";
    if (!formData.resume) errors.resume = "Resume file is required.";
    return errors;
  };

  const handleSubmitToServer = async (formData: FormDataTypeWithJobTitle) => {
    try {
      const { resume, ...rest } = formData;

      const formDataToSend = new FormData();
      formDataToSend.append("fullName", rest.fullName);
      formDataToSend.append("email", rest.email);
      formDataToSend.append("phone", rest.phone);
      formDataToSend.append("city", rest.city);
      formDataToSend.append("linkedin", rest.linkedin || "");
      formDataToSend.append("github", rest.github || "");
      formDataToSend.append("coverLetter", rest.coverLetter || "");
      formDataToSend.append("jobTitle", formData.jobTitle);

      if (resume) {
        formDataToSend.append("resume", resume);
      }
      setIsSubmitting(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Application sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          linkedin: "",
          github: "",
          coverLetter: "",
          resume: null,
          city: "",
        });
        onClose();
      } else {
        console.error(result.error);
        toast.error("Failed to send application. Please try again later.");
      }
    } catch (err) {
      console.error("Error sending application:", err);
      toast.error("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    handleSubmitToServer({ ...formData, jobTitle });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-[#272729] dark:bg-[#272729] flex items-center justify-center px-4">
      <div className="bg-[#FFFFFF] w-full max-w-2xl rounded-2xl p-6 sm:p-8 shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl cursor-pointer"
          aria-label="Close Modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-[#FEA91F] mb-1">
          Apply for: {jobTitle}
        </h2>
        <p className="text-gray-600 mb-6">
          Please fill out the form below to apply.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-[#272729] rounded focus:ring-2 focus:ring-[#FEA91F]"
              />
              {formErrors.fullName && (
                <p className="text-sm text-red-500 mt-1">
                  {formErrors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border text-[#272729] border-gray-300 rounded focus:ring-2 focus:ring-[#FEA91F]"
              />
              {formErrors.email && (
                <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-[#272729] rounded focus:ring-2 focus:ring-[#FEA91F]"
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500 mt-1">{formErrors.phone}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-[#272729] rounded focus:ring-2 focus:ring-[#FEA91F]"
              />
              {formErrors.city && (
                <p className="text-sm text-red-500 mt-1">{formErrors.city}</p>
              )}
            </div>

            {/* LinkedIn */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                LinkedIn URL (Optional)
              </label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-[#272729] rounded focus:ring-2 focus:ring-[#FEA91F]"
              />
            </div>

            {/* GitHub */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GitHub URL (Optional)
              </label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-[#272729] rounded focus:ring-2 focus:ring-[#FEA91F]"
              />
            </div>

            {/* Cover Letter - full width */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cover Letter (Optional)
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-[#272729] resize-none h-28 focus:ring-2 focus:ring-[#FEA91F]"
              />
            </div>

            {/* Resume - full width */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Resume (PDF)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full border border-gray-300 text-[#272729] rounded p-1"
              />
              {formErrors.resume && (
                <p className="text-sm text-red-500 mt-1">{formErrors.resume}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FEA91F] hover:bg-[#e2911b] cursor-pointer text-white font-semibold py-2 px-4 rounded-full transition duration-300"
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationModal;
