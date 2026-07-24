export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    avatar: "/images/testimonials/sarah.jpg",
    content: "CALISSTUS delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail, modern design, and seamless functionality have significantly boosted our online sales. Highly recommended!",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "Digital Solutions",
    avatar: "/images/testimonials/michael.jpg",
    content: "Working with Gabriel was a fantastic experience. His expertise in full-stack development and ability to translate complex requirements into beautiful, functional applications is remarkable. The project was delivered on time and within budget.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Fashion Forward",
    avatar: "/images/testimonials/emily.jpg",
    content: "The luxury fashion website CALISSTUS built for us is stunning. The 3D effects, smooth animations, and premium UI design perfectly match our brand. Our customers love the shopping experience!",
    rating: 5,
  },
  {
    id: "4",
    name: "David Thompson",
    role: "Founder",
    company: "Music Vibes",
    avatar: "/images/testimonials/david.jpg",
    content: "CALISSTUS transformed our artist platform into a modern, engaging experience. The integration of music features, responsive design, and performance optimization has helped us grow our fanbase significantly.",
    rating: 5,
  },
  {
    id: "5",
    name: "Lisa Wang",
    role: "CTO",
    company: "Global Staffing",
    avatar: "/images/testimonials/lisa.jpg",
    content: "The recruitment platform CALISSTUS developed is robust, scalable, and user-friendly. His understanding of complex business requirements and technical excellence made this project a success.",
    rating: 5,
  },
  {
    id: "6",
    name: "James Miller",
    role: "Creative Director",
    company: "Luxe Gems",
    avatar: "/images/testimonials/james.jpg",
    content: "Our jewelry e-commerce site is absolutely beautiful. CALISSTUS captured the luxury aesthetic perfectly while ensuring excellent performance and user experience. Sales have increased by 40% since launch!",
    rating: 5,
  },
];
