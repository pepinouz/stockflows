/*
 *   The Base components his the skeleton of an app page
 *   It can be default (no type provided) and will return a page
 *   with a sidebar and a container on the right
 *
 *   If the type is public, it will return a page with no sidebar
 *   @Author Philippe Pepinouz
 *
 */

import Container from "./Container";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function Base({ type, children }) {
  // Return th public layout, no sidebar navigation
  if (type === "public") {
    return <Container className="bg-cyan-600">{children}</Container>;
  }
  // Return the app layout
  return (
    <div className="flex flex-row">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar/>
        <Container className="w-4/5">{children}</Container>
      </div>
    </div>
  );
}

export default Base;
