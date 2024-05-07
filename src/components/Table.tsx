import React from "react";
type Props = {
  thead: [];
  tbody: [][];
};
const Table = ({ thead, tbody }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>주소</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>하다</td>
          <td>서울특별시 강북구 수유동</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
