import React, { useState } from "react";
import { Search } from "lucide-react";
import Button from "../components/Button";
import Select from "./Select";

const SearchBar = ({
  placeholder = "Search...",
  showLocation = true,
  locations = [],
  onSearch,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.({ searchText, selectedLocation });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-stretch gap-3 bg-white p-4 rounded-xl shadow-lg"
    >
      {/* Search Input */}
      <input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="
          flex-1 rounded-lg px-4 py-3 border border-slate-300 md:border-0
          text-lg font-medium text-brand-dark
          placeholder:text-brand-dark/60
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />

      {/* Select Location */}
      {showLocation && (
        <div
          className="
            relative flex-1 border border-slate-300 rounded-lg md:border-0 md:flex-none md:w-48 md:pl-4
            md:before:absolute md:before:inset-y-0 md:before:left-0
            md:before:w-[2px] md:before:bg-slate-300
            md:before:content-['']
          "
        >
          <Select
            placeholder="Select Location"
            options={locations}
            value={selectedLocation}
            onChange={setSelectedLocation}
          />
        </div>
      )}

      {/* Button */}
      <Button
        variant="primary"
        type="submit"
        className="flex-1 md:flex-none md:w-36"
        icon={<Search size={22} />}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
