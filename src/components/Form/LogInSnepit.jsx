import React , {useEffect , useState }  from 'react'
import {fetchInitData} from '../../APIs/APIsFunction.js'
import {Toggle} from '../../store/redux/actions/productsActions.js'
import {useMySelectors} from '../../hooks/useMySelectors.js'
import { useDispatch } from 'react-redux';
import { PostInitData } from "../../APIs/APIsFunction.js";
import {CreateAcount} from '../../store/redux/actions/productsActions.js'

const LogInSnepit = () => {
    // *######### start Data Handling
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // *######### end Data Handling 
  // *######### start API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await registerUser(formData);
    //   setMessage(data.message);
    } catch (err) {
      setError(err.message);
    }
  };
  const {IsCreate} = useMySelectors()
  const dispatch = useDispatch()
  // *######### End API
  return (
    <div>
        <form className='flex-col  flex-center gap-5 ' onSubmit={handleSubmit}  >
            <input
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                className='input '
                />
            <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                className='input'
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {message && <p style={{ color: "green" }}>{message}</p>}
            <button className='btn' type="submit">Log in</button>
            <button className='btn' type="submit" onClick={() => dispatch(CreateAcount(!IsCreate))}>Create Acount</button>
        </form>
    </div>
  )
}

export default LogInSnepit