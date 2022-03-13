/*
 *   This is the table components
 *   It receives two props, one is the headers as a list of objects
 *   Headers object = {
 *      key: 'name',
 *      dataIndex : 'name',
 *      title: 'Name'
 *   }
 *   The objects are made of a unique key, a dataindex for future filtering options
 *   and a title to be display
 *   It also receives a list of rows as object
 *   Row object = {
 *      key: ''
 *      // every data in the row with the dataIndex as key ex:
 *      name: 'Philippe'
 *   }
 *   @Author Philippe Pepinouz
 *
 */

function Table({ headers, rows }) {
  // Create the table header
  let tableHeader = [];
  headers.map((col) => {
    tableHeader.push(
      <th
        scope="col"
        className="py-3 px-6 text-m font-medium text-left font-main text-heading-primary uppercase dark:text-gray-400"
      >
        {col.title}
      </th>
    );
  });

  // Create the table rows
  let tableRows = [];
  // If we have rows
  if (rows) {
    rows.map((row) => {
      let cells = [];
      // Create a cell for every value in the object
      for (const [key, value] of Object.entries(row)) {
        console.log(row)
        cells.push(
          <td className="py-4 px-6 text-sm font-main text-gray-500 whitespace-nowrap dark:text-gray-400">
            {value}
          </td>
        );
      }
      tableRows.push(
        <tr className="bg-white border-b font-main dark:bg-gray-800 dark:border-gray-700">
          {cells}
        </tr>
      );
    });
  } else {
    tableRows.push("No data");
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md sm:rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>{tableHeader}</tr>
              </thead>
              <tbody>{tableRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
