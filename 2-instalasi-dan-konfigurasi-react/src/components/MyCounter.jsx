export default function MyCounter({ counter }) {
  return (
    <span style={{ margin: 20 }}>
      {counter == 10 || counter < 0 ? "Done!" : counter}
    </span>
  );
}
