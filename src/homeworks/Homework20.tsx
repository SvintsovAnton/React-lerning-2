import { v4 } from "uuid";
import "./styles.css";

function HomeWork20() {
  let firstName: string = "John";
  let lastName: string = "Doe";
  let job: string = "Software Engineer";
  let isManager: boolean = false;
  let email: string = "john.doe@google.com";
  let programLangs: string[] = ["JavaScript ", "Python ", "Machine Learning"];

  const checkManager = () => {
    if ({ isManager }) {
      return "Manager";
    } else {
      return "Employee";
    }
  };

  const langsElements = programLangs.map((lang: string) => {
    return (
      <li key={v4()} className="program-lang">
        {lang}
      </li>
    );
  });

  return (
    <div className="profile-card">
      <h2>First name: {firstName}</h2>
      <p>Last name: {lastName}</p>
      <p>Job: {job}</p>
      <p>Position: {checkManager()}</p>
      <p>email: {email}</p>
      <p>{langsElements}</p>
    </div>
  );
}

export default HomeWork20;
