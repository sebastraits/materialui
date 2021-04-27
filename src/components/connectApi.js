import { useFetch } from "../hooks/useFetch";

const ConnectApi = (url) => {
  const { data, error, loading } = useFetch(url);

  if (!data) {
    // console.log("data null", data, error, loading);
    return null;
  }
  if (error) {
    
    return <> Error </>;
  }
 
  return data
};

export default ConnectApi;
