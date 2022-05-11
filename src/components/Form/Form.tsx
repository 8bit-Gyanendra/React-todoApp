import React, { FormEvent, FunctionComponent as FC, useState } from 'react'
import { toEditorSettings } from 'typescript';
import TODOI from '../../Interfaces/TodoUnterface';


interface Props{
    addTodo(todo: string): void;
}

const Form: FC<Props> = ({ addTodo}) => {

    const [todo, setTodo] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!todo) return window.alert("Please enter todo Items");


        addTodo(todo);

        setTodo("");

    
    };

    return (
        <div className="col-md-8 mx-auto my-5">
            <form onSubmit={handleSubmit}>
                <div className='form-group rounded-0 d-flex'>
                    <input type="text" placeholder='Add To do...'
                        className='inputForm' 
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        />
                        <button type='submit' className='btn btn-primary'>Add Todo</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
