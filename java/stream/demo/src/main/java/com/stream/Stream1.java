package com.stream;

import java.util.stream.IntStream;

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
        //you can use .parallel.sum as well for multithread 
    }
}
