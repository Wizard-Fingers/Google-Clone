export default  {
   //give me a bunch of random results from a search called "Art" from a google search as a json object
   "kind": "customsearch#search",
   "url": {
      "type": "application/json",
   },
   "queries": {
      "request": [
         {
            "title": "Google Custom Search - Art",
            "totalResults": "1000000",
            "searchTerms": "Art",
            "count": 10,
            "startIndex": 1,
            "inputEncoding": "utf8",
            "outputEncoding": "utf8",
            "safe": "off",

         }
      ]
   },
}