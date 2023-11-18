import { format,isValid, parseISO } from 'date-fns';


export const formatDate = (dateString) => {
  const date = parseISO(dateString); // Parse the date string
  if(isValid(date)){

      return format(date, 'dd MMM yy',new Date()); // Format the date as '11 Oct 23'
  }
  else {
    return "Invalid Date";
  }
};