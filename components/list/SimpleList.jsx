/*
 *  elements = {
 *     avatar: "",
 *     title: "",
 *     description: ""
 *  }
 *
 */

function SimpleList({ elements, onClick }) {
  console.log(elements);
  if (elements === undefined) {
    console.log("No elements pass to the list");
    return "No elements";
  }
  // Create all the rows of the list
  const ListRows = () => {
    let rows = [];
    elements.forEach((element, index) => {
      let rowColor;
      if (index % 2 == 0) {
        rowColor = "bg-white";
      } else {
        rowColor = "bg-slate-100";
      }

      rows.push(
        <div
          avatar={element.avatar}
          title={element.title}
          onClick={onClick}
          className={"grid grid-cols-2 items-center p-2 hover:bg-slate-200 cursor-pointer " + rowColor}
        >
          <img
            className="h-12 w-12 object-contain rounded-full pointer-events-none"
            src={element.avatar}
          />
          <div className="pointer-events-none">
            <p className=" text-slate-700 text-sm pointer-events-none">{element.title}</p>
            <p className=" text-slate-500 text-xs pointer-events-none">{element.description}</p>
          </div>
        </div>
      );
    });

    return rows;
  };

  return (
    <div className="shadow rounded-lg w-full">
      <ListRows />
    </div>
  );
}

export default SimpleList;
