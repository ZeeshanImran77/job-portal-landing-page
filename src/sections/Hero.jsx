import React, { use, useEffect, useState } from "react";
import { Search } from "lucide-react";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import { jobs as allJobs } from "../data/jobs";
import JobCard from "../components/JobCard";
import { AnimatePresence, motion } from "framer-motion";
import WhyChooseUs from "./WhyChooseUs";

const Hero = () => {
  const locations = [
    { label: "Karachi", value: "karachi" },
    { label: "Lahore", value: "lahore" },
    { label: "Islamabad", value: "islamabad" },
    { label: "United states", value: "USA" },
  ];
  const [filteredJobs, setFilteredJobs] = useState([]);
  useEffect(() => {
    setFilteredJobs(allJobs);
  }, []);

  const handleSearch = (query, location) => {
    const lowerQuery = query.toLowerCase();
    const lowerLocation = location.toLowerCase();
    setFilteredJobs(
      allJobs.filter(
        (job) =>
          (job.title.toLowerCase().includes(lowerQuery) ||
            job.company.toLowerCase().includes(lowerQuery)) &&
          (location ? job.location.toLowerCase().includes(lowerLocation) : true)
      )
    );
  };

  const jobSections = ["Featured", "Recommended", "Latest"];

  return (
    <>
      <section className="w-full bg-gradient-to-br from-sky-100 to-blue-200 py-16 px-4">
        <div className="mx-auto max-w-5xl text-center">
          {/* <h1>Unlock Your Next Opportunity</h1> */}
          <AnimatePresence>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Unlock Your Next Opportunity
            </motion.h1>
            <motion.h3
              className="mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore thousands of job listings tailored to your skills.
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <SearchBar
                placeholder="Job Title, Company, or Keywords"
                locations={locations}
                onSearch={({ searchText, selectedLocation }) =>
                  handleSearch(searchText, selectedLocation)
                }
              />
            </motion.div>
          </AnimatePresence>
          ;
        </div>
      </section>

      <div className="bg-surface-gray py-section pt-3">
        {jobSections.map((section, index) => (
          <motion.section
            key={section}
            className="max-w-7xl mx-auto px-4 mt-12"
            initial={{ opacity: 0, y: 20 }} // start hidden
            animate={{ opacity: 1, y: 0 }} // animate to visible
            transition={{ duration: 0.6, delay: index * 0.2 }} // stagger sections
          >
            <div className="flex gap-3 items-baseline mb-4 justify-between md:justify-start">
              <h2 className="text-2xl md:text-3xl font-medium">
                {section} Jobs
              </h2>
              <a
                href="#"
                className="text-blue-400 text-sm md:text-lg underline font-medium hover:no-underline"
              >
                See Jobs
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {filteredJobs
                .filter((job) => job.category === section)
                .map((job) => (
                  <motion.div
                    key={job.id}
                    className="w-full"
                    whileHover={{ scale: 1.05 }} // only hover animation
                    transition={{ duration: 0.2 }}
                  >
                    <JobCard job={job} />
                  </motion.div>
                ))}
            </div>
          </motion.section>
        ))}
      </div>
    </>
  );
};

export default Hero;
