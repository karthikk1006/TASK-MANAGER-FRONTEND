import { Box, Center, VStack } from '@chakra-ui/react';
import { StackDivider} from '@chakra-ui/react';
import React from 'react';
import {DeleteIcon,EditIcon} from "@chakra-ui/icons"
import { Link } from 'react-router-dom';


function Tasks(props){
    let taskslist=[]
    for (const task of props.arr) {
         const taskid="/changebox/"+task._id

        if(!task.completed){
        taskslist.push(<Box h="40px" bg="green.400" borderRadius="10" boxShadow="xl" width="70vw" display="flex" justifyContent="space-between">

            <Box>
            {task.name}
            </Box>
        <Box>
           <Link to={taskid}><EditIcon w={5} h={5}/></Link>
        </Box>
        </Box>)}
        else{
            taskslist.push(<Box h="40px" bg="gray.500" borderRadius="10" boxShadow="xl" width="70vw" display="flex" justifyContent="space-between" textDecoration="line-through">

            <Box>
            {task.name}
            </Box>
        <Box>
        <Link to={taskid}><EditIcon w={5} h={5}/></Link>
        </Box>
        </Box>)

        }
        
    }

    return(
    <VStack
    marginBlockStart="20px"
    divider={<StackDivider borderColor="gray.200" />}
    spacing={2}
    >
        {taskslist}
    </VStack>
    );


}
export default Tasks