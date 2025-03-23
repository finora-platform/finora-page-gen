
import { Section } from "@/lib/types";

export const FooterSection = ({ content }: { content: Section["content"] }) => (
  <footer className="text-gray-700 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-8">
        
        {/* Logo Section */}
        <div className="flex flex-col mb-4 md:mb-0">
          <span className="text-lg font-bold">Logo</span>
          <address className="not-italic">
            FINOVOICE RESEARCH ANALYST, 45/B, Subam Complex 1st ‘A’ Main 2nd Floor Rear Wing, <br />
            Mini Forest Road, 3rd Phase, J. P. Nagar, Bengaluru,<br />
            Karnataka 560078
          </address>
          <span># SEBI Registration: INH123456789</span>
          <span># GSTIN: ABCDEF123567</span>
        </div>

        {/* Compliance Section */}
        <div className="mb-4 md:mb-0 flex flex-col space-y-7">
          <div className="mb-4 md:mb-0">
          <h4 className="font-semibold">Compliance</h4>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">SEBI complaint board</a></li>
            <li><a href="#" className="hover:underline">Grievance redressal</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Disclaimer</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

          <div className="mb-4 md:mb-0">
          <h4 className="font-semibold">Contact Us</h4>
          <p>📞 +91-1234567890</p>
          <p>✉️ <a href="mailto:contactus@companyname.com" className="hover:underline">Contactus@companyname.com</a></p>
        </div>
        </div>

        {/* Contact Us Section */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold">Contact Us</h4>
          <p>📞 +91-1234567890</p>
          <p>✉️ <a href="mailto:contactus@companyname.com" className="hover:underline">Contactus@companyname.com</a></p>
        </div>
      </div>

    </footer>
);
