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
    duration: "80 horas",
    link: "https://pay.kiwify.com.br/RTduVKJ"
  },
  {
    image: courseAdvanced,
    title: "PERFORMANCE MÉDICA AVANÇADA",
    description: "Curso voltado para alunos em fase clínica que buscam constância e foco. Estratégias práticas de estudo, gestão emocional e tomada de decisão baseadas em evidências.",
    price: "R$ 490,00",
    duration: "120 horas",
    link: "https://pay.kiwify.com.br/Xoj6gqT"
  },
  {
    image: courseMentorship,
    title: "MENTORIA MÉDICA — PROPÓSITO E CARREIRA",
    description: "Um programa de mentoria para quem quer alinhar vocação, propósito e alta performance. Ideal para estudantes e residentes que desejam construir uma carreira sólida e inspiradora.",
    price: "R$ 970,00",
    duration: "6 meses",
    link: "https://pay.kiwify.com.br/24q5cyM"
  }
];

const CoursesSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
  
  return (
    <section id="courses" ref={sectionRef} className="py-20 sm:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${sectionVisible ? 'animate-fade-down opacity-100' : 'opacity-0'}`}>
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
              className={`transition-all duration-700 ${
                sectionVisible 
                  ? 'animate-slide-in-bottom opacity-100' 
                  : 'opacity-0'
              }`}
              style={{ animationDelay: sectionVisible ? `${index * 200}ms` : '0ms' }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className={`text-center mt-16 transition-all duration-1000 ${sectionVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <p className="font-crimson text-lg text-muted-foreground italic">
            Investimento em sua formação é investimento em vidas que você vai transformar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
