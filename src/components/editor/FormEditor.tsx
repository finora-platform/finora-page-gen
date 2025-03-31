import { sections } from "@/lib/constants";
import { FormField } from "@/lib/types";
import { Plus, Check, Trash2 } from "lucide-react";
import { Section } from "@/lib/types";
import { Input } from "../ui/input";

interface FormEditorProps {
  fields: FormField[];
  content: any;
  onChange: (value: any) => void;
  activeSection: Section | undefined;
}

export const FormEditor = ({
  fields,
  content,
  onChange,
  activeSection,
}: FormEditorProps) => {
  const handleChange = (name: string, value: any, source?: string) => {
    onChange({ ...content, [name]: value, source: source });
  };

  const handleArrayChange = (fieldName: string, index: number, value: any) => {
    const newArray = [...(content[fieldName] || [])];
    newArray[index] = { ...newArray[index], ...value };
    {
      activeSection.id == "features"
        ? handleChange(fieldName, newArray, "Validation")
        : handleChange(fieldName, newArray);
    }
  };

  const addArrayItem = (fieldName: string) => {
    const newArray = [...(content[fieldName] || []), {}];
    handleChange(fieldName, newArray, "Validation");
  };

  const removeArrayItem = (fieldName: string, index: number) => {
    const newArray = content[fieldName].filter(
      (_: any, i: number) => i !== index
    );
    {
      activeSection.id == "features"
        ? handleChange(fieldName, newArray, "Validation")
        : handleChange(fieldName, newArray);
    }
  };

  if (activeSection.id === "highlights") {
    return (
      <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-300">
        <div className="space-y-4">
          {fields.map((field) => {
            const items = Array.isArray(content[field.name])
              ? content[field.name]
              : [];
            return (
              <div className="space-y-4" key={field.name}>
                {items.map((item: any, index: number) => (
                  <div
                    key={item.id || `${field.name}-${index}`}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-1 flex rounded-xl overflow-hidden border border-gray-200">
                      <div className="p-2 border-r border-gray-200">
                        <p className="text-gray-600 font-medium">
                          {item.description}
                        </p>
                      </div>
                      {field.arrayFields.map(
                        (arrayField) =>
                          arrayField.type === "text" && (
                            <Input
                              key={arrayField.name} // Ensure each input has a unique key
                              className="p-2 flex items-center justify-end h-inherit text-gray-800 font-semibold"
                              placeholder={item.title} // Use a placeholder if defined
                              value={item[arrayField.name] || ""} // Set the value from the item
                              onChange={(e) => {
                                handleArrayChange(field.name, index, {
                                  [arrayField.name]: e.target.value,
                                });
                              }}
                            />
                          )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (activeSection.id === "pricing") {
    return (
      <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-300">
        <div className="mb-4">
          <label
            htmlFor="pricing-title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
            <Input
              type="text"
              id="pricing-title"
              name="pricing-title"
              value={content.title || ""}
              onChange={(e) => handleChange("title", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Pricing Section Title"
            />
          </label>
        </div>

        {/* Subtitle Input */}
        <div className="mb-4">
          <label
            htmlFor="pricing-subtitle"
            className="block text-sm font-medium text-gray-700"
          >
            Subtitle
            <Input
              type="text"
              id="pricing-subtitle"
              name="pricing-subtitle"
              value={content.subtitle || ""}
              onChange={(e) => handleChange("subtitle", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Pricing Section Subtitle"
            />
          </label>
        </div>

        <div className="mb-4">
          <label
            htmlFor="pricing-title"
            className="block text-sm font-medium text-gray-700"
          >
            Discount
            <Input
              type="number"
              id="pricing-title"
              name="pricing-title"
              value={content.discount || ""}
              onChange={(e) => handleChange("discount", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Pricing Section Title"
            />
          </label>
        </div>

        <div className="space-y-4">
          {(content.pricing || []).map((plan: any, index: number) => (
            <div
              key={plan.id || `plan-${index}`}
              className="p-4 bg-white rounded-lg border border-gray-200"
            >
              <div className="space-y-2">
                <div>
                  <label
                    htmlFor={`plan-name-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Plan Name
                    <Input
                      type="text"
                      id={`plan-name-${index}`}
                      name={`plan-name-${index}`}
                      value={plan.plan || ""}
                      onChange={(e) => {
                        const updatedPlan = { ...plan, plan: e.target.value };
                        const updatedPricing = [...(content.pricing || [])];
                        updatedPricing[index] = updatedPlan;
                        handleChange("pricing", updatedPricing);
                      }}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Plan Name"
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor={`plan-price-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Plan Price
                    <Input
                      type="text"
                      id={`plan-price-${index}`}
                      name={`plan-price-${index}`}
                      value={plan.price || ""}
                      onChange={(e) => {
                        const updatedPlan = { ...plan, price: e.target.value };
                        const updatedPricing = [...(content.pricing || [])];
                        updatedPricing[index] = updatedPlan;
                        handleChange("pricing", updatedPricing);
                      }}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Plan Price"
                    />
                  </label>
                </div>
                <label className="block text-sm font-medium text-gray-700">
                  Feature
                  {plan.features.map(
                    (feature: string, featureIndex: number) => (
                      <div
                        key={`feature-${index}-${featureIndex}`}
                        className="flex items-center"
                      >
                        <Input
                          type="text"
                          id={`feature-${index}-${featureIndex}`}
                          name={`feature-${index}-${featureIndex}`}
                          value={feature}
                          onChange={(e) => {
                            const updatedFeatures = [...plan.features];
                            updatedFeatures[featureIndex] = e.target.value;
                            const updatedPlan = {
                              ...plan,
                              features: updatedFeatures,
                            };
                            const updatedPricing = [...(content.pricing || [])];
                            updatedPricing[index] = updatedPlan;
                            handleChange("pricing", updatedPricing);
                          }}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="Feature"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updatedFeatures = plan.features.filter(
                              (_, i) => i !== featureIndex
                            );
                            const updatedPlan = {
                              ...plan,
                              features: updatedFeatures,
                            };
                            const updatedPricing = [...(content.pricing || [])];
                            updatedPricing[index] = updatedPlan;
                            handleChange("pricing", updatedPricing);
                          }}
                          className="ml-2 text-red-600 hover:text-red-800"
                        >
                          <Trash2 />
                        </button>
                      </div>
                    )
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      const updatedFeatures = [...plan.features, "Feaature"]; // Add a new empty string for the new feature
                      const updatedPlan = {
                        ...plan,
                        features: updatedFeatures,
                      };
                      const updatedPricing = [...(content.pricing || [])];
                      updatedPricing[index] = updatedPlan; // Update the specific plan in the pricing array
                      handleChange("pricing", updatedPricing); // Call handleChange to update the state
                    }}
                    className=" mt-2 flex justify-center w-full px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Add Feature
                  </button>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeSection.id === "testimonials") {
    return (
      <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-300">
        {/* Title Input */}
        <div className="mb-4">
          <label
            htmlFor="testimonials-title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
            <Input
              type="text"
              id="testimonials-title"
              name="testimonials-title"
              value={content.title || ""}
              onChange={(e) => handleChange("title", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Testimonials Section Title"
            />
          </label>
        </div>

        {/* Subtitle Input */}
        <div className="mb-4">
          <label
            htmlFor="testimonials-subtitle"
            className="block text-sm font-medium text-gray-700"
          >
            Subtitle
            <Input
              type="text"
              id="testimonials-subtitle"
              name="testimonials-subtitle"
              value={content.subtitle || ""}
              onChange={(e) => handleChange("subtitle", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Testimonials Section Subtitle"
            />
          </label>
        </div>

        <div className="space-y-9">
          {(content.testimonials || []).map(
            (testimonial: any, index: number) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg border border-gray-200 mt-9"
              >
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      const updatedTestimonials = content.testimonials.filter(
                        (_, i) => i !== index
                      );
                      handleChange("testimonials", updatedTestimonials);
                    }}
                    className="bg-white absolute left-[70%] -translate-y-11 border p-2 rounded-md text-red-600 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <Trash2 />
                  </button>

                  <label
                    htmlFor="testimonial-user-image"
                    className="block text-sm font-medium mb-2"
                  >
                    User Image
                    <input
                      type="file"
                      id="logofile"
                      name="logo"
                      placeholder="Logo Image"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            const updatedTestimonials = [
                              ...(content.testimonials || []),
                            ];
                            updatedTestimonials[index] = {
                              ...updatedTestimonials[index],
                              image: reader.result, // Store the image data
                            };
                            handleChange("testimonials", updatedTestimonials);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}

                      className="w-full p-2 border rounded "
                    />
                  </label>

                  {/* Image Display */}
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt="User Image"
                      className="w-16 h-16 rounded-full mb-2"
                    />
                  )}
                  {/* Quote Input */}
                  <div>
                    <label
                      htmlFor={`testimonial-quote-${index}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Quote
                      <Input
                        type="text"
                        id={`testimonial-quote-${index}`}
                        name={`testimonial-quote-${index}`}
                        value={testimonial.quote || ""}
                        onChange={(e) => {
                          const updatedTestimonials = [
                            ...(content.testimonials || []),
                          ];
                          updatedTestimonials[index] = {
                            ...updatedTestimonials[index],
                            quote: e.target.value,
                          };
                          handleChange("testimonials", updatedTestimonials);
                        }}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Testimonial Quote"
                      />
                    </label>
                  </div>

                  {/* Author Input */}
                  <div>
                    <label
                      htmlFor={`testimonial-author-${index}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Author
                      <Input
                        type="text"
                        id={`testimonial-author-${index}`}
                        name={`testimonial-author-${index}`}
                        value={testimonial.author || ""}
                        onChange={(e) => {
                          const updatedTestimonials = [
                            ...(content.testimonials || []),
                          ];
                          updatedTestimonials[index] = {
                            ...updatedTestimonials[index],
                            author: e.target.value,
                          };
                          handleChange("testimonials", updatedTestimonials);
                        }}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Author Name"
                      />
                    </label>
                  </div>

                  {/* Role Input */}
                  <div>
                    <label
                      htmlFor={`testimonial-role-${index}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Role
                      <Input
                        type="text"
                        id={`testimonial-role-${index}`}
                        name={`testimonial-role-${index}`}
                        value={testimonial.role || ""}
                        onChange={(e) => {
                          const updatedTestimonials = [
                            ...(content.testimonials || []),
                          ];
                          updatedTestimonials[index] = {
                            ...updatedTestimonials[index],
                            role: e.target.value,
                          };
                          handleChange("testimonials", updatedTestimonials);
                        }}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Author Role"
                      />
                    </label>
                  </div>
                </div>
              </div>
            )
          )}
          <button
            type="button"
            onClick={() => {
              const newTestimonial = { quote: "", author: "", role: "" }; // Create a new testimonial object
              const updatedTestimonials = [
                ...(content.testimonials || []),
                newTestimonial,
              ]; // Add the new testimonial to the existing array
              handleChange("testimonials", updatedTestimonials); // Update the state with the new array
            }}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Testimonial
          </button>
        </div>
      </div>
    );
  }

  if (activeSection.id === "faq") {
    return (
      <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-300">
        {/* Title Input */}
        <div className="mb-4">
          <label
            htmlFor="faq-title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
            <Input
              type="text"
              id="faq-title"
              name="faq-title"
              value={content.title || ""}
              onChange={(e) => handleChange("title", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="FAQs Section Title"
            />
          </label>
        </div>

        {/* Subtitle Input */}
        <div className="mb-4">
          <label
            htmlFor="faq-subtitle"
            className="block text-sm font-medium text-gray-700"
          >
            Subtitle
            <Input
              type="text"
              id="faq-subtitle"
              name="faq-subtitle"
              value={content.subtitle || ""}
              onChange={(e) => handleChange("subtitle", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="FAQs Section Subtitle"
            />
          </label>
        </div>

        <div className="space-y-9">
          {(content.faqs || []).map((faq: any, index: number) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg border border-gray-200 mt-9"
            >
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    const updatedFAQs = content.faqs.filter(
                      (_, i) => i !== index
                    );
                    handleChange("faqs", updatedFAQs);
                  }}
                  className="bg-white absolute left-[70%] -translate-y-11 border p-2 rounded-md text-red-600 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <Trash2 />
                </button>

                {/* Question Input */}
                <div>
                  <label
                    htmlFor={`faq-question-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Question
                    <Input
                      type="text"
                      id={`faq-question-${index}`}
                      name={`faq-question-${index}`}
                      value={faq.question || ""}
                      onChange={(e) => {
                        const updatedFAQs = [...(content.faqs || [])];
                        updatedFAQs[index] = {
                          ...updatedFAQs[index],
                          question: e.target.value,
                        };
                        handleChange("faqs", updatedFAQs);
                      }}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="FAQ Question"
                    />
                  </label>
                </div>

                {/* Answer Input */}
                <div>
                  <label
                    htmlFor={`faq-answer-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Answer
                    <Input
                      type="text"
                      id={`faq-answer-${index}`}
                      name={`faq-answer-${index}`}
                      value={faq.answer || ""}
                      onChange={(e) => {
                        const updatedFAQs = [...(content.faqs || [])];
                        updatedFAQs[index] = {
                          ...updatedFAQs[index],
                          answer: e.target.value,
                        };
                        handleChange("faqs", updatedFAQs);
                      }}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="FAQ Answer"
                    />
                  </label>
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              const newFAQ = { question: "Question", answer: "Answer" }; // Create a new FAQ object
              const updatedFAQs = [...(content.faqs || []), newFAQ]; // Add the new FAQ to the existing array
              handleChange("faqs", updatedFAQs); // Update the state with the new array
            }}
            className="w-full flex justify-center items-center px-4 py-2  rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add FAQ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 bg-white p-4 rounded-md shadow-sm border">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2 ">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor={field.name}
          >
            {field.label}

            {field.type === "array" ? (
              <div className="space-y-4">
                {(content[field.name] || []).map((item: any, index: number) => (
                  <div
                    key={item.id || `${field.name}-${index}`}
                    className="p-4 bg-white rounded-lg space-y-2 border"
                  >
                    {field.arrayFields?.map((arrayField) => (
                      <div key={arrayField.name}>
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor={`${arrayField.name}-${index}`}
                        >
                          {arrayField.label}
                          <Input
                            type="text"
                            id={`${arrayField.name}-${index}`}
                            name={arrayField.name}
                            value={item[arrayField.name] || ""}
                            onChange={(e) => {
                              handleArrayChange(field.name, index, {
                                [arrayField.name]: e.target.value,
                              });
                            }}
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </label>
                      </div>
                    ))}
                    <button
                      onClick={() => removeArrayItem(field.name, index)}
                      className="text-red-600 hover:text-red-700 text-sm flex items-center"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Remove
                    </button>
                  </div>
                ))}
                {content[field.name].length < 6 && (
                  <button
                    onClick={() => addArrayItem(field.name)}
                    className="flex justify-center items-center w-full text-center text-sm p-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add {field.label}
                  </button>
                )}
              </div>
            ) : (
              <Input
                type={field.type === "url" ? "url" : "text"}
                id={field.name}
                name={field.name}
                value={content[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                onBlur={() => onChange(content)} // Trigger toast on blur
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border pt-1"
              />
            )}
          </label>
        </div>
      ))}
    </div>
  );
};
