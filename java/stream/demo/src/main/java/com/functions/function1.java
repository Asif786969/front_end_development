package com.functions;

import java.util.List;
import java.util.function.Consumer;

import com.data.Student;
import com.data.StudentDatabase;

public class function1 {
    public static void printName(){
        Consumer<Student> c2=(student)->{System.out.println(student);};
        List<Student> studentList=StudentDatabase.getAllStudents();
    }
}
