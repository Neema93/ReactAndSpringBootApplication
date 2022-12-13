package com.todo.demo.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TodoResource {
   @Autowired
   private TodoHardCodedService service;

   @GetMapping("/Users/{username}/todos")
   public List<Todo> getAllTodos(@PathVariable String username) {
      return service.findAll();
   }
   @DeleteMapping("users/{name}/todos/{id}")
   public ResponseEntity<Void> deleteTodo(@PathVariable String name,@PathVariable long id){
     
      
      Todo todo = service.deleteById(id);

		if (todo != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
   }
}
