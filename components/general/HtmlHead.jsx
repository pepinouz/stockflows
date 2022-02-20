/*
 *   The html head element
 *   @Author Philippe Pepinouz
 *
 */

import Head from "next/head";

function HtmlHead({ title }) {
  return (
    <Head>
      <title>{ title }</title>
    </Head>
  );
}

export default HtmlHead