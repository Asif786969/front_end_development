package com.functions;
import java.util.function.*;
public class Interface {
    static Function<String,String> change=(s)->s.toUpperCase();
    static Function<String,String> change2=(s)->s.toLowerCase();

    public static void main(String[] args) {
        System.out.println(change.andThen(change2).apply("asdif"));
        
    }
}
