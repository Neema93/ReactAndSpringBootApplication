package com.todo.demo.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import org.springframework.stereotype.Service;
@Service
public class TodoHardCodedService {
    private static List<Todo> todos = new ArrayList<>();
    private static long idCounter = 0;
    static{
        todos.add(new Todo(++idCounter,"Neema","Learn React",new Date(),false));
        todos.add(new Todo(++idCounter,"Neema","Raed Book",new Date(),false));
        todos.add(new Todo(++idCounter,"Neema","cook food",new Date(),false));
    }
    public List<Todo> findAll(){
        return todos;
    }
    public Todo deleteById(long id){
        Todo todo = findById(id);
System.out.println("todo");
		if (todo == null)
			return null;

		if (todos.remove(todo)) {
			return todo;
		}

		return null;
    }
    private Todo findById(long id) {
        for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}

		return null;
    }
}
