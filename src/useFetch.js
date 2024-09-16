import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, {signal:abortCont.signal})
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if(err.name==='AbortErr'){
          console.log('fetch aborted');
        }else{
          setIsLoading(false);
        setError(err.message);
        }
        
      })
    }, );
    return ()=>abortCont.abort();
  }, [url])

  return { data, isLoaded, error };
}
 
export default useFetch;