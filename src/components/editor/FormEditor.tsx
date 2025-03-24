import { sections } from "@/lib/constants";
import { FormField } from "@/lib/types";
import { Plus, Check } from "lucide-react";
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
    handleChange(fieldName, newArray);
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
                  <div key={index} className="flex items-center gap-4">
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
        <h2 className="text-lg font-semibold">{content.title}</h2>
        <p className="text-gray-600 mb-4">{content.subtitle}</p>
        <div className="space-y-4">
          {(content.pricing || []).map((plan: any, index: number) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
              <div className="space-y-2">
                {/* Plan Name Input */}
                <div>
                  <label htmlFor={`plan-name-${index}`} className="block text-sm font-medium text-gray-700">
                    Plan Name
                  </label>
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
                </div>
  
                {/* Plan Price Input */}
                <div>
                  <label htmlFor={`plan-price-${index}`} className="block text-sm font-medium text-gray-700">
                    Plan Price
                  </label>
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
                </div>
  
                {/* Features List */}
                <label className="block text-sm font-medium text-gray-700">
                   Feature
                  </label>
                  {plan.features.map((feature: string, featureIndex: number) => (
                      <div>
                        <Input
                          type="text"
                          id={`feature-${index}-${featureIndex}`}
                          name={`feature-${index}-${featureIndex}`}
                          value={feature}
                          onChange={(e) => {
                            const updatedFeatures = [...plan.features];
                            updatedFeatures[featureIndex] = e.target.value;
                            const updatedPlan = { ...plan, features: updatedFeatures };
                            const updatedPricing = [...(content.pricing || [])];
                            updatedPricing[index] = updatedPlan;
                            handleChange("pricing", updatedPricing);
                          }}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="Feature"
                        />
                      </div>
                  ))}
              </div>
            </div>
          ))}
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
          </label>
          {field.type === "array" ? (
            <div className="space-y-4">
              {(content[field.name] || []).map((item: any, index: number) => (
                <div key={index} className="p-4 bg-white rounded-lg space-y-2">
                  {field.arrayFields?.map((arrayField) => (
                    <div key={arrayField.name}>
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor={`${arrayField.name}-${index}`}
                      >
                        {arrayField.label}
                      </label>
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
              <button
                onClick={() => addArrayItem(field.name)}
                className="flex items-center text-sm text-blue-600 hover:text-blue-700"
              >
                <Plus className="w-4 h-4 mr-1" /> Add {field.label}
              </button>
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
        </div>
      ))}
    </div>
  );
};
