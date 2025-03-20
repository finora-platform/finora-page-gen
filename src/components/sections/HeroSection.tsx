import { Section } from "@/lib/types";

export const HeroSection = ({ content, themeColor }: { content: Section["content"]; themeColor: string }) => (

  <div className={`text-center h-[70vh] py-20 px-4 mx-8 text-white rounded-3xl flex items-center justify-center`} style={{ backgroundColor: `var(--${themeColor})` }}>

    <div>
      <h1 className="text-7xl font-bold mb-4">{content.title}</h1>
      <h2 className="text-4xl font-semibold mb-8">{content.subtitle}</h2>
      <p className="text-xl mb-12 max-w-3xl mx-auto opacity-80">
        {content.description}
      </p>
      <div className="flex gap-4 max-w-3xl mx-auto justify-center">
        <input
          type="text"
          placeholder="Name"
          className="flex-1 px-4 py-3 rounded-lg text-gray-800"
          id="name"
          name="name"
          autoComplete="name"
        />

        <input
          type="tel"
          placeholder="Mobile number"
          className="flex-1 px-4 py-3 rounded-lg text-gray-800"
          id="mobile"
          name="mobile"
          autoComplete="tel"
        />

        <button className={`px-8 py-3 text-white rounded-lg hover:bg-slate-900 transition-colors`} style={{ backgroundColor: `var(--${themeColor}-secondary)` }}>
          {content.buttonText}
        </button>
      </div>
    </div>
  </div>
);
