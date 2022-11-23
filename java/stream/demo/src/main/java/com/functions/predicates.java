package com.functions;

import java.util.List;
import java.util.function.Predicate;

import com.data.Student;
import com.data.StudentDatabase;

public class predicates {
    static Predicate<Student> Ps=(s)->s.getGradeLevel()>=3;
    public static void main(String[] args) {
        Predicate<Integer>p=(i)->{return i%2==0;};
        Predicate<Integer>p2=(i)->{return i%5==0;};

        
        System.out.println(p.test(12));
        //Predivate Chaining
        System.out.println(p.and(p2).test(10));


        List<Student> studentList=StudentDatabase.getAllStudents();
        for(Student student:studentList){
            if(Ps.test(student)){System.out.println(student);}
        }

    }
}
