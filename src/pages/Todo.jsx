import React, { useState, useEffect } from "react";
import TodoServices from "../services/TodoServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  const todoService = new TodoServices();

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const test = () => {
    todoService
      .getAllTodo()
      .then((response) => {
        setTodos(response.data);
      })
      .catch((exception) => {
        console.log(exception);
      });
  };
  useEffect(() => {
    test();
    // console.log('ali')
    // todoService
    //   .getAllTodo()
    //   .then((response) => {
    //     setTodos(response.data);
    //   })
    //   .catch((exception) => {
    //     console.log(exception);
    //   });
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("لطفا فیلد را پر کنید");
    } else {
      setIsLoading(true);
      const add = todoService
        .createTodo({
          title: inputValue,
        })
        .then((response) => {
          test();
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
      toast.promise(add, {
        pending: "در حال پردازش",
        success: "مورد با موفقیت اضافه شد 👌",
        error: "خطایی در سیستم به وجود اومده 🤯",
      });
    }
    setInputValue("");
  };

  const handleTodoDelete = (todoId) => {
    setIsLoading(true);
    const deleteItem = todoService
      .deleteTodo(todoId)
      .then((response) => {
        test();
      })
      .catch((exception) => {});
    toast.promise(deleteItem, {
      pending: "در حال پردازش",
      success: "مورد با موفقیت حذف شد 👌",
      error: "خطایی در سیستم به وجود اومده 🤯",
    });
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="w-ful mt-8 border p-8 my-16">
        <h1 className="text-3xl font-bold text-center mb-4">لیست کارها</h1>
        <form className="grid grid-cols-8 mb-4" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className=" rounded col-span-7 px-4 py-2 border mr-0text-gray-800 border-gray-200 bg-white"
            placeholder="اضافه کردن کار جدید ..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            disabled={isLoading}
            type="submit"
            className=" px-4 rounded mr-4 bg-green-500 text-white font-bold py-2  border-green-600 "
          >
            اضافه کردن
          </button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center py-2 border-b"
            >
              <span className="text-lg">{todo.title}</span>
              <button
                disabled={isLoading}
                className="bg-red-500 text-white font-bold py-2  border-red-800 px-4 py-2 rounded"
                onClick={() => handleTodoDelete(todo.id)}
              >
                حذف
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
