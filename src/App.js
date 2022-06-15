import React, { useState } from "react";
import "./App.css";
import { getUsers } from "./action";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function App() {
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.users.users);
  // console.log(users);
  const loading = useSelector((state)=>state.users.loading);
  // console.log(loading);
  const error = useSelector((state)=>state.users.error);
  
  const[input, setInput] = useState('');
  
  useEffect(()=>{
    dispatch(getUsers())
  },[])


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <div className="App">
    <h1>Redux saga with fetch api call</h1>
    {loading && <h2>Loading...</h2>}
    {error && !loading && <h2>{error}</h2>}
    <form style={{marginTop:'5px'}} onSubmit={(e) => {
      e.preventDefault();
      dispatch(getUsers(input));
      setInput('');
    }}>
      <TextField id="outlined-basic" label="Search" variant="outlined" style={{borderRadius:'10px'}} value={input} onChange={(e) => setInput(e.target.value)} />
      <Button type="submit" variant="contained"  endIcon={<SendIcon />} style={{width: '140px', height:'56px', marginLeft:'10px',marginBottom:'5px'}}>Search</Button>
    </form>

    <TableContainer sx={{  minWidth: 700 }} align="center"component={Paper}>
      <Table sx={{  maxWidth: 1000 }}  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* {users && users.map((user, i) => <h1 key={i}>{user.id},{user.name}</h1>)} */}



  </div>
  )
}

export default App


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <div className="Age-label">
//           your age: <span>{this.props.age}</span>
//         </div>
//         <button onClick={this.props.onAgeUp}>Age UP</button>
//         <button onClick={this.props.onAgeDown}>Age Down</button> */}

//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     age: state.age
//   };
// };

// const mapDispachToProps = dispatch => {
//   return {
//     onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
//     onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispachToProps
// )(App);