import "./App.css";
import DefaultBoard from "./components/DefaultBoard";
import SavedCounts from "./components/SavedCounts";
import { useState, useEffect, useSyncExternalStore } from "react";
import PlsSaveCount from "./components/PlsSaveCount";
import axios from "axios";
import { Box, Stack } from "@mui/material";

function App() {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [boards, setBoards] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //todo: refactor axios.get()
        const response = await axios({
          method: "get",
          url: "http://localhost:3000/boards",
        });
        setBoards(response.data);
        setRefresh(false);
      } catch (error) {
        console.log(error);
      }
    };

    refresh && fetchData();
  }, [refresh]);

  const createChangeCountFunction = (setCountFunction, value) => (e) => {
    e.target.innerHTML === "+"
      ? setCountFunction((prevState) => prevState + value)
      : setCountFunction((prevState) => prevState - value);
  };

  const changeCountFirst = createChangeCountFunction(setFirstCount, 1);
  const changeCountSecond = createChangeCountFunction(setSecondCount, 1);

  const resetCounts = () => {
    setFirstCount(0);
    setSecondCount(0);
  };

  const saveButton = () => {
    if (!inputValue) return warn();
    post();
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
    setInputValue("");
    setFirstCount(0);
    setSecondCount(0);
    setRefresh(true);
  };

  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <DefaultBoard
          firstCount={firstCount}
          secondCount={secondCount}
          changeCountFirst={changeCountFirst}
          changeCountSecond={changeCountSecond}
          resetCounts={resetCounts}
          saveButton={saveButton}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        {boards.length === 0 ? (
          <PlsSaveCount />
        ) : (
          <SavedCounts boards={boards} />
        )}
      </Stack>
    </Box>
  );
}

export default App;
