import { useSelector } from "react-redux";
import { selectIstoggle, selectMyData , selectIsCreate } from "../store/redux/selectors";

export const useMySelectors = () => {
    const Istoggle = useSelector(selectIstoggle);
    const myData = useSelector(selectMyData);
    // *Select Create Account Data *
    const IsCreate = useSelector(selectIsCreate);
    
    return { Istoggle, myData , IsCreate};
};

