import { ListItem } from "./TestList.styled";

import { useDispatch } from "react-redux";
import { deleteTests } from "../../redux/tests/operations";
import { StyledLinks } from "../SharedLayout/SharedLayout.styled";

// import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export function TestList({ testItem }) {
  // const tests = useSelector(getTests);
  // console.log(testItem);

  // const filtered = useSelector(getFilter);
  const dispatch = useDispatch();

  // const getFilteredContacts = () => {
  //   const normalizeFilter = filtered.toLowerCase();

  //   return tests.filter((test) =>
  //     test.testName.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledLinks to={`${testItem._id}`}>
        <ListItem>
          {testItem.testName}: {testItem.test.length} questions
        </ListItem>
      </StyledLinks>

      <IconButton
        aria-label="delete"
        variant="contained"
        type="button"
        onClick={() => dispatch(deleteTests(testItem._id))}
        size="small"
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
}
