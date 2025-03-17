import React from 'react';
import { Button } from '../ui/button';

const ContactSection = ({ themeColor, content }: { themeColor: string; content: { title?: string; subtitle?: string; description?: string; buttonText?: string; buttonUrl?: string; image?: string; logo?: string; themeColor?: string; items?: { title: string; description: string; icon?: string; }[]; } }) => {

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">{content.title}</h2>

        <p className="text-xl text-gray-600 text-center mb-8">{content.subtitle}</p>

        <div className='flex justify-center'>
        <Button style={{background:themeColor}}>Get in touch</Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
