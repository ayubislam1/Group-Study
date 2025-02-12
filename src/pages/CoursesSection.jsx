import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CoursesSection = () => {
  // ... (keep assignments array the same)
  const assignments = [
    {
      title: "Build a Full-Stack Web Application",
      description:
        "Collaborate with your friends to build a full-stack web app using the MERN stack.",
      deadline: "2 weeks",
      difficulty: "Intermediate",
      posted: "3 days ago",
      image: "https://i.ibb.co.com/WWZtPRB0/carlos-muza-hpj-Sk-U2-UYSU-unsplash.jpg", // Update with actual image path
    },
    {
      title: "Data Analysis with Python",
      description:
        "Analyze large datasets with Python and perform various types of data visualizations.",
      deadline: "1 week",
      difficulty: "Advanced",
      posted: "1 week ago",
      image: "https://i.ibb.co.com/Kc17RV20/markus-spiske-hv-Sr-CVec-VI-unsplash.jpg", // Update with actual image path
    },
    {
      title: "React Project - Task Manager App",
      description:
        "Create a task manager app using React, Redux, and Firebase.",
      deadline: "3 weeks",
      difficulty: "Beginner",
      posted: "5 days ago",
      image: "https://i.ibb.co.com/N2PnsYPg/luke-chesser-LG8-Toaw-E8-WQ-unsplash.jpg", // Update with actual image path
    },
    // Add more assignments here...
  ];

  return (
    <section className="container mx-auto p-4 ">
      <h2 className="text-3xl font-bold mb-8 text-center">Group Study Assignments</h2>

      <p className="text-lg mb-8">
        {/* Keep description the same */}
      </p>

      <div className="md:flex gap-6 pb-4 container justify-evenly space-y-5 md:-space-y-0">
        {assignments.map((assignment, index) => (
          <motion.div
            key={index}
           
            className="md:w-[450px]" // Fixed width for consistent sizing
          >
            <Card className="p-6 hover:shadow-lg h-full flex flex-col transition-shadow duration-300 ">
              <img
                src={assignment.image}
                alt={assignment.title}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              
              <div className="flex justify-between items-start mb-4 gap-2">
                <h3 className="font-bold text-xl line-clamp-2 flex-1">
                  {assignment.title}
                </h3>
                <Badge 
                 variant={assignment.difficulty.toLowerCase() === "beginner" || 
                    assignment.difficulty.toLowerCase() === "intermediate" || 
                    assignment.difficulty.toLowerCase() === "advanced" 
                    ? assignment.difficulty.toLowerCase() 
                    : "beginner"}

                  className="shrink-0"
                >
                  {assignment.difficulty}
                </Badge>
              </div>

              <div className="mb-4 flex-1">
                <p className="text-sm text-gray-600 line-clamp-3">
                  {assignment.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex justify-between items-center text-sm mb-3">
                  <span className="text-gray-600">Posted:</span>
                  <span className="font-medium">{assignment.posted}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Deadline: {assignment.deadline}
                  </span>
                  <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition text-sm">
                    Join Now
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection