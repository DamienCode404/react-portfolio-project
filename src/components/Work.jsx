import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Internship in structural bioinformatics US2B CNRS",
    duration: "2 months",
    details:
      "Implementation of tools and web services in structural bioinformatics. These tools are based on WORDPRESS technology for content management and the HMI interface, but also on MySQL technology for databases and PERL/CGI, BASH and R scripts for data processing and task execution.",
  },
  {
    year: 2020,
    title: "Reception agent Saint-Nazaire hospital center (Seasonal Work)",
    duration: "2 months",
    details:
      "Welcome patients and guide them within the hospital, enforce COVID rules, ensure hygiene protocols, and manage the wheelchair inventory",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center pb-7 text-[#001b5e]">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
