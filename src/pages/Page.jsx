import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos.js";

const Page =() => {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todos.todo);

    const {id} = useParams();
    const navigate = useNavigate();

    return(
        <container>
            <div>
                <header>
                    <div>ID :{todo.id} </div>
                    <button 
                    borderColor ="ddd"
                    onClick={()=> {
                        navigate("/");
                    }}>
                    이전으로
                    </button>
                </header>
                <title>{todo.title}</title>
                <body>{todo.body}</body>
            </div>
        </container>
    );

};

export default Page