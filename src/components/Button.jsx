export default function Button({ value, active }) {
  return <button className={`btn ${active ? active : ""}`}>{value}</button>;
}
