"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Advocate, assertIsAdvocate } from "@/shared/types";

export default function Home() {
  const [advocates, setAdvocates] = useState<Array<Advocate>>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Array<Advocate>>([]);
  const [searchText, setSearchText] = useState<string>("")

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      if (!response.ok) {
        console.error(response);
        return;
      }

      response.json().then((jsonResponse) => {
        const advocates = jsonResponse.data;

        if (Array.isArray(advocates) && advocates.every(assertIsAdvocate)){
          setAdvocates(advocates);
          setFilteredAdvocates(advocates);
        } else {
          console.log("API response failed Advocate type assertion", advocates);
        }
      });
    });
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchText(e.target.value);

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
    setSearchText("");
  };

  return (
    <main className="page-container">
      <div className="content-wrapper">
        <h1 className="page-title">Solace Advocates</h1>

        <div className="mb-8 space-x-2">
          <input className="search-input" onChange={onChange} value={searchText}/>
          <button className="search-button" onClick={onClick}>Reset Search</button>
        </div>

        <div className="overflow-x-auto">
          <table className="directory-table">
            <thead>
              <tr>
                <th className="table-header">First Name</th>
                <th className="table-header">Last Name</th>
                <th className="table-header">City</th>
                <th className="table-header">Degree</th>
                <th className="table-header">Specialties</th>
                <th className="table-header">Years of Experience</th>
                <th className="table-header">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdvocates.map((advocate, i) => {
                return (
                  <tr key={i} className="table-row">
                    <td>{advocate.firstName}</td>
                    <td>{advocate.lastName}</td>
                    <td>{advocate.city}</td>
                    <td>{advocate.degree}</td>
                    <td className="py-4">
                      <ul className="list-disc">
                        {advocate.specialties.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </td>
                    <td>{advocate.yearsOfExperience}</td>
                    <td>{advocate.phoneNumber}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="flex justify-center items-center py-4 space-x-4">
              <a href="#" className="text-blue-500 px-4 py-2 border border-blue-500 rounded-lg ">
                Previous
              </a>
              <a href="#" className="text-blue-500 px-4 py-2 border border-blue-500 rounded-lg ">
                Next 
              </a>
          </div>
        </div>
      </div>
    </main>
  );
}

