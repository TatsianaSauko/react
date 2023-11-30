import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Main() {
  const [highlight, setHighlight] = useState(false);
  const { name, age, email, password, gender, image, country } = useSelector(
    (state: RootState) => state.form,
  );

  useEffect(() => {
    if (name) {
      setHighlight(true);
      setTimeout(() => {
        setHighlight(false);
      }, 5000);
    }
  }, [name]);

  const fileType = image ? image.split(";")[0].split("/")[1] : "";
  const downloadLink = image
    ? `data:application/octet-stream;base64,${image.split(",")[1]}`
    : "";

  return (
    <>
      <div
        className="results-form"
        style={highlight ? { border: "3px solid green" } : {}}
      >
        {name && (
          <ul className="list-form">
            Data saved successfully
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Email: {email}</li>
            <li>Password: {password}</li>
            <li>Gender: {gender}</li>
            <li>Country: {country}</li>
            {image && (
              <li>
                <a href={downloadLink} download={`image.${fileType}`}>
                  Download image
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </>
  );
}
