// components/JobCard.jsx
import React from "react";
import { MapPin, Timer } from "lucide-react";
import Button from "./Button";

const JobCard = ({ job }) => {
  return (
    <div className="border border-slate-200 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      {job.promoted && (
        <span className="text-xs mb-2 inline-block font-semibold text-white bg-blue-600 px-2 py-1 rounded">
          Promoted
        </span>
      )}
      <h4 className="font-medium  capitalize mb-0">{job.title}</h4>
      <p className="text-sm text-gray-500">{job.company}</p>
      <p className="flex items-center gap-1 text-md text-gray-400 m-0">
        <MapPin size={18} />
        {job.location}
      </p>
      <p className="text-sm text-gray-400 m-0 mt-1">
        <Timer className="inline" size={18} />
        {job.posted} |{" "}
        <span className="text-brand-blue">{job.applicants} applicants</span>
      </p>
      <Button children="Apply Now" className="w-full mt-4" />
    </div>
  );
};

export default JobCard;
