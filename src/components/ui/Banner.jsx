"use client";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { ImagesSlider } from "./ImagesSlider";

export function Banner() {
  const images = [
    "https://www.shutterstock.com/image-photo/happy-international-students-friends-sitting-260nw-2330237605.jpg",
    "https://www.shutterstock.com/image-photo/team-young-college-students-working-600nw-2111421299.jpg",
    "https://media.istockphoto.com/id/1358014313/photo/group-of-elementary-students-having-computer-class-with-their-teacher-in-the-classroom.jpg?s=612x612&w=0&k=20&c=3xsykmHXFa9ejL_sP2Xxiow7zdtmKvg15UxXFfgR98Q=",
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{ opacity: 0, y: -80, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-500 py-4">
          <Typewriter
            words={[
              "Collaborate and Learn Together in Real-Time.",
              "Track Your Progress and Stay on Top of Assignments.",
              "Join the Future of Online Education and Group Study.",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.p>

      
        <Link
          to={"/login"}
          className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:scale-105"
        >
          <span>Learn More</span>
        </Link>

      </motion.div>
    </ImagesSlider>
  );
}
