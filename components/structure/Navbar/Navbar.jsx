/*
 *   This is the top navbar of the app, it can contain navigation links
 *   It contains the user button from clerk in the right
 *   @Author Philippe Pepinouz
 *
 */

import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className="w-full h-14 sticky shadow-sm top-0 bg-slate-200 flex flex-row justify-end py-3 px-5">
      <UserButton />
    </div>
  );
}

export default Navbar;
