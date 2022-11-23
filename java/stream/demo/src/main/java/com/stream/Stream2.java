package com.stream;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Stream2 {
    public static void main(String[] args) {
        List<Integer> integerList=Arrays.asList(1,2,2,3,4,4,55,5,5,7);
    List<Integer> unique=new ArrayList<>();
    for(Integer i:integerList){
        if(!unique.contains(i)){
            unique.add(i);
        }
    }
    System.out.println(""+unique);


    System.out.println(integerList.stream().distinct().collect(Collectors.toList()));
    }
    //Declarative

    
}
