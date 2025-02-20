
import { Section } from "@/lib/types";
import { UserRound } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TestimonialsSection = ({ content }: { content: Section["content"] }) => (
  <div className="py-20 px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
      <p className="text-xl text-gray-600">{content.subtitle}</p>
    </div>
    <div className="max-w-5xl mx-auto">
      <Carousel>
        <CarouselContent>
          {content.testimonials?.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="p-8 bg-white rounded-2xl shadow-lg text-center">
                <UserRound className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                <blockquote className="text-xl italic mb-6">{testimonial.quote}</blockquote>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div>
);
