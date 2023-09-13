import {useEffect, useState} from 'react';

export default function Page() {
    const [thisPort, setThisPort] = useState(0)
    useEffect(() => {
        setThisPort(3005);
        return () => {
          console.log('a');
        }
      }, [])
    return (
        <div className="App">
            <h1>Hello, Next.js!-{thisPort}</h1>
        </div>
    )
}