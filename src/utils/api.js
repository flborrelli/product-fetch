export const fetchData = async (endpoint, updateState, loader) => {
  try{
    const response = await fetch(endpoint);
    const toJson = await response.json();
    updateState(toJson)
    loader(false)
  }catch(error){
    console.log(error)
  }
};

export const apiEndpoint = 'https://ranekapi.origamid.dev/json/api/produto';