import {render,screen,cleanup} from '@testing-library/react'
import {expect, jest, test} from '@jest/globals';
import Welcome from "./Welcome";
import Title from './Title';
describe('Greeting component chcking ',()=>{//this is called suite and can contain multiple test cases
    afterEach(()=>{
        cleanup();
    })
    test('rendrering for test',()=>{
        //Arrange -> One of the trhee A's
        render(<Welcome/>);
        //Act 
        //.. nothing for this one
    
        //Assert
        const titleElement=screen.getByText('Welcome');
        console.log(titleElement);
        expect(titleElement.innerHTML).toEqual('Welcome');
    });

    test('rendres the title existence',()=>{
        //Arrange -> One of the trhee A's
        render(<Title title={'todos'}/>);
        //Act 
        //.. nothing for this one
    
        //Assert
        const titleElement=screen.getByText('Task List is todos');
        console.log(titleElement);
        expect(titleElement.innerHTML).toEqual('Task List is todos');
    });
})

