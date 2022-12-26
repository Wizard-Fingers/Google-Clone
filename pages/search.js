import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";

export default function search({ results }) {
  console.log(results);
  return (
    <div>
      {/*Header with title*/}
      <Head>
        <title>Google Search Page by Art Beckett</title>
      </Head>
      {/*Search Header*/}
      <SearchHeader />

      {/*Search Results*/}
    </div>
  );
}

export async function getServerSideProps(context) {
   const mockData = true //this is so that I could style my components without having to wait for the API to respond to my request
  const data = mockData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${context.query.term}${context.query.searchType && "&searchType=image"}`
  ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
