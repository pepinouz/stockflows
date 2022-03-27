function DropDownMenu({ show, menuItems, ref, onClick }) {
  console.log(menuItems);
  return (
    <>
      {show ? (
        <div
          ref={ref}
          id="dropdown"
          className="absolute top-14 left-52 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        >
          <ul className="py-1" aria-labelledby="dropdownButton">
            {menuItems.map((menuItem) => (
              <li>
                <a
                  onClick={() => onClick(menuItem.action, menuItem.id)}
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  {menuItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default DropDownMenu;
