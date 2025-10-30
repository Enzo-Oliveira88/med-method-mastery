import CourseCard from "./CourseCard";
import courseBase from "@/assets/course-base.jpg";
import courseAdvanced from "@/assets/course-advanced.jpg";
import courseMentorship from "@/assets/course-mentorship.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const courses = [
  {
    image: courseBase,
    title: "MÉTODO DE EXCELÊNCIA — BASE MÉDICA",
    description: "Aprenda a dominar os fundamentos da medicina com propósito e clareza. Um curso que une técnica, rotina e mentalidade científica para estudantes que desejam alcançar a excelência desde os primeiros períodos.",
    price: "R$ 397,00",
    link: "https://pay.kiwify.com.br/RTduVKJ" // Substitua pelo link da Kiwify
  },
  {
    image: courseAdvanced,
    title: "PERFORMANCE MÉDICA AVANÇADA",
    description: "Curso voltado para alunos em fase clínica que buscam constância e foco. Estratégias práticas de estudo, gestão emocional e tomada de decisão baseadas em evidências.",
    price: "R$ 490,00",
    link: "https://pay.kiwify.com.br/Xoj6gqT" // Substitua pelo link da Kiwify
  },
  {
    image: courseMentorship,
    title: "MENTORIA MÉDICA — PROPÓSITO E CARREIRA",
    description: "Um programa de mentoria para quem quer alinhar vocação, propósito e alta performance. Ideal para estudantes e residentes que desejam construir uma carreira sólida e inspiradora.",
    price: "R$ 970,00",
    link: "https://pay.kiwify.com.br/24q5cyM" // Substitua pelo link da Kiwify
  }
];

const CoursesSection = () => {
  const sectionRef = useScrollReveal();
  
  return (
    <section id="courses" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={sectionRef} className="mb-16 scroll-reveal">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Cursos
          </h2>
          <p className="font-crimson text-lg text-foreground/80 max-w-3xl">
            Programas desenvolvidos para transformar seu modo de estudar, pensar e construir sua carreira médica com excelência e propósito.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.title}
              className="scroll-reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="font-crimson text-lg text-muted-foreground italic">
            Investimento em sua formação é investimento em vidas que você vai transformar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
