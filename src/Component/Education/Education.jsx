import React from "react";
import SectionHeader from "../../CommonSection/SectionHeader";

const Education = () => {
  return (
    <div>
      <SectionHeader
        tittle={`Education`}
        subTittle={`Academic`}
      ></SectionHeader>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Passing Year</th>
              <th>Exam Name</th>
              <th>Institute</th>
              <th>Board</th>
              <th>Group</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>2018</th>
              <td>SSC</td>
              <td>Bagerhat Govt. high school, Bagerhat</td>
              <td>Jessor</td>
              <td>Commerce</td>
            </tr>
            {/* row 2 */}
            <tr className="bg-base-200">
              <th>2020</th>
              <td>HSC</td>
              <td>Azam khan commerce collage , khulna</td>
              <td>Jessor</td>
              <td>Commerce</td>
            </tr>
            {/* row 3 */}
            <tr className="bg-base-200">
              <th>(2nd Year)</th>
              <td>Honours</td>
              <td>National university of Bangladesh</td>
              <td>Gazipur</td>
              <td>Accounting</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;
