import { useCallback } from "react";
import { useSelector } from "react-redux";


const ValidationError = () => {
    const {error} = useSelector(state=>state.auth);

    const massegError = useCallback(()=>{
        return Object.keys(error).map(name=>{
            const msg = error[name].join(', ');
            return `${name}-${msg}`
        })
    },[error])

  return error !== null && massegError().map(error =>(
        <div className="alert alert-danger p-1 test-start" role="alert" key={error}>
            {error}
        </div>)
  )
}

export default ValidationError