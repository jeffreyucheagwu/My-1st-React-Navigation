import React, { ReactNode } from "react";
import DrawerAppBar from "../../components/Navbar2/NavbarMui";

interface Subject {
  subjectName: string;
  test: number;
  exam: number;
  totalScore: number;
  grade: string;
  remark: string;
}

interface SubjectsList {
  subjects: Subject[];
}

interface User {
  firstName: string;
  lastName: string;
  schoolRegNumber: string;
  passportPhoto: string;
  currentClass: string;
}

interface School {
  name: string;
  schoolLogo: string;
  address: string;
  phoneNumber: string;
  city: string;
  state: string;
  country: string;
}

interface Report {
  user: User;
  school: School;
  year: string;
  term: string;
  TotalScore: number;
  TotalAverage: string;
  Position: string;
  TotalGrade: string;
  Remark: string;
  HmRemark: string;
  subjects: SubjectsList[];
}

interface StudentReport {
  subjects: any;
  Remark: ReactNode;
  TotalGrade: ReactNode;
  Position: ReactNode;
  TotalAverage: ReactNode;
  TotalScore: ReactNode;
  term: ReactNode;
  year: ReactNode;
  school: any;
  user: any;
  report : any;
}

const StudentReport: React.FC<StudentReport> = ({ report }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <DrawerAppBar/>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <img
          src={report.user.passportPhoto}
          alt="Student Passport"
          width="100"
        />
        <div style={{ marginLeft: "20px" }}>
          <h2>
            {report.user.firstName} {report.user.lastName}
          </h2>
          <p>Registration Number: {report.user.schoolRegNumber}</p>
          <p>Class: {report.user.currentClass}</p>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>School Information</h3>
        <img src={report.school.schoolLogo} alt="School Logo" width="100" />
        <p>{report.school.name}</p>
        <p>Address: {report.school.address}</p>
        <p>Phone: {report.school.phoneNumber}</p>
        <p>
          City: {report.school.city}, {report.school.state},{" "}
          {report.school.country}
        </p>
      </div>

      <div>
        <h3>
          Term Report: {report.year} - {report.term}
        </h3>
        <p>
          <strong>Total Score:</strong> {report.TotalScore}
        </p>
        <p>
          <strong>Total Average:</strong> {report.TotalAverage}
        </p>
        <p>
          <strong>Position in Class:</strong> {report.Position}
        </p>
        <p>
          <strong>Total Grade:</strong> {report.TotalGrade}
        </p>
        <p>
          <strong>Teacher's Remark:</strong> {report.Remark}
        </p>
        <p>
          <strong>Headmaster's Remark:</strong> {report.Remark}
        </p>
      </div>

      <h4>Subjects</h4>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Subject
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Test Score
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Exam Score
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Total Score
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Grade</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Remark
            </th>
          </tr>
        </thead>
        <tbody>
          {report.subjects.map((subjectItem: { subjects: any[] }, index: any) =>
            subjectItem.subjects.map((subject, i) => (
              <tr key={i}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {subject.subjectName}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {subject.test}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {subject.exam}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {subject.totalScore}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {subject.grade}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {subject.remark}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentReport;
