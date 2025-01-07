import { useState} from "react";

const useToggle = (status = true): [isShow: boolean, toggle: () => void] => {
  const [isShow, setIsShow] = useState(status)

  const toggle = () => setIsShow(!isShow)

  return [isShow, toggle]
}

export default useToggle