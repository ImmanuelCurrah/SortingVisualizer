import SecondBar from "./SecondBar";

export default function Bar(props) {
  let amount = [];
  for (let i = 0; i < props.number; i++) {
    amount.push(1);
  }
  return (
    <div>
      <p>{props.number}</p>
      {amount.map((item, i) => {
        return (
          <div key={i}>
            <SecondBar />
          </div>
        );
      })}
    </div>
  );
}
