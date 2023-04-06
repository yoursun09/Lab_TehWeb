import {useState} from "react";
import './input.css'

export default  function InputWithButton() {
    // state pentru valorile introduse în input-uri
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    // funcția care va fi apelată când butonul este apăsat
    function handleSubmit() {
        alert(`Astăzi este ${value1} ${value2}, anul ${value3}`);
        setValue1('');
        setValue2('');
        setValue3('');
    }

    // const multiply = (x, y) => {
    //     return x*y;
    // }
    //
    // console.log(multiply(5, 2));
    // console.log(multiply(10, 13));


    return (
        <div>
            <input
                type="text"
                placeholder="Ziua"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
            />
            <input
                type="text"
                placeholder="Luna"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
            />
            <input
                type="text"
                placeholder="anul"
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
