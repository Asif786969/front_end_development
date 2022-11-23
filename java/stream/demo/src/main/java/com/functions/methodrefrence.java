package com.functions;

import java.util.function.Function;

public class methodrefrence {
    static Function<String,String> met=String::toUpperCase;
    public static void main(String[] args) {
        System.out.println(met.apply("sde"));
    }
}
