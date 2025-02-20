
import { Section } from "@/lib/types";

export const FooterSection = ({ content }: { content: Section["content"] }) => (
  <footer className="bg-gray-900 text-white py-12 px-4">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">{content.title}</h3>
        <p className="text-gray-400">{content.subtitle}</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {content.links?.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="text-gray-400 hover:text-white transition">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact</h4>
        <ul className="space-y-2 text-gray-400">
          <li>contact@example.com</li>
          <li>+1 (555) 123-4567</li>
          <li>123 Main St, City, Country</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
        </div>
      </div>
    </div>
  </footer>
);
