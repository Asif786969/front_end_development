package com.stream;

import java.util.stream.DoubleStream;
import java.util.stream.IntStream;
import java.util.stream.LongStream;

/**
 * Hello world!
 *
 */
public class  Stream1
{
    public static void main( String[] args )
    {
        int sum=0;
        for(int i=0;i<1000;i++){
            sum+=i;
        }
        //Declarative style
        System.out.println(sum);  
        System.out.println(IntStream.rangeClosed(0,1000-1).sum());
        System.out.print(LongStream.rangeClosed(-2000000000, 2000000000).parallel().sum());
        
        //you can use .parallel.sum as well for multithread 
        System.out.print(DoubleStream.range(1000000, 100000));
        DoubleStream.o
    }
}
