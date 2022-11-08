package com.mongodbtest.mongopro.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mongodbtest.mongopro.bean.Book;


public interface repo extends MongoRepository<Book,String> {

    // List<Task> findByServerity(int severity);

    // List<Task> getTaskByAssignee(String assignee);
    
}
