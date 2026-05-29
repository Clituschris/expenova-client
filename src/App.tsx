import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import MainRouter from "./routes/MainRouter";
import { ToastProvider } from "./common/Toast";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <ToastProvider>
            <MainRouter />
          </ToastProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;