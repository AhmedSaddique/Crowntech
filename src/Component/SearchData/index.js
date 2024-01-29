import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HeadingH6 } from "../Heading";
import { Para12, Para16 } from "../ParaGraph";
import { FaArrowRight } from "react-icons/fa6";
import searchimg from "../../../public/assets/images/choosemain.png";
import axios from "axios";

const SearchData = () => {
    const [serviceinfoData, setServiceinfoData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("/api/serviceinfo");
          setServiceinfoData(response.data.serviceinfos);
        } catch (error) {
          console.error("Error fetching service info data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    const truncateText = (text, maxLength) => {
      return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };
  
    const handleSearchChange = (e) => {
      setSearchInput(e.target.value);
    };
  
    const filteredData = serviceinfoData.filter((item) =>
      item.serviceName.toLowerCase().includes(searchInput.toLowerCase())
    );

  return (
    <>
      <form className="relative border-none mt-6 mb-5">
        <div className="absolute inset-y-0 flex items-center  pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-main"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 bg-primary-white text-black text-sm border-2 focus:outline-none rounded"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearchChange}
          required
        />
        <button
          type="submit"
          className="text-light absolute right-2.5 bottom-2.5 bg-primary-blue100 text-white hover:bg-primary-gray400 transition duration-300 font-medium rounded text-sm px-4 py-2"
        >
          <FaArrowRight size={20} />
        </button>
      </form>
      <div className="max-h-[500px] overflow-auto pr-2">
        {searchInput && (
          filteredData.length === 0 ? (
            <b>No matching results found.</b>
          ) : (
            filteredData.map((service, index) => (
              <div key={index} className="mt-3 mb-6">
                <Link href={`/service/${service.id}`} className="hover:text-black relative">
                  <div className="border p-2 pt-5 mb-2 flex items-center rounded-md shadow cursor-pointer hover:border-primary-blue100 duration-300 transition">
                    <Para16
                      className="rounded-md font-medium bg-white w-20 text-center absolute left-3 -top-4 text-primary-blue100"
                      title="Service"
                    />
                    <div className="flex gap-3 w-11/12">
                      <Image
                        src={`/${service.serviceImage.replace("public/", "")}`}
                        alt={service.serviceName}
                        width={64}
                        height={64}
                        className="rounded-md"
                      />
                      <div>
                        <HeadingH6 title={service.serviceName} />
                        <Para12 title={truncateText(service.serviceText, 160)} />
                      </div>
                    </div>
                    <Link href={`/service/${service.id}`} className="hover:text-black mx-auto">
                      <FaArrowRight size={25} />
                    </Link>
                  </div>
                </Link>
              </div>
            ))
          )
        )}
      </div>
    </>
  );
};

export default SearchData;