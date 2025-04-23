// import { useEffect, useState } from 'react';
import { Box, Button, Container, Paper, Typography } from "@mui/material";

const productList = ["Product1", "Product2", "Product3"];

function App(){
  return(
    <Container>
      <Typography variant='h1' 
      sx={{ my:4, textAlign:"center", color:"primary.main"}}>Products
      </Typography>
      <Typography variant="h2">Collection</Typography>
      <Box sx={{ 
        display: "flex",
        pt: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        gap:4,
        }}>
      {productList.map((product) => (
        <Paper elevation={3}>
          <Box sx={{m:3}}>
          <Typography variant="h3">{product}</Typography>
          <Typography sx={{mt: 2}}>Cannons were used primarily as anti-infantry weapons until around 1374, when large cannons were recorded to have breached walls for the first time in Europe. Cannons featured prominently as siege weapons. In 1464 a 16,000 kg (35,000 lb) cannon known as the Great Turkish Bombard was created in the Ottoman Empire.</Typography>
          <Button variant="contained" sx={{mt:2}}>
            See details
          </Button>
          </Box>
        </Paper>
      ))}
      </Box>
    </Container>
  );
}

export default App;

// function App() {
//   const initialValues = {
//     username:"",
//     email:"",
//     password:""
//   };

//   const [formValues, setFormValues] = useState(initialValues);
//   const [Errors, setErrors] = useState({});
//   const [isSubmit, setIsSumit] = useState(false);

//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFormValues({...formValues, [name]: value});

//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors(validate(formValues));
//     setIsSumit(true);
//   };

//   useEffect(() => {
//     console.log(Errors);
//     if(Object.keys(Errors).length === 0 && isSubmit) {
//       console.log(formValues);
      
//     }
//   }, [Errors]);

//   const validate = (values) => {
//     const err ={}
//     const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       err.username = "Username required";
//     }
//     if (!values.email) {
//       err.email = "Email required";
//     } else if (!regex.test(values.email)){
//       err.email = "Not a valid email";
//     }
//     if (!values.password) {
//       err.password = "Password required";
//     } else if (values.password.length <4) {
//       err.password ="Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       err.password ="Password must not be more than 10 characters";
//     }
//     return err;
//   };

//   return (
//     <div className="container">
//       {Object.keys(Errors).length === 0 && isSubmit ? (
//         <div className="ui message success">Signed in successfully</div>
//       ) : (
//       <pre>{ JSON.stringify(formValues, undefined, 2)}</pre>
//       )}

//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <div className='ui divider'></div>
//         <div className='ui form'>
//           <div className='field'>
//             <label>Username</label>
//             <input type="text" name="username" placeholder="Username" value={formValues.username} onChange={handleChange} />
//           </div>
//           <p>{Errors.username}</p>
//           <div className='field'>
//             <label>Email</label>
//             <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
//             </div>
//             <p>{Errors.email}</p>
//           <div className='field'>
//             <label>Password</label>
//             <input type="password" name="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
//           </div>
//           <p>{Errors.password}</p>
//           <button className="fluid ui button blue">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;
