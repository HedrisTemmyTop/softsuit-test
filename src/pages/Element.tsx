import Elements from "../components/Main/ElementLinks/Elements";
import "./_index.scss";

const Element = () => {
  console.log("hello");
  return (
    <main className="main-app">
      <div className="main-app__container">
        <Elements />
      </div>
    </main>
  );
};

export default Element;
