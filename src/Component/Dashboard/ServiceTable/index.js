
import Button from "@/Component/Button";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ServiceTable = () => {
  const [serviceinfo, setserviceinfo] = useState([]);
  const [servicecat, setservicecat] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(5); // Initial value of 10 entries per page
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOption, setFilterOption] = useState("All"); // Initial filter option
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchServicecat = async () => { 
      try {
        const response = await axios.get(`/api/servicecategory`);
        setservicecat(response.data.servicecategories);
        console.log("asdasd" ,response.data.servicecategories);
      } catch (error) {
        console.error("Error getting service info:", error);
      }
    };

    fetchServicecat();
  }, []);

  useEffect(() => {
    const fetchServiceInfo = async () => {
      try {
        const response = await axios.get(`/api/serviceinfo`);
        setserviceinfo(response.data.serviceinfos);
        console.log(response.data.serviceinfos);
      } catch (error) {
        console.error("Error getting service info:", error);
      }
    };

    fetchServiceInfo();
  }, []);

  const handleDelete = async (serviceInfoId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this service item?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await axios.delete(`/api/serviceinfo/${serviceInfoId}`);
      setserviceinfo((prevServiceInfo) =>
        prevServiceInfo.filter((service) => service.id !== serviceInfoId)
      );
    } catch (error) {
      console.error("Error deleting service info:", error);
    }
  };

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;

  const filteredServiceinfo =
    filterOption === "All"
      ? serviceinfo
      : serviceinfo.filter((service) =>
          service.category.catName === filterOption
        );

  // Filter serviceinfo based on search text
  const filteredServiceinfoBySearch = filteredServiceinfo.filter(
    (service) =>
      service.serviceName.toLowerCase().includes(searchText.toLowerCase()) ||
      service.category.catName.toLowerCase().includes(searchText.toLowerCase())
  );

  const serviceinfoSlice = filteredServiceinfoBySearch.slice(startIndex, endIndex);

  const handleEntriesPerPageChange = (event) => {
    const selectedEntriesPerPage = parseInt(event.target.value);
    setEntriesPerPage(selectedEntriesPerPage);
    setCurrentPage(1);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    setCurrentPage(1);
  };

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="my-2 flex sm:flex-row flex-col">
          <div className="flex flex-row mb-1 sm:mb-0">
            <div className="relative">
              <select
                className="h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={entriesPerPage}
                onChange={handleEntriesPerPageChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative">
            <select
                className="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                value={filterOption}
                onChange={handleFilterChange}
              >
                <option value="All">All</option>
                {servicecat.map((servicecate , index1)=>(
                <>
                <option key={index1} value={servicecate.catName}>
                  {servicecate.catName}
                </option>
                    </>
                ))}
                
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="block relative">
            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current text-gray-500"
              >
                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
              </svg>
            </span>
            <input
              placeholder="Search"
              value={searchText}
                onChange={handleSearchInputChange}
              className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>
        <table className="min-w-full leading-normal">
            
        </table>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 max-h-[30rem] overflow-y-auto overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    CatId
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Catname{" "}
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    InfoId
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {" "}
                    InfoName{" "}
                  </th>

                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {" "}
                    Created at
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {" "}
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {serviceinfoSlice.map((servicein, index) => (
                  <tr key={index}>
                    <>
                      <td className="px-5 py-5 bg-white text-sm" >
                        <p className="text-gray-900 whitespace-no-wrap">
                          {servicein.category.id}
                        </p>
                      </td>

                      <td className="px-5 py-5 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {servicein.category.catName}
                        </p>
                      </td>

                      <td className="px-5 py-5 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {servicein.id}
                        </p>
                      </td>

                      <td className="px-5 py-5 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <Image
                              className="w-full h-full rounded-full"
                              width={200}
                              height={200}
                              src={`/${servicein.serviceImage.replace(
                                "public/",
                                ""
                              )}`}
                              alt={`/${servicein.serviceImage.replace(
                                "public/",
                                ""
                              )}`}
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {servicein.serviceName}
                            </p>
                          </div>
                        </div>
                      </td>
                    </>

                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {servicein.createdAt}
                      </p>
                    </td>

                    <td className="px-5 py-5 bg-white text-sm flex gap-2">
                      <Button
                        className={"bg-primary-blue100 text-white"}
                        text={"Edit"}
                      />
                      <Button
                        className={"bg-red-600 text-white"}
                        onClick={() => handleDelete(servicein.id)}
                        text={"Delete"}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>

            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing {startIndex + 1} to{" "}
                {Math.min(endIndex, serviceinfo.length)} of {serviceinfo.length}{" "}
                Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button
                  className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                  onClick={() =>
                    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <button
                  className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                  onClick={() =>
                    setCurrentPage((prevPage) =>
                      Math.min(
                        prevPage + 1,
                        Math.ceil(serviceinfo.length / entriesPerPage)
                      )
                    )
                  }
                  disabled={
                    currentPage ===
                    Math.ceil(serviceinfo.length / entriesPerPage)
                  }
                >
                  Next
                </button>
              </div>
            </div>

      </div>
    </div>
  );
};
export default ServiceTable;
