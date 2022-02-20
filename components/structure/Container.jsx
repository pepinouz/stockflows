/*
 *   The Container component start with the default padding
 *   on each sides and on top and bottoms.
 *   @Author Philippe Pepinouz
 *
 */

function Container({ padding, children }) {
  if (padding === "sm") {
    return <div className="container py-12 px-8">{children}</div>;
  }

  return <div className="container py-12 px-8">{children}</div>
}

export default Container;
