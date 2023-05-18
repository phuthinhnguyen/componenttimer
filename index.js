const {useState ,useEffect,createContext, useContext,useRef, useCallback,useMemo } = React;

const App = () => {
  const [count,setCount] = useState(10);
  useEffect(()=>{
    const settime = setTimeout(()=>setCount(count=>count-1),1000)
    if (count<0){
      clearTimeout(settime);
      alert("Time's up")
      setCount(0)
    }
  })
  return (
    <div>
      <h2>Count down form {count}</h2>
    </div>
  );
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);