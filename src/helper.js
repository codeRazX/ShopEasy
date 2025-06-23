export const fetching = async(endpoint) => {
  try{
    const res = await fetch(endpoint);

    if(!res.ok){
      throw new Error("Something went terribly wrong");
    }
    const data = await res.json();
    return data;
    
  }
  catch(error){
    console.log(error);
    throw error;
  }
}