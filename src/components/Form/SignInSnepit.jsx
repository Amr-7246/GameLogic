import React , {useEffect , useState }  from 'react'
import {fetchInitData} from '../../APIs/APIsFunction.js'
import {Toggle} from '../../store/redux/actions/productsActions.js'
import {useMySelectors} from '../../hooks/useMySelectors.js'
import { useDispatch } from 'react-redux';
import { PostInitData } from "../../APIs/APIsFunction.js";
import {CreateAcount} from '../../store/redux/actions/productsActions.js'

const SignInSnepit = () => {
  // *######### start Data Handling
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData)
  // *######### end Data Handling 
  // *######### start API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await PostInitData(formData);
      // setMessage(data.message);
    } catch (err) {
      setError(err.message);
    }
  };
  const {IsCreate} = useMySelectors()
  const dispatch = useDispatch()
  // *######### End API
  return (
    <div>
        <form className='flex-col flex-center gap-5 ' onSubmit={handleSubmit}  >
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
            {error && <p className='w-[250px] text-center' style={{ color: "red" }}>{error}</p>}
            {message && <p style={{ color: "green" }}>{message}</p>}
            <button className='btn' type="submit">sign in</button>
            <button className='btn' onClick={() => dispatch(CreateAcount(!IsCreate))}>Aready Have acount</button>
      </form>    
    </div>
  )
}

export default SignInSnepit