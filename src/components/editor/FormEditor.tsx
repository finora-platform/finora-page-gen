import { FormField } from "@/lib/types";
import { Plus } from "lucide-react";

interface FormEditorProps {
  fields: FormField[];
  content: any;
  onChange: (value: any) => void;
}

export const FormEditor = ({ fields, content, onChange }: FormEditorProps) => {
  const handleChange = (name: string, value: any) => {
    onChange({ ...content, [name]: value });
  };

  const handleArrayChange = (fieldName: string, index: number, value: any) => {
    const newArray = [...(content[fieldName] || [])];
    newArray[index] = { ...newArray[index], ...value };
    handleChange(fieldName, newArray);
  };

  const addArrayItem = (fieldName: string) => {
    const newArray = [...(content[fieldName] || []), {}];
    handleChange(fieldName, newArray);
  };

  const removeArrayItem = (fieldName: string, index: number) => {
    const newArray = content[fieldName].filter((_: any, i: number) => i !== index);
    handleChange(fieldName, newArray);
  };

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">{field.label}</label>
          {field.type === "array" ? (
            <div className="space-y-4">
              {(content[field.name] || []).map((item: any, index: number) => (
                <div key={index} className="p-4 bg-white rounded-lg space-y-2">
                  {field.arrayFields?.map((arrayField) => (
                    <div key={arrayField.name}>
                      <label className="block text-sm font-medium text-gray-700">{arrayField.label}</label>
                      <input
                        type="text"
                        value={item[arrayField.name] || ""}
                        onChange={(e) => handleArrayChange(field.name, index, { [arrayField.name]: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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
            <input
              type={field.type === "url" ? "url" : "text"}
              value={content[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          )}
        </div>
      ))}
    </div>
  );
};