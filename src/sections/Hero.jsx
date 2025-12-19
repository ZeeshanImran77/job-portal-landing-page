import React, { useState } from "react";
import { Search } from "lucide-react";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import { jobs as allJobs } from "../data/jobs";
import JobCard from "../components/JobCard";

const Hero = () => {
  const locations = [
    { label: "Karachi", value: "karachi" },
    { label: "Lahore", value: "lahore" },
    { label: "Islamabad", value: "islamabad" },
    { label: "United states", value: "USA" },
  ];
  const [filteredJobs, setFilteredJobs] = useState(allJobs);

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
          <h1>Unlock Your Next Opportunity</h1>
          <h3 className="mb-8">
            Explore thousands of job listings tailored to your skills.
          </h3>
          <SearchBar
            placeholder="Job Title, Company, or Keywords"
            locations={locations}
            onSearch={({ searchText, selectedLocation }) =>
              handleSearch(searchText, selectedLocation)
            }
          />
          ;
        </div>
      </section>

      <div className="bg-surface-gray py-section pt-3">
        {jobSections.map((section) => (
          <section key={section} className="max-w-7xl mx-auto px-4 mt-12 ">
            <div className="flex gap-3 items-baseline mb-4 justify-between md:justify-start">
              <h2 className="text-2xl md:text-3xl font-medium">
                {section} Jobs
              </h2>
              <a
                href="#"
                className="text-blue-400 text-sm md:text-lg underline font-medium hover:no-underline"
              >
                See {section} Jobs
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {filteredJobs
                .filter((job) => job.category === section)
                .map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Hero;
