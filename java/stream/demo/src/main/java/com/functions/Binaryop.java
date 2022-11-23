package com.functions;

import java.util.function.BinaryOperator;

public class Binaryop {
    public static void main(String[] args) {
        BinaryOperator<Integer> sample=(a,b)->a*b;
        System.out.println(sample.apply(2,3));
    }
}
