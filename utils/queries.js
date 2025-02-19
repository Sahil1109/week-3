// Explanation about function what it's purpose and what argument does it take and finally what does it returns
// ** For all the methods in whole project and also for the variables
async function fetchDocs(page = 1, routes = []) {
    const response = await Client().query('', { pageSize: 100, lang: '*', page });
    const allRoutes = routes.concat(response.results);
    if (response.results_size + routes.length < response.total_results_size) {
      return fetchDocs(page + 1, allRoutes);
    }
    return [...new Set(allRoutes)];
  };
  
  /** Fetches all Prismic documents and filters them (eg. by document type).
   *  In production, you would probably query documents by type instead of filtering them.
  **/
  export const queryRepeatableDocuments = async (filter) => {
    const allRoutes = await fetchDocs()
    return allRoutes.filter(filter)
    // closing bracket was missing
  }