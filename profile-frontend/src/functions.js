import Swal from "sweetalert2";
import axios from "axios";

export function showAlert(title,icon,focus=''){
    if(focus!=''){
        document.getElementById(focus).focus();
    }
    Swal.fire({
        title:title,
        icon:icon,
        customClass:{confirmButton:'btn btn-primary', popup:'animated zoomIn'},
        buttonsStyling:false
    });
}



    Swal.fire({
        title:title,
        icon:icon,
        customClass:{confirmButton:'btn btn-primary', popup:'animated zoomIn'},
        buttonsStyling:false
    });
}