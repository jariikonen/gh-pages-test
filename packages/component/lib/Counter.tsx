import { useCallback, useState } from "react";
import { Button } from "@mui/material";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback(() => {
    setCounter((previousValue) => previousValue + 1);
  }, []);

  return (
    <Button variant="outlined" type="button" onClick={incrementCounter}>
      count is {counter}
    </Button>
  );
}
