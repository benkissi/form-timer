import React, { useState, useEffect } from "react";
import Input from "./components/input";
import TextArea from "./components/textarea";
import Button from "./components/button";

import styles from "./App.module.css";

function App() {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [bio, setBio] = useState("");
  const [disabled, setDisabled] = useState(true)

  const [duration, setDuration] = useState(0);
  const [timer, setTimer] = useState(null);

  const [formError, setError] = useState("");

  // useEffect(() => {
  //   if (!timer) {
  //     startTimer()
  //   }

  //   return () => clearInterval(timer);
  // }, [timer]);

  useEffect(() => {
    let timeOut;
    if (formError) {
      timeOut = setTimeout(() => {
        setError("");
      }, 1000);
    }

    return () => clearTimeout(timeOut);
  }, [formError]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "institution":
        setInstitution(value);
        break;
      case "bio":
        setBio(value);
        break;
      default:
        break;
    }
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  const startTimer = () => {
    setTimer(
      setInterval(() => {
        setDuration((prevState) => prevState + 1);
      }, 1000)
    );

    setDisabled(false)
  }

  const resetFields = () => {
    setName("");
    setInstitution("");
    setBio("");
    setDuration(0);
    setDisabled(true)
  };

  const handleSubmit = () => {
    const isValid = name && institution && bio;

    if(disabled) {
      setError("Start timer");
      return;
    }

    if (!isValid) {
      setError("Fill in all fields");
      return;
    }

    stopTimer();
    alert(
      `Your details \n Name: ${name} \n Institution: ${institution} \n Bio: ${bio} \n Duration: ${duration}`
    );
    resetFields();
  };

  return (
    <div className={styles.app}>
      <div className={styles.title}>Duration: {duration} seconds</div>
      <p>How long will it take you to fill the form</p>
      <p className={styles.error}>{formError}</p>
      <div className={styles.form}>
        <Input
          name="name"
          disabled={disabled}
          label="Name"
          handleChange={onChangeHandler}
          value={name}
        />
        <Input
          name="institution"
          disabled={disabled}
          label="Institution"
          handleChange={onChangeHandler}
          value={institution}
        />
        <TextArea
          name="bio"
          disabled={disabled}
          label="Bio"
          handleChange={onChangeHandler}
          value={bio}
        />
        <div className={styles.button_container}>
          <Button text="Submit" handleClick={handleSubmit} />
          <p onClick={startTimer}>Start timer</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
