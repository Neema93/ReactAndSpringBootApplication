package com.todo.demo.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoResource {
   @Autowired
   private TodoHardCodedService service;
   @GetMapping("/Users/{username}/todos")
   public List<Todo> getAllTodos(@PathVariable String username) {
      return service.findAll();
   }
}
