import Head from "next/head";
import SearchHeader from "../components/SearchHeader";


export default function search() {
  return (
     <div>
        {/*Header with title*/}
        <Head>
        <title>Google Search Page by Art Beckett</title>
        </Head>
        {/*Search Header*/}
<SearchHeader/>

         {/*Search Results*/}
     </div>
  )
}
