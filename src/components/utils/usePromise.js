import { useState, useEffect } from 'react';

const usePromise = (promiseCreator, deps) => {
    // 대기중, 완료, 실패에 대한 상태관리
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      const process = async () => {
        setLoading(true);
        try {
            const response = await promiseCreator();
            setResponse(response);
        } catch (e) {
            setError(e)
        }
        setLoading(false);
      }
      process();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
    
    return [loading, response, error];
}

export default usePromise;