import React from "react";
import dictionaryStyles from "../styles/dictionary.module.css";

export default function Dictionary({
  dictionary,
}: {
  dictionary: Map<string, string>;
}): JSX.Element {
  console.log("making dictionary");
  console.log(dictionary);
  return (
    <table>
      {Array.from(dictionary).map(([key, value]) => (
        <tr className={dictionaryStyles.dictionaryRow} key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ))}
    </table>
  );
}
