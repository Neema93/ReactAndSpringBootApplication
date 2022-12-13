package com.todo.demo.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TodoResource {
   @Autowired
   private TodoHardCodedService service;

   @GetMapping("/users/{username}/todos")
   public List<Todo> getAllTodos(@PathVariable String username) {
      return service.findAll();
   }

   @GetMapping("/users/{username}/todos/{id}")
   public Todo getTodos(@PathVariable String username, @PathVariable long id) {
      return service.findById(id);
   }

   @DeleteMapping("users/{name}/todos/{id}")
   public ResponseEntity<Void> deleteTodo(@PathVariable String name, @PathVariable long id) {

      Todo todo = service.deleteById(id);

      if (todo != null) {
         return ResponseEntity.noContent().build();
      }

      return ResponseEntity.notFound().build();
   }

   @PutMapping("users/{name}/todos/{id}")
   public ResponseEntity<Todo> updateTodo(@PathVariable String name, @PathVariable long id, @RequestBody Todo todo) {
      Todo todoUpdated = service.save(todo);
      return new ResponseEntity<Todo>(todo, HttpStatus.OK);
   }
   @PostMapping("users/{name}/todos")
   public ResponseEntity<Void> saveTodo(@PathVariable String name, @RequestBody Todo todo) {
      Todo createdTodo = service.save(todo);
     URI uri= ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
      return  ResponseEntity.created(uri).build();
   }
}
