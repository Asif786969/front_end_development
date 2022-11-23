package com.stream;

import java.util.Comparator;

public class Stream3 {
    //LAMDBA
    public static void main(String[] args) {
        Comparator<Integer> cmp=new Comparator<Integer>() {

            @Override
            public int compare(Integer o1, Integer o2) {
                
                return o1.compareTo(o2);//return 0 if o1==o2 1->o1>o2 else -1 ;
            }

            
        };

        System.out.println(cmp.compare(2,3));

        //Declarive approach

        Comparator<Integer> cmpLamda=(Integer a,Integer b)->a.compareTo(b);
        System.out.println(cmpLamda.compare(12, 4));
    }
}
