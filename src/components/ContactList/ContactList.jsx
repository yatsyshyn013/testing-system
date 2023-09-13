import { List, ListItem } from "./ContactList.styled"
import { getTests, getFilter } from '../../redux/tests/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTests } from "../../redux/tests/operations";

// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';




export function ContactList() {

    const tests = useSelector(getTests);


    const filtered = useSelector(getFilter)
    const dispatch = useDispatch();

  


       const getFilteredContacts = () => {
           const normalizeFilter = filtered.toLowerCase();
           
        return tests.filter(test => test.testName.toLowerCase().includes(normalizeFilter));
  }

    return (
        <List>

            {getFilteredContacts().map(({ _id, testName, test }) => 
                 (
                
                <ListItem key={_id}>{testName}: {test.length} questions
                    {/* <ContactListBtn type="button" onClick={() => dispatch(deleteContact(id))}>Delete</ContactListBtn> */}
                    {/* <Button variant="contained" type="button" onClick={() => dispatch(deleteContact(id))} startIcon={<DeleteIcon />}>Delete</Button> */}
                    <IconButton aria-label="delete"
                        variant="contained"
                        type="button"
                        onClick={() => dispatch(deleteTests(_id))}
                        size="small"
                    
                    > 
                        <DeleteIcon fontSize="inherit"/>
                     </IconButton>
                    </ListItem>
                    
                
                )
            )}
           
        </List>
    )
}

