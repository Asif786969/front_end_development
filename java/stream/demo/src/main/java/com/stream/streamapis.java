package com.stream;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.data.Student;
import com.data.StudentDatabase;

public class streamapis {
    public static void main(String[] args) {

        Map<String,List<String>> Studentmap=StudentDatabase.getAllStudents().stream().
        filter(null).collect(Collectors.toMap(Student::getName,Student::getActivities));
    }
}
