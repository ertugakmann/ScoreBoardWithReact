import "./App.css";
import DefaultBoard from "./components/DefaultBoard";
import SavedCounts from "./components/SavedCounts";
import { useState, useEffect, useSyncExternalStore } from "react";
import PlsSaveCount from "./components/PlsSaveCount";
import axios from "axios";

function App() {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [boards, setBoards] = useState([]);
  const [log, setLog] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:3000/boards",
        });
        setBoards(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // Boş bağımlılık listesi, bu etkileşimin yalnızca bir kez çalışmasını sağlar.

  const changeCountFirst = (e) => {
    {
      e.target.innerHTML === "+"
        ? setFirstCount(firstCount + 1)
        : setFirstCount(firstCount - 1);
    }
  };

  const changeCountSecond = (e) => {
    {
      e.target.innerHTML === "+"
        ? setSecondCount(secondCount + 1)
        : setSecondCount(secondCount - 1);
    }
  };

  const resetCounts = () => {
    setFirstCount(0);
    setSecondCount(0);
  };

  const saveButton = () => {
    {
      inputValue !== "" ? post() : warn();
    }
    setInputValue("");
    setFirstCount(0);
    setSecondCount(0);
  };

  const warn = () => {
    alert("please enter a title");
  };

  const post = async () => {
    await axios({
      method: "post",
      url: "http://localhost:3000/boards",
      data: {
        id: Math.floor(Math.random() * 99999),
        firstCount,
        secondCount,
        title: inputValue,
      },
    });
    const fetchDataTwo = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:3000/boards",
        });
        setBoards(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataTwo();
  };

  return (
    <>
      <DefaultBoard
        firstCount={firstCount}
        secondCount={secondCount}
        changeCountFirst={changeCountFirst}
        changeCountSecond={changeCountSecond}
        resetCounts={resetCounts}
        saveButton={saveButton}
        inputValue={inputValue}
        setInputValue={setInputValue} // setInputValue fonksiyonu props olarak geçirildi
      />
      {boards.length === 0 ? <PlsSaveCount /> : <SavedCounts boards={boards} />}
    </>
  );
}

export default App;
