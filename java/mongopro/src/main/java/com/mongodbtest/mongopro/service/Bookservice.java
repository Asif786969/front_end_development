package com.mongodbtest.mongopro.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.task.TaskRejectedException;
import org.springframework.stereotype.Service;

import com.mongodbtest.mongopro.bean.Book;
import com.mongodbtest.mongopro.repository.repo;

@Service
public class Bookservice {
    
    @Autowired
    private repo repository;
    //CRUD

    
    public Book addBook(Book book){
        book.setBookId(UUID.randomUUID().toString().split("-")[0]);
        return repository.save(book);
    }

    public List<Book> getAllBooks(){
        return repository.findAll();
    }

    public Book getBookById(String bookId){
        return repository.findById(bookId).get();
    }
    public String deleteBook(String bookId){
        repository.deleteById(bookId);
        return "Book deleted";
        
    }
    
}

