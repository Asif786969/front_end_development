package com.mongodbtest.mongopro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mongodbtest.mongopro.bean.Book;
import com.mongodbtest.mongopro.service.Bookservice;


@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private Bookservice service;
    
    @GetMapping("/")
    public String App(){
        return "application running";

    }
    @GetMapping("/allbooks")
    public List<Book> getListOfAllBooks(){
        return service.getAllBooks();
    }
    @PostMapping("/addbook")
    public String addBook(@RequestBody Book book){
        service.addBook(book);
        return "Book Added";
    }
    @PostMapping("/deletebook")
    public String deleteParticularBook(@RequestBody String bookId){
        service.deleteBook(bookId);
        return "Book Deleted";
    }
}
