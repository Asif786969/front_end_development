package com.functions;

import java.util.function.*;

public class biconsumer {
    public static void main(String[] args) {
        BiConsumer<Integer,Integer> multiply=(a,b) -> {System.out.println(a*b);};
        multiply.accept(8,5);
        
    }
}
