import React from "react";
type Props = {
  thead: string[];
  tbody: string[][];
};
const Table = ({ thead, tbody }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          {thead.map((th) => (
            <th>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tbody.map((tr) => {
          return (
            <tr>
              {tr.map((td) => {
                return <td>{td}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
