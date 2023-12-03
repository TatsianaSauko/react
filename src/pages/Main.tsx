import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Main() {
  const [highlight, setHighlight] = useState(false);
  const { name, age, email, password, gender, image, country } = useSelector(
    (state: RootState) => state.form,
  );

  useEffect(() => {
    if (name[0]) {
      setHighlight(true);
      setTimeout(() => {
        setHighlight(false);
      }, 5000);
    }
  }, [name]);

  return (
    <div className="wrapper-results-form">
      {name.map((n, index) => {
        const fileType = image[index]
          ? image[index].split(";")[0].split("/")[1]
          : "";
        const downloadLink = image[index]
          ? `data:application/octet-stream;base64,${image[index].split(",")[1]}`
          : "";

        return (
          <div
            key={index}
            className={
              index === 0 && highlight
                ? "results-form-highlight"
                : "results-form"
            }
          >
            <ul className="list-form">
              <li className="title-results-form">Data saved successfully</li>
              <li>Name: {n}</li>
              <li>Age: {age[index]}</li>
              <li>Email: {email[index]}</li>
              <li>Password: {password[index]}</li>
              <li>Gender: {gender[index]}</li>
              <li>Country: {country[index]}</li>
              <li>T&C: true</li>
              <li>Image: </li>
              <li>
                <img className="image" src={image[index]} alt="image" />
              </li>
              {image[index] && (
                <li>
                  <a href={downloadLink} download={`image.${fileType}`}>
                    Download image
                  </a>
                </li>
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
