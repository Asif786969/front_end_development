package com.mongodbtest.mongopro.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor

@Document(collection="Books")
public class Book {
    @Id
    private String bookId;
    private String bookName;
    private double cost;
    private String author;
    private int rating;//should be 0-10
    
}
