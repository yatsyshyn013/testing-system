// import { Formik, Field, withFormik } from 'formik';
// import * as yup from 'yup';
import {  FormComponent, AddContactBtn, ContactsField } from './ContactForm.styled';
import { toast } from 'react-toastify';
import { getContact } from '../../redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Icon from '@mui/material/Icon';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import ContactsIcon from '@mui/icons-material/Contacts';
// import Box from '@mui/material/Box';

  
    
export const ContactForm = () => {
   
    const contacts = useSelector(getContact);
    const dispatch = useDispatch();
    // const [field, meta, helpers] = useField();




      function handleSubmit(e) {
          e.preventDefault()
          const form = e.currentTarget;
        const isDuplicate = contacts.some( contact => contact.name.toLowerCase() === form.elements.name.value.toLowerCase())

        if (isDuplicate) {
            toast.error(`${form.elements.name.value} is already in contacts`);
            form.reset();
            return
            
        } else {

           dispatch(addContact({ name: form.elements.name.value.trim(), number: form.elements.number.value.trim() }));
            form.reset();
        }
    }

    

    return (
        
        <FormComponent action=""
            onSubmit={handleSubmit}
        >
            <ContactsField type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                 helperText="Please enter contact name"
                id="outlined-basic"
                    label="Name"
                variant="outlined"
                
            
            />
            <ContactsField
                inputProps={{ inputMode: 'numeric', pattern: '[0-9/-]*' }}
                helperText="Please enter phone number"
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                id="outlined-basic"
                    label="Phone number"
                variant="outlined"
                
            />
            <AddContactBtn variant="contained" type="submit" size='small'>Add contact <PersonAddIcon size="small" style={{marginLeft: '5px', width: '20px'}}/></AddContactBtn>
        </FormComponent>
           
        
  
   )
} 



//---------------------------------------FORMIK-----------------------------------
// // ПОЧАТКОВІ ЗНАЧЕННЯ ДЛЯ FORMIK
//     const initialValues = {
//         name: '',
//         number: '',
//     }

//ВАЛІДАЦІЯ ДЛЯ FORMIK
// const schema = yup.object().shape({
//         name: yup.string().required(),
//         number: yup.string().required()
//   })

//ФУНКЦІЯ САБМІТ ДЛЯ FORMIK
    // function handleSubmit(values, {resetForm}) {
        
    //     const isDuplicate = contacts.some( contact => contact.name.toLowerCase() === values.name.toLowerCase())

    //     if (isDuplicate) {
    //         toast.error(`${values.name} is already in contacts`);
    //         resetForm();
    //         return
            
    //     } else {

    //        dispatch(addContact({ name: values.name.trim(), number: values.number.trim() }));
    //         resetForm();
    //     }
    // }




  //РОЗМІТКА ДЛЯ FORMIK
    //     <Formik
    //         initialValues={initialValues}
    //         onSubmit={handleSubmit}
    //         validationSchema={schema}
    //     >
    //       <FormComponent action="">
    //         <Label htmlFor="name">
    //                 <LabelText>Name</LabelText>
    //                 <Field 
    //                     type="text"
    //                     name="name"
    //                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //                     required
                        
    //                 >
    //                 </Field>
    //             </Label>
                
    //             <Label htmlFor="number">
    //                <LabelText>Phone number</LabelText> 
    //                 <Field
    //                         type="tel"
    //                         name="number"
    //                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //                         required
    //                     />
                    
    //                 </Label>
    //             {/* <ButtonForm type="submit">Add contact</ButtonForm> */}
    //             <Button variant="contained" type="submit">Add contact</Button>
    //         </FormComponent>
             
    //   </Formik>