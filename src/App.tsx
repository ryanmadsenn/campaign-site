import { Routes, Route, useLocation } from "react-router-dom";
import { atom, useSetAtom } from "jotai";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import { useEffect } from "react";

export const historyAtom = atom({
  currPage: "/",
  prevPage: "",
});

const App = () => {
  const location = useLocation();
  const setHistory = useSetAtom(historyAtom);

  useEffect(() => {
    setHistory(({ currPage, prevPage }) => ({
      currPage: location.pathname !== currPage ? location.pathname : currPage,
      prevPage: location.pathname !== currPage ? currPage : prevPage,
    }));
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
