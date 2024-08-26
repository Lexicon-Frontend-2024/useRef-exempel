import { ReactElement, useState } from "react";

export function Counter(): ReactElement {
  // useState syntax => const [value, setValue] = useState<type>(initialValue)

  const [count, setCount] = useState<number>(8);

  const handleOnDecrement = () => {
    // This doesn't work, react doesnt' trigger a rerender here.
    // count--;
    // console.log(count);

    // The correct way is to use the update functions that is returned from useState.
    // There are two ways of using a set function.

    // Alternative 1 is to just pass a new value. Only used when the new state is independant of the old state.

    //Alternative 2 is to pass a callback function that gets acces to the previous value if you want to base your new value on the old one. Remember to return a new value from the callback function.
    setCount((previousValue) => previousValue - 1);
  };

  return (
    <div className="counter">
      <p>Counter</p>
      <div className="counter-wrapper">
        <button onClick={handleOnDecrement}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount((previousValue) => previousValue + 1)}>+</button>
      </div>
    </div>
  );
}