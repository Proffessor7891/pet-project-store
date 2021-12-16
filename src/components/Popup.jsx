import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';


  
  export const popUp = ({ ...props }) => {
    const { type, message } = props;
    const notyf = new Notyf({
      duration: 1000,
      position: {
        x: "right",
        y: "bottom",
      },
      types: [
        {
          type: "warning",
          duration: 2000,
          background: "orange",
        },
        {
          type: "error",
          background: "indianred",
          duration: 2000,
          dismissible: true,
        },
        {
          type: "success",
          background: "#3dc664",
          duration: 2000,
          dismissible: true,
        },
      ],
    });
  
    notyf.open({
      type: type,
      message: message,
    });
  };
   
  
  
  