import React from "react";
import dictionaryStyles from "../styles/dictionary.module.css";

export default function Dictionary({
  dictionary,
}: {
  dictionary: Map<string, string>;
}): JSX.Element {
  return (
    <table>
      <tbody>
        {Array.from(dictionary).map(([key, value]) => (
          <tr className={dictionaryStyles.dictionaryRow} key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
