import Table from "./components/Table";

const T_HEAD = ["이름", "주소"];

const T_BODY = [
  ["정호집", "서울특별시 강북구 수유동"],
  ["재민집", "서울특별시 강북구 미아동"],
  ["도혁집", "서울특별시 강북구 쌍문동"],
];

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Table thead={T_HEAD} tbody={T_BODY} />
    </div>
  );
}

export default App;
