package com.stream;

import java.util.function.Consumer;

public class Functional {
    public static void main(String[] args) {
        Consumer<String> c1=s->System.out.println(s.toUpperCase());
        c1.accept("javat");
        
    }
}
